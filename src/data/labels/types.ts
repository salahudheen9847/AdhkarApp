// src/data/labels/types.ts

import type { HomeLabel } from "../types";

/* 🟢 CONTENT KEYS (real navigable items) */
export type HomeLabelKey =
  | "dhikr"
  | "familyDua"
  | "healthDua"
  | "kidsDua"
  | "mentalDua"
  | "protectionDuas"
  | "rizqDuas"
  | "salahDuas"
  | "swalathDuas"
  | "qaseeda"
  | "ratib"
  | "ramadan"
  | "mayyitDuas"
  | "moulid"
  | "clothingDuas"
  | "homeDuas"
  | "sleepDuas"
  | "toiletDuas";

/* 🟡 CATEGORY KEYS (non-navigable) */
export type CategoryKey =
  | "dailyLifeDua";

/* 🏷️ Label record */
export type HomeLabelRecord = Record<HomeLabelKey | CategoryKey, HomeLabel>;
