import urllib.request
import urllib.error

images = [
    "/images/civil.jpg",
    "/images/takewake.jpg",
    "/images/tekmonk.jpg",
    "/images/smartbill.png"
]

for img in images:
    url = f"http://localhost:5174{img}"
    try:
        with urllib.request.urlopen(url) as response:
            print(f"{img}: status={response.status}, Content-Type={response.getheader('Content-Type')}, length={response.getheader('Content-Length')}")
    except Exception as e:
        print(f"Error {img}: {e}")
