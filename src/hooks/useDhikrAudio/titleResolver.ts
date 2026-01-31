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

// 🍽️ FOOD DUAS - Add dynamically
const FOOD_AUDIO: TitleAudio = {
  audio: "food_duas.mp3",
  title: "ഭക്ഷണ ദുആകൾ"
};

// 🏠 HOME DUAS - Add dynamically
const HOME_AUDIO: TitleAudio = {
  audio: "homeduas.mp3",
  title: "വീട്ടിലെ ദുആകൾ"
};

// 🛌 SLEEP DUAS - Add dynamically
const SLEEP_AUDIO: TitleAudio = {
  audio: "sleep_duas.mp3",
  title: "ഉറക്ക ദുആകൾ"
};

// 🛁 TOILET DUAS - Add dynamically
const TOILET_AUDIO: TitleAudio = {
  audio: "toilet_duas.mp3",
  title: "ശൗചാലയ ദുആകൾ"
};

export function resolveTitleAndAudio(
  type?: HomeLabelKey
): TitleAudio {
  if (!type) return { audio: "", title: "" };
  
  // 👕 CLOTHING DUAS - Special case (string comparison)
  if (type === "clothingDuas" as any) {
    return CLOTHING_AUDIO;
  }
  
  // 🍽️ FOOD DUAS - Special case (string comparison)
  if (type === "foodDuas" as any) {
    return FOOD_AUDIO;
  }
  
  // 🏠 HOME DUAS - Special case (string comparison)
  if (type === "homeDuas" as any) {
    return HOME_AUDIO;
  }
  
  // 🛌 SLEEP DUAS - Special case (string comparison)
  if (type === "sleepDuas" as any) {
    return SLEEP_AUDIO;
  }
  
  // 🛁 TOILET DUAS - Special case (string comparison)
  if (type === "toiletDuas" as any) {
    return TOILET_AUDIO;
  }
  
  return TITLE_AUDIO_MAP[type] ?? { audio: "", title: "" };
}