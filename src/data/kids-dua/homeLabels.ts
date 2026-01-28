import type { HomeLabel } from "../labels/types";

/* ===============================
   IMPORT KIDS DUA LABELS
=============================== */

import { KIDS_DUA_LABEL } from "./label";
import { DUAS_FOR_CHILDREN_LABEL } from "./duasForChildren/label";
import { KIDS_DAILY_DUAS_LABEL } from "./kidsDailyDuas/label";
import { KIDS_ISLAMIC_DUAS_LABEL } from "./kidsIslamicDuas/label";
import { KIDS_LEARNING_DUAS_LABEL } from "./kidsLearningDuas/label";
import { NEWBORN_DUAS_LABEL } from "./newbornDuas/label";
import { SHORT_SURAHS_FOR_KIDS_LABEL } from "./shortSurahsForKids/label";

/* ===============================
   HOME LABEL MAP
=============================== */

export const KIDS_HOME_LABELS = {
  ...KIDS_DUA_LABEL, // ✅ comma added
  ...DUAS_FOR_CHILDREN_LABEL,
  ...KIDS_DAILY_DUAS_LABEL,
  ...KIDS_ISLAMIC_DUAS_LABEL,
  ...KIDS_LEARNING_DUAS_LABEL,
  ...NEWBORN_DUAS_LABEL,
  ...SHORT_SURAHS_FOR_KIDS_LABEL,
} satisfies Record<string, HomeLabel>;