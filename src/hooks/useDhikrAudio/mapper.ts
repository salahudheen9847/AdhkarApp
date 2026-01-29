import { DuaItem } from "./types";

export function mapRows(rows: any[]): DuaItem[] {
  return rows
    .map((r, index) => ({
      id: r.id ?? index + 1,

      // ✅ MAIN CONTENT (renderDuaItem expects these)
      arabic: r.arabic ?? r.text ?? "",
      malayalam: r.malayalam ?? "",
      english: r.english ?? "",

      // ✅ UI FLAGS
      isBox: r.isBox === 1 || r.isBox === true,
      isHeading: r.isHeading === true,

      // ✅ AUDIO TIMING
      start: r.start,
      end: r.end,
    }))
    // ✅ filter based on arabic (NOT text)
    .filter(item => item.isHeading || item.arabic !== "");
}