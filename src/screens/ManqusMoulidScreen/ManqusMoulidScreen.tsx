import React, { useState, useMemo } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useThemeContext } from "../../context/theme";
import { useDhikrAudio } from "../../hooks/useDhikrAudio";

import { styles } from "../../styles/dhikrscreenstyle";
import { PlayerControls } from "../../component/PlayerControls";
import { FontControl } from "../../component/FontControl";
import HeaderSection from "../DhikrScreen/HeaderSection"; // ✅ DEFAULT
import { DuaListSection } from "../DhikrScreen/DuaListSection";
import { LanguageMode } from "../DhikrScreen/renderDuaItem";

export default function ManqusMoulidScreen() {
  /* 🔒 HOOKS */
  const navigation = useNavigation<any>();
  const { isDark, toggleTheme, colors } = useThemeContext();

  const [languageMode, setLanguageMode] =
    useState<LanguageMode>("arabic");

  const [showFontControl, setShowFontControl] =
    useState(false);

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
    setShowPlayer,
    setFontSize,
    playAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio({ mode: "manqus" });

  /* 🌍 TRANSLATIONS */
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

  /* 🔥 HEADER ANIMATION */
  const animatedBg = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: ["transparent", "transparent"],
    extrapolate: "clamp",
  });

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
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["left", "right", "bottom"]}
    >
      <StatusBar
        backgroundColor={isDark ? "#000" : "#fff"}
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      {/* 🕌 HEADER */}
      <HeaderSection
        navigation={navigation}
        textColor={colors.text}
        isDark={isDark}
        toggleTheme={toggleTheme}
        isPlaying={isPlaying}
        setShowPlayer={setShowPlayer}
        playAudio={playAudio}
        type="manqus"
        languageMode={languageMode}
        setLanguageMode={setLanguageMode}
        headerAnimatedStyle={headerAnimatedStyle}
        animatedBg={animatedBg}
        onFontPress={() =>
          setShowFontControl(prev => !prev)
        }
      />

      {/* 🔤 FONT CONTROL */}
      {showFontControl && (
        <FontControl
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          onClose={() => setShowFontControl(false)}
          textColor={colors.text}
          backgroundColor={colors.background}
        />
      )}

      {/* 📖 CONTENT */}
      <DuaListSection
        currentDuaList={currentDuaList}
        currentIndex={currentIndex ?? 0}
        fontSize={fontSize}
        languageMode={languageMode}
        malayalamList={translationList}
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
