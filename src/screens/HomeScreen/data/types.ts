import { HOME_LABELS } from "./HomeData";

/* ---------------- LANGUAGE ---------------- */

export type AppLanguage = "malayalam" | "english" | "arabic";

/* ---------------- LABEL SHAPE ---------------- */

export type HomeLabel = {
  malayalam: string;
  manglish: string;
  english: string;
  arabic: string;
};

/* ---------------- 🔑 AUTO KEY ---------------- */

export type HomeLabelKey = keyof typeof HOME_LABELS;
