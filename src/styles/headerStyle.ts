import { StyleSheet, Platform, StatusBar } from "react-native";

export const headerStyles = StyleSheet.create({
  headerBase: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingHorizontal: 16,
    paddingTop:
      Platform.OS === "android"
        ? (StatusBar.currentHeight ?? 25) + 12
        : 50,
  },

  headerFixedPadding: {
    paddingBottom: 16,
  },

headerPosition: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 160, // ✅ FURTHER REDUCED for content visibility
  zIndex: 50,
  elevation: 25,
},

  headerDark: {
    backgroundColor: "#000000f0",
    borderBottomColor: "#ffffff20",
  },

  headerLight: {
    backgroundColor: "#fffffff0",
    borderBottomColor: "#00000010",
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
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  backText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },

  playButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  playButtonInner: {
    width: 62,
    height: 62,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  playingBg: { backgroundColor: "#16a34a20" },
  pausedBg: { backgroundColor: "#27d66720" },

  titleWrapper: {
    marginTop: 8,
    alignItems: "center",
  },

  titleText: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  /* 🌍 WHITE LANGUAGE STRIP (INSIDE BLUE) */
  languageWhiteBox: {
    marginTop: 12,
    marginHorizontal: 16,

    backgroundColor: "#ffffff",
    borderRadius: 14,

    paddingVertical: 10,
    paddingHorizontal: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,

    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
topRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: 5,
  paddingHorizontal: 16,
  gap: 12,
},

centerRow: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 18,
  marginVertical: 10,
},
  languageWrapper: {
    flex: 1,
  },
});