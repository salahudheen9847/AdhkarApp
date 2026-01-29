import type { HomeLabelKey } from "../../data/labels";

/* 🔊 Generic Dua Audio Hook Params */
export type UseDuaAudioParams = {
  type?: HomeLabelKey;
};

/* 📿 Dua Item */
export type DuaItem = {
  id: number;
  arabic?: string;
  malayalam?: string;
  english?: string;
  start?: number;
  end?: number;
};