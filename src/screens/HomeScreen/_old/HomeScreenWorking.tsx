import React, { useState } from "react";
import { StatusBar, ScrollView, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useLanguage } from "../../context/language";
import { commonStyles } from "../../styles/common";

import { HomeSection } from "./HomeSectionEnhanced";
import { LanguageSwitch } from "./LanguageSwitch";
import { ShareButton } from "../../components/ShareButton";

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

export default function HomeScreenWorking() {
  const navigation = useNavigation<any>();

  const { language, setLanguage } = useLanguage() as {
    language: AppLanguage;
    setLanguage: (lang: AppLanguage) => void;
  };

  const [searchQuery, setSearchQuery] = useState("");

  const colors = {
    background: "#fafaf9",
    text: "#171717",
  };

  /* ---------------- SEARCH HELPERS ---------------- */

  const normalize = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "");

  const filter = (items: HomeItem[]) => {
    const query = normalize(searchQuery);

    // 🔥 2 characters-ൽ താഴെ ആണെങ്കിൽ filter വേണ്ട
    if (!query || query.length < 2) {
      return items;
    }

    return items.filter(item => {
      const label = HOME_LABELS[item.id];
      if (!label) return false;

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
      gradient: ["#fef3c7", "#fde047"],
    },
    {
      id: "duaQabar",
      image: require("../../assets/duaQabar.png"),
      gradient: ["#fef08a", "#facc15"],
    },
  ]);

  const moulidItems = filter([
    {
      id: "manqusMoulid",
      image: require("../../assets/manqus.png"),
      gradient: ["#dbeafe", "#93c5fd"],
    },
    {
      id: "baderMoulid",
      image: require("../../assets/bader.png"),
      gradient: ["#a5f3fc", "#67e8f9"],
    },
    {
      id: "qaseedathulBurda",
      image: require("../../assets/qaseeda.png"),
      gradient: ["#f3e8ff", "#c084fc"],
    },
  ]);

  const ratibItems = filter([
    {
      id: "haddad",
      image: require("../../assets/haddad_icon.png"),
      gradient: ["#fde68a", "#fbbf24"],
    },
  ]);

  const swalathItems = filter([
    {
      id: "nariyathSwalath",
      image: require("../../assets/nariyathSwalath_icon.png"),
      gradient: ["#f3e8ff", "#d8b4fe"],
    },
    {
      id: "thajuSwalath",
      image: require("../../assets/adhkar_icon.png"),
      gradient: ["#fce7f3", "#fbcfe8"],
    },
    {
      id: "salawatAlFatih",
      image: require("../../assets/nariyathSwalath_icon.png"),
      gradient: ["#e0f2fe", "#7dd3fc"],
    },
  ]);

  const ramadanItems = filter([
    {
      id: "ramadanAdhkar",
      image: require("../../assets/adhkar_icon.png"),
      gradient: ["#ecfccb", "#bef264"],
    },
  ]);

  const salahItems = filter([
    {
      id: "adhkarAfterSalah",
      image: require("../../assets/adhkar_icon.png"),
      gradient: ["#dcfce7", "#86efac"],
    },
    {
      id: "adhkarAfterSalah2",
      image: require("../../assets/adhkar_icon.png"),
      gradient: ["#f0fdf4", "#4ade80"],
    },
  ]);

  const asmaItems = filter([
    {
      id: "asmaulHusna",
      image: require("../../assets/asmaulhusna_icon.png"),
      gradient: ["#fed7aa", "#fdba74"],
    },
  ]);

  /* ---------------- UI ---------------- */

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={commonStyles.container} showsVerticalScrollIndicator={false}>
        {/* TEST: Simple search bar at top */}
        <View style={{
          flexDirection: 'row',
          padding: 16,
          backgroundColor: '#ff0000',
          marginBottom: 10
        }}>
          <TextInput
            style={{
              flex: 1,
              height: 50,
              backgroundColor: '#ffffff',
              borderWidth: 2,
              borderColor: '#22c55e',
              borderRadius: 8,
              paddingHorizontal: 15,
              fontSize: 16,
              color: '#171717'
            }}
            placeholder="SEARCH TEST - This should be visible!"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={commonStyles.headerRow}>
          <View style={commonStyles.headerFlex}>
            <LanguageSwitch language={language} setLanguage={setLanguage} />
            <ShareButton customStyle={commonStyles.shareButtonMargin} />
          </View>
        </View>
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
              : id === "baderMoulid"
              ? navigation.navigate("BaderMoulid")
              : navigation.navigate("Dhikr", { mode: "qaseeda", type: "qaseedathulBurda" })
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
          title={SECTION_TITLES.ramadan[language]}
          items={ramadanItems}
          language={language}
          colors={colors}
          onPress={id =>
            navigation.navigate("Dhikr", { type: id })
          }
        />

        <HomeSection
          title={SECTION_TITLES.salah[language]}
          items={salahItems}
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
