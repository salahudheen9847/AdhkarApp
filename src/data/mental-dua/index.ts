// 👉 SECTION LABEL
import { MENTAL_DUA_LABEL } from "./label";

// 👉 anger control
import { angerControlDuas } from "./angerControlDuas/content";
import { ANGER_CONTROL_DUA_META } from "./angerControlDuas/meta";
import { ANGER_CONTROL_DUA_LABEL } from "./angerControlDuas/label";

// 👉 anxiety & worry
import { anxietyWorryDuas } from "./anxietyWorryDuas/content";
import { ANXIETY_WORRY_DUA_META } from "./anxietyWorryDuas/meta";
import { ANXIETY_WORRY_DUA_LABEL } from "./anxietyWorryDuas/label";

// 👉 exam
import { examDuas } from "./examDuas/content";
import { EXAM_DUA_META } from "./examDuas/meta";
import { EXAM_DUA_LABEL } from "./examDuas/label";

// 👉 fear & panic
import { fearPanicDuas } from "./fearPanicDuas/content";
import { FEAR_PANIC_DUA_META } from "./fearPanicDuas/meta";
import { FEAR_PANIC_DUA_LABEL } from "./fearPanicDuas/label";

// 👉 forgiveness
import { forgivenessDuas } from "./forgivenessDuas/content";
import { FORGIVENESS_DUA_META } from "./forgivenessDuas/meta";
import { FORGIVENESS_DUA_LABEL } from "./forgivenessDuas/label";

// 👉 grief & loss
import { griefLossDuas } from "./griefLossDuas/content";
import { GRIEF_LOSS_DUA_META } from "./griefLossDuas/meta";
import { GRIEF_LOSS_DUA_LABEL } from "./griefLossDuas/label";

// 👉 inner peace
import { innerPeaceDuas } from "./innerPeaceDuas/content";
import { INNER_PEACE_DUA_META } from "./innerPeaceDuas/meta";
import { INNER_PEACE_DUA_LABEL } from "./innerPeaceDuas/label";

// 👉 istikhara
import { istikharaDuas } from "./istikharaDua/content";
import { ISTIKHARA_DUA_META } from "./istikharaDua/meta";
import { ISTIKHARA_DUA_LABEL } from "./istikharaDua/label";

// 👉 knowledge
import { knowledgeDuas } from "./knowledgeDuas/content";
import { KNOWLEDGE_DUA_META } from "./knowledgeDuas/meta";
import { KNOWLEDGE_DUA_LABEL } from "./knowledgeDuas/label";

// 👉 stress relief
import { stressReliefDuas } from "./stressReliefDuas/content";
import { STRESS_RELIEF_DUA_META } from "./stressReliefDuas/meta";
import { STRESS_RELIEF_DUA_LABEL } from "./stressReliefDuas/label";

// 👉 success & motivation
import { successMotivationDuas } from "./successMotivationDuas/content";
import { SUCCESS_MOTIVATION_DUA_META } from "./successMotivationDuas/meta";
import { SUCCESS_MOTIVATION_DUA_LABEL } from "./successMotivationDuas/label";

// 👉 taubah
import { taubahDuas } from "./taubahDuas/content";
import { TAUBAH_DUA_META } from "./taubahDuas/meta";
import { TAUBAH_DUA_LABEL } from "./taubahDuas/label";

/* ---------------- CONTENT ---------------- */

export const MENTAL_DUA_CONTENT = [
  angerControlDuas,
  anxietyWorryDuas,
  examDuas,
  fearPanicDuas,
  forgivenessDuas,
  griefLossDuas,
  innerPeaceDuas,
  istikharaDuas,
  knowledgeDuas,
  stressReliefDuas,
  successMotivationDuas,
  taubahDuas,
] as const;

/* ---------------- META ---------------- */

export const MENTAL_DUA_META = [
  ANGER_CONTROL_DUA_META,
  ANXIETY_WORRY_DUA_META,
  EXAM_DUA_META,
  FEAR_PANIC_DUA_META,
  FORGIVENESS_DUA_META,
  GRIEF_LOSS_DUA_META,
  INNER_PEACE_DUA_META,
  ISTIKHARA_DUA_META,
  KNOWLEDGE_DUA_META,
  STRESS_RELIEF_DUA_META,
  SUCCESS_MOTIVATION_DUA_META,
  TAUBAH_DUA_META,
] as const;

/* ---------------- LABELS ---------------- */

export {
  MENTAL_DUA_LABEL,

  ANGER_CONTROL_DUA_LABEL,
  ANXIETY_WORRY_DUA_LABEL,
  EXAM_DUA_LABEL,
  FEAR_PANIC_DUA_LABEL,
  FORGIVENESS_DUA_LABEL,
  GRIEF_LOSS_DUA_LABEL,
  INNER_PEACE_DUA_LABEL,
  ISTIKHARA_DUA_LABEL,
  KNOWLEDGE_DUA_LABEL,
  STRESS_RELIEF_DUA_LABEL,
  SUCCESS_MOTIVATION_DUA_LABEL,
  TAUBAH_DUA_LABEL,
};