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
  | "moulid"
  | "courses";

// 🌍 ഇതാണ് വിട്ടുപോയത്
export type AppLanguage = "arabic" | "malayalam" | "english"; 

export type HomeMeta = {
  id: string;
  icon: string;
  title: {
    arabic: string;
    malayalam: string;
    english: string;
  };
  section?: HomeSection;
  isPaid?: boolean;
};

export interface HomeLabel {
  arabic: string;
  malayalam: string;
  english: string;
}

// ... മറ്റുള്ളവ മാറ്റമില്ലാതെ തുടരട്ടെ