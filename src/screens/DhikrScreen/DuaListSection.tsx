import React, { useCallback } from "react";
import { Animated, StyleSheet } from "react-native";
import { renderDuaItem, LanguageMode } from "./renderDuaItem";
import { useThemeContext } from "../../context/theme";

type Props = {
  currentDuaList: any[];
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
  /* ✅ HOOK ALWAYS AT TOP */
  const { colors } = useThemeContext();

  const renderItem = useCallback(
    ({ item }: { item: any }) =>
      renderDuaItem(
        item,
        currentIndex,
        fontSize,
        languageMode,
        colors.highlightBox, // 🔵 active highlight bg
        colors.accent,       // 🔵 divider line color
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
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={renderItem}
      extraData={currentIndex}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    />
  );
};

const localStyles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    paddingTop: 180,
    paddingBottom: 140,
  },
});
