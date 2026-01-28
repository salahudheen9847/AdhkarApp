import type { HomeLabel } from "../labels/types";

import { FAMILY_DUA_LABEL } from "./label";
import { DUAS_FOR_PARENTS_LABEL } from "./duasForParents/label";
import { ELDERLY_PARENTS_DUAS_LABEL } from "./elderlyParentsDuas/label";
import { FAMILY_UNITY_DUAS_LABEL } from "./familyUnityDuas/label";
import { HUSBAND_WIFE_DUAS_LABEL } from "./husbandWifeDuas/label";
import { MARRIAGE_DUAS_LABEL } from "./marriageDuas/label";
import { SINGLE_PARENT_DUAS_LABEL } from "./singleParentDuas/label";

export const FAMILY_HOME_LABELS: Record<string, HomeLabel> = {
  ...FAMILY_DUA_LABEL,          // section heading (familyDua)
  ...DUAS_FOR_PARENTS_LABEL,
  ...ELDERLY_PARENTS_DUAS_LABEL,
  ...FAMILY_UNITY_DUAS_LABEL,
  ...HUSBAND_WIFE_DUAS_LABEL,
  ...MARRIAGE_DUAS_LABEL,
  ...SINGLE_PARENT_DUAS_LABEL,
};