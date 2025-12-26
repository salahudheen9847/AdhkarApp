import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useThemeContext } from "../context/theme";

// 📘 Arabic & Malayalam data
import { duaMarichavarkArabic } from "../data/duaMarichavark/duaMarichavarkArabic";
import { duaMarichavarkMalayalam } from "../data/duaMarichavark/duaMarichavarkMalayalam";

/* 🧩 Types (matches existing data) */
type ArabicItem = {
  id: number;
  text: string;
};

type MalayalamItem = {
  id: number;
  text: string;
};

export default function TranslationScreen() {
  const { colors } = useThemeContext();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      {duaMarichavarkArabic.map((arabicItem: ArabicItem) => {
        const malItem: MalayalamItem | undefined =
          duaMarichavarkMalayalam.find(
            (m) => m.id === arabicItem.id
          );

        return (
          <View
            key={arabicItem.id}
            style={[
              styles.itemContainer,
              {
                borderBottomColor: colors.border,
                shadowColor: colors.shadow,
              },
            ]}
          >
            {/* 🕌 Arabic Text */}
            <Text style={[styles.arabic, { color: colors.text }]}>
              {arabicItem.text}
            </Text>

            {/* 🌙 Malayalam Translation */}
            {malItem?.text && (
              <Text style={[styles.malayalam, { color: colors.text }]}>
                {malItem.text}
              </Text>
            )}
          </View>
        );
      })}
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
    borderRadius: 12,
  },
  arabic: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 42,
    fontFamily: "ScheherazadeNew-Regular",
    writingDirection: "rtl",
  },
  malayalam: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "NotoSansMalayalam-Regular",
  },
});
