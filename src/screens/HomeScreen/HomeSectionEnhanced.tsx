// HomeScreen/HomeSectionEnhanced.tsx
// FINAL – TypeScript + ESLint SAFE

import React from "react";
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

import {
  HOME_LABELS,
  AppLanguage,
  HomeLabelKey,
} from "./HomeData";

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

function AnimatedCard({
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
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const title =
    language === "arabic"
      ? HOME_LABELS[item.id].arabic
      : language === "english"
      ? HOME_LABELS[item.id].english
      : HOME_LABELS[item.id].malayalam;

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
              language === "malayalam" &&
                local.cardTextMalayalam,
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
}

/* ---------------- Section ---------------- */

export function HomeSection({
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
}

/* ---------------- LOCAL STYLES ---------------- */

const local = StyleSheet.create({
  cardWrapper: {
    width: 160, // 🔥 critical for Malayalam wrapping
  },
  cardTextMalayalam: {
    lineHeight: 22,
  },
});
