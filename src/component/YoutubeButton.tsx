import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/playerStyles";
import { youtubeLinks, YoutubeType } from "../data/youtubeLinks";

interface YoutubeButtonProps {
  type?: YoutubeType;
}

export const YoutubeButton: React.FC<YoutubeButtonProps> = ({
  type = "duaMarichavark",
}) => {
  const handlePress = async () => {
    const url = youtubeLinks[type];

    // 🔐 Safety guard
    if (!url) {
      console.log("ℹ️ No YouTube link for type:", type);
      return;
    }

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error(
        "❌ YouTube link തുറക്കാൻ പറ്റിയില്ല:",
        error
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.youtubeButton}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Icon
        name="youtube-play"
        size={24}
        color="#ffffff"
      />
    </TouchableOpacity>
  );
};
