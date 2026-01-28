import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { SALAH_DUA_CONTENT } from "../../data/salah";
export const seedSalah = (tx: Transaction) => {
  SALAH_DUA_CONTENT.forEach((item: any) => {
    if (!item?.id) return;
    seedDuaCategory(tx, item.id, item);
  });
};