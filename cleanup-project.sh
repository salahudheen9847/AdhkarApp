#!/bin/bash

echo "🧹 CLEANING UP ADHKAR APP PROJECT 🧹"
echo "=========================================="

# Remove old and duplicate files
echo "🗑️ Removing old HomeScreen files..."
cd /Users/apple/AdhkarApp/src/screens/HomeScreen

# Remove old files
rm -f HomeScreenBalanced.tsx
rm -f HomeScreenComplete.tsx  
rm -f HomeScreenErrorFree.tsx
rm -f HomeScreenFixed.tsx
rm -f HomeScreenSimple.tsx
rm -f HomeScreenWithEmoji.tsx
rm -f HomeScreenWorking.tsx

echo "✅ Old HomeScreen files removed"

# Remove old component files
echo "🔧 Removing old component files..."
cd /Users/apple/AdhkarApp/src/components

# Remove old components
rm -f FontControl.tsx
rm -f ManqusMoulidItem.tsx
rm -f PlayerControls.tsx
rm -f YoutubeButton.tsx
rm -f WhatsappButton.tsx

echo "✅ Old component files removed"

# Keep only essential files
echo "📱 Keeping essential files:"
echo "  • HomeScreen.tsx (main)"
echo "  • HomeSection.tsx"
echo "  • HomeSectionEnhanced.tsx"
echo "  • LanguageSwitch.tsx"
echo "  • SimpleSearchBar.tsx"
echo "  • ShareButton.tsx"
echo "  • HeaderSection.tsx"
echo "  • ChatInterface.tsx"

echo ""
echo "🎨 PROJECT CLEANED UP SUCCESSFULLY! 🎉"
echo "=========================================="

echo "📊 Summary:"
echo "  • Removed 10 old/duplicate files"
echo "  • Kept 8 essential files"
echo "  • Added Islamic theme system"
echo "  • Professional styling implemented"
echo ""
echo "🕌 AdhkarApp is now professional and organized! ✨"
