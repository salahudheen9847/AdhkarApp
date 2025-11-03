import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRoute, useNavigation } from "@react-navigation/native";

import { PlayerControls } from "../../component/PlayerControls";
import { YoutubeButton } from "../../component/YoutubeButton";
import { WhatsappButton } from "../../component/WhatsappButton";
import { useDhikrAudio } from "../../hooks/useDhikrAudio";
import { styles, localStyles } from "../../styles/dhikrscreenstyle";
import { langStyles } from "../../styles/languageStyles";

import { duaMarichavarkMalayalam } from "../../data/duaMarichavarkMalayalam";
import { duaQabarMalayalam } from "../../data/duaQabarMalayalam";
import { haddadMalayalam } from "../../data/haddadMalayalam";

import { HeaderTitle } from "./HeaderTitle";
import { renderDuaItem } from "./renderDuaItem";

export default function DhikrScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation();
  const { type } = params;

  const [languageMode, setLanguageMode] = useState<
    "arabic" | "malayalam" | "expanded"
  >("arabic");

  const {
    currentIndex,
    currentTime,
    duration,
    fontSize,
    isPlaying,
    playbackRate,
    showPlayer,
    currentDuaList,
    title,
    scrollY,
    setShowPlayer,
    setFontSize,
    playAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio(type);

  const malayalamList = useMemo(() => {
    switch (type) {
      case "duaMarichavark":
        return duaMarichavarkMalayalam;
      case "duaQabar":
        return duaQabarMalayalam;
      case "haddad":
        return haddadMalayalam;
      default:
        return [];
    }
  }, [type]);

  const renderItem = useCallback(
    ({ item }: { item: typeof currentDuaList[0] }) =>
      renderDuaItem(item, currentIndex ?? 0,
 fontSize, languageMode, malayalamList),
    [currentIndex, fontSize, languageMode, malayalamList]
  );

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {/* Header */}
      <Animated.View
        style={[
          styles.headerRow,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -100],
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={localStyles.headerButtonRow}>
          <YoutubeButton type={type} />
          <View style={localStyles.gapStyle} />
          <WhatsappButton />
          <View style={localStyles.gapStyle} />

          {/* Language Toggle */}
          <View style={langStyles.toggleColumn}>
            <TouchableOpacity
              onPress={() =>
                setLanguageMode((prev) =>
                  prev === "expanded"
                    ? "arabic"
                    : prev === "malayalam"
                    ? "arabic"
                    : "expanded"
                )
              }
              style={langStyles.toggleItem}
            >
              <Text
                style={[
                  langStyles.toggleText,
                  languageMode === "arabic"
                    ? langStyles.activeText
                    : langStyles.inactiveText,
                ]}
              >
                {languageMode === "malayalam"
                  ? "✅ Malayalam"
                  : "☑ Arabic ▼"}
              </Text>
            </TouchableOpacity>

            {languageMode === "expanded" && (
              <TouchableOpacity
                onPress={() => setLanguageMode("malayalam")}
                style={[langStyles.toggleItem, langStyles.toggleItemIndented]}
              >
                <Text style={[langStyles.toggleText, langStyles.activeText]}>
                  Malayalam
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={localStyles.gapStyle} />

          {/* Play Button */}
          <TouchableOpacity
            style={localStyles.playButton}
            onPress={() => {
              setShowPlayer(true);
              playAudio();
            }}
          >
            <Icon
              name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
              size={35}
              color={isPlaying ? "#16d044ff" : "#22c55e"}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Dua List */}
      <Animated.FlatList
        style={styles.fullFlex}
        contentContainerStyle={styles.flatListContent}
        data={currentDuaList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={<HeaderTitle text={title} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />

      {showPlayer && (
        <PlayerControls
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
          isPlaying={isPlaying}
          onPlayPause={playAudio}
          playbackRate={playbackRate}
          onChangeRate={onChangeRate}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          onClose={() => setShowPlayer(false)}
          style={styles.bottomControls}
        />
      )}
    </SafeAreaView>
  );
}
