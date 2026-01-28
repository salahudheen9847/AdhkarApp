import { StyleSheet } from "react-native";

export const homeSectionStyles = StyleSheet.create({
  /* ---------------- GRID ITEM ---------------- */

  touchWrapper: {
    width: "33%",          // ✅ increased width for better text fit
    marginBottom: 12,
  },

  cardWrapper: {
    width: "100%",
    margin: 0,
    padding: 0,
  },

  /* ---------------- ICON ---------------- */

icon: {
  marginBottom: 10,
  backgroundColor: "rgba(0,0,0,0.15)",
  padding: 10,
  borderRadius: 999,
  shadowOpacity: 0.4,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
},

  /* ---------------- TEXT ---------------- */

  cardTextMalayalam: {
    lineHeight: 17,
    fontSize: 13,
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 0.1,
  },

  /* ---------------- SHADOWS ---------------- */

  cardShadow: {
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },

  iconGlow: {
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 25,
    padding: 10,
  },
});