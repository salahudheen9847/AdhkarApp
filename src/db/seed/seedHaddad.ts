import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

import { HADDAD_RATIB_CONTENT } 
from "../../data/ratib/haddad-ratib/content";
export const seedHaddad = (tx: Transaction) => {
  // safety check
  if (!HADDAD_RATIB_CONTENT?.id) return;

  seedDuaCategory(
    tx,
    HADDAD_RATIB_CONTENT.id,
    HADDAD_RATIB_CONTENT
  );
};