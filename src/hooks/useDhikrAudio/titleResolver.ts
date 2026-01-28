import type { HomeLabelKey } from "../../data/labels";

export type TitleAudio = {
  audio: string;
  title: string;
};

/* ✅ Only DHIKR mode */
type Mode = "dhikr";

/* 🔹 DHIKR TITLE + AUDIO MAP */
const DHIKR_TITLE_AUDIO: Partial<Record<HomeLabelKey, TitleAudio>> = {
  // example:
  // morningAdhkar: { audio: "morning.mp3", title: "🌅 Morning Adhkar" },
};

export function resolveTitleAndAudio(
  mode: Mode,
  type?: HomeLabelKey
): TitleAudio {
  if (mode === "dhikr" && type) {
    return DHIKR_TITLE_AUDIO[type] ?? { audio: "", title: "" };
  }

  return { audio: "", title: "" };
}