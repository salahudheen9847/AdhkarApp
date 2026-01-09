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
import { useNavigation } from "@react-navigation/native";

import { ShareButton } from "../../components/ShareButton";

// ---------------- DATA IMPORTS (MATCH EXPORTS) ----------------
import { duaMarichavarkData } from "../../data/duaMarichavark/duaMarichavarkData";
import { duaQabarData } from "../../data/duaQabar/duaQabarData";
import { ManqusMoulidData } from "../../data/ManqusMoulid/manqusMoulidData";
import { baderMoulidData } from "../../data/BaderMoulid/baderMoulidData";
import { qaseedathulBurda } from "../../data/qaseeda/qaseedathulBurda";
import { haddadData } from "../../data/haddad/haddadData";
import { ramadanAdhkar } from "../../data/ramadan/ramadanAdhkar";
import { asmaulHusnaData } from "../../data/asmaulHusna/asmaulHusnaData";

import { nariyathSwalath } from "../../data/swalath/nariyathSwalath";
import { thajuSwalath } from "../../data/swalath/thajuSwalath";
import { salawatAlFatih } from "../../data/swalath/salawatAlFatih";
import { adhkarAfterSalah } from "../../data/salah/adhkarAfterSalah";
import { duaAfterSalah } from "../../data/salah/duaAfterSalah";

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fafaf9" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  searchContainer: { flex: 1 },

  appTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#171717",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#171717",
    marginVertical: 12,
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
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    elevation: 4,
  },

  emoji: { fontSize: 36, marginBottom: 8 },

  cardText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#262626",
    textAlign: "center",
    paddingHorizontal: 6,
  },

  languageToggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
  },

  langButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },

  langButtonActive: { backgroundColor: "#22c55e" },

  langText: { fontSize: 12, fontWeight: "500", color: "#666" },
  langTextActive: { color: "#fff" },
});

// ---------------- TYPES ----------------
type Language = "malayalam" | "english" | "arabic";

// ---------------- DATA ----------------
const allCategories = [
  {
    id: "duaMarichavark",
    title: {
      malayalam: "മരിച്ചവർക്കുള്ള ദുആ",
      english: "Dua for the Deceased",
      arabic: "دعاء للميت",
    },
    emoji: "🕌",
    data: duaMarichavarkData,
  },
  {
    id: "duaQabar",
    title: {
      malayalam: "ഖബറിലെ ദുആ",
      english: "Dua in the Grave",
      arabic: "دعاء في القبر",
    },
    emoji: "🪦",
    data: duaQabarData,
  },
  {
    id: "manqusMoulid",
    title: {
      malayalam: "മൻഖസ് മൗലിദ്",
      english: "Manqus Moulid",
      arabic: "مولد المنقوش",
    },
    emoji: "📖",
    data: ManqusMoulidData,
  },
  {
    id: "baderMoulid",
    title: {
      malayalam: "ബാദർ മൗലിദ്",
      english: "Bader Moulid",
      arabic: "مولد البادر",
    },
    emoji: "📿",
    data: baderMoulidData,
  },
  {
    id: "qaseeda",
    title: {
      malayalam: "ഖസീദ",
      english: "Qaseeda Burda",
      arabic: "قصيدة البردة",
    },
    emoji: "🎵",
    data: qaseedathulBurda,
  },
  {
    id: "haddad",
    title: {
      malayalam: "റതീബ് അൽ-ഹദ്ദാദ്",
      english: "Ratib al-Haddad",
      arabic: "حزب الحداد",
    },
    emoji: "📜",
    data: haddadData,
  },
  {
    id: "nariyathSwalath",
    title: {
      malayalam: "നാരിയത്ത് സ്വലാത്ത്",
      english: "Nariyath Swalath",
      arabic: "صلاة النارية",
    },
    emoji: "🙏",
    data: nariyathSwalath,
  },
  {
    id: "thajuSwalath",
    title: {
      malayalam: "താജു സ്വലാത്ത്",
      english: "Thaju Swalath",
      arabic: "صلاة التاج",
    },
    emoji: "🙏",
    data: thajuSwalath,
  },
  {
    id: "salawatAlFatih",
    title: {
      malayalam: "സ്വലാത്ത് അൽ ഫാത്തിഹ്",
      english: "Salawat Al-Fatih",
      arabic: "صلاة الفاتح",
    },
    emoji: "🙏",
    data: salawatAlFatih,
  },
  {
    id: "ramadanAdhkar",
    title: {
      malayalam: "റമദാൻ അദ്കർ",
      english: "Ramadan Adhkar",
      arabic: "أذكار رمضان",
    },
    emoji: "🌙",
    data: ramadanAdhkar,
  },
  {
    id: "adhkarAfterSalah",
    title: {
      malayalam: "നിസ്കാർ ശേഷം ദിക്‌ർ",
      english: "Adhkar After Salah",
      arabic: "أذكار بعد الصلاة",
    },
    emoji: "🕌",
    data: adhkarAfterSalah,
  },
  {
    id: "duaAfterSalah",
    title: {
      malayalam: "നിസ്കാർ ശേഷം ദുആ",
      english: "Dua After Salah",
      arabic: "دعاء بعد الصلاة",
    },
    emoji: "🕌",
    data: duaAfterSalah,
  },
  {
    id: "asmaulHusna",
    title: {
      malayalam: "അസ്മാഉൽ ഹുസ്ന",
      english: "Asmaul Husna",
      arabic: "أسماء الله الحسنى",
    },
    emoji: "✨",
    data: asmaulHusnaData,
  },
];

// ---------------- SCREEN ----------------
export default function HomeScreenComplete() {
  const navigation = useNavigation<any>();
  const [language, setLanguage] = useState<Language>("malayalam");

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

        <View style={styles.languageToggle}>
          {(["malayalam", "english", "arabic"] as Language[]).map((lang) => (
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
          {allCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.card}
              onPress={() => {
                if (category.id === "manqusMoulid") {
                  navigation.navigate("ManqusMoulid");
                } else if (category.id === "baderMoulid") {
                  navigation.navigate("BaderMoulid");
                } else if (category.id === "qaseeda") {
                  navigation.navigate("Dhikr", {
                    mode: "qaseeda",
                    type: "qaseedathulBurda",
                  });
                } else {
                  navigation.navigate("Dhikr", { type: category.id });
                }
              }}
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
