import os
from PIL import Image

try:
    img_path = r"c:\Users\Windows\Desktop\se6\public\images\seosix_logo.jpg"
    dest_png = r"c:\Users\Windows\Desktop\se6\public\favicon.png"
    dest_ico = r"c:\Users\Windows\Desktop\se6\public\favicon.ico"
    
    if os.path.exists(img_path):
        img = Image.open(img_path)
        
        # Ensure it's in RGB/RGBA format
        if img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGBA')
            
        # Resize to 96x96 for PNG favicon (Google recommends multiples of 48px square)
        img_png = img.resize((96, 96), Image.Resampling.LANCZOS)
        img_png.save(dest_png, format="PNG", optimize=True)
        print(f"PNG favicon saved successfully! Size: {os.path.getsize(dest_png)} bytes")
        
        # Save as ICO (multiple sizes: 16x16, 32x32, 48x48)
        img.save(dest_ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
        print(f"ICO favicon saved successfully! Size: {os.path.getsize(dest_ico)} bytes")
    else:
        print("Source image seosix_logo.jpg not found!")
except Exception as e:
    print(f"Error occurred: {e}")
