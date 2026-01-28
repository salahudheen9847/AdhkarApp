// src/data/homeMeta.ts

import type { HomeMeta } from "./types";

/* ===============================
   CORE SECTIONS
=============================== */
import { DAILY_HOME_META } from "./daily-life-dua/homeMeta";
import { DHIKR_HOME_META } from "./dhikr/homeMeta";
import { FAMILY_HOME_META } from "./family-dua/homeMeta";
import { HEALTH_HOME_META } from "./health-dua/homeMeta";
import { KIDS_DUA_HOME_META } from "./kids-dua/homeMeta";

/* ===============================
   SPECIAL SECTIONS
=============================== */
import { MENTAL_DUA_HOME_META } from "./mental-dua/homeMeta";
import { PROTECTION_DUA_HOME_META } from "./protection-dua/homeMeta";
import { RIZQ_DUA_HOME_META } from "./rizq-dua/homeMeta";
import { SALAH_DUA_HOME_META } from "./salah/homeMeta";
import { SWALATH_DUA_HOME_META } from "./swalath/homeMeta";
import { QASEEDA_HOME_META } from "./qaseeda/homeMeta";
import { RATIB_HOME_META } from "./ratib";
import { RAMADAN_HOME_META } from "./ramadan/homeMeta";
import { MAYYIT_DUA_HOME_META } from "./mayyit-dua/homeMeta";
import { MOULID_HOME_META } from "./moulid/homeMeta";

/* ===============================
   HOME META LIST
=============================== */
export const HOME_META_LIST: HomeMeta[] = [
  /* 🟡 DAILY */
  ...DAILY_HOME_META,

  /* 🟢 DHIKR */
  ...DHIKR_HOME_META,

  /* 👨‍👩‍👧 FAMILY */
  ...FAMILY_HOME_META,

  /* ❤️ HEALTH */
  ...HEALTH_HOME_META,

  /* 👶 KIDS */
  ...KIDS_DUA_HOME_META,

  /* 🧠 MENTAL */
  ...MENTAL_DUA_HOME_META,

  /* 🛡️ PROTECTION */
  ...PROTECTION_DUA_HOME_META,

  /* 💰 RIZQ */
  ...RIZQ_DUA_HOME_META,

  /* 🕌 SALAH */
  ...SALAH_DUA_HOME_META,

  /* 🤲 SWALATH */
  ...SWALATH_DUA_HOME_META,

  /* 🎵 QASEEDA */
  ...QASEEDA_HOME_META,

  ...RATIB_HOME_META,
  ...RAMADAN_HOME_META,
  ...MAYYIT_DUA_HOME_META,
  ...MOULID_HOME_META
];