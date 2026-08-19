import { useEffect } from 'react';

export default function useDynamicFavicon() {
  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      try {
        // Create a 32x32 canvas for the favicon size
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          // Clear canvas
          ctx.clearRect(0, 0, 32, 32);

          // Make clipping path for a perfect circle
          ctx.beginPath();
          ctx.arc(16, 16, 16, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          // Draw image stretched to cover the circle
          ctx.drawImage(img, 0, 0, 32, 32);

          // Convert canvas drawing to Data URL
          const faviconUrl = canvas.toDataURL('image/png');

          // Locate or create favicon link tag
          let link = document.querySelector("link[rel~='icon']");
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
          }
          
          // Update href with circular favicon
          link.type = 'image/png';
          link.href = faviconUrl;
        }
      } catch (error) {
        console.error('Failed to generate dynamic favicon:', error);
      }
    };

    img.onerror = (err) => {
      console.error('Failed to load logo image for favicon:', err);
    };

    // Load the SEOSIX logo from public directory.
    // We do NOT set crossOrigin = 'anonymous' because it is a local same-origin resource, 
    // and setting it causes CORS checks that fail on local servers and Edge browser.
    img.src = '/images/seosix_logo.jpg?v=1';
  }, []);
}
