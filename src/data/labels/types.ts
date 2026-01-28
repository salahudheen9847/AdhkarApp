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

export interface DhikrContent {
  id: string;
  heading: {
    arabic: string;
    malayalam: string;
    english: string;
  };
  content?: DhikrItem[];
  isBox?: boolean;
}

export interface HomeLabel {
  arabic: string;
  malayalam: string;
  english: string;
}

export type AppLanguage = "arabic" | "malayalam" | "english";

export interface CollectionMeta {
  id: string;
  icon: string;
  title: {
    arabic: string;
    malayalam: string;
    english: string;
  };
}

export interface BaseVerse {
  id: number;
  arabic: string;
  malayalam: string;
  english: string;
  start?: number;
  end?: number;
}

export interface CollectionMetadata {
  id: string;
  title: {
    arabic: string;
    malayalam: string;
    english: string;
  };
  description?: {
    arabic?: string;
    malayalam?: string;
    english?: string;
  };
  category?: string;
}
