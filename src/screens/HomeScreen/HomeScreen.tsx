import React, { useState, useMemo } from "react";
import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { SimpleSearchBar } from "./SimpleSearchBar";
import { ShareButton } from "../../components/ShareButton";

/* ---------------- TYPES ---------------- */

type Language = "malayalam" | "english" | "arabic";

type Category = {
  id: string;
  emoji: string;
  title: {
    malayalam: string;
    english: string;
    arabic: string;
  };
};

/* ---------------- DATA ---------------- */

const categories: Category[] = [
  {
    id: "duaMarichavark",
    emoji: "🤲",
    title: {
      malayalam: "മരിച്ചവർക്കുള്ള ദുആ",
      english: "Dua for Deceased",
      arabic: "دعاء للميت",
    },
  },
  {
    id: "duaQabar",
    emoji: "🪦",
    title: {
      malayalam: "ഖബറിലെ ദുആ",
      english: "Dua in Grave",
      arabic: "دعاء في القبر",
    },
  },
  {
    id: "manqusMoulid",
    emoji: "📖",
    title: {
      malayalam: "മൻഖസ് മൗലിദ്",
      english: "Manqus Moulid",
      arabic: "مولد المنقوش",
    },
  },
  {
    id: "baderMoulid",
    emoji: "📿",
    title: {
      malayalam: "ബദർ മൗലിദ്",
      english: "Bader Moulid",
      arabic: "مولد البدر الشريف",
    },
  },
  {
    id: "qaseeda",
    emoji: "🎵",
    title: {
      malayalam: "ഖസീദത്തുൽ ബുർദ",
      english: "Qaseedathul Burda",
      arabic: "قصيدة البردة",
    },
  },
  {
    id: "haddad",
    emoji: "📜",
    title: {
      malayalam: "റതീബ് അൽ-ഹദ്ദാദ്",
      english: "Ratib al-Haddad",
      arabic: "حزب الحداد",
    },
  },
  {
    id: "nariyathSwalath",
    emoji: "🤲",
    title: {
      malayalam: "നാരിയത്ത് സ്വലാത്ത്",
      english: "Nariyath Swalath",
      arabic: "صلاة النارية",
    },
  },
  {
    id: "thajuSwalath",
    emoji: "🤲",
    title: {
      malayalam: "താജു സ്വലാത്ത്",
      english: "Thaju Swalath",
      arabic: "صلاة التاج",
    },
  },
  {
    id: "salawatAlFatih",
    emoji: "🤲",
    title: {
      malayalam: "സ്വലാത്ത് അൽ ഫാത്തിഹ്",
      english: "Salawat al-Fatih",
      arabic: "صلاة الفاتح",
    },
  },
  {
    id: "ramadanAdhkar",
    emoji: "🌙",
    title: {
      malayalam: "റമദാൻ അദ്കാർ",
      english: "Ramadan Adhkar",
      arabic: "أذكار رمضان",
    },
  },
  {
    id: "adhkarAfterSalah",
    emoji: "🤲",
    title: {
      malayalam: "നിസ്കാരത്തിന് ശേഷം ദിക്‌ർ",
      english: "Adhkar After Salah",
      arabic: "أذكار بعد الصلاة",
    },
  },
  {
    id: "adhkarAfterSalah2",
    emoji: "🤲",
    title: {
      malayalam: "നിസ്കാരത്തിന് ശേഷം ദുആ",
      english: "Dua After Salah",
      arabic: "دعاء بعد الصلاة",
    },
  },
  {
    id: "asmaulHusna",
    emoji: "🌟",
    title: {
      malayalam: "അസ്മാഉൽ ഹുസ്ന",
      english: "Asmaul Husna",
      arabic: "أسماء الله الحسنى",
    },
  },
  {
    id: "talqeenMen",
    emoji: "🙏",
    title: {
      malayalam: "പുരുഷന്മാർക്കുള്ള തൽഖീൻ",
      english: "Talqeen for Men",
      arabic: "تَلْقِينُ الْمَيِّتِ",
    },
  },
  {
    id: "salawatulIbrahimiyya",
    emoji: "🤲",
    title: {
      malayalam: "സ്വലാത്തുൽ ഇബ്രാഹീമിയ്യ",
      english: "Swalathul Ibrahimiyya",
      arabic: "الصَّلَاةُ الإِبْرَاهِيمِيَّةُ",
    },
  },
  {
    id: "atTahiyyat",
    emoji: "🙏",
    title: {
      malayalam: "അത്തഹിയ്യാത്ത് (തഷഹ്‌ഹുദ്)",
      english: "At-Tahiyyat (Tashahhud)",
      arabic: "التَّحِيَّاتُ",
    },
  },
  {
    id: "duaUlQunoot",
    emoji: "🤲",
    title: {
      malayalam: "ദുആ-ഉൽ ഖുനൂത്",
      english: "Dua-ul-Qunoot",
      arabic: "دُعَاءُ الْقُنُوتِ",
    },
  },
  {
    id: "morningAdhkarComplete",
    emoji: "🌅",
    title: {
      malayalam: "പ്രഭാത ദിക്റുകാ (പൂർണം)",
      english: "Morning Adhkar (Complete)",
      arabic: "أَذْكَارُ الصَّبَاحِ",
    },
  },
  {
    id: "eveningAdhkarComplete",
    emoji: "🌆",
    title: {
      malayalam: "സന്ധ്യ ദിക്റുകാ (പൂർണ്ണം)",
      english: "Evening Adhkar (Complete)",
      arabic: "أَذْكَارُ الْمَسَاءِ",
    },
  },
  {
    id: "beforeSleepAdhkar",
    emoji: "🌙",
    title: {
      malayalam: "ഉറങ്ങുന്നതിന് മുമ്പുള്ള ദിക്റുകാ",
      english: "Before Sleep Adhkar",
      arabic: "أَذْكَارُ مَا قَبْلَ النَّوْمِ",
    },
  },
  {
    id: "wakeUpAdhkar",
    emoji: "🌄",
    title: {
      malayalam: "ഉണരുമ്പോഴുള്ള ദിക്റുകാ",
      english: "Wake-up Adhkar",
      arabic: "أَذْكَارُ الِاسْتِيقَاظِ",
    },
  },
  {
    id: "foodDuas",
    emoji: "🍽",
    title: {
      malayalam: "ഭക്ഷണ ദുആകൾ",
      english: "Food Duas",
      arabic: "أَدْعِيَةُ الطَّعَامِ",
    },
  },
  {
    id: "travelDuas",
    emoji: "✈️",
    title: {
      malayalam: "യാത്രാ ദുആകൾ",
      english: "Travel Duas",
      arabic: "أَدْعِيَةُ السَّفَرِ",
    },
  },
  {
    id: "homeDuas",
    emoji: "🏠",
    title: {
      malayalam: "വീട്ടിൽ കയറുമ്പോൾ / ഇറങ്ങുമ്പോൾ ദുആകൾ",
      english: "Home Entry & Exit Duas",
      arabic: "أَدْعِيَةُ دُخُولِ وَخُرُوجِ الْبَيْتِ",
    },
  },
  {
    id: "jumuahAdhkar",
    emoji: "🕌",
    title: {
      malayalam: "ജുമുഅ ദിവസം പ്രത്യേക്ഷിക്കുന്നു.",
      english: "Jumu'ah Special Adhkar",
      arabic: "أَذْكَارُ يَوْمِ الْجُمُعَةِ",
    },
  },
  {
    id: "protectionDuas",
    emoji: "🛡️",
    title: {
      malayalam: "സംരക്ഷണ ദുആകൾ",
      english: "Protection Duas",
      arabic: "أَدْعِيَةُ الْحِفْظِ وَالْوِقَايَةِ",
    },
  },
  {
    id: "duaForSick",
    emoji: "🏥",
    title: {
      malayalam: "രോഗിക്ക് / ബുദ്ധിമുട്ടിൽ ഉള്ളവർക്ക് ദുആകൾ",
      english: "Duas for the Sick & Distressed",
      arabic: "أَدْعِيَةُ الْمَرَضَى",
    },
  },
  {
    id: "istikharaDua",
    emoji: "🤲",
    title: {
      malayalam: "ഇസ്തിഖാര ദുആ",
      english: "Istikhara Dua",
      arabic: "دُعَاءُ الاِسْتِخَارَةِ",
    },
  },
  {
    id: "kidsIslamicDuas",
    emoji: "👶",
    title: {
      malayalam: "കുട്ടികൾക്കുള്ള ഇസ്‌ലാമിക് ദുആകൾ",
      english: "Kids Islamic Duas",
      arabic: "أَدْعِيَةُ الْأَطْفَالِ",
    },
  },
  {
    id: "masjidDuas",
    emoji: "🕌",
    title: {
      malayalam: "മസ്ജിദ് ദുആകൾ",
      english: "Masjid Duas",
      arabic: "أَدْعِيَةُ الْمَسْجِدِ",
    },
  },
  {
    id: "adhanIqamahDuas",
    emoji: "📢",
    title: {
      malayalam: "അദാൻ & ഇഖാമ ദുആകൾ",
      english: "Adhan & Iqamah Duas",
      arabic: "أَدْعِيَةُ الأَذَانِ وَالإِقَامَةِ",
    },
  },
  {
    id: "shortSurahsForKids",
    emoji: "📖",
    title: {
      malayalam: "കുട്ടികൾക്കുള്ള ചെറിയ സൂറകൾ",
      english: "Short Surahs for Kids",
      arabic: "سُّوَرُ الْقِصَارُ لِلْأَطْفَالِ",
    },
  },
  {
    id: "janazahDuas",
    emoji: "⚰️",
    title: {
      malayalam: "ജനാസ നമസ്കാര ദുആകൾ",
      english: "Janazah Prayer Duas",
      arabic: "دُعَاءُ صَلَاةِ الْجَنَازَةِ",
    },
  },
  {
    id: "zakatDuas",
    emoji: "💰",
    title: {
      malayalam: "സകാത്ത് ദുആകൾ",
      english: "Zakat Duas",
      arabic: "أَدْعِيَةُ الزَّكَاةِ",
    },
  },
  {
    id: "taubahDuas",
    emoji: "🙏",
    title: {
      malayalam: "തൗബ (പശ്ചാത്താപ) ദുആകൾ",
      english: "Taubah & Repentance Duas",
      arabic: "أَدْعِيَةُ التَّوْبَةِ وَالِاسْتِغْفَارِ",
    },
  },
  {
    id: "duasForParents",
    emoji: "👨‍👩‍👧‍👦",
    title: {
      malayalam: "മാതാപിതാക്കൾക്കായുള്ള ദുആകൾ",
      english: "Duas for Parents",
      arabic: "أَدْعِيَةٌ لِلْوَالِدَيْنِ",
    },
  },
  {
    id: "rainDuas",
    emoji: "🌧",
    title: {
      malayalam: "മഴക്കായുള്ള ദുആകൾ",
      english: "Rain Duas",
      arabic: "أَدْعِيَةُ الْمَطَرِ",
    },
  },
  {
    id: "duasForChildren",
    emoji: "👶",
    title: {
      malayalam: "കുട്ടികൾക്കായുള്ള ദുആകൾ",
      english: "Duas for Children",
      arabic: "أَدْعِيَةٌ لِلْأَوْلَادِ",
    },
  },
  {
    id: "sicknessDuas",
    emoji: "🤒",
    title: {
      malayalam: "രോഗാവസ്ഥയിൽ ദുആകൾ",
      english: "Duas for Sickness",
      arabic: "أَدْعِيَةُ الْمَرَضِ",
    },
  },
  {
    id: "anxietyWorryDuas",
    emoji: "😰",
    title: {
      malayalam: "ആകുലതയും ദുഃഖവും മാറാൻ ദുആകൾ",
      english: "Anxiety & Worry Duas",
      arabic: "أَدْعِيَةُ الْهَمِّ وَالْحُزْنِ",
    },
  },
  {
    id: "workRizqDuas",
    emoji: "💼",
    title: {
      malayalam: "ജോലിക്കും ഉപജീവനത്തിനും ദുആകൾ",
      english: "Work & Rizq Duas",
      arabic: "أَدْعِيَةُ الْعَمَلِ وَالرِّزْقِ",
    },
  },
  {
    id: "marriageDuas",
    emoji: "💑",
    title: {
      malayalam: "വിവാഹത്തിനായുള്ള ദുആകൾ",
      english: "Marriage Duas",
      arabic: "أَدْعِيَةُ الزَّوَاجِ",
    },
  },
  {
    id: "forgivenessDuas",
    emoji: "🙏",
    title: {
      malayalam: "ക്ഷമയ്ക്കായുള്ള ദുആകൾ",
      english: "Forgiveness Duas",
      arabic: "أَدْعِيَةُ الْمَغْفِرَةِ",
    },
  },
  {
    id: "pregnancyDuas",
    emoji: "🤰",
    title: {
      malayalam: "ഗർഭകാല ദുആകൾ",
      english: "Pregnancy Duas",
      arabic: "أَدْعِيَةُ الْحَمْلِ",
    },
  },
  {
    id: "knowledgeDuas",
    emoji: "📚",
    title: {
      malayalam: "വിദ്യക്കും അറിവിനും വേണ്ട ദുആകൾ",
      english: "Knowledge Duas",
      arabic: "أَدْعِيَةُ الْعِلْمِ",
    },
  },
  {
    id: "akhirahDuas",
    emoji: "🌟",
    title: {
      malayalam: "ആഖിറത്തിനായുള്ള ദുആകൾ",
      english: "Akhirah Duas",
      arabic: "أَدْعِيَةُ الْآخِرَةِ",
    },
  },
  {
    id: "husbandWifeDuas",
    emoji: "❤️",
    title: {
      malayalam: "ഭർത്താവും ഭാര്യയും തമ്മിലുള്ള ദുആകൾ",
      english: "Husband & Wife Duas",
      arabic: "أَدْعِيَةٌ بَيْنَ الزَّوْجَيْنِ",
    },
  },
  {
    id: "elderlyParentsDuas",
    emoji: "👴",
    title: {
      malayalam: "വൃദ്ധ മാതാപിതാക്കാക്കായുള്ള ദുആകൾ",
      english: "Duas for Elderly Parents",
      arabic: "أَدْعِيَةٌ لِلْوَالِدَيْنِ فِي الْكِبَرِ",
    },
  },
];

/* ---------------- SCREEN ---------------- */

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [language, setLanguage] = useState<Language>("malayalam");
  const [query, setQuery] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  /* ---------------- SEARCH ---------------- */

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/\s+/g, "");
    if (q.length < 2) return categories;

    return categories.filter(item =>
      item.title.malayalam.toLowerCase().replace(/\s+/g, "").includes(q) ||
      item.title.english.toLowerCase().replace(/\s+/g, "").includes(q) ||
      item.title.arabic.toLowerCase().replace(/\s+/g, "").includes(q)
    );
  }, [query]);

  /* ---------------- UI ---------------- */

  return (
    <SafeAreaView style={[styles.container, isDarkTheme && styles.containerDark]}>
      <StatusBar barStyle={isDarkTheme ? "light-content" : "dark-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={[styles.appTitle, isDarkTheme && styles.appTitleDark]}>AdhkarApp</Text>
          
          {/* HEADER OPTIONS */}
          <View style={styles.headerOptions}>
            {/* THEME TOGGLE */}
            <TouchableOpacity
              style={[styles.optionButton, isDarkTheme && styles.optionButtonDark]}
              onPress={() => setIsDarkTheme(!isDarkTheme)}
            >
              <Text style={styles.optionIcon}>
                {isDarkTheme ? "🌙" : "☀️"}
              </Text>
            </TouchableOpacity>
            
            {/* SETTINGS */}
            <TouchableOpacity
              style={[styles.optionButton, isDarkTheme && styles.optionButtonDark]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text style={styles.optionIcon}>⚙️</Text>
            </TouchableOpacity>
            
            {/* ABOUT */}
            <TouchableOpacity
              style={[styles.optionButton, isDarkTheme && styles.optionButtonDark]}
              onPress={() => navigation.navigate("About")}
            >
              <Text style={styles.optionIcon}>ℹ️</Text>
            </TouchableOpacity>
          </View>
          
          <ShareButton />
        </View>

        {/* LANGUAGE SWITCH */}
        <View style={styles.languageToggle}>
          {(["malayalam", "english", "arabic"] as const).map(lang => (
            <TouchableOpacity
              key={lang}
              style={[
                styles.langButton,
                language === lang && styles.langActive,
                isDarkTheme && styles.langButtonDark
              ]}
              onPress={() => setLanguage(lang)}
            >
              <Text
                style={[
                  styles.langText,
                  language === lang && styles.langTextActive,
                  isDarkTheme && styles.langTextDark
                ]}
              >
                {lang === "malayalam" ? "മല" : lang === "english" ? "En" : "ع"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* SEARCH BAR */}
        <SimpleSearchBar
          value={query}
          onChange={setQuery}
          placeholder={
            language === "malayalam"
              ? "ദുആ / മൗലിദ് / സ്വലാത്ത് തിരയൂ..."
              : language === "english"
              ? "Search dua, moulid, swalath..."
              : "ابحث عن دعاء أو مولد"
          }
        />

        {/* GRID */}
        <View style={styles.grid}>
          {filteredCategories.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, isDarkTheme && styles.cardDark]}
              onPress={() =>
                item.id === "manqusMoulid"
                  ? navigation.navigate("ManqusMoulid")
                  : item.id === "baderMoulid"
                  ? navigation.navigate("BaderMoulid")
                  : item.id === "qaseeda"
                  ? navigation.navigate("Dhikr", {
                      mode: "qaseeda",
                      type: "qaseedathulBurda",
                    })
                  : navigation.navigate("Dhikr", { type: item.id })
              }
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={[styles.cardText, isDarkTheme && styles.cardTextDark]}>
                {item.title[language]}
              </Text>
            </TouchableOpacity>
          ))}

          {filteredCategories.length === 0 && (
            <Text style={[styles.noResult, isDarkTheme && styles.noResultDark]}>ഫലം കണ്ടെത്തിയില്ല</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafaf9",
  },
  containerDark: {
    backgroundColor: "#1f2937",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#171717",
  },
  appTitleDark: {
    color: "#ffffff",
  },
  headerOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    marginRight: 8,
  },
  optionButtonDark: {
    backgroundColor: "#374151",
  },
  optionIcon: {
    fontSize: 16,
  },
  languageToggle: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
  },
  langButton: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
  },
  langButtonDark: {
    backgroundColor: "#374151",
  },
  langActive: {
    backgroundColor: "#22c55e",
  },
  langText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
  langTextDark: {
    color: "#ffffff",
  },
  langTextActive: {
    color: "#ffffff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardDark: {
    backgroundColor: "#374151",
  },
  emoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#171717",
    textAlign: "center",
  },
  cardTextDark: {
    color: "#ffffff",
  },
  noResult: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 32,
  },
  noResultDark: {
    color: "#ffffff",
  },
  themeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },
  themeButtonDark: {
    backgroundColor: "#374151",
  },
  themeIcon: {
    fontSize: 20,
  },
});
