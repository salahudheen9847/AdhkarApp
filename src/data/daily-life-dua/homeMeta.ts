// src/data/daily-life-dua/homeMeta.ts

import type { HomeMeta } from "../types";

import { FOOD_DUA_META } from "./foodDuas/meta";
import { CLOTHING_DUA_META } from "./clothingDuas/meta";
import { HOME_DUA_META } from "./homeDuas/meta";
import { MASJID_DUA_META } from "./MasjidDuas/meta";
import { RainDuas_DUA_META } from "./RainDuas/meta";
import { TRAVEL_DUA_META } from "./TravelDuas/meta";

export const DAILY_HOME_META: HomeMeta[] = [
  { ...FOOD_DUA_META, section: "daily" },
  { ...CLOTHING_DUA_META, section: "daily" },
  { ...HOME_DUA_META, section: "daily" },
  { ...MASJID_DUA_META, section: "daily" },
  { ...RainDuas_DUA_META, section: "daily" },
  { ...TRAVEL_DUA_META, section: "daily" },
];