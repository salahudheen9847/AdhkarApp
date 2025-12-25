import { db } from "./db";

export const getDhikrByType = async (type: string) => {
  const database = await db;

  const res = await database.executeSql(
    "SELECT * FROM dhikr WHERE type = ? ORDER BY id ASC",
    [type]
  );

  return res[0].rows.raw();
};
