import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useLanguage } from "../../../context/language";
import type { AppLanguage } from "../../../context/language";

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
      {/* 🔙 BACK BUTTON – PILL STYLE */}
      {activeSection === "daily" && onBack && (
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.85}
          style={styles.backPill}
        >
          <Ionicons
            name="arrow-back"
            size={18}
            color="#ffffff"
            style={styles.backIcon}
          />
          <Text style={styles.backText}>
            {language === "malayalam" ? "പിന്നോട്ട്" : "Back"}
          </Text>
        </TouchableOpacity>
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

  /* 🔙 Back pill button */
  backPill: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#1e293b",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    marginBottom: 12,

    // shadow (Android + iOS)
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  backIcon: {
    marginRight: 6,
  },
  backText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
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
