import type { HomeLabel } from "../labels/types";
import { SALAH_DUA_LABEL } from "./label";

import { ADHAN_IQAMAH_DUA_LABEL } from "./adhanIqamahDuas/label";
import { ADHKAR_AFTER_SALAH_LABEL } from "./adhkarAfterSalah/label";
import { AT_TAHIYYAT_LABEL } from "./at-tahiyyat/label";
import { DUA_AFTER_SALAH_LABEL } from "./duaAfterSalah/label";
import { DUA_UL_QUNOOT_LABEL } from "./duaUlQunoot/label";

export const SALAH_HOME_LABELS = {
  ...SALAH_DUA_LABEL,
  ...ADHAN_IQAMAH_DUA_LABEL,
  ...ADHKAR_AFTER_SALAH_LABEL,
  ...AT_TAHIYYAT_LABEL,
  ...DUA_AFTER_SALAH_LABEL,
  ...DUA_UL_QUNOOT_LABEL,
} satisfies Record<string, HomeLabel>;