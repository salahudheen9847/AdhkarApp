import { StyleSheet } from "react-native";

// 🌙 Islamic Color Palette
export const colors = {
  // Primary Islamic Colors
  primary: {
    50: '#f0fdf4',    // Light cream
    100: '#fef3c7',  // Light yellow
    200: '#fde047',  // Light amber
    300: '#facc15',  // Light orange
    400: '#f87171',  // Light orange
    500: '#22c55e',  // Islamic green
    600: '#16a34a',  // Islamic blue
    700: '#15803d',  // Islamic blue
    800: '#1e293b',  // Dark blue
    900: '#14532d',  // Dark purple
  },
  
  // Secondary Colors
  secondary: {
    50: '#f8fafc',    // Very light green
    100: '#fef3c7',   // Very light yellow
    200: '#fde68a',   // Very light amber
    300: '#fcd34d',   // Very light orange
    400: '#fbbf24',   // Very light red
    500: '#10b981',   // Light red
    600: '#059669',   // Dark red
  },
  
  // Neutral Colors
  neutral: {
    50: '#fafaf9',    // Light background
    100: '#f3f4f6',   // Light gray
    200: '#e5e7eb',   // Light gray
    300: '#d4d4d8',   // Medium gray
    400: '#9ca3af',   // Dark gray
    500: '#6b7280',   // Dark gray
  },
  
  // Text Colors
  text: {
    primary: '#171717',    // Main text
    secondary: '#374151',    // Secondary text
    inverse: '#ffffff',     // White text
    accent: '#22c55e',     // Accent text
  },
  
  // Background Colors
  background: {
    primary: '#fafaf9',    // Light background
    secondary: '#1f2937',    // Dark background
    card: '#ffffff',       // Card background
    surface: '#ffffff',      // Surface background
  },
  
  // Border Colors
  border: {
    light: '#e5e7eb',    // Light border
    dark: '#374151',     // Dark border
  },
};

// 🎨 Islamic Typography
export const typography = {
  // Font Families
  arabic: {
    regular: 'NotoNaskhArabic-Regular',
    bold: 'NotoNaskhArabic-Bold',
  },
  malayalam: {
    regular: 'NotoSansMalayalam-Regular',
    bold: 'NotoSansMalayalam-Bold',
  },
  english: {
    regular: 'Inter-Regular',
    bold: 'Inter-Bold',
  },
  
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  
  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
};

// 🕌 Component Styles
export const componentStyles = {
  // Card Styles
  card: {
    backgroundColor: colors.background.card,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  
  // Button Styles
  button: {
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonPrimary: {
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Input Styles
  input: {
    backgroundColor: colors.background.card,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border.light,
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
  },
  
  // Header Styles
  header: {
    backgroundColor: colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  
  headerDark: {
    backgroundColor: colors.background.secondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.dark,
  },
};

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  header: { padding: 16, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.border.light },
  headerDark: { padding: 16, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.border.dark },
  card: { backgroundColor: colors.background.card, borderRadius: 12, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  button: { backgroundColor: colors.primary[500], borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center' },
  buttonPrimary: { backgroundColor: colors.primary[500], borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center' },
  buttonSecondary: { backgroundColor: 'transparent', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24, borderWidth: 1, borderColor: colors.primary[500], alignItems: 'center', justifyContent: 'center' },
  input: { backgroundColor: colors.background.card, borderRadius: 8, padding: 12, borderWidth: 1, borderColor: colors.border.light, fontSize: typography.fontSize.base, color: colors.text.primary },
  text: { fontSize: typography.fontSize.base, color: colors.text.primary },
  textSecondary: { fontSize: typography.fontSize.sm, color: colors.text.secondary },
  textInverse: { fontSize: typography.fontSize.base, color: colors.text.inverse },
  title: { fontSize: typography.fontSize.lg, fontWeight: '700', color: colors.text.primary },
  subtitle: { fontSize: typography.fontSize.base, color: colors.text.secondary },
  accent: { fontSize: typography.fontSize.sm, color: colors.text.accent },
});
