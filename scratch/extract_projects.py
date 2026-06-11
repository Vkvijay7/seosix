import re
import os

html_path = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045\scratch\previous_site.html"

if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    # Strip scripts and styles
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    
    print("--- Searching for external links ---")
    links = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', html, re.DOTALL)
    seen = set()
    for href, text in links:
        href_clean = href.strip()
        text_clean = re.sub(r'<[^>]*>', '', text).strip()
        if href_clean not in seen:
            seen.add(href_clean)
            if "github.io" in href_clean or "web.app" in href_clean or "github.com" in href_clean:
                print(f"Link: {href_clean} | Text: {text_clean}")
else:
    print("previous_site.html not found!")
