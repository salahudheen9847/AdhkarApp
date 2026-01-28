// src/data/family-dua/homeMeta.ts

import type { HomeMeta } from "../types";

import { DUAS_FOR_PARENTS_META } from "./duasForParents/meta";
import { ELDERLY_PARENTS_DUA_META } from "./elderlyParentsDuas/meta";
import { FAMILY_UNITY_DUA_META } from "./familyUnityDuas/meta";
import { HUSBAND_WIFE_DUA_META } from "./husbandWifeDuas/meta";
import { MARRIAGE_DUA_META } from "./marriageDuas/meta";
import { SINGLE_PARENT_DUA_META } from "./singleParentDuas/meta";

export const FAMILY_HOME_META: HomeMeta[] = [
  { ...DUAS_FOR_PARENTS_META, section: "family" },
  { ...ELDERLY_PARENTS_DUA_META, section: "family" },
  { ...FAMILY_UNITY_DUA_META, section: "family" },
  { ...HUSBAND_WIFE_DUA_META, section: "family" },
  { ...MARRIAGE_DUA_META, section: "family" },
  { ...SINGLE_PARENT_DUA_META, section: "family" },
];