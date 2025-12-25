import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

import { duaQabarArabic } from "../data/duaQabar/duaQabarArabic";
import { duaQabarMalayalam } from "../data/duaQabar/duaQabarMalayalam";
import { duaQabarEnglish } from "../data/duaQabar/duaQabarEnglish";

export const seedDuaQabar = async (): Promise<void> => {
  const database: SQLiteDatabase = await db;

  return new Promise((resolve, reject) => {
    database.transaction(
      (tx: Transaction) => {
        duaQabarArabic.forEach(item => {
          const ml = duaQabarMalayalam.find(m => m.id === item.id);
          const en = duaQabarEnglish.find(e => e.id === item.id);

          tx.executeSql(
            `
            INSERT OR IGNORE INTO dhikr
            (id, type, arabic, malayalam, english, start, end)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `,
            [
              item.id,
              "duaQabar",          // 👈 VERY IMPORTANT
              item.text,           // Arabic
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
