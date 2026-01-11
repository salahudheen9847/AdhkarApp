import { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HOME_LABELS } from "../data/HomeData";
import { HOME_ORDER } from "../data/homeOrder";
import { normalize } from "../helpers/normalize";

export type Language = "malayalam" | "english" | "arabic";

export const useHomeLogic = () => {
  const [language, setLanguage] = useState<Language>("malayalam");
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState<string[]>([]);

  /* -------- LOAD FAVOURITES -------- */
  useEffect(() => {
    AsyncStorage.getItem("FAV_KEYS").then(data => {
      if (data) setFavourites(JSON.parse(data));
    });
  }, []);

  /* -------- TOGGLE FAVOURITE -------- */
  const toggleFavourite = async (key: string) => {
    const updated = favourites.includes(key)
      ? favourites.filter(k => k !== key)
      : [...favourites, key];

    setFavourites(updated);
    await AsyncStorage.setItem("FAV_KEYS", JSON.stringify(updated));
  };

  /* -------- SEARCH + SORT -------- */
  const filteredItems = useMemo(() => {
    const q = normalize(query.trim());

    const searched = !q
      ? HOME_ORDER
      : HOME_ORDER.filter(item => {
          const label = HOME_LABELS[item.key];
          return (
            normalize(label.malayalam).includes(q) ||
            normalize(label.manglish).includes(q) ||
            normalize(label.english).includes(q) ||
            normalize(label.arabic).includes(q)
          );
        });

    return [...searched].sort((a, b) => {
      const aFav = favourites.includes(a.key);
      const bFav = favourites.includes(b.key);
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      return 0;
    });
  }, [query, favourites]);

  const favouriteItems = filteredItems.filter(item =>
    favourites.includes(item.key)
  );

  const normalItems = filteredItems.filter(
    item => !favourites.includes(item.key)
  );

  return {
    language,
    setLanguage,
    query,
    setQuery,
    favourites,
    toggleFavourite,
    filteredItems,
    favouriteItems,
    normalItems,
  };
};
