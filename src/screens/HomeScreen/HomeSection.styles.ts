import { StyleSheet } from "react-native";

export const homeSectionStyles = StyleSheet.create({
  /* ---------------- GRID ITEM ---------------- */

  touchWrapper: {
    width: "32%", // 3 എണ്ണം വരാൻ 32% ആണ് അനുയോജ്യം
    marginBottom: 12,
    paddingHorizontal: 4, // കാർഡുകൾക്കിടയിൽ ഗ്യാപ്പ് വരാൻ
  },

  cardWrapper: {
    width: "100%",
  },

  /* ---------------- ICON ---------------- */

  icon: {
    marginBottom: 8,
    backgroundColor: "rgba(0,0,0,0.15)",
    padding: 8,
    borderRadius: 999,
  },

  /* ---------------- TEXT ---------------- */

  cardTextMalayalam: {
    fontSize: 11, // സ്ഥലം കുറവായതിനാൽ സൈസ് കുറച്ചു
    lineHeight: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000",
  },

  cardTextArabic: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    textAlign: "right",
    writingDirection: "rtl",
    color: "#000000",
  },

  /* ---------------- STAR ICON ---------------- */

  starIcon: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 10,
  },

  /* ---------------- SHADOWS ---------------- */

  cardShadow: {
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
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