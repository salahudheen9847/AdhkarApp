import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { HOME_LABELS } from "../data/HomeData";
import { HomeLabelKey } from "../data/types";
import { homeStyles as styles } from "../HomeStyles";
import { Language } from "../hooks/useHomeLogic";

/* ---------------- TYPES ---------------- */

interface HomeItem {
  key: HomeLabelKey;
  emoji: string;
}

interface Props {
  items: HomeItem[];
  language: Language;
  toggleFavourite: (key: HomeLabelKey) => void;
  favourite?: boolean;
}

/* ---------------- COMPONENT ---------------- */

export const HomeGrid: React.FC<Props> = ({
  items,
  language,
  toggleFavourite,
  favourite = false,
}) => {
  const navigation = useNavigation<any>();

  const handlePress = (key: HomeLabelKey) => {
    // 🔥 Bader Moulid → Dedicated Screen
    if (key === "baderMoulid") {
      navigation.navigate("BaderMoulid");
      return;
    }

    // 🔥 Manqus Moulid → Dedicated Screen
    if (key === "manqusMoulid") {
      navigation.navigate("ManqusMoulid");
      return;
    }

    // 🔥 Qaseeda → Dhikr screen (qaseeda mode)
    if (key === "qaseedathulBurda") {
      navigation.navigate("Dhikr", {
        mode: "qaseeda",
      });
      return;
    }

    // 🟢 Default dhikr (all other duas)
    navigation.navigate("Dhikr", {
      mode: "dhikr",
      type: key,
    });
  };

  return (
    <View style={styles.innerGrid}>
      {items.map((item) => {
        const label = HOME_LABELS[item.key];

        return (
          <TouchableOpacity
            key={item.key}
            style={styles.card}
            onPress={() => handlePress(item.key)}
          >
            {/* ⭐ Favourite Icon */}
            <TouchableOpacity
              style={styles.favIcon}
              onPress={() => toggleFavourite(item.key)}
            >
              <Text>{favourite ? "⭐" : "☆"}</Text>
            </TouchableOpacity>

            {/* 😊 Emoji */}
            <Text style={styles.emoji}>{item.emoji}</Text>

            {/* 🏷 Label */}
            <Text style={styles.cardText}>
              {label[language]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
