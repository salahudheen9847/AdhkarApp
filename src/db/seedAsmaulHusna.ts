import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

import {
  asmaulHusnaArabic,
  type AsmaArabicItem,
} from "../data/asmaulHusna/asmaulHusnaArabic";

import { asmaulHusnaMalayalam } from "../data/asmaulHusna/AsmaulHusnaMalayalam";
import { asmaulHusnaEnglish } from "../data/asmaulHusna/AsmaulHusnaEnglish";

export const seedAsmaulHusna = async (): Promise<void> => {
  const database: SQLiteDatabase = await db;

  return new Promise((resolve, reject) => {
    database.transaction(
      (tx: Transaction) => {
        asmaulHusnaArabic.forEach((arabicItem: AsmaArabicItem) => {
          const ml = asmaulHusnaMalayalam.find(
            m => m.id === arabicItem.id
          );
          const en = asmaulHusnaEnglish.find(
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
              "asmaulHusna",
              arabicItem.text,     // Arabic name
              ml?.text ?? "",      // Malayalam
              en?.text ?? "",      // English
              arabicItem.start,    // audio start
              arabicItem.end,      // audio end
            ]
          );
        });
      },
      error => {
        console.log("❌ seedAsmaulHusna error", error);
        reject(error);
      },
      () => {
        console.log("✅ Asmaul Husna seeded");
        resolve();
      }
    );
  });
};
