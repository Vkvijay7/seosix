from PIL import Image
import os
import shutil

brain_dir = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045"
public_dir = r"c:\Users\Windows\Desktop\se6\public\images"

files = {
    "media__1781004351644.jpg": "img1",
    "media__1781004371038.jpg": "img2",
    "media__1781004384769.png": "img3"
}

for filename in files.keys():
    path = os.path.join(brain_dir, filename)
    if os.path.exists(path):
        with Image.open(path) as img:
            rgb = img.convert("RGB")
            pixels = list(rgb.getdata())
            # Find average red, green, blue channels
            r_avg = sum(p[0] for p in pixels) / len(pixels)
            g_avg = sum(p[1] for p in pixels) / len(pixels)
            b_avg = sum(p[2] for p in pixels) / len(pixels)
            print(f"{filename}: R={r_avg:.1f}, G={g_avg:.1f}, B={b_avg:.1f}, size={img.size}")
            
            # Map files based on color profile
            # Cafe (img1 or img2) should have much higher red ratio relative to blue, and overall warm dark tones
            # Construction has yellow/orange (high R and G, lower B)
            # Smartbill has blue/white laptop screen (higher relative blue or overall brighter colors)
            
            if filename.endswith(".png"):
                # This is Smartbill
                dest = "smartbill.png"
            elif r_avg > 80 and g_avg > 50 and b_avg < 40:
                # High red and green, low blue -> yellow/orange construction
                dest = "civil.jpg"
            else:
                # Strong red accents with lower green -> Cafe
                dest = "takewake.jpg"
                
            dst_path = os.path.join(public_dir, dest)
            shutil.copy2(path, dst_path)
            print(f"  Copied to {dst_path}")
