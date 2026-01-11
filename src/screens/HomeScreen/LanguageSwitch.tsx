// HomeScreen/LanguageSwitch.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { AppLanguage } from "./data/types";

type Props = {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
};

export function LanguageSwitch({ language, setLanguage }: Props) {
  return (
    <View style={styles.languageSwitch}>
      {[
        { key: "malayalam", label: "മ" },
        { key: "english", label: "EN" },
        { key: "arabic", label: "ع" },
      ].map(item => (
        <TouchableOpacity
          key={item.key}
          onPress={() => setLanguage(item.key as AppLanguage)}
          style={[
            styles.langButton,
            language === item.key && styles.langActive,
          ]}
        >
          <Text
            style={[
              styles.langText,
              language === item.key && styles.langTextActive,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

/* ✅ STYLES (THIS WAS MISSING) */
const styles = StyleSheet.create({
  languageSwitch: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#e5e7eb",
    borderRadius: 14,
    padding: 4,
    gap: 6,
  },
  langButton: {
    flex: 1,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: "center",
  },
  langActive: {
    backgroundColor: "#1e293b",
  },
  langText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1e293b",
  },
  langTextActive: {
    color: "#fff",
  },
});
