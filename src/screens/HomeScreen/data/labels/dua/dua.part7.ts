// dua/part7.ts
import { HomeLabel } from "../../types";

export const DUA_PART_7 = {
  kidsDailyDuas: {
    malayalam: "കുട്ടികളുടെ ദിവസേന ദുആകൾ",
    manglish: "kids daily duakal",
    english: "Kids Daily Duas",
    arabic: "أدعية الأطفال اليومية",
  },
  kidsLearningDuas: {
    malayalam: "കുട്ടികളുടെ പഠന ദുആകൾ",
    manglish: "kids learning duakal",
    english: "Kids Learning Duas",
    arabic: "أدعية طلب العلم للأطفال",
  },
  breastfeedingDuas: {
    malayalam: "സ്തനപാനം സമയത്തെ ദുആകൾ",
    manglish: "breastfeeding duakal",
    english: "Breastfeeding Duas",
    arabic: "أدعية الرضاعة",
  },
  singleParentDuas: {
    malayalam: "ഒറ്റ രക്ഷിതാവിനുള്ള ദുആകൾ",
    manglish: "single parent duakal",
    english: "Single Parent Duas",
    arabic: "أدعية الوالد المنفرد",
  },
  elderlyParentsDuas: {
    malayalam: "വൃദ്ധ മാതാപിതാക്കൾക്കായുള്ള ദുആകൾ",
    manglish: "elderly parents duakal",
    english: "Elderly Parents Duas",
    arabic: "أدعية الوالدين في الكبر",
  },
  windStormDuas: {
    malayalam: "കാറ്റ് / കൊടുങ്കാറ്റ് സമയത്തെ ദുആകൾ",
    manglish: "wind storm duakal",
    english: "Wind & Storm Duas",
    arabic: "أدعية الرياح والعواصف",
  },
  fearPanicDuas: {
    malayalam: "ഭയവും പാനിക്കുമുള്ള ദുആകൾ",
    manglish: "fear panic duakal",
    english: "Fear & Panic Duas",
    arabic: "أدعية الخوف والقلق",
  },
  examDuas: {
    malayalam: "പരീക്ഷയ്ക്കുള്ള ദുആകൾ",
    manglish: "exam duakal",
    english: "Exam Duas",
    arabic: "أدعية الامتحان",
  },
  oppressionJusticeDuas: {
    malayalam: "അന്യായവും നീതിയും സംബന്ധിച്ച ദുആകൾ",
    manglish: "justice duakal",
    english: "Oppression & Justice Duas",
    arabic: "أدعية الظلم والعدل",
  },
  newbornDuas: {
    malayalam: "പുതുജാത ശിശുവിനുള്ള ദുആകൾ",
    manglish: "newborn duakal",
    english: "Newborn Duas",
    arabic: "أدعية المولود",
  },
} satisfies Record<
  | "kidsDailyDuas"
  | "kidsLearningDuas"
  | "breastfeedingDuas"
  | "singleParentDuas"
  | "elderlyParentsDuas"
  | "windStormDuas"
  | "fearPanicDuas"
  | "examDuas"
  | "oppressionJusticeDuas"
  | "newbornDuas",
  HomeLabel
>;
