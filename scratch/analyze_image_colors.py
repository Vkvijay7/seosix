from PIL import Image
import os

public_dir = r"c:\Users\Windows\Desktop\se6\public\images"
files = [
    "media__1781002536218.jpg",
    "media__1781002550096.jpg",
    "media__1781002564604.png",
    "media__1781002575816.png"
]

for filename in files:
    path = os.path.join(public_dir, filename)
    if os.path.exists(path):
        try:
            with Image.open(path) as img:
                # Convert to RGB if needed
                img_rgb = img.convert("RGB")
                # Get average color of the left 200px
                left_crop = img_rgb.crop((0, 0, 200, 576))
                left_pixels = list(left_crop.getdata())
                left_avg = tuple(int(sum(x)/len(left_pixels)) for x in zip(*left_pixels))
                
                # Get average color of the right 200px
                right_crop = img_rgb.crop((824, 0, 1024, 576))
                right_pixels = list(right_crop.getdata())
                right_avg = tuple(int(sum(x)/len(right_pixels)) for x in zip(*right_pixels))
                
                # Get overall average
                all_pixels = list(img_rgb.getdata())
                overall_avg = tuple(int(sum(x)/len(all_pixels)) for x in zip(*all_pixels))
                
                print(f"{filename}:")
                print(f"  Left Avg Color (RGB): {left_avg}")
                print(f"  Right Avg Color (RGB): {right_avg}")
                print(f"  Overall Avg Color (RGB): {overall_avg}")
        except Exception as e:
            print(f"Error analyzing {filename}: {e}")
