// HomeScreen/HomeSectionEnhanced.tsx
// FINAL – TypeScript SAFE + ESLint SAFE + PERFORMANCE OPTIMIZED

import React, { memo, useRef, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { homeStyles as styles } from "../../styles/homeStyles";

/* ✅ DATA */
import { HOME_LABELS } from "./data/HomeData";

/* ✅ TYPES */
import type { AppLanguage, HomeLabelKey } from "./data/types";

/* ---------------- TYPES ---------------- */

type HomeItem = {
  id: HomeLabelKey;
  image: any;
  gradient: string[];
};

type Props = {
  title: string;
  items: HomeItem[];
  language: AppLanguage;
  colors: {
    text: string;
  };
  onPress: (id: HomeLabelKey) => void;
};

/* ---------------- Animated Card ---------------- */

const AnimatedCard = memo(function AnimatedCard({
  item,
  language,
  colors,
  onPress,
}: {
  item: HomeItem;
  language: AppLanguage;
  colors: { text: string };
  onPress: (id: HomeLabelKey) => void;
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const title = useMemo(() => {
    const label = HOME_LABELS[item.id];

    if (language === "arabic") return label.arabic;
    if (language === "english") return label.english;
    return label.malayalam;
  }, [language, item.id]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item.id)}
      onPressIn={() =>
        Animated.spring(scaleAnim, {
          toValue: 0.96,
          useNativeDriver: true,
        }).start()
      }
      onPressOut={() =>
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
        }).start()
      }
    >
      <Animated.View
        style={[
          local.cardWrapper,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <LinearGradient colors={item.gradient} style={styles.card}>
          <Image source={item.image} style={styles.icon} />

          <Text
            style={[
              styles.cardText,
              { color: colors.text },
              language === "malayalam" && local.cardTextMalayalam,
            ]}
            numberOfLines={3}
            ellipsizeMode="tail"
            allowFontScaling={false}
          >
            {title}
          </Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
});

/* ---------------- Section ---------------- */

export const HomeSection = memo(function HomeSection({
  title,
  items,
  language,
  colors,
  onPress,
}: Props) {
  if (items.length === 0) return null;

  return (
    <>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        {title}
      </Text>

      <View style={styles.innerGrid}>
        {items.map(item => (
          <AnimatedCard
            key={item.id}
            item={item}
            language={language}
            colors={colors}
            onPress={onPress}
          />
        ))}
      </View>
    </>
  );
});

/* ---------------- LOCAL STYLES ---------------- */

const local = StyleSheet.create({
  cardWrapper: {
    width: 160, // Malayalam wrapping correct
  },
  cardTextMalayalam: {
    lineHeight: 22,
  },
});
