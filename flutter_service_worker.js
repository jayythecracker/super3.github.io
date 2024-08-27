'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "dd496e8b72d4bd7236d76deb376c0345",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4975952399d90533b442eb2c860f1a90",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "921447c546bf71235a753634c2ca5a2b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77924120873ecff16421363f07f2105c",
".git/logs/refs/heads/master": "77924120873ecff16421363f07f2105c",
".git/logs/refs/remotes/origin/master": "94c3f54d921029a0e74696466e293dfa",
".git/objects/00/9e6eab174fa3ffe80e6a5c0287125fa828850d": "aac357d9cf77836905a2e842fd4e6d70",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/51b0e6076474502631d00a87620310a4ff1436": "2d27dabf89b55a1bbf6d88963338aab1",
".git/objects/0b/3c05878d7b373ee243a57cb4f9954b54742b63": "e8ae3d4a1970569fa5278c2bbf2f8bdf",
".git/objects/1b/df420ea78a81b99411f4d4bbb08ae3791183b5": "0f7f153b0507b5ff317a2b115d81da13",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7752413dbbfb30159b6e2ae86c9462496dc308": "9f316d6d8a39b0a555566a2b1bbb5bc7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2c/58a5c5c156969a2415437645f8dc58560889ad": "f99c3a04c818721068eaef63af102b0d",
".git/objects/2e/d42ba7de7ab9b4c48bf4bbb130f3ee6162ddeb": "caee3f0ad234e4237a2c7c4471156e84",
".git/objects/31/c2f7e358afe95a6be84e420489e391a7dc2c78": "9325e0a4eac88aee280060616648c043",
".git/objects/33/df19804d458b2e8d6a71b8d772135016cac942": "0d53a604b32ca221c4f1d15184bad3a5",
".git/objects/3e/5a7dd91c1f5b037d86ceb26445be84e71b3b29": "30954dd3b061a1e91aacc7527c2a89d9",
".git/objects/3e/caa41e32f06e55d18e13a2bd053096edf3a0e9": "6a0d4747ee3258eaca86fa86a4cf743e",
".git/objects/41/6012656f94815f6338e00f5e369a110591454e": "5a91556430bab01ddf2c4f84d6812ad6",
".git/objects/42/effed1626a3e0887533e30bfffd2dec0c8bf2c": "aea73bc595b9822c146a2e146e7be59d",
".git/objects/43/4d80ad13d3ee28edf9c203ac9d44fa04e310b0": "22d8b85c89690e8c7ee93ee7973a8d79",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/027c8495350d6adb11a72d1612f2aa8b4f995a": "347172ba129b7426acb9758a070b6ad4",
".git/objects/55/276d4726f72338dd27c6e93bbc19f18d0785b1": "d62a8cf2b34431ccef3ea813d61a6d1f",
".git/objects/59/66ea01482c2e2d3a1db498a42860320b1e7771": "a0324a61f870e708f60e9d5716997b35",
".git/objects/5a/2987135844c6f50b5f1d6e9230e43548452f62": "95a340107133f5171b560049670383f3",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/60/cbc0b51de5d741aa2b285966afdc30de08ffda": "f236ef0d706941d2a285ca4588258acf",
".git/objects/62/b8f8248c5931332c716a8ec5f8593cede6abc7": "907dab9a4d85e84ba39c87a42db303bd",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/00120e30103eb22d9af41781501b6efa4881c3": "076d4599360ae024bc44da06c63af423",
".git/objects/6f/28a77f800fe61d00aa37f091582cbcc8f48c58": "bf69f718a7b1a79284bf53534dd2a6bd",
".git/objects/71/83e5af3edb3473b6b489d365fdf6acca910d39": "dd7736847539543e7f7da523c3ebf7aa",
".git/objects/74/920eb19c2d4e5323a8336d44a375d5713143b2": "cb5f9e5e9970cfa594e58b9c75f8d9e8",
".git/objects/75/356c46a216a858cf84249d82585e7180bfaa05": "9f95a7221d92ed00d9e2dc8cb6760448",
".git/objects/77/81bd20526c89c471c5b549ba37b192894d5786": "709fb543a2b19a56ed77175d1ede9738",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/b2f25a7c16d5bb7cfbe01f932d38f109b0f0a7": "617933c440ac688ba081d60a6fdcd647",
".git/objects/83/f74a302a7b974e687a9731cb9d97c5c34b8b0e": "80efe98b8c72973904e4d877e79ce788",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/4f7ee7753123fc90f1b00ed6975bcdc79ad97c": "b25885fecbf4d94f55289f0693b39bdf",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/a7627f47f5195c90db9c8cef80ffb4f345b029": "f6b14228ee61ec4f43faaf321f3839d5",
".git/objects/a3/1b26764a7fcc8ab88dc4e72170813611693041": "2bc75737fcba71b5a509fdaf54f9c588",
".git/objects/a3/d390228e03964c9b4443903b8e59baed978aaf": "1910461f2d414c90a674bb72c120059d",
".git/objects/a7/35a5c0b7c5105977bc298d5ceb3b9ab860384e": "49d8bf7d52ddda93620dda9ee4bef817",
".git/objects/ad/b77171b65b13c26b68fa72a0e4577bd2f1e7f4": "e84c1d566e62d516bae3510129175128",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/f00dcf4b32b58a614c36dc6c8431f95278fcf1": "7fca9c92cd6bb2fe429ba64b74914de9",
".git/objects/c6/a855470bfcbb72d5fa3a8b6215c1214be3bf74": "8e6bab6db0f07b45f7365a76bd109e45",
".git/objects/c7/1cdc8197b58bae40a05e5ca29fe8c408567ca7": "1fde1ba901b97de73592db5d53e273d6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/9fe075464e166e04d09066787cfa4341b35d5d": "cc648800822b0169a921cbf1335a7752",
".git/objects/cc/61fea88730ae26697b24801907e98357a3ab7d": "35df68a87648343923089703f764f47a",
".git/objects/d0/e757f5e5dd3ee51cb5d45e404f3161e56e45f4": "3ffe2a6d680bcdeb6f056236f67a5872",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/79592989d3622b1b494477da828575a182aad7": "19d12d364a75c6a6dc495600af36da47",
".git/objects/e2/45a279c8a56db87737fa713dd9813666d2ddfb": "412d54751a6501d343c881e4b5ea3cdc",
".git/objects/e4/f4e672e4a5789131b0f0c9ad86bb7cd305f32a": "7a1aaf14a7bafbd244d08c5a577fd366",
".git/objects/e9/5add26a29891ae132c0d9a75ce372b8453c32c": "3af6573468292bd50e2d7c469dbd6a3b",
".git/objects/eb/4811444d2fa19ef0a5fbfc7cec2bfeb912f467": "73bf35ccc963fb77db9424e7419371dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a697d761512c1e5628314a0b3d3340bb0f6798": "bc1878191819a81ea1d8a4c949d0bc99",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f8/584eee7eca51604aa5636ca5d0b9ed061f5cfe": "a3718d03119789fa4477b06c58370b08",
".git/objects/fa/3575addbc7bd00041ffd31a1c2e36c6eb78fa6": "d456927806cdee9abbc42ea9b5fe3206",
".git/objects/fd/4723a692dbf78d24d7c9d7841022d90298547a": "be0a8447a35490212b0c3e156ea87803",
".git/objects/fd/d7f9a6d6d119045befcaebbc1a93ed1abd1dae": "d9120fe5f802791bad536a84831deb78",
".git/objects/ff/b5ee16e97bf69927a817ce6abbbfe8e58eb60b": "412319f75f52b8eb727e026ec26c936f",
".git/refs/heads/master": "277323fbec0e55cd7ca1724832b4a891",
".git/refs/remotes/origin/master": "012bc57f1dc5798fcbbd930d941c27c4",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "358066623b5c7e388dfe02fb9c1f7895",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "b85fedc601db924025e7936d851e7e7e",
"canvaskit/canvaskit.wasm": "afe4e31e8f3adb944a0883a694706404",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "9f2dfa8c181a437290aa2b58e55da15d",
"canvaskit/chromium/canvaskit.wasm": "938f6103658d67ab8971f6225502b8af",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "c6f605aa7f865f54f11010319bec4307",
"canvaskit/skwasm.wasm": "cae92e9f0585c2ecccb9fae9062349f8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b16e9c3b8b80142891bdcb8ea4458959",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "40f7e470b8daaa680a65f9bdf2de50b8",
"/": "40f7e470b8daaa680a65f9bdf2de50b8",
"main.dart.js": "95d25ad3078280696d2120d33d0b766b",
"manifest.json": "033c98cd5773c2bd03b19268837695a0",
"sqflite_sw.js": "b77db3b7f5651eb09e1cf0068e3ab0e9",
"sqlite3.wasm": "9d4d8aa7522ca11c72eb148d1f23a3df",
"version.json": "9e165a9c0aff2c96f9468e46670c23e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
