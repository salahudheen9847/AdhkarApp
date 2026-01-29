import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  /* ---------- LAYOUT ---------- */

  flexContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollContent: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 60,
  },

  /* ---------- GRID ---------- */

  innerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
  },

  /* ---------- CARD ---------- */

  card: {
    width: "100%",
    minHeight: 110,          // 🔥 SAME height → no jumping
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  /* ---------- CARD TEXT ---------- */

  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.3,
    color: "#000000",
  },

  // ✅ Malayalam text SAME as section style
  cardTextMalayalam: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.1,
    color: "#000000",
  },

  /* ---------- SECTION ---------- */

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 24,
    paddingHorizontal: 16,
    letterSpacing: 0.2,
  },

  sectionContainer: {
    width: "100%",
    marginBottom: 32,
  },

  sectionDivider: {
    width: "85%",
    height: 1,
    backgroundColor: "#f3f4f6",
    marginVertical: 20,
    alignSelf: "center",
  },

  /* ---------- FAV ICON ---------- */

  favIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
  },
});