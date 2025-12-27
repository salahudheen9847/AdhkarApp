import React, { useCallback } from "react";
import { Animated, StyleSheet } from "react-native";
import { renderDuaItem } from "./renderDuaItem";

export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

type Props = {
  currentDuaList: any[];
  currentIndex: number;
  fontSize: number;
  languageMode: LanguageMode;
  translationList: any[];
  scrollY: Animated.Value;
};

export const DuaListSection: React.FC<Props> = ({
  currentDuaList,
  currentIndex,
  fontSize,
  languageMode,
  translationList,
  scrollY,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: any }) =>
      renderDuaItem(
        item,
        currentIndex,
        fontSize,
        languageMode,
        translationList
      ),
    [currentIndex, fontSize, languageMode, translationList]
  );

  return (
    <Animated.FlatList
      style={localStyles.list}
      contentContainerStyle={localStyles.content}
      data={currentDuaList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      extraData={fontSize}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    />
  );
};

const localStyles = StyleSheet.create({
  list: { flex: 1 },
  content: {
    paddingTop: 180,
    paddingBottom: 140,
  },
});
