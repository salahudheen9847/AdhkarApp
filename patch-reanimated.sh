#!/bin/bash

# Patch Reanimated WORKLETS_FEATURE_FLAGS for Mac M2 + Android

REANIMATED_CMAKE="node_modules/react-native-reanimated/CMakeLists.txt"

if [ -f "$REANIMATED_CMAKE" ]; then
  echo "Patching Reanimated CMakeLists.txt..."
  # Replace old WORKLETS_FEATURE_FLAGS line with correct ON/OFF syntax
  sed -i '' 's/\[RUNTIME_TEST_FLAG:false\]\[IOS_DYNAMIC_FRAMERATE_ENABLED:true\]/RUNTIME_TEST_FLAG=OFF;IOS_DYNAMIC_FRAMERATE_ENABLED=ON/' "$REANIMATED_CMAKE"
  echo "Patch applied successfully."
else
  echo "Error: $REANIMATED_CMAKE not found. Make sure react-native-reanimated is installed."
fi

