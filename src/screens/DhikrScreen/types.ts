// src/screens/DhikrScreen/types.ts

import type { HomeLabelKey } from "../../data/labels/types";

/* 🌍 Language mode (Dhikr screen only) */
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

/* 🧭 Header type */
export type HeaderType = HomeLabelKey | undefined;

/* 📿 Single Dhikr / Dua item */
export interface DhikrItem {
  id: number;
  arabic?: string | string[];
  malayalam?: string | string[];
  english?: string | string[];
  isHeading?: boolean;
  isBox?: boolean;
}

/* ✅ UI alias (IMPORTANT) */
export type DuaItem = DhikrItem;

/* 🕌 HeaderSection props */
export type HeaderSectionProps = {
  textColor: string;
  isDark: boolean;
  toggleTheme: () => void;

  isPlaying: boolean;
  setShowPlayer: (val: boolean) => void;

  title: string;

  languageMode: LanguageMode;
  setLanguageMode: React.Dispatch<
    React.SetStateAction<LanguageMode>
  >;

  headerAnimatedStyle: any;
  onFontPress: () => void;
  onBack: () => void;
  playAudio: () => void; // ✅ ADD PLAY AUDIO PROP
};