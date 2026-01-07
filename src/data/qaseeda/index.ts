// Qaseedathul Burda - Main Export File
// This file provides a clean, organized structure for the Qaseedathul Burda collection

export * from './constants';
export * from './types';
export * from './verses';
export * from './validation';

// Backward compatibility - export as array for existing code
import { qaseedathulBurdaVerses } from './verses';

export const qaseedathulBurda = qaseedathulBurdaVerses;
