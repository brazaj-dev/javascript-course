'use strict';
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
