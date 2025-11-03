import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRoute, useNavigation } from "@react-navigation/native";

import { PlayerControls } from "../../component/PlayerControls";
import { YoutubeButton } from "../../component/YoutubeButton";
import { WhatsappButton } from "../../component/WhatsappButton";
import { useDhikrAudio } from "./useDhikrAudio";
import { styles, localStyles } from "../../styles/dhikrscreenstyle";

import { duaMarichavarkMalayalam } from "../../data/duaMarichavarkMalayalam";
import { duaQabarMalayalam } from "../../data/duaQabarMalayalam";
import { haddadMalayalam } from "../../data/haddadMalayalam";

// ✅ Text Styles
const textStyle = {
  arabic: {
    textAlign: "center" as const,
    fontFamily: "ScheherazadeNew-Regular",
  },
  malayalam: {
    textAlign: "center" as const,
    color: "#d1d5db",
    fontFamily: "NotoSansMalayalam-Regular",
    marginTop: 6,
  },
};

// ✅ Language Toggle Styles
const langStyles = StyleSheet.create({
  toggleColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 8,
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  toggleText: {
    fontSize: 16,
    marginLeft: 4,
  },
  activeText: {
    color: "#22c55e",
  },
  inactiveText: {
    color: "#9ca3af",
  },
});

const HeaderTitle = ({ text }: { text: string }) => (
  <View style={localStyles.headerTitleContainer}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default function DhikrScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation();
  const { type } = params;

  // ✅ Default: Arabic
  const [languageMode, setLanguageMode] = useState<"arabic" | "malayalam">(
    "arabic"
  );

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

  const renderDuaItem = useCallback(
    ({ item }: { item: typeof currentDuaList[0] }) => {
      const malItem = malayalamList.find((m) => m.id === item.id);
      return (
        <View
          style={[
            styles.textContainer,
            currentIndex === item.id && styles.activeTextContainer,
          ]}
        >
          {/* ✅ Arabic always visible */}
          <Text
            style={[
              styles.text,
              currentIndex === item.id && styles.activeText,
              textStyle.arabic,
              { fontSize, lineHeight: fontSize * 1.5 },
            ]}
          >
            {item.text}
          </Text>

          {/* ✅ Malayalam visible only when chosen */}
          {languageMode === "malayalam" && malItem && (
            <Text
              style={[
                textStyle.malayalam,
                { fontSize: fontSize * 0.75, lineHeight: fontSize },
              ]}
            >
              {malItem.text}
            </Text>
          )}
        </View>
      );
    },
    [currentIndex, fontSize, languageMode, malayalamList]
  );

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {/* ✅ Animated Header */}
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

          {/* ✅ Language Toggle (Vertical list with checkmarks) */}
          <View style={langStyles.toggleColumn}>
            {["arabic", "malayalam"].map((mode) => (
              <TouchableOpacity
                key={mode}
                onPress={() => setLanguageMode(mode as any)}
                style={langStyles.toggleItem}
              >
                <Text
                  style={[
                    langStyles.toggleText,
                    languageMode === mode
                      ? langStyles.activeText
                      : langStyles.inactiveText,
                  ]}
                >
                  {languageMode === mode ? "✅ " : "☐ "}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={localStyles.gapStyle} />

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

      {/* ✅ Animated.FlatList */}
      <Animated.FlatList
        style={styles.fullFlex}
        contentContainerStyle={styles.flatListContent}
        data={currentDuaList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDuaItem}
        ListHeaderComponent={<HeaderTitle text={title} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />

      {/* ✅ Player Controls */}
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
