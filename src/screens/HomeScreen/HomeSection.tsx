// HomeScreen/HomeSection.tsx

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { homeStyles as styles } from "../../styles/homeStyles";

import {
  HOME_LABELS,
  AppLanguage,
  HomeLabelKey,
} from "./HomeData";

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
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.9}
            onPress={() => onPress(item.id)}
          >
            <LinearGradient colors={item.gradient} style={styles.card}>
              <Image source={item.image} style={styles.icon} />
              <Text style={[styles.cardText, { color: colors.text }]}>
                {HOME_LABELS[item.id][language]}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
