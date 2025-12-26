import { StyleSheet } from "react-native";

/* ===============================
   🌍 MAIN STYLES
================================ */
export const styles = StyleSheet.create({
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
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#1f2937",
  },

  activeTextContainer: {
    backgroundColor: "#2563eb",
  },

  /* 🔹 Normal Arabic text */
  text: {
    color: "#e5e7eb",
    textAlign: "center",
  },

  activeText: {
    color: "#ffffff",
    fontWeight: "bold",
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
     📦 MANQUS BOX (FINAL)
     =============================== */

  /** 🔹 Extra spacing so box never collapses */
  manqusBoxWrapper: {
    paddingVertical: 14,
    marginVertical: 12,
  },

  /** 🔹 Actual box */
  manqusBoxContainer: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,

    paddingVertical: 14,
    paddingHorizontal: 12,

    backgroundColor: "#0f172a",

    alignItems: "center",
    justifyContent: "center",
  },

  /** 🔹 Box text (right & left) */
  manqusBoxText: {
    fontFamily: "ScheherazadeNew-Regular",
    textAlign: "center",
    lineHeight: 38,
    color: "#e5e7eb",
  },
});

/* ===============================
   🎛️ LOCAL / HEADER STYLES
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
    backgroundColor: "#28eb25ff",
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
