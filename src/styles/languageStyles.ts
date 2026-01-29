import { StyleSheet } from "react-native";

export const langStyles = StyleSheet.create({
  pillRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  pill: {
    flex: 1,
    marginHorizontal: 2,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },

  pillActive: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
    shadowColor: "#22c55e",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },

  pillText: {
    color: "#6b7280",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: -0.2,
  },

  pillTextActive: {
    color: "#ffffff",
    fontWeight: "700",
  },
  
});