import React from "react";
import { Animated, View } from "react-native";

import { headerStyles as styles } from "../../../styles/headerStyle";
import type { HeaderSectionProps } from "../types";

import HeaderLeft from "./HeaderLeft";
import HeaderCenterControls from "./HeaderCenterControls";
import { HeaderTitle } from "./HeaderTitle";
import { LanguageToggle } from "./LanguageToggle";

const HeaderSection: React.FC<HeaderSectionProps> = ({
  textColor,
  isDark,
  toggleTheme,
  isPlaying,
  setShowPlayer,
  title,
  languageMode,
  setLanguageMode,
  headerAnimatedStyle,
  onFontPress,
  onBack,
  playAudio,
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
      {/* 🔝 ROW 1 – BACK + LANGUAGE */}
      <View style={styles.topRow}>
        <HeaderLeft
          isDark={isDark}
          textColor={textColor}
          onBack={onBack}
        />

        <View style={styles.languageWrapper}>
          <LanguageToggle
            languageMode={languageMode}
            setLanguageMode={setLanguageMode}
          />
        </View>
      </View>

      {/* 🎯 ROW 2 – PLAY + ACTIONS */}
      <HeaderCenterControls
        isPlaying={isPlaying}
        setShowPlayer={setShowPlayer}
        playAudio={playAudio}
        textColor={textColor}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onFontPress={onFontPress}
      />

      {/* 🏷️ ROW 3 – TITLE */}
      <HeaderTitle title={title} textColor={textColor} />
    </Animated.View>
  );
};

export default HeaderSection;