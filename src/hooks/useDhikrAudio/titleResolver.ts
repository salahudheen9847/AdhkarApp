import type { HomeLabelKey } from "../../data/labels";

export type TitleAudio = {
  audio: string;
  title: string;
};

const TITLE_AUDIO_MAP: Partial<
  Record<HomeLabelKey, TitleAudio>
> = {
  // example:
  // morningAdhkar: { audio: "morning.mp3", title: "🌅 Morning Adhkar" },
  
  // 🧪 TESTING - using existing working key
  protectionDuas: { 
    audio: "clothing_duas_full.mp3", 
    title: "Clothing Duas" 
  },
  
  // 🕌 MARICHAVERK DUA - Funeral dua
  duaMarichavark: {
    audio: "dua_marichavark.mp3",
    title: "മരിച്ചവർക്ക് വേണ്ടിയുള്ള ദുആ"
  },
};

// 👕 CLOTHING DUAS - Add dynamically
const CLOTHING_AUDIO: TitleAudio = {
  audio: "clothing_duas_full.mp3", 
  title: "Clothing Duas"
};

export function resolveTitleAndAudio(
  type?: HomeLabelKey
): TitleAudio {
  if (!type) return { audio: "", title: "" };
  
  // 👕 CLOTHING DUAS - Special case (string comparison)
  if (type === "clothingDuas" as any) {
    return CLOTHING_AUDIO;
  }
  
  return TITLE_AUDIO_MAP[type] ?? { audio: "", title: "" };
}