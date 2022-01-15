/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8abfda24664157aff11d9f04ee63ce02"
  },
  {
    "url": "accumulate/index.html",
    "revision": "a15100f5687d22fc298cad98e786473c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "55153fe2223939e3bb38ec74c736a38c"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "7140dfb84c8b6d8186cfe9d28409ec75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1ce79f37.js",
    "revision": "ef32f85e28fd4348174f1b2c395d662d"
  },
  {
    "url": "assets/js/11.19af5ce9.js",
    "revision": "683560963fa73b049c73474b77ac5388"
  },
  {
    "url": "assets/js/12.a214cf17.js",
    "revision": "1ac0ac7c25bf6f2bc5ec8e6377bf41dc"
  },
  {
    "url": "assets/js/2.3efe6b5a.js",
    "revision": "ef503e7c9586a3ba5f7d52db1ee58ab1"
  },
  {
    "url": "assets/js/3.44c70146.js",
    "revision": "b9017af1a229f408d8b01ca1e8e4df34"
  },
  {
    "url": "assets/js/4.8d3913e6.js",
    "revision": "cabfcc40d9a4ea13874a43a80bed7e02"
  },
  {
    "url": "assets/js/5.d696cb13.js",
    "revision": "b19682eca172b18288da3ef3ad939c3d"
  },
  {
    "url": "assets/js/6.a1647a49.js",
    "revision": "02567283e64d84c92e5a55193cf0ea4d"
  },
  {
    "url": "assets/js/7.3f65611f.js",
    "revision": "d01feb31b3f2427e226199a205f42f34"
  },
  {
    "url": "assets/js/8.108f4977.js",
    "revision": "ac6d632072eb40e7a8e73bf77df37ff6"
  },
  {
    "url": "assets/js/9.1d55153b.js",
    "revision": "b2849f756bafdc99170e701590ea60aa"
  },
  {
    "url": "assets/js/app.7b5fd108.js",
    "revision": "4cb8163fffbe723ba614b83c4c07d9fd"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "134d5e7a482de10e207ad152e7b5020f"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "1919e8ae12987980c080d10e619ffde5"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "6981300d5af45f734f08169345bae4da"
  },
  {
    "url": "front-frame/vue/index.html",
    "revision": "f9e4f75895874f0bd8fcd278aae4d3ca"
  },
  {
    "url": "guide.html",
    "revision": "5ca3fb008d94f85cd2eeeb329361dc81"
  },
  {
    "url": "images/iu.jpg",
    "revision": "6a5993b383203e11a0c3ddc5ce993d84"
  },
  {
    "url": "images/iuk.jpg",
    "revision": "4a7265dea5976683f390dadb884bae22"
  },
  {
    "url": "images/jcw01.png",
    "revision": "32ded15465bb18a2abe8000e57fe10de"
  },
  {
    "url": "images/qiongdao.png",
    "revision": "383f4dd65f04931abf60c8889f6c5f09"
  },
  {
    "url": "index.html",
    "revision": "e150334ab6bbdf215d748aba8d5dbb28"
  },
  {
    "url": "others/index.html",
    "revision": "111fdd7e0a3960622f7b5761d9148cd8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
