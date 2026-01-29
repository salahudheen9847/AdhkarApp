import { getDhikrByType } from "../../db/queries";
import type { HomeLabelKey } from "../../data/labels";

export async function resolveRows(
  type?: HomeLabelKey
): Promise<any[]> {
  if (!type) return [];

  try {
    const dbRows = await getDhikrByType(type);

    // ✅ DB returns valid rows
    if (Array.isArray(dbRows) && dbRows.length > 0) {
      return dbRows;
    }
  } catch (error) {
    console.error("resolveRows error:", error);
  }

  // ✅ Fallback (when no DB data)
  return [
    {
      id: 1,
      arabic: "⏳",
      malayalam: "ഈ വിഭാഗത്തിനുള്ള ദുആകൾ ഉടൻ ചേർക്കുന്നതാണ്",
      english: "Content for this section will be added soon",
      isBox: true,
    },
  ];
}