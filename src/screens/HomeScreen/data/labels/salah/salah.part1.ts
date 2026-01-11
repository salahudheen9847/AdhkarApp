// salah/part1.ts
import { HomeLabel } from "../../types";

export const SALAH_PART_1 = {
  adhkarAfterSalah: {
    malayalam: "നിസ്കാര ശേഷം ദിക്‌ർ",
    manglish: "after salah dhikr",
    english: "Adhkar After Salah",
    arabic: "أذكار بعد الصلاة",
  },
  adhkarAfterSalah2: {
    malayalam: "പ്രാർത്ഥനകൾ",
    manglish: "supplications",
    english: "Supplications",
    arabic: "أذكار",
  },
  atTahiyyat: {
    malayalam: "അത്തഹിയ്യാത്ത്",
    manglish: "at tahiyyat",
    english: "At-Tahiyyat",
    arabic: "التحيات",
  },
  adhanIqamahDuas: {
    malayalam: "അദാൻ & ഇഖാമ ദുആകൾ",
    manglish: "adhan iqamah duakal",
    english: "Adhan & Iqamah Duas",
    arabic: "أدعية الأذان",
  },
} satisfies Record<
  "adhkarAfterSalah" |
  "adhkarAfterSalah2" |
  "atTahiyyat" |
  "adhanIqamahDuas",
  HomeLabel
>;
