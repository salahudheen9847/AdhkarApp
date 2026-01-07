// Morning Dhikr Constants
export const MORNING_DHIKR_CONSTANTS = {
  id: 'morningAdhkar',
  title: 'രാവില സ്കർഹങ്ങൾ',
  titleArabic: 'أذكار الصباح',
  audioFile: 'morning_adhkar.mp3',
  gradientColors: ['#f0f9ff', '#d0e7ff'],
  iconName: 'morning.png',
} as const;

export type MorningDhikrConstants = typeof MORNING_DHIKR_CONSTANTS;
