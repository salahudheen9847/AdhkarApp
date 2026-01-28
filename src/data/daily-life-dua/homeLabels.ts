import type { HomeLabel } from "../labels/types";

import { DAILY_LIFE_DUA_LABEL } from "./label";
import { CLOTHING_DUA_LABEL } from "./clothingDuas/label";
import { FOOD_DUA_LABEL } from "./foodDuas/label";
import { HOME_DUA_LABEL } from "./homeDuas/label";
import { RainDuas_DUA_LABEL } from "./RainDuas/label";
import { TRAVEL_DUA_LABEL } from "./TravelDuas/label";
import { MASJID_DUA_LABEL } from "./MasjidDuas/label";

export const DAILY_HOME_LABELS: Record<string, HomeLabel> = {
  ...DAILY_LIFE_DUA_LABEL,
  ...CLOTHING_DUA_LABEL,
  ...FOOD_DUA_LABEL,
  ...HOME_DUA_LABEL,
  ...RainDuas_DUA_LABEL,
  ...TRAVEL_DUA_LABEL,
  ...MASJID_DUA_LABEL,
};