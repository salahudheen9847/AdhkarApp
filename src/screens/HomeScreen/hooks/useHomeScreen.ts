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
import { useFavourites } from "./useFavourites";

export function useHomeScreen() {
  const navigation = useNavigation<any>();
  const { language } = useLanguage() as {
    language: AppLanguage;
  };

  const [query, setQuery] = useState("");

  const {
    favourites,        // ✅ NOW USED
    toggleFavourite,
    isFavourite,
  } = useFavourites();

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
        title: getHomeLabelText(
          item.id as HomeLabelKey,
          language
        ),
        icon: config.icon,
        gradient: config.gradient,
        isFavourite: isFavourite(item.id as HomeLabelKey), // ⭐
      };
    });

  /* ⭐ GROUP + FAVOURITES FIRST */
  const getSectionItems = (section: string) => {
    const sectionItems = filteredMeta.filter(
      item => item.section === section
    );

    // ⭐ sort: favourites first
    const sorted = sectionItems.sort((a, b) => {
      const fa = favourites.includes(a.id as HomeLabelKey) ? 1 : 0;
      const fb = favourites.includes(b.id as HomeLabelKey) ? 1 : 0;
      return fb - fa;
    });

    return mapToHomeItems(sorted);
  };

  /* ⭐ FAVOURITE ITEMS API */
  const getFavouriteItems = () => {
    const favMeta = HOME_META_LIST.filter(item =>
      favourites.includes(item.id as HomeLabelKey)
    );

    return mapToHomeItems(favMeta);
  };

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
    getFavouriteItems, // ⭐ NEW
    handlePress,
    toggleFavourite, // ⭐ used in UI
  };
}