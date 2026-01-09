// Salah Module Types
import { BaseVerse, CollectionMetadata } from '../types';

export interface SalahVerse extends BaseVerse {
  // Additional salah-specific properties can be added here
}

export interface SalahCollection extends CollectionMetadata {
  // Additional salah-specific metadata can be added here
}

export type SalahCategory = "after-salah" | "general";
