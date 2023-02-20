(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]),a.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nbutton,\ninput {\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  background: linear-gradient(\n    to right,\n    rgba(211, 247, 144, 0.8),\n    rgba(129, 222, 250, 0.8)\n  );\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\nh1 {\n  color: #3fa66c;\n  text-align: center;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: #e8e3e3;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n\n.form-control {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n}\n\ninput,\nbutton {\n  outline: none;\n  border: 0;\n}\nbutton {\n  border-radius: 10px;\n  padding: 10px;\n  background-color: #3fa66c;\n  color: #fff;\n  letter-spacing: 2px;\n  transition: all 0.4s ease;\n}\n\nbutton:hover {\n  transform: scale(1.01);\n  color: black;\n  background-color: #b6ce73;\n}\n\ninput {\n  border-bottom: 1px solid #000;\n  background: #e8e3e3;\n  border-radius: 1px;\n  padding: 5px;\n}\n\ninput::placeholder {\n  color: #fff;\n}\n\ninput:valid {\n  background: #a1f7ab;\n}\n\ninput:invalid {\n  background: #f59999;\n}\n\n.error {\n  font-size: 0.8rem;\n  color: #cd4242;\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=i(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=r(e,i),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n.p+"ebd82ab2d2be3d4c6af6.png";(()=>{const e=document.querySelector("form"),t=document.querySelector("#email"),n=t.nextElementSibling,r=document.querySelector("#country"),i=r.nextElementSibling,o=document.querySelector("#zipcode"),a=o.nextElementSibling,s=document.querySelector("#password"),c=s.nextElementSibling,l=document.querySelector("#password-confirm"),d=l.nextElementSibling;t.addEventListener("input",(()=>{let e="";t.validity.valueMissing?e="The email field is required":t.validity.typeMismatch&&(e="Please enter a valid email address"),t.setCustomValidity(e),t.reportValidity(),n.textContent=e})),r.addEventListener("input",(()=>{let e="";r.validity.valueMissing?e="The country field is required":r.validity.tooShort&&(e=`The country field must be ${r.minLength} or more characters`),r.setCustomValidity(e),r.reportValidity(),i.textContent=e})),o.addEventListener("input",(()=>{let e="";o.validity.valueMissing?e="The Zip code field is required":o.validity.patternMismatch&&(e="The Zip code field must match this patten 11111"),o.setCustomValidity(e),o.reportValidity(),a.textContent=e})),s.addEventListener("input",(()=>{let e="";s.validity.valueMissing?e="The password field is required":(s.validity.tooShort||s.validity.tooLong)&&(e=`The password field must be between ${s.minLength}-${s.maxLength} characters`),s.setCustomValidity(e),s.reportValidity(),c.textContent=e})),l.addEventListener("input",(()=>{let e="";l.validity.valueMissing?e="The password field is required":l.validity.tooShort||l.validity.tooLong?e=`The password field must be between ${l.minLength}-${l.maxLength} characters`:s.value!==l.value&&(e="The two passwords must match"),l.setCustomValidity(e),l.reportValidity(),d.textContent=e})),e.addEventListener("submit",(e=>{e.preventDefault(),t.checkValidity()&&r.checkValidity()&&o.checkValidity()&&s.checkValidity()&&l.checkValidity()&&(document.querySelector("h1").textContent="Validation Form - Validated ✋✋")})),function(){const e=document.createElement("link");e.rel="shortcut icon",e.type="image/png",e.href=h,document.head.appendChild(e)}()})()})()})();