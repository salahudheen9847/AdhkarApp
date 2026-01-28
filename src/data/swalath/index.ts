import { SWALATH_DUA_LABEL } from "./label";

// 👉 nariyath swalath
import { nariyathSwalathDuas } from "./nariyathSwalath/content";
import { NARIYATH_SWALATH_META } from "./nariyathSwalath/meta";

// 👉 salathul ibrahim
import { salathulIbrahim } from "./salathuIbrahim/content";
import { SALATHUL_IBRAHIM_META } from "./salathuIbrahim/meta";

// 👉 salawat al fatih
import { salawatAlFatihDuas } from "./salawatAlFatih/content";
import { SALAWAT_AL_FATIH_META } from "./salawatAlFatih/meta";

// 👉 swalathul ibraamiyya
import {swalathulIbramiyya } from "./swalathuIbramiyya/content";
import { SWALATHUL_IBRAMIYYA_META } from "./swalathuIbramiyya/meta";

// 👉 thaju swalath
import { thajuSwalath } from "./thajuSwalath/content";
import { THAJU_SWALATH_META } from "./thajuSwalath/meta";

/* ===============================
   CONTENT
=============================== */

export const SWALATH_DUA_CONTENT = [
  nariyathSwalathDuas,
  salathulIbrahim,
  salawatAlFatihDuas,
  swalathulIbramiyya,
  thajuSwalath,
];

/* ===============================
   META
=============================== */

export const SWALATH_DUA_META = [
  NARIYATH_SWALATH_META,
  SALATHUL_IBRAHIM_META,
  SALAWAT_AL_FATIH_META,
  SWALATHUL_IBRAMIYYA_META,
  THAJU_SWALATH_META,
];

/* ===============================
   LABEL
=============================== */

export {
  SWALATH_DUA_LABEL,
};