import shutil
import os

brain_dir = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045"
public_dir = r"c:\Users\Windows\Desktop\se6\public\images"

files_to_copy = [
    "media__1781002536218.jpg",
    "media__1781002550096.jpg",
    "media__1781002564604.png",
    "media__1781002575816.png"
]

print("Copying files...")
for filename in files_to_copy:
    src = os.path.join(brain_dir, filename)
    dst = os.path.join(public_dir, filename)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {filename} to {dst}")
    else:
        print(f"Source file not found: {src}")
