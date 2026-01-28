// HomeScreen/hooks/useHomeScreen.ts

import { useEffect, useMemo, useState } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useLanguage } from "../../../context/language";
import { HOME_META_LIST } from "../../../data/homeMeta";
import {
  getHomeLabelText,
  type HomeLabelKey,
  type AppLanguage,
} from "../../../data/labels";
import { SECTION_CARD_CONFIG } from "../../../data/homeCardConfig";

export function useHomeScreen() {
  const navigation = useNavigation<any>();
  const { language } = useLanguage() as {
    language: AppLanguage;
  };

  const [query, setQuery] = useState("");

  /* 🔙 EXIT APP ON BACK */
  useEffect(() => {
    const bh = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        BackHandler.exitApp();
        return true;
      }
    );
    return () => bh.remove();
  }, []);

  /* 🔍 SEARCH FILTER */
  const filteredMeta = useMemo(() => {
    if (!query.trim()) return HOME_META_LIST;

    const q = query.toLowerCase();

    return HOME_META_LIST.filter(item => {
      const title = getHomeLabelText(
        item.id as HomeLabelKey,
        language
      );
      return title.toLowerCase().includes(q);
    });
  }, [query, language]);

  /* 🔁 META → HOME CARD ITEMS */
  const mapToHomeItems = (metaList: typeof HOME_META_LIST) =>
    metaList.map((item, index) => {
      const config =
        SECTION_CARD_CONFIG[item.section ?? "daily"];

      return {
        id: `${item.id}-${index}`,
        originalId: item.id as HomeLabelKey,

        // ✅ THIS IS THE FIX (LANGUAGE-AWARE TITLE)
        title: getHomeLabelText(
          item.id as HomeLabelKey,
          language
        ),

        icon: config.icon,
        gradient: config.gradient,
      };
    });

  /* 📦 GROUP BY SECTION */
  const getSectionItems = (section: string) =>
    mapToHomeItems(
      filteredMeta.filter(i => i.section === section)
    );

  /* ✅ NAVIGATION */
  const handlePress = (originalId: HomeLabelKey) => {
    navigation.navigate("Dhikr", {
      mode: "section",
      type: originalId,
    });
  };

  return {
    language,
    query,
    setQuery,
    getSectionItems,
    handlePress,
  };
}