!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=12)}([,,,,,,,function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(t),n.d(t,"Log",function(){return r}),n.d(t,"stringify",function(){return a}),n.d(t,"dispatchBeacon",function(){return c});var r=function(){var e;if(-1!==window.top.location.href.indexOf("log=true")){for(var t=o(new Date(Date().toLocaleString()).toISOString().replace("T"," ").replace("Z","").split(" "),2)[1],n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];(e=console).log.apply(e,["[".concat(t,"][saispa-trackr]: ")].concat(r))}},a=function(t){return Object.keys(t).map(function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))}).join("&")},c=function(e,t){try{if("sendBeacon"in navigator)return void navigator.sendBeacon(e,t);var n=new XMLHttpRequest;n.open("POST",e),n.setRequestHeader("Content-Type","application/json"),n.send(t),r("xhr has sent.")}catch(e){r("dispatchBeacon",e)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,function(e,n,r){(function(e){var u=r(16).getService,f=r(7).Log,t=function(e,t){var n=e.name,r=e.settings,a=t.type,o=t.payload,c=u(n);if(!c)return f("Cannot find service: ".concat(n));var i=function(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r;t=a,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return a}({},r,{payload:o});try{c(a,i),f("".concat(n," initialized"))}catch(e){f("Cannot start service ".concat(n),e)}};e.top.saispa={track:t},n.track=t}).call(this,r(8))},function(e){e.exports={version:"3.3.0",saikaUrl:"https://saika-v3.b2w.io/event/saispa",brandName:"Americanas.com",fullBrand:"americanas",shortBrand:"acom",services:{facebook:{active:!0},saikaTracker:{active:!0},ga:{active:!1},criteo:{active:!1}}}},,,function(e,t,n){"use strict";n.r(t);var r=function(c){return function(e,t){c||(function(){var e,t,n,r,a;e=window,t=document,e.fbq||(n=e.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},e._fbq||(e._fbq=n),(n.push=n).loaded=!0,n.version="2.0",n.queue=[],(r=t.createElement("script")).async=!0,r.src="https://connect.facebook.net/en_US/fbevents.js",(a=t.getElementsByTagName("script")[0]).parentNode.insertBefore(r,a))}(),c=!0);var n=t.key,r=t.advancedMatch,a=void 0===r?{}:r,o=t.payload;switch(fbq("init",n,a),e){case"pageView":fbq("track","PageView");break;case"viewContent":fbq("track","ViewContent",o);break;case"purchase":fbq("track","Purchase",o);break;case"addToCart":fbq("track","AddToCart",o);break;case"search":fbq("track","Search",o)}}}(!1),o=n(7),a=function(e,t){try{var n=t.payload,r=n.url,a=n.body;if("pageView"!==e)return;Object(o.dispatchBeacon)(r,a)}catch(e){Object(o.Log)(e)}};n.d(t,"getService",function(){return u});var c=n(13),i={facebook:r,saikaTracker:a},u=function(e){var t=c.services[e];return t&&t.active?i[e]:null}}]);