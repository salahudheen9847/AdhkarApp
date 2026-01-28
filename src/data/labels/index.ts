import type { HomeLabel, AppLanguage } from "./types";

/* ===============================
   HOME LABEL IMPORTS
=============================== */

import { DAILY_HOME_LABELS } from "../daily-life-dua/homeLabels";
import { DHIKR_HOME_LABELS } from "../dhikr/homeLabels";
import { FAMILY_HOME_LABELS } from "../family-dua/homeLabels";
import { HEALTH_HOME_LABELS } from "../health-dua/homeLabels";
import { KIDS_HOME_LABELS } from "../kids-dua/homeLabels";

/* 🧠 MENTAL & 🛡️ PROTECTION */
import { MENTAL_HOME_LABELS } from "../mental-dua/homeLabels";
import { PROTECTION_HOME_LABELS } from "../protection-dua/homeLabels";
import { RIZQ_HOME_LABELS } from "../rizq-dua/homeLabels";
import { SALAH_HOME_LABELS } from "../salah/homeLabels";
import { SWALATH_HOME_LABELS } from "../swalath/homeLabels";

/* 🎵 QASEEDA */
import { QASEEDA_LABEL } from "../qaseeda/label";
import { QASEEDA_HOME_LABELS } from "../qaseeda/homeLabels";

/* 📿 RATIB */
import { RATIB_LABEL, RATIB_HOME_LABELS } from "../ratib";

/* 🌙 RAMADAN */
import { RAMADAN_LABEL } from "../ramadan/label";
import { RAMADAN_HOME_LABELS } from "../ramadan/homeLabels";

/* ⚰️ MAYYIT */
import { MAYYIT_DUA_LABEL } from "../mayyit-dua/label";
import { MAYYIT_DUA_HOME_LABELS } from "../mayyit-dua/homeLabels";
import { TALQEEN_FOR_MEN_LABEL } from "../mayyit-dua/talqeenForMen/label";
import { DUA_QABAR_LABEL } from "../mayyit-dua/duaQabar/label";
import { DUA_MARICHAVERK_LABEL } from "../mayyit-dua/duaMarichaverk/label";

/* 🕌 MOULID */
import { MOULID_LABEL } from "../moulid/label";
import { MOULID_HOME_LABELS } from "../moulid/homeLabels";

/* ===============================
   RE-EXPORT TYPES
=============================== */

export type { AppLanguage, HomeLabel } from "./types";

/* ===============================
   FINAL MERGED HOME LABELS
=============================== */

export const HOME_LABELS = {
  /* DAILY & GENERAL */
  ...DAILY_HOME_LABELS,
  ...DHIKR_HOME_LABELS,
  ...FAMILY_HOME_LABELS,
  ...HEALTH_HOME_LABELS,
  ...KIDS_HOME_LABELS,

  /* 🧠 MENTAL */
  ...MENTAL_HOME_LABELS,

  /* 🛡️ PROTECTION + OTHERS */
  ...PROTECTION_HOME_LABELS,
  ...RIZQ_HOME_LABELS,
  ...SALAH_HOME_LABELS,
  ...SWALATH_HOME_LABELS,

  /* 🎵 QASEEDA */
  ...QASEEDA_LABEL,
  ...QASEEDA_HOME_LABELS,

  /* 📿 RATIB */
  ...RATIB_LABEL,
  ...RATIB_HOME_LABELS,

  /* 🌙 RAMADAN */
  ...RAMADAN_LABEL,
  ...RAMADAN_HOME_LABELS,

  /* ⚰️ MAYYIT */
  ...MAYYIT_DUA_LABEL,
  ...MAYYIT_DUA_HOME_LABELS,
  ...TALQEEN_FOR_MEN_LABEL,
  ...DUA_QABAR_LABEL,
  ...DUA_MARICHAVERK_LABEL,

  /* 🕌 MOULID */
  ...MOULID_LABEL,        // section title → “മൗലിദുകൾ”
  ...MOULID_HOME_LABELS,  // cards → baderMoulid, manqusMoulid
} satisfies Record<string, HomeLabel>;

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
  key: HomeLabelKey,
  language: AppLanguage
): string => {
  const label = HOME_LABELS[key];

  if (!label) {
    console.warn("❌ Missing HOME_LABEL for key:", key);
    return key;
  }

  return label[LANGUAGE_KEY_MAP[language]] ?? label.english;
};