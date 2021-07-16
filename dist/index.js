!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){"use strict";var r=e(2),i=e.n(r),o=e(3),a=e.n(o),c=e(4),s=i()((function(n){return n[1]})),u=a()(c.a);s.push([n.i,"body {\n  margin: 0;\n  font-family: 'Lato', sans-serif;\n  color: #ffffff;\n  background-image: url("+u+");\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.container{\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.search {\n  height: 30vh;\n  display: flex;\n  align-items: center;\n}\n\n.icon {\n  position: absolute;\n  margin-left: 10px;\n  color: #4E4E4E;\n}\n\n.input-search {\n  width:400px;\n  height: 40px;\n  border-radius: 10px;\n  text-indent: 35px;\n  color: #4E4E4E;\n  border: none;\n}\n\n.input-search:focus {\n  outline: none;\n}\n\n.weather-info {\n  width: 70%;\n  height: 70vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.city-country {\n  height: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.city {\n  font-size: 25px;\n}\n.country {\n  margin-top: 10px;\n  font-size: 20px;\n}\n\n.temperature-info {\n  height: 30%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.temperature {\n  font-size: 100px;\n}\n\n.squares-info {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.square {\n  width: 200px;\n  height: 200px;\n  background-color: white;\n  /* box-shadow: 0px 0px 10px rgb(125, 125, 125); */\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  color: #4E4E4E;\n  margin: 20px;\n}\n.square img{\n  width: 50%;\n}\n",""]),t.a=s},function(n,t,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},r=[],i=0;i<n.length;i++){var o=n[i],s=t.base?o[0]+t.base:o[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var d=c(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:m(f,t),references:1}),r.push(l)}return r}function u(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function f(n,t,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}function p(n,t,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,g=0;function m(n,t){var e,r,i;if(t.singleton){var o=g++;e=h||(h=u(t)),r=f.bind(null,e,o,!1),i=f.bind(null,e,o,!0)}else e=u(t),r=p.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var i=c(e[r]);a[i].references--}for(var o=s(n,t),u=0;u<e.length;u++){var l=c(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=o}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){"use strict";t.a=e.p+"cdd257cbbd8c61e5abdf7dab8553cf0b.jpg"},function(n,t,e){"use strict";e.r(t);var r=e(1),i=e.n(r),o=e(0),a={insert:"head",singleton:!1};i()(o.a,a),o.a.locals;const c=document.querySelector(".weather-info"),s=document.querySelector(".input-search"),u=n=>{const t=`\n\t\t<div class="city-country">\n\t\t\t<span class="city">${n.city}</span>\n\t\t\t<span class="country">${n.country}</span>\n\t\t</div>\n\t\t<div class="temperature-info">\n\t\t\t<span class="temperature">${n.temperature}°C</span>\n\t\t</div>\n\t\t\n\t\t<div class="squares-info">\n\t\t\t<div class="square humidity">\n\t\t\t\t<span><strong>Humidity</strong></span>\n\t\t\t\t<img src="./images/humidity.png" alt="humidity percent">\n\t\t\t\t<span><strong>${n.humidity} %</strong></span>\n\t\t\t\t</div>\t\n\t\t\t\t<div class="square weather">\n\t\t\t\t\t<img src="./images/${n.icon}.png">\n\t\t\t\t\t<span><strong>${n.description}</strong></span>\n\t\t\t\t</div>\n\t\t\t<div class="square wind">\n\t\t\t\t<span><strong>Wind Speed</strong></span>\n\t\t\t\t<img src="./images/wind.png" alt="wind speed">\n\t\t\t\t<span><strong>${n.speedWind} Km/h</strong></span>\n\t\t\t</div>\n\t\t</div>\n\t\t`;c.innerHTML=t};s.addEventListener("keyup",async n=>{if(13===n.keyCode){n.preventDefault();const[t,e]=s.value.split(","),r=await fetch(`https://weatherweb-backend.herokuapp.com/api/location/${t}/${e}`),i=await r.json();u(i),s.value=""}}),navigator.geolocation.getCurrentPosition((async function(n){const{latitude:t,longitude:e}=n.coords,r=await fetch(`https://weatherweb-backend.herokuapp.com/api/coords/${t}/${e}`),i=await r.json();s.placeholder=`${i.city},${i.country}`,u(i)}))}]);