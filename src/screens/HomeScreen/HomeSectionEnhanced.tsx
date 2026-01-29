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
import type { HomeLabelKey } from "../../data/labels";
import type { AppLanguage } from "../../data/labels";

/* ---------------- TYPES ---------------- */

type HomeItem = {
  id: string;
  originalId: HomeLabelKey;
  icon: string;
  gradient?: readonly string[];
  isFavourite?: boolean; // ⭐
};

type Props = {
  title: string;
  items: HomeItem[];
  language: AppLanguage;
  colors: { text: string };
  onPress: (id: HomeLabelKey) => void;
  toggleFavourite: (id: HomeLabelKey) => void; // ⭐
};

/* ---------------- CONSTANTS ---------------- */

const SAFE_GRADIENT: readonly string[] = ["#e5e7eb", "#d1d5db"];

/* ---------------- CARD ---------------- */

const AnimatedCard = memo(function AnimatedCard({
  item,
  language,
  colors: _colors,
  onPress,
  toggleFavourite,
}: {
  item: HomeItem;
  language: AppLanguage;
  colors: { text: string };
  onPress: (id: HomeLabelKey) => void;
  toggleFavourite: (id: HomeLabelKey) => void; // ⭐
}) {
  /* 🔒 Hooks must be first */
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const iconScale = useRef(new Animated.Value(1)).current;

  const title = useMemo(() => {
    return item?.originalId
      ? getHomeLabelText(item.originalId, language)
      : "";
  }, [item?.originalId, language]);

  /* 🛡️ Guard */
  if (!item || !item.originalId) return null;

  const gradient =
    Array.isArray(item.gradient) && item.gradient.length >= 2
      ? item.gradient
      : SAFE_GRADIENT;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item.originalId)}
      onPressIn={() => {
        Animated.parallel([
          Animated.spring(scale, {
            toValue: 0.95,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.8,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.spring(iconScale, {
            toValue: 1.2,
            useNativeDriver: true,
          })
        ]).start();
      }}
      onPressOut={() => {
        Animated.parallel([
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.spring(iconScale, {
            toValue: 1,
            useNativeDriver: true,
          })
        ]).start();
      }}
      style={local.touchWrapper}
    >
      <Animated.View
        style={[
          local.cardWrapper, 
          { 
            transform: [{ scale }],
            opacity: opacity
          }
        ]}
      >
        <LinearGradient
          colors={[...gradient]}
          style={[
            styles.card,
            local.cardShadow,
            { shadowColor: gradient[0] },
          ]}
        >
          {/* 🔥 PREMIUM PROFESSIONAL ICON */}
          <Animated.View
            style={{
              transform: [{ scale: iconScale }]
            }}
          >
            <Ionicons
              name={item.icon}
              size={28}
              color="#000000"
              style={[
                local.icon,
                local.iconGlow,
                { shadowColor: gradient[0] },
              ]}
            />
          </Animated.View>

          {/* 📄 TITLE */}
          <Text
            style={[
              styles.cardText,
              language === "malayalam" && local.cardTextMalayalam,
            ]}
            numberOfLines={language === "malayalam" ? 2 : 2}
            ellipsizeMode="tail"
            adjustsFontSizeToFit
            minimumFontScale={0.85}
          >
            {title}
          </Text>

          {/* ⭐ STAR ICON */}
          <TouchableOpacity
            onPress={() => toggleFavourite(item.originalId)}
            style={local.starIcon}
            hitSlop={10}
          >
            <Ionicons
              name={item.isFavourite ? "star" : "star-outline"}
              size={18}
              color={item.isFavourite ? "#facc15" : "#475569"}
            />
          </TouchableOpacity>
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
  if (!items || items.length === 0) return null;

  return (
    <>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        {title}
      </Text>

      <View style={styles.innerGrid}>
        {items.map(item =>
          item ? (
            <AnimatedCard
              key={item.id}
              item={item}
              language={language}
              colors={colors}
              onPress={onPress}
              toggleFavourite={toggleFavourite}
            />
          ) : null
        )}
      </View>
    </>
  );
});

HomeSection.displayName = "HomeSection";