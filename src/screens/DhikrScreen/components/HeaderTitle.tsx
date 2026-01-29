import React from "react";
import { View, Text } from "react-native";
import { styles, localStyles } from "../../../styles/dhikrscreenstyle";

type Props = {
  title: string;
  textColor: string;
};

export const HeaderTitle: React.FC<Props> = ({
  title,
  textColor,
}) => {
  if (!title) return null;

  return (
    <View style={localStyles.headerTitleContainer}>
      <Text 
        style={[styles.title, { color: textColor }]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {title}
      </Text>
    </View>
  );
};