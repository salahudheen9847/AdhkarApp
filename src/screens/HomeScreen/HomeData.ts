// HomeScreen/HomeData.ts

/* ---------------- TYPES ---------------- */

export type AppLanguage = "malayalam" | "english" | "arabic";

/**
 * Manglish UI language അല്ല ❌
 * Search helper മാത്രമാണ് ✅
 */
export type HomeLabel = {
  malayalam: string;
  manglish: string;
  english: string;
  arabic: string;
};

export type HomeLabelKey =
  | "duaMarichavark"
  | "duaQabar"
  | "manqusMoulid"
  | "baderMoulid"
  | "haddad"
  | "asmaulHusna"
  | "nariyathSwalath"
  | "salawatAlFatih";

/* ---------------- HOME LABELS ---------------- */

export const HOME_LABELS: Record<HomeLabelKey, HomeLabel> = {
  duaMarichavark: {
    malayalam: "മരിച്ചവർക്കുള്ള ദുആ",
    manglish: "marichavarkulla dua",
    english: "Dua for the Deceased",
    arabic: "دعاء للميت",
  },

  duaQabar: {
    malayalam: "ഖബറിലെ ദുആ",
    manglish: "kabarile dua",
    english: "Dua in the Grave",
    arabic: "دعاء القبر",
  },

  manqusMoulid: {
    malayalam: "മൻഖൂസ് മൗലിദ്",
    manglish: "manqoos moulid",
    english: "Manqus Moulid",
    arabic: "مولد المنقوص",
  },

  baderMoulid: {
    malayalam: "ബദർ മൗലിദ്",
    manglish: "badar moulid",
    english: "Bader Moulid",
    arabic: "مولد بدر",
  },

  haddad: {
    malayalam: "റാത്തിബ് അൽ ഹദ്ദാദ്",
    manglish: "ratib al haddad",
    english: "Ratib al-Haddad",
    arabic: "راتب الحداد",
  },

  asmaulHusna: {
    malayalam: "അസ്മാഉൽ ഹുസ്ന",
    manglish: "asmaul husna",
    english: "Asmaul Husna",
    arabic: "أسماء الله الحسنى",
  },

  nariyathSwalath: {
    malayalam: "നാരിയത് സ്വലാത്ത്",
    manglish: "nariyath swalath",
    english: "nariyath Swalath",
    arabic: "صلاة النية",
  },

  salawatAlFatih: {
    malayalam: "സ്വലാത്ത് അൽ ഫാത്തിഹ്",
    manglish: "salawat al fatih",
    english: "Salawat Al-Fatih",
    arabic: "صلوات الفاتح",
  },
};

/* ---------------- SECTION TITLES ---------------- */

export const SECTION_TITLES: Record<
  "dua" | "moulid" | "ratib" | "swalath" | "asma",
  Record<AppLanguage, string>
> = {
  dua: {
    malayalam: "📿 ദുആ ശേഖരം",
    english: "📿 Dua Collection",
    arabic: "📿 مجموعة الأدعية",
  },

  moulid: {
    malayalam: "🌙 മൗലിദ് ശേഖരം",
    english: "🌙 Moulid Collection",
    arabic: "🌙 مجموعة المولد",
  },

  ratib: {
    malayalam: "📖 റാത്തിബ് ശേഖരം",
    english: "📖 Ratib Collection",
    arabic: "📖 مجموعة الراتب",
  },

  swalath: {
    malayalam: "🤍 സ്വലാത്ത് ശേഖരം",
    english: "🤍 Swalath Collection",
    arabic: "🤍 مجموعة الصلوات",
  },

  asma: {
    malayalam: "🕋 അസ്മാഉൽ ഹുസ്ന",
    english: "🕋 Asmaul Husna",
    arabic: "🕋 أسماء الله الحسنى",
  },
};
