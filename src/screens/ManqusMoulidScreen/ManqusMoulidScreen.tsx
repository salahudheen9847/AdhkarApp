import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

// 🌗 Theme
import { useThemeContext } from "../../context/theme";

// 🔊 Audio Hook
import { useDhikrAudio } from "../../hooks/useDhikrAudio";

// 🎨 UI
import { styles } from "../../styles/dhikrscreenstyle";
import { PlayerControls } from "../../component/PlayerControls";
import { HeaderSection } from "../DhikrScreen/HeaderSection";
import { DuaListSection } from "../DhikrScreen/DuaListSection";
import { LanguageMode } from "../DhikrScreen/renderDuaItem";

export default function ManqusMoulidScreen() {
  const navigation = useNavigation<any>();
  const { isDark, toggleTheme, colors } = useThemeContext();

  // 🌍 Language state (REAL)
  const [languageMode, setLanguageMode] =
    useState<LanguageMode>("arabic");

  /* 🔥 MANQUS MODE AUDIO + DATA */
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
    stopAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio({
    mode: "manqus",
  });

  /* 🌀 HEADER ANIMATION (SAME AS DHIKR) */
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

  /* 🌍 Translation List */
  const translationList = currentDuaList.map(item => ({
    id: item.id,
    text:
      languageMode === "arabic_malayalam"
        ? item.malayalam
        : item.english,
  }));

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
        type="manqus"
        languageMode={languageMode}          // ✅ REAL STATE
        setLanguageMode={setLanguageMode}    // ✅ REAL SETTER
        headerAnimatedStyle={headerAnimatedStyle} // ✅
        animatedBg={animatedBg}                   // ✅
        onFontPress={() => {}}
      />

      {/* 📖 Manqus List */}
      <DuaListSection
        currentDuaList={currentDuaList}
        currentIndex={currentIndex ?? 0}
        fontSize={fontSize}
        languageMode={languageMode}          // ✅ SAME STATE
        malayalamList={translationList}
        title="മൻഖൂസ് മൗലിദ്"
        scrollY={scrollY}
      />

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
