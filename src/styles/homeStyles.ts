import { StyleSheet, Platform, StatusBar } from "react-native";

export const homeStyles = StyleSheet.create({
  flexContainer: { flex: 1 },

  container: {
    flex: 1,
    backgroundColor: "#fafaf9", // Premium neutral background
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 40 : 20,
  },

  // 🔍 Enhanced Search Bar with Premium Design
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "90%",
    marginBottom: 20,
    marginTop: 8,
    // Premium shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },

  searchContainerLight: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },

  searchIcon: {
    marginRight: 10,
    opacity: 0.6,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#262626",
    fontWeight: "400",
  },

  // 📜 Scroll & Section with Better Spacing
  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#171717",
    marginBottom: 16,
    marginTop: 24,
    alignSelf: "flex-start",
    marginLeft: 20,
    letterSpacing: -0.5,
  },

  // 🟫 Modern Grid with Better Spacing - Professional Layout
  innerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  // 🧿 Premium Cards with Glassmorphism - Professional Look
  card: {
    width: 140,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // Premium shadow system
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 5,
    backgroundColor: "#ffffff",
    // Subtle border for depth
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    overflow: "hidden",
  },

  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },

  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#262626",
    textAlign: "center",
    paddingHorizontal: 8,
    lineHeight: 18,
  },

  // ❌ No result message with better styling
  noResultText: {
    fontSize: 16,
    color: "#a3a3a3",
    marginTop: 40,
    fontWeight: "500",
  },

  scrollContentWithPadding: {
    paddingBottom: 40,
  },

  // 🌐 Modern Language Switch
  languageSwitch: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    padding: 4,
    gap: 4,
    // Subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  langButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    // Smooth transition effect
    backgroundColor: "transparent",
  },

  langActive: {
    backgroundColor: "#16a34a", // Islamic green
    shadowColor: "#16a34a",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },

  langText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#525252",
  },

  langTextActive: {
    color: "#ffffff",
    fontWeight: "700",
  },

  searchInputArabic: {
    textAlign: "right",
  },

  // 🎨 Gradient Overlay for Cards (optional enhancement)
  cardGradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    opacity: 0.05,
  },
});
