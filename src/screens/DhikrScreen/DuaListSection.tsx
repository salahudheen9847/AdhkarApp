import React, { useCallback } from "react";
import { Animated, StyleSheet } from "react-native";
import { renderDuaItem, LanguageMode } from "./renderDuaItem";
import { useThemeContext } from "../../context/theme";

/* 🔹 Generic Dua Item */
type DuaItem = {
  id: number;
  isHeading?: boolean;   // ⭐⭐⭐ ADD THIS
  isBox?: boolean;
  text: string | string[];
  malayalam?: string | string[];
  english?: string | string[];
  start?: number;
  end?: number;
};


type Props = {
  currentDuaList: DuaItem[];
  currentIndex: number;
  fontSize: number;
  languageMode: LanguageMode;
  scrollY: Animated.Value;
};

export const DuaListSection: React.FC<Props> = ({
  currentDuaList,
  currentIndex,
  fontSize,
  languageMode,
  scrollY,
}) => {
  /* ✅ HOOK AT TOP (RULE SAFE) */
  const { colors } = useThemeContext();

  const renderItem = useCallback(
    ({ item }: { item: DuaItem }) =>
      renderDuaItem(
        item,
        currentIndex,
        fontSize,
        languageMode,
        colors.highlightBox, // 🔵 active highlight bg
        colors.accent,       // 🔵 divider color
        colors.text          // 📝 text color
      ),
    [
      currentIndex,
      fontSize,
      languageMode,
      colors.highlightBox,
      colors.accent,
      colors.text,
    ]
  );

  return (
    <Animated.FlatList
      style={localStyles.list}
      contentContainerStyle={localStyles.content}
      data={currentDuaList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      extraData={currentIndex}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false } // ⚠️ must be false for height/opacity usage
      )}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    />
  );
};

const localStyles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    paddingTop: 180,   // 🔝 header space
    paddingBottom: 140 // 🔽 player space
  },
});
