import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { YoutubeButton } from "../../component/YoutubeButton";
import { WhatsappButton } from "../../component/WhatsappButton";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🔹 Props TYPE */
export type HeaderSectionProps = {
  navigation: any;
  textColor: string;
  isDark: boolean;
  toggleTheme: () => void;
  isPlaying: boolean;
  setShowPlayer: (val: boolean) => void;
  playAudio: () => void;
  type:
    | "duaMarichavark"
    | "duaQabar"
    | "haddad"
    | "asmaulHusna"
    | "manqus";

  title: string;

  languageMode: LanguageMode;
  setLanguageMode: React.Dispatch<
    React.SetStateAction<LanguageMode>
  >;

  headerAnimatedStyle: any;
  onFontPress: () => void;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({
  navigation,
  textColor,
  isDark,
  toggleTheme,
  isPlaying,
  setShowPlayer,
  playAudio,
  type,
  title,
  languageMode,
  setLanguageMode,
  headerAnimatedStyle,
  onFontPress,
}) => {
  return (
    <Animated.View
      style={[
        styles.headerBase,
        styles.headerFixedPadding,
        styles.headerPosition,
        isDark ? styles.headerDark : styles.headerLight,
        headerAnimatedStyle,
      ]}
    >
      {/* 🔹 ROW 1 */}
      <View style={styles.row1}>
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

        <View style={styles.rightGroup}>
          <TouchableOpacity onPress={onFontPress}>
            <Icon name="text-fields" size={30} color={textColor} />
          </TouchableOpacity>

          <YoutubeButton type={type} />
          <WhatsappButton />

          <TouchableOpacity onPress={toggleTheme}>
            <Icon
              name={isDark ? "wb-sunny" : "dark-mode"}
              size={30}
              color={isDark ? "#ffcc00" : textColor}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🏷️ TITLE */}
      <View style={styles.titleWrapper}>
        <Text
          style={[styles.titleText, { color: textColor }]}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {/* 🌐 LANGUAGE SELECTOR */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.langRow}
      >
        {/* Arabic */}
        <TouchableOpacity
          style={[
            styles.languageBox,
            languageMode === "arabic" && styles.activeBox,
          ]}
          onPress={() => setLanguageMode("arabic")}
        >
          <Text style={styles.langText}>Arabic</Text>
        </TouchableOpacity>

        {/* Malayalam */}
        <TouchableOpacity
          style={[
            styles.languageBox,
            languageMode === "arabic_malayalam" && styles.activeBox,
          ]}
          onPress={() => setLanguageMode("arabic_malayalam")}
        >
          <Text style={styles.langText}>Malayalam</Text>
        </TouchableOpacity>

        {/* English */}
        <TouchableOpacity
          style={[
            styles.languageBox,
            languageMode === "arabic_english" && styles.activeBox,
          ]}
          onPress={() => setLanguageMode("arabic_english")}
        >
          <Text style={styles.langText}>English</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
};

export default HeaderSection;

/* 🎨 Styles */
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
    top: 0,
    left: 0,
    right: 0,
    height: 190,
    zIndex: 50,
    elevation: 20,
  },

  headerDark: {
    backgroundColor: "#000000ee",
  },
  headerLight: {
    backgroundColor: "#ffffffee",
  },

  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

  titleWrapper: {
    marginTop: 6,
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  /* 🌐 Language selector */
  langRow: {
    gap: 20,
    paddingVertical: 5,
  },
  languageBox: {
    minWidth: 110,
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 5,
    backgroundColor: "#1f2937",
    alignItems: "center",
  },
  activeBox: {
    borderWidth: 1,
    borderColor: "#22c55e",
  },
  langText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "500",
  },
});
