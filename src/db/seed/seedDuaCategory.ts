import type { Transaction } from "react-native-sqlite-storage";
import { insertDhikr } from "./insert";
import { getArabic, getMalayalam, getEnglish } from "./helpers";

export const seedDuaCategory = (
  tx: Transaction,
  type: string,
  data: any
) => {
  if (!data) return;

  const list = Array.isArray(data)
    ? data
    : Array.isArray(data.content)
    ? data.content
    : [];

  if (!list.length) return;

  list.forEach((i: any, index: number) => {
    if (i.isHeading || !i.id) return;

    insertDhikr(tx, type, {
      id: i.id,
      arabic: getArabic(i),
      malayalam: getMalayalam(i),
      english: getEnglish(i),
      start: i.start ?? index * 5,
      end: i.end ?? (index + 1) * 5,
    });
  });
};
