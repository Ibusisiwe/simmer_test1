if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KaYxFurc9jEuukDQj-qoX/_buildManifest.js",revision:"a53eb428d0e3e54f1760758ef11cd4b9"},{url:"/_next/static/KaYxFurc9jEuukDQj-qoX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/498-3150a2e85ff247fd.js",revision:"3150a2e85ff247fd"},{url:"/_next/static/chunks/68-1c31082c05031645.js",revision:"1c31082c05031645"},{url:"/_next/static/chunks/framework-5429a50ba5373c56.js",revision:"5429a50ba5373c56"},{url:"/_next/static/chunks/main-bf6e8263a08a2d86.js",revision:"bf6e8263a08a2d86"},{url:"/_next/static/chunks/pages/_app-a285f79ea9e5adcb.js",revision:"a285f79ea9e5adcb"},{url:"/_next/static/chunks/pages/_error-5a00309fd5f4b49e.js",revision:"5a00309fd5f4b49e"},{url:"/_next/static/chunks/pages/dashboard-e803c9eb4657efc5.js",revision:"e803c9eb4657efc5"},{url:"/_next/static/chunks/pages/dashboard/bookmarks-5c7721692c842a76.js",revision:"5c7721692c842a76"},{url:"/_next/static/chunks/pages/dashboard/recipe-546228c667640c4e.js",revision:"546228c667640c4e"},{url:"/_next/static/chunks/pages/dashboard/search_results-e219536aec624f48.js",revision:"e219536aec624f48"},{url:"/_next/static/chunks/pages/index-aa1bd3c8bd55bb48.js",revision:"aa1bd3c8bd55bb48"},{url:"/_next/static/chunks/pages/login-1efdc3ec433cd640.js",revision:"1efdc3ec433cd640"},{url:"/_next/static/chunks/pages/recipe-f3e10bf05d4ca73d.js",revision:"f3e10bf05d4ca73d"},{url:"/_next/static/chunks/pages/results-6a7a8de2715fbce3.js",revision:"6a7a8de2715fbce3"},{url:"/_next/static/chunks/pages/signup-b4f605e09a7c63bf.js",revision:"b4f605e09a7c63bf"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d38be8d96a62f950.js",revision:"d38be8d96a62f950"},{url:"/android/android-launchericon-144-144.png",revision:"294e15ebd6859c1b5875c4bb0c88a436"},{url:"/android/android-launchericon-192-192.png",revision:"d9474615c0ba203fdfecca7e917f8e63"},{url:"/android/android-launchericon-48-48.png",revision:"86ac0667e7ac07f293efc6189a11e482"},{url:"/android/android-launchericon-512-512.png",revision:"c5d160bc5713f2c8405a33de7c6dcae1"},{url:"/android/android-launchericon-72-72.png",revision:"5de393820d63250a00c0e6b889e78f53"},{url:"/android/android-launchericon-96-96.png",revision:"ea69c6612b483d0ea2356bcc39ac46b2"},{url:"/login",revision:"KaYxFurc9jEuukDQj-qoX"},{url:"/manifest.json",revision:"5c2a0909ac99a9ecab268946f8254c62"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/skillet_FILL0_wght400_GRAD0_opsz24.png",revision:"7cf282b32e71461b90c934bc728e8ea6"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
