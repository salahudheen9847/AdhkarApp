import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { MOULID_CONTENT } from "../../data/moulid";

export const seedMoulid = (tx: Transaction) => {
  MOULID_CONTENT.forEach((moulid: any) => {
    if (!moulid?.id) return;
    seedDuaCategory(tx, moulid.id, moulid);
  });
};
