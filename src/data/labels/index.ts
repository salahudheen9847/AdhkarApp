import type { HomeLabel, AppLanguage } from "../types";

/* ===============================
   HOME LABEL IMPORTS
=============================== */
import { DAILY_HOME_LABELS } from "../daily-life-dua/homeLabels";
import { DHIKR_HOME_LABELS } from "../dhikr/homeLabels";
import { FAMILY_HOME_LABELS } from "../family-dua/homeLabels";
import { HEALTH_HOME_LABELS } from "../health-dua/homeLabels";
import { JUSTICE_HOME_LABELS } from "../justice-dua/homeLabels";
import { KIDS_HOME_LABELS } from "../kids-dua/homeLabels";
import { MENTAL_HOME_LABELS } from "../mental-dua/homeLabels";
import { PROTECTION_HOME_LABELS } from "../protection-dua/homeLabels";
import { RIZQ_HOME_LABELS } from "../rizq-dua/homeLabels";
import { SALAH_HOME_LABELS } from "../salah/homeLabels";
import { SWALATH_HOME_LABELS } from "../swalath/homeLabels";
import { QASEEDA_LABEL } from "../qaseeda/label";
import { QASEEDA_HOME_LABELS } from "../qaseeda/homeLabels";
import { RATIB_LABEL, RATIB_HOME_LABELS } from "../ratib";
import { RAMADAN_LABEL } from "../ramadan/label";
import { RAMADAN_HOME_LABELS } from "../ramadan/homeLabels";
import { MAYYIT_DUA_LABEL } from "../mayyit-dua/label";
import { MAYYIT_DUA_HOME_LABELS } from "../mayyit-dua/homeLabels";
import { TALQEEN_FOR_MEN_LABEL } from "../mayyit-dua/talqeenForMen/label";
import { DUA_QABAR_LABEL } from "../mayyit-dua/duaQabar/label";
import { DUA_MARICHAVERK_LABEL } from "../mayyit-dua/duaMarichaverk/label";
import { MOULID_LABEL } from "../moulid/label";
import { MOULID_HOME_LABELS } from "../moulid/homeLabels";
import { COURSE_HOME_LABELS } from "../islamic-courses/homeLabels"; // ✅ Course labels added

/* ===============================
   FINAL MERGED HOME LABELS
=============================== */
// ✅ എറർ ഒഴിവാക്കാൻ Record<string, HomeLabel> ഇവിടെ ചേർക്കുക
export const HOME_LABELS: Record<string, HomeLabel> = {
  ...DAILY_HOME_LABELS,
  ...DHIKR_HOME_LABELS,
  ...FAMILY_HOME_LABELS,
  ...HEALTH_HOME_LABELS,
  ...JUSTICE_HOME_LABELS,
  ...KIDS_HOME_LABELS,
  ...MENTAL_HOME_LABELS,
  ...PROTECTION_HOME_LABELS,
  ...RIZQ_HOME_LABELS,
  ...SALAH_HOME_LABELS,
  ...SWALATH_HOME_LABELS,
  ...QASEEDA_LABEL,
  ...QASEEDA_HOME_LABELS,
  ...RATIB_LABEL,
  ...RATIB_HOME_LABELS,
  ...RAMADAN_LABEL,
  ...RAMADAN_HOME_LABELS,
  ...MAYYIT_DUA_LABEL,
  ...MAYYIT_DUA_HOME_LABELS,
  ...TALQEEN_FOR_MEN_LABEL,
  ...DUA_QABAR_LABEL,
  ...DUA_MARICHAVERK_LABEL,
  ...MOULID_LABEL,
  ...MOULID_HOME_LABELS,
  ...COURSE_HOME_LABELS, // ✅ Course labels merged
};

/* ===============================
   TYPES
=============================== */
export type HomeLabelKey = keyof typeof HOME_LABELS;

/* ===============================
   LANGUAGE KEY MAP
=============================== */
const LANGUAGE_KEY_MAP: Record<AppLanguage, keyof HomeLabel> = {
  arabic: "arabic",
  english: "english",
  malayalam: "malayalam",
};

/* ===============================
   HELPER FUNCTION
=============================== */
export const getHomeLabelText = (
  key: string, // ✅ എറർ ഒഴിവാക്കാൻ HomeLabelKey-ക്ക് പകരം string നൽകുക
  language: AppLanguage
): string => {
  const label = HOME_LABELS[key];

  if (!label) {
    console.warn("❌ Missing HOME_LABEL for key:", key);
    return key;
  }

  const langKey = LANGUAGE_KEY_MAP[language] || "english";
  return label[langKey] ?? label.english;
};

export type { AppLanguage, HomeLabel } from "../types";