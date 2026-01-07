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
  | "qaseedathulBurda"
  | "haddad"
  | "asmaulHusna"
  | "nariyathSwalath"
  | "salawatAlFatih"
  | "ramadanAdhkar"
  | "thajuSwalath"
  | "adhkarAfterSalah"
  | "adhkarAfterSalah2";

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
    arabic: "دعاء\nالقبر",
  },

  manqusMoulid: {
    malayalam: "മൻഖൂസ് മൗലിദ്",
    manglish: "manqoos moulid",
    english: "Manqus Moulid",
    arabic: "مولد المنقوص",
  },

  baderMoulid: {
    // രണ്ട് വരിയിലാക്കി full name കാണിക്കാൻ newline ഉപയോഗിക്കുന്നു
    malayalam: "ബദർ\nമൗലിദ്",
    manglish: "badr moulid",
    english: "Badr Moulid",
    // Arabic-ിലും രണ്ട് വരി
    arabic: "مولد\nبدر",
  },

  qaseedathulBurda: {
    malayalam: "ഖസീദത്തുൽ\nബുർദ",
    manglish: "qaseedathul burda",
    english: "Qaseedathul Burda",
    arabic: "قصيدة\nالبردة",
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

  thajuSwalath: {
    malayalam: "താജുസ്സ്വലാത്ത്",
    manglish: "tajus swalath",
    english: "Tajus Swalath",
    arabic: "صلاة التاج",
  },

  salawatAlFatih: {
    malayalam: "സ്വലാത്ത് അൽ ഫാത്തിഹ്",
    manglish: "salawat al fatih",
    english: "Salawat Al-Fatih",
    arabic: "صلوات الفاتح",
  },

  ramadanAdhkar: {
    malayalam: "റമദാൻ അദ്കാർ",
    manglish: "ramadan adhkar",
    english: "Ramadan Adhkar",
    arabic: "أذكار رمضان",
  },

  adhkarAfterSalah: {
    malayalam: "നിസ്കാര ശേഷം ദിക്‌ർ",
    manglish: "niskar shesham dhikr",
    english: "Adhkar After Salah",
    arabic: "أذكار بعد الصلاة",
  },

  adhkarAfterSalah2: {
    malayalam: "പ്രാർത്ഥനകൾ",
    manglish: "prarthanakal",
    english: "Supplications",
    arabic: "الأدعية",
  },
};

/* ---------------- SECTION TITLES ---------------- */

export const SECTION_TITLES: Record<
  "dua" | "moulid" | "qaseeda" | "ratib" | "swalath" | "asma" | "ramadan" | "salah",
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

  qaseeda: {
    malayalam: "📜 ഖസീദ ശേഖരം",
    english: "📜 Qaseeda Collection",
    arabic: "📜 مجموعة القصائد",
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

  ramadan: {
    malayalam: "🌙 റമദാൻ ശേഖരം",
    english: "🌙 Ramadan Collection",
    arabic: "🌙 مجموعة رمضان",
  },

  salah: {
    malayalam: "🕌 നിസ്കാര ശേഷം ശേഖരം",
    english: "🕌 After Salah Collection",
    arabic: "🕌 مجموعة بعد الصلاة",
  },
};

/* ---------------- SECTION MAPPING ---------------- */

export const SECTION_MAPPING: Record<HomeLabelKey, keyof typeof SECTION_TITLES> = {
  duaMarichavark: "dua",
  duaQabar: "dua",
  manqusMoulid: "moulid",
  baderMoulid: "moulid",
  qaseedathulBurda: "qaseeda",
  haddad: "ratib",
  asmaulHusna: "asma",
  nariyathSwalath: "swalath",
  salawatAlFatih: "swalath",
  ramadanAdhkar: "ramadan",
  thajuSwalath: "swalath",
  adhkarAfterSalah: "salah",
  adhkarAfterSalah2: "salah",
};
