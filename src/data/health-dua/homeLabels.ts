import type { HomeLabel } from "../types";

import { HEALTH_DUA_LABEL } from "./label";
import { BREASTFEEDING_DUAS_LABEL } from "./breastfeedingDuas/label";
import { DUA_FOR_SICK_LABEL } from "./duaForSick/label";
import { DUA_FOR_SICKNESS_LABEL } from "./duaForSickness/label";
import { HOSPITAL_SURGERY_DUAS_LABEL } from "./hospitalSurgeryDuas/label";
import { PREGNANCY_DUAS_LABEL } from "./pregnancyDuas/label";
import { SICKNESS_DUAS_LABEL } from "./sicknessDuas/label";

export const HEALTH_HOME_LABELS: Record<string, HomeLabel> = {
  ...HEALTH_DUA_LABEL,          // section heading
  ...BREASTFEEDING_DUAS_LABEL,
  ...DUA_FOR_SICK_LABEL,
  ...DUA_FOR_SICKNESS_LABEL,
  ...HOSPITAL_SURGERY_DUAS_LABEL,
  ...PREGNANCY_DUAS_LABEL,
  ...SICKNESS_DUAS_LABEL,
};