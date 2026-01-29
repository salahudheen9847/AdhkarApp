// src/data/labels/types.ts

import type { HomeLabel } from "../types";

/* 🔑 All home label keys */
export type HomeLabelKey =
  | "dailyLifeDuas"
  | "dhikr"
  | "familyDuas"
  | "healthDuas"
  | "kidsDuas"
  | "mentalHealth"
  | "protectionDuas"
  | "rizq"
  | "salah"
  | "swalath"
  | "qaseeda"
  | "ratib"
  | "ramadan"
  | "mayyit"
  | "moulid"
  | "clothingDuas"; // ✅ ADD CLOTHING DUAS

/* 🏷️ Label record */
export type HomeLabelRecord = Record<HomeLabelKey, HomeLabel>;