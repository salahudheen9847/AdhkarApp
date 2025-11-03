import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { duaMarichavark } from "../data/duaMarichavark";
import { duaMarichavarkMalayalam } from "../data/duaMarichavarkMalayalam";

export default function TranslationScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {duaMarichavark.map((arabicItem) => {
        const malItem = duaMarichavarkMalayalam.find(
          (m) => m.id === arabicItem.id
        );

        return (
          <View key={arabicItem.id} style={styles.itemContainer}>
            {/* Arabic Text */}
            <Text style={styles.arabic}>{arabicItem.text}</Text>

            {/* Malayalam Translation */}
            {malItem && (
              <Text style={styles.malayalam}>{malItem.text}</Text>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0f172a", // navy-like dark background
    padding: 16,
    paddingBottom: 50,
  },
  itemContainer: {
    marginBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#1e293b",
    paddingBottom: 18,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 12,
  },
  arabic: {
    fontSize: 28,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 42,
    fontFamily: "ScheherazadeNew-Regular", // ✅ Arabic-friendly font
    writingDirection: "rtl",
  },
  malayalam: {
    fontSize: 20,
    color: "#d1d5db",
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "NotoSansMalayalam-Regular", // ✅ Optional Malayalam font (if installed)
  },
});
