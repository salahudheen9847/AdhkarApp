// dua/part1.ts
import { HomeLabel } from "../../types";

export const DUA_PART_1 = {
  duaMarichavark: {
    malayalam: "മരിച്ചവർക്കുള്ള ദുആ",
    manglish: "marichavarkulla dua",
    english: "Dua for the Deceased",
    arabic: "دعاء للميت",
  },
  duaQabar: {
    malayalam: "ഖബറിലെ ദുആ",
    manglish: "kabarile dua",
    english: "Dua in the Grave",
    arabic: "دعاء القبر",
  },
  talqeenMen: {
    malayalam: "പുരുഷന്മാർക്കുള്ള തൽഖീൻ",
    manglish: "purushanmarkkulla thalqeen",
    english: "Talqeen for Men",
    arabic: "تلقين الميت",
  },
  janazahDuas: {
    malayalam: "ജനാസ നമസ്കാര ദുആകൾ",
    manglish: "janazah duakal",
    english: "Janazah Duas",
    arabic: "دعاء صلاة الجنازة",
  },
} satisfies Record<
  "duaMarichavark" |
  "duaQabar" |
  "talqeenMen" |
  "janazahDuas",
  HomeLabel
>;
