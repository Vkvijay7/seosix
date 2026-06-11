import os
import re

green_patterns = [
    re.compile(r'#1B3B22', re.IGNORECASE),
    re.compile(r'#132A18', re.IGNORECASE),
    re.compile(r'#1a3f22', re.IGNORECASE),
    re.compile(r'text-green', re.IGNORECASE),
    re.compile(r'bg-green', re.IGNORECASE),
    re.compile(r'#1B3B22', re.IGNORECASE),
]

src_dir = 'c:/Users/Windows/Desktop/se6/src'

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.jsx', '.css', '.js', '.html')):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                for i, line in enumerate(content.splitlines(), 1):
                    for pattern in green_patterns:
                        if pattern.search(line):
                            print(f"Match found in {file_path}:{i} -> {line.strip()}")
