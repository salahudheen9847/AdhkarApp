// swalath/part1.ts
import { HomeLabel } from "../../types";

export const SWALATH_PART_1 = {
  nariyathSwalath: {
    malayalam: "നാരിയത് സ്വലാത്ത്",
    manglish: "nariyath swalath",
    english: "Nariyath Swalath",
    arabic: "صلاة النية",
  },
  thajuSwalath: {
    malayalam: "താജുസ്സ്വലാത്ത്",
    manglish: "tajus swalath",
    english: "Tajus Swalath",
    arabic: "صلاة التاج",
  },
  salawatAlFatih: {
    malayalam: "സ്വലാത്ത് അൽ ഫാത്തിഹ്",
    manglish: "salawat al fatih",
    english: "Salawat al-Fatih",
    arabic: "صلوات الفاتح",
  },
} satisfies Record<
  "nariyathSwalath" |
  "thajuSwalath" |
  "salawatAlFatih",
  HomeLabel
>;
