#!/bin/bash

# Delete extra HomeScreen files, keeping only essential ones
cd /Users/apple/AdhkarApp/src/screens/HomeScreen

# Files to delete
files_to_delete=(
    "HomeScreenBalanced.tsx"
    "HomeScreenComplete.tsx"
    "HomeScreenErrorFree.tsx"
    "HomeScreenFixed.tsx"
    "HomeScreenSimple.tsx"
    "HomeScreenWithEmoji.tsx"
)

# Delete files
for file in "${files_to_delete[@]}"; do
    if [ -f "$file" ]; then
        echo "Deleting: $file"
        rm "$file"
    else
        echo "File not found: $file"
    fi
done

echo "Cleanup complete!"
echo "Remaining files:"
ls -la *.tsx
