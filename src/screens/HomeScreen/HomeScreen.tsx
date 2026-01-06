// src/screens/HomeScreen/HomeScreen.tsx

import React, { useState } from "react";
import { StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useLanguage } from "../../context/language";
import { commonStyles } from "../../styles/common";

import { HomeSection } from "./HomeSection";
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
    background: "#fefce8",
    text: "#1e293b",
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
      gradient: ["#fff8e1", "#ffedd5"],
    },
    {
      id: "duaQabar",
      image: require("../../assets/duaQabar.png"),
      gradient: ["#fef3c7", "#fde68a"],
    },
  ]);

  const moulidItems = filter([
    {
      id: "manqusMoulid",
      image: require("../../assets/manqus.png"),
      gradient: ["#e0f2fe", "#bae6fd"],
    },
    {
      id: "baderMoulid",
      image: require("../../assets/bader.png"),
      gradient: ["#ecfeff", "#cffafe"],
    },
  ]);

  const ratibItems = filter([
    {
      id: "haddad",
      image: require("../../assets/haddad_icon.png"),
      gradient: ["#fef9c3", "#fef08a"],
    },
  ]);

  const swalathItems = filter([
    {
      id: "nariyathSwalath",
      image: require("../../assets/nariyathSwalath_icon.png"),
      gradient: ["#fdf4ff", "#fae8ff"],
    },
  ]);

  const asmaItems = filter([
    {
      id: "asmaulHusna",
      image: require("../../assets/asmaulhusna_icon.png"),
      gradient: ["#fff7ed", "#ffedd5"],
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
