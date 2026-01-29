import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { styles as baseStyles } from "../../../styles/dhikrscreenstyle";
import type { DuaItem, LanguageMode } from "../types";

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
  const isArabicOnly = languageMode === "arabic";

  const arabicText = normalizeText(item.arabic);
  const malayalamText = normalizeText(item.malayalam);
  const englishText = normalizeText(item.english);

  let content = "";

  switch (languageMode) {
    case "arabic":
      content = arabicText;
      break;

    case "arabic_malayalam":
      content = malayalamText
        ? `${arabicText}\n\n${malayalamText}`
        : arabicText;
      break;

    case "arabic_english":
      content = englishText
        ? `${arabicText}\n\n${englishText}`
        : arabicText;
      break;
  }

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
      {/* 🔹 HEADING */}
      {isHeading ? (
        <Text
          numberOfLines={1}            // ✅ SINGLE LINE ONLY
          adjustsFontSizeToFit         // ✅ auto shrink
          minimumFontScale={0.65}      // ✅ Arabic safe
          ellipsizeMode="clip"
          style={[
            localStyles.headingText,
            localStyles.textCenter,
            localStyles.rtlText,
          ]}
        >
          {content}
        </Text>
      ) : (
        /* 🔹 NORMAL / BOX TEXT */
        <Text
          style={[
            isBox ? baseStyles.boxText : baseStyles.text,
            localStyles.textCenter,
            isArabicOnly ? localStyles.rtlText : localStyles.ltrText,
            isActive ? localStyles.activeText : { color: textColor },
            {
              fontSize: isBox
                ? safeFontSize * 0.9
                : safeFontSize,
              lineHeight: safeFontSize * 1.9,
            },
          ]}
        >
          {content}
        </Text>
      )}

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

const localStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 4,
  },

  textCenter: {
    textAlign: "center",
  },

  /* 🌍 Direction safety */
  rtlText: {
    writingDirection: "rtl",
  },

  ltrText: {
    writingDirection: "ltr",
  },

  /* 🏷️ Heading */
  headingContainer: {
    backgroundColor: "#1e40af",
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
  },

  headingText: {
    fontWeight: "700",
    color: "#ffffff",
    includeFontPadding: false, // ✅ Android Arabic fix
  },

  /* 📦 Box */
  boxContainer: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
  },

  /* ✨ Active */
  activeContainer: {
    borderWidth: 2,
    borderColor: "#22c55e40",
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
  },
});