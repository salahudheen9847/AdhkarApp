import type { Transaction } from "react-native-sqlite-storage";

export type DbDhikrItem = {
  id: number;
  arabic: string;
  malayalam?: string;
  english?: string;
  start?: number;
  end?: number;
};

export const insertDhikr = (
  tx: Transaction,
  type: string,
  item: DbDhikrItem
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
      item.arabic,
      item.malayalam ?? "",
      item.english ?? "",
      item.start ?? null,
      item.end ?? null,
    ]
  );
};
