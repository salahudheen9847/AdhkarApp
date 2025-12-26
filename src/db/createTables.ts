import { db } from "./db";

export const createTables = async () => {
  const database = await db;

  /* -----------------------------
     📿 DHIKR TABLE
  ------------------------------*/
  await database.executeSql(`
    CREATE TABLE IF NOT EXISTS dhikr (
      id INTEGER,
      type TEXT,
      arabic TEXT,
      malayalam TEXT,
      english TEXT,
      start REAL,
      end REAL,
      PRIMARY KEY (id, type)
    );
  `);

  /* -----------------------------
     📖 MANQUS MOULID TABLE
     (BOX + TEXT support)
  ------------------------------*/
  await database.executeSql(`
    CREATE TABLE IF NOT EXISTS manqus_moulid (
      id INTEGER PRIMARY KEY,
      sectionType TEXT,      -- "text" | "box"
      text TEXT,             -- normal arabic text
      rightText TEXT,        -- box right side
      leftText TEXT,         -- box left side
      malayalam TEXT,
      english TEXT,
      start REAL,
      end REAL
    );
  `);
};
