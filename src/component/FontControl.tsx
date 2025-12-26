import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/MaterialIcons";

type FontControlProps = {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  onClose?: () => void; // ✅ close handler
  textColor?: string;
  backgroundColor?: string;
};

export const FontControl: React.FC<FontControlProps> = ({
  fontSize,
  onFontSizeChange,
  onClose,
  textColor = "#fff",
  backgroundColor = "#1e293b",
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* 🔹 Header Row with Close Button */}
      <View style={styles.headerRow}>
        <Text style={[styles.label, { color: textColor }]}>
          Font Size: {fontSize}px
        </Text>

        {onClose && (
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={22} color={textColor} />
          </TouchableOpacity>
        )}
      </View>

      {/* 🔹 Slider */}
      <Slider
        style={styles.slider}
        minimumValue={14}
        maximumValue={50}
        step={1}
        value={fontSize}
        onValueChange={onFontSizeChange}
        minimumTrackTintColor="#facc15"
        maximumTrackTintColor="#475569"
        thumbTintColor="#22c55e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderRadius: 12,
     width: "100%",  
    marginTop: 30,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  slider: {
    width: "100%",
  },
});
