// Qaseedathul Burda Data Validation
import { qaseedathulBurdaVerses } from './verses';
import { QaseedaVerse } from './types';

/**
 * Validates the Qaseedathul Burda verses data structure
 * Ensures all required fields are present and correctly formatted
 */
export const validateQaseedaData = (): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check if verses array exists and has items
  if (!Array.isArray(qaseedathulBurdaVerses)) {
    errors.push('Verses data is not an array');
    return { isValid: false, errors, warnings };
  }

  if (qaseedathulBurdaVerses.length === 0) {
    errors.push('Verses array is empty');
    return { isValid: false, errors, warnings };
  }

  // Validate each verse
  qaseedathulBurdaVerses.forEach((verse, index) => {
    const verseNum = index + 1;

    // Check required fields
    if (!verse.id || typeof verse.id !== 'number') {
      errors.push(`Verse ${verseNum}: Missing or invalid id`);
    }

    if (!verse.text || typeof verse.text !== 'string') {
      errors.push(`Verse ${verseNum}: Missing or invalid text`);
    }

    if (!verse.malayalam || typeof verse.malayalam !== 'string') {
      errors.push(`Verse ${verseNum}: Missing or invalid malayalam translation`);
    }

    if (typeof verse.start !== 'number') {
      errors.push(`Verse ${verseNum}: Missing or invalid start time`);
    }

    if (typeof verse.end !== 'number') {
      errors.push(`Verse ${verseNum}: Missing or invalid end time`);
    }

    // Check timing consistency
    if (verse.start >= verse.end) {
      errors.push(`Verse ${verseNum}: Start time must be less than end time`);
    }

    // Check for consecutive timing
    if (index > 0) {
      const prevVerse = qaseedathulBurdaVerses[index - 1];
      if (verse.start !== prevVerse.end) {
        warnings.push(`Verse ${verseNum}: Start time (${verse.start}) doesn't match previous verse end time (${prevVerse.end})`);
      }
    }

    // Check optional fields
    if (verse.isHeading !== undefined && typeof verse.isHeading !== 'boolean') {
      warnings.push(`Verse ${verseNum}: isHeading should be boolean or undefined`);
    }

    if (verse.isBox !== undefined && typeof verse.isBox !== 'boolean') {
      warnings.push(`Verse ${verseNum}: isBox should be boolean or undefined`);
    }
  });

  // Check for duplicate IDs
  const ids = qaseedathulBurdaVerses.map(v => v.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    errors.push('Duplicate verse IDs found');
  }

  // Check total verses count
  if (qaseedathulBurdaVerses.length !== 16) {
    warnings.push(`Expected 16 verses, found ${qaseedathulBurdaVerses.length}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Get statistics about the Qaseedathul Burda data
 */
export const getQaseedaStats = () => {
  const verses = qaseedathulBurdaVerses;
  
  return {
    totalVerses: verses.length,
    totalDuration: Math.max(...verses.map(v => v.end)),
    averageVerseDuration: verses.reduce((sum, v) => sum + (v.end - v.start), 0) / verses.length,
    hasHeadings: verses.some(v => v.isHeading),
    hasBoxes: verses.some(v => v.isBox),
    firstVerseStart: verses[0]?.start || 0,
    lastVerseEnd: verses[verses.length - 1]?.end || 0
  };
};
