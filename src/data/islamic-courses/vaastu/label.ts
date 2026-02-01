// src/data/islamic-courses/vaastu/label.ts
import { HomeLabel } from "../../types"; // path ശ്രദ്ധിക്കുക, types.ts ലേക്കുള്ള ദൂരം അനുസരിച്ച് മാറ്റം വരുത്താം

export const VAASTU_COURSE_LABEL = {
  vaastuCourse: {
    arabic: "علم العمارة",
    malayalam: "വാസ്തുശാസ്ത്ര പഠനം",
    english: "Vaastu Shastra Study",
  },
} satisfies Record<string, HomeLabel>;