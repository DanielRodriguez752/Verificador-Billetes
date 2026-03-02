const CACHE_NAME = "verificador-v3";

const urlsToCache = [
  "/Verificador-Billetes/",
  "/Verificador-Billetes/index.html",
  "/Verificador-Billetes/manifest.json",
  "/Verificador-Billetes/icon-192.png",
  "/Verificador-Billetes/icon-512.png",
  "/Verificador-Billetes/rango.js"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});