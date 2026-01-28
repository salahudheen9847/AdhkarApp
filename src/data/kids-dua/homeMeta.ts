import type { HomeMeta } from "../types";

/* ===============================
   IMPORT KIDS DUA METAS
=============================== */

import { DUAS_FOR_CHILDREN_META } from "./duasForChildren/meta";
import { KIDS_DAILY_DUA_META } from "./kidsDailyDuas/meta";
import { KIDS_ISLAMIC_DUA_META } from "./kidsIslamicDuas/meta";
import { KIDS_LEARNING_DUA_META } from "./kidsLearningDuas/meta";
import { NEWBORN_DUA_META } from "./newbornDuas/meta";
import { SHORT_SURAHS_FOR_KIDS_META } from "./shortSurahsForKids/meta";

/* ===============================
   KIDS DUA HOME META
=============================== */

export const KIDS_DUA_HOME_META: HomeMeta[] = [
  { ...DUAS_FOR_CHILDREN_META, section: "kids" },
  { ...KIDS_DAILY_DUA_META, section: "kids" },
  { ...KIDS_ISLAMIC_DUA_META, section: "kids" },
  { ...KIDS_LEARNING_DUA_META, section:"kids" },
  { ...NEWBORN_DUA_META, section: "kids" },
  { ...SHORT_SURAHS_FOR_KIDS_META, section: "kids" },
];