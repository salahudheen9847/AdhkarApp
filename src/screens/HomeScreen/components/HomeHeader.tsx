import React from "react";
import { View } from "react-native";
import { ShareButton } from "../../../components/ShareButton";
import { homeStyles as styles } from "../HomeStyles";

export const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <ShareButton />
    </View>
  );
};
