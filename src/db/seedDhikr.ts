import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

import { DhikrItem } from "../data/types";

import { asmaulHusnaData } from "../data/asmaulHusna/asmaulHusnaData";
import { duaMarichavarkData } from "../data/duaMarichavark/duaMarichavarkData";
import { duaQabarData } from "../data/duaQabar/duaQabarData";
import { haddadData } from "../data/haddad/haddadData";
import { nariyathSwalath } from "../data/swalath/nariyathSwalath"; // ✅ ADD

/* 🔧 helper */
const normalize = (v?: string | string[]) =>
  Array.isArray(v) ? v.join("\n") : v ?? "";

const insertDhikr = (
  tx: Transaction,
  type: string,
  item: DhikrItem
) => {
  tx.executeSql(
    `
    INSERT OR IGNORE INTO dhikr
    (id, type, arabic, malayalam, english, start, end)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      item.id,
      type,
      normalize(item.text),
      normalize(item.malayalam),
      normalize(item.english),
      item.start ?? null,
      item.end ?? null,
    ]
  );
};

export const seedDhikr = async () => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      tx => {
        asmaulHusnaData.forEach(i =>
          insertDhikr(tx, "asmaulHusna", i)
        );

        duaMarichavarkData.forEach(i =>
          insertDhikr(tx, "duaMarichavark", i)
        );

        duaQabarData.forEach(i =>
          insertDhikr(tx, "duaQabar", i)
        );

        haddadData.forEach(i =>
          insertDhikr(tx, "haddad", i)
        );

        // 🌸 NARIYATH SWALATH — THIS WAS MISSING
        nariyathSwalath.forEach(i =>
          insertDhikr(tx, "nariyathSwalath", i)
        );
      },
      err => reject(err),
      () => {
        console.log("✅ All dhikr seeded (including Nariyath Swalath)");
        resolve();
      }
    );
  });
};
