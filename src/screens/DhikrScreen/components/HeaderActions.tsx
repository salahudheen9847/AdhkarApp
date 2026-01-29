import React from "react";
import { View, TouchableOpacity, Share } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { headerStyles as styles } from "../../../styles/headerStyle";
import { WhatsappButton } from "../../../component/WhatsappButton";

type Props = {
  textColor: string;
  isDark: boolean;
  toggleTheme: () => void;
  onFontPress: () => void;
};

const HeaderActions: React.FC<Props> = ({
  textColor,
  isDark,
  toggleTheme,
  onFontPress,
}) => {
  const onShareApp = async () => {
    try {
      await Share.share({
        message:
          "Adhkar App 📿\n\n" +
          "Download from Play Store:\n" +
          "https://play.google.com/store/apps/details?id=salahudheen.adhkar",
      });
    } catch (e) {
      console.log("Share error", e);
    }
  };

  return (
    <View style={styles.rightGroup}>
      <TouchableOpacity onPress={onFontPress}>
        <Icon name="text-fields" size={30} color={textColor} />
      </TouchableOpacity>

      <WhatsappButton />

      <TouchableOpacity onPress={toggleTheme}>
        <Icon
          name={isDark ? "wb-sunny" : "dark-mode"}
          size={30}
          color={isDark ? "#ffcc00" : textColor}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onShareApp}>
        <Icon name="share" size={28} color={textColor} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderActions;