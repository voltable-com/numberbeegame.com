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
define(['./workbox-d2a14864'], (function (workbox) { 'use strict';

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
    "url": "assets/index.2584db01.css",
    "revision": null
  }, {
    "url": "favicon-114.png",
    "revision": "710eb9a472b55cffe53fb609f883404d"
  }, {
    "url": "favicon-120.png",
    "revision": "6b46c386aa7cbc64b41c9d66d095d6e4"
  }, {
    "url": "favicon-144.png",
    "revision": "558e1b35b6d15ecaba5a5325ad13c932"
  }, {
    "url": "favicon-152.png",
    "revision": "653defb8d9c22dfeabf8079c8ba0f704"
  }, {
    "url": "favicon-16.png",
    "revision": "36887cd22730fe299cd31d4f0777bebe"
  }, {
    "url": "favicon-180.png",
    "revision": "192320645ebb38f26094b5dfce8812af"
  }, {
    "url": "favicon-192.png",
    "revision": "0fd9d030cfce6b98e4b5aad7fff3c8bf"
  }, {
    "url": "favicon-250.png",
    "revision": "05af6e46b1e8822c7f135e5c09b97f69"
  }, {
    "url": "favicon-32.png",
    "revision": "a9f289cd9a937436cdf6f4f321de028a"
  }, {
    "url": "favicon-325.png",
    "revision": "4eaa2e72d0b345cca9cdda4af02c6bf6"
  }, {
    "url": "favicon-48.png",
    "revision": "44d9949debdd9d7cb8aab462331e2a9a"
  }, {
    "url": "favicon-512.png",
    "revision": "f1bf3171821bbaa50da338421b9c73e6"
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
    "revision": "fb4eca39de0feb1f9d9471fdc77dc0d9"
  }, {
    "url": "favicon.ico",
    "revision": "e97372a68b4a9cd19e5b235734f7c7f1"
  }, {
    "url": "favicon.png",
    "revision": "60087111bf538172d51ced968434791b"
  }, {
    "url": "favicon.svg",
    "revision": "83d0c54b2679022773a1ae4acfa08952"
  }, {
    "url": "humans.txt",
    "revision": "c0c62f629982b1e05bb101814f89df13"
  }, {
    "url": "img/numberbeegame.png",
    "revision": "1b08fd675c565a74daa0053b8a744df3"
  }, {
    "url": "/",
    "revision": "a4e2f92910e553760b154e3a6cf34a98"
  }, {
    "url": "js/a.js",
    "revision": "b8eb5afe6c79d1f23d45e862d925064b"
  }, {
    "url": "js/m.js",
    "revision": "efc2e6a0bca9e982dc3fee54bccd4f1f"
  }, {
    "url": "registerSW.js",
    "revision": "6a0a0c8ba795b804f5fac2886a79f79c"
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
    "revision": "1efc9c2294438bccf3822945f5f9b766"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/")));

}));
