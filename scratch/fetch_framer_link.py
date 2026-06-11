import urllib.request
import urllib.error

url = "https://framer.com/m/Book-AFRs.js@mxOP9zughWqzCr7yH17p"
print(f"Requesting {url}...")
try:
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        # Print first 1000 characters and look for metadata
        print("Response Success!")
        print(html[:2000])
except Exception as e:
    print(f"Error fetching URL: {e}")
