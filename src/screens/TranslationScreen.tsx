import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useThemeContext } from "../../src/context/theme";

/* 🗄️ DB */
import { getDhikrByType } from "../../src/db/queries";

/* 🌍 Language Mode */
type LanguageMode = "arabic" | "arabic_malayalam" | "arabic_english";

/* 🔧 Helper */
const normalize = (v?: string | string[]) =>
  Array.isArray(v) ? v.join("\n") : v ?? "";

type DhikrItem = {
  id: number;
  arabic: string;
  malayalam: string;
  english: string;
};

export default function TranslationScreen() {
  const { colors } = useThemeContext();
  const [items, setItems] = useState<DhikrItem[]>([]);
  const [languageMode] = useState<LanguageMode>(
    "arabic_malayalam"
  );

  useEffect(() => {
    getDhikrByType("duaMarichavark").then(rows => {
      setItems(rows);
    });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      {items.map(item => (
        <View
          key={`dua-marichavark-${item.id}`}
          style={[
            styles.itemContainer,
            { borderBottomColor: colors.border },
          ]}
        >
          {/* 🕌 Arabic */}
          <Text style={[styles.arabic, { color: colors.text }]}>
            {normalize(item.arabic)}
          </Text>

          {/* 🌙 Translation */}
          {languageMode !== "arabic" && (
            <Text
              style={[
                styles.translation,
                { color: colors.text },
              ]}
            >
              {languageMode === "arabic_malayalam"
                ? normalize(item.malayalam)
                : normalize(item.english)}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

/* 🎨 Styles */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 50,
  },
  itemContainer: {
    marginBottom: 28,
    borderBottomWidth: 1,
    paddingBottom: 18,
  },
  arabic: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 42,
    fontFamily: "ScheherazadeNew-Regular",
    writingDirection: "rtl",
  },
  translation: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "NotoSansMalayalam-Regular",
  },
});
