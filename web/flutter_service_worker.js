'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "25b68e3c776863f54c5f7e52e4698c8e",
"index.html": "888df1f27c25fd6d851538264034294e",
"/": "888df1f27c25fd6d851538264034294e",
"main.dart.js": "72890656cbff0165fe8eb7b02c4faf98",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f767d02394a9dc936ed0d45bcbcb9b0a",
"assets/AssetManifest.json": "2aed46525aea3a2e0ba0246c32dc559b",
"assets/NOTICES": "c7e8416b904fb64005efd1173de9e052",
"assets/FontManifest.json": "cd1f2752c13d5247b0244d75c84a3959",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/NanumBrushScript-Regular.ttf": "b1ce4cd13e96c14fa23147273b48d523",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/person_default.png": "f45233bd4861ddfc6c70258993771626",
"assets/assets/icon.png": "9d375cf644663040c14f3d35a377c5bf",
"assets/assets/home.svg": "937a3668c976b29c910f20a40571871c",
"assets/assets/tessdata/pdf.ttf": "7d6fcd462e96e4ae60b99f64ff51a4c5",
"assets/assets/tessdata/OCRB.traineddata": "b78255274ae123c4b027bf202f1ddd06",
"assets/assets/tessdata/eng.traineddata": "d1be414fbb296b3ad777bfca655e194e",
"assets/assets/tessdata/kor_vert.traineddata": "57c6c252460ad7df13fc5777ed6a0896",
"assets/assets/tessdata/kor.traineddata": "bb4afb0bb0f1731bf547e0467e00b96a",
"assets/assets/tessdata/financial.traineddata": "a7b81b2bec635f13b7eca4f340007285",
"assets/assets/card/card_ic_sme.png": "bb814af1883b6993d6bdc6df426f0a12",
"assets/assets/card/card_ic_lotte.png": "7ef7f1da3cef0852d321aee2a676f977",
"assets/assets/card/card_ic_sbi.png": "bd05f342dc8a13986ad8ea1dea011d6c",
"assets/assets/card/card_ic_ur.png": "8e420d349ca7520964205300be8f8166",
"assets/assets/card/card_ic_nh.png": "8e0838afe9e2e1f25658b079348588b4",
"assets/assets/card/card_ic_sinh.png": "98eab849c00a3c1a2b2eff125bc9f5a2",
"assets/assets/card/card_ic_kb.png": "dcfb76b1922e808afa2e874cb6d7b61f",
"assets/assets/card/card_ic_hn.png": "d6f009178406252d8e107e075001510a",
"assets/assets/card/card_ic_ss.png": "f01c84816dfce303bd604a5c61ef1b58",
"assets/assets/card/card_ic_kakao.png": "c0fc620db2715a9a247bab83c36ea64e",
"assets/assets/card/card_ic_eh.png": "e39dc1fb67ee33ae3b835f728725e113",
"assets/assets/card/card_ic_ibk.png": "925a47ddeaf125414d6890d85d0a08c0",
"assets/assets/card/card_ic_sc.png": "739a7fed57c496f44a16c1447c47f68e",
"assets/assets/card/card_ic_jb.png": "7b5145d0592e89d58ffef952f7fe318e",
"assets/assets/card/card_ic_hd.png": "9aed1410f7f08d6ea98d3bfd2a31cebb",
"assets/assets/card/card_ic_dgb.png": "cdfaf5b2c56c7bfc08bc921d0e89a4a5",
"assets/assets/card/card_ic_gj.png": "0fcb05130b40a3ad19135a627c46ecc0",
"assets/assets/card/card_ic_k_bank.png": "ae60c95ea64b7b2afca8b899b2e7bf85",
"assets/assets/card/card_ic_sh.png": "41b23782f10762c1b6b92e1eccd5c9fd",
"assets/assets/card/card_ic_bnk.png": "63042c4a8dc204cf0b787667d2d41601",
"assets/assets/card/card_ic_ct.png": "44a47b4671718ff9db7b9ac55a5ca854",
"assets/assets/card/card_ic_kdb.png": "b3d99156f7514f737669e68a4f45b99c",
"assets/assets/card/card_ic_suh.png": "4ed90bd800be406cf11f0a936c2bb835",
"assets/assets/card/card_ic_ucg.png": "2d33176c22d787e744dbf41391be390e",
"assets/assets/card/card_ic_bc.png": "53498c920e7652ee1bc5f89d1bc4eceb",
"assets/assets/space.png": "4d4d68a5a7d64873ec451c559940264b",
"assets/assets/test_360.jpeg": "4e4892a40e16ae0d31af885398ab1cf4",
"assets/assets/galaxy.png": "bf95b9ee89ad2d5839e01371889fad68",
"assets/assets/forest02.jpg": "51d41359582fe040f81f40b23250c5f0",
"assets/assets/eat_sydney_sm.jpg": "3804fd7d8268200b04ef598820712ec9",
"assets/assets/eat_new_orleans.jpg": "8a7f4d7088fe0fe3b7ce11a182ec15bc",
"assets/assets/eat_sydney.jpg": "13122001b042ff7b153e02ee73e9a6b1",
"assets/assets/eat_cape_town.jpg": "a690ef9b7efc23187c963c8d875ffacd",
"assets/assets/forest.jpg": "a78c3c766c7459624b20f01b3637fa89",
"assets/assets/ic_profile_signin.svg": "db06dd8c7e9d69abba6230a9abdd9010",
"assets/assets/img_logo_04.svg": "bf2f597b42cbc8436055727b8dbbeb56",
"assets/assets/tessdata_config.json": "aba5ce209141265e2cd4fe9c8e352c0b",
"assets/assets/sea.jpg": "b0fc50144d23198575f1b278692fc44a",
"assets/assets/img_logo_02.svg": "a40f55e41f3ee4a4ddcf86635af4721b",
"assets/assets/ufo.png": "fa578cc535483411ed140506fe9d253d",
"assets/assets/test_ocp.png": "796f96c7783489f209da5280c20a5ee2",
"assets/assets/img_logo_03.svg": "5b4972663de8c316ad8c049c63768d23",
"assets/assets/img_logo_01.svg": "199d1768de23b7e09a2b5ccf7cf28645",
"assets/assets/loding.gif": "96cbeaa2b2d1052056b4c78815774575",
"assets/assets/image_close.png": "cedacd033fc0dd51f0d3c8cc44a5b609",
"assets/assets/eat_cape_town_sm.jpg": "7d0bc0ee785a2c3cc4064fae0834fadf",
"assets/assets/arrow_icon.svg": "780c6ed2616a1c36da040ccc18605d1c",
"assets/assets/camera.png": "22e58579f4232c8fbf0550cac9937e18",
"assets/assets/eat_new_orleans_sm.jpg": "75ea180c478714d6fde3d89ac35de62a",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
