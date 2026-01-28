import { getDhikrByType } from "../../db/queries";
import type { HomeLabelKey } from "../../data/labels";

/* ✅ Only DHIKR */
type Mode = "dhikr";

export async function resolveRows(
  mode: Mode,
  type?: HomeLabelKey
): Promise<any[]> {
  /* 🟢 DHIKR MODE (AUDIO FLOW) */
  if (mode === "dhikr" && type) {

    /* 1️⃣ Registry first */
 

    /* 2️⃣ DB fallback */
    const dbRows = await getDhikrByType(type);
    if (Array.isArray(dbRows) && dbRows.length > 0) {
      return dbRows;
    }

    /* 3️⃣ Final fallback */
    return [
      {
        id: 1,
        arabic: "⏳",
        malayalam: "ഈ വിഭാഗത്തിനുള്ള ദുആകൾ ഉടൻ ചേർക്കുന്നതാണ്",
        english: "Content for this section will be added soon",
      },
    ];
  }

  /* 🚫 No other modes */
  return [];
}