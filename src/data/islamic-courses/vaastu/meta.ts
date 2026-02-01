// src/data/islamic-courses/vaastu/meta.ts
import type { HomeMeta } from "../../types";

export const VAASTU_COURSE_META: HomeMeta = {
  id: "vaastu_course_001", // Google Play Console-il nalkunna Product ID
  icon: "home-outline", 
  section: "courses",
  isPaid: true, // 👈 Payment status
  title: {
    arabic: "علم العمارة",
    malayalam: "വാസ്തുശാസ്ത്ര പഠനം",
    english: "Vaastu Shastra Study",
  },
} as const;