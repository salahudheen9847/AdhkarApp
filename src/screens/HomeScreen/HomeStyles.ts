import { StyleSheet, Platform, StatusBar } from "react-native";

export const homeStyles = StyleSheet.create({
  /* ---------- LAYOUT ---------- */

  flexContainer: { flex: 1 },

  backButton: {
    backgroundColor: "#f8fafc",
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight || 40) + 8 : 20,
    paddingBottom: 12,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },

  appTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    flex: 1,
    letterSpacing: -0.5,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  placeholder: {
    width: 40,
  },

  container: {
    flex: 1,
    backgroundColor: "#fafaf9",
    alignItems: "center",
    paddingTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight || 40
        : 20,
  },

  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
  },

  /* ---------- HEADER ---------- */

  header: {
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  optionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
  },

  /* ---------- LANGUAGE SWITCH ---------- */

  languageSwitch: {
    flexDirection: "row",
    width: "85%",          // 🔽 slightly smaller
    marginBottom: 14,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    padding: 4,
    gap: 4,
  },

  langButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  langActive: {
    backgroundColor: "#16a34a",
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

  /* ---------- SEARCH (COMPACT) ---------- */

searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#ffffff",
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 12,
  width: "60%",          // ✅ wider
  marginBottom: 18,
},


  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#262626",
  },

  searchInputArabic: {
    textAlign: "right",
  },

  /* ---------- GRID (3 PER ROW) ---------- */

  innerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // 🔑 important
    paddingHorizontal: 16,
    width: "100%",
  },

  /* ---------- CARD (3 COLUMN) ---------- */

  card: {
    width: "31%",          // ✅ 3 cards per row
    aspectRatio: 1,       // square card
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    elevation: 5,
    marginBottom: 14,
  },

  emoji: {
    fontSize: 26,          // 🔽 slightly smaller
    marginBottom: 6,
  },

  cardText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000000",  // ✅ Black text for better visibility
    textAlign: "center",
    paddingHorizontal: 6,
    lineHeight: 16,
  },

  cardSectionHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  /* ---------- EMPTY ---------- */

  noResultText: {
    fontSize: 16,
    color: "#a3a3a3",
    marginTop: 40,
    fontWeight: "500",
  },
  favIcon: {
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 10,
},

sectionHeading: {
  width: "100%",
  marginVertical: 10,
  paddingHorizontal: 16,
  fontSize: 18,
  fontWeight: "700",
  color: "#16a34a",
},

});
