import type { HomeMeta } from "../types";

import { BREASTFEEDING_DUA_META } from "./breastfeedingDuas/meta";
import { DUA_FOR_SICK_META } from "./duaForSick/meta";
import { DUA_FOR_SICKNESS_META } from "./duaForSickness/meta";
import { HOSPITAL_SURGERY_DUA_META } from "./hospitalSurgeryDuas/meta";
import { PREGNANCY_DUA_META } from "./pregnancyDuas/meta";
import { SICKNESS_DUA_META } from "./sicknessDuas/meta";

export const HEALTH_HOME_META: HomeMeta[] = [
  { ...BREASTFEEDING_DUA_META, section: "health" },
  { ...DUA_FOR_SICK_META, section: "health" },
  { ...DUA_FOR_SICKNESS_META, section: "health" },
  { ...HOSPITAL_SURGERY_DUA_META, section: "health" },
  { ...PREGNANCY_DUA_META, section: "health" },
  { ...SICKNESS_DUA_META, section: "health" },
];