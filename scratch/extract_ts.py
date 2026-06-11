import re

css_path = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045\.system_generated\steps\1069\content.md"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Grab block sections from style file
blocks = css.split('}')
ts_blocks = []

for block in blocks:
    cleaned = block.strip()
    if any(term in cleaned for term in ['ts-', 'about', 'gallery', 'circles', 'example-2', 'icon-content']):
        ts_blocks.append(cleaned + "}")

with open("scratch/ts_styles.txt", "w", encoding="utf-8") as out:
    out.write("\n\n".join(ts_blocks))

print("Completed extracting TS styles. Saved to scratch/ts_styles.txt")
