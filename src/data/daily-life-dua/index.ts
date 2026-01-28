import { DAILY_LIFE_DUA_LABEL } from "./label";

// 👉 clothing-duas
import { clothingDuas } from "./clothingDuas/content";
import { CLOTHING_DUA_META } from "./clothingDuas/meta";
import { CLOTHING_DUA_LABEL } from "./clothingDuas/label";

// 👉 food-duas
import { foodDuas } from "./foodDuas/content";
import { FOOD_DUA_META } from "./foodDuas/meta";
import { FOOD_DUA_LABEL } from "./foodDuas/label";

// 👉 home-duas
import { homeDuas } from "./homeDuas/content";
import { HOME_DUA_META } from "./homeDuas/meta";
import { HOME_DUA_LABEL } from "./homeDuas/label";

// 👉 RainDuas
import { RainDuas } from "./RainDuas/content";
import { RainDuas_DUA_META } from "./RainDuas/meta";
import { RainDuas_DUA_LABEL } from "./RainDuas/label";

// 👉 TravelDuas
import { TravelDuas } from "./TravelDuas/content";
import { TRAVEL_DUA_META } from "./TravelDuas/meta";
import { TRAVEL_DUA_LABEL } from "./TravelDuas/label";

// 👉 masjid-duas
import { MasjidDuas } from "./MasjidDuas/content";
import { MASJID_DUA_META } from "./MasjidDuas/meta";
import { MASJID_DUA_LABEL } from "./MasjidDuas/label";

/* ---------------- CONTENT ---------------- */

export const DAILY_LIFE_DUA_CONTENT = [
  clothingDuas,
  foodDuas,
  homeDuas,
  RainDuas,
  TravelDuas,
  MasjidDuas,
] as const;

/* ---------------- META ---------------- */

export const DAILY_LIFE_DUA_META = [
  CLOTHING_DUA_META,
  FOOD_DUA_META,
  HOME_DUA_META,
  RainDuas_DUA_META,
  TRAVEL_DUA_META,
  MASJID_DUA_META,
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
};
