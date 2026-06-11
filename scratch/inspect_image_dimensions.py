from PIL import Image
import os

public_dir = r"c:\Users\Windows\Desktop\se6\public\images"
files = [
    "media__1781002536218.jpg",
    "media__1781002550096.jpg",
    "media__1781002564604.png",
    "media__1781002575816.png"
]

print("Inspecting images...")
for filename in files:
    path = os.path.join(public_dir, filename)
    if os.path.exists(path):
        try:
            with Image.open(path) as img:
                print(f"{filename}: format={img.format}, size={img.size}, mode={img.mode}")
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    else:
        print(f"File not found: {path}")
