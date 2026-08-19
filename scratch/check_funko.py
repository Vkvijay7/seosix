import os
from PIL import Image

brain_dir = r'C:\Users\Windows\.gemini\antigravity\brain\92ec43b6-effb-4235-927f-b93b55ed6319'
img1_path = os.path.join(brain_dir, 'media__1781249301069.png')
img2_path = os.path.join(brain_dir, 'media__1781249673399.png')

def left_brightness(path):
    img = Image.open(path).convert('L')
    width, height = img.size
    left_half = img.crop((0, 0, width // 2, height))
    pixels = list(left_half.getdata())
    avg = sum(pixels) / len(pixels)
    return avg

print("Brightness img1:", left_brightness(img1_path))
print("Brightness img2:", left_brightness(img2_path))
