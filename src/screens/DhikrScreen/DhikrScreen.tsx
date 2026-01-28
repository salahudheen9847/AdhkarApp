import React, { useState, useRef } from "react";
import {
  StatusBar,
  View,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useThemeContext } from "../../context/theme";
import { useDhikrAudio } from "../../hooks/useDhikrAudio";

import HeaderSection from "./components/HeaderSection";
import { DuaListSection } from "./components/DuaListSection";
import { PlayerControls } from "../../component/PlayerControls";
import { FontControl } from "../../component/FontControl";
import { styles as screenStyles } from "../../styles/dhikrscreenstyle";

import { useDhikrScreenLogic } from "./hooks/useDhikrScreenLogic";
import { localStyles } from "./styles/DhikrScreen.styles";

export default function DhikrScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { isDark, toggleTheme, colors } = useThemeContext();

  const [languageMode, setLanguageMode] = useState<
    "arabic" | "arabic_english" | "arabic_malayalam"
  >("arabic");
  const [showFontControl, setShowFontControl] = useState(false);

  /* 🟢 SCROLL ANIMATION SOURCE */
  const scrollY = useRef(new Animated.Value(0)).current;

  /* 🟢 HEADER ANIMATION STYLE */
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

  const { mode, audioType, headerType, headerTitle } =
    useDhikrScreenLogic(route, languageMode);

  const {
    currentIndex,
    currentTime,
    duration,
    fontSize,
    isPlaying,
    playbackRate,
    showPlayer,
    currentDuaList,
    setShowPlayer,
    setFontSize,
    playAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio({
    mode,
    type: audioType,
  });

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
        type={headerType}
        title={headerTitle}
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