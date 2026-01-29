import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { headerStyles as styles } from "../../../styles/headerStyle";

type Props = {
  isDark: boolean;
  textColor: string;
  onBack: () => void;
};

const HeaderLeft: React.FC<Props> = ({
  isDark,
  textColor,
  onBack,
}) => {
  const backColor = isDark ? textColor : "#ffffff";

  return (
    <TouchableOpacity style={styles.backButton} onPress={onBack}>
      <Icon name="arrow-back" size={22} color={backColor} />
      <Text style={[styles.backText, { color: backColor }]}>
        Back
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderLeft;