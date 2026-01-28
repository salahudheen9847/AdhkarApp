// 👉 SECTION LABEL
import { FAMILY_DUA_LABEL } from "./label";

// 👉 parents
import { duasForParents } from "./duasForParents/content";
import { DUAS_FOR_PARENTS_META } from "./duasForParents/meta";
import { DUAS_FOR_PARENTS_LABEL } from "./duasForParents/label";

// 👉 elderly parents
import { elderlyParentsDuas } from "./elderlyParentsDuas/content";
import { ELDERLY_PARENTS_DUA_META } from "./elderlyParentsDuas/meta";
import { ELDERLY_PARENTS_DUAS_LABEL } from "./elderlyParentsDuas/label";

// 👉 family unity
import { familyUnityDuas } from "./familyUnityDuas/content";
import { FAMILY_UNITY_DUA_META } from "./familyUnityDuas/meta";
import { FAMILY_UNITY_DUAS_LABEL } from "./familyUnityDuas/label";

// 👉 husband & wife
import { husbandWifeDuas } from "./husbandWifeDuas/content";
import { HUSBAND_WIFE_DUA_META } from "./husbandWifeDuas/meta";
import { HUSBAND_WIFE_DUAS_LABEL } from "./husbandWifeDuas/label";

// 👉 marriage
import { marriageDuas } from "./marriageDuas/content";
import { MARRIAGE_DUA_META } from "./marriageDuas/meta";
import { MARRIAGE_DUAS_LABEL } from "./marriageDuas/label";

// 👉 single parent
import { singleParentDuas } from "./singleParentDuas/content";
import { SINGLE_PARENT_DUA_META } from "./singleParentDuas/meta";
import { SINGLE_PARENT_DUAS_LABEL } from "./singleParentDuas/label";

/* ---------------- CONTENT ---------------- */

export const FAMILY_DUA_CONTENT = [
  duasForParents,
  elderlyParentsDuas,
  familyUnityDuas,
  husbandWifeDuas,
  marriageDuas,
  singleParentDuas,
] as const;

/* ---------------- META ---------------- */

export const FAMILY_DUA_META = [
  DUAS_FOR_PARENTS_META,
  ELDERLY_PARENTS_DUA_META,
  FAMILY_UNITY_DUA_META,
  HUSBAND_WIFE_DUA_META,
  MARRIAGE_DUA_META,
  SINGLE_PARENT_DUA_META,
] as const;

/* ---------------- LABELS ---------------- */

export {
  FAMILY_DUA_LABEL,

  DUAS_FOR_PARENTS_LABEL,
  ELDERLY_PARENTS_DUAS_LABEL,
  FAMILY_UNITY_DUAS_LABEL,
  HUSBAND_WIFE_DUAS_LABEL,
  MARRIAGE_DUAS_LABEL,
  SINGLE_PARENT_DUAS_LABEL,
};
