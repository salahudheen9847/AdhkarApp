import type { HomeLabel } from "../labels/types";

import { PROTECTION_DUA_LABEL } from "./label";
import { BAD_DREAM_DUA_LABEL } from "./badDreamDuas/label";
import { NAZAR_BLACK_MAGIC_PROTECTION_DUA_LABEL } from "./nazarBlackMagicProtectionDuas/label";
import { PROTECTION_FROM_GOSSIP_DUA_LABEL } from "./protectionFromGossipDuas/label";
import { WIND_STORM_DUA_LABEL } from "./windStormDuas/label";

export const PROTECTION_HOME_LABELS = {
  ...PROTECTION_DUA_LABEL,
  ...BAD_DREAM_DUA_LABEL,
  ...NAZAR_BLACK_MAGIC_PROTECTION_DUA_LABEL,
  ...PROTECTION_FROM_GOSSIP_DUA_LABEL,
  ...WIND_STORM_DUA_LABEL,
} satisfies Record<string, HomeLabel>;