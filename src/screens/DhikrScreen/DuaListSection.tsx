import React, { useCallback } from "react";
import { Animated, StyleSheet } from "react-native";
import { renderDuaItem } from "./renderDuaItem";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

type Props = {
  currentDuaList: any[];
  currentIndex: number;
  fontSize: number;
  languageMode: LanguageMode;
  malayalamList: any[];
  scrollY: Animated.Value;
};

export const DuaListSection: React.FC<Props> = ({
  currentDuaList,
  currentIndex,
  fontSize,
  languageMode,
  malayalamList,
  scrollY,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: any }) =>
      renderDuaItem(
        item,
        currentIndex,
        fontSize,
        languageMode,
        malayalamList
      ),
    [currentIndex, fontSize, languageMode, malayalamList]
  );

  return (
    <Animated.FlatList
      style={localStyles.list}
      contentContainerStyle={localStyles.content}
      data={currentDuaList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListHeaderComponent={null}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    />
  );
};

/* ------------------------------
   🎨 Local Styles (ESLint Safe)
--------------------------------*/
const localStyles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    paddingTop: 180,     // ✅ HeaderSection height
    paddingBottom: 140, // ✅ PlayerControls space
  },
});
