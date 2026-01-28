import { JUSTICE_DUA_LABEL } from "./label";

// 👉 court case
import { courtCaseDuas } from "./courtCaseDuas/content";
import { COURT_CASE_DUA_META } from "./courtCaseDuas/meta";

// 👉 oppression & justice
import { oppressionJusticeDuas } from "./oppressionJusticeDuas/content";
import { OPPRESSION_JUSTICE_DUA_META } from "./oppressionJusticeDuas/meta";

export const JUSTICE_DUA_CONTENT = [
  courtCaseDuas,
  oppressionJusticeDuas,
];

export const JUSTICE_DUA_META = [
  COURT_CASE_DUA_META,
  OPPRESSION_JUSTICE_DUA_META,
];

export {
  JUSTICE_DUA_LABEL,
};
