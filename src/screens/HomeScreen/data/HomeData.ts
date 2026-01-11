/* ---------------- LANGUAGE ---------------- */

export type AppLanguage = "malayalam" | "english" | "arabic";

/* ---------------- LABEL IMPORTS ---------------- */

import { DUA_LABELS } from "./labels/dua";
import { MOULID_LABELS } from "./labels/moulid";
import { QASEEDA_LABELS } from "./labels/qaseeda";
import { RATIB_LABELS } from "./labels/ratib";
import { SWALATH_LABELS } from "./labels/swalath";
import { ASMA_LABELS } from "./labels/asma";
import { RAMADAN_LABELS } from "./labels/ramadan";
import { SALAH_LABELS } from "./labels/salah";
import { PROTECTION_LABELS } from "./labels/protection";

/* ---------------- HOME LABELS ---------------- */

export const HOME_LABELS = {
  ...DUA_LABELS,
  ...MOULID_LABELS,
  ...QASEEDA_LABELS,
  ...RATIB_LABELS,
  ...SWALATH_LABELS,
  ...ASMA_LABELS,
  ...RAMADAN_LABELS,
  ...SALAH_LABELS,
  ...PROTECTION_LABELS,
} as const;

/* ---------------- TYPES (ADD THIS 👇) ---------------- */

export type HomeKey = keyof typeof HOME_LABELS;
