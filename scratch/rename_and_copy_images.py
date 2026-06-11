import shutil
import os

brain_dir = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045"
public_dir = r"c:\Users\Windows\Desktop\se6\public\images"

mappings = {
    "media__1781002550096.jpg": "civil.jpg",
    "media__1781002536218.jpg": "takewake.jpg",
    "media__1781002564604.png": "seosix.png",
    "media__1781002575816.png": "smartbill.png"
}

print("Renaming and copying final project images...")
for src_name, dst_name in mappings.items():
    src = os.path.join(brain_dir, src_name)
    dst = os.path.join(public_dir, dst_name)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {src_name} -> {dst}")
    else:
        print(f"Source not found: {src}")
