// src/data/types.ts

export type HomeMeta = {
  id: string;
  icon: string;
  title: {
    arabic: string;
    malayalam: string;
    english: string;
  };
  section?: // 👈 OPTIONAL
    | "daily"
    | "dhikr"
    | "family"
    | "health"
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
};