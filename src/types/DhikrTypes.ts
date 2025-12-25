export type DhikrDBItem = {
  id: number;
  text: string;        // Arabic text (render)
  malayalam?: string;
  english?: string;
  start?: number;
  end?: number;
};
