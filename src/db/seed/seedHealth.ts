import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { HEALTH_DUA_CONTENT } from "../../data/health-dua";

export const seedHealth = (tx: Transaction) => {
  HEALTH_DUA_CONTENT.forEach((dua: any) => {
    if (!dua?.id) return;
    seedDuaCategory(tx, dua.id, dua);
  });
};
