import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";

type WhatsappProps = {
  phone?: string;
  message?: string;
  style?: any;
};

export const WhatsappButton: React.FC<WhatsappProps> = ({
  phone = "919745525150",
  message = "Assalamu Alaikum",
  style,
}) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={style} onPress={openWhatsApp}>
      <FAIcon name="whatsapp" size={24} color="#fff" />
    </TouchableOpacity>
  );
};
