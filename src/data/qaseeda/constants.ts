// Qaseedathul Burda Constants

export const QASEEDA_CONSTANTS = {
  // Audio configuration
  AUDIO_FILE: 'qaseedathul_burda.mp3',
  
  // Display configuration
  TITLE: '📜 ഖസീദത്തുൽ ബുർദ',
  TITLE_ENGLISH: 'Qaseedathul Burda',
  TITLE_ARABIC: 'قصيدة البردة',
  
  // UI configuration
  GRADIENT_COLORS: ['#f3e8ff', '#c084fc'],
  ICON_NAME: 'qaseeda.png',
  
  // Metadata
  TOTAL_VERSES: 16,
  DURATION_SECONDS: 240, // Approximate duration
  
  // Section info
  SECTION_NAME: 'qaseeda',
  SECTION_TITLE: '📜 ഖസീദ ശേഖരം',
} as const;

// Type for the constants object
export type QaseedaConstants = typeof QASEEDA_CONSTANTS;
