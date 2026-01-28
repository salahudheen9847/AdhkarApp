// 👉 SECTION LABEL
import { HEALTH_DUA_LABEL } from "./label";

// 👉 breastfeeding
import { breastfeedingDuas } from "./breastfeedingDuas/content";
import { BREASTFEEDING_DUA_META } from "./breastfeedingDuas/meta";
import { BREASTFEEDING_DUAS_LABEL } from "./breastfeedingDuas/label";

// 👉 dua for sick person
import { duaForSick } from "./duaForSick/content";
import { DUA_FOR_SICK_META } from "./duaForSick/meta";
import { DUA_FOR_SICK_LABEL } from "./duaForSick/label";

// 👉 dua for sickness
import { duaForSickness } from "./duaForSickness/content";
import { DUA_FOR_SICKNESS_META } from "./duaForSickness/meta";
import { DUA_FOR_SICKNESS_LABEL } from "./duaForSickness/label";

// 👉 hospital & surgery
import { hospitalSurgeryDuas } from "./hospitalSurgeryDuas/content";
import { HOSPITAL_SURGERY_DUA_META } from "./hospitalSurgeryDuas/meta";
import { HOSPITAL_SURGERY_DUAS_LABEL } from "./hospitalSurgeryDuas/label";

// 👉 pregnancy
import { pregnancyDuas } from "./pregnancyDuas/content";
import { PREGNANCY_DUA_META } from "./pregnancyDuas/meta";
import { PREGNANCY_DUAS_LABEL } from "./pregnancyDuas/label";

// 👉 sickness
import { sicknessDuas } from "./sicknessDuas/content";
import { SICKNESS_DUA_META } from "./sicknessDuas/meta";
import { SICKNESS_DUAS_LABEL } from "./sicknessDuas/label";

/* ---------------- CONTENT ---------------- */

export const HEALTH_DUA_CONTENT = [
  breastfeedingDuas,
  duaForSick,
  duaForSickness,
  hospitalSurgeryDuas,
  pregnancyDuas,
  sicknessDuas,
] as const;

/* ---------------- META ---------------- */

export const HEALTH_DUA_META = [
  BREASTFEEDING_DUA_META,
  DUA_FOR_SICK_META,
  DUA_FOR_SICKNESS_META,
  HOSPITAL_SURGERY_DUA_META,
  PREGNANCY_DUA_META,
  SICKNESS_DUA_META,
] as const;

/* ---------------- LABELS ---------------- */
/**
 * ⚠️ NOTE:
 * HomeScreen / getHomeLabelText() നേരിട്ട്
 * HEALTH_DUA_LABEL ഉപയോഗിക്കില്ല.
 * ഇത് homeLabels.ts-ൽ merge ചെയ്യാനാണ്.
 */

export {
  HEALTH_DUA_LABEL,

  BREASTFEEDING_DUAS_LABEL,
  DUA_FOR_SICK_LABEL,
  DUA_FOR_SICKNESS_LABEL,
  HOSPITAL_SURGERY_DUAS_LABEL,
  PREGNANCY_DUAS_LABEL,
  SICKNESS_DUAS_LABEL,
};