import React, { memo, useRef, useMemo } from "react";
import { Text, TouchableOpacity, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

import { homeStyles as styles } from "./HomeStyles";
import { homeSectionStyles as local } from "./HomeSection.styles";
import { getHomeLabelText } from "../../data/labels";
import type { HomeLabelKey, AppLanguage } from "../../data/labels";

export type HomeItem = {
  id: string;
  originalId: string;
  icon: string;
  gradient?: readonly string[];
  isFavourite?: boolean;
};

const SAFE_GRADIENT: readonly string[] = ["#e5e7eb", "#d1d5db"];

export const HomeCard = memo(({ item, language, onPress, toggleFavourite }: {
  item: HomeItem;
  language: AppLanguage;
  onPress: (id: string) => void;
  toggleFavourite: (id: HomeLabelKey) => void;
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const iconScale = useRef(new Animated.Value(1)).current;

  const title = useMemo(() => {
    if (item.originalId === "dailyLifeDua") {
      return language === "malayalam" ? "അദ്‌കാറുകൾ" : language === "arabic" ? "أذكار اليومية" : "Daily Life Duas";
    }
    return getHomeLabelText(item.originalId as HomeLabelKey, language);
  }, [item.originalId, language]);

  const gradient = Array.isArray(item.gradient) && item.gradient.length >= 2 ? item.gradient : SAFE_GRADIENT;
  
  // Hide favorite star for home screen main category cards
  const isCategory = 
    ["dailyLifeDua", "dhikr", "familyDua", "healthDua", "justiceDuas", "kidsDua", 
     "mentalDua", "protectionCategory", "rizqDuas", "salahDuas", "swalathDuas", 
     "qaseeda", "ratib", "ramadan", "mayyitDuas", "moulid"].includes(item.originalId);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => onPress(item.originalId)} style={local.touchWrapper}>
      <Animated.View style={[local.cardWrapper, { transform: [{ scale }], opacity }]}>
        <LinearGradient colors={[...gradient]} style={[styles.card, local.cardShadow]}>
          <Animated.View style={{ transform: [{ scale: iconScale }] }}>
            <Ionicons name={item.icon} size={28} color="#000" />
          </Animated.View>

          <Text style={[styles.cardText, language === "malayalam" && local.cardTextMalayalam, language === "arabic" && local.cardTextArabic]} numberOfLines={2}>
            {title}
          </Text>

          {!isCategory && (
            <TouchableOpacity onPress={() => toggleFavourite(item.originalId as HomeLabelKey)} style={local.starIcon}>
              <Ionicons name={item.isFavourite ? "star" : "star-outline"} size={18} color={item.isFavourite ? "#facc15" : "#475569"} />
            </TouchableOpacity>
          )}
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
});