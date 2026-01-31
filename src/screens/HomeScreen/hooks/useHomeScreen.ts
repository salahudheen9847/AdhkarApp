import { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { useLanguage } from "../../../context/language";
import { HOME_META_LIST } from "../../../data/homeMeta";
import { type HomeLabelKey, type AppLanguage } from "../../../data/labels";
import { useFavourites } from "./useFavourites";
import { usePressHandler } from "./usePressHandler";
import { useSearchFilter } from "./useSearchFilter";

export function useHomeScreen() {
  const { language } = useLanguage() as { language: AppLanguage };
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const { favourites, toggleFavourite, isFavourite } = useFavourites();
  const { handlePress } = usePressHandler(setActiveSection);
  const { filteredMeta, mapToHomeItems } = useSearchFilter(query, language, isFavourite);

  /* 🔙 BACK HANDLER */
  useEffect(() => {
    const bh = BackHandler.addEventListener("hardwareBackPress", () => {
      if (activeSection) {
        setActiveSection(null);
        return true;
      }
      BackHandler.exitApp();
      return true;
    });
    return () => bh.remove();
  }, [activeSection]);

  /* ⭐ SECTION ITEMS */
  const getSectionItems = (section: string) => {
    const sectionItems = filteredMeta.filter(item => item.section === section);
    const sorted = [...sectionItems].sort((a, b) => {
      const fa = favourites.includes(a.id as HomeLabelKey) ? 1 : 0;
      const fb = favourites.includes(b.id as HomeLabelKey) ? 1 : 0;
      return fb - fa;
    });
    return mapToHomeItems(sorted);
  };

  /* ⭐ FAVOURITES */
  const getFavouriteItems = () => {
    const favMeta = HOME_META_LIST.filter(item => favourites.includes(item.id as HomeLabelKey));
    return mapToHomeItems(favMeta);
  };

  return {
    language,
    query,
    setQuery,
    getSectionItems,
    getFavouriteItems,
    handlePress,
    toggleFavourite,
    activeSection,
    setActiveSection,
    filteredMeta,    // 👈 സെർച്ചിനായി
    mapToHomeItems,  // 👈 സെർച്ചിനായി
  };
}