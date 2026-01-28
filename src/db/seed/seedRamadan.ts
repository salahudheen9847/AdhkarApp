import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { RAMADAN_CONTENT } from "../../data/ramadan";

export const seedRamadan = (tx: Transaction) => {
  RAMADAN_CONTENT.forEach((item: any) => {
    if (!item?.id) return;
    seedDuaCategory(tx, item.id, item);
  });
};
