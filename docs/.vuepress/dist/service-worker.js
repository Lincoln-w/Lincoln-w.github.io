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
    "revision": "ab4a32396cb44585ab144c76f55fc539"
  },
  {
    "url": "accumulate/index.html",
    "revision": "3927b8ac140060c6c48b3faf70fafcbc"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ceece5f06124a4a765545b5a2528e81d"
  },
  {
    "url": "assets/css/0.styles.bb60d777.css",
    "revision": "c3cfb718ae5314e9f5b8ad8e559eb2ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.6b2becdf.js",
    "revision": "65ca08a77880e5fed6a52cb8d62f3833"
  },
  {
    "url": "assets/js/4.5b9a6c8a.js",
    "revision": "0ec7a0c397ca05efbe3f6a678e620d48"
  },
  {
    "url": "assets/js/5.e95ce13d.js",
    "revision": "2b7d2dba8c3f812c3c2732a9a74b7e2d"
  },
  {
    "url": "assets/js/6.f0e37490.js",
    "revision": "21d41f6cc7960a789b30a2a5c0cd495a"
  },
  {
    "url": "assets/js/7.b8ae3c43.js",
    "revision": "3803aa4625b66eb33a316c4938baf13a"
  },
  {
    "url": "assets/js/8.12f716cf.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.11b89a91.js",
    "revision": "087c08a064770f515d550e896aad714f"
  },
  {
    "url": "guide.html",
    "revision": "036e7f191f876b2a8803c259d4b8bf5a"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
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
    "url": "images/logo.jpg",
    "revision": "8cf05a238555a0c7f58cb9b8aa3dfc00"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/qiongdao.png",
    "revision": "383f4dd65f04931abf60c8889f6c5f09"
  },
  {
    "url": "index.html",
    "revision": "4c331e02d3bce4bf74780e80c707cb5a"
  },
  {
    "url": "others/index.html",
    "revision": "825b2d31729440788336551989f8f6ce"
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
