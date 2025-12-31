import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  item: {
    id: number;
    isBox: boolean;
    text: string;
    malayalam?: string;
    english?: string;
  };
  fontSize: number;
};

export const ManqusMoulidItem: React.FC<Props> = ({
  item,
  fontSize,
}) => {
  const safeFontSize = Math.max(12, fontSize);

  /* 📦 BOX ITEM */
  if (item.isBox) {
    const lines = item.text.split("\n");

    return (
      <View style={styles.box}>
        {lines.map((line, index) => (
          <Text
            key={`${item.id}-${index}`} // ✅ UNIQUE KEY
            style={[
              styles.boxText,
              { fontSize: safeFontSize * 0.9 },
            ]}
          >
            {line}
          </Text>
        ))}
      </View>
    );
  }

  /* 📝 NORMAL TEXT */
  return (
    <Text
      style={[
        styles.text,
        { fontSize: safeFontSize },
      ]}
    >
      {item.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginVertical: 12,
    lineHeight: 42,
  },
  box: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 14,
    marginVertical: 16,
    borderRadius: 8,
  },
  boxText: {
    textAlign: "center",
    lineHeight: 40,
  },
});
