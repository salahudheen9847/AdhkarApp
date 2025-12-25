import { db } from "./db";

export const createTables = async () => {
  const database = await db;

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

  console.log("✅ Tables created");
};
