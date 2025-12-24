import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { YoutubeButton } from "../../component/YoutubeButton";
import { WhatsappButton } from "../../component/WhatsappButton";
import { LanguageToggle } from "./LanguageToggle";

// ✅ SAME LanguageMode AS DhikrScreen
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

// HeaderSection Props
type Props = {
  navigation: any;
  textColor: string;
  isDark: boolean;
  toggleTheme: () => void;
  isPlaying: boolean;
  setShowPlayer: (val: boolean) => void;
  playAudio: () => void;
  type: "duaMarichavark" | "duaQabar" | "haddad" | "asmaulHusna";
  languageMode: LanguageMode;
  setLanguageMode: React.Dispatch<React.SetStateAction<LanguageMode>>;
  headerAnimatedStyle: any;
  animatedBg: any;
  onFontPress: () => void;
};

export const HeaderSection: React.FC<Props> = ({
  navigation,
  textColor,
  isDark,
  toggleTheme,
  isPlaying,
  setShowPlayer,
  playAudio,
  type,
  languageMode,
  setLanguageMode,
  headerAnimatedStyle,
  animatedBg,
  onFontPress,
}) => {
  return (
    <Animated.View
      style={[
        styles.headerBase,
        styles.headerFixedPadding,
        styles.headerPosition,
        { backgroundColor: animatedBg },
        headerAnimatedStyle,
      ]}
    >
      {/* 🔹 Row 1 — Left and Right Sections */}
      <View style={styles.row1}>
        {/* 🔙 Left Side: Back + Play */}
        <View style={styles.leftGroup}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={22} color={textColor} />
            <Text style={[styles.backText, { color: textColor }]}>
              Back
            </Text>
          </TouchableOpacity>

          {/* ▶️ Play Button */}
          <TouchableOpacity
            style={styles.playButtonContainer}
            activeOpacity={0.8}
            onPress={() => {
              setShowPlayer(true);
              playAudio();
            }}
          >
            <View
              style={[
                styles.playButtonInner,
                isPlaying ? styles.playingBg : styles.pausedBg,
              ]}
            >
              <Icon
                name={isPlaying ? "pause" : "play-arrow"}
                size={46}
                color={isPlaying ? "#16a34a" : "#22c55e"}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* 🔸 Right Side */}
        <View style={styles.rightGroup}>
          {/* 🅰️ Font */}
          <TouchableOpacity onPress={onFontPress} style={styles.fontButton}>
            <Icon name="text-fields" size={30} color={textColor} />
          </TouchableOpacity>

          {/* 📺 YouTube */}
          <YoutubeButton type={type} />

          {/* 💬 WhatsApp */}
          <WhatsappButton />

          {/* 🌓 Theme */}
          <TouchableOpacity onPress={toggleTheme}>
            <Icon
              name={isDark ? "wb-sunny" : "dark-mode"}
              size={30}
              color={isDark ? "#ffcc00" : textColor}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🌐 Row 2 — Language Toggle */}
      <View style={styles.langRow}>
        <LanguageToggle
          languageMode={languageMode}
          setLanguageMode={setLanguageMode}
        />
      </View>
    </Animated.View>
  );
};

// 🔹 Styles (UNCHANGED)
const styles = StyleSheet.create({
  headerBase: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingHorizontal: 10,
    paddingTop:
      Platform.OS === "android"
        ? (StatusBar.currentHeight ?? 25) + 10
        : 45,
  },
  headerFixedPadding: {
    paddingVertical: 8,
  },
  headerPosition: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    height: 170,
    zIndex: 30,
    elevation: 10,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  rightGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
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
  playButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  playButtonInner: {
    width: 58,
    height: 58,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  playingBg: { backgroundColor: "#16a34a20" },
  pausedBg: { backgroundColor: "#27d66720" },
  fontButton: {
    marginRight: 4,
  },
  langRow: {
    alignItems: "center",
    marginTop: 8,
  },
});
