import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/playerStyles";
import { youtubeLinks } from "../data/youtubeLinks";

interface YoutubeButtonProps {
  type?: "duaMarichavark" | "duaQabar" | "haddad" | "asmaulHusna" | "manqus";
}


export const YoutubeButton: React.FC<YoutubeButtonProps> = ({ type = "duaMarichavark" }) => {
  const handlePress = async () => {
    const url = youtubeLinks[type];
    if (!url) return;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("❌ YouTube link തുറക്കുമ്പോൾ പിശക്:", error);
    }
  };

  return (
    <TouchableOpacity style={styles.youtubeButton} onPress={handlePress}>
      <Icon name="youtube-play" size={24} color="#fff" />
    </TouchableOpacity>
  );
};
