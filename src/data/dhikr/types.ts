// Dhikr Module Types
import { BaseVerse, CollectionMetadata } from '../types';

export interface DhikrVerse extends BaseVerse {
  // Additional dhikr-specific properties can be added here
}

export interface DhikrCollection extends CollectionMetadata {
  // Additional dhikr-specific metadata can be added here
}

export type DhikrCategory = "morning" | "evening" | "general";
