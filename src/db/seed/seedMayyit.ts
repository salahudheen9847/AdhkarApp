import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { MAYYIT_CONTENT } from "../../data/mayyit-dua";

export const seedMayyit = (tx: Transaction) => {
  MAYYIT_CONTENT.forEach((item: any) => {
    if (!item?.id) return;
    seedDuaCategory(tx, item.id, item);
  });
};
