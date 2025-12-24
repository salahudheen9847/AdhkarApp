import React from "react";
import { View, Text } from "react-native";
import { styles, localStyles } from "../../styles/dhikrscreenstyle";

type Props = {
  text: string;
};

export const HeaderTitle: React.FC<Props> = ({ text }) => {
  if (!text) return null;

  return (
    <View style={localStyles.headerTitleContainer}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
