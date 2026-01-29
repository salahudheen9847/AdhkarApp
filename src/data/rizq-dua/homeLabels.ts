import type { HomeLabel } from "../types";
import { RIZQ_DUA_LABEL } from "./label";

import { BUSINESS_LOSS_RECOVERY_DUA_LABEL } from "./business-loss-recovery-duas/label";
import { DEBT_RELIEF_DUA_LABEL } from "./debt-relief-duas/label";
import { HOUSE_LAND_DUA_LABEL } from "./house-land-duas/label";
import { WORK_RIZQ_DUA_LABEL } from "./work-rizq-duas/label";
import { ZAKAT_DUA_LABEL } from "./zakat-duas/label";

export const RIZQ_HOME_LABELS = {
  ...RIZQ_DUA_LABEL,
  ...BUSINESS_LOSS_RECOVERY_DUA_LABEL,
  ...DEBT_RELIEF_DUA_LABEL,
  ...HOUSE_LAND_DUA_LABEL,
  ...WORK_RIZQ_DUA_LABEL,
  ...ZAKAT_DUA_LABEL,
} satisfies Record<string, HomeLabel>;