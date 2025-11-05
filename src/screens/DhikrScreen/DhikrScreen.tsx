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

import { useThemeContext } from "../../context/theme";
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

  const { isDark, toggleTheme, colors } = useThemeContext();
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
      renderDuaItem(
        item,
        currentIndex ?? 0,
        fontSize,
        languageMode,
        malayalamList
      ),
    [currentIndex, fontSize, languageMode, malayalamList]
  );

  const bgColor = colors.background;
  const textColor = colors.text;

  // 🔹 Background stays transparent when scrolled up
  const animatedBg = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ["transparent", "transparent"],
    extrapolate: "clamp",
  });

  // 🔹 Header slides up + fades out
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
      style={[styles.container, { backgroundColor: bgColor }]}
      edges={["left", "right", "bottom"]}
    >
      <StatusBar
        backgroundColor={isDark ? "#000" : "#fff"}
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      {/* 🔹 HEADER */}
      <Animated.View
        style={[
          localAnimated.headerBase,
          localAnimated.headerFixedPadding,
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: animatedBg,
          },
          headerAnimatedStyle,
        ]}
      >
        {/* 🔸 Row 1 */}
        <View style={localAnimated.row1}>
          <TouchableOpacity
            style={localAnimated.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={22} color={textColor} />
            <Text style={[localAnimated.backText, { color: textColor }]}>
              Back
            </Text>
          </TouchableOpacity>

          <View style={localAnimated.centerButtons}>
            <TouchableOpacity
              style={localStyles.playButtonContainer}
              activeOpacity={0.8}
              onPress={() => {
                setShowPlayer(true);
                playAudio();
              }}
            >
              <View
                style={[
                  localStyles.playButtonInner,
                  isPlaying
                    ? localAnimated.playingBg
                    : localAnimated.pausedBg,
                ]}
              >
                <Icon
                  name={isPlaying ? "pause" : "play-arrow"}
                  size={24}
                  color={isPlaying ? "#16a34a" : "#22c55e"}
                />
              </View>
            </TouchableOpacity>

            <View style={localAnimated.gap14} />
            <YoutubeButton type={type} />
            <View style={localAnimated.gap14} />
            <WhatsappButton />
          </View>
        </View>

        {/* 🔸 Row 2 */}
        <View style={localAnimated.row2}>
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
                style={[
                  langStyles.toggleItem,
                  langStyles.toggleItemIndented,
                ]}
              >
                <Text
                  style={[langStyles.toggleText, langStyles.activeText]}
                >
                  Malayalam
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity onPress={toggleTheme}>
            <Icon
              name={isDark ? "wb-sunny" : "dark-mode"}
              size={40}
              color={isDark ? "#ffcc00" : "#222"}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* 📜 DUA LIST */}
      <Animated.FlatList
        style={styles.fullFlex}
        contentContainerStyle={[
          styles.flatListContent,
          { paddingTop: 150 }, // header height
        ]}
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

      {/* 🎵 PLAYER */}
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

// 🎨 Local Animated Styles
const localAnimated = StyleSheet.create({
  headerBase: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingHorizontal: 10,
    paddingTop: 45,
  },
  headerFixedPadding: {
    paddingVertical: 8,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  centerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 20,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#374151",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  backText: {
    marginLeft: 6,
    fontSize: 16,
  },
  playingBg: { backgroundColor: "#16a34a20" },
  pausedBg: { backgroundColor: "#22c55e20" },
  gap14: { width: 14 },
});
