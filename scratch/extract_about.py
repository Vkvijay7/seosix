import re

# Read the fetched style content
css_path = r"C:\Users\Windows\.gemini\antigravity\brain\bc6aea92-0ce1-4b47-b48f-1c1c7cee9045\.system_generated\steps\1069\content.md"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Let's extract blocks of CSS
# A simple way to grab blocks of CSS is to split by '}' and find blocks containing our keywords
blocks = css.split('}')
relevant_blocks = []

keywords = ['gallery', 'carousel', 'ts-card', 'card', 'circles', 'example-2', 'icon-content', 'about']

for block in blocks:
    cleaned = block.strip()
    if any(kw in cleaned for kw in keywords):
        relevant_blocks.append(cleaned + "}")

# Write to output file
with open("scratch/carousel_extracted_styles.txt", "w", encoding="utf-8") as out:
    out.write("\n\n".join(relevant_blocks))

print("Extraction of styles completed. Saved to scratch/carousel_extracted_styles.txt")
