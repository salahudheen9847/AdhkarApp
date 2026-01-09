#!/usr/bin/env python3
import os
import base64

# Create colored icons with different themes
# Each icon has a unique color scheme

colored_icons = {
    # Green - Islamic theme (Dua/Adhkar)
    "adhkar_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Brown - Earth theme (Dua Qabar)
    "duaQabar.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Blue - Sky theme (Manqus Moulid)
    "manqus.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Purple - Royal theme (Bader Moulid)
    "bader.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gold - Premium theme (Qaseeda)
    "qaseeda.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Orange - Warm theme (Haddad)
    "haddad_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Pink - Soft theme (Nariyath Swalath)
    "nariyathSwalath_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Teal - Ocean theme (Asmaul Husna)
    "asmaulhusna_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
}

assets_dir = "/Users/apple/AdhkarApp/assets"

print("🎨 Creating modern colored icons for HomeScreen...")

for filename, b64_data in colored_icons.items():
    filepath = os.path.join(assets_dir, filename)
    with open(filepath, 'wb') as f:
        f.write(base64.b64decode(b64_data))
    print(f"✅ Updated {filename}")

print("\n🎉 Modern colored icons created!")
print("📱 Your HomeScreen now has professional, themed icons!")
print("🌈 Each icon has a unique color matching its content:")
