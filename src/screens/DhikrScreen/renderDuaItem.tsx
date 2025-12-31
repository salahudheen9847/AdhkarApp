import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles as baseStyles } from "../../styles/dhikrscreenstyle";
import { ManqusMoulidItem } from "../../data/ManqusMoulid/manqusMoulid.data";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🔧 Normalize helper */
const normalizeText = (value?: string | string[]) => {
  if (!value) return "";
  return Array.isArray(value) ? value.join("\n") : value;
};

export const renderDuaItem = (
  item: ManqusMoulidItem,
  currentIndex: number, // 🔑 audio index (1-based)
  fontSize: number,
  languageMode: LanguageMode,
  highlightColor: string,
  dividerColor: string,
  textColor: string
) => {
  const isActive = item.id === currentIndex;
  const isBox = item.isBox === true; // ✅ BOX CHECK
  const safeFontSize = Math.max(12, fontSize);

  let content = "";

  if (languageMode === "arabic") {
    content = normalizeText(item.text);
  }

  if (languageMode === "arabic_malayalam") {
    content = item.malayalam
      ? `${normalizeText(item.text)}\n\n${normalizeText(item.malayalam)}`
      : normalizeText(item.text);
  }

  if (languageMode === "arabic_english") {
    content = item.english
      ? `${normalizeText(item.text)}\n\n${normalizeText(item.english)}`
      : normalizeText(item.text);
  }

  if (!content) return null;

  return (
    <View
      style={[
        localStyles.container,
        isBox && localStyles.manqusBoxContainer,      // 🔥 BOX ONLY COLOR
        isActive && localStyles.activeContainer,
        isActive && { backgroundColor: highlightColor },
      ]}
    >
      {/* 📝 TEXT */}
      <Text
        style={[
          isBox ? baseStyles.manqusBoxText : baseStyles.text,
          isActive ? localStyles.activeText : { color: textColor },
          { fontSize: isBox ? safeFontSize * 0.9 : safeFontSize },
        ]}
      >
        {content}
      </Text>

      {/* 🔵 DIVIDER LINE */}
      <View
        style={[
          localStyles.divider,
          { backgroundColor: dividerColor },
        ]}
      />
    </View>
  );
};

/* ===============================
   🎨 LOCAL STYLES (ERROR-FREE)
================================ */
const localStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
  },

  /* 🔥 MANQUS BOX ONLY */
  manqusBoxContainer: {
    backgroundColor: "#92962aff",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginVertical: 6,
  },

  activeContainer: {
    borderRadius: 15,
  },

  activeText: {
    color: "#ffffff",
  },

  divider: {
    marginTop: 18,
    height: StyleSheet.hairlineWidth,
    width: "100%",
    opacity: 0.6,
  },
});
