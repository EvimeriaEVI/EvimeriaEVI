"use strict";var precacheConfig=[["/index.html","b0e6a08476518e9e8c647c914d036db4"],["/static/css/main.00fde38d.css","6a214354281fa45c79437b258296c839"],["/static/media/ADA.5a1dc13c.svg","5a1dc13c59847a16142a3dcf59f19742"],["/static/media/AION.156903e5.svg","156903e5614092e1ef5ef769e6bb220a"],["/static/media/AOA.ddc01eef.svg","ddc01eef1d47303151f8e15f84332d76"],["/static/media/BAB.43bb6bc1.svg","43bb6bc1ae3dae8eb1ccc1819e01d437"],["/static/media/BAT.e5ddd0a5.svg","e5ddd0a541937800cb8d653df019d7a5"],["/static/media/BCH.6a5d2c40.svg","6a5d2c400769b7e53028d77ac1c830e1"],["/static/media/BTC.2d301407.svg","2d3014070149362a7eb5f23f7a0945c1"],["/static/media/DAI.87e09cc0.svg","87e09cc03e74eaeccb6a0a8a4ffb513c"],["/static/media/DASH.5f7733ac.svg","5f7733aced04ba3c74ab1a162785e35a"],["/static/media/ENG.6e3bf7bd.svg","6e3bf7bdc038febb6b40e7aba58e46e8"],["/static/media/ENJ.fa8887f7.svg","fa8887f7de773fc34bcbb44209a07e26"],["/static/media/EOS.5a67bcfe.svg","5a67bcfe9e0254e7f7612c68a478cbf4"],["/static/media/ETH.57f88295.svg","57f882950e7d26747407b271b4129832"],["/static/media/HOT.58fbb3be.svg","58fbb3be768cc650519a313c3cf1e72f"],["/static/media/INB.c226822c.svg","c226822ca4fd09ef059c8da21984d970"],["/static/media/IOST.2b84c383.svg","2b84c3838cea040ec1e3c8e3e3d6b7ae"],["/static/media/IOTA.7cb85486.svg","7cb85486538ea453e8069f9ecdc076d1"],["/static/media/LINK.34720be1.svg","34720be1958d37b3d8991585e86255e8"],["/static/media/LTC.c0211ee9.svg","c0211ee9d56c2fa8de2a280b6c05f505"],["/static/media/MCO.bce3e514.svg","bce3e514ac51a75f9abc8b9c4b809a72"],["/static/media/MKR.a56a13d3.svg","a56a13d3ed0c5a3bd79a2bcdf08752cf"],["/static/media/Move.05c9c5b8.svg","05c9c5b865d161afdec3e07d3d35a4fd"],["/static/media/NEO.55a23acd.svg","55a23acd60419ced3b8dd43d591c388b"],["/static/media/NPXS.f03e3564.svg","f03e3564a80ea8b043d4581791c7caed"],["/static/media/NXT.c03dce92.svg","c03dce92031123a0562672313ca50771"],["/static/media/OAX.b185f026.svg","b185f026dd64d68bdb94996dd83e83b8"],["/static/media/OMG.2b153b30.svg","2b153b3011d03ea23cf84dd0b3a68bee"],["/static/media/PAX.ea641eb7.svg","ea641eb75f9b71edf50e4a7a59ca96fe"],["/static/media/QBIT.caec4efb.svg","caec4efbd27ce1a1f6e6882918039ab3"],["/static/media/Resize.1e44f325.svg","1e44f32513dd5dc22e934957cbc4c499"],["/static/media/SNT.6bfae29e.svg","6bfae29ec4d8aee156209172d6a369c1"],["/static/media/STE.ed3921b3.svg","ed3921b3b1ff745837898231522b1a11"],["/static/media/SearchIcon.e15c9463.svg","e15c9463fb6a60aea3f3736538433dcf"],["/static/media/SearchIconDark.18751363.svg","18751363f0cd6feb1c3e4ea3846843b9"],["/static/media/THR.60d30f24.svg","60d30f24006b5caa27eb03229a11b2a2"],["/static/media/TNT.d8fe1a7c.svg","d8fe1a7c7312beeb7816a2f5ef149abb"],["/static/media/TRX.6f80dcf6.svg","6f80dcf6d4f1e577c60b4ed2e9d19468"],["/static/media/USD.63fa626f.svg","63fa626fecc14d7d9101fa6ae7711f09"],["/static/media/USDC.dc398647.svg","dc3986477d5ea9584a81ba98367d63bb"],["/static/media/USDT.4d552e08.svg","4d552e08ce826cd35e840f2b8c3986a8"],["/static/media/WAX.4bc32943.svg","4bc32943b43b2834a1de0313da2adee1"],["/static/media/XIN.38a88c8a.svg","38a88c8a4c42c61e75ef9e5b43a26261"],["/static/media/XRP.2f931a95.svg","2f931a95d7111296d04c64529dd59232"],["/static/media/ZIL.4414eafe.svg","4414eafe3525463b382b9d818e07e6df"],["/static/media/ZRX.16ff856a.svg","16ff856a3b4fa471ea0c79d312e84476"],["/static/media/activeBuy.f2cd44a6.svg","f2cd44a68343e8d72fd9af8f14a3fdbc"],["/static/media/activeSell.b7cc431e.svg","b7cc431e1deb1a346c67c303f4e4e19a"],["/static/media/back.75caa781.svg","75caa781a37a4a009909dd6b229788a3"],["/static/media/background.81a4821d.png","81a4821d4576ce6ab0d631c3e94d5dae"],["/static/media/background.a12e192e.svg","a12e192e020ba0c01488efe5975e3586"],["/static/media/bg-light.7ada0995.jpg","7ada09955696c6310cda9e2a29980643"],["/static/media/buy.9b7876d7.svg","9b7876d7f8474dd7a4b19e6da142911e"],["/static/media/close-avatar.754fa090.svg","754fa090997ff2b2df692b864567f3b7"],["/static/media/close-icon.a4633427.svg","a4633427f9a30b2fbc7e6998b5a936b4"],["/static/media/close.560396d2.svg","560396d2151789b2382e9adf16af0806"],["/static/media/close.97a1cab2.svg","97a1cab259e5b2c2affc885baf208c74"],["/static/media/default.41c936f7.png","41c936f79869b058b9d310b132a3a192"],["/static/media/edit.0c9ece10.svg","0c9ece10356586731d2742bccddd488d"],["/static/media/enjoy-unlimited-trading@2x.491786f1.png","491786f10e879810b7dcc5b9244b356d"],["/static/media/facebook.6dd3d236.svg","6dd3d236605546e83b423f3812d61011"],["/static/media/failure.f520a376.svg","f520a37627c0abd2ecbdc5693b72ff59"],["/static/media/get-up-to@2x.8113cd83.png","8113cd83ee06ca4a22551dba7a32683b"],["/static/media/icon-facebook.3dae5aa0.svg","3dae5aa0bfcf113979223a28b89634e6"],["/static/media/icon-github.511d8c3e.svg","511d8c3e1e2b2becdc719dedf518370c"],["/static/media/icon-instagram.9b5991d4.svg","9b5991d4122471c688aa87f586afa0df"],["/static/media/icon-linkedin.87137466.svg","8713746625cebd6c3dbf73103f49225e"],["/static/media/icon-mail.c59bab3e.svg","c59bab3e456afbc4aec120bc86606dc5"],["/static/media/icon-twitter.7fa597a2.svg","7fa597a2030d0eb04c2a46571661b58b"],["/static/media/logo-sprite@2x.fd1060da.png","fd1060da78d0f36115478b88314b339b"],["/static/media/logo.b6f9726e.svg","b6f9726ea38104bcff60d6452f62fea1"],["/static/media/logo.f8ac18e7.png","f8ac18e75373fd9f3083b253d8771fe0"],["/static/media/logout.fcb246f4.svg","fcb246f4797d4a99ae0cd371a644b1c4"],["/static/media/moon.bfa697ef.svg","bfa697efce4fcb90e9cb0577d738c117"],["/static/media/open-avatar.04fffc62.svg","04fffc6250f5ea4f20af2d0fcd1e1013"],["/static/media/open-icon.7b199bc3.svg","7b199bc31a6680b1c3959de861a8ee1f"],["/static/media/pending.2a409817.svg","2a4098171eb8fe21d93e8a01c16a7d55"],["/static/media/search.c15739d4.svg","c15739d424b7c6cf5f0f22c17779a2ea"],["/static/media/sell.b425d2e4.svg","b425d2e4f3065fa51db4ed0e521d3976"],["/static/media/success.ecabb0eb.svg","ecabb0ebac8bb9c01b69d1803d03b53f"],["/static/media/sun.da2dbf5c.svg","da2dbf5cce6f0631946acace059797ea"],["/static/media/telegram.3ae97428.svg","3ae97428afe69752dc6ab60a4fe789fb"],["/static/media/trading-competition@2x.6902bca8.png","6902bca824e7c8b780df693303b5aaa6"],["/static/media/twitter.2625f0ea.svg","2625f0ea1b6d6d9564b7bf1664adfb9f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});