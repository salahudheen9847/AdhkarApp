import type { HomeLabel } from "../types";

import { DHIKR_LABEL } from "./label";
import { morningAdhkar_DHIKR_LABEL } from "./morningAdhkar/label";
import { eveningAdhkar_DHIKR_LABEL } from "./eveningAdhkar/label";
import { BEFORE_SLEEP_DHIKR_LABEL } from "./beforeSleepAdhkar/label";
import { WAKE_UP_DHIKR_LABEL } from "./wakeUpAdhkar/label";
import { jumuaAdhkar_LABEL } from "./jumuaAdhkar/label";
import { asmaulHusna_LABEL } from "./asmaulHusna/label";

export const DHIKR_HOME_LABELS: Record<string, HomeLabel> = {
  ...DHIKR_LABEL,
  ...morningAdhkar_DHIKR_LABEL,
  ...eveningAdhkar_DHIKR_LABEL,
  ...BEFORE_SLEEP_DHIKR_LABEL,
  ...WAKE_UP_DHIKR_LABEL,
  ...jumuaAdhkar_LABEL,
  ...asmaulHusna_LABEL,
};