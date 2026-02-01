import { HomeLabel } from "../../types";

export const GENERAL_PROTECTION_DUA_LABEL = {
  protectionDuas: {
    malayalam: "സംരക്ഷണ ദുആകൾ",
    english: "Protection Duas",
    arabic: "أدعية الحماية",
  },
  protectionCategory: {
    malayalam: "സംരക്ഷണ ദുആകൾ",
    english: "Protection Duas", 
    arabic: "أدعية الحماية",
  },
} satisfies Record<"protectionDuas" | "protectionCategory", HomeLabel>;