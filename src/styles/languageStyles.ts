import { StyleSheet } from "react-native";

export const langStyles = StyleSheet.create({
  toggleColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 8,
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  toggleItemIndented: {
    marginLeft: 16,
  },
  toggleText: {
    fontSize: 16,
    marginLeft: 4,
  },
  activeText: {
    color: "#22c55e",
  },
  inactiveText: {
    color: "#9ca3af",
  },
});
