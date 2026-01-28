import type { SQLiteDatabase } from "react-native-sqlite-storage";
import { db } from "./db";
import { SCHEMA } from "./schema";

export const createTables = async () => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      tx => {
        // create dhikr table
        tx.executeSql(SCHEMA.dhikr);
      },
      error => {
        reject(error);
      },
      () => {
        resolve();
      }
    );
  });
};
