// src/data/daily-life-dua/homeMeta.ts

import type { HomeMeta } from "../types";

import { FOOD_DUA_META } from "./food-duas/meta";
import { CLOTHING_DUA_META } from "./clothing-duas/meta";
import { HOME_DUA_META } from "./home-duas/meta";
import { MASJID_DUA_META } from "./masjid-duas/meta";
import { RainDuas_DUA_META } from "./rain-duas/meta";
import { TRAVEL_DUA_META } from "./travel-duas/meta";

export const DAILY_HOME_META: HomeMeta[] = [
  { ...CLOTHING_DUA_META, section: "daily" },
  { ...FOOD_DUA_META, section: "daily" },
  { ...HOME_DUA_META, section: "daily" },
  { ...MASJID_DUA_META, section: "daily" },
  { ...RainDuas_DUA_META, section: "daily" },
  { ...TRAVEL_DUA_META, section: "daily" },
];