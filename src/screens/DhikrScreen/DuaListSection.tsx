import React, { useCallback } from "react";
import { Animated, StyleSheet } from "react-native";
import { styles } from "../../styles/dhikrscreenstyle";
import { HeaderTitle } from "./HeaderTitle";
import { renderDuaItem } from "./renderDuaItem";

// ✅ SAME LanguageMode USED EVERYWHERE
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
  title: string;
  scrollY: Animated.Value;
};

export const DuaListSection: React.FC<Props> = ({
  currentDuaList,
  currentIndex,
  fontSize,
  languageMode,
  malayalamList,
  title,
  scrollY,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: any }) =>
      renderDuaItem(
        item,
        currentIndex ?? 0,
        fontSize,
        languageMode,
        malayalamList
      ),
    [currentIndex, fontSize, languageMode, malayalamList]
  );

  return (
    <Animated.FlatList
      style={styles.fullFlex}
      contentContainerStyle={[
        styles.flatListContent,
        localStyles.listPadding,
      ]}
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
  );
};

const localStyles = StyleSheet.create({
  listPadding: {
    paddingTop: 200,
  },
});
