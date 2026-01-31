import { DAILY_LIFE_DUA_LABEL } from "./label";

// 👉 clothing-duas
import { clothingDuas } from "./clothing-duas/content";
import { CLOTHING_DUA_META } from "./clothing-duas/meta";
import { CLOTHING_DUA_LABEL } from "./clothing-duas/label";

// 👉 food-duas
import { foodDuas } from "./food-duas/content";
import { FOOD_DUA_META } from "./food-duas/meta";
import { FOOD_DUA_LABEL } from "./food-duas/label";

// 👉 home-duas
import { homeDuas } from "./home-duas/content";
import { HOME_DUA_META } from "./home-duas/meta";
import { HOME_DUA_LABEL } from "./home-duas/label";

// 👉 rain-duas
import { RainDuas } from "./rain-duas/content";
import { RainDuas_DUA_META } from "./rain-duas/meta";
import { RainDuas_DUA_LABEL } from "./rain-duas/label";

// 👉 travel-duas
import { TravelDuas } from "./travel-duas/content";
import { TRAVEL_DUA_META } from "./travel-duas/meta";
import { TRAVEL_DUA_LABEL } from "./travel-duas/label";

// 👉 masjid-duas
import { MasjidDuas } from "./masjid-duas/content";
import { MASJID_DUA_META } from "./masjid-duas/meta";
import { MASJID_DUA_LABEL } from "./masjid-duas/label";

// 👉 sleep-duas
import { sleepDuas } from "./sleep-duas/content";
import { SLEEP_DUA_META } from "./sleep-duas/meta";
import { SLEEP_DUA_LABEL } from "./sleep-duas/label";

// 👉 toilet-duas
import { toiletDuas } from "./toilet-duas/content";
import { TOILET_DUA_META } from "./toilet-duas/meta";
import { TOILET_DUA_LABEL } from "./toilet-duas/label";

/* ---------------- CONTENT ---------------- */

export const DAILY_LIFE_DUA_CONTENT = [
  clothingDuas,
  foodDuas,
  homeDuas,
  RainDuas,
  TravelDuas,
  MasjidDuas,
  sleepDuas,
  toiletDuas,
] as const;

/* ---------------- META ---------------- */

export const DAILY_LIFE_DUA_META = [
  CLOTHING_DUA_META,
  FOOD_DUA_META,
  HOME_DUA_META,
  RainDuas_DUA_META,
  TRAVEL_DUA_META,
  MASJID_DUA_META,
  SLEEP_DUA_META,
  TOILET_DUA_META,
] as const;

/* ---------------- LABELS ---------------- */

export {
  DAILY_LIFE_DUA_LABEL,
  CLOTHING_DUA_LABEL,
  FOOD_DUA_LABEL,
  HOME_DUA_LABEL,
  RainDuas_DUA_LABEL,
  TRAVEL_DUA_LABEL,
  MASJID_DUA_LABEL,
  SLEEP_DUA_LABEL,
  TOILET_DUA_LABEL,
};
