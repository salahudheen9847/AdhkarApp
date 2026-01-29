import { RIZQ_DUA_LABEL } from "./label";

// 👉 business loss recovery
import { businessLossRecoveryDuas } from "./business-loss-recovery-duas/content";
import { BUSINESS_LOSS_RECOVERY_DUA_META } from "./business-loss-recovery-duas/meta";

// 👉 debt relief
import { debtReliefDuas } from "./debt-relief-duas/content";
import { DEBT_RELIEF_DUA_META } from "./debt-relief-duas/meta";

// 👉 house & land
import { houseLandDuas } from "./house-land-duas/content";
import { HOUSE_LAND_DUA_META } from "./house-land-duas/meta";

// 👉 work / job rizq
import { workRizqDuas } from "./work-rizq-duas/content";
import { WORK_RIZQ_DUA_META } from "./work-rizq-duas/meta";

// 👉 zakat
import { zakatDuas } from "./zakat-duas/content";
import { ZAKAT_DUA_META } from "./zakat-duas/meta";

export const RIZQ_DUA_CONTENT = [
  businessLossRecoveryDuas,
  debtReliefDuas,
  houseLandDuas,
  workRizqDuas,
  zakatDuas,
];

export const RIZQ_DUA_META = [
  BUSINESS_LOSS_RECOVERY_DUA_META,
  DEBT_RELIEF_DUA_META,
  HOUSE_LAND_DUA_META,
  WORK_RIZQ_DUA_META,
  ZAKAT_DUA_META,
];

export {
  RIZQ_DUA_LABEL,
};
