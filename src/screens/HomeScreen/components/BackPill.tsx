import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

interface BackPillProps {
  onPress: () => void;
}

export const BackPill: React.FC<BackPillProps> = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.backCard} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={["#e5e7eb", "#d1d5db"]}
        style={styles.gradient}
      >
        <View style={styles.cardContent}>
          <Ionicons name="chevron-back" size={20} color="#374151" />
          <Text style={styles.backText}>Back</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backCard: {
    width: "100%",
    minHeight: 110,
    borderRadius: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
    marginLeft: 8,
  },
});
