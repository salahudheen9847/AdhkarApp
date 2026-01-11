// dua/part4.ts
import { HomeLabel } from "../../types";

export const DUA_PART_4 = {
  anxietyWorryDuas: {
    malayalam: "ആകുലതയും ദുഃഖവും മാറാൻ ദുആകൾ",
    manglish: "anxiety duakal",
    english: "Anxiety & Worry Duas",
    arabic: "أدعية الهم والحزن",
  },
  stressReliefDuas: {
    malayalam: "സമ്മർദ്ദം മാറാൻ ദുആകൾ",
    manglish: "stress relief duakal",
    english: "Stress Relief Duas",
    arabic: "أدعية إزالة الضيق",
  },
  innerPeaceDuas: {
    malayalam: "ഹൃദയ സമാധാനത്തിനുള്ള ദുആകൾ",
    manglish: "inner peace duakal",
    english: "Inner Peace Duas",
    arabic: "أدعية السكينة",
  },
  angerControlDuas: {
    malayalam: "കോപം നിയന്ത്രിക്കാൻ ദുആകൾ",
    manglish: "anger control duakal",
    english: "Anger Control Duas",
    arabic: "أدعية كظم الغيظ",
  },

  /* ✅ MISSING FIXED */
  badDreamDuas: {
    malayalam: "ദുഃസ്വപ്നം കണ്ടാൽ ചൊല്ലേണ്ട ദുആകൾ",
    manglish: "bad dream duakal",
    english: "Bad Dream Duas",
    arabic: "أدعية الرؤيا السيئة",
  },
} satisfies Record<
  | "anxietyWorryDuas"
  | "stressReliefDuas"
  | "innerPeaceDuas"
  | "angerControlDuas"
  | "badDreamDuas",
  HomeLabel
>;
