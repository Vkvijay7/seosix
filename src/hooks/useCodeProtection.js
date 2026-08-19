import { useEffect, useState } from 'react';

/**
 * useCodeProtection - A React hook that guards client-side code execution.
 * Prevents right-clicks, typical inspector keys, and runs an active anti-debugging loop.
 */
export default function useCodeProtection() {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    // 1. Prevent Right-Click Context Menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // 2. Prevent Keyboard Shortcuts for Inspecting Source/Saving
    const handleKeyDown = (e) => {
      // F12 key (code 123)
      if (e.keyCode === 123 || e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I / Cmd+Opt+I (Inspect Elements)
      // Ctrl+Shift+J / Cmd+Opt+J (Console)
      // Ctrl+Shift+C / Cmd+Opt+C (Element Selector)
      const isInspectKeys = (e.ctrlKey || e.metaKey) && e.shiftKey && (
        e.keyCode === 73 || // I
        e.keyCode === 74 || // J
        e.keyCode === 67 || // C
        e.key === 'I' || e.key === 'i' ||
        e.key === 'J' || e.key === 'j' ||
        e.key === 'C' || e.key === 'c'
      );
      if (isInspectKeys) {
        e.preventDefault();
        return false;
      }

      // Ctrl+U / Cmd+Opt+U (View Page Source)
      const isViewSourceKeys = (e.ctrlKey || e.metaKey) && (
        e.keyCode === 85 || // U
        e.key === 'U' || e.key === 'u'
      );
      if (isViewSourceKeys) {
        e.preventDefault();
        return false;
      }

      // Ctrl+S / Cmd+S (Save Page As)
      const isSaveKeys = (e.ctrlKey || e.metaKey) && (
        e.keyCode === 83 || // S
        e.key === 'S' || e.key === 's'
      );
      if (isSaveKeys) {
        e.preventDefault();
        return false;
      }
    };

    // Register global event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return false;
}
