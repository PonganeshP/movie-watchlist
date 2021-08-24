// eslint-disable-next-line no-undef
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
);

// This will work!
// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  // eslint-disable-next-line no-undef
  new workbox.strategies.CacheFirst()
);
