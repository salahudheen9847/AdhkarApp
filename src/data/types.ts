export type DhikrItem = {
  id: number;
  isBox?: boolean;     // For Moulid box items
  text: string;        // Arabic (UNCHANGED)
  malayalam: string;
  english: string;
  start: number;
  end: number;
};
