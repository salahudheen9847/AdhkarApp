// dua/part2.ts
import { HomeLabel } from "../../types";

export const DUA_PART_2 = {
  duaForSick: {
    malayalam: "രോഗികൾക്കുള്ള ദുആകൾ",
    manglish: "rogikkulla duakal",
    english: "Duas for the Sick",
    arabic: "أدعية المرضى",
  },
  sicknessDuas: {
    malayalam: "രോഗാവസ്ഥയിൽ ദുആകൾ",
    manglish: "rogavasthayile duakal",
    english: "Sickness Duas",
    arabic: "أدعية المرض",
  },
  hospitalSurgeryDuas: {
    malayalam: "ആശുപത്രി / ശസ്ത്രക്രിയ ദുആകൾ",
    manglish: "hospital surgery duakal",
    english: "Hospital & Surgery Duas",
    arabic: "أدعية العلاج",
  },
  pregnancyDuas: {
    malayalam: "ഗർഭകാല ദുആകൾ",
    manglish: "garbhakaala duakal",
    english: "Pregnancy Duas",
    arabic: "أدعية الحمل",
  },
} satisfies Record<
  "duaForSick" |
  "sicknessDuas" |
  "hospitalSurgeryDuas" |
  "pregnancyDuas",
  HomeLabel
>;
