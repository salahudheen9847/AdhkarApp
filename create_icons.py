#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create assets directory
assets_dir = "/Users/apple/AdhkarApp/assets"
os.makedirs(assets_dir, exist_ok=True)

# Icon configurations with colors
icons = {
    "adhkar_icon.png": ("#fbbf24", "🕌"),
    "duaQabar.png": ("#facc15", "🪦"),
    "manqus.png": ("#93c5fd", "📖"),
    "bader.png": ("#67e8f9", "📿"),
    "qaseeda.png": ("#c084fc", "🎵"),
    "haddad_icon.png": ("#fbbf24", "📜"),
    "nariyathSwalath_icon.png": ("#d8b4fe", "🙏"),
    "asmaulhusna_icon.png": ("#fdba74", "✨"),
}

def create_icon(filename, color, emoji):
    # Create 80x80 image
    img = Image.new('RGBA', (80, 80), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw colored background circle
    draw.ellipse([10, 10, 70, 70], fill=color)
    
    # Add emoji text (centered)
    try:
        # Try to use a system font that supports emoji
        font = ImageFont.truetype("/System/Library/Fonts/Apple Color Emoji.ttc", 30)
    except:
        # Fallback to default font
        font = ImageFont.load_default()
    
    # Get text size and center it
    bbox = draw.textbbox((0, 0), emoji, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (80 - text_width) // 2
    y = (80 - text_height) // 2
    
    draw.text((x, y), emoji, fill="white", font=font)
    
    # Save the image
    filepath = os.path.join(assets_dir, filename)
    img.save(filepath, 'PNG')
    print(f"Created {filepath}")

# Create all icons
for filename, (color, emoji) in icons.items():
    create_icon(filename, color, emoji)

print("All icons created successfully!")
