import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  fullFlex: { flex: 1 },

  backButton: {
    margin: 16,
    backgroundColor: "#22c55e",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 24,
    alignSelf: "flex-start",
    shadowColor: "#22c55e",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },

  backText: {
    fontWeight: "700",
    color: "#ffffff",
    fontSize: 16,
  },

  shareButton: {
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#f8fafc",
    textAlign: "center",
    letterSpacing: -0.5,
  },

  flatListContent: {
    paddingVertical: 20,
    paddingBottom: 260,
  },

  textContainer: {
    backgroundColor: "rgba(30, 41, 59, 0.6)",
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },

  activeTextContainer: {
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    borderColor: "#22c55e",
    borderWidth: 2,
    shadowColor: "#22c55e",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 6,
  },

  text: {
    fontSize: 20,
    lineHeight: 34,
    textAlign: "center",
    color: "#f8fafc",
    fontWeight: "400",
  },

  activeText: {
    color: "#22c55e",
    fontWeight: "700",
  },

  bottomControls: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    backgroundColor: "rgba(15, 23, 42, 0.95)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
  },

  playerCard: {
    borderRadius: 20,
    padding: 16,
    elevation: 8,
    backgroundColor: "rgba(30, 41, 59, 0.8)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  slider: {
    width: "100%",
    height: 12,
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  playButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#22c55e",
    width: 56,
    height: 56,
    borderRadius: 28,
    shadowColor: "#22c55e",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 8,
  },

  timeText: {
    fontSize: 13,
    color: "#cbd5e1",
    fontWeight: "600",
  },

  rateControls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 8,
  },

  rateButton: {
    backgroundColor: "rgba(34, 197, 94, 0.2)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(34, 197, 94, 0.3)",
  },

  activeRateButton: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
    shadowColor: "#22c55e",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },

  rateText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#22c55e",
  },

  activeRateText: {
    color: "#ffffff",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  fontControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  fontButton: {
    backgroundColor: "rgba(34, 197, 94, 0.2)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(34, 197, 94, 0.3)",
  },

  fontButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#22c55e",
  },

  fontSizeDisplay: {
    fontSize: 14,
    fontWeight: "700",
    color: "#22c55e",
    minWidth: 40,
    textAlign: "center",
  },

  fontBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    paddingHorizontal: 12,
  },

  fontLabel: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "700",
  },

  fontSlider: {
    flex: 1,
    marginHorizontal: 12,
  },

  fontValue: {
    color: "#22c55e",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    width: 50,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 8,
  },

  iconRow: {
    flexDirection: "row",
    gap: 12,
  },

  whatsappButton: {
    backgroundColor: "#25D366",
    padding: 12,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#25D366",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },

  youtubeButton: {
    backgroundColor: "#FF0000",
    padding: 12,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FF0000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },

  flexOne: { flex: 1 },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  closeButton: {
    padding: 8,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  fontToggleButton: {
    marginRight: 10,
  },
});
