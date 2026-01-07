// Test file for Qaseedathul Burda module
import { qaseedathulBurda } from './index';

// Test basic structure
console.log('✅ Total verses:', qaseedathulBurda.length);
console.log('✅ First verse ID:', qaseedathulBurda[0]?.id);
console.log('✅ Last verse ID:', qaseedathulBurda[qaseedathulBurda.length - 1]?.id);

// Test verse structure
const firstVerse = qaseedathulBurda[0];
if (firstVerse) {
  console.log('✅ First verse has required fields:');
  console.log('  - text:', firstVerse.text ? '✓' : '✗');
  console.log('  - malayalam:', firstVerse.malayalam ? '✓' : '✗');
  console.log('  - english:', firstVerse.english ? '✓' : '✗');
  console.log('  - start:', typeof firstVerse.start === 'number' ? '✓' : '✗');
  console.log('  - end:', typeof firstVerse.end === 'number' ? '✓' : '✗');
}

export { qaseedathulBurda };
