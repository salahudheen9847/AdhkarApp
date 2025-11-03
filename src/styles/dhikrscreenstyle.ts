import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111827" },
  fullFlex: { flex: 1 },
  flatListContent: { padding: 16, paddingBottom: 120 },

  textContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#1f2937",
  },
  activeTextContainer: { backgroundColor: "#2563eb" },

  text: { color: "#e5e7eb", textAlign: "center" },
  activeText: { color: "#fff", fontWeight: "bold" },

  title: {
    fontSize: 22,
    color: "#f9fafb",
    fontWeight: "bold",
    textAlign: "center",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 12,
  },

  backButton: {
    backgroundColor: "#374151",
    padding: 6,
    borderRadius: 10,
  },
  backText: { color: "#f3f4f6", fontSize: 16 },

  bottomControls: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export const localStyles = StyleSheet.create({
  headerButtonRow: { flexDirection: "row", alignItems: "center" },
  gapStyle: { width: 12 },
  headerTitleContainer: { alignItems: "center", marginVertical: 12 },

  // 🎵 Play button styles
  playButton: {
    backgroundColor: "#2563eb",
    padding: 10, // 👈 കുറച്ച് smaller
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -8, // 👈 അല്പം മുകളിലേക്ക് മാറ്റി
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

});
