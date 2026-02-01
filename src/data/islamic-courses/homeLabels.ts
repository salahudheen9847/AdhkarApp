import type { HomeLabel } from "../types";
import { ISLAMIC_COURSE_LABEL } from "./label";
import { VAASTU_COURSE_LABEL } from "./vaastu/label"; // ഓരോ കോഴ്സിന്റെയും ലേബൽ

export const COURSE_HOME_LABELS: Record<string, HomeLabel> = {
  ...ISLAMIC_COURSE_LABEL,
  ...VAASTU_COURSE_LABEL,
};