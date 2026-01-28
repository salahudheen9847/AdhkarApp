import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { RIZQ_DUA_CONTENT } from "../../data/rizq-dua";

export const seedRizq = (tx: Transaction) => {
  RIZQ_DUA_CONTENT.forEach((dua: any) => {
    if (!dua?.id) return;
    seedDuaCategory(tx, dua.id, dua);
  });
};
