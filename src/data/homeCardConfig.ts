// src/data/homeCardConfig.ts

export const SECTION_CARD_CONFIG = {
  daily: {
    id: "dailyLifeDua",
    icon: "restaurant",
    gradient: ["#fde68a", "#facc15"],
  },

  dhikr: {
    id: "dhikr",
    icon: "leaf",
    gradient: ["#bbf7d0", "#4ade80"],
  },

  family: {
    id: "familyDua",
    icon: "people",
    gradient: ["#fef3c7", "#fde68a"],
  },

  health: {
    id: "healthDua",
    icon: "heart",
    gradient: ["#fecaca", "#f87171"],
  },

  /* ===============================
     JUSTICE DUA ⚖️
  =============================== */
  justice: {
    id: "justiceDuas",
    icon: "scale",
    gradient: ["#e0e7ff", "#6366f1"],
  },

  /* ===============================
     KIDS DUA
  =============================== */
  kids: {
    id: "kidsDua",
    icon: "happy",
    gradient: ["#bfdbfe", "#60a5fa"],
  },

  /* ===============================
     MENTAL DUA
  =============================== */
  mental: {
    id: "mentalDua",
    icon: "bulb",
    gradient: ["#e9d5ff", "#c084fc"],
  },

  /* ===============================
     RIZQ DUA
  =============================== */
  rizq: {
    id: "rizqDua",
    icon: "cash",
    gradient: ["#dcfce7", "#4ade80"],
  },

  /* ===============================
     PROTECTION DUA
  =============================== */
  protection: {
    id: "protectionDuas",
    icon: "shield-checkmark",
    gradient: ["#cffafe", "#22d3ee"],
  },

  /* ===============================
     SALAH DUA 🕌
  =============================== */
  salah: {
    id: "salahDuas",
    icon: "time",
    gradient: ["#e0e7ff", "#6366f1"],
  },

  swalath: {
    id: "swalathDuas",
    icon: "heart",
    gradient: ["#fde68a", "#f59e0b"],
  },

  qaseeda: {
    id: "qaseeda",
    icon: "musical-notes",
    gradient: ["#fef3c7", "#f59e0b"],
  },

  ratib: {
    id: "ratib",
    icon: "book",
    gradient: ["#dcfce7", "#22c55e"],
  },

  ramadan: {
    id: "ramadanAdhkar",
    icon: "moon",
    gradient: ["#dcfce7", "#22c55e"],
  },

  mayyit: {
    id: "mayyitDuas",
    icon: "home",
    gradient: ["#e0e7ff", "#6366f1"],
  },

  moulid: {
    id: "moulid",
    icon: "book",
    gradient: ["#fef3c7", "#f59e0b"],
  },

  /* ===============================
     ISLAMIC COURSES (PAID) 📚 ✅
  =============================== */
  courses: {
    id: "vaastuCourse", // Label-ൽ നൽകിയ അതേ ID
    icon: "school",
    gradient: ["#ddd6fe", "#8b5cf6"], // ഒരു Premium ലുക്കിന് വേണ്ടി Purple Gradient
  },
} as const;

/* ===============================
   TYPES (AUTO INFERRED ✅)
=============================== */

export type SectionKey = keyof typeof SECTION_CARD_CONFIG;
export type SectionCardConfig =
  (typeof SECTION_CARD_CONFIG)[SectionKey];