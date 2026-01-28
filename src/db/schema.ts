export const SCHEMA = {
  dhikr: `
    CREATE TABLE IF NOT EXISTS dhikr (
      id INTEGER NOT NULL,
      type TEXT NOT NULL,
      arabic TEXT NOT NULL,
      malayalam TEXT,
      english TEXT,
      start INTEGER,
      end INTEGER,
      PRIMARY KEY (id, type)
    );
  `,
};
