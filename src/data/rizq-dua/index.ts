import { RIZQ_DUA_LABEL } from "./label";

// 👉 business loss recovery
import { businessLossRecoveryDuas } from "./businessLossRecoveryDuas/content";
import { BUSINESS_LOSS_RECOVERY_DUA_META } from "./businessLossRecoveryDuas/meta";

// 👉 debt relief
import { debtReliefDuas } from "./debtReliefDuas/content";
import { DEBT_RELIEF_DUA_META } from "./debtReliefDuas/meta";

// 👉 house & land
import { houseLandDuas } from "./houseLandDuas/content";
import { HOUSE_LAND_DUA_META } from "./houseLandDuas/meta";

// 👉 work / job rizq
import { workRizqDuas } from "./workRizqDuas/content";
import { WORK_RIZQ_DUA_META } from "./workRizqDuas/meta";

// 👉 zakat
import { zakatDuas } from "./zakatDuas/content";
import { ZAKAT_DUA_META } from "./zakatDuas/meta";

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
