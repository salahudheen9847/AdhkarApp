import { db } from "./db";
import type { SQLiteDatabase } from "react-native-sqlite-storage";

/* ============================
   TYPES
============================ */

export type DhikrRow = {
  id: number;
  type: string;
  arabic: string;
  malayalam: string;
  english: string;
  start: number | null;
  end: number | null;
};

/* ============================
   GET DB INSTANCE
============================ */
const getDatabase = async (): Promise<SQLiteDatabase> => {
  return await db;
};

/* ============================
   GET ALL UNIQUE CATEGORIES
   (HomeScreen)
============================ */
export const getDhikrCategories = async (): Promise<string[]> => {
  const database = await getDatabase();

  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `SELECT DISTINCT type FROM dhikr ORDER BY type ASC`,
        [],
        (_, result) => {
          const types: string[] = [];
          for (let i = 0; i < result.rows.length; i++) {
            types.push(result.rows.item(i).type);
          }
          resolve(types);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

/* ============================
   GET DHIKR BY TYPE
   (Detail Screen)
============================ */
export const getDhikrByType = async (
  type: string
): Promise<DhikrRow[]> => {
  const database = await getDatabase();

  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `
        SELECT id, type, arabic, malayalam, english, start, end
        FROM dhikr
        WHERE type = ?
        ORDER BY id ASC
        `,
        [type],
        (_, result) => {
          const rows: DhikrRow[] = [];
          for (let i = 0; i < result.rows.length; i++) {
            rows.push(result.rows.item(i));
          }
          resolve(rows);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

/* ============================
   GET SINGLE DHIKR ITEM
   (Audio / timing use)
============================ */
export const getDhikrById = async (
  id: number
): Promise<DhikrRow | null> => {
  const database = await getDatabase();

  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `
        SELECT id, type, arabic, malayalam, english, start, end
        FROM dhikr
        WHERE id = ?
        LIMIT 1
        `,
        [id],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

/* ============================
   DELETE ALL DHIKR
   (DEV / RESET only)
============================ */
export const clearDhikrTable = async (): Promise<void> => {
  const database = await getDatabase();

  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `DELETE FROM dhikr`,
        [],
        () => resolve(),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};
