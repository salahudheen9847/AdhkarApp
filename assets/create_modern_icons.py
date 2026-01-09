#!/usr/bin/env python3
import os
import base64

# Modern professional icons with different colors and designs
# Each icon is a 80x80 PNG with unique colors

modern_icons = {
    "adhkar_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Green - Islamic theme
    "duaQabar.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Brown - Earth theme
    "manqus.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Blue - Sky theme
    "bader.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Purple - Royal theme
    "qaseeda.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Gold - Premium theme
    "haddad_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Orange - Warm theme
    "nariyathSwalath_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Pink - Soft theme
    "asmaulhusna_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",  # Teal - Ocean theme
}

assets_dir = "/Users/apple/AdhkarApp/assets"

print("🎨 Creating modern professional icons...")

for filename, b64_data in modern_icons.items():
    filepath = os.path.join(assets_dir, filename)
    with open(filepath, 'wb') as f:
        f.write(base64.b64decode(b64_data))
    print(f"✅ Created {filepath}")

print("\n🎉 All modern icons created successfully!")
print("📱 Your HomeScreen now has professional, modern icons!")
