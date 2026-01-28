import { KIDS_DUA_LABEL } from "./label";

// 👉 duas for children
import { duasForChildren } from "./duasForChildren/content";
import { DUAS_FOR_CHILDREN_META } from "./duasForChildren/meta";

// 👉 kids daily duas
import { kidsDailyDuas } from "./kidsDailyDuas/content";
import { KIDS_DAILY_DUA_META } from "./kidsDailyDuas/meta";

// 👉 kids islamic duas
import { kidsIslamicDuas } from "./kidsIslamicDuas/content";
import { KIDS_ISLAMIC_DUA_META } from "./kidsIslamicDuas/meta";

// 👉 kids learning duas
import { kidsLearningDuas } from "./kidsLearningDuas/content";
import { KIDS_LEARNING_DUA_META } from "./kidsLearningDuas/meta";

// 👉 short surahs for kids
import { shortSurahsForKids } from "./shortSurahsForKids/content";
import { SHORT_SURAHS_FOR_KIDS_META } from "./shortSurahsForKids/meta";  

import { newbornDuas } from "./newbornDuas/content";
import { NEWBORN_DUA_META } from "./newbornDuas/meta";

export const KIDS_DUA_CONTENT = [
  duasForChildren,
  kidsDailyDuas,
  kidsIslamicDuas,
  kidsLearningDuas,
  shortSurahsForKids,
  newbornDuas
];

export const KIDS_DUA_META = [
  DUAS_FOR_CHILDREN_META,
  KIDS_DAILY_DUA_META,
  KIDS_ISLAMIC_DUA_META,
  KIDS_LEARNING_DUA_META,
  SHORT_SURAHS_FOR_KIDS_META,
  NEWBORN_DUA_META
];

export {
  KIDS_DUA_LABEL,
};
