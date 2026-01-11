import { StyleSheet, Platform, StatusBar } from "react-native";

export const homeStyles = StyleSheet.create({
  /* ---------- LAYOUT ---------- */

  flexContainer: { flex: 1 },

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

  appTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#171717",
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
    color: "#262626",
    textAlign: "center",
    paddingHorizontal: 6,
    lineHeight: 16,
  },

  /* ---------- EMPTY ---------- */

  noResultText: {
    fontSize: 16,
    color: "#a3a3a3",
    marginTop: 40,
    fontWeight: "500",
  },
});
