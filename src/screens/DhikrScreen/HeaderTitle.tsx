import React from "react";
import { View, Text } from "react-native";
import { localStyles, styles } from "../../styles/dhikrscreenstyle";

export const HeaderTitle = ({ text }: { text: string }) => (
  <View style={localStyles.headerTitleContainer}>
    <Text style={styles.title}>{text}</Text>
  </View>
);
