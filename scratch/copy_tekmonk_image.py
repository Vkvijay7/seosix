import shutil
import os

brain_dir = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045"
public_dir = r"c:\Users\Windows\Desktop\se6\public\images"

src = os.path.join(brain_dir, "media__1781002952059.jpg")
dst = os.path.join(public_dir, "tekmonk.jpg")

if os.path.exists(src):
    shutil.copy2(src, dst)
    print(f"Successfully copied {src} -> {dst}")
else:
    print(f"Source file not found: {src}")
