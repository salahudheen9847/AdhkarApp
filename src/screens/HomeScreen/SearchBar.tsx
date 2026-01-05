// HomeScreen/SearchBar.tsx

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { homeStyles as styles } from "../../styles/homeStyles";

export function SearchBar({
  language,
  value,
  onChange,
  textColor,
}: any) {
  return (
    <View style={[styles.searchContainer, styles.searchContainerLight]}>
      <Icon name="search" size={18} color="#92400e" />
      <TextInput
        style={[
          styles.searchInput,
          { color: textColor },
          language === "arabic" && local.searchArabic,
        ]}
        placeholder={
          language === "malayalam"
            ? "ദുആ അല്ലെങ്കിൽ ശേഖരം തിരയൂ..."
            : language === "english"
            ? "Search dua or collection..."
            : "ابحث عن دعاء أو مجموعة"
        }
        placeholderTextColor="#a16207"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const local = StyleSheet.create({
  searchArabic: {
    textAlign: "right",
  },
});
