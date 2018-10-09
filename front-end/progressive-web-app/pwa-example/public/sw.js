const cacheName = 'pwa-example';
const filesToCache = [
    './index.html'
];

self.addEventListener('install', (e) => {
    console.log('[ServiceWorker] install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('[ServiceWorker] activate');
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
    console.log('[Service Worker] fetch');
});