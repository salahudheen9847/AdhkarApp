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
    emoji: "🕌",
    title: {
      malayalam: "മരിച്ചവർക്കുള്ള ദുആ",
      english: "Dua for the Deceased",
      arabic: "دعاء للميت",
    },
  },
  {
    id: "duaQabar",
    emoji: "🪦",
    title: {
      malayalam: "ഖബറിലെ ദുആ",
      english: "Dua in the Grave",
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
    emoji: "🙏",
    title: {
      malayalam: "നാരിയത്ത് സ്വലാത്ത്",
      english: "Nariyath Swalath",
      arabic: "صلاة النارية",
    },
  },
  {
    id: "thajuSwalath",
    emoji: "🙏",
    title: {
      malayalam: "താജു സ്വലാത്ത്",
      english: "Thaju Swalath",
      arabic: "صلاة التاج",
    },
  },
  {
    id: "salawatAlFatih",
    emoji: "🙏",
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
    emoji: "🕌",
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
    emoji: "✨",
    title: {
      malayalam: "അസ്മാഉൽ ഹുസ്ന",
      english: "Asmaul Husna",
      arabic: "أسماء الله الحسنى",
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
    <SafeAreaView style={[styles.container, isDarkTheme && { backgroundColor: "#1f2937" }]}>
      <StatusBar barStyle={isDarkTheme ? "light-content" : "dark-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={[styles.appTitle, isDarkTheme && { color: "#ffffff" }]}>AdhkarApp</Text>
          
          {/* HEADER OPTIONS */}
          <View style={styles.headerOptions}>
            {/* THEME TOGGLE */}
            <TouchableOpacity
              style={[styles.optionButton, isDarkTheme && { backgroundColor: "#374151" }]}
              onPress={() => setIsDarkTheme(!isDarkTheme)}
            >
              <Text style={styles.optionIcon}>
                {isDarkTheme ? "🌙" : "☀️"}
              </Text>
            </TouchableOpacity>
            
            {/* SETTINGS */}
            <TouchableOpacity
              style={[styles.optionButton, isDarkTheme && { backgroundColor: "#374151" }]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text style={styles.optionIcon}>⚙️</Text>
            </TouchableOpacity>
            
            {/* ABOUT */}
            <TouchableOpacity
              style={[styles.optionButton, isDarkTheme && { backgroundColor: "#374151" }]}
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
                isDarkTheme && { backgroundColor: "#374151" }
              ]}
              onPress={() => setLanguage(lang)}
            >
              <Text
                style={[
                  styles.langText,
                  language === lang && styles.langTextActive,
                  isDarkTheme && { color: "#ffffff" }
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
              style={[styles.card, isDarkTheme && { backgroundColor: "#374151" }]}
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
              <Text style={[styles.cardText, isDarkTheme && { color: "#ffffff" }]}>
                {item.title[language]}
              </Text>
            </TouchableOpacity>
          ))}

          {filteredCategories.length === 0 && (
            <Text style={[styles.noResult, isDarkTheme && { color: "#ffffff" }]}>ഫലം കണ്ടെത്തിയില്ല</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#171717",
  },
  languageToggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 10,
  },
  langButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: "#e5e7eb",
  },
  langActive: {
    backgroundColor: "#22c55e",
  },
  langText: {
    fontSize: 13,
    color: "#374151",
    fontWeight: "600",
  },
  langTextActive: {
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 20,
    marginVertical: 16,
    color: "#171717",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 20,
  },
  card: {
    width: 160,
    height: 160,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#262626",
    textAlign: "center",
  },
  noResult: {
    marginTop: 20,
    fontSize: 16,
    color: "#6b7280",
  },
  headerOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  optionIcon: {
    fontSize: 18,
  },
  themeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },
  themeIcon: {
    fontSize: 20,
  },
});
