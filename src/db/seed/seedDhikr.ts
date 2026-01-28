import type { Transaction } from "react-native-sqlite-storage";

/* ============================
   DHIKR CONTENT ONLY
============================ */

// ✅ ONLY DHIKR (Asmaul Husna + Daily Adhkar)
import { DHIKR_CONTENT } from "../../data/dhikr";

/* ============================
   HELPERS
============================ */

const normalize = (v?: string | string[]) =>
  Array.isArray(v) ? v.join("\n") : v ?? "";

const getArabic = (i: any) => normalize(i.arabic ?? i.text);
const getMalayalam = (i: any) => normalize(i.malayalam);
const getEnglish = (i: any) => normalize(i.english);

/* ============================
   INSERT
============================ */

const insertDhikr = (
  tx: Transaction,
  type: string,
  item: any,
  index: number
) => {
  if (!item?.id) return;

  tx.executeSql(
    `
    INSERT OR IGNORE INTO dhikr
    (id, type, arabic, malayalam, english, start, end)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      item.id,
      type,
      getArabic(item),
      getMalayalam(item),
      getEnglish(item),
      item.start ?? index * 5,
      item.end ?? (index + 1) * 5,
    ]
  );
};

/* ============================
   SEED CATEGORY (CORE)
============================ */

const seedCategory = (tx: Transaction, type: string, data: any) => {
  const list = Array.isArray(data)
    ? data
    : Array.isArray(data?.content)
    ? data.content
    : [];

  list.forEach((item: any, index: number) => {
    if (!item || item.isHeading) return;
    insertDhikr(tx, type, item, index);
  });
};

/* ============================
   MAIN SEED
============================ */

export const seedDhikr = (tx: Transaction) => {
  /* 🌙 ALL DHIKR ONLY */
  DHIKR_CONTENT.forEach((dhikr: any) => {
    if (!dhikr?.id) return;
    seedCategory(tx, dhikr.id, dhikr);
  });
};