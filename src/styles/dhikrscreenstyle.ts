import { StyleSheet } from "react-native";

/* ===============================
   🌍 MAIN STYLES
================================ */
export const styles = StyleSheet.create({
  /* 🌿 Screen */
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },

  fullFlex: {
    flex: 1,
  },

  flatListContent: {
    padding: 16,
    paddingBottom: 120,
  },

  /* 🔹 Each item wrapper */
  textContainer: {
    marginBottom: 16,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "transparent", // ✅ IMPORTANT
  },

  /* ✨ Active ayah border (optional) */
  activeTextContainer: {
    borderWidth: 1,
    borderColor: "#2563eb50",
  },

  /* 🔹 Arabic text (COLOR REMOVED) */
  text: {
    textAlign: "center",
    fontFamily: "ScheherazadeNew-Regular",
    fontSize: 28,
    lineHeight: 46,
    writingDirection: "rtl",
  },

  activeText: {
    fontWeight: "600",
  },

  title: {
    fontSize: 22,
    color: "#f9fafb",
    fontWeight: "bold",
    textAlign: "center",
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
    paddingVertical: 18,
    marginVertical: 18,
    borderRadius: 14,
  },

  manqusBoxContainer: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // ✅ IMPORTANT
  },

  /* 🔹 Manqus box text (COLOR REMOVED) */
  manqusBoxText: {
    fontFamily: "ScheherazadeNew-Regular",
    textAlign: "center",
    fontSize: 26,
    lineHeight: 40,
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
    marginVertical: 12,
  },

  playButton: {
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -10,
  },

  playIcon: {
    color: "#fff",
  },

  langButton: {
    backgroundColor: "#334155",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  langText: {
    color: "#fff",
    fontSize: 14,
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
    paddingHorizontal: 12,
    paddingVertical: 10,
    position: "relative",
    zIndex: 5,
  },

  playButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  playButtonInner: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22c55e20",
    borderWidth: 1,
    borderColor: "#22c55e50",
    shadowColor: "#22c55e",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },

  playLabel: {
    color: "#22c55e",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
});
