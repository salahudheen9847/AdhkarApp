# Qaseedathul Burda Data Module

This module contains the complete Qaseedathul Burda collection with proper TypeScript types, validation, and organization.

## 📁 File Structure

```
src/data/qaseeda/
├── index.ts          # Main export file (clean imports)
├── types.ts          # TypeScript type definitions
├── verses.ts         # Raw verses data (16 baith)
├── constants.ts      # Configuration constants
├── validation.ts     # Data validation utilities
└── README.md         # This documentation
```

## 🚀 Usage

### Basic Import
```typescript
import { qaseedathulBurda } from '../data/qaseeda';
// Returns array of verses for backward compatibility
```

### Advanced Usage
```typescript
import { 
  qaseedathulBurdaVerses,
  QaseedaVerse,
  QASEEDA_CONSTANTS,
  validateQaseedaData,
  getQaseedaStats
} from '../data/qaseeda';
```

## 📊 Data Structure

Each verse follows the `QaseedaVerse` interface:

```typescript
interface QaseedaVerse {
  id: number;           // Unique identifier (1-16)
  text: string;         // Arabic text
  malayalam: string;    // Malayalam translation
  start: number;        // Audio start time (seconds)
  end: number;          // Audio end time (seconds)
  isHeading?: boolean;  // Optional heading flag
  isBox?: boolean;      // Optional box display flag
}
```

## 🔧 Constants

```typescript
QASEEDA_CONSTANTS = {
  AUDIO_FILE: 'qaseedathul_burda.mp3',
  TITLE: '📜 ഖസീദത്തുൽ ബുർദ',
  GRADIENT_COLORS: ['#f3e8ff', '#c084fc'],
  TOTAL_VERSES: 16,
  DURATION_SECONDS: 240,
  // ... more constants
}
```

## ✅ Validation

The module includes built-in validation:

```typescript
import { validateQaseedaData } from '../data/qaseeda';

const validation = validateQaseedaData();
console.log(validation.isValid); // boolean
console.log(validation.errors); // string[]
console.log(validation.warnings); // string[]
```

## 📈 Statistics

Get data statistics:

```typescript
import { getQaseedaStats } from '../data/qaseeda';

const stats = getQaseedaStats();
console.log(stats.totalVerses); // 16
console.log(stats.totalDuration); // 240 seconds
```

## 🔄 Migration

The old `qaseedathulBurda.ts` file has been replaced with this organized structure. The main export maintains backward compatibility:

```typescript
// Old way (still works)
import { qaseedathulBurda } from '../data/qaseeda/qaseedathulBurda';

// New way (recommended)
import { qaseedathulBurda } from '../data/qaseeda';
```

## 🎯 Integration Points

This module integrates with:
- `useDhikrAudio` hook for audio playback
- `HomeScreen` component for UI display
- `DhikrScreen` for verse rendering
- Audio file: `android/app/src/main/res/raw/qaseedathul_burda.mp3`

## 🛡️ Type Safety

All exports are fully typed with TypeScript:
- `QaseedaVerse` interface
- `QaseedaCollection` interface
- `QaseedaMode` type
- `QaseedaConstants` type

## 📝 Adding New Verses

To add new verses:
1. Update `verses.ts` with new verse data
2. Update `TOTAL_VERSES` in `constants.ts`
3. Run validation to ensure data integrity
4. Update audio timing if needed

## 🐛 Troubleshooting

If you encounter import errors:
1. Ensure all files in the module exist
2. Run `npx tsc --noEmit` to check TypeScript
3. Use validation to check data integrity
4. Check file paths in imports

## 📱 Features

✅ **16 Complete Baith** with Arabic and Malayalam  
✅ **Audio Synchronization** with timing data  
✅ **TypeScript Types** for full type safety  
✅ **Data Validation** to prevent errors  
✅ **Organized Structure** for maintainability  
✅ **Backward Compatibility** with existing code  
✅ **Statistics & Utils** for debugging
