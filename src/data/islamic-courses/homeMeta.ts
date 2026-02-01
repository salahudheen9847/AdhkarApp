import type { HomeMeta } from "../types";
import { VAASTU_COURSE_META } from "./vaastu/meta";

export const ISLAMIC_COURSE_HOME_META: HomeMeta[] = [
  { ...VAASTU_COURSE_META, section: "courses" },
  // ഭാവിയിൽ കൂടുതൽ കോഴ്സുകൾ വരുമ്പോൾ ഇവിടെ ചേർക്കാം
];