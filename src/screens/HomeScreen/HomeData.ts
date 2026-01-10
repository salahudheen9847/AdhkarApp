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
  | "elderlyParentsDuas"
  | "windStormDuas"
  | "fearPanicDuas"
  | "examDuas"
  | "hospitalSurgeryDuas"
  | "oppressionJusticeDuas"
  | "newbornDuas"
  | "familyUnityDuas"
  | "griefLossDuas"
  | "innerPeaceDuas"
  | "stressReliefDuas"
  | "badDreamDuas"
  | "angerControlDuas"
  | "protectionFromGossipDuas"
  | "kidsDailyDuas"
  | "kidsLearningDuas"
  | "breastfeedingDuas"
  | "singleParentDuas"
  | "successMotivationDuas"
  | "debtReliefDuas"
  | "houseLandDuas"
  | "businessLossRecoveryDuas"
  | "courtCaseDuas"
  | "nazarBlackMagicProtectionDuas"
  | "clothingDuas"
  | "salamBaithFull"
  | "ashraqaBaithFull";

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

  windStormDuas: {
    malayalam: "കാറ്റ് / കൊടുങ്കാറ്റ് സമയത്തെ ദുആകൾ",
    manglish: "katru / kodungatru samayathulla duakal",
    english: "Wind & Storm Duas",
    arabic: "أَدْعِيَةُ الرِّيَاحِ وَالْعَوَاصِفِ",
  },

  fearPanicDuas: {
    malayalam: "ഭയവും പാനിക്കും സമയത്തെ ദുആകൾ",
    manglish: "bhayavum panikkum samayathulla duakal",
    english: "Fear & Panic Duas",
    arabic: "أَدْعِيَةُ الْخَوْفِ وَالْقَلَقِ",
  },

  examDuas: {
    malayalam: "പരീക്ഷയ്ക്കുള്ള ദുആകൾ",
    manglish: "pareekshaykkulla duakal",
    english: "Exam Duas",
    arabic: "أَدْعِيَةُ الِامْتِحَانِ",
  },

  hospitalSurgeryDuas: {
    malayalam: "ആശുപത്രി / ശസ്ത്രക്രിയ്ക്കുള്ള ദുആകൾ",
    manglish: "ashupathra / shasthra prathyaykkulla duakal",
    english: "Hospital & Surgery Duas",
    arabic: "أَدْعِيَةُ الْمَرَضِ وَالْعِلَاجِ",
  },

  oppressionJusticeDuas: {
    malayalam: "അന്യായവും നീതിയും സംബന്ധിച്ച ദുആകൾ",
    manglish: "anyayavum ninithyum sambandhichcha duakal",
    english: "Oppression & Justice Duas",
    arabic: "أَدْعِيَةُ الظُّلْمِ وَالْعَدْلِ",
  },

  newbornDuas: {
    malayalam: "പുതുജാത ശിശുവിനുള്ള ദുആകൾ",
    manglish: "puthujatha shishuvinulla duakal",
    english: "Newborn Duas",
    arabic: "أَدْعِيَةُ الْمَوْلُودِ",
  },

  familyUnityDuas: {
    malayalam: "കുടുംബ ഐക്യത്തിനായുള്ള ദുആകൾ",
    manglish: "kudumba aiyathinulla duakal",
    english: "Family Unity Duas",
    arabic: "أَدْعِيَةُ تَمَاسُكِ الْأُسْرَةِ",
  },

  griefLossDuas: {
    malayalam: "ദുഃഖവും നഷ്ടവും സമ്പത്തെ ദുആകൾ",
    manglish: "dukhavum nashtavum sambaththe duakal",
    english: "Grief & Loss Duas",
    arabic: "أَدْعِيَةُ الْحُزْنِ وَالْمُصِيبَةِ",
  },

  innerPeaceDuas: {
    malayalam: "ഹൃദയ സമാധാനത്തിനുള്ള ദുആകൾ",
    manglish: "hrudaya samadhanathinulla duakal",
    english: "Inner Peace Duas",
    arabic: "أَدْعِيَةُ السَّكِينَةِ وَطُمَأْنِينَةِ الْقَلْبِ",
  },

  stressReliefDuas: {
    malayalam: "സമ്മർദ്ദവും മനസ്സിന്റെ ഭാരം മാറാൻ ഉള്ള ദുആകൾ",
    manglish: "sammerddavum manassinre bharan maran ullulla duakal",
    english: "Stress Relief Duas",
    arabic: "أَدْعِيَةُ إِزَالَةِ الضَّغْطِ وَالضِّيقِ",
  },

  badDreamDuas: {
    malayalam: "ദുഃസ്വപ്നം കണ്ടാൽ ചൊല്ലേണ്ട ദുആകൾ",
    manglish: "duswapnam kandal chollenda duakal",
    english: "Bad Dream Duas",
    arabic: "أَدْعِيَةُ الرُّؤْيَا السَّيِّئَةِ",
  },

  angerControlDuas: {
    malayalam: "കോപം നിയന്ത്രിക്കാൻ ഉള്ള ദുആകൾ",
    manglish: "kopam niyantrikkanulla duakal",
    english: "Anger Control Duas",
    arabic: "أَدْعِيَةُ كَظْمِ الْغَيْظِ",
  },

  protectionFromGossipDuas: {
    malayalam: "നാവിന്റെ പാപങ്ങളും നിന്ന് സംരക്ഷിക്കാനുള്ള ദുആകൾ",
    manglish: "navinre papangalum ninnu samrakshikkayulla duakal",
    english: "Protection from Gossip Duas",
    arabic: "أَدْعِيَةُ الْحِفْظِ مِنَ الْغِيبَةِ وَالْأَذَى",
  },

  kidsDailyDuas: {
    malayalam: "കുട്ടികൾക്കുള്ള ദിവസേന ദുആകൾ",
    manglish: "kuttikalkkunulla divasena duakal",
    english: "Kids Daily Duas",
    arabic: "أَدْعِيَةُ الْأَطْفَالِ الْيَوْمِيَّةِ",
  },

  kidsLearningDuas: {
    malayalam: "കുട്ടികളുടെ പഠനത്തിനുള്ള ദുആകൾ",
    manglish: "kuttikalkude padanathinulla duakal",
    english: "Kids Learning Duas",
    arabic: "أَدْعِيَةُ طَلَبِ الْعِلْمِ لِلْأَطْفَالِ",
  },

  breastfeedingDuas: {
    malayalam: "സ്തനപാനം സമയത്തെ ദുആകൾ",
    manglish: "sthapanam samayatthe duakal",
    english: "Breastfeeding Duas",
    arabic: "أَدْعِيَةُ الرِّضَاعَةِ",
  },

  singleParentDuas: {
    malayalam: "ഒറ്റ രക്ഷിതാവിനുള്ള ദുആകൾ",
    manglish: "ottra rakshithavinulla duakal",
    english: "Single Parent Duas",
    arabic: "أَدْعِيَةُ الْوَالِدِ/الْوَالِدَةِ الْمُنْفَرِدِ",
  },

  successMotivationDuas: {
    malayalam: "വിജയത്തിനും ആത്മവിശ്വാസത്തിനുമുള്ള ദുആകൾ",
    manglish: "vijayavum athmavishvasastthinulla duakal",
    english: "Success & Motivation Duas",
    arabic: "أَدْعِيَةُ النَّجَاحِ وَالتَّحْفِيزِ",
  },

  debtReliefDuas: {
    malayalam: "കടം തീരാനും സാമ്പത്തിക ബുദ്ധിമുട്ടുകൾ മാറാനും ദുആകൾ",
    manglish: "kadam thiranum samapathika budhimuttukal maranum duakal",
    english: "Debt Relief & Financial Hardship Duas",
    arabic: "أَدْعِيَةُ قَضَاءِ الدَّيْنِ",
  },

  houseLandDuas: {
    malayalam: "വീട് / ഭൂമി ലഭിക്കാൻ ഉള്ള ദുആകൾ",
    manglish: "veet / bhoomi labikkayulla duakal",
    english: "House & Land Duas",
    arabic: "أَدْعِيَةُ السَّكَنِ وَالْمَسْكَنِ",
  },

  businessLossRecoveryDuas: {
    malayalam: "വ്യാപാര നഷ്ടം മാറാനും ബറകത്ത് ലഭിക്കാനുമുള്ള ദുആകൾ",
    manglish: "vyapar nasham maranum barakath labikkayumulla duakal",
    english: "Business Loss Recovery Duas",
    arabic: "أَدْعِيَةُ جَبْرِ الْخَسَارَةِ وَالْبَرَكَةِ فِي التِّجَارَةِ",
  },

  courtCaseDuas: {
    malayalam: "കോടതി / കേസ് വിഷയങ്ങളിൽ ചൊല്ലേണ്ട ദുആകൾ",
    manglish: "kottati / kisu vishayangalilin chollenda duakal",
    english: "Court & Legal Case Duas",
    arabic: "أَدْعِيَةُ الْقَضَاءِ وَنُصْرَةِ الْحَقِّ",
  },

  nazarBlackMagicProtectionDuas: {
    malayalam: "കണ്ണേറും മന്ത്രവും നിന്ന് സംരക്ഷിക്കാനുള്ള ദുആകൾ",
    manglish: "kannerum mantravum ninnu samrakshikkayulla duakal",
    english: "Nazar & Black Magic Protection Duas",
    arabic: "أَدْعِيَةُ الْحِفْظِ مِنَ الْحَسَدِ وَالسِّحْرِ",
  },

  clothingDuas: {
    malayalam: "വസ്ത്രം ധരിക്കുമ്പോർ",
    manglish: "vesthram dhurikumpoy",
    english: "Duas for Clothing",
    arabic: "أَدْعِيَةُ اللِّبَاسِ",
  },

  salamBaithFull: {
    malayalam: "സലാം ബൈത്ത് (പൂർണ്ണരൂപം)",
    manglish: "salam baith (poornna roopam)",
    english: "Assalamu Alaika Baith (Full Version)",
    arabic: "أَسَّلَامُ عَلَيْكَ - بَيْتُ السَّلَام",
  },

  ashraqaBaithFull: {
    malayalam: "അശ്റഖ ബൈത്ത്",
    manglish: "ashraqa baith",
    english: "Ashraqa Baith (Marhaban)",
    arabic: "أَشْرَقَ الْبَدْرُ عَلَيْنَا - بَيْتُ الأَشْرَق",
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
  windStormDuas: "dua",
  fearPanicDuas: "dua",
  examDuas: "dua",
  hospitalSurgeryDuas: "dua",
  oppressionJusticeDuas: "dua",
  newbornDuas: "dua",
  familyUnityDuas: "dua",
  griefLossDuas: "dua",
  innerPeaceDuas: "dua",
  stressReliefDuas: "dua",
  badDreamDuas: "dua",
  angerControlDuas: "dua",
  protectionFromGossipDuas: "dua",
  kidsDailyDuas: "dua",
  kidsLearningDuas: "dua",
  breastfeedingDuas: "dua",
  singleParentDuas: "dua",
  successMotivationDuas: "dua",
  debtReliefDuas: "dua",
  houseLandDuas: "dua",
  businessLossRecoveryDuas: "dua",
  courtCaseDuas: "dua",
  nazarBlackMagicProtectionDuas: "dua",
  clothingDuas: "dua",
  salamBaithFull: "dua",
  ashraqaBaithFull: "dua",
};
