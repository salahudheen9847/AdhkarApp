import React from "react";
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";
import type { AppLanguage } from "../../data/labels";

type Props = {
  value: string;
  onChange: (text: string) => void;
  language: AppLanguage;        // ✅ FIX: HomeScreen-ൽ നിന്ന് വരുന്നത്
  containerStyle?: ViewStyle;
};

export function SimpleSearchBar({
  value,
  onChange,
  language,
  containerStyle,
}: Props) {
  const placeholder =
    language === "malayalam"
      ? "തിരയൂ..."
      : language === "arabic"
      ? "ابحث..."
      : "Search...";

  const isArabic = language === "arabic";

  return (
    <View style={[styles.box, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        style={[styles.input, isArabic && styles.inputArabic]}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "92%",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#22c55e",
    paddingHorizontal: 14,
    paddingVertical: 2,
    marginBottom: 18,
  },
  input: {
    height: 44,
    fontSize: 16,
    color: "#111827",
  },
  inputArabic: {
    textAlign: "right",
  },
});
