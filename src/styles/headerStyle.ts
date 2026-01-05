import { StyleSheet, Platform, StatusBar } from "react-native";

export const headerStyles = StyleSheet.create({
  headerBase: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingHorizontal: 10,
    paddingTop:
      Platform.OS === "android"
        ? (StatusBar.currentHeight ?? 25) + 10
        : 45,
  },

  headerFixedPadding: {
    paddingVertical: 8,
  },

  headerPosition: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 190,
    zIndex: 50,
    elevation: 20,
  },

  headerDark: {
    backgroundColor: "#000000ee",
  },

  headerLight: {
    backgroundColor: "#ffffffee",
  },

  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  rightGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#374151",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  backText: {
    marginLeft: 6,
    fontSize: 16,
  },

  playButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  playButtonInner: {
    width: 58,
    height: 58,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  playingBg: { backgroundColor: "#16a34a20" },
  pausedBg: { backgroundColor: "#27d66720" },

  titleWrapper: {
    marginTop: 6,
    alignItems: "center",
  },

  titleText: {
    fontSize: 18,
    fontWeight: "600",
  },

  langRow: {
    gap: 20,
    paddingVertical: 5,
  },

  languageBox: {
    minWidth: 110,
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 5,
    backgroundColor: "#1f2937",
    alignItems: "center",
  },

  activeBox: {
    borderWidth: 1,
    borderColor: "#22c55e",
  },

  langText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
  },
});
