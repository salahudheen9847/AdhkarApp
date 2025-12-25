import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

/* =====================================================
   🕌 ASMAUL HUSNA
===================================================== */

// Arabic (with timing)
import {
  asmaulHusnaArabic,
  type AsmaArabicItem,
} from "../data/asmaulHusna/asmaulHusnaArabic";

// Translations
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
              arabicItem.text,
              ml?.text ?? "",
              en?.text ?? "",
              arabicItem.start,
              arabicItem.end,
            ]
          );
        });
      },
      error => reject(error),
      () => resolve()
    );
  });
};

/* =====================================================
   📿 DUA MARICHAVARK
===================================================== */

// Arabic (with timing)
import {
  duaMarichavarkArabic,
  type AdhkarItem,
} from "../data/duaMarichavark/duaMarichavarkArabic";

// Translations
import { duaMarichavarkMalayalam } from "../data/duaMarichavark/duaMarichavarkMalayalam";
import { duaMarichavarkEnglish } from "../data/duaMarichavark/duaMarichavarkEnglish";

export const seedDuaMarichavark = async (): Promise<void> => {
  const database: SQLiteDatabase = await db;

  return new Promise((resolve, reject) => {
    database.transaction(
      (tx: Transaction) => {
        duaMarichavarkArabic.forEach((arabicItem: AdhkarItem) => {
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
              "duaMarichavark",
              arabicItem.text,
              ml?.text ?? "",
              en?.text ?? "",
              arabicItem.start,
              arabicItem.end,
            ]
          );
        });
      },
      error => reject(error),
      () => resolve()
    );
  });
};
