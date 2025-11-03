import React from "react";
import { TouchableOpacity, Linking, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/playerStyles";

export const WhatsappButton = () => {
  const handlePress = async () => {
    const phoneNumber = "919745525150"; // ✅ + ഇല്ലാതെ
    const message = "Assalamu Alaikum"; // 🔹 default message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("WhatsApp not installed", "Please install WhatsApp to send message.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong while opening WhatsApp.");
      console.log("❌ WhatsApp link error:", error);
    }
  };

  return (
    <TouchableOpacity style={styles.youtubeButton} onPress={handlePress}>
      <Icon name="whatsapp" size={24} color="#25D366" /> 
      {/* ✅ WhatsApp green color */}
    </TouchableOpacity>
  );
};
