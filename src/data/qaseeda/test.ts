// Test file for Qaseedathul Burda module
import { validateQaseedaData, getQaseedaStats, qaseedathulBurda } from './index';

// Run validation
const validation = validateQaseedaData();
console.log('✅ Validation Results:');
console.log('Valid:', validation.isValid);
console.log('Errors:', validation.errors);
console.log('Warnings:', validation.warnings);

// Get statistics
const stats = getQaseedaStats();
console.log('\n📊 Statistics:');
console.log('Total Verses:', stats.totalVerses);
console.log('Total Duration:', stats.totalDuration, 'seconds');
console.log('Average Duration:', stats.averageVerseDuration.toFixed(2), 'seconds');

// Test first verse
console.log('\n📖 First Verse:');
console.log('ID:', qaseedathulBurda[0].id);
console.log('Text:', qaseedathulBurda[0].text.substring(0, 30) + '...');
console.log('Malayalam:', qaseedathulBurda[0].malayalam.substring(0, 30) + '...');

export { validation, stats };
