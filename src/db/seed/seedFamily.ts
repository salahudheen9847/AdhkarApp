import { seedDuaCategory } from "./seedDuaCategory";
import { FAMILY_DUA_CONTENT } from "../../data/family-dua";

export const seedFamily = (tx: any) => {
  FAMILY_DUA_CONTENT.forEach((dua: any) => {
    if (!dua?.id) return;
    seedDuaCategory(tx, dua.id, dua);
  });
};
