import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/dhikrscreenstyle";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🎨 Text Styles */
const textStyle = {
  arabic: {
    textAlign: "center" as const,
    fontFamily: "ScheherazadeNew-Regular",
  },
  malayalam: {
    textAlign: "center" as const,
    color: "#d1d5db",
    fontFamily: "NotoSansMalayalam-Regular",
    marginTop: 6,
  },
  english: {
    textAlign: "center" as const,
    color: "#e5e7eb",
    fontFamily: "System",
    marginTop: 6,
  },
};

export const renderDuaItem = (
  item: any,
  currentIndex: number,
  fontSize: number,
  languageMode: LanguageMode,
  translationList: any[]
) => {
  const translationItem = translationList.find(
    (t) => t.id === item.id
  );

  const isBox = item.type === "box";

  return (
    <View
      style={[
        styles.textContainer,
        currentIndex === item.id && styles.activeTextContainer,
      ]}
    >
      {/* 📦 MANQUS BOX */}
      {isBox ? (
        <View style={styles.manqusBoxContainer}>
          <Text
            style={[
              styles.manqusBoxText,
              textStyle.arabic,
              { fontSize: fontSize * 0.9 },
            ]}
          >
            {item.right}
          </Text>

          <Text
            style={[
              styles.manqusBoxText,
              textStyle.arabic,
              { fontSize: fontSize * 0.9 },
            ]}
          >
            {item.left}
          </Text>
        </View>
      ) : (
        <>
          {/* 🕌 Arabic TEXT */}
          <Text
            style={[
              styles.text,
              currentIndex === item.id && styles.activeText,
              textStyle.arabic,
              { fontSize, lineHeight: fontSize * 1.6 },
            ]}
          >
            {item.text}
          </Text>

          {/* 🌙 Arabic + Malayalam */}
          {languageMode === "arabic_malayalam" &&
            translationItem && (
              <Text
                style={[
                  textStyle.malayalam,
                  {
                    fontSize: fontSize * 0.75,
                    lineHeight: fontSize * 1.3,
                  },
                ]}
              >
                {translationItem.text}
              </Text>
            )}

          {/* 🌍 Arabic + English */}
          {languageMode === "arabic_english" &&
            translationItem && (
              <Text
                style={[
                  textStyle.english,
                  {
                    fontSize: fontSize * 0.75,
                    lineHeight: fontSize * 1.3,
                  },
                ]}
              >
                {translationItem.text}
              </Text>
            )}
        </>
      )}
    </View>
  );
};
