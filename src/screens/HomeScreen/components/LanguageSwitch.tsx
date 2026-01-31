import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useLanguage } from "../../../context/language";
import type { AppLanguage } from "../../../context/language";
import { BackPill } from "./BackPill";

/* ---------------- TYPES ---------------- */

type Props = {
  activeSection?: string | null;
  onBack?: () => void;
};

/* ---------------- COMPONENT ---------------- */

export function LanguageSwitch({
  activeSection,
  onBack,
}: Props) {
  const { language, setLanguage } = useLanguage();

  const LANGUAGES: {
    key: AppLanguage;
    label: string;
  }[] = [
    { key: "malayalam", label: "മ" },
    { key: "english", label: "EN" },
    { key: "arabic", label: "ع" },
  ];

  return (
    <View style={styles.container}>
      {/* 🔙 BACK BUTTON */}
      {activeSection && onBack && (
        <BackPill onPress={onBack} />
      )}

      {/* 🌐 LANGUAGE SWITCH */}
      <View style={styles.languageSwitch}>
        {LANGUAGES.map(item => (
          <TouchableOpacity
            key={item.key}
            onPress={() => setLanguage(item.key)}
            style={[
              styles.langButton,
              language === item.key && styles.langActive,
            ]}
            activeOpacity={0.8}
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
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  /* wrapper */
  container: {
    marginBottom: 12,
  },

  /* 🌐 Language switch */
  languageSwitch: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#e5e7eb",
    borderRadius: 14,
    padding: 4,
    gap: 6,
  },
  langButton: {
    flex: 1,
    paddingVertical: 6,
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
    color: "#ffffff",
  },
});
