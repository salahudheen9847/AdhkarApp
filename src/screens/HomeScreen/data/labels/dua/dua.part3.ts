// dua/part3.ts
import { HomeLabel } from "../../types";

export const DUA_PART_3 = {
  travelDuas: {
    malayalam: "യാത്രാ ദുആകൾ",
    manglish: "yathra duakal",
    english: "Travel Duas",
    arabic: "أدعية السفر",
  },
  foodDuas: {
    malayalam: "ഭക്ഷണ ദുആകൾ",
    manglish: "bhakshana duakal",
    english: "Food Duas",
    arabic: "أدعية الطعام",
  },
  homeDuas: {
    malayalam: "വീട്ടിൽ കയറുമ്പോൾ / ഇറങ്ങുമ്പോൾ ദുആകൾ",
    manglish: "veedu duakal",
    english: "Home Duas",
    arabic: "أدعية دخول وخروج البيت",
  },
  clothingDuas: {
    malayalam: "വസ്ത്രം ധരിക്കുമ്പോൾ",
    manglish: "vasthram dharikkumpol",
    english: "Clothing Duas",
    arabic: "أدعية اللباس",
  },
} satisfies Record<
  "travelDuas" |
  "foodDuas" |
  "homeDuas" |
  "clothingDuas",
  HomeLabel
>;
