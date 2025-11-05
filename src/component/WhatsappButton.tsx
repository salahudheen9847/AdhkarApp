import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/playerStyles";

export const WhatsappButton = () => {
  const handlePress = async () => {
    const phoneNumber = "919745525150"; // ✅ + ഇല്ലാതെ
    const message = "Assalamu Alaikum"; // 🔹 default message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    try {
      await Linking.openURL(url); // 🚀 Direct open WhatsApp
    } catch (error) {
      console.log("❌ WhatsApp link error:", error);
    }
  };

  return (
    <TouchableOpacity style={styles.whatsappButton} onPress={handlePress}>
      <Icon name="whatsapp" size={24} color="#fff" /> 
    </TouchableOpacity>
  );
};
