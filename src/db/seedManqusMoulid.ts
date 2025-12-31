import { db } from "./db";
import { ManqusMoulidData } from "../data/ManqusMoulid/manqusMoulid.data";

/* 🔧 helper to normalize string | string[] */
const normalize = (v?: string | string[]) =>
  Array.isArray(v) ? v.join("\n") : v ?? null;

export const seedManqusMoulid = async () => {
  try {
    const database = await db;

    database.transaction(tx => {
      // ✅ check existing rows
      tx.executeSql(
        "SELECT COUNT(*) as count FROM manqus_moulid",
        [],
        (_, result) => {
          const count = result.rows.item(0).count;

          if (count > 0) {
            console.log("ℹ️ Manqus Moulid already seeded");
            return;
          }

          // ✅ CORRECT COLUMN NAME: arabic (NOT text)
          const insertQuery = `
            INSERT INTO manqus_moulid
            (id, isBox, arabic, malayalam, english, start, end)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `;

          ManqusMoulidData.forEach(item => {
            tx.executeSql(insertQuery, [
              item.id,
              item.isBox ? 1 : 0,
              normalize(item.text),        // 👉 text → arabic
              normalize(item.malayalam),
              normalize(item.english),
              item.start,
              item.end,
            ]);
          });

          console.log("✅ Manqus Moulid seeded");
        }
      );
    });
  } catch (error) {
    console.error("❌ Manqus seed error:", error);
  }
};
