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

// 🎨 Theme Context
import { useThemeContext } from "../../context/theme";

// 🎧 Components & Hooks
import { PlayerControls } from "../../component/PlayerControls";
import { YoutubeButton } from "../../component/YoutubeButton";
import { WhatsappButton } from "../../component/WhatsappButton";
import { useDhikrAudio } from "../../hooks/useDhikrAudio";

// 🧾 Styles & Data
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

  // 🌙 Theme Context
  const { isDark, toggleTheme, colors } = useThemeContext();

  // 🌐 Language toggle state
  const [languageMode, setLanguageMode] = useState<
    "arabic" | "malayalam" | "expanded"
  >("arabic");

  // 🎧 Audio control hook
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

  // 🕋 Malayalam dua list
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

  // 🕌 Render dua item
  const renderItem = useCallback(
    ({ item }: { item: typeof currentDuaList[0] }) =>
      renderDuaItem(
        item,
        currentIndex ?? 0,
        fontSize,
        languageMode,
        malayalamList
      ),
    [currentIndex, fontSize, languageMode, malayalamList]
  );

  // 🎨 Theme colors
  const bgColor = colors.background;
  const textColor = colors.text;

  // 🧩 Header animation styles
  const headerAnimatedStyle = {
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
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: bgColor }]}
      edges={["left", "right", "bottom"]}
    >
      <StatusBar
        backgroundColor={isDark ? "#000" : "#fff"}
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      {/* 🔹 Header */}
      <Animated.View style={[localAnimated.headerBase, headerAnimatedStyle]}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.backText, { color: textColor }]}>← Back</Text>
        </TouchableOpacity>

        {/* 🔸 Header Buttons Row */}
        <View style={localStyles.headerButtonRow}>
          <YoutubeButton type={type} />
          <View style={localStyles.gapStyle} />
          <WhatsappButton />
          <View style={localStyles.gapStyle} />

          {/* 🌐 Language Toggle */}
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

          {/* 🌗 Theme Switch */}
          <TouchableOpacity onPress={toggleTheme}>
            <Icon
              name={isDark ? "wb-sunny" : "dark-mode"}
              size={28}
              color={isDark ? "#ffcc00" : "#222"}
            />
          </TouchableOpacity>

          <View style={localStyles.gapStyle} />

          {/* 🎧 Play Button */}
          <TouchableOpacity
            style={localStyles.playButton}
            onPress={() => {
              setShowPlayer(true);
              playAudio();
            }}
          >
            <Icon
              name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
              size={36}
              color={isPlaying ? "#16d044" : "#22c55e"}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* 📜 Dua List */}
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

      {/* 🎵 Player Controls */}
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

// 🧾 Local Animated Style
const localAnimated = StyleSheet.create({
  headerBase: {
    borderBottomWidth: 1,
  },
});
