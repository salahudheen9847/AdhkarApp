import type { HomeLabel } from "../labels/types";
import { RIZQ_DUA_LABEL } from "./label";

import { BUSINESS_LOSS_RECOVERY_DUA_LABEL } from "./businessLossRecoveryDuas/label";
import { DEBT_RELIEF_DUA_LABEL } from "./debtReliefDuas/label";
import { HOUSE_LAND_DUA_LABEL } from "./houseLandDuas/label";
import { WORK_RIZQ_DUA_LABEL } from "./workRizqDuas/label";
import { ZAKAT_DUA_LABEL } from "./zakatDuas/label";

export const RIZQ_HOME_LABELS = {
  ...RIZQ_DUA_LABEL,
  ...BUSINESS_LOSS_RECOVERY_DUA_LABEL,
  ...DEBT_RELIEF_DUA_LABEL,
  ...HOUSE_LAND_DUA_LABEL,
  ...WORK_RIZQ_DUA_LABEL,
  ...ZAKAT_DUA_LABEL,
} satisfies Record<string, HomeLabel>;