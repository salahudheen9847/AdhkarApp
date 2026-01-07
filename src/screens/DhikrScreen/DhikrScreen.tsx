import React, { useState } from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useThemeContext } from "../../context/theme";
import { useDhikrAudio } from "../../hooks/useDhikrAudio";

import HeaderSection from "./HeaderSection";
import { DuaListSection } from "./DuaListSection";
import { PlayerControls } from "../../component/PlayerControls";
import { FontControl } from "../../component/FontControl";
import { LanguageMode } from "./renderDuaItem";
import { styles as screenStyles } from "../../styles/dhikrscreenstyle";

export default function DhikrScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { isDark, toggleTheme, colors } = useThemeContext();

  const [languageMode, setLanguageMode] =
    useState<LanguageMode>("arabic");
  const [showFontControl, setShowFontControl] =
    useState(false);

  /* 🔒 SAFE TYPE — ✅ nariyathSwalath & salawatAlFatih ADDED */
  const type:
    | "duaMarichavark"
    | "duaQabar"
    | "haddad"
    | "asmaulHusna"
    | "nariyathSwalath"
    | "salawatAlFatih"
    | "ramadanAdhkar"
    | "thajuSwalath" =
    route.params?.type ?? "duaMarichavark";

  /* 🎧 AUDIO HOOK */
  const {
    currentIndex,
    currentTime,
    duration,
    fontSize,
    isPlaying,
    playbackRate,
    showPlayer,
    currentDuaList,
    scrollY,
    title,
    setShowPlayer,
    setFontSize,
    playAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio({
    mode: "dhikr",
    type,
  });

  /* 🌀 Header Animation */
  const headerAnimatedStyle = {
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [0, 120],
          outputRange: [0, -120],
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
      style={[
        screenStyles.container,
        localStyles.screen,
        { backgroundColor: colors.background },
      ]}
      edges={["top", "left", "right", "bottom"]}
    >
      <StatusBar
        backgroundColor={isDark ? "#000" : "#fff"}
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      {/* 🕌 HEADER */}
      <HeaderSection
        textColor={colors.text}
        isDark={isDark}
        toggleTheme={toggleTheme}
        isPlaying={isPlaying}
        setShowPlayer={setShowPlayer}
        playAudio={playAudio}
        type={type}
        title={title}
        languageMode={languageMode}
        setLanguageMode={setLanguageMode}
        headerAnimatedStyle={headerAnimatedStyle}
        onFontPress={() => setShowFontControl(!showFontControl)}
        onBack={() => navigation.goBack()}
      />

      {/* 🔠 FONT CONTROL */}
      {showFontControl && (
        <View style={localStyles.fontControlWrapper}>
          <FontControl
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            onClose={() => setShowFontControl(false)}
            textColor={colors.text}
            backgroundColor={colors.background}
          />
        </View>
      )}

      {/* 📖 CONTENT */}
      <DuaListSection
        currentDuaList={currentDuaList}
        currentIndex={currentIndex ?? 0}
        fontSize={fontSize}
        languageMode={languageMode}
        scrollY={scrollY}
      />

      {/* 🎧 PLAYER */}
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
        />
      )}
    </SafeAreaView>
  );
}

/* 🎨 Local Styles */
const localStyles = StyleSheet.create({
  screen: {
    position: "relative",
  },
  fontControlWrapper: {
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    zIndex: 9999,
    elevation: 20,
  },
});
