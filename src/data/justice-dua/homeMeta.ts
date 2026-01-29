import type { HomeMeta } from "../types";

import { COURT_CASE_DUA_META } from "./courtCaseDuas/meta";
import { OPPRESSION_JUSTICE_DUA_META } from "./oppressionJusticeDuas/meta";

export const JUSTICE_DUA_HOME_META: HomeMeta[] = [
  { ...COURT_CASE_DUA_META, section: "justice" },
  { ...OPPRESSION_JUSTICE_DUA_META, section: "justice" },
];
