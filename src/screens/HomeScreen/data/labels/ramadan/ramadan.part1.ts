// ramadan/part1.ts
import { HomeLabel } from "../../types";

export const RAMADAN_PART_1 = {
  ramadanAdhkar: {
    malayalam: "റമദാൻ അദ്കാർ",
    manglish: "ramadan adhkar",
    english: "Ramadan Adhkar",
    arabic: "أذكار رمضان",
  },
  morningAdhkarComplete: {
    malayalam: "പ്രഭാത ദിക്റുകൾ",
    manglish: "morning adhkar",
    english: "Morning Adhkar",
    arabic: "أذكار الصباح",
  },
  eveningAdhkarComplete: {
    malayalam: "സന്ധ്യ ദിക്റുകൾ",
    manglish: "evening adhkar",
    english: "Evening Adhkar",
    arabic: "أذكار المساء",
  },
  beforeSleepAdhkar: {
    malayalam: "ഉറങ്ങുന്നതിന് മുമ്പുള്ള ദിക്റുകൾ",
    manglish: "before sleep adhkar",
    english: "Before Sleep Adhkar",
    arabic: "أذكار النوم",
  },
  wakeUpAdhkar: {
    malayalam: "ഉണരുമ്പോഴുള്ള ദിക്റുകൾ",
    manglish: "wake up adhkar",
    english: "Wake-up Adhkar",
    arabic: "أذكار الاستيقاظ",
  },
} satisfies Record<
  "ramadanAdhkar" |
  "morningAdhkarComplete" |
  "eveningAdhkarComplete" |
  "beforeSleepAdhkar" |
  "wakeUpAdhkar",
  HomeLabel
>;
