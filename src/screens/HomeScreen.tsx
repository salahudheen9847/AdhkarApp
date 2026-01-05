import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";

import { useLanguage } from "../context/language";
import { homeStyles as styles } from "../styles/homeStyles";
import { commonStyles } from "../styles/common";

/* 🏷️ Home Card Labels */
const HOME_LABELS = {
  duaMarichavark: {
    malayalam: "മരിച്ചവർക്കുള്ള ദുആ",
    english: "Dua for the Deceased",
    arabic: "دعاء للميت",
  },
  duaQabar: {
    malayalam: "ഖബറിലെ ദുആ",
    english: "Dua in the Grave",
    arabic: "دعاء القبر",
  },
  manqusMoulid: {
    malayalam: "മൻഖൂസ് മൗലിദ്",
    english: "Manqus Moulid",
    arabic: "مولد المنقوص",
  },
  baderMoulid: {
    malayalam: "ബദർ മൗലിദ്",
    english: "Bader Moulid",
    arabic: "مولد بدر",
  },
  haddad: {
    malayalam: "റാത്തിബ് അൽ ഹദ്ദാദ്",
    english: "Ratib al-Haddad",
    arabic: "راتب الحداد",
  },
  asmaulHusna: {
    malayalam: "അസ്മാഉൽ ഹുസ്ന",
    english: "Asmaul Husna",
    arabic: "أسماء الله الحسنى",
  },
};

/* 🏷️ Section Headings */
const SECTION_TITLES = {
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
  asma: {
    malayalam: "🕋 അസ്മാഉൽ ഹുസ്ന",
    english: "🕋 Asmaul Husna",
    arabic: "🕋 أسماء الله الحسنى",
  },
};

type HomeItem = {
  id: keyof typeof HOME_LABELS;
  image: any;
  gradient: string[];
};

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const colors = {
    background: "#fefce8",
    text: "#1e293b",
  };

  /* ---------------- DATA ---------------- */

  const duaItems: HomeItem[] = [
    {
      id: "duaMarichavark",
      image: require("../assets/adhkar_icon.png"),
      gradient: ["#fff8e1", "#ffedd5"],
    },
    {
      id: "duaQabar",
      image: require("../assets/duaQabar.png"),
      gradient: ["#fef3c7", "#fde68a"],
    },
  ];

  const moulidItems: HomeItem[] = [
    {
      id: "manqusMoulid",
      image: require("../assets/manqus.png"),
      gradient: ["#e0f2fe", "#bae6fd"],
    },
    {
      id: "baderMoulid",
      image: require("../assets/bader.png"),
      gradient: ["#ecfeff", "#cffafe"],
    },
  ];

  const ratibItems: HomeItem[] = [
    {
      id: "haddad",
      image: require("../assets/haddad_icon.png"),
      gradient: ["#fef9c3", "#fef08a"],
    },
  ];

  const asmaulHusnaItems: HomeItem[] = [
    {
      id: "asmaulHusna",
      image: require("../assets/asmaulhusna_icon.png"),
      gradient: ["#fff7ed", "#ffedd5"],
    },
  ];

  /* 🔍 SEARCH FILTER */
  const filter = (items: HomeItem[]) =>
    items.filter(item =>
      HOME_LABELS[item.id][language]
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

  /* ---------------- RENDER SECTION ---------------- */
  const renderSection = (
    title: string,
    items: HomeItem[],
    onPress: (id: string) => void,
    keyPrefix: string
  ) => {
    const filtered = filter(items);
    if (filtered.length === 0) return null;

    return (
      <>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {title}
        </Text>

        <View style={styles.innerGrid}>
          {filtered.map((item, index) => (
            <TouchableOpacity
              key={`${keyPrefix}-${item.id}-${index}`}
              activeOpacity={0.9}
              onPress={() => onPress(item.id)}
            >
              <LinearGradient colors={item.gradient} style={styles.card}>
                <Image source={item.image} style={styles.icon} />
                <Text style={[styles.cardText, { color: colors.text }]}>
                  {HOME_LABELS[item.id][language]}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  };

  return (
    <SafeAreaView
      style={[
        commonStyles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <StatusBar barStyle="dark-content" />

      {/* 🌍 LANGUAGE SWITCH */}
      <View style={localStyles.languageSwitch}>
        {[
          { key: "malayalam", label: "മ" },
          { key: "english", label: "EN" },
          { key: "arabic", label: "ع" },
        ].map(item => (
          <TouchableOpacity
            key={item.key}
            onPress={() => setLanguage(item.key as any)}
            style={[
              localStyles.langButton,
              language === item.key && localStyles.langActive,
            ]}
          >
            <Text
              style={[
                localStyles.langText,
                language === item.key && localStyles.langTextActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🔍 SEARCH */}
      <View style={[styles.searchContainer, styles.searchContainerLight]}>
        <Icon
          name="search"
          size={18}
          color="#92400e"
          style={styles.searchIcon}
        />

        <TextInput
          style={[
            styles.searchInput,
            { color: colors.text },
            language === "arabic" && localStyles.searchInputArabic,
          ]}
          placeholder={
            language === "malayalam"
              ? "ദുആ അല്ലെങ്കിൽ ശേഖരം തിരയൂ..."
              : language === "english"
              ? "Search dua or collection..."
              : "ابحث عن دعاء أو مجموعة"
          }
          placeholderTextColor="#a16207"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* 📜 CONTENT */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          styles.scrollContentWithPadding,
        ]}
        showsVerticalScrollIndicator={false}
      >
        {renderSection(
          SECTION_TITLES.dua[language],
          duaItems,
          id => navigation.navigate("Dhikr", { type: id }),
          "dua"
        )}

        {renderSection(
          SECTION_TITLES.moulid[language],
          moulidItems,
          id =>
            id === "manqusMoulid"
              ? navigation.navigate("ManqusMoulid")
              : navigation.navigate("BaderMoulid"),
          "moulid"
        )}

        {renderSection(
          SECTION_TITLES.ratib[language],
          ratibItems,
          id => navigation.navigate("Dhikr", { type: id }),
          "ratib"
        )}

        {renderSection(
          SECTION_TITLES.asma[language],
          asmaulHusnaItems,
          id => navigation.navigate("Dhikr", { type: id }),
          "asma"
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

/* 🌍 LOCAL STYLES */
const localStyles = StyleSheet.create({
  languageSwitch: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#e5e7eb",
    borderRadius: 14,
    padding: 4,
    gap: 6,
  },
  langButton: {
    flex: 1,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  langActive: {
    backgroundColor: "#1e293b",
  },
  langText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1e293b",
  },
  langTextActive: {
    color: "#ffffff",
  },
  searchInputArabic: {
    textAlign: "right",
  },
});
