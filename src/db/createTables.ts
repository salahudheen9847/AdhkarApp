// src/db/createTables.ts
import { db } from "./db";

export const createTables = async () => {
  const database = await db;

  /* ⚠️ DEV ONLY — DROP TABLES */
  await database.executeSql(`DROP TABLE IF EXISTS manqus_moulid;`);
  await database.executeSql(`DROP TABLE IF EXISTS bader_moulid;`);
  await database.executeSql(`DROP TABLE IF EXISTS dhikr;`);

  /* =====================================================
     📿 DHIKR (ALL NORMAL DHIKR, ASMAUL HUSNA, DUA)
  ===================================================== */
  await database.executeSql(`
    CREATE TABLE dhikr (
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

  /* =====================================================
     📖 MANQUS MOULID (HAS BOX ITEMS)
  ===================================================== */
  await database.executeSql(`
    CREATE TABLE manqus_moulid (
      id INTEGER PRIMARY KEY,
      isBox INTEGER,
      arabic TEXT,
      malayalam TEXT,
      english TEXT,
      start REAL,
      end REAL
    );
  `);

  /* =====================================================
     🌙 BADER MOULID (AHL-E-BADR DUA)
  ===================================================== */
  await database.executeSql(`
    CREATE TABLE bader_moulid (
      id INTEGER PRIMARY KEY,
      isBox INTEGER,
      arabic TEXT,
      malayalam TEXT,
      english TEXT,
      start REAL,
      end REAL
    );
  `);

  console.log("✅ Tables created (dhikr + manqus + bader)");
};
