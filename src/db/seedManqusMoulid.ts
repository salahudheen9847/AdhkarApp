import { db } from "./db";
import type { SQLiteDatabase, Transaction } from "react-native-sqlite-storage";
import { ManqusmoulidArabic } from "../data/ManqusMoulid/ManqusmoulidArabic";
import { ManqusmoulidMalayalam } from "../data/ManqusMoulid/ManqusmoulidMalayalam";
import { ManqusmoulidEnglish } from "../data/ManqusMoulid/ManqusmoulidEnglish";

export const seedManqusMoulid = async () => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      (tx: Transaction) => {
        ManqusmoulidArabic.forEach(ar => {
          const ml = ManqusmoulidMalayalam.find(m => m.id === ar.id);
          const en = ManqusmoulidEnglish.find(e => e.id === ar.id);

          tx.executeSql(
            `
            INSERT OR IGNORE INTO manqus_moulid
            (
              id,
              sectionType,
              text,
              rightText,
              leftText,
              malayalam,
              english,
              start,
              end
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
              ar.id,
              ar.type,

              // 🕌 normal Arabic text
              ar.type === "text" ? ar.text : null,

              // 📦 BOX → right / left (THIS WAS THE ISSUE)
              ar.type === "box" ? ar.right : null,
              ar.type === "box" ? ar.left : null,

              // 🌙 Malayalam
              ml?.text ?? "",

              // 🌍 English
              en?.text ?? "",

              ar.start,
              ar.end,
            ]
          );
        });
      },
      error => reject(error),
      () => resolve()
    );
  });
};
