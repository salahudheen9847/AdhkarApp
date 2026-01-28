import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { PROTECTION_DUA_CONTENT } from "../../data/protection-dua";

export const seedProtection = (tx: Transaction) => {
  Object.values(PROTECTION_DUA_CONTENT).forEach((dua: any) => {
    if (!dua?.id) return;
    seedDuaCategory(tx, dua.id, dua);
  });
};