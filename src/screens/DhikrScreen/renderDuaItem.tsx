import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../../styles/dhikrscreenstyle";

/* 🌍 Language Mode */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🗂 Translation Type */
type TranslationItem = {
  id: number;
  text?: string;
  right?: string;
  left?: string;
};

/* 🎨 Text Styles */
const textStyle = {
  arabic: {
    textAlign: "center" as const,
    fontFamily: "ScheherazadeNew-Regular",
    writingDirection: "rtl" as const,
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

/* 🧩 Renderer */
export const renderDuaItem = (
  item: any,
  currentIndex: number,
  fontSize: number,
  languageMode: LanguageMode,
  translationList: TranslationItem[]
) => {
  const translationItem = translationList?.find(
    t => t.id === item.id
  );

  const isBox =
    item.type === "box" &&
    typeof item.right === "string" &&
    typeof item.left === "string";

  const isMalayalam = languageMode === "arabic_malayalam";
  const isEnglish = languageMode === "arabic_english";

  return (
    <View
      style={[
        styles.textContainer,
        isBox && styles.manqusBoxWrapper,
        currentIndex === item.id && styles.activeTextContainer,
      ]}
    >
      {/* 📦 BOX ITEM */}
      {isBox ? (
        <View style={styles.manqusBoxContainer}>
          {/* 🔹 Arabic (always) */}
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

          {/* 🔹 Translation */}
          {languageMode !== "arabic" &&
            (translationItem?.right ||
              translationItem?.left) && (
              <View style={localStyles.boxTranslationWrapper}>
                {translationItem?.right && (
                  <Text
                    style={[
                      isMalayalam
                        ? textStyle.malayalam
                        : textStyle.english,
                      { fontSize: fontSize * 0.75 },
                    ]}
                  >
                    {translationItem.right}
                  </Text>
                )}

                {translationItem?.left && (
                  <Text
                    style={[
                      isMalayalam
                        ? textStyle.malayalam
                        : textStyle.english,
                      { fontSize: fontSize * 0.75 },
                    ]}
                  >
                    {translationItem.left}
                  </Text>
                )}
              </View>
            )}
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

          {/* 🌙 Malayalam TEXT */}
          {isMalayalam && translationItem?.text && (
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

          {/* 🌍 English TEXT */}
          {isEnglish && translationItem?.text && (
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

/* --------------------------------
   🎨 Local Styles
---------------------------------*/
const localStyles = StyleSheet.create({
  boxTranslationWrapper: {
    marginTop: 8,
  },
});
