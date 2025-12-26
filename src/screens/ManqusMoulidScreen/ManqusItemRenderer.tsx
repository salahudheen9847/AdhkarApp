import { View, Text, StyleSheet } from "react-native";

export const ManqusItemRenderer = ({ item, fontSize }: any) => {
  if (item.sectionType === "text") {
    return (
      <Text
        style={[
          styles.arabic,
          {
            fontSize,
            lineHeight: fontSize * 1.8, // ⭐ important
          },
        ]}
      >
        {item.text}
      </Text>
    );
  }

  // 📦 BOX TYPE
  return (
    <View style={styles.box}>
      <Text
        style={[
          styles.right,
          {
            fontSize: fontSize * 0.9,
            lineHeight: fontSize * 1.6,
          },
        ]}
      >
        {item.rightText}
      </Text>

      <Text
        style={[
          styles.left,
          {
            fontSize: fontSize * 0.9,
            lineHeight: fontSize * 1.6,
          },
        ]}
      >
        {item.leftText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arabic: {
    textAlign: "center",
    marginVertical: 12,
  },
  box: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
  },
  right: {
    flex: 1,
    textAlign: "right",
    paddingRight: 10,
  },
  left: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 10,
  },
});
