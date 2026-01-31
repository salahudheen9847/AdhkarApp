import type { HomeLabel } from "../types";

import { DAILY_LIFE_DUA_LABEL } from "./label";
import { CLOTHING_DUA_LABEL } from "./clothing-duas/label";
import { FOOD_DUA_LABEL } from "./food-duas/label";
import { HOME_DUA_LABEL } from "./home-duas/label";
import { RainDuas_DUA_LABEL } from "./rain-duas/label";
import { TRAVEL_DUA_LABEL } from "./travel-duas/label";
import { MASJID_DUA_LABEL } from "./masjid-duas/label";
import { SLEEP_DUA_LABEL } from "./sleep-duas/label";
import { TOILET_DUA_LABEL } from "./toilet-duas/label";

export const DAILY_HOME_LABELS: Record<string, HomeLabel> = {
  ...DAILY_LIFE_DUA_LABEL,
  ...CLOTHING_DUA_LABEL,
  ...FOOD_DUA_LABEL,
  ...HOME_DUA_LABEL,
  ...RainDuas_DUA_LABEL,
  ...TRAVEL_DUA_LABEL,
  ...MASJID_DUA_LABEL,
  ...SLEEP_DUA_LABEL,
  ...TOILET_DUA_LABEL,
};