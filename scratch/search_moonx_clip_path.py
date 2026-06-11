import re
import os

html_path = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045\scratch\moonx.html"

if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    # Strip scripts and styles
    html_clean = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    
    print("--- Searching for clip-path ---")
    matches = re.findall(r'clip-path:[^;\}]+', html, re.IGNORECASE)
    print(f"Found {len(matches)} occurrences of 'clip-path' in raw HTML")
    for m in matches[:10]:
        print(f"  {m}")
        
    print("--- Searching for inline styles or classes in works section ---")
    # Let's search for "works" or "projects" in the clean HTML
    for m in re.finditer(r'works|projects', html_clean, re.IGNORECASE):
        start = max(0, m.start() - 100)
        end = min(len(html_clean), m.end() + 100)
        print(f"Context: {html_clean[start:end].strip()}")
        print("-" * 50)
else:
    print("moonx.html not found!")
