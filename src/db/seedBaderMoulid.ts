import { db } from "./db";
import { baderMoulidData } from "../data/BaderMoulid/baderMoulidData";

/* 🔧 helper to normalize string | string[] */
const normalize = (v?: string | string[]) =>
  Array.isArray(v) ? v.join("\n") : v ?? null;

export const seedBaderMoulid = async () => {
  try {
    const database = await db;

    database.transaction(tx => {
      // ✅ check existing rows
      tx.executeSql(
        "SELECT COUNT(*) as count FROM bader_moulid",
        [],
        (_, result) => {
          const count = result.rows.item(0).count;

          if (count > 0) {
            console.log("ℹ️ Bader Moulid already seeded");
            return;
          }

          // ✅ CORRECT COLUMN NAME: arabic
          const insertQuery = `
            INSERT INTO bader_moulid
            (id, isBox, arabic, malayalam, english, start, end)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `;

          baderMoulidData.forEach(item => {
            tx.executeSql(insertQuery, [
              item.id,
              item.isBox ? 1 : 0,
              normalize(item.text),       // 👉 text → arabic
              normalize(item.malayalam),
              normalize(item.english),
              item.start,
              item.end,
            ]);
          });

          console.log("✅ Bader Moulid seeded successfully");
        }
      );
    });
  } catch (error) {
    console.error("❌ Bader Moulid seed error:", error);
  }
};
