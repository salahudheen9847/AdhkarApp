import React, { memo } from "react";
import { View, Text } from "react-native";
import { homeStyles as styles } from "./HomeStyles";
import { HomeCard, HomeItem } from "./HomeCard";
import { shouldHideTitle } from "./SectionUtils";
import type { HomeLabelKey, AppLanguage } from "../../data/labels";

type Props = {
  title: string;
  items: HomeItem[];
  language: AppLanguage;
  colors: { text: string };
  onPress: (id: string) => void;
  toggleFavourite: (id: HomeLabelKey) => void;
};

export const HomeSection = memo(({ title, items, language, colors, onPress, toggleFavourite }: Props) => {
  if (!items?.length) return null;

  const hideTitle = shouldHideTitle(items);

  return (
    <>
      {!hideTitle && (
        <View style={styles.headingCard}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            {title}
          </Text>
        </View>
      )}

      <View style={styles.innerGrid}>
        {items.map(item => (
          <HomeCard
            key={item.id}
            item={item}
            language={language}
            onPress={onPress}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </View>
    </>
  );
});

HomeSection.displayName = "HomeSection";