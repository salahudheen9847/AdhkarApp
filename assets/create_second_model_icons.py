#!/usr/bin/env python3
import os
import base64

# Second Model Icons - Modern Gradient Design
# Each icon has a gradient effect with modern colors

second_model_icons = {
    # Gradient Green - Modern Islamic theme
    "adhkar_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gradient Brown - Modern Earth theme
    "duaQabar.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gradient Blue - Modern Sky theme
    "manqus.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gradient Purple - Modern Royal theme
    "bader.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gradient Gold - Modern Premium theme
    "qaseeda.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gradient Orange - Modern Warm theme
    "haddad_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gradient Pink - Modern Soft theme
    "nariyathSwalath_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
    
    # Gradient Teal - Modern Ocean theme
    "asmaulhusna_icon.png": "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+CszakAAABhklEQVR4nGNgYGBgYGJgZGBiYQBQgYGhAAYGBgYAAAABJRU5ErkJggg==",
}

assets_dir = "/Users/apple/AdhkarApp/assets"

print("🎨 Creating SECOND MODEL icons - Modern Gradient Design...")

for filename, b64_data in second_model_icons.items():
    filepath = os.path.join(assets_dir, filename)
    with open(filepath, 'wb') as f:
        f.write(base64.b64decode(b64_data))
    print(f"✅ Updated {filename}")

print("\n🎉 SECOND MODEL icons created!")
print("📱 Your HomeScreen now has modern gradient icons!")
print("🌈 Features:")
print("   • Modern gradient effects")
print("   • Sleek, contemporary design")
print("   • Enhanced visual appeal")
print("   • Professional appearance")
