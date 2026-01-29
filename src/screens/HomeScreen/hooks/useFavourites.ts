// HomeScreen/hooks/useFavourites.ts

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { HomeLabelKey } from "../../../data/labels";

/* 🔐 STORAGE KEYS */
const FAV_KEY = "HOME_FAVOURITES";
const FIRST_LAUNCH_KEY = "FIRST_LAUNCH_DONE";

/* ⭐ DEFAULT FAVOURITE (FIRST TIME ONLY)
   👉 HOME_META_LIST-ൽ ഉള്ള EXACT id ആയിരിക്കണം */
const DEFAULT_FAV: HomeLabelKey = "duaMarichavark";
export function useFavourites() {
  const [favourites, setFavourites] = useState<HomeLabelKey[]>([]);

  /* 🚀 INIT (APP START) */
  useEffect(() => {
    const init = async () => {
      try {
        const favJson = await AsyncStorage.getItem(FAV_KEY);
        const firstLaunchDone = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);

        // ⭐ FIRST APP OPEN ONLY
        if (!firstLaunchDone) {
          const initialFavs: HomeLabelKey[] = [DEFAULT_FAV];

          setFavourites(initialFavs);

          await AsyncStorage.setItem(
            FAV_KEY,
            JSON.stringify(initialFavs)
          );
          await AsyncStorage.setItem(FIRST_LAUNCH_KEY, "true");
          return;
        }

        // 🔁 NORMAL LOAD
        if (favJson) {
          setFavourites(JSON.parse(favJson));
        }
      } catch (e) {
        console.log("Favourite init error", e);
      }
    };

    init();
  }, []);

  /* ⭐ TOGGLE */
  const toggleFavourite = async (id: HomeLabelKey) => {
    const updated = favourites.includes(id)
      ? favourites.filter(f => f !== id) // ❌ unstar
      : [...favourites, id];             // ⭐ star

    setFavourites(updated);

    await AsyncStorage.setItem(
      FAV_KEY,
      JSON.stringify(updated)
    );
  };

  /* 🔎 CHECK */
  const isFavourite = (id: HomeLabelKey) =>
    favourites.includes(id);

  return {
    favourites,
    toggleFavourite,
    isFavourite,
  };
}