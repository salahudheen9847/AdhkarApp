export type DhikrItem = {
  id: number;
  isHeading?: boolean;   // ✅ NEW
  isBox?: boolean;
  text: string;          // Arabic
  malayalam: string;
  english: string;
  start: number;
  end: number;
};
