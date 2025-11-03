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
            <Text style={styles.arabic}>{arabicItem.text}</Text>
            {malItem && <Text style={styles.malayalam}>{malItem.text}</Text>}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0f172a",
    padding: 16,
    paddingBottom: 40,
  },
  itemContainer: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#1e293b",
    paddingBottom: 16,
  },
  arabic: {
    fontSize: 28,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "ScheherazadeNew-Regular", // ✅ Arabic-friendly font
    lineHeight: 40,
  },
  malayalam: {
    fontSize: 20,
    color: "#d1d5db",
    textAlign: "center",
    lineHeight: 32,
    fontFamily: "NotoSansMalayalam-Regular", // ✅ Optional Malayalam font (if available)
  },
});
