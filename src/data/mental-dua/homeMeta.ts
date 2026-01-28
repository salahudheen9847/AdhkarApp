import type { HomeMeta } from "../types";

/* ===============================
   IMPORT MENTAL DUA METAS
=============================== */

import { ANGER_CONTROL_DUA_META } from "./angerControlDuas/meta";
import { ANXIETY_WORRY_DUA_META } from "./anxietyWorryDuas/meta";
import { EXAM_DUA_META } from "./examDuas/meta";
import { FEAR_PANIC_DUA_META } from "./fearPanicDuas/meta";
import { FORGIVENESS_DUA_META } from "./forgivenessDuas/meta";
import { GRIEF_LOSS_DUA_META } from "./griefLossDuas/meta";
import { INNER_PEACE_DUA_META } from "./innerPeaceDuas/meta";
import { ISTIKHARA_DUA_META } from "./istikharaDua/meta";
import { KNOWLEDGE_DUA_META } from "./knowledgeDuas/meta";
import { STRESS_RELIEF_DUA_META } from "./stressReliefDuas/meta";
import { SUCCESS_MOTIVATION_DUA_META } from "./successMotivationDuas/meta";
import { TAUBAH_DUA_META } from "./taubahDuas/meta";

/* ===============================
   MENTAL DUA HOME META
=============================== */

export const MENTAL_DUA_HOME_META: HomeMeta[] = [
  { ...ANGER_CONTROL_DUA_META, section: "mental" },
  { ...ANXIETY_WORRY_DUA_META, section: "mental" },
  { ...EXAM_DUA_META, section: "mental" },
  { ...FEAR_PANIC_DUA_META, section: "mental" },
  { ...FORGIVENESS_DUA_META, section: "mental" },
  { ...GRIEF_LOSS_DUA_META, section: "mental" },
  { ...INNER_PEACE_DUA_META, section: "mental" },
  { ...ISTIKHARA_DUA_META, section: "mental" },
  { ...KNOWLEDGE_DUA_META, section: "mental" },
  { ...STRESS_RELIEF_DUA_META, section: "mental" },
  { ...SUCCESS_MOTIVATION_DUA_META, section: "mental" },
  { ...TAUBAH_DUA_META, section: "mental" },
];