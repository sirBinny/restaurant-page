(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,'html {\n  height: 100%;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: "Poppins", sans-serif;\n}\n\nnav {\n  background-color: #f5f5f5;\n}\n\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-content: center;\n  justify-content: end;\n  gap: 1rem;\n}\n\nnav li {\n  padding: 8px;\n  transition: 0.3s ease-in-out;\n}\n\nnav li:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.content {\n  min-height: 95%;\n  position: relative;\n}\n\n/* home */\n\n.introduction {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: center;\n  margin-bottom: 1rem;\n  background: linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  background: -moz-linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  background: -webkit-linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f1e1c2", endColorstr="#fcbc98", GradientType=1 );\n}\n\nimg {\n  max-width: 100%;\n  opacity: 0.8;\n}\n\n.header-text {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.introduction h1,\n.introduction h3,\n.introduction h4 {\n  margin: 0;\n}\n\n.introduction h1 {\n  margin-bottom: 1rem;\n  line-height: 100%;\n  font-size: 2.5rem;\n  color: #474448;\n}\n\n.introduction h3 {\n  font-weight: 200;\n}\n\n.introduction h4 {\n  font-weight: 600;\n}\n\n.background {\n  min-height: 250px;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 4px solid #fcbc98;\n  margin-bottom: 1rem;\n}\n\n.background h5 {\n  text-align: center;\n  width: 80%;\n  font-size: 1rem;\n}\n\n/* home */\n\n/* menu */\n\n.menu-header {\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0;\n}\n\n.menu-container {\n  max-width: 80%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  justify-content: center;\n  margin: 0 auto;\n  gap: 1rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  margin-bottom: 3rem;\n  background: linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  background: -moz-linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  background: -webkit-linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f1e1c2", endColorstr="#fcbc98", GradientType=1 );\n}\n\n/* menu */\n\n/* contact */\n\n.contact-header {\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0;\n}\n\n.contact-container {\n  max-width: 80%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  justify-content: center;\n  gap: 1rem;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n}\n\n.contact-info {\n  padding: 2rem;\n  border-radius: 2rem;\n  background: linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  background: -moz-linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  background: -webkit-linear-gradient(\n    180deg,\n    hsla(40, 63%, 85%, 1) 0%,\n    hsla(22, 94%, 79%, 1) 100%\n  );\n\n  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f1e1c2", endColorstr="#fcbc98", GradientType=1 );\n}\n\n/* contact */\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  background: #f5f5f5;\n}\n\nfooter a {\n  text-decoration: none;\n  color: #474448;\n}\n\nfooter h4 {\n  padding: 8px;\n  margin: 8px 0;\n  transition: 0.3s ease-in-out;\n}\n\nfooter h4:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],c=0;c<n.length;c++){var d=n[c],s=a.base?d[0]+a.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=r(p,a);a.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var d=a(n,r),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{const n=()=>{const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("introduction");const t=document.createElement("img");t.src="header-image.jpeg",t.alt="man-eating-cheesecake",n.appendChild(t),e.appendChild(t);const a=document.createElement("div");a.classList.add("header-text");const r=document.createElement("h1");r.textContent="Canadian Cheesecake",a.appendChild(r);const o=document.createElement("h3");o.textContent="Come try it today. Just like grandma used to make!",a.appendChild(o);const i=document.createElement("h4");i.textContent="Our cheesecake is made fresh everyday, using dairy from 100% grass-fed cattle.",a.appendChild(i),e.appendChild(a);const c=document.createElement("div");c.classList.add("background");const d=document.createElement("h5");d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ante a sapien aliquam, at facilisis lacus ornare. Fusce id enim id leo semper sodales. Mauris urna mauris, volutpat facilisis massa non, sodales sodales purus. Integer semper et arcu quis tristique. Etiam a orci id massa vestibulum molestie rutrum eget sem. Donec auctor iaculis sapien. Phasellus lacinia enim lectus, et tincidunt erat gravida et. Duis iaculis nulla a nunc laoreet, viverra suscipit velit bibendum.",c.appendChild(d),n.appendChild(e),n.appendChild(c)};var e=t(379),a=t.n(e),r=t(795),o=t.n(r),i=t(569),c=t.n(i),d=t(565),s=t.n(d),l=t(216),u=t.n(l),m=t(589),p=t.n(m),h=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),a()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=document.querySelector(".content"),v=document.querySelector(".home"),y=document.querySelector(".menu"),b=document.querySelector(".contact");n(),v.addEventListener("click",(()=>{g.textContent="",n()})),y.addEventListener("click",(()=>{g.textContent="",(()=>{const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("menu-container");const t=document.createElement("div");t.classList.add("menu-header");const a=document.createElement("h1");a.textContent="Cheesecake Menu",t.appendChild(a),[1,2,3,4,5,6,7,8].forEach((n=>{const t=document.createElement("div");t.classList.add("item");const a=document.createElement("h2");a.textContent="Original Cheesecake";const r=document.createElement("h4");r.textContent="Price: $6.99";const o=document.createElement("p");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ipsum convallis, facilisis nunc eget, maximus arcu.",t.appendChild(a),t.appendChild(r),t.appendChild(o),e.appendChild(t)})),n.appendChild(t),n.appendChild(e)})()})),b.addEventListener("click",(()=>{g.textContent="",(()=>{const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("contact-container");const t=document.createElement("div");t.classList.add("contact-header");const a=document.createElement("h1");a.textContent="Contact",t.appendChild(a),[1,2,3].forEach((n=>{const t=document.createElement("div");t.classList.add("contact-info");const a=document.createElement("h2");a.textContent="(123) - 456 - 7890";const r=document.createElement("h4");r.textContent="Fake Address, 1O1 2I3, Ontario, Canada";const o=document.createElement("h4");o.textContent="fakeemail@fake.ca",t.appendChild(a),t.appendChild(r),t.appendChild(o),e.appendChild(t)})),n.appendChild(t),n.appendChild(e)})()}))})()})();