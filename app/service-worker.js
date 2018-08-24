/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/css/app.css","c16c9c9658c944b580fb93184ce93afa"],["/data/pets.json","4cd41126b8aac40b89541398d30483aa"],["/images/city-street-night.jpg","78156a7d03ba8b5d860671caef12c4ab"],["/images/city-street-night720x720.jpg","74515cf6acd6f5c79da1caa2949fc037"],["/images/icons/icon-128x128.png","bfda7c45a93753dd9b9984843bdf4761"],["/images/icons/icon-144x144.png","b21985449b4196c26166d40061ad4d94"],["/images/icons/icon-152x152.png","e767cdd48a6c6732ebad0273ec947447"],["/images/icons/icon-192x192.png","fbca206388cf36be9d6001abb5cd885b"],["/images/icons/icon-256x256.png","9551a75f83dec16df6dc48c3a6dab90d"],["/images/icons/icon-32x32.png","d55cf07eee423e441ea6475ab883148f"],["/images/icons/icon_reload.svg","f335e79828d92afbb64be2863f53372a"],["/images/pets/Bailey-523832647.jpg","8ebc82e01c0d2d43b5d89cc0bff246e3"],["/images/pets/Bailey-523832647_tn.jpg","f48d5ff83ce300bc8bbd5b688f684fa4"],["/images/pets/Casper-178870793.jpg","32bfb6133cbb72b19b023342a59d6560"],["/images/pets/Casper-178870793_tn.jpg","a990fcb79a35b670aec78795d86bc72f"],["/images/pets/Chip-519252509.jpg","9beb1a77c8e2f2187e5ed699bd5027b6"],["/images/pets/Chip-519252509_tn.jpg","8e5c99eded91219959361f3ed9229467"],["/images/pets/Chyna-545429720.jpg","bd5e9087cf65b66dc279f7b4784cdc21"],["/images/pets/Chyna-545429720_tn.jpg","f82f3d49442669b5922e051d1765093b"],["/images/pets/Cosmo-481057312.jpg","57aad8770dc9968bdb7f2037f7f20d9b"],["/images/pets/Cosmo-481057312_tn.jpg","ce4e40e9c708043dad4da773fc1af469"],["/images/pets/Felix-591830956.jpg","3ae1a405a1c8abc98212d8a70e213c95"],["/images/pets/Felix-591830956_tn.jpg","57b54b0f48361c5c3835b1630da1fbb7"],["/images/pets/Fluffy-483561506.jpg","2f852f80bd2910fd362f4e5c2437205c"],["/images/pets/Fluffy-483561506_tn.jpg","d15da17eff7b9bf1de373d4d13c56ff1"],["/images/pets/Kiko-478801178.jpg","ee9cccc8c24fc84ead28e2740d83d235"],["/images/pets/Kiko-478801178_tn.jpg","516ee2919119b23f5b45e11a9ead4378"],["/images/pets/Lucky-519705168.jpg","cc348f1c3956210845ccf2a274d3b964"],["/images/pets/Lucky-519705168_tn.jpg","fe06af9878f752a1e42c1045cb79a493"],["/images/pets/Millie-586349302.jpg","d09737970717ae85c2ca13f44833aa38"],["/images/pets/Millie-586349302_tn.jpg","49300f7f4ee825900944b916cbf7c706"],["/images/pets/Nadalee-601919350.jpg","8d622a626ef6bc71aae98b60ec10c918"],["/images/pets/Nadalee-601919350_tn.jpg","ab1fa30f23df08d7b05eb116b2ddce1a"],["/images/pets/Nugget-499158128.jpg","42706d24c04de689b61dedf3f22d814a"],["/images/pets/Nugget-499158128_tn.jpg","f6ef3be77eea644c5caf0420deecfdde"],["/images/pets/Oddball-534210612.jpg","b74650f2d7689a103a146942f0f3dae8"],["/images/pets/Oddball-534210612_tn.jpg","171623b994eaa40f79a4955320f6e6ff"],["/images/pets/Pax-487576086.jpg","1cfb1f83a733ca651ef798595832b050"],["/images/pets/Pax-487576086_tn.jpg","8f6ab96662d7bafa565f8a673497c732"],["/images/pets/Pepe-505301170.jpg","12ee971e69746cf1e364a6c8d347cffb"],["/images/pets/Pepe-505301170_tn.jpg","7115be07e5bc2f1743494194e10b3b83"],["/images/pets/Rio-139983615.jpg","a811b10a402eab021951ca169f7d2357"],["/images/pets/Rio-139983615_tn.jpg","3957abdbdc712e0f2ad8e9bc183ab411"],["/images/pets/Sami-163271312.jpg","931912fec3a06b49edb7315bc26d42d5"],["/images/pets/Sami-163271312_tn.jpg","e67fd7a73312992d8d49696c946aae61"],["/images/pets/Scooter-587954386.jpg","5fc9faba68c6cac9462cb6d24e73edc2"],["/images/pets/Scooter-587954386_tn.jpg","c8f85090cdea6abfee8c6e960e58e619"],["/images/pets/Scout-482669440.jpg","89fa967e15b78f401894ccbb35667e9a"],["/images/pets/Scout-482669440_tn.jpg","67f6d1718f54343c4091cc250a78ee1c"],["/images/pets/Shadow-591817094.jpg","8acf8c92b0137d3c3c31791e1a145270"],["/images/pets/Shadow-591817094_tn.jpg","ff0958b4ec9e775d4a8be0561a0c3b4e"],["/images/pets/Squiggles-72970152.jpg","01bb866449a39115efa262444d5fa7c7"],["/images/pets/Squiggles-72970152_tn.jpg","cb89cea969536e688ba0c32d69971a65"],["/images/pets/Stich-56385517.jpg","a1b306abc5a6f8923f3e20ebc69743c5"],["/images/pets/Stich-56385517_tn.jpg","6a31397ba3ed6bb45a8223af6c1ed4d6"],["/images/pets/Tibbs-598156630.jpg","d271d4eb139860b9db24aa76cdba7240"],["/images/pets/Tibbs-598156630_tn.jpg","70a21ce02a233427dc5aca408fd6d89f"],["/images/pets/Wesley-122458883.jpg","3fab89e8ae02553faa884411c688b5e7"],["/images/pets/Wesley-122458883_tn.jpg","58745a4dc61cde05d6c63a6bc61cdfa3"],["/images/pets/Zera-599775030.jpg","b3c460db6224bcaa007d58eac8840590"],["/images/pets/Zera-599775030_tn.jpg","a140d1f173a9173c160bf9e80eb98c35"],["/images/wisdompetlogo.svg","f33fdeece0a89f3f3f9e03cbcab58985"],["/index.html","619a1f31e9f6028c6cbd6c6ab6698fd4"],["/js/app.js","ed87e5a9dcf06cb41f201bafbe708eda"],["/manifest.json","0d2e5c7cc164ebd53d44efab2d2aff07"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







