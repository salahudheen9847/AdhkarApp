// App-wide Constants

export const APP_CONSTANTS = {
  // Audio
  AUDIO_BASE_PATH: 'android/app/src/main/res/raw/',
  
  // Database
  DB_NAME: 'adhkar.db',
  
  // UI
  DEFAULT_FONT_SIZE: 16,
  ANIMATION_DURATION: 300,
  
  // Data limits
  MAX_VERSES_PER_PAGE: 50,
  
  // Version
  APP_VERSION: '1.0.0',
} as const;

export type AppConstants = typeof APP_CONSTANTS;
