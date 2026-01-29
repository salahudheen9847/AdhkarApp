import { SALAH_DUA_LABEL } from "./label";

// 👉 adhan & iqamah
import { adhanIqamahDuas } from "./adhan-iqamah-duas/content";
import { ADHAN_IQAMAH_DUA_META } from "./adhan-iqamah-duas/meta";

// 👉 adhkar after salah (FIXED)
import { adhkarAfterSalahDuas } from "./adhkar-after-salah/content";
import { ADHKAR_AFTER_SALAH_META } from "./adhkar-after-salah/meta";

// 👉 at-tahiyyat
import { atTahiyyat } from "./at-tahiyyat/content";
import { AT_TAHIYYAT_META } from "./at-tahiyyat/meta";

// 👉 dua after salah
import { duaAfterSalahDuas } from "./dua-after-salah/content";
import { DUA_AFTER_SALAH_META } from "./dua-after-salah/meta";

// 👉 dua-ul-qunoot
import { duaUlQunootDuas } from "./dua-ul-qunoot/content";
import { DUA_UL_QUNOOT_META } from "./dua-ul-qunoot/meta";

/* ===============================
   CONTENT
=============================== */

export const SALAH_DUA_CONTENT = [
  adhanIqamahDuas,
  adhkarAfterSalahDuas,
  atTahiyyat,
  duaAfterSalahDuas,
  duaUlQunootDuas,
];

/* ===============================
   META
=============================== */

export const SALAH_DUA_META = [
  ADHAN_IQAMAH_DUA_META,
  ADHKAR_AFTER_SALAH_META,
  AT_TAHIYYAT_META,
  DUA_AFTER_SALAH_META,
  DUA_UL_QUNOOT_META,
];

/* ===============================
   LABEL
=============================== */

export {
  SALAH_DUA_LABEL,
};