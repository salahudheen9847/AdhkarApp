import { DuaItem } from "./types";

export function mapRows(
  rows: any[],
  _mode: string,
  _type?: string
): DuaItem[] {
  return rows
    .map((r, index) => ({
      id: r.id ?? index + 1,
      isBox: r.isBox === 1 || r.isBox === true,
      isHeading: r.isHeading === true,
      text:
        r.text ??
        r.arabic ??
        r.arabicText ??
        r.arabic_text ??
        "",
      malayalam: r.malayalam ?? "",
      english: r.english ?? "",
      start: r.start,
      end: r.end,
    }))
    // 🔥 IMPORTANT FIX
    .filter(item => item.isHeading || item.text !== "");
}
