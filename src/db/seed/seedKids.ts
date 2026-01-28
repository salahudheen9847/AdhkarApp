import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { KIDS_DUA_CONTENT } from "../../data/kids-dua";

export const seedKids = (tx: Transaction) => {
  KIDS_DUA_CONTENT.forEach((dua: any) => {
    if (!dua?.id) return;
    seedDuaCategory(tx, dua.id, dua);
  });
};
