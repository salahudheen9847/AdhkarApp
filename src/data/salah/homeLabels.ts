import type { HomeLabel } from "../types";
import { SALAH_DUA_LABEL } from "./label";

import { ADHAN_IQAMAH_DUA_LABEL } from "./adhan-iqamah-duas/label";
import { ADHKAR_AFTER_SALAH_LABEL } from "./adhkar-after-salah/label";
import { AT_TAHIYYAT_LABEL } from "./at-tahiyyat/label";
import { DUA_AFTER_SALAH_LABEL } from "./dua-after-salah/label";
import { DUA_UL_QUNOOT_LABEL } from "./dua-ul-qunoot/label";

export const SALAH_HOME_LABELS = {
  ...SALAH_DUA_LABEL,
  ...ADHAN_IQAMAH_DUA_LABEL,
  ...ADHKAR_AFTER_SALAH_LABEL,
  ...AT_TAHIYYAT_LABEL,
  ...DUA_AFTER_SALAH_LABEL,
  ...DUA_UL_QUNOOT_LABEL,
} satisfies Record<string, HomeLabel>;