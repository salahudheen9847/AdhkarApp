import React, { memo, useRef, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

import { homeStyles as styles } from "./HomeStyles";
import { homeSectionStyles as local } from "./HomeSection.styles";

import { getHomeLabelText } from "../../data/labels";
import type { HomeLabelKey, AppLanguage } from "../../data/labels";

/* ---------------- TYPES ---------------- */

export type HomeItem = {
  id: string;
  originalId: string; // category + content
  icon: string;
  gradient?: readonly string[];
  isFavourite?: boolean;
};

type Props = {
  title: string;
  items: HomeItem[];
  language: AppLanguage;
  colors: { text: string };
  onPress: (id: string) => void;
  toggleFavourite: (id: HomeLabelKey) => void;
};

/* ---------------- CONSTANTS ---------------- */

const SAFE_GRADIENT: readonly string[] = ["#e5e7eb", "#d1d5db"];

/* ---------------- CARD ---------------- */

const AnimatedCard = memo(function AnimatedCard({
  item,
  language,
  onPress,
  toggleFavourite,
}: {
  item: HomeItem;
  language: AppLanguage;
  onPress: (id: string) => void;
  toggleFavourite: (id: HomeLabelKey) => void;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const iconScale = useRef(new Animated.Value(1)).current;

  const title = useMemo(() => {
    if (item.originalId === "dailyLifeDua") {
      return language === "malayalam"
        ? "ദൈനംദിന ജീവിത ദുആകൾ"
        : "Daily Life Duas";
    }

    return getHomeLabelText(item.originalId as HomeLabelKey, language);
  }, [item.originalId, language]);

  const gradient =
    Array.isArray(item.gradient) && item.gradient.length >= 2
      ? item.gradient
      : SAFE_GRADIENT;

  const isCategory = item.originalId === "dailyLifeDua";

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item.originalId)}
      style={local.touchWrapper}
    >
      <Animated.View
        style={[
          local.cardWrapper,
          { transform: [{ scale }], opacity },
        ]}
      >
        <LinearGradient
          colors={[...gradient]}
          style={[styles.card, local.cardShadow]}
        >
          {/* ICON */}
          <Animated.View style={{ transform: [{ scale: iconScale }] }}>
            <Ionicons name={item.icon} size={28} color="#000" />
          </Animated.View>

          {/* TITLE */}
          <Text
            style={[
              styles.cardText,
              language === "malayalam" && local.cardTextMalayalam,
              language === "arabic" && local.cardTextArabic,
            ]}
            numberOfLines={2}
          >
            {title}
          </Text>

          {/* ⭐ Favourite only for CONTENT */}
          {!isCategory && (
            <TouchableOpacity
              onPress={() =>
                toggleFavourite(item.originalId as HomeLabelKey)
              }
              style={local.starIcon}
            >
              <Ionicons
                name={item.isFavourite ? "star" : "star-outline"}
                size={18}
                color={item.isFavourite ? "#facc15" : "#475569"}
              />
            </TouchableOpacity>
          )}
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
});

AnimatedCard.displayName = "AnimatedCard";

/* ---------------- SECTION ---------------- */

export const HomeSection = memo(function HomeSection({
  title,
  items,
  language,
  colors,
  onPress,
  toggleFavourite,
}: Props) {
  if (!items?.length) return null;

  // hide heading only for Daily Life main card
  const hideTitle =
    items.length === 1 &&
    items[0].originalId === "dailyLifeDua";

  return (
    <>
      {!hideTitle && (
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {title}
        </Text>
      )}

      <View style={styles.innerGrid}>
        {items.map(item => (
          <AnimatedCard
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
