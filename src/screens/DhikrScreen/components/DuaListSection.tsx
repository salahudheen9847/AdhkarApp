import React, { useCallback } from "react";
import { Animated, StyleSheet } from "react-native";
import { useThemeContext } from "../../../context/theme";

import { renderDuaItem } from "./renderDuaItem";
import type { DuaItem, LanguageMode } from "../types";

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
  const { colors } = useThemeContext();

  const renderItem = useCallback(
    ({ item }: { item: DuaItem }) =>
      renderDuaItem(
        item,
        currentIndex,
        fontSize,
        languageMode,
        colors.highlightBox,
        colors.accent,
        colors.text
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
      style={styles.list}
      contentContainerStyle={styles.content}
      data={currentDuaList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  content: {
    paddingTop: 240, // ✅ header height + spacing
    paddingBottom: 140,
  },
});