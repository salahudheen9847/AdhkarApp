#!/usr/bin/env python3
import os

# Create simple colored square PNG files using base64
# These are 80x80 pixel colored squares

# Base64 encoded colored PNG files (80x80 solid colors)
icons = {
    "adhkar_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABlklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    "duaQabar.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==", 
    "manqus.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    "bader.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    "qaseeda.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    "haddad_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    "nariyathSwalath_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    "asmaulhusna_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
}

assets_dir = "/Users/apple/AdhkarApp/assets"

for filename, b64_data in icons.items():
    filepath = os.path.join(assets_dir, filename)
    with open(filepath, 'wb') as f:
        f.write(__import__('base64').b64decode(b64_data))
    print(f"Created {filepath}")

print("All visible icons created!")
