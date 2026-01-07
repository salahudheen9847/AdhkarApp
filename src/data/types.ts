// Shared Data Layer Types

// Base verse interface that all collections should extend
export interface BaseVerse {
  id: number;
  text: string;
  malayalam: string;
  english?: string;
  start: number;
  end: number;
  isHeading?: boolean;
  isBox?: boolean;
}

// Audio item interface for useDhikrAudio hook
export interface AudioItem {
  id: number;
  text: string;
  malayalam: string;
  english?: string;
  start: number;
  end: number;
  isHeading?: boolean;
  isBox?: boolean;
}

// Collection metadata
export interface CollectionMetadata {
  id: string;
  title: string;
  titleArabic?: string;
  audioFile: string;
  totalVerses?: number;
  gradientColors?: string[];
  iconName?: string;
}

// Data collection types
export type DhikrMode = "dhikr" | "manqus" | "bader" | "qaseeda";
export type SalahType = "dua" | "adhkar";
export type MoulidType = "bader" | "manqus" | "qaseeda";
export type SwalathType = "nariyath" | "salawat" | "thaju";

// Legacy types for backward compatibility
export interface DhikrItem {
  id: number;
  isHeading?: boolean;
  isBox?: boolean;
  text: string;
  malayalam: string;
  english: string;
  start: number;
  end: number;
}

export type HomeLabelKey =
  | "morningAdhkar"
  | "eveningAdhkar"
  | "generalAdhkar"
  | "duaAfterSalah"
  | "adhkarAfterSalah2"
  | "baderMoulid"
  | "manqusMoulid"
  | "qaseedathulBurda"
  | "ramadanAdhkar"
  | "nariyathSwalath"
  | "salawatAlFatih"
  | "thajuSwalath"
  | "haddad"
  | "duaMarichavark"
  | "duaQabar"
  | "asmaulHusna";

export type HomeScreenSectionKey =
  | "adhkar"
  | "moulid"
  | "ramadan"
  | "swalath"
  | "asmaul";

export type DhikrType = "morningAdhkar" | "eveningAdhkar" | "generalAdhkar";

export type RamadanType = "ramadanAdhkar";

export type SwalathTypeFull =
  | "nariyathSwalath"
  | "salawatAlFatih"
  | "thajuSwalath";

export type AsmaulType = "asmaulHusna";

export type DuaType = "duaMarichavark" | "duaQabar";

export type Mode = "dhikr" | "manqus" | "bader" | "qaseeda";
