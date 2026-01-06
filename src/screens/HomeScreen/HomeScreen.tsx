// src/screens/HomeScreen/HomeScreen.tsx

import React, { useState } from "react";
import { StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useLanguage } from "../../context/language";
import { commonStyles } from "../../styles/common";

import { HomeSection } from "./HomeSectionEnhanced";
import { LanguageSwitch } from "./LanguageSwitch";
import { SearchBar } from "./SearchBar";

import {
  HOME_LABELS,
  SECTION_TITLES,
  AppLanguage,
  HomeLabelKey,
} from "./HomeData";

/* ---------------- TYPES ---------------- */

type HomeItem = {
  id: HomeLabelKey;
  image: any;
  gradient: string[];
};

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const { language, setLanguage } = useLanguage() as {
    language: AppLanguage;
    setLanguage: (lang: AppLanguage) => void;
  };

  const [searchQuery, setSearchQuery] = useState("");

  const colors = {
    background: "#fafaf9", // Premium neutral background
    text: "#171717", // Modern dark gray for better contrast
  };

  /* ---------------- SEARCH HELPERS ---------------- */

  const normalize = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "");

  const filter = (items: HomeItem[]) => {
    const query = normalize(searchQuery);
    if (!query) return items;

    return items.filter(item => {
      const label = HOME_LABELS[item.id];
      return (
        normalize(label.malayalam).includes(query) ||
        normalize(label.manglish).includes(query) ||
        normalize(label.english).includes(query) ||
        normalize(label.arabic).includes(query)
      );
    });
  };

  /* ---------------- DATA ---------------- */

  const duaItems = filter([
    {
      id: "duaMarichavark",
      image: require("../../assets/adhkar_icon.png"),
      gradient: ["#fef3c7", "#fde047"], // Warm golden yellow
    },
    {
      id: "duaQabar",
      image: require("../../assets/duaQabar.png"),
      gradient: ["#fef08a", "#facc15"], // Rich gold
    },
  ]);

  const moulidItems = filter([
    {
      id: "manqusMoulid",
      image: require("../../assets/manqus.png"),
      gradient: ["#dbeafe", "#93c5fd"], // Sky blue
    },
    {
      id: "baderMoulid",
      image: require("../../assets/bader.png"),
      gradient: ["#a5f3fc", "#67e8f9"], // Cyan
    },
  ]);

  const ratibItems = filter([
    {
      id: "haddad",
      image: require("../../assets/haddad_icon.png"),
      gradient: ["#fde68a", "#fbbf24"], // Vibrant gold
    },
  ]);

  const swalathItems = filter([
    {
      id: "nariyathSwalath",
      image: require("../../assets/nariyathSwalath_icon.png"),
      gradient: ["#f3e8ff", "#d8b4fe"], // Soft purple
    },
    {
      id: "thajuSwalath",
      image: require("../../assets/adhkar_icon.png"),
      gradient: ["#e0f2fe", "#7dd3fc"], // Light sky blue
    },
    {
      id: "salawatAlFatih",
      image: require("../../assets/nariyathSwalath_icon.png"), // Using same icon for now
      gradient: ["#fce7f3", "#fbcfe8"], // Soft pink-rose
    },
  ]);

  const asmaItems = filter([
    {
      id: "asmaulHusna",
      image: require("../../assets/asmaulhusna_icon.png"),
      gradient: ["#fed7aa", "#fdba74"], // Warm orange
    },
  ]);

  /* ---------------- UI ---------------- */

  return (
    <SafeAreaView
      style={[
        commonStyles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <StatusBar barStyle="dark-content" />

      <LanguageSwitch language={language} setLanguage={setLanguage} />

      <SearchBar
        language={language}
        value={searchQuery}
        onChange={setSearchQuery}
        textColor={colors.text}
        placeholder={
          language === "malayalam"
            ? "മലയാളം / Manglish ഉപയോഗിച്ച് തിരയൂ..."
            : language === "english"
              ? "Search (supports Manglish)"
              : "ابحث (Malayalam / English)"
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeSection
          title={SECTION_TITLES.dua[language]}
          items={duaItems}
          language={language}
          colors={colors}
          onPress={id =>
            navigation.navigate("Dhikr", { type: id })
          }
        />

        <HomeSection
          title={SECTION_TITLES.moulid[language]}
          items={moulidItems}
          language={language}
          colors={colors}
          onPress={id =>
            id === "manqusMoulid"
              ? navigation.navigate("ManqusMoulid")
              : navigation.navigate("BaderMoulid")
          }
        />

        <HomeSection
          title={SECTION_TITLES.ratib[language]}
          items={ratibItems}
          language={language}
          colors={colors}
          onPress={id =>
            navigation.navigate("Dhikr", { type: id })
          }
        />

        <HomeSection
          title={SECTION_TITLES.swalath[language]}
          items={swalathItems}
          language={language}
          colors={colors}
          onPress={id =>
            navigation.navigate("Dhikr", { type: id })
          }
        />

        <HomeSection
          title={SECTION_TITLES.asma[language]}
          items={asmaItems}
          language={language}
          colors={colors}
          onPress={id =>
            navigation.navigate("Dhikr", { type: id })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}
