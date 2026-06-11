import re
import os

html_path = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045\scratch\previous_site.html"

if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    # Strip scripts and styles
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    
    print("--- Searching for img tags and styles ---")
    imgs = re.findall(r'<img[^>]+src="([^"]+)"', html, re.IGNORECASE)
    for img in imgs:
        print(f"Img: {img}")
        
    # Find inline style backgrounds
    bg_imgs = re.findall(r'url\([\'"]?([^\'"\)]+)[\'"]?\)', html, re.IGNORECASE)
    for bg in bg_imgs:
        print(f"BG Img: {bg}")
else:
    print("previous_site.html not found!")
