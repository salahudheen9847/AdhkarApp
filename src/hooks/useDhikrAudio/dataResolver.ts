import { getDhikrByType } from "../../db/queries";
import { DAILY_LIFE_DUA_CONTENT } from "../../data/daily-life-dua";
import { MAYYIT_CONTENT } from "../../data/mayyit-dua";
import type { HomeLabelKey } from "../../data/labels";

export async function resolveRows(
  type?: HomeLabelKey
): Promise<any[]> {
  if (!type) return [];

  try {
    // ✅ CHECK TYPESCRIPT CONTENT FIRST
    const tsContent = getTypescriptContent(type);
    if (tsContent) {
      console.log("🔍 Found TypeScript content for:", type, tsContent.id);
      return [...tsContent.content]; // Convert readonly to mutable
    }

    // ✅ FALLBACK TO DATABASE
    const dbRows = await getDhikrByType(type);

    // ✅ DB returns valid rows
    if (Array.isArray(dbRows) && dbRows.length > 0) {
      return dbRows;
    }
  } catch (error) {
    console.error("resolveRows error:", error);
  }

  // ✅ FALLBACK (when no data found)
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

/* 🔍 GET TYPESCRIPT CONTENT */
function getTypescriptContent(type: HomeLabelKey) {
  console.log("🔍 Looking for TypeScript content:", type);
  
  // 🍽️ DAILY LIFE DUAS
  const dailyLifeContent = DAILY_LIFE_DUA_CONTENT.find(
    (item: any) => item.id === type
  );
  if (dailyLifeContent) {
    console.log("🍽️ Found daily life content:", dailyLifeContent.id);
    return dailyLifeContent;
  }

  // 🕌 MAYYIT DUAS  
  const mayyitContent = MAYYIT_CONTENT.find(
    (item: any) => item.id === type
  );
  if (mayyitContent) {
    console.log("🕌 Found mayyit content:", mayyitContent.id);
    return mayyitContent;
  }

  console.log("❌ No TypeScript content found for:", type);
  return null;
}