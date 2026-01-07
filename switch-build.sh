#!/bin/bash

# AdhkarApp Build Switcher
# Usage: ./switch-build.sh [debug|release]

BUILD_TYPE=${1:-debug}
APP_PACKAGE="salahudheen.adhkar"

echo "🔄 Switching to $BUILD_TYPE build..."

# Uninstall existing app
echo "📱 Uninstalling existing app..."
adb uninstall $APP_PACKAGE 2>/dev/null || echo "No app installed, continuing..."

# Build and install based on type
if [ "$BUILD_TYPE" = "release" ]; then
    echo "🚀 Building and installing RELEASE version..."
    cd android && ./gradlew installRelease
    echo "✅ Release build installed!"
    echo "📊 APK Size: $(ls -lh app/build/outputs/apk/release/app-release.apk | awk '{print $5}')"
elif [ "$BUILD_TYPE" = "debug" ]; then
    echo "🔧 Building and installing DEBUG version..."
    npx react-native run-android
    echo "✅ Debug build installed!"
else
    echo "❌ Invalid build type. Use 'debug' or 'release'"
    exit 1
fi

echo "🎯 App is ready! Build type: $BUILD_TYPE"
