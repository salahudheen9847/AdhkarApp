import { db } from "./db";

export const createTables = async () => {
  const database = await db;

  // 🔹 dhikr table
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

  // 🔹 manqus moulid table
  await database.executeSql(`
    CREATE TABLE IF NOT EXISTS manqus_moulid (
      id INTEGER PRIMARY KEY,
      sectionType TEXT,      -- 'text' | 'box'
      text TEXT,
      rightText TEXT,
      leftText TEXT,
      malayalam TEXT,
      english TEXT,
      start REAL,
      end REAL
    );
  `);

  console.log("✅ Tables created");
};
