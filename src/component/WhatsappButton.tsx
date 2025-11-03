import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/playerStyles";

export const WhatsappButton = () => {
  const handlePress = async () => {
    const url = "https://wa.me/?text=Assalamu%20Alaikum";
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("❌ WhatsApp link തുറക്കുമ്പോൾ പിശക്:", error);
    }
  };

  return (
    <TouchableOpacity style={styles.youtubeButton} onPress={handlePress}>
      <Icon name="whatsapp" size={24} color="#fff" />
    </TouchableOpacity>
  );
};
