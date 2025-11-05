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
      <Animated.View
  style={[
    localAnimated.headerBase,
    localAnimated.headerFixedPadding, // ✅ added instead of { paddingVertical: 8 }
    { backgroundColor: bgColor },
    headerAnimatedStyle,
  ]}
>
  {/* 🩵 Row 1 */}
  <View style={localAnimated.row1}>
    <TouchableOpacity
      style={localAnimated.backButton}
      onPress={() => navigation.goBack()}
    >
      <Icon name="arrow-back" size={22} color={textColor} />
      <Text style={[localAnimated.backText, { color: textColor }]}>Back</Text>
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
              : localAnimated.pausedBg, // ✅ replaced inline color
          ]}
        >
          <Icon
            name={isPlaying ? "pause" : "play-arrow"}
            size={24}
            color={isPlaying ? "#16a34a" : "#22c55e"}
            style={isPlaying ? localAnimated.iconPlaying : localAnimated.iconPaused} // ✅ replaced inline margin
          />
        </View>
      </TouchableOpacity>

      <View style={localAnimated.gap14} />
      <YoutubeButton type={type} />
      <View style={localAnimated.gap14} />
      <WhatsappButton />
    </View>
  </View>

  {/* 🩵 Row 2 */}
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
          {languageMode === "malayalam" ? "✅ Malayalam" : "☑ Arabic ▼"}
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


    <TouchableOpacity onPress={toggleTheme}>
      <Icon
        name={isDark ? "wb-sunny" : "dark-mode"}
        size={28}
        color={isDark ? "#ffcc00" : "#222"}
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
    borderBottomColor: "#333",
    paddingHorizontal: 10,
  },
  headerFixedPadding: {
    paddingVertical: 8,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  playingBg: {
    backgroundColor: "#16a34a20",
  },
  pausedBg: {
    backgroundColor: "#22c55e20",
  },
  iconPlaying: {
    marginLeft: 0,
  },
  iconPaused: {
    marginLeft: 2,
  },
  gap14: {
    width: 14,
  },
  gap20: {
    width: 20,
  },
});
