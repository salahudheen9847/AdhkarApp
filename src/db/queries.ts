import { db } from "./db";

/* 🔹 NORMAL DHIKR */
export const getDhikrByType = async (type: string) => {
  const database = await db;

  const res = await database.executeSql(
    "SELECT * FROM dhikr WHERE type = ? ORDER BY id ASC",
    [type]
  );

  return res[0].rows.raw();
};

/* 🔹 MANQUS MOULID (FINAL – isBox based) */
export const getManqusMoulid = async () => {
  const database = await db;

  // ❌ text → ✅ arabic
  const res = await database.executeSql(`
    SELECT
      id,
      isBox,
      arabic,
      malayalam,
      english,
      start,
      end
    FROM manqus_moulid
    ORDER BY id ASC
  `);

  const rawRows = res[0].rows.raw();

  // ✅ NORMALIZED DATA FOR UI
  return rawRows.map((r: any) => ({
    id: r.id,
    isBox: r.isBox === 1,   // INTEGER → BOOLEAN

    text: r.arabic ?? "",  // 🔥 DB arabic → UI text
    malayalam: r.malayalam ?? "",
    english: r.english ?? "",

    start: r.start,
    end: r.end,
  }));
};
