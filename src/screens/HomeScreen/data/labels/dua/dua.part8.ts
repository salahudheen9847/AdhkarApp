// dua/part8.ts
import { HomeLabel } from "../../types";

export const DUA_PART_8 = {
  familyUnityDuas: {
    malayalam: "കുടുംബ ഐക്യത്തിനായുള്ള ദുആകൾ",
    manglish: "family unity duakal",
    english: "Family Unity Duas",
    arabic: "أدعية تماسك الأسرة",
  },
  griefLossDuas: {
    malayalam: "ദുഃഖവും നഷ്ടവും സമയത്തെ ദുആകൾ",
    manglish: "grief loss duakal",
    english: "Grief & Loss Duas",
    arabic: "أدعية الحزن والمصيبة",
  },
  businessLossRecoveryDuas: {
    malayalam: "വ്യാപാര നഷ്ടം മാറാൻ ദുആകൾ",
    manglish: "business loss duakal",
    english: "Business Loss Recovery Duas",
    arabic: "أدعية جبر الخسارة",
  },
  courtCaseDuas: {
    malayalam: "കോടതി / കേസ് ദുആകൾ",
    manglish: "court case duakal",
    english: "Court Case Duas",
    arabic: "أدعية القضاء",
  },
  houseLandDuas: {
    malayalam: "വീട് / ഭൂമി ലഭിക്കാൻ ദുആകൾ",
    manglish: "house land duakal",
    english: "House & Land Duas",
    arabic: "أدعية السكن",
  },
  knowledgeDuas: {
    malayalam: "വിദ്യക്കും അറിവിനും ദുആകൾ",
    manglish: "knowledge duakal",
    english: "Knowledge Duas",
    arabic: "أدعية العلم",
  },
  akhirahDuas: {
    malayalam: "ആഖിറത്തിനായുള്ള ദുആകൾ",
    manglish: "akhirah duakal",
    english: "Akhirah Duas",
    arabic: "أدعية الآخرة",
  },
  husbandWifeDuas: {
    malayalam: "ഭർത്താവും ഭാര്യയും തമ്മിലുള്ള ദുആകൾ",
    manglish: "husband wife duakal",
    english: "Husband & Wife Duas",
    arabic: "أدعية بين الزوجين",
  },

  /* 🔧 ADDED (missing 2) */
  marriageDuas: {
    malayalam: "വിവാഹത്തിനായുള്ള ദുആകൾ",
    manglish: "marriage duakal",
    english: "Marriage Duas",
    arabic: "أدعية الزواج",
  },
  forgivenessDuas: {
    malayalam: "ക്ഷമയ്ക്കായുള്ള ദുആകൾ",
    manglish: "forgiveness duakal",
    english: "Forgiveness Duas",
    arabic: "أدعية المغفرة",
  },
} satisfies Record<
  | "familyUnityDuas"
  | "griefLossDuas"
  | "businessLossRecoveryDuas"
  | "courtCaseDuas"
  | "houseLandDuas"
  | "knowledgeDuas"
  | "akhirahDuas"
  | "husbandWifeDuas"
  | "marriageDuas"
  | "forgivenessDuas",
  HomeLabel
>;
