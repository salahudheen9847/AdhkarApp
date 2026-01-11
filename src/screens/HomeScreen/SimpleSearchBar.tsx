import React from "react";
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";

type Props = {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  containerStyle?: ViewStyle; // ✅ allow parent control
  isArabic?: boolean;
};

export function SimpleSearchBar({
  value,
  onChange,
  placeholder,
  containerStyle,
  isArabic = false,
}: Props) {
  return (
    <View style={[styles.box, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        style={[
          styles.input,
          isArabic && styles.inputArabic,
        ]}
        returnKeyType="search"
        clearButtonMode="while-editing" // iOS
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "92%",              // ✅ important
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#22c55e",
    paddingHorizontal: 14,
    paddingVertical: 2,
    marginBottom: 18,
  },
  input: {
    height: 44,
    fontSize: 16,
    color: "#111827",
  },
  inputArabic: {
    textAlign: "right",
  },
});
