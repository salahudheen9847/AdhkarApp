// src/data/types.ts

export type HomeSection =
  | "daily"
  | "dhikr"
  | "family"
  | "health"
  | "justice"
  | "kids"
  | "mental"
  | "protection"
  | "rizq"
  | "salah"
  | "swalath"
  | "qaseeda"
  | "ratib"
  | "ramadan"
  | "mayyit"
  | "moulid";

/* 🏠 Home Meta */
export type HomeMeta = {
  id: string;
  icon: string;
  title: {
    arabic: string;
    malayalam: string;
    english: string;
  };
  section?: HomeSection;
};

/* 📦 Shared title object */
export interface HomeLabel {
  arabic: string;
  malayalam: string;
  english: string;
}

/* 🌍 App language */
export type AppLanguage = "arabic" | "malayalam" | "english";

/* 📿 Dhikr item */
export interface DhikrItem {
  id: number;
  text?: string;
  arabic?: string;
  malayalam?: string;
  english?: string;
  start?: number;
  end?: number;
  isHeading?: boolean;
  isBox?: boolean;
}

/* 📿 Dhikr content */
export interface DhikrContent {
  id: string;
  heading: HomeLabel;
  content?: DhikrItem[];
  isBox?: boolean;
}

/* 📚 Collection meta (simple) */
export interface CollectionMeta {
  id: string;
  icon: string;
  title: HomeLabel;
}

/* 📖 Verse */
export interface BaseVerse {
  id: number;
  arabic: string;
  malayalam: string;
  english: string;
  start?: number;
  end?: number;
}

/* 📦 Collection metadata (detailed) */
export interface CollectionMetadata {
  id: string;
  title: HomeLabel;
  description?: Partial<HomeLabel>;
  category?: string;
}