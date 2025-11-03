import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/dhikrscreenstyle";

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
};

export const renderDuaItem = (
  item: any,
  currentIndex: number,
  fontSize: number,
  languageMode: string,
  malayalamList: any[]
) => {
  const malItem = malayalamList.find((m) => m.id === item.id);

  return (
    <View
      style={[
        styles.textContainer,
        currentIndex === item.id && styles.activeTextContainer,
      ]}
    >
      <Text
        style={[
          styles.text,
          currentIndex === item.id && styles.activeText,
          textStyle.arabic,
          { fontSize, lineHeight: fontSize * 1.5 },
        ]}
      >
        {item.text}
      </Text>

      {languageMode === "malayalam" && malItem && (
        <Text
          style={[
            textStyle.malayalam,
            { fontSize: fontSize * 0.75, lineHeight: fontSize },
          ]}
        >
          {malItem.text}
        </Text>
      )}
    </View>
  );
};
