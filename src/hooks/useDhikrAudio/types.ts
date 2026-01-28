import type { HomeLabelKey } from "../../data/labels";

/* 🔊 Dhikr Audio Hook Params */
export type UseDhikrAudioParams = {
  mode: "dhikr";        // ✅ only dhikr
  type?: HomeLabelKey;
};

/* 📿 Dhikr / Dua Item */
export type DuaItem = {
  id: number;
  arabic?: string;
  malayalam?: string;
  english?: string;
  start?: number;
  end?: number;
};