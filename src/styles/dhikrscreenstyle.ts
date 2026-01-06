import { StyleSheet } from "react-native";

/* ===============================
   🌍 MAIN STYLES
================================ */
export const styles = StyleSheet.create({
  /* 🌿 Screen */
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // Softer dark blue-gray
  },

  fullFlex: {
    flex: 1,
  },

  flatListContent: {
    padding: 20,
    paddingBottom: 140,
  },

  /* 🔹 Each item wrapper */
  textContainer: {
    marginBottom: 20,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.03)", // Subtle glass effect
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },

  /* ✨ Active ayah border */
  activeTextContainer: {
    borderWidth: 2,
    borderColor: "#22c55e40",
    backgroundColor: "rgba(34, 197, 94, 0.05)",
    shadowColor: "#22c55e",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },

  /* 🔹 Arabic text */
  text: {
    textAlign: "center",
    fontFamily: "ScheherazadeNew-Regular",
    fontSize: 28,
    lineHeight: 48,
    writingDirection: "rtl",
  },

  activeText: {
    fontWeight: "600",
  },

  title: {
    fontSize: 24,
    color: "#f8fafc",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: -0.5,
  },

  bottomControls: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    alignItems: "center",
  },

  /* ===============================
     📦 MANQUS BOX
     =============================== */

  manqusBoxWrapper: {
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 16,
  },

  manqusBoxContainer: {
    borderWidth: 2,
    borderColor: "#334155",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(51, 65, 85, 0.1)",
  },

  /* 🔹 Manqus box text */
  manqusBoxText: {
    fontFamily: "ScheherazadeNew-Regular",
    textAlign: "center",
    fontSize: 26,
    lineHeight: 42,
    writingDirection: "rtl",
  },
});

/* ===============================
   🎛️ HEADER / LOCAL STYLES
================================ */
export const localStyles = StyleSheet.create({
  headerButtonRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  gapStyle: {
    width: 12,
  },

  headerTitleContainer: {
    alignItems: "center",
    marginVertical: 16,
  },

  playButton: {
    backgroundColor: "#22c55e",
    padding: 18,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -10,
    shadowColor: "#22c55e",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 8,
  },

  playIcon: {
    color: "#fff",
  },

  langButton: {
    backgroundColor: "#334155",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  langText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  langRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tickButton: {
    marginLeft: 8,
  },

  bottomControlsRaised: {
    position: "absolute",
    bottom: 22,
    left: 0,
    right: 0,
    paddingVertical: 10,
    alignItems: "center",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
    zIndex: 5,
  },

  playButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  playButtonInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22c55e20",
    borderWidth: 2,
    borderColor: "#22c55e60",
    shadowColor: "#22c55e",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },

  playLabel: {
    color: "#22c55e",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 6,
    letterSpacing: 0.5,
  },
});
