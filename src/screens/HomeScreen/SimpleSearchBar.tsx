import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export function SimpleSearchBar({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (t: string) => void;
  placeholder: string;
}) {
  return (
    <View style={styles.box}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#22c55e",
    paddingHorizontal: 12,
  },
  input: {
    height: 44,
    fontSize: 16,
    color: "#111827",
  },
});
