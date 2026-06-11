import re
import os

html_path = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045\scratch\previous_site.html"

if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    # Let's search case-insensitively for "seo", "toolkit", "seosix"
    for term in ["seo", "toolkit", "seosix"]:
        matches = [m.start() for m in re.finditer(term, html, re.IGNORECASE)]
        print(f"Found {len(matches)} occurrences of '{term}'")
        for m in matches[:5]:
            # Print surrounding text
            start = max(0, m - 50)
            end = min(len(html), m + 50)
            context = html[start:end].replace('\n', ' ')
            print(f"  context: ...{context}...")
else:
    print("previous_site.html not found!")
