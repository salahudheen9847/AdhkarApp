// swalath/part2.ts
import { HomeLabel } from "../../types";

export const SWALATH_PART_2 = {
  salawatulIbrahimiyya: {
    malayalam: "സ്വലാത്തുൽ ഇബ്രാഹീമിയ്യ",
    manglish: "ibrahimi swalath",
    english: "Salawatul Ibrahimiyya",
    arabic: "الصلاة الإبراهيمية",
  },
  duaUlQunoot: {
    malayalam: "ദുആ-ഉൽ ഖുനൂത്",
    manglish: "dua ul qunoot",
    english: "Dua-ul-Qunoot",
    arabic: "دعاء القنوت",
  },
  salamBaithFull: {
    malayalam: "സലാം ബൈത്ത്",
    manglish: "salam baith",
    english: "Salam Baith",
    arabic: "السلام عليك",
  },
  ashraqaBaithFull: {
    malayalam: "അശ്റഖ ബൈത്ത്",
    manglish: "ashraqa baith",
    english: "Ashraqa Baith",
    arabic: "أشرق البدر",
  },
} satisfies Record<
  "salawatulIbrahimiyya" |
  "duaUlQunoot" |
  "salamBaithFull" |
  "ashraqaBaithFull",
  HomeLabel
>;
