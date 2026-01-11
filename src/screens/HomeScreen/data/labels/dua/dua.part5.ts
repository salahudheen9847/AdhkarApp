// dua/part5.ts
import { HomeLabel } from "../../types";

export const DUA_PART_5 = {
  debtReliefDuas: {
    malayalam: "കടം തീരാൻ ദുആകൾ",
    manglish: "kadam duakal",
    english: "Debt Relief Duas",
    arabic: "أدعية قضاء الدين",
  },
  workRizqDuas: {
    malayalam: "ഉപജീവനത്തിനുള്ള ദുആകൾ",
    manglish: "rizq duakal",
    english: "Work & Rizq Duas",
    arabic: "أدعية الرزق",
  },
  successMotivationDuas: {
    malayalam: "വിജയത്തിനുള്ള ദുആകൾ",
    manglish: "success duakal",
    english: "Success Duas",
    arabic: "أدعية النجاح",
  },
  forgivenessDuas: {
    malayalam: "ക്ഷമയ്ക്കുള്ള ദുആകൾ",
    manglish: "forgiveness duakal",
    english: "Forgiveness Duas",
    arabic: "أدعية المغفرة",
  },
} satisfies Record<
  "debtReliefDuas" |
  "workRizqDuas" |
  "successMotivationDuas" |
  "forgivenessDuas",
  HomeLabel
>;
