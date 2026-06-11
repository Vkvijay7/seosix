import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Define solid tech stack SVG icons with authentic branding colors
const TechIcons = {
  html: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.618 9.873-.002.24-2.636L5.55 4.5l.7 7.89H15.6l-.323 3.585-3.3 1.057-3.26-.923-.21-2.36H6.15l.39 4.37 5.43 1.57 5.49-1.57.75-8.4H8.53z" fill="#E34F26"/>
    </svg>
  ),
  css: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.69 9.75h6.635l-.24 2.636-3.327.91-3.26-.923-.21-2.36H4.84l.39 4.37 6.747 1.908 6.797-1.908.625-7.013H7.42l-.23-2.62H19.7l.23-2.63H5.05l.48 5.37h1.66z" fill="#1572B6"/>
    </svg>
  ),
  js: (
    <svg className="w-7 h-7 rounded-sm" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
      <path d="M18.5 18c-.8 1-2 1.5-3.5 1.5-2.2 0-3.5-1.2-3.8-3h2.3c.2.8.7 1.2 1.5 1.2.7 0 1.2-.3 1.2-.9 0-.6-.5-.8-1.5-1.2l-.7-.3c-1.8-.7-2.8-1.6-2.8-3.3 0-1.8 1.4-3.1 3.4-3.1 1.8 0 3 .9 3.5 2.3h-2.2c-.3-.6-.7-.9-1.3-.9-.6 0-1 .3-1 .8 0 .5.3.7 1.2 1.1l.8.3c2 .8 3 1.7 3 3.5 0 .2 0 .4-.1.6zM9.2 14.5c-.3-.5-.7-.8-1.2-.8-.6 0-.9.4-.9 1.1v4.7H4.8V9.1h2.3v5.6c.4-.7 1.1-1.1 2.1-1.1 1.8 0 2.9 1.2 2.9 3.2v2.7h-2.3v-2.7c0-.9-.3-1.3-.6-1.3z" fill="#323330"/>
    </svg>
  ),
  react: (
    <svg className="w-7 h-7 animate-[spin_16s_linear_infinite]" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(0 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 12 12)"/>
      <circle cx="12" cy="12" r="1.5" fill="#61DAFB"/>
    </svg>
  ),
  node: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5a1.5 1.5 0 00-.75.2L2.75 6.2a1.5 1.5 0 00-.75 1.3v9a1.5 1.5 0 00.75 1.3l8.5 4.5a1.5 1.5 0 001.5 0l8.5-4.5a1.5 1.5 0 00.75-1.3v-9a1.5 1.5 0 00-.75-1.3l-8.5-4.5A1.5 1.5 0 0012 1.5zm-1.5 6.35l5 2.9v5.8l-5 2.9-5-2.9v-5.8l5-2.9zm1.5 1.73l-3 1.73v3.46l3 1.73 3-1.73V11.3l-3-1.73z" fill="#339933"/>
    </svg>
  ),
  next: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#000000"/>
      <path d="M19.5 6h-1.5v10.3l-10.7-11.8h-1.8v15h1.5v-10.3l10.7 11.8h1.8v-15z" fill="#ffffff"/>
    </svg>
  ),
  python: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient>
      <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient>
      <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
      <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
    </svg>
  ),
  pytorch: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <path fill="#EE4C2C" d="M100.1 38.3l-9.2 9.2c15.1 15.1 15.1 39.4 0 54.3-15.1 15.1-39.4 15.1-54.3 0-15.1-15.1-15.1-39.4 0-54.3l24-24 3.4-3.4V2L27.8 38.2C7.7 58.3 7.7 90.8 27.8 111s52.6 20.1 72.4 0c20.1-20.2 20.1-52.5-.1-72.7z"/>
      <circle fill="#EE4C2C" transform="rotate(-88.939 82.069 29.398) scale(.99997)" cx="82.1" cy="29.4" r="6.7"/>
    </svg>
  ),
  openai: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.3 10.3c.3-.8.4-1.6.4-2.4 0-3.3-2.7-6-6-6-.8 0-1.6.2-2.4.5C12.3 1 10.7 0 9 0 5.7 0 3 2.7 3 6c0 .8.2 1.6.5 2.4C1 9.4 0 11 0 12.8c0 3.3 2.7 6 6 6 .8 0 1.6-.2 2.4-.5 1 1.4 2.6 2.2 4.3 2.2 3.3 0 6-2.7 6-6 0-.8-.2-1.6-.5-2.4 2.5-1 3.8-2.6 3.8-4.3 0-.6-.1-1.1-.3-1.5z" fill="#00A24A"/>
    </svg>
  ),
  swift: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <path fill="#f05138" d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z"/>
      <path fill="#fefefe" d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.7 32.7 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5z"/>
    </svg>
  ),
  kotlin: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <defs>
        <linearGradient id="kotlin-grad" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774) scale(.1939)" gradientUnits="userSpaceOnUse">
          <stop offset=".003" stopColor="#e44857"/>
          <stop offset=".469" stopColor="#c711e1"/>
          <stop offset="1" stopColor="#7f52ff"/>
        </linearGradient>
      </defs>
      <path fill="url(#kotlin-grad)" d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0"/>
    </svg>
  ),
  flutter: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <g fill="#3FB6D3">
        <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
      </g>
      <path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"/>
      <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/>
    </svg>
  ),
  firebase: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <path fill="#ffa000" d="M17.474 103.276 33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39 6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714H17.474Z"/>
      <path fill="#f57c00" d="M71.903 64.005 54.955 31.913l-37.481 71.363Z"/>
      <path fill="#ffca28" d="M110.577 103.276 98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.714l-76.112 76.243 42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"/>
    </svg>
  ),
  figma: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"/>
      <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"/>
      <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"/>
      <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/>
      <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"/>
    </svg>
  ),
  framer: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <path fill="#0055FF" d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  ),
  premiere: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <path fill="#2A0634" d="M0 0h128v128H0z"/>
      <path fill="#E976B9" d="M0 0v128h128V0H0zm123 123H5V5h118v118z"/>
      <path fill="#E976B9" d="M69 47.1c-.1-9.4-7.8-16.9-17.2-16.8H33.3v58.5h9.6V67.5h8.3C61 67.4 69 59.3 69 49.4v-2.3zm-9.6 3c0 5-4.1 9.1-9.1 9.1h-7.4V38.5h7.4c5 0 9.1 4.1 9.1 9.1v2.5zM77.1 88.8V48.9s10.2-5.1 20.2-3.8v8.3s-7 0-10.1 1.3v34.2H77.1z"/>
    </svg>
  ),
  ae: (
    <svg className="w-7 h-7" viewBox="0 0 128 128">
      <path fill="#1F0740" d="M6.5 6.5h115v115H6.5z"/>
      <path fill="#D490C5" d="M0 0v128h128V0H0zm121.5 121.5H6.5V6.5h115v115z"/>
      <path fill="#D490C5" d="M103.5 59.2s-.6-14.6-16.5-14.6c-16 0-17.3 22-17.3 22v4.7S72.5 89.6 86 89.6s14.8-2.6 14.8-2.6v-8.1s-19.3 9.2-21.2-10h24v-9.7zm-9 2.4h-15s0-8.3 7.5-9.2c8.2 0 7.5 9.2 7.5 9.2zM50.5 29.9H38.4v3.8l-16 54.9h9.4l4.4-16.1H53l4.5 16.1h10.3L50.5 29.9zM38.2 63.1l6.4-24.5L51 63.1H38.2z"/>
    </svg>
  ),
  davinci: (
    <svg className="w-7 h-7" viewBox="0 0 24 24">
      <path fill="#1E3044" d="M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0z"/>
      <path fill="#FF3B30" d="M12.08 4.393c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864z"/>
      <path fill="#007AFF" d="M16.252 12.315a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001z"/>
      <path fill="#4CD964" d="M7.82 12.353a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z"/>
    </svg>
  ),
  analytics: (
    <svg className="w-7 h-7" viewBox="0 0 24 24">
      <path fill="#E37400" d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"/>
    </svg>
  ),
  pagespeed: (
    <svg className="w-7 h-7" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.363 1.636H1.635C.732 1.636 0 2.37.001 3.273L0 20.727v.003c0 .903.733 1.634 1.635 1.634h20.73c.904 0 1.635-.734 1.635-1.637V3.273c.016-.89-.76-1.64-1.637-1.637zM3.979 2.886c.492-.507 1.279.28.77.772-.491.508-1.278-.279-.77-.771zM1.8 2.89c.507-.509 1.28.265.772.771-.493.502-1.274-.28-.772-.771zm21.7 17.838c.012.611-.524 1.148-1.137 1.136H1.635A1.137 1.137 0 0 1 .5 20.727L.501 4.91H23.5v15.819zM11 16.159l5.946-4.577c.235-.2.576.129.389.372l-.002-.002-3.936 6.35a1.638 1.638 0 0 1-2.448.405c-.785-.668-.811-1.835.05-2.548zm4.763-.75c.09-.168 2.002-3.181 2.06-3.35 2.056 1.813 3.029 4.382 2.898 7.026h-3.819c.073-1.39-.29-2.678-1.139-3.676zm-8.679 3.682H3.278c-.357-7.022 7.148-11.735 13.39-7.92l-3.461 2.618c-3.3-.762-6.364 1.71-6.123 5.302z"/>
    </svg>
  ),
  semrush: (
    <svg className="w-7 h-7" viewBox="0 0 24 24">
      <path fill="#FF642D" d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"/>
    </svg>
  )
};

const services = [
  {
    title: "Web Development",
    tag: "Engineering",
    hook: "Modern, responsive websites that engage users and drive conversions.",
    techs: ['html', 'css', 'js', 'react', 'node', 'next'],
    techNames: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Next.js'],
    bullets: [
      "High-performance, scalable architectures",
      "Seamless frontend to backend integration",
      "Modern UI/UX with lightning-fast speeds"
    ]
  },
  {
    title: "SEO Optimization",
    tag: "Visibility",
    hook: "Search visibility strategies that put your brand in front of the right audience.",
    techs: ['analytics', 'pagespeed', 'semrush'],
    techNames: ['Google Analytics', 'PageSpeed', 'SEMrush'],
    bullets: [
      "Search engine visibility & organic growth",
      "In-depth technical audits & keyword strategies",
      "Optimized performance & page load speeds"
    ]
  },
  {
    title: "Video Editing",
    tag: "Creative",
    hook: "Cinematic storytelling that captivates audiences and elevates your brand.",
    techs: ['premiere', 'ae', 'davinci'],
    techNames: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    bullets: [
      "Cinematic visual storytelling & high engagement",
      "Short-form content optimized for social media",
      "Premium sound design & post-production effects"
    ]
  },
  {
    title: "App Development",
    tag: "Mobile",
    hook: "Stunning native & cross-platform apps built for scale and delight.",
    techs: ['swift', 'kotlin', 'flutter', 'firebase'],
    techNames: ['Swift', 'Kotlin', 'Flutter', 'Firebase'],
    bullets: [
      "Stunning native & cross-platform mobile apps",
      "Intuitive UX with secure, robust architectures",
      "Seamless App Store & Play Store deployment"
    ]
  },
  {
    title: "AI Solutions",
    tag: "Intelligence",
    hook: "Smart automation and machine learning that transform how you work.",
    techs: ['python', 'pytorch', 'openai'],
    techNames: ['Python', 'PyTorch', 'OpenAI'],
    bullets: [
      "Smart workflow automation & model integration",
      "Custom LLMs, agents, & machine learning",
      "Advanced data analysis & smart algorithms"
    ]
  },
  {
    title: "UI/UX Design",
    tag: "Product Design",
    hook: "Immersive interfaces and design systems that users love to interact with.",
    techs: ['figma', 'framer'],
    techNames: ['Figma', 'Framer'],
    bullets: [
      "Immersive interfaces & interactive flows",
      "Cohesive, scalable digital design systems",
      "Conversion-optimized premium user experiences"
    ]
  }
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const techCardsRef = useRef(null);
  const activeIndexRef = useRef(0);

  // Scroll-driven service activation — pin the section and cycle through services
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalServices = services.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${totalServices * 100}%`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * totalServices),
            totalServices - 1
          );
          if (activeIndexRef.current !== newIndex) {
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
          }
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Animate right-side content when active service changes
  useEffect(() => {
    const content = contentRef.current;
    const cards = techCardsRef.current;
    if (!content || !cards) return;

    // Fade out then in
    const tl = gsap.timeline();
    tl.to(content, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: 'power2.in'
    })
    .set(content, { y: -20 })
    .to(content, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power3.out'
    });

    // Stagger tech cards
    const cardEls = cards.querySelectorAll('.service-tech-card');
    if (cardEls.length) {
      gsap.fromTo(cardEls,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.15
        }
      );
    }
  }, [activeIndex]);

  const active = services[activeIndex];

  return (
    <section id="services" ref={sectionRef} className="relative bg-[#FFF8E7] overflow-hidden h-screen">
      {/* Section Header */}
      <div className="w-full px-6 md:px-16 pt-20 pb-6 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[3px] text-[#1B1B1B]/40 uppercase font-custom">(Services)</span>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-[#1B1B1B]"></span>
          <span className="w-2 h-2 rounded-full bg-[#1B1B1B]"></span>
        </div>
        <a
          href="#contact"
          className="bg-[#1B1B1B] text-[#FFF8E7] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#DC143C] transition-colors duration-300 font-custom"
        >
          Get Started
        </a>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
        {services.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-500 ${
              activeIndex === i ? 'h-8 bg-[#DC143C]' : 'h-1.5 bg-[#1B1B1B]/20'
            }`}
          />
        ))}
      </div>

      {/* Main Split Layout */}
      <div className="flex flex-col md:flex-row w-full px-6 md:px-16 pb-20 gap-8 md:gap-0" style={{ height: 'calc(100vh - 140px)' }}>

        {/* Left Column — Service List */}
        <div className="w-full md:w-[45%] flex flex-col justify-center">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className={`flex items-baseline gap-3 py-3 md:py-4 transition-all duration-500 ${
                activeIndex === index ? 'opacity-100' : 'opacity-20'
              }`}>
                {/* Number */}
                <span className={`text-xs font-medium tracking-wider transition-colors duration-500 ${
                  activeIndex === index ? 'text-[#DC143C]' : 'text-[#1B1B1B]/40'
                }`} style={{ fontFamily: 'var(--font-custom)', minWidth: '36px' }}>
                  ({String(index + 1).padStart(3, '0')})
                </span>

                {/* Title */}
                <h2 className={`font-black uppercase leading-none tracking-tight transition-all duration-500 ${
                  activeIndex === index
                    ? 'text-[#1B1B1B] text-3xl md:text-5xl lg:text-7xl'
                    : 'text-[#1B1B1B]/50 text-2xl md:text-4xl lg:text-5xl'
                }`} style={{ fontFamily: 'var(--font-school)' }}>
                  {service.title}
                </h2>
              </div>

              {/* Separator line */}
              {index < services.length - 1 && (
                <div className={`h-px transition-colors duration-500 ${
                  activeIndex === index ? 'bg-[#DC143C]/20' : 'bg-[#1B1B1B]/8'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Right Column — Content Card */}
        <div className="w-full md:w-[55%] flex flex-col justify-center md:pl-12 lg:pl-20">
          <div ref={contentRef}>
            {/* Tag */}
            <div className="mb-6">
              <span className="inline-block text-xs font-bold tracking-[3px] text-[#DC143C] uppercase bg-[#DC143C]/8 px-4 py-2 rounded-full" style={{ fontFamily: 'var(--font-custom)' }}>
                {active.tag}
              </span>
            </div>

            {/* Hook Description */}
            <p className="text-[#1B1B1B]/70 text-base md:text-lg font-medium mb-8 max-w-md leading-relaxed" style={{ fontFamily: 'var(--font-custom)' }}>
              {active.hook}
            </p>

            {/* Tech Cards Grid */}
            <div ref={techCardsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {active.techs.map((techKey, idx) => (
                <div
                  key={techKey}
                  className="service-tech-card group/card bg-white border border-[#1B1B1B]/8 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-[#DC143C]/30 hover:shadow-lg hover:shadow-[#DC143C]/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FFF8E7] rounded-xl group-hover/card:bg-[#DC143C]/5 transition-colors duration-300">
                    {TechIcons[techKey]}
                  </div>
                  <span className="text-xs font-bold text-[#1B1B1B] tracking-wide uppercase" style={{ fontFamily: 'var(--font-custom)' }}>
                    {active.techNames[idx]}
                  </span>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-3">
              {active.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1B1B1B]/60 text-sm font-medium" style={{ fontFamily: 'var(--font-custom)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC143C] mt-1.5 flex-shrink-0"></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Services);
