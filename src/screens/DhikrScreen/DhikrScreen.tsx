import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Animated, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useThemeContext } from "../../context/theme";
import { useDhikrAudio } from "../../hooks/useDhikrAudio";
import { FontControl } from "../../component/FontControl";

// 📚 Data Imports
import { duaMarichavarkMalayalam } from "../../data/duaMarichavarkMalayalam";
import { duaQabarMalayalam } from "../../data/duaQabarMalayalam";
import { haddadMalayalam } from "../../data/haddadMalayalam";
import { asmaulHusnaMalayalam } from "../../data/AsmaulHusnaMalayalam";

// 🎨 Components & Styles
import { styles } from "../../styles/dhikrscreenstyle";
import { PlayerControls } from "../../component/PlayerControls";
import { HeaderSection } from "./HeaderSection";
import { DuaListSection } from "./DuaListSection";

export default function DhikrScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation();
  const { type } = params;

  const { isDark, toggleTheme, colors } = useThemeContext();
  const [languageMode, setLanguageMode] = useState<
    "arabic" | "malayalam" | "expanded"
  >("arabic");
  const [showFontControl, setShowFontControl] = useState(false);

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
    stopAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio(type);

  // 🧿 Malayalam data selection
  const malayalamList = useMemo(() => {
    switch (type) {
      case "duaMarichavark":
        return duaMarichavarkMalayalam;
      case "duaQabar":
        return duaQabarMalayalam;
      case "haddad":
        return haddadMalayalam;
      case "asmaulHusna":
        return asmaulHusnaMalayalam;
      default:
        return [];
    }
  }, [type]);

  // 🌀 Animated header background + motion
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

      {/* 🕌 Header Section */}
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
        onFontPress={() => setShowFontControl(!showFontControl)} // 🅰️ Font icon toggle
      />

      {/* 📖 Dua List */}
      <DuaListSection
        currentDuaList={currentDuaList}
        currentIndex={currentIndex ?? 0}
        fontSize={fontSize}
        languageMode={languageMode}
        malayalamList={malayalamList}
        title={title}
        scrollY={scrollY}
      />

      {/* 🅰️ Font Control Panel */}
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

      {/* 🎧 Player Controls */}
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

// 🧾 Local StyleSheet to fix ESLint warning
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
