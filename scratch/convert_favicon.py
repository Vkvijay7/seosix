import os
from PIL import Image

try:
    img_path = r"c:\Users\Windows\Desktop\se6\public\images\seosix_logo.jpg"
    dest_png = r"c:\Users\Windows\Desktop\se6\public\favicon.png"
    dest_ico = r"c:\Users\Windows\Desktop\se6\public\favicon.ico"
    
    if os.path.exists(img_path):
        img = Image.open(img_path)
        # Convert to PNG
        img.save(dest_png, format="PNG")
        print("PNG favicon saved successfully!")
        
        # Save as ICO (multiple sizes: 16x16, 32x32, 48x48)
        img.save(dest_ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
        print("ICO favicon saved successfully!")
    else:
        print("Source image seosix_logo.jpg not found!")
except Exception as e:
    print(f"Error occurred: {e}")
