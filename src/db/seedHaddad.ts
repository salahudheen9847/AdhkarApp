import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

import { haddadArabic } from "../data/haddad/haddadArabic";
import { haddadMalayalam } from "../data/haddad/haddadMalayalam";
import { haddadEnglish } from "../data/haddad/haddadEnglish";

export const seedHaddad = async (): Promise<void> => {
  const database: SQLiteDatabase = await db;

  return new Promise((resolve, reject) => {
    database.transaction(
      (tx: Transaction) => {
        haddadArabic.forEach(item => {
          const ml = haddadMalayalam.find(m => m.id === item.id);
          const en = haddadEnglish.find(e => e.id === item.id);

          tx.executeSql(
            `
            INSERT OR IGNORE INTO dhikr
            (id, type, arabic, malayalam, english, start, end)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `,
            [
              item.id,
              "haddad",          // 🔑 MUST MATCH HomeScreen id
              item.text,
              ml?.text ?? "",
              en?.text ?? "",
              item.start,
              item.end,
            ]
          );
        });
      },
      error => reject(error),
      () => resolve()
    );
  });
};
