import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Share,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { headerStyles as styles } from "../../../styles/headerStyle";
import { WhatsappButton } from "../../../component/WhatsappButton";

/* ✅ SINGLE SOURCE OF TRUTH */
import type { HomeLabelKey } from "../../../data/labels";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🔹 HEADER TYPE = HomeLabelKey (FIXED 🔥) */
export type HeaderType = HomeLabelKey;

/* 🔹 Props */
export type HeaderSectionProps = {
  textColor: string;
  isDark: boolean;
  toggleTheme: () => void;

  isPlaying: boolean;
  setShowPlayer: (val: boolean) => void;
  playAudio: () => void;

  type: HeaderType;
  title: string;

  languageMode: LanguageMode;
  setLanguageMode: React.Dispatch<
    React.SetStateAction<LanguageMode>
  >;

  headerAnimatedStyle: any;
  onFontPress: () => void;
  onBack: () => void;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({
  textColor,
  isDark,
  toggleTheme,
  isPlaying,
  setShowPlayer,
  playAudio,
  title,
  languageMode,
  setLanguageMode,
  headerAnimatedStyle,
  onFontPress,
  onBack,
}) => {
  const backColor = isDark ? textColor : "#ffffff";

  /* 📤 SHARE APP LINK */
  const onShareApp = async () => {
    try {
      await Share.share({
        message:
          "Adhkar App 📿\n\n" +
          "Download from Play Store:\n" +
          "https://play.google.com/store/apps/details?id=salahudheen.adhkar",
      });
    } catch (e) {
      console.log("Share error", e);
    }
  };

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
          {/* 🔙 BACK */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
          >
            <Icon name="arrow-back" size={22} color={backColor} />
            <Text style={[styles.backText, { color: backColor }]}>
              Back
            </Text>
          </TouchableOpacity>

          {/* ▶️ PLAY */}
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

        {/* 🔧 ACTIONS */}
        <View style={styles.rightGroup}>
          <TouchableOpacity onPress={onFontPress}>
            <Icon name="text-fields" size={30} color={textColor} />
          </TouchableOpacity>

          <WhatsappButton />

          <TouchableOpacity onPress={toggleTheme}>
            <Icon
              name={isDark ? "wb-sunny" : "dark-mode"}
              size={30}
              color={isDark ? "#ffcc00" : textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onShareApp}>
            <Icon name="share" size={28} color={textColor} />
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
        <TouchableOpacity
          style={[
            styles.languageBox,
            languageMode === "arabic" && styles.activeBox,
          ]}
          onPress={() => setLanguageMode("arabic")}
        >
          <Text style={styles.langText}>Arabic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.languageBox,
            languageMode === "arabic_malayalam" && styles.activeBox,
          ]}
          onPress={() => setLanguageMode("arabic_malayalam")}
        >
          <Text style={styles.langText}>Malayalam</Text>
        </TouchableOpacity>

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