// 👉 LABEL
import { DHIKR_LABEL } from "./label";

// 👉 CONTENT
import { asmaulHusna_CONTENT } from "./asmaulHusna/content";
import { morningAdhkar } from "./morningAdhkar/content";
import { eveningAdhkar } from "./eveningAdhkar/content";
import { beforeSleepAdhkar } from "./beforeSleepAdhkar/content";
import { wakeUpAdhkar } from "./wakeUpAdhkar/content";
import { jumuaAdhkar } from "./jumuaAdhkar/content";

// 👉 META
import { asmaulHusna_META } from "./asmaulHusna/meta";
import { morningAdhkar_DHIKR_META } from "./morningAdhkar/meta";
import { eveningAdhkar_DHIKR_META } from "./eveningAdhkar/meta";
import { BEFORE_SLEEP_META } from "./beforeSleepAdhkar/meta";
import { WAKE_UP_DHIKR_META } from "./wakeUpAdhkar/meta";
import { jumuaAdhkar_DHIKR_META } from "./jumuaAdhkar/meta";

/* ---------------- CONTENT ---------------- */

export const DHIKR_CONTENT = [
  asmaulHusna_CONTENT,
  morningAdhkar,
  eveningAdhkar,
  beforeSleepAdhkar,
  wakeUpAdhkar,
  jumuaAdhkar,
] as const;

/* ---------------- META ---------------- */

export const DHIKR_META = [
  asmaulHusna_META,
  morningAdhkar_DHIKR_META,
  eveningAdhkar_DHIKR_META,
  BEFORE_SLEEP_META,
  WAKE_UP_DHIKR_META,
  jumuaAdhkar_DHIKR_META,
] as const;

/* ---------------- LABEL ---------------- */

export { DHIKR_LABEL };
