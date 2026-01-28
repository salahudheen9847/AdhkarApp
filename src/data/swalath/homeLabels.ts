import type { HomeLabel } from "../labels/types";
import { SWALATH_DUA_LABEL } from "./label";

import { NARIYATH_SWALATH_LABEL } from "./nariyathSwalath/label";
import { SALATHUL_IBRAHIM_LABEL } from "./salathuIbrahim/label";
import { SALAWAT_AL_FATIH_LABEL } from "./salawatAlFatih/label";
import { SWALATHUL_IBRAMIYYA_LABEL } from "./swalathuIbramiyya/label";
import { THAJU_SWALATH_LABEL } from "./thajuSwalath/label";

export const SWALATH_HOME_LABELS = {
  ...SWALATH_DUA_LABEL,

  ...NARIYATH_SWALATH_LABEL,
  ...SALATHUL_IBRAHIM_LABEL,
  ...SALAWAT_AL_FATIH_LABEL,
  ...SWALATHUL_IBRAMIYYA_LABEL,
  ...THAJU_SWALATH_LABEL,
} satisfies Record<string, HomeLabel>;