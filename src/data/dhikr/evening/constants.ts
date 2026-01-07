// Evening Dhikr Constants
export const EVENING_DHIKR_CONSTANTS = {
  id: 'eveningAdhkar',
  title: 'വൈകാം സ്കർഹങ്ങൾ',
  titleArabic: 'أذكار المساء',
  audioFile: 'evening_adhkar.mp3',
  gradientColors: ['#9333ea', '#ffc107'],
  iconName: 'evening.png',
} as const;

export type EveningDhikrConstants = typeof EVENING_DHIKR_CONSTANTS;
