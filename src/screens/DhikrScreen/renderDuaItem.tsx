import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles as baseStyles } from "../../styles/dhikrscreenstyle";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🔹 Generic Dua Item (Manqus + Bader + reuse) */
export type DuaItem = {
  id: number;
  isBox?: boolean;
  text: string | string[];
  malayalam?: string | string[];
  english?: string | string[];
};

/* 🔧 Normalize helper */
const normalizeText = (value?: string | string[]) => {
  if (!value) return "";
  return Array.isArray(value) ? value.join("\n") : value;
};

export const renderDuaItem = (
  item: DuaItem,
  currentIndex: number, // 🔑 audio active id
  fontSize: number,
  languageMode: LanguageMode,
  highlightColor: string,
  dividerColor: string,
  textColor: string
) => {
  const isActive = item.id === currentIndex;
  const isBox = item.isBox === true; // ✅ SAFE
  const safeFontSize = Math.max(12, fontSize);

  let content = "";

  switch (languageMode) {
    case "arabic":
      content = normalizeText(item.text);
      break;

    case "arabic_malayalam":
      content = item.malayalam
        ? `${normalizeText(item.text)}\n\n${normalizeText(
            item.malayalam
          )}`
        : normalizeText(item.text);
      break;

    case "arabic_english":
      content = item.english
        ? `${normalizeText(item.text)}\n\n${normalizeText(
            item.english
          )}`
        : normalizeText(item.text);
      break;
  }

  if (!content) return null;

  return (
    <View
      style={[
        localStyles.container,
        isBox && localStyles.boxContainer,          // 🔥 only when box
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

      {/* 🔵 DIVIDER */}
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
   🎨 LOCAL STYLES
================================ */
const localStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
  },

  /* 📦 BOX (Manqus / Bader only) */
  boxContainer: {
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
