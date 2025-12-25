import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

import {
  duaMarichavarkCore,
  type DuaMarichavarkCoreItem,
} from "../data/duaMarichavark/core";

import { duaMarichavarkMalayalam } from "../data/duaMarichavark/duaMarichavarkMalayalam";
import { duaMarichavarkEnglish } from "../data/duaMarichavark/duaMarichavarkEnglish";

export const seedDuaMarichavark = async (): Promise<void> => {
  const database: SQLiteDatabase = await db;

  return new Promise((resolve, reject) => {
    database.transaction(
      (tx: Transaction) => {
        duaMarichavarkCore.forEach(
          (arabicItem: DuaMarichavarkCoreItem) => {
            const ml = duaMarichavarkMalayalam.find(
              m => m.id === arabicItem.id
            );

            const en = duaMarichavarkEnglish.find(
              e => e.id === arabicItem.id
            );

            tx.executeSql(
              `
              INSERT OR IGNORE INTO dhikr
              (id, type, arabic, malayalam, english, start, end)
              VALUES (?, ?, ?, ?, ?, ?, ?)
              `,
              [
                arabicItem.id,
                "duaMarichavark",     // 🔑 MUST match HomeScreen id
                arabicItem.text,      // Arabic
                ml?.text ?? "",       // Malayalam
                en?.text ?? "",       // English
                arabicItem.start,     // audio start
                arabicItem.end,       // audio end
              ]
            );
          }
        );
      },
      error => reject(error),
      () => resolve()
    );
  });
};
