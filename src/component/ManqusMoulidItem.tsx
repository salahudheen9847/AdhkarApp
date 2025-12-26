import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ManqusMoulidItem = ({ item, fontSize }: any) => {
  if (item.type === "text") {
    return (
      <Text style={[styles.text, { fontSize }]}>
        {item.text}
      </Text>
    );
  }

  if (item.type === "box") {
    return (
      <View style={styles.box}>
        <Text style={[styles.boxText, { fontSize }]}>
          {item.right}
        </Text>
        <Text style={[styles.boxText, { fontSize }]}>
          {item.left}
        </Text>
      </View>
    );
  }

  return null;
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
    padding: 12,
    marginVertical: 16,
  },
  boxText: {
    textAlign: "center",
    lineHeight: 40,
  },
});
