/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3632007c'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/index.fca46991.css",
    "revision": null
  }, {
    "url": "favicon-114.png",
    "revision": "bc3357d463ea3caada39e3ab93f124a7"
  }, {
    "url": "favicon-120.png",
    "revision": "28e1290ca6d763a2ca326fc347219985"
  }, {
    "url": "favicon-144.png",
    "revision": "88832d870415c920fff86721d7f12ce2"
  }, {
    "url": "favicon-152.png",
    "revision": "c03d39fc7f5ba017146c3058ce9326b2"
  }, {
    "url": "favicon-16.png",
    "revision": "36887cd22730fe299cd31d4f0777bebe"
  }, {
    "url": "favicon-180.png",
    "revision": "bb543d4e185ff07d7da7e79fbb6cca89"
  }, {
    "url": "favicon-192.png",
    "revision": "0ff8a157563dd1b40ed8949659d22336"
  }, {
    "url": "favicon-250.png",
    "revision": "9bbe20176de33df8fa902d44e4649bb9"
  }, {
    "url": "favicon-32.png",
    "revision": "a9f289cd9a937436cdf6f4f321de028a"
  }, {
    "url": "favicon-325.png",
    "revision": "bf9b6df6b645743ba98e5c68a11d9fb3"
  }, {
    "url": "favicon-48.png",
    "revision": "44d9949debdd9d7cb8aab462331e2a9a"
  }, {
    "url": "favicon-512.png",
    "revision": "ddfa1af0e3619e013d35033a4c42104f"
  }, {
    "url": "favicon-57.png",
    "revision": "4452976c752b56a571f0aa58861128a3"
  }, {
    "url": "favicon-60.png",
    "revision": "79d7a314f32b74d74221096e7d6b8137"
  }, {
    "url": "favicon-72.png",
    "revision": "7f185eef6d165173886f4cfe4e8216d7"
  }, {
    "url": "favicon-76.png",
    "revision": "c8d4a0898094b3ec86027cf3e5e5bf11"
  }, {
    "url": "favicon-96.png",
    "revision": "aa25b9068594a654c9fa72f0aa67bcaf"
  }, {
    "url": "favicon.ico",
    "revision": "e97372a68b4a9cd19e5b235734f7c7f1"
  }, {
    "url": "favicon.png",
    "revision": "60087111bf538172d51ced968434791b"
  }, {
    "url": "favicon.svg",
    "revision": "582b185ad3098aaf9196648dcea8fd84"
  }, {
    "url": "humans.txt",
    "revision": "c0c62f629982b1e05bb101814f89df13"
  }, {
    "url": "img/numberbeegame.png",
    "revision": "0b5b422335a62b966f0ad9f371924f2a"
  }, {
    "url": "/",
    "revision": "b9c381037e7a11b79a78f58332ee4b09"
  }, {
    "url": "js/a.js",
    "revision": "abb64a8baaae5976882416ce3c4563be"
  }, {
    "url": "js/m.js",
    "revision": "46674febf7c49f8965d54f32a45fb693"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "favicon.svg",
    "revision": "582b185ad3098aaf9196648dcea8fd84"
  }, {
    "url": "favicon-192.png",
    "revision": "0ff8a157563dd1b40ed8949659d22336"
  }, {
    "url": "favicon-512.png",
    "revision": "ddfa1af0e3619e013d35033a4c42104f"
  }, {
    "url": "manifest.webmanifest",
    "revision": "d0902d049c469cf8ea2c0e5b6e4d0542"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/")));

}));
