import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  fullFlex: { flex: 1 },

  backButton: {
    margin: 15,
    backgroundColor: "#facc15",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },

  backText: {
    fontWeight: "700",
    color: "#1e293b",
    fontSize: 16,
  },

title: {
  fontSize: 22,
  fontWeight: "700",
  color: "#fff",
  textAlign: "center",
},


  flatListContent: {
    paddingVertical: 20,
    paddingBottom: 240,
  },

  textContainer: {
    backgroundColor: "#1e293b",
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 15,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },

  activeTextContainer: {
    backgroundColor: "#fef9c3",
    borderColor: "#facc15",
    borderWidth: 1.5,
  },

  text: {
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
    color: "#f8fafc",
    fontWeight: "400",
  },

  activeText: {
    color: "#e11d48",
    fontWeight: "700",
  },

 bottomControls: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  paddingVertical: 10,
  paddingHorizontal: 16,
},

  playerCard: {
    borderRadius: 20,
    padding: 12,
    elevation: 6,
    backgroundColor: "#1e293b",
  },

  slider: {
    width: "100%",
    height: 10,
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  playButton: {
    justifyContent: "center",
    alignItems: "center",
  },

  timeText: {
    fontSize: 12,
    color: "#cbd5e1",
  },

  rateControls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },

  rateButton: {
    backgroundColor: "#facc15",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginHorizontal: 4,
  },

  activeRateButton: {
    backgroundColor: "#e11d48",
  },

  rateText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1e293b",
  },

  activeRateText: {
    color: "#fff",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  fontControls: {
    flexDirection: "row",
    alignItems: "center",
  },

  fontButton: {
    backgroundColor: "#facc15",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginHorizontal: 5,
  },

  fontButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
  },

  fontSizeDisplay: {
    fontSize: 14,
    fontWeight: "600",
    color: "#facc15",
  },

  fontBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  fontLabel: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "600",
  },

  fontSlider: {
    flex: 1,
    marginHorizontal: 10,
  },

  fontValue: {
    color: "#facc15",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    width: 50,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 4,
  },

  iconRow: {
    flexDirection: "row",
    gap: 10,
  },

  whatsappButton: {
    backgroundColor: "#25D366",
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },

  youtubeButton: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  flexOne: { flex: 1 },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  closeButton: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  
});
