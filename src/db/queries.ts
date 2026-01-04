import { db } from "./db";

/* =====================================================
   🔹 NORMAL DHIKR
===================================================== */
export const getDhikrByType = async (type: string) => {
  const database = await db;

  const res = await database.executeSql(
    "SELECT * FROM dhikr WHERE type = ? ORDER BY id ASC",
    [type]
  );

  return res[0].rows.raw();
};

/* =====================================================
   🔹 MANQUS MOULID
===================================================== */
export const getManqusMoulid = async () => {
  const database = await db;

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

  return rawRows.map((r: any) => ({
    id: r.id,
    isBox: r.isBox === 1,
    text: r.arabic ?? "",
    malayalam: r.malayalam ?? "",
    english: r.english ?? "",
    start: r.start,
    end: r.end,
  }));
};

/* =====================================================
   🔹 BADER MOULID
===================================================== */
export const getBaderMoulid = async () => {
  const database = await db;

  const res = await database.executeSql(`
    SELECT
      id,
      isBox,
      arabic,
      malayalam,
      english,
      start,
      end
    FROM bader_moulid
    ORDER BY id ASC
  `);

  const rawRows = res[0].rows.raw();

  return rawRows.map((r: any) => ({
    id: r.id,
    isBox: r.isBox === 1,
    text: r.arabic ?? "",
    malayalam: r.malayalam ?? "",
    english: r.english ?? "",
    start: r.start,
    end: r.end,
  }));
};
