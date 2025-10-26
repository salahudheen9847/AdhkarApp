import React, { useState, useRef, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Sound from "react-native-sound";
import { adhkar } from "../data/adhkar";
import { haddad } from "../data/haddad";
import { duaQabar } from "../data/duaQabar"; // NEW
import { useRoute, useNavigation } from "@react-navigation/native";
import { PlayerControls } from "../component/PlayerControls";
import { styles } from "./style";

Sound.setCategory("Playback");

export default function DhikrScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { type } = route.params;

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fontSize, setFontSize] = useState(20);
  const [playbackRate, setPlaybackRate] = useState(1);

  const soundRef = useRef<Sound | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Support all three types
  const currentDuaList =
    type === "adhkar" ? adhkar :
    type === "haddad" ? haddad :
    duaQabar;

  const audioFileName =
    type === "adhkar" ? "adhkar_full.mp3" :
    type === "haddad" ? "haddad_full.mp3" :
    "dua_qabar_full.mp3"; // ensure this file exists in your bundle

  const playAudio = () => {
    if (soundRef.current && isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    if (!soundRef.current) {
      const sound = new Sound(audioFileName, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log("Error loading sound", error);
          return;
        }

        sound.setSpeed(playbackRate);
        setDuration(sound.getDuration());
        setIsPlaying(true);

        sound.play(() => {
          setIsPlaying(false);
          setCurrentIndex(null);
          setCurrentTime(0);
        });

        intervalRef.current = setInterval(() => {
          sound.getCurrentTime((seconds) => {
            setCurrentTime(seconds);
            const currentLine = currentDuaList.find(
              (a) => seconds >= a.start && seconds < a.end
            );
            if (currentLine) setCurrentIndex(currentLine.id);
          });
        }, 500);
      });

      soundRef.current = sound;
    } else {
      soundRef.current.setSpeed(playbackRate);
      soundRef.current.play(() => {
        setIsPlaying(false);
        setCurrentIndex(null);
        setCurrentTime(0);
      });
      setIsPlaying(true);
    }
  };

  const onSeek = (value: number) => {
    if (soundRef.current) {
      soundRef.current.setCurrentTime(value);
      setCurrentTime(value);
    }
  };

  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    if (soundRef.current) {
      const wasPlaying = isPlaying;
      soundRef.current.pause();
      soundRef.current.setSpeed(rate);
      if (wasPlaying) soundRef.current.play();
    }
  };

  useEffect(() => {
    return () => {
      if (soundRef.current) soundRef.current.stop(() => soundRef.current?.release());
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const renderDuaItem = ({ item }: { item: typeof adhkar[0] }) => (
    <View
      style={[
        styles.textContainer,
        currentIndex === item.id && styles.activeTextContainer,
      ]}
    >
      <Text
        style={[
          styles.text,
          currentIndex === item.id && styles.activeText,
          { fontSize, lineHeight: fontSize * 1.5 },
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <View style={styles.fullFlex}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          {type === "adhkar" ? "📿 الدعاء للميت" : type === "haddad" ? "📖 راتب الحداد" : "🕋 دعاء القبر"}
        </Text>

        <FlatList
          style={styles.fullFlex}
          contentContainerStyle={styles.flatListContent}
          data={currentDuaList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderDuaItem}
          getItemLayout={(data, index) => ({
            length: fontSize * 1.5 + 24,
            offset: (fontSize * 1.5 + 24) * index,
            index,
          })}
        />

        <PlayerControls
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
          isPlaying={isPlaying}
          onPlayPause={playAudio}
          playbackRate={playbackRate}
          onChangeRate={onChangeRate}
          fontSize={fontSize}
          onIncreaseFont={() => setFontSize((prev) => Math.min(prev + 1, 30))}
          onDecreaseFont={() => setFontSize((prev) => Math.max(prev - 1, 14))}
          style={styles.bottomControls}
        />
      </View>
    </SafeAreaView>
  );
}
