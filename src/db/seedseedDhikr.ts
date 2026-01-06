import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

import { DhikrItem } from "../data/types";
import { nariyathSwalath } from "../data/swalath/nariyathSwalath";


import { asmaulHusnaData } from "../data/asmaulHusna/asmaulHusnaData";
import { duaMarichavarkData } from "../data/duaMarichavark/duaMarichavarkData";

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
      Array.isArray(item.text)
        ? item.text.join("\n")
        : item.text,
      Array.isArray(item.malayalam)
        ? item.malayalam.join("\n")
        : item.malayalam ?? "",
      Array.isArray(item.english)
        ? item.english.join("\n")
        : item.english ?? "",
item.start ?? null,
item.end ?? null,

    ]
  );
};

export const seedAsmaulHusna = async () => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      tx => {
        asmaulHusnaData.forEach(item =>
          insertDhikr(tx, "asmaulHusna", item)
        );
      },
      err => reject(err),
      () => resolve()
    );
  });
};

export const seedDuaMarichavark = async () => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      tx => {
        duaMarichavarkData.forEach(item =>
          insertDhikr(tx, "duaMarichavark", item)
        );
      },
      err => reject(err),
      () => resolve()
    );
  });
};
export const seedNariyathSwalath = async () => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      tx => {
        nariyathSwalath.forEach(item =>
          insertDhikr(tx, "nariyathSwalath", item)
        );
      },
      err => reject(err),
      () => resolve()
    );
  });
};
