import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { MENTAL_DUA_CONTENT } from "../../data/mental-dua";

export const seedMental = (tx: Transaction) => {
  MENTAL_DUA_CONTENT.forEach((dua: any) => {
    if (!dua?.id) return;
    seedDuaCategory(tx, dua.id, dua);
  });
};
