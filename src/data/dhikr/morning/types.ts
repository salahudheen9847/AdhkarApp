export interface DhikrItem {
  id: string;
  text: string;
  translation?: string;
}

export interface DhikrCategory {
  id: string;
  title: string;
  items: DhikrItem[];
}
