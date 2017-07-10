"use strict";
function setOfCachedUrls(e) {
  return e.keys().then(function (e) {
    return e.map(function (e) {
      return e.url;
    });
  }).then(function (e) {
    return new Set(e);
  });
}var precacheConfig = [["/index.html", "691cdf27d52560bcaf2cccfb104358dc"], ["/static/css/main.6472c6f9.css", "2f3d57406cccb1bf1ea3f4be6ec1cee5"], ["/static/js/main.a4fcd068.js", "e3e041322bf15ee54085cc8face4186d"], ["/static/media/SamsungOne-300.bae10944.woff", "bae10944d6e91f054942052293699fb6"], ["/static/media/SamsungOne-400.c6d604a8.woff", "c6d604a8322eea608e318f942462ee94"], ["/static/media/SamsungOne-600.6a756b3c.woff", "6a756b3c772f0a81378ac1c12777e17a"], ["/static/media/SamsungOne-700.6155d98a.woff", "6155d98a83b5cd468bb535ac4fb8fd14"], ["/static/media/SamsungOne-800.d37ce275.woff", "d37ce275e272185348ea4d43223dbb50"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function (e, t) {
  var n = new URL(e);return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString();
},
    cleanResponse = function (e) {
  return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (t) {
    return new Response(t, { headers: e.headers, status: e.status, statusText: e.statusText });
  }) : Promise.resolve(e);
},
    createCacheKey = function (e, t, n, r) {
  var a = new URL(e);return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), a.toString();
},
    isPathWhitelisted = function (e, t) {
  if (0 === e.length) return !0;var n = new URL(t).pathname;return e.some(function (e) {
    return n.match(e);
  });
},
    stripIgnoredUrlParameters = function (e, t) {
  var n = new URL(e);return n.hash = "", n.search = n.search.slice(1).split("&").map(function (e) {
    return e.split("=");
  }).filter(function (e) {
    return t.every(function (t) {
      return !t.test(e[0]);
    });
  }).map(function (e) {
    return e.join("=");
  }).join("&"), n.toString();
},
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
  var t = e[0],
      n = e[1],
      r = new URL(t, self.location),
      a = createCacheKey(r, hashParamName, n, /\.\w{8}\./);return [r.toString(), a];
}));self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(cacheName).then(function (e) {
    return setOfCachedUrls(e).then(function (t) {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (n) {
        if (!t.has(n)) {
          var r = new Request(n, { credentials: "same-origin" });return fetch(r).then(function (t) {
            if (!t.ok) throw new Error("Request for " + n + " returned a response with status " + t.status);return cleanResponse(t).then(function (t) {
              return e.put(n, t);
            });
          });
        }
      }));
    });
  }).then(function () {
    return self.skipWaiting();
  }));
}), self.addEventListener("activate", function (e) {
  var t = new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function (e) {
    return e.keys().then(function (n) {
      return Promise.all(n.map(function (n) {
        if (!t.has(n.url)) return e.delete(n);
      }));
    });
  }).then(function () {
    return self.clients.claim();
  }));
}), self.addEventListener("fetch", function (e) {
  if ("GET" === e.request.method) {
    var t,
        n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);(t = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, "index.html"), t = urlsToCacheKeys.has(n));!t && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (n = new URL("/index.html", self.location).toString(), t = urlsToCacheKeys.has(n)), t && e.respondWith(caches.open(cacheName).then(function (e) {
      return e.match(urlsToCacheKeys.get(n)).then(function (e) {
        if (e) return e;throw Error("The cached response that was expected is missing.");
      });
    }).catch(function (t) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request);
    }));
  }
});