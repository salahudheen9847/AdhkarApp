import {
  getDhikrByType,
  getManqusMoulid,
  getBaderMoulid,
} from "../../db/queries";

// dhikrRegistry.ts SAME folder-ൽ ആണെന്ന് assume ചെയ്യുന്നു
import { DHIKR_REGISTRY } from "./dhikrRegistry";

export async function resolveRows(
  mode: "dhikr" | "manqus" | "bader" | "qaseeda",
  type?: string
): Promise<any[]> {
  /* 🟢 DHIKR MODE */
  if (mode === "dhikr" && type) {
    // 1️⃣ Registry first (74 data here)
    const registryData = DHIKR_REGISTRY[type];
    if (Array.isArray(registryData) && registryData.length) {
      return registryData;
    }

    // 2️⃣ DB fallback
    const dbRows = await getDhikrByType(type);
    if (Array.isArray(dbRows) && dbRows.length) {
      return dbRows;
    }

    // 3️⃣ Final fallback
    return [
      {
        id: 1,
        text: "📭 ഈ വിഭാഗത്തിനുള്ള ദുആകൾ ഉടൻ ചേർക്കുന്നതാണ്",
        malayalam: "",
        english: "",
      },
    ];
  }

  /* 🟣 OTHER MODES */
  if (mode === "manqus") {
    return await getManqusMoulid();
  }

  if (mode === "bader") {
    return await getBaderMoulid();
  }

  if (mode === "qaseeda") {
    return DHIKR_REGISTRY.qaseedathulBurda ?? [];
  }

  return [];
}
