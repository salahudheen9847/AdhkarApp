import { DUA_LABELS } from "./dua";
import { MOULID_LABELS } from "./moulid";
import { QASEEDA_LABELS } from "./qaseeda";
import { RATIB_LABELS } from "./ratib";
import { SWALATH_LABELS } from "./swalath";
import { ASMA_LABELS } from "./asma";
import { RAMADAN_LABELS } from "./ramadan";
import { SALAH_LABELS } from "./salah";
import { PROTECTION_LABELS } from "./protection";

export const HOME_LABELS = {
  ...DUA_LABELS,
  ...MOULID_LABELS,
  ...QASEEDA_LABELS,
  ...RATIB_LABELS,
  ...SWALATH_LABELS,
  ...ASMA_LABELS,
  ...RAMADAN_LABELS,
  ...SALAH_LABELS,
  ...PROTECTION_LABELS,
} as const;
