import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Animated, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useThemeContext } from "../../context/theme";
import { useDhikrAudio } from "../../hooks/useDhikrAudio";
import { FontControl } from "../../component/FontControl";

// 🎨 UI
import { styles } from "../../styles/dhikrscreenstyle";
import { PlayerControls } from "../../component/PlayerControls";
import { HeaderSection } from "./HeaderSection";
import { DuaListSection } from "./DuaListSection";

// 🌍 Language Mode
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

export default function DhikrScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation();
  const { type } = params;

  const { isDark, toggleTheme, colors } = useThemeContext();
  const [languageMode, setLanguageMode] =
    useState<LanguageMode>("arabic");
  const [showFontControl, setShowFontControl] = useState(false);

  const {
    currentIndex,
    currentTime,
    duration,
    fontSize,
    isPlaying,
    playbackRate,
    showPlayer,
    currentDuaList, // 🔥 DB based list
    title,
    scrollY,
    setShowPlayer,
    setFontSize,
    playAudio,
    stopAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio(type);

  /* --------------------------------
     🌍 Translation List (FROM DB)
  ---------------------------------*/
  const translationList = useMemo(() => {
    if (languageMode === "arabic") return [];

    return currentDuaList.map(item => ({
      id: item.id,
      text:
        languageMode === "arabic_malayalam"
          ? item.malayalam
          : item.english,
    }));
  }, [languageMode, currentDuaList]);

  /* --------------------------------
     🌀 Header Animation
  ---------------------------------*/
  const animatedBg = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ["transparent", "transparent"],
    extrapolate: "clamp",
  });

  const headerAnimatedStyle = {
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 150],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: scrollY.interpolate({
      inputRange: [0, 80],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["left", "right", "bottom"]}
    >
      <StatusBar
        backgroundColor={isDark ? "#000" : "#fff"}
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      {/* 🕌 Header */}
      <HeaderSection
        navigation={navigation}
        textColor={colors.text}
        isDark={isDark}
        toggleTheme={toggleTheme}
        isPlaying={isPlaying}
        setShowPlayer={setShowPlayer}
        playAudio={playAudio}
        type={type}
        languageMode={languageMode}
        setLanguageMode={setLanguageMode}
        headerAnimatedStyle={headerAnimatedStyle}
        animatedBg={animatedBg}
        onFontPress={() => setShowFontControl(!showFontControl)}
      />

      {/* 📖 Dua List */}
      <DuaListSection
        currentDuaList={currentDuaList}   // Arabic always
        currentIndex={currentIndex ?? 0}
        fontSize={fontSize}
        languageMode={languageMode}
        malayalamList={translationList}   // Malayalam / English (DB)
        title={title}
        scrollY={scrollY}
      />

      {/* 🅰️ Font Control */}
      {showFontControl && (
        <Animated.View
          style={[
            localStyles.fontControlBox,
            isDark ? localStyles.darkBox : localStyles.lightBox,
          ]}
        >
          <FontControl
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            onClose={() => setShowFontControl(false)}
          />
        </Animated.View>
      )}

      {/* 🎧 Player */}
      {showPlayer && (
        <PlayerControls
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
          isPlaying={isPlaying}
          onPlayPause={playAudio}
          onStop={stopAudio}
          playbackRate={playbackRate}
          onChangeRate={onChangeRate}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          onClose={() => setShowPlayer(false)}
        />
      )}
    </SafeAreaView>
  );
}

/* --------------------------------
   🎨 Local Styles
---------------------------------*/
const localStyles = StyleSheet.create({
  fontControlBox: {
    position: "absolute",
    top: 180,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    zIndex: 40,
  },
  darkBox: {
    backgroundColor: "#1e293b",
  },
  lightBox: {
    backgroundColor: "#f1f5f9",
  },
});
