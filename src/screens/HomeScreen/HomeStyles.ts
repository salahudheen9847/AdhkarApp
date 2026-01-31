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
    justifyContent: "flex-start", // 3 എണ്ണം കൃത്യമായി വരാൻ start ഉപയോഗിക്കുക
    width: "100%",
    paddingHorizontal: 8,
  },

  /* ---------- CARD ---------- */

  card: {
    width: "100%",
    minHeight: 95, // 3 കാർഡുകൾക്ക് അനുയോജ്യമായ ഉയരം
    borderRadius: 16, // അല്പം കുറച്ചു

    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 12,
    paddingHorizontal: 6,
    marginBottom: 8,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    backgroundColor: "#ffffff",
  },

  /* ---------- CARD TEXT ---------- */

  cardText: {
    marginTop: 6,
    fontSize: 11, // 3 കാർഡുകൾ വരുമ്പോൾ 11-12 ആണ് നല്ലത്
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 14,
    color: "#000000",
  },

  cardTextMalayalam: {
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000",
  },

  /* ---------- SECTION ---------- */

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    margin: 0,
  },

  headingCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    width: '92%', // സെക്ഷൻ ടൈറ്റിൽ വീതി ക്രമീകരിച്ചു
  },

  sectionContainer: {
    width: "100%",
    marginBottom: 24,
  },

  sectionDivider: {
    width: "85%",
    height: 1,
    backgroundColor: "#f3f4f6",
    marginVertical: 15,
    alignSelf: "center",
  },

  favIcon: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 10,
  },
});