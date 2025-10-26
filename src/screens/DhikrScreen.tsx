import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import Sound from "react-native-sound";
import { adhkar } from "../data/adhkar";
import { haddad } from "../data/haddad";
import { useRoute, useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";

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

  const currentDuaList = type === "adhkar" ? adhkar : haddad;
  const audioFileName = type === "adhkar" ? "adhkar_full.mp3" : "haddad_full.mp3";

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

  useEffect(() => {
    return () => {
      if (soundRef.current) soundRef.current.stop(() => soundRef.current?.release());
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/919745525150?text=Assalamu%20Alaikum");
  };

  const renderDuaItem = ({ item }: { item: typeof adhkar[0] }) => (
    <View
      style={[
        styles.textContainer,
        currentIndex === item.id && styles.activeTextContainer,
      ]}
    >
      <Text style={[styles.text, currentIndex === item.id && styles.activeText, { fontSize, lineHeight: fontSize * 1.5 }]}>
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
          {type === "adhkar" ? "📿 الدعاء للميت" : "📖 راتب الحداد"}
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

        <View style={styles.bottomControls}>
          <LinearGradient colors={["#3f15c8ff", "#060212ff"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.playerCard}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={duration}
              value={currentTime}
              minimumTrackTintColor="#facc15"
              maximumTrackTintColor="#ddd"
              thumbTintColor="#e11d48"
              onSlidingComplete={onSeek}
            />

            <View style={styles.controls}>
              <Text style={styles.timeText}>
                {Math.floor(currentTime)}s / {Math.floor(duration)}s
              </Text>

              <TouchableOpacity onPress={playAudio} style={styles.playButton}>
                <Icon
                  name={isPlaying ? "stop-circle" : "play-circle-filled"}
                  size={32}
                  color={isPlaying ? "#fff" : "#07d559ff"}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.rateControls}>
              {[0.5, 1, 1.5, 2].map((rate) => (
                <TouchableOpacity
                  key={rate}
                  style={[styles.rateButton, playbackRate === rate && styles.activeRateButton]}
                  onPress={() => {
                    setPlaybackRate(rate);
                    if (soundRef.current) soundRef.current.setSpeed(rate);
                  }}
                >
                  <Text style={[styles.rateText, playbackRate === rate && styles.activeRateText]}>{rate}x</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.fontControls}>
                <TouchableOpacity style={styles.fontButton} onPress={() => setFontSize((prev) => Math.max(prev - 1, 14))}>
                  <Text style={styles.fontButtonText}>A-</Text>
                </TouchableOpacity>
                <Text style={styles.fontSizeDisplay}>{fontSize}px</Text>
                <TouchableOpacity style={styles.fontButton} onPress={() => setFontSize((prev) => Math.min(prev + 1, 30))}>
                  <Text style={styles.fontButtonText}>A+</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
                <FAIcon name="whatsapp" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#010101ff" },
  fullFlex: { flex: 1 },
  backButton: {
    margin: 15,
    backgroundColor: "#facc15",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  backText: { fontWeight: "700", color: "#1e293b", fontSize: 16 },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center", color: "#e52020ff", marginBottom: 15 },
  flatListContent: { paddingVertical: 20, paddingBottom: 220 },
  textContainer: {
    backgroundColor: "#e4e2edff",
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 12,
    elevation: 2,
  },
  activeTextContainer: { backgroundColor: "#fef3c7", borderColor: "#facc15", borderWidth: 1 },
  text: { fontSize: 20, lineHeight: 30, textAlign: "center", color: "#1e293b" },
  activeText: { color: "#e11d48", fontWeight: "600" },
  bottomControls: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 15, paddingBottom: 15 },
  playerCard: { borderRadius: 20, padding: 10, elevation: 5 },
  slider: { width: "100%", height: 30 },
  controls: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 6 },
  playButton: { justifyContent: "center", alignItems: "center" },
  timeText: { fontSize: 12, color: "#e5e7eb" },
  rateControls: { flexDirection: "row", justifyContent: "center", marginTop: 6 },
  rateButton: { backgroundColor: "#facc15", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginHorizontal: 4 },
  activeRateButton: { backgroundColor: "#e11d48" },
  rateText: { fontSize: 14, fontWeight: "700", color: "#1e293b" },
  activeRateText: { color: "#fff" },
  bottomRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 },
  fontControls: { flexDirection: "row", alignItems: "center" },
  fontButton: { backgroundColor: "#facc15", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginHorizontal: 5 },
  fontButtonText: { fontSize: 16, fontWeight: "700", color: "#1e293b" },
  fontSizeDisplay: { fontSize: 14, fontWeight: "600", color: "#b45309" },
  whatsappButton: { backgroundColor: "#25D366", padding: 8, borderRadius: 20, justifyContent: "center", alignItems: "center" },
});
