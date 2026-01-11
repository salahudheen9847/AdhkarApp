import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { homeStyles as styles } from "../HomeStyles";
import { Language } from "../hooks/useHomeLogic";

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageSwitch: React.FC<Props> = ({
  language,
  setLanguage,
}) => {
  return (
    <View style={styles.languageSwitch}>
      {(["malayalam", "english", "arabic"] as const).map(lang => {
        const active = language === lang;
        return (
          <TouchableOpacity
            key={lang}
            style={[styles.langButton, active && styles.langActive]}
            onPress={() => setLanguage(lang)}
          >
            <Text
              style={[
                styles.langText,
                active && styles.langTextActive,
              ]}
            >
              {lang === "malayalam"
                ? "മല"
                : lang === "english"
                ? "En"
                : "ع"}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
