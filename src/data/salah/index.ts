import { SALAH_DUA_LABEL } from "./label";

// 👉 adhan & iqamah
import { adhanIqamahDuas } from "./adhanIqamahDuas/content";
import { ADHAN_IQAMAH_DUA_META } from "./adhanIqamahDuas/meta";

// 👉 adhkar after salah (FIXED)
import { adhkarAfterSalahDuas } from "./adhkarAfterSalah/content";
import { ADHKAR_AFTER_SALAH_META } from "./adhkarAfterSalah/meta";

// 👉 at-tahiyyat
import { atTahiyyat } from "./at-tahiyyat/content";
import { AT_TAHIYYAT_META } from "./at-tahiyyat/meta";

// 👉 dua after salah
import { duaAfterSalahDuas } from "./duaAfterSalah/content";
import { DUA_AFTER_SALAH_META } from "./duaAfterSalah/meta";

// 👉 dua-ul-qunoot
import { duaUlQunootDuas } from "./duaUlQunoot/content";
import { DUA_UL_QUNOOT_META } from "./duaUlQunoot/meta";

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