importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.routing.registerRoute(
	({ request }) => request.destination === "image",
	new workbox.strategies.NetworkFirst()
);
// routing module register route tha matches all images
// (CacheFirst) then the pwa read from the cache instead of check the network if there is sth in there (but only in case like images dont changed often)
//  if change often then use NetworkFirst
