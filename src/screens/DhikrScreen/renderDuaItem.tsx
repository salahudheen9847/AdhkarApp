import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles as baseStyles } from "../../styles/dhikrscreenstyle";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🔹 Generic Dua Item */
export type DuaItem = {
  id: number;
  isBox?: boolean;
  isHeading?: boolean;
  text?: string | string[];          // ✅ FIX 1
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
  currentIndex: number,
  fontSize: number,
  languageMode: LanguageMode,
  highlightColor: string,
  dividerColor: string,
  textColor: string
) => {
  const isActive = item.id === currentIndex;
  const isBox = item.isBox === true;
  const isHeading = item.isHeading === true;
  const safeFontSize = Math.max(12, fontSize);

  let content = "";

  switch (languageMode) {
    case "arabic":
      content = normalizeText(item.text);
      break;

    case "arabic_malayalam":
      content = item.malayalam
        ? `${normalizeText(item.text)}\n\n${normalizeText(item.malayalam)}`
        : normalizeText(item.text);
      break;

    case "arabic_english":
      content = item.english
        ? `${normalizeText(item.text)}\n\n${normalizeText(item.english)}`
        : normalizeText(item.text);
      break;
  }

  // ✅ FIX 2 – headings must render even if content empty
  if (!content && !isHeading) return null;

  return (
    <View
      style={[
        localStyles.container,
        isHeading && localStyles.headingContainer,
        isBox && localStyles.boxContainer,
        isActive && localStyles.activeContainer,
        isActive && { backgroundColor: highlightColor },
      ]}
    >
      <Text
        style={[
          isHeading
            ? localStyles.headingText
            : isBox
            ? baseStyles.manqusBoxText
            : baseStyles.text,
          isActive ? localStyles.activeText : { color: textColor },
          {
            fontSize: isHeading
              ? safeFontSize * 1.1
              : isBox
              ? safeFontSize * 0.9
              : safeFontSize,
          },
        ]}
      >
        {content}
      </Text>

      {!isHeading && (
        <View
          style={[
            localStyles.divider,
            { backgroundColor: dividerColor },
          ]}
        />
      )}
    </View>
  );
};

/* 🎨 LOCAL STYLES */
const localStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 4,
  },

  headingContainer: {
    backgroundColor: "#1e40af",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginVertical: 12,
    shadowColor: "#1e40af",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 6,
  },

  headingText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
    letterSpacing: 0.5,
  },

  boxContainer: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#334155",
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },

  activeContainer: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#22c55e40",
    backgroundColor: "rgba(34, 197, 94, 0.08)",
    shadowColor: "#22c55e",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    elevation: 8,
  },

  activeText: {
    color: "#ffffff",
    fontWeight: "600",
  },

  divider: {
    marginTop: 20,
    height: 1,
    width: "85%",
    alignSelf: "center",
    opacity: 0.3,
    backgroundColor: "#475569",
  },
});
