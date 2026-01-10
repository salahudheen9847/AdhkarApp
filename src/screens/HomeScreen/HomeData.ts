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
  | "adhkarAfterSalah2"
  | "talqeenMen"
  | "salawatulIbrahimiyya"
  | "atTahiyyat"
  | "duaUlQunoot"
  | "morningAdhkarComplete"
  | "eveningAdhkarComplete"
  | "beforeSleepAdhkar"
  | "wakeUpAdhkar"
  | "foodDuas"
  | "travelDuas"
  | "homeDuas"
  | "jumuahAdhkar"
  | "protectionDuas"
  | "duaForSick"
  | "istikharaDua"
  | "kidsIslamicDuas"
  | "masjidDuas"
  | "adhanIqamahDuas"
  | "shortSurahsForKids"
  | "janazahDuas"
  | "zakatDuas"
  | "taubahDuas"
  | "duasForParents"
  | "rainDuas"
  | "duasForChildren"
  | "sicknessDuas"
  | "anxietyWorryDuas"
  | "workRizqDuas"
  | "marriageDuas"
  | "forgivenessDuas"
  | "pregnancyDuas"
  | "knowledgeDuas"
  | "akhirahDuas"
  | "husbandWifeDuas"
  | "elderlyParentsDuas";

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
  malayalam: "റതീബ് അൽ-ഹദ്ദാദ്",
  manglish: "Ratib al-Haddad",
  english: "Ratib al-Haddad",
  arabic: "حزب الحداد",
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
    arabic: "أذكار بعد الصلاة",
  },

  talqeenMen: {
    malayalam: "പുരുഷന്മാർക്കുള്ള തൽഖീൻ",
    manglish: "purushanmarkkulla thalqeen",
    english: "Talqeen for Men",
    arabic: "تَلْقِينُ الْمَيِّتِ",
  },

  salawatulIbrahimiyya: {
    malayalam: "സ്വലാത്തുൽ ഇബ്രാഹീമിയ്യ",
    manglish: "swalathul ibrahimiyya",
    english: "Swalathul Ibrahimiyya",
    arabic: "الصَّلَاةُ الإِبْرَاهِيمِيَّةُ",
  },

  atTahiyyat: {
    malayalam: "അത്തഹിയ്യാത്ത് (തഷഹ്‌ഹുദ്)",
    manglish: "at tahiyyat (tashahhud)",
    english: "At-Tahiyyat (Tashahhud)",
    arabic: "التَّحِيَّاتُ",
  },

  duaUlQunoot: {
    malayalam: "ദുആ-ഉൽ ഖുനൂത്",
    manglish: "dwa ul qunoot",
    english: "Dua-ul-Qunoot",
    arabic: "دُعَاءُ الْقُنُوتِ",
  },

  morningAdhkarComplete: {
    malayalam: "പ്രഭാത ദിക്റുകാ (പൂർണം)",
    manglish: "prabhaadh dhikr (poornam)",
    english: "Morning Adhkar (Complete)",
    arabic: "أَذْكَارُ الصَّبَاحِ",
  },

  eveningAdhkarComplete: {
    malayalam: "സന്ധ്യ ദിക്റുകാ (പൂർണ്ണം)",
    manglish: "sandhya dhikr (poornam)",
    english: "Evening Adhkar (Complete)",
    arabic: "أَذْكَارُ الْمَسَاءِ",
  },

  beforeSleepAdhkar: {
    malayalam: "ഉറങ്ങുന്നതിന് മുമ്പുള്ള ദിക്റുകാ",
    manglish: "urangunthin mumpulla dhikr",
    english: "Before Sleep Adhkar",
    arabic: "أَذْكَارُ مَا قَبْلَ النَّوْمِ",
  },

  wakeUpAdhkar: {
    malayalam: "ഉണരുമ്പോഴുള്ള ദിക്റുകാ",
    manglish: "unarumpolla dhikr",
    english: "Wake-up Adhkar",
    arabic: "أَذْكَارُ الِاسْتِيقَاظِ",
  },

  foodDuas: {
    malayalam: "ഭക്ഷണ ദുആകൾ",
    manglish: "bhaksha duwa",
    english: "Food Duas",
    arabic: "أَدْعِيَةُ الطَّعَامِ",
  },

  travelDuas: {
    malayalam: "യാത്രാ ദുആകൾ",
    manglish: "yathra duwa",
    english: "Travel Duas",
    arabic: "أَدْعِيَةُ السَّفَرِ",
  },

  homeDuas: {
    malayalam: "വീട്ടിൽ കയറുമ്പോൾ / ഇറങ്ങുമ്പോൾ ദുആകൾ",
    manglish: "veedu mumpolla duwa",
    english: "Home Entry & Exit Duas",
    arabic: "أَدْعِيَةُ دُخُولِ وَخُرُوجِ الْبَيْتِ",
  },

  jumuahAdhkar: {
    malayalam: "ജുമുഅ ദിവസം പ്രത്യേക്ഷിക്കുന്നു.",
    manglish: "jumuah adhkar",
    english: "Jumu'ah Special Adhkar",
    arabic: "أَذْكَارُ يَوْمِ الْجُمُعَةِ",
  },

  protectionDuas: {
    malayalam: "സംരക്ഷണ ദുആകൾ",
    manglish: "samrakshana duwa",
    english: "Protection Duas",
    arabic: "أَدْعِيَةُ الْحِفْظِ وَالْوِقَايَةِ",
  },

  duaForSick: {
    malayalam: "രോഗിക്ക് / ബുദ്ധിമുട്ടിൽ ഉള്ളവർക്ക് ദുആകൾ",
    manglish: "rogam budhima duwa",
    english: "Duas for the Sick & Distressed",
    arabic: "أَدْعِيَةُ الْمَرَضَى",
  },

  istikharaDua: {
    malayalam: "ഇസ്തിഖാര ദുആ",
    manglish: "istikhara dua",
    english: "Istikhara Dua",
    arabic: "دُعَاءُ الاِسْتِخَارَةِ",
  },

  kidsIslamicDuas: {
    malayalam: "കുട്ടികൾക്കുള്ള ഇസ്‌ലാമിക് ദുആകൾ",
    manglish: "kids islamic duwa",
    english: "Kids Islamic Duas",
    arabic: "أَدْعِيَةُ الْأَطْفَالِ",
  },

  masjidDuas: {
    malayalam: "മസ്ജിദ് ദുആകൾ",
    manglish: "masjid duwa",
    english: "Masjid Duas",
    arabic: "أَدْعِيَةُ الْمَسْجِدِ",
  },

  adhanIqamahDuas: {
    malayalam: "അദാൻ & ഇഖാമ ദുആകൾ",
    manglish: "adhan iqamah duwa",
    english: "Adhan & Iqamah Duas",
    arabic: "أَدْعِيَةُ الأَذَانِ وَالإِقَامَةِ",
  },

  shortSurahsForKids: {
    malayalam: "കുട്ടികൾക്കുള്ള ചെറിയ സൂറകൾ",
    manglish: "short surahs kids",
    english: "Short Surahs for Kids",
    arabic: "سُّوَرُ الْقِصَارُ لِلْأَطْفَالِ",
  },

  janazahDuas: {
    malayalam: "ജനാസ നമസ്കാര ദുആകൾ",
    manglish: "janazah namaskar duakal",
    english: "Janazah Prayer Duas",
    arabic: "دُعَاءُ صَلَاةِ الْجَنَازَةِ",
  },

  zakatDuas: {
    malayalam: "സകാത്ത് ദുആകൾ",
    manglish: "zakath duakal",
    english: "Zakat Duas",
    arabic: "أَدْعِيَةُ الزَّكَاةِ",
  },

  taubahDuas: {
    malayalam: "തൗബ (പശ്ചാത്താപ) ദുആകൾ",
    manglish: "thuba (paschathap) duakal",
    english: "Taubah & Repentance Duas",
    arabic: "أَدْعِيَةُ التَّوْبَةِ وَالِاسْتِغْفَارِ",
  },

  duasForParents: {
    malayalam: "മാതാപിതാക്കൾക്കായുള്ള ദുആകൾ",
    manglish: "mathapithakalkkayulla duakal",
    english: "Duas for Parents",
    arabic: "أَدْعِيَةٌ لِلْوَالِدَيْنِ",
  },

  rainDuas: {
    malayalam: "മഴക്കായുള്ള ദുആകൾ",
    manglish: "mazhakkayulla duakal",
    english: "Rain Duas",
    arabic: "أَدْعِيَةُ الْمَطَرِ",
  },

  duasForChildren: {
    malayalam: "കുട്ടികൾക്കായുള്ള ദുആകൾ",
    manglish: "kuttikalkkayulla duakal",
    english: "Duas for Children",
    arabic: "أَدْعِيَةٌ لِلْأَوْلَادِ",
  },

  sicknessDuas: {
    malayalam: "രോഗാവസ്ഥയിൽ ദുആകൾ",
    manglish: "rogavisham duakal",
    english: "Duas for Sickness",
    arabic: "أَدْعِيَةُ الْمَرَضِ",
  },

  anxietyWorryDuas: {
    malayalam: "ആകുലതയും ദുഃഖവും മാറാൻ ദുആകൾ",
    manglish: "akulathum dukhavum maran duakal",
    english: "Anxiety & Worry Duas",
    arabic: "أَدْعِيَةُ الْهَمِّ وَالْحُزْنِ",
  },

  workRizqDuas: {
    malayalam: "ജോലിക്കും ഉപജീവനത്തിനും ദുആകൾ",
    manglish: "jolikkum upajeevanathinum duakal",
    english: "Work & Rizq Duas",
    arabic: "أَدْعِيَةُ الْعَمَلِ وَالرِّزْقِ",
  },

  marriageDuas: {
    malayalam: "വിവാഹത്തിനായുള്ള ദുആകൾ",
    manglish: "vivavathinayulla duakal",
    english: "Marriage Duas",
    arabic: "أَدْعِيَةُ الزَّوَاجِ",
  },

  forgivenessDuas: {
    malayalam: "ക്ഷമയ്ക്കായുള്ള ദുആകൾ",
    manglish: "kshamykkayulla duakal",
    english: "Forgiveness Duas",
    arabic: "أَدْعِيَةُ الْمَغْفِرَةِ",
  },

  pregnancyDuas: {
    malayalam: "ഗർഭകാല ദുആകൾ",
    manglish: "garbakkal duakal",
    english: "Pregnancy Duas",
    arabic: "أَدْعِيَةُ الْحَمْلِ",
  },

  knowledgeDuas: {
    malayalam: "വിദ്യക്കും അറിവിനും വേണ്ട ദുആകൾ",
    manglish: "vidyakkum ariwinum vendha duakal",
    english: "Knowledge Duas",
    arabic: "أَدْعِيَةُ الْعِلْمِ",
  },

  akhirahDuas: {
    malayalam: "ആഖിറത്തിനായുള്ള ദുആകൾ",
    manglish: "akhiraththinayulla duakal",
    english: "Akhirah Duas",
    arabic: "أَدْعِيَةُ الْآخِرَةِ",
  },

  husbandWifeDuas: {
    malayalam: "ഭർത്താവും ഭാര്യയും തമ്മിലുള്ള ദുആകൾ",
    manglish: "bharthavum bharyayum thammillulla duakal",
    english: "Husband & Wife Duas",
    arabic: "أَدْعِيَةٌ بَيْنَ الزَّوْجَيْنِ",
  },

  elderlyParentsDuas: {
    malayalam: "വൃദ്ധ മാതാപിതാക്കാക്കായുള്ള ദുആകൾ",
    manglish: "vrudha mathaapithakayulla duakal",
    english: "Duas for Elderly Parents",
    arabic: "أَدْعِيَةٌ لِلْوَالِدَيْنِ فِي الْكِبَرِ",
  },
};

/* ---------------- SECTION TITLES ---------------- */

export const SECTION_TITLES: Record<
  "dua" | "moulid" | "qaseeda" | "ratib" | "swalath" | "asma" | "ramadan" | "salah" | "protection",
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
    malayalam: "📖 ഖസീദ ശേഖരം",
    english: "📖 Qaseeda Collection",
    arabic: "📖 مجموعة القصيدة",
  },

  ratib: {
    malayalam: "📿 റത്തീബ് ശേഖരം",
    english: "📿 Ratib Collection",
    arabic: "📿 مجموعة الراتب",
  },

  swalath: {
    malayalam: "🤲 സ്വലാത്ത് ശേഖരം",
    english: "🤲 Swalath Collection",
    arabic: "🤲 مجموعة الصلاة",
  },

  asma: {
    malayalam: "🌟 അസ്മാഉൽ ഹുസ്ന",
    english: "🌟 Asmaul Husna",
    arabic: "🌟 أسماء الله الحسنى",
  },

  ramadan: {
    malayalam: "🌙 റമദാൻ ദിക്റുകൾ",
    english: "🌙 Ramadan Adhkar",
    arabic: "🌙 أذكار رمضان",
  },

  salah: {
    malayalam: "🤲 നമസ്കാരം ശേഖരം",
    english: "🤲 Salah Collection",
    arabic: "🤲 مجموعة الصلاة",
  },

  protection: {
    malayalam: "🛡️ സംരക്ഷണ ദുആകൾ",
    english: "🛡️ Protection Duas",
    arabic: "🛡️ أدعية الحفظ والوقاية",
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
  talqeenMen: "dua",
  salawatulIbrahimiyya: "swalath",
  atTahiyyat: "salah",
  duaUlQunoot: "dua",
  morningAdhkarComplete: "ramadan",
  eveningAdhkarComplete: "ramadan",
  beforeSleepAdhkar: "ramadan",
  wakeUpAdhkar: "ramadan",
  foodDuas: "dua",
  travelDuas: "dua",
  homeDuas: "dua",
  jumuahAdhkar: "dua",
  protectionDuas: "protection",
  duaForSick: "dua",
  istikharaDua: "dua",
  kidsIslamicDuas: "dua",
  masjidDuas: "dua",
  adhanIqamahDuas: "dua",
  shortSurahsForKids: "dua",
  janazahDuas: "dua",
  zakatDuas: "dua",
  taubahDuas: "dua",
  duasForParents: "dua",
  rainDuas: "dua",
  duasForChildren: "dua",
  sicknessDuas: "dua",
  anxietyWorryDuas: "dua",
  workRizqDuas: "dua",
  marriageDuas: "dua",
  forgivenessDuas: "dua",
  pregnancyDuas: "dua",
  knowledgeDuas: "dua",
  akhirahDuas: "dua",
  husbandWifeDuas: "dua",
  elderlyParentsDuas: "dua",
};
