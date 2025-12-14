// Service Worker to enable PWA Installability
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
  // Pass through requests
});