import type { Transaction } from "react-native-sqlite-storage";

import { seedDuaCategory } from "./seedDuaCategory";

// 👉 Swalath data (index)
import { SWALATH_DUA_CONTENT } from "../../data/swalath";

/* ============================
   SEED : SWALATH
============================ */
export const seedSwalath = (tx: Transaction) => {
  SWALATH_DUA_CONTENT.forEach((item: any) => {
    if (!item?.id) return;

    seedDuaCategory(tx, item.id, item);
  });
};