import { StyleSheet } from "react-native";

export const homeSectionStyles = StyleSheet.create({
  /* ---------------- GRID ITEM ---------------- */

  touchWrapper: {
    width: "33.33%",          // ✅ pixel rounding fix
    marginBottom: 16,
  },

  cardWrapper: {
    width: "100%",
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

  /* ---------------- TEXT (MALAYALAM – SINGLE SOURCE) ---------------- */

  cardTextMalayalam: {
    fontSize: 13,          // ✅ SAME everywhere
    lineHeight: 18,        // ✅ fixed
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.1,
    color: "#000000",
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