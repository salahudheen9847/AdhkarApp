import { StyleSheet, Platform, StatusBar } from "react-native";

export const homeStyles = StyleSheet.create({
  flexContainer: { flex: 1 },

  container: {
    flex: 1,
    backgroundColor: "#fffaf3",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 40 : 20,
  },

  // 🔍 Search Bar Styles
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffe8b0", // 👀 Slightly darker, visible background
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: "90%",
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },

  // ✨ Optional lighter variant (used in your code)
  searchContainerLight: {
    backgroundColor: "#ffefc2",
    marginTop: 10,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#78350f",
  },

  // 📜 Scroll & Section
  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#b45309",
    marginBottom: 12,
    alignSelf: "flex-start",
    marginLeft: 30,
  },

  // 🟫 Grid
  innerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },

  // 🧿 Cards
  card: {
    width: 140,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },

  icon: {
    width: 70, // Slightly bigger
    height: 70,
    marginBottom: 10,
    resizeMode: "contain",
  },

  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#78350f",
    textAlign: "center",
  },

  // ❌ No result message
  noResultText: {
    fontSize: 16,
    color: "#9ca3af",
    marginTop: 30,
  },
  scrollContentWithPadding: {
  paddingBottom: 40,
},

});
