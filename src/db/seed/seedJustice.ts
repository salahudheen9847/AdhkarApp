import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { JUSTICE_DUA_CONTENT } from "../../data/justice-dua";

export const seedJustice = (tx: Transaction) => {
  JUSTICE_DUA_CONTENT.forEach((dua: any) => {
    if (!dua?.id) return;
    seedDuaCategory(tx, dua.id, dua);
  });
};
