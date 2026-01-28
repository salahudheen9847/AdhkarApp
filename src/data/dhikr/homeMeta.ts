// src/data/dhikr/homeMeta.ts

import type { HomeMeta } from "../types";

import { asmaulHusna_META } from "./asmaulHusna/meta";
import { morningAdhkar_DHIKR_META } from "./morningAdhkar/meta";
import { eveningAdhkar_DHIKR_META } from "./eveningAdhkar/meta";
import { BEFORE_SLEEP_META } from "./beforeSleepAdhkar/meta";
import { WAKE_UP_DHIKR_META } from "./wakeUpAdhkar/meta";
import { jumuaAdhkar_DHIKR_META } from "./jumuaAdhkar/meta";

export const DHIKR_HOME_META: HomeMeta[] = [
  { ...asmaulHusna_META, section: "dhikr" },
  { ...morningAdhkar_DHIKR_META, section: "dhikr" },
  { ...eveningAdhkar_DHIKR_META, section: "dhikr" },
  { ...BEFORE_SLEEP_META, section: "dhikr" },
  { ...WAKE_UP_DHIKR_META, section: "dhikr" },
  { ...jumuaAdhkar_DHIKR_META, section: "dhikr" },
];