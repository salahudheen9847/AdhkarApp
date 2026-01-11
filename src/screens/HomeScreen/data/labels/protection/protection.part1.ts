// protection/part1.ts
import { HomeLabel } from "../../types";

export const PROTECTION_PART_1 = {
  protectionDuas: {
    malayalam: "സംരക്ഷണ ദുആകൾ",
    manglish: "samrakshana duakal",
    english: "Protection Duas",
    arabic: "أدعية الحفظ",
  },
  nazarBlackMagicProtectionDuas: {
    malayalam: "കണ്ണേറും മന്ത്രവും നിന്ന് സംരക്ഷണം",
    manglish: "nazar black magic duakal",
    english: "Nazar & Black Magic Protection",
    arabic: "أدعية الحسد والسحر",
  },
  protectionFromGossipDuas: {
    malayalam: "നാവിന്റെ പാപങ്ങളിൽ നിന്ന് സംരക്ഷണം",
    manglish: "gossip protection duakal",
    english: "Protection from Gossip",
    arabic: "أدعية الغيبة",
  },
} satisfies Record<
  "protectionDuas" |
  "nazarBlackMagicProtectionDuas" |
  "protectionFromGossipDuas",
  HomeLabel
>;
