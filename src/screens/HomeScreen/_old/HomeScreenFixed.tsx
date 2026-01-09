import React, { useState } from "react";
import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShareButton } from "../../components/ShareButton";

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fafaf9" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },

  appTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#171717",
  },

  searchContainer: { flex: 1 },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#171717",
    marginBottom: 12,
    marginTop: 16,
    marginLeft: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  card: {
    width: 160,
    height: 160,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  emoji: {
    fontSize: 36,
    marginBottom: 8,
    textAlign: "center",
  },

  cardText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#262626",
    textAlign: "center",
    paddingHorizontal: 4,
    lineHeight: 16,
  },

  languageToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
    gap: 8,
  },

  langButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },

  langButtonActive: {
    backgroundColor: "#22c55e",
  },

  langText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#666",
  },

  langTextActive: {
    color: "#fff",
  },
});

// ---------------- DATA ----------------
const categories = [
  {
    id: "duaMarichavark",
    title: {
      malayalam: "മരിച്ചവർക്കുള്ള ദുആ",
      english: "Dua for the Deceased",
      arabic: "دعاء للميت",
    },
    emoji: "🕌",
  },
  {
    id: "duaQabar",
    title: {
      malayalam: "ഖബറിലെ ദുആ",
      english: "Dua in the Grave",
      arabic: "دعاء في القبر",
    },
    emoji: "🪦",
  },
  {
    id: "manqusMoulid",
    title: {
      malayalam: "മൻഖസ് മൗലിദ്",
      english: "Manqus Moulid",
      arabic: "مولد المنقوش",
    },
    emoji: "📖",
  },
  {
    id: "baderMoulid",
    title: {
      malayalam: "ബാദർ മൗലിദ്",
      english: "Bader Moulid",
      arabic: "مولد البادر",
    },
    emoji: "📿",
  },
  {
    id: "qaseeda",
    title: {
      malayalam: "ഖസീദ",
      english: "Qaseeda Burda",
      arabic: "قصيدة البردة",
    },
    emoji: "🎵",
  },
  {
    id: "haddad",
    title: {
      malayalam: "റതീബ് അൽ-ഹദ്ദാദ്",
      english: "Ratib al-Haddad",
      arabic: "حزب الحداد",
    },
    emoji: "📜",
  },
  {
    id: "nariyathSwalath",
    title: {
      malayalam: "നാരിയത്ത് സ്വലാത്ത്",
      english: "Nariyath Swalath",
      arabic: "صلاة النارية",
    },
    emoji: "🙏",
  },
  {
    id: "thajuSwalath",
    title: {
      malayalam: "താജു സ്വലാത്ത്",
      english: "Thaju Swalath",
      arabic: "صلاة التاج",
    },
    emoji: "🙏",
  },
  {
    id: "salawatAlFatih",
    title: {
      malayalam: "സ്വലാത്ത് അൽ ഫാത്തി",
      english: "Salawat Al-Fatih",
      arabic: "صلاة الفاتح",
    },
    emoji: "🙏",
  },
  {
    id: "asmaulHusna",
    title: {
      malayalam: "അസ്മാഉൽ ഹുസ്ന",
      english: "Asmaul Husna",
      arabic: "أسماء الله الحسنى",
    },
    emoji: "✨",
  },
];

// ---------------- SCREEN ----------------
export default function HomeScreenFixed() {
  const [language, setLanguage] = useState<"malayalam" | "english" | "arabic">(
    "malayalam"
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fafaf9" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Text style={styles.appTitle}>AdhkarApp</Text>
          </View>
          <ShareButton />
        </View>

        {/* Language Toggle */}
        <View style={styles.languageToggle}>
          {(["malayalam", "english", "arabic"] as const).map((lang) => (
            <TouchableOpacity
              key={lang}
              style={[
                styles.langButton,
                language === lang && styles.langButtonActive,
              ]}
              onPress={() => setLanguage(lang)}
            >
              <Text
                style={[
                  styles.langText,
                  language === lang && styles.langTextActive,
                ]}
              >
                {lang === "malayalam" ? "മല" : lang === "english" ? "En" : "ع"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>
          {language === "malayalam"
            ? "പ്രാർത്ഥനകൾ"
            : language === "english"
            ? "Supplications"
            : "الأدعية"}
        </Text>

        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.card}
              onPress={() => console.log("Navigate to:", category.id)}
            >
              <Text style={styles.emoji}>{category.emoji}</Text>
              <Text style={styles.cardText}>
                {category.title[language]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
