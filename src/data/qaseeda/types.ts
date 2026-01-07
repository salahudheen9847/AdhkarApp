// Qaseedathul Burda Types

export interface QaseedaVerse {
  id: number;
  text: string;
  malayalam: string;
  english: string;
  start: number;
  end: number;
  isHeading?: boolean;
  isBox?: boolean;
}

export interface QaseedaCollection {
  id: string;
  title: string;
  verses: QaseedaVerse[];
  audioFile: string;
}

export type QaseedaMode = "qaseeda";