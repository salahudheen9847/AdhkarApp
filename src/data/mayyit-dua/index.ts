import { MAYYIT_DUA_LABEL } from "./label";

// 👉 mayyit dua
import { talqeenForMen } from "./talqeenForMen";
import { TALQEEN_FOR_MEN_META } from "./talqeenForMen/meta";
import { TALQEEN_FOR_MEN_LABEL } from "./talqeenForMen/label";
import { duaQabarContent } from "./duaQabar";
import { DUA_QABAR_META } from "./duaQabar/meta";
import { DUA_QABAR_LABEL } from "./duaQabar/label";
import { duaMarichavarkContent } from "./duaMarichaverk";
import { DUA_MARICHAVERK_META } from "./duaMarichaverk/meta";
import { DUA_MARICHAVERK_LABEL } from "./duaMarichaverk/label";

export const MAYYIT_CONTENT = [
  talqeenForMen,
  duaQabarContent,
  duaMarichavarkContent,
];

export const MAYYIT_META = [
  TALQEEN_FOR_MEN_META,
  DUA_QABAR_META,
  DUA_MARICHAVERK_META,
];

export {
  MAYYIT_DUA_LABEL,
  TALQEEN_FOR_MEN_LABEL,
  DUA_QABAR_LABEL,
  DUA_MARICHAVERK_LABEL,
};
