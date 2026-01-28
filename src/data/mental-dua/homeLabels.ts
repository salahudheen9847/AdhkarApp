import type { HomeLabel } from "../labels/types";

/* ===============================
   IMPORT MENTAL DUA LABELS
=============================== */

import { MENTAL_DUA_LABEL } from "./label";

import { ANGER_CONTROL_DUA_LABEL } from "./angerControlDuas/label";
import { ANXIETY_WORRY_DUA_LABEL } from "./anxietyWorryDuas/label";
import { EXAM_DUA_LABEL } from "./examDuas/label";
import { FEAR_PANIC_DUA_LABEL } from "./fearPanicDuas/label";
import { FORGIVENESS_DUA_LABEL } from "./forgivenessDuas/label";
import { GRIEF_LOSS_DUA_LABEL } from "./griefLossDuas/label";
import { INNER_PEACE_DUA_LABEL } from "./innerPeaceDuas/label";
import { ISTIKHARA_DUA_LABEL } from "./istikharaDua/label";
import { KNOWLEDGE_DUA_LABEL } from "./knowledgeDuas/label";
import { STRESS_RELIEF_DUA_LABEL } from "./stressReliefDuas/label";
import { SUCCESS_MOTIVATION_DUA_LABEL } from "./successMotivationDuas/label";
import { TAUBAH_DUA_LABEL } from "./taubahDuas/label";

/* ===============================
   HOME LABEL MAP
=============================== */

export const MENTAL_HOME_LABELS = {
  ...MENTAL_DUA_LABEL,

  ...ANGER_CONTROL_DUA_LABEL,
  ...ANXIETY_WORRY_DUA_LABEL,
  ...EXAM_DUA_LABEL,
  ...FEAR_PANIC_DUA_LABEL,
  ...FORGIVENESS_DUA_LABEL,
  ...GRIEF_LOSS_DUA_LABEL,
  ...INNER_PEACE_DUA_LABEL,
  ...ISTIKHARA_DUA_LABEL,
  ...KNOWLEDGE_DUA_LABEL,
  ...STRESS_RELIEF_DUA_LABEL,
  ...SUCCESS_MOTIVATION_DUA_LABEL,
  ...TAUBAH_DUA_LABEL,
} satisfies Record<string, HomeLabel>;