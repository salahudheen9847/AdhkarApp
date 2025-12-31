import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/dhikrscreenstyle";
import { ManqusMoulidItem } from "../../data/ManqusMoulid/manqusMoulid.data";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🔧 Normalize helper (VERY IMPORTANT) */
const normalizeText = (value?: string | string[]) => {
  if (!value) return "";
  return Array.isArray(value) ? value.join("\n") : value;
};

export const renderDuaItem = (
  item: ManqusMoulidItem,
  currentIndex: number,
  fontSize: number,
  languageMode: LanguageMode
) => {
  const isActive = item.id === currentIndex;
  const safeFontSize = Math.max(12, fontSize);

  let content = "";

  /* 🕌 Arabic only */
  if (languageMode === "arabic") {
    content = normalizeText(item.text);
  }

  /* 🕌 Arabic + Malayalam */
  if (languageMode === "arabic_malayalam") {
    content = item.malayalam
      ? `${normalizeText(item.text)}\n\n${normalizeText(item.malayalam)}`
      : normalizeText(item.text);
  }

  /* 🕌 Arabic + English */
  if (languageMode === "arabic_english") {
    content = item.english
      ? `${normalizeText(item.text)}\n\n${normalizeText(item.english)}`
      : normalizeText(item.text);
  }

  if (!content) return null;

  /* 📦 MANQUS BOX */
  if (item.isBox) {
    const lines = content.split("\n");

    return (
      <View
        style={[
          styles.manqusBoxWrapper,
          isActive && styles.activeTextContainer,
        ]}
      >
        <View style={styles.manqusBoxContainer}>
          {lines.map((line, i) => (
            <Text
              key={`${item.id}-line-${i}`}
              style={[
                styles.manqusBoxText,
                isActive && styles.activeText,
                { fontSize: safeFontSize * 0.9 },
              ]}
            >
              {line}
            </Text>
          ))}
        </View>
      </View>
    );
  }

  /* 📝 NORMAL TEXT */
  return (
    <View
      style={[
        styles.textContainer,
        isActive && styles.activeTextContainer,
      ]}
    >
      <Text
        style={[
          styles.text,
          isActive && styles.activeText,
          { fontSize: safeFontSize },
        ]}
      >
        {content}
      </Text>
    </View>
  );
};
