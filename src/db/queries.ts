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

/* 🔹 MANQUS MOULID (BOX + TEXT) */
export const getManqusMoulid = async () => {
  const database = await db;

  const res = await database.executeSql(`
    SELECT
      id,
      sectionType,
      text,
      rightText,
      leftText,
      malayalam,
      english,
      start,
      end
    FROM manqus_moulid
    ORDER BY id ASC
  `);

  const rawRows = res[0].rows.raw();

  // ✅ NORMALIZE DATA FOR UI
  return rawRows.map((r: any) => ({
    id: r.id,
    type: r.sectionType,   // ✅ "box" | "text"
    text: r.text,
    rightText: r.rightText,
    leftText: r.leftText,
    malayalam: r.malayalam,
    english: r.english,
    start: r.start,
    end: r.end,
  }));
};
