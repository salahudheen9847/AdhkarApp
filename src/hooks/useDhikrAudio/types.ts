export type UseDhikrAudioParams = {
  mode: "dhikr" | "manqus" | "bader" | "qaseeda";
  type?: string;
};

export type DuaItem = {
  id: number;
  isBox?: boolean;
  isHeading?: boolean;
  text: string;
  malayalam?: string;
  english?: string;
  start?: number;
  end?: number;
};
