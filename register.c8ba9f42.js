parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"hNwU":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(){e(this,t)}return n(t,[{key:"setItem",value:function(e,t){var n=t;arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&(n=JSON.stringify(t)),sessionStorage.setItem(e,n)}},{key:"getItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=sessionStorage.getItem(e);return t&&(n=JSON.parse(n)),n}},{key:"removeItem",value:function(e){sessionStorage.removeItem(e)}},{key:"hasItem",value:function(e){return!!sessionStorage.getItem(e)}}]),t}();exports.default=r;
},{}],"TT51":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCartCount=c,exports.setCartCount=o,exports.renderCartQuantity=i,exports.setCartItems=d,exports.addItemCartSession=s,exports.openCart=l,exports.closeCart=u,exports.default=void 0;var e=t(require("../helpers/webStorage"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach(function(t){r(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return p.getItem("cartCount")}function o(e){var t=p.getItem("cartCount");t?0!==(t=Number(t)+e)?p.setItem("cartCount",t):(p.removeItem("cartCount"),p.removeItem("cartItems")):1===e&&p.setItem("cartCount",1)}function i(){var e=Number(c());document.querySelector(".item-count").textContent=e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=p.getItem("cartItems");a?(a=JSON.parse(a))[e]?(a[e].inCart+=n,a[e].totalPrice=a[e].price*a[e].inCart,0===a[e].inCart&&delete a[e],p.setItem("cartItems",a,!0)):(a=s(e,t,a),p.setItem("cartItems",a,!0)):1===n&&(a=s(e,t,a),p.setItem("cartItems",a,!0))}function s(e,t,n){var c=t.filter(function(t){return t.id===e})[0];c.inCart=1,c.totalPrice=c.price;var o=r({},e,c);return a(a({},n),o)}function l(){var e=document.getElementById("cart-modal");e.style.display="block",e.classList.add("cart-modal-view"),document.getElementById("cart-modal-backdrop").classList.add("black-opacity"),document.querySelector(".page-body").classList.add("body-container"),m()}function u(){var e=document.getElementById("cart-modal");e.style.display="none",e.classList.remove("cart-modal-view"),document.getElementById("cart-modal-backdrop").classList.remove("black-opacity"),document.querySelector(".page-body").classList.remove("body-container"),document.querySelector(".cart-body").innerHTML=""}function m(){var e=c(),t=document.querySelector(".cart-body");t.innerHTML="",t.classList.remove("flexbox-vertical-horizontal-center");var n=document.querySelector(".cart-button-content"),a=document.querySelector(".promo-code"),r=document.querySelector(".total-in-cart");if(e){t.style.backgroundColor="#ecf0f1",t.style.height="65%",n.textContent="Start Shopping",a.style.display="block";var o=p.getItem("cartItems");o=JSON.parse(o);var i=document.createElement("div");i.classList.add("row"),i.classList.add("mx-0"),i.classList.add("my-4"),i.style.backgroundColor="#fff";var d=0,s=0;Object.keys(o).forEach(function(e){var t=o[e],n=document.createElement("div");n.classList.add("col-12"),n.classList.add("my-1");var a=document.createElement("div");a.classList.add("row");var c=document.createElement("div");c.classList.add("col-2");var l=document.createElement("img");l.src=t.imageURL,l.height="100",l.alt=t.name,c.appendChild(l);var u=document.createElement("div");u.classList.add("col-10"),u.classList.add("pl-4"),u.classList.add("flexbox-vertical-center");var m=document.createElement("strong");m.textContent=t.name;var p=document.createElement("div");p.classList.add("flexbox-space-between"),p.innerHTML='<div>\n                   <i class="change-quantity icon ion-md-remove-circle" id="'.concat(t.id,'-decrease"\n                        aria-label="Decrease quantity" tabindex="0"></i>&nbsp;\n                    &nbsp;&nbsp;').concat(t.inCart,'&nbsp;&nbsp;\n                    <i class="change-quantity icon ion-md-add-circle" id="').concat(t.id,'-increase"\n                        aria-label="Increase quantity" tabindex="0"></i>\n                    &nbsp;&nbsp;&nbsp;<span class="multiply">&#215;</span> ').concat(t.price,"\n                </div>\n                <div>\n                    Rs. ").concat(t.totalPrice,"\n                </div>"),u.appendChild(m),u.appendChild(p),a.appendChild(c),a.appendChild(u),n.appendChild(a),i.appendChild(n),d+=t.totalPrice,s+=t.inCart,r.textContent=" (".concat(s," item(s))")});var l=document.createElement("div");l.classList.add("mx-3"),l.classList.add("mb-4"),l.style.backgroundColor="#fff";var u=document.createElement("img");u.classList.add("mx-3"),u.src="/static/images/lowest-price.png",u.alt="You won't find it cheaper anywhere";var m=document.createElement("div");m.style.display="inline-block",m.innerText="You won't find it cheaper anywhere",l.appendChild(u),l.appendChild(m),t.appendChild(i),t.appendChild(l),n.innerHTML='\n        <div class="flexbox-space-between">\n            <div>Proceed to Checkout\n        </div>\n        <div>Rs. '.concat(d," ></div>\n        ")}else{r.textContent="",t.style.backgroundColor="#fff",t.style.height="75%",t.classList.add("flexbox-vertical-horizontal-center");var v=document.createElement("strong");v.textContent="No items in your cart";var y=document.createElement("p");y.textContent="Your favourite items are just a click away",t.appendChild(v),t.appendChild(y),a.style.display="none",n.textContent="Start Shopping"}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".cart-body").addEventListener("click",function(e){if(e.target.classList.contains("change-quantity")){var t=e.target.id.split("-"),n=1;"decrease"===t[1]&&(n=-1),o(n),i(),d(t[0],[],n),m()}})});var p=new e.default,v=s;exports.default=v;
},{"../helpers/webStorage":"hNwU"}],"ATEA":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,n=function(){function t(){e(this,t)}return r(t,[{key:"validateEmail",value:function(e){return!!e.match(a)}},{key:"validatePassword",value:function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++)e.charCodeAt(n)>=48&&e.charCodeAt(n)<=57?r=!0:e.charCodeAt(n)>=65&&e.charCodeAt(n)<=90||e.charCodeAt(n)>=97&&e.charCodeAt(n)<=122?t=!0:32===e.charCodeAt(n)&&(a=!0);return e.length>=6&&t&&r&&!a}}]),t}();exports.default=n;
},{}],"we3F":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=require("./cart"),t=r(require("../helpers/validations"));function r(e){return e&&e.__esModule?e:{default:e}}var a=null;document.addEventListener("DOMContentLoaded",function(){(0,e.renderCartQuantity)(),a=new t.default,document.querySelector(".cart-button").addEventListener("click",e.openCart),document.querySelector(".close-cart").addEventListener("click",e.closeCart),document.querySelector(".shopping-button").addEventListener("click",e.closeCart),document.getElementById("registerForm").addEventListener("submit",function(e){e.preventDefault();var t=!1,r=!1,n=!1,i=e.target.elements.email,l=e.target.querySelector("#email-error");a.validateEmail(i.value)?(l.textContent="",i.setAttribute("aria-invalid","false"),t=!0):(l.textContent="Please enter a valid email id",i.setAttribute("aria-invalid","true"),t=!1);var o=e.target.elements.password,s=e.target.querySelector("#password-error");a.validatePassword(o.value)?(s.innerHTML="",o.setAttribute("aria-invalid","false"),r=!0):(s.innerHTML="Password should follow following criteria:\n            <ul>\n                <li>Minimum length 6 characters</li>\n                <li>Must have a number and alphabet</li>\n                <li>Cannot have spaces</li>\n            </ul>\n            ",o.setAttribute("aria-invalid","true"),r=!1);var u=e.target.elements.confirmPassword,d=e.target.querySelector("#confirm-password-error");o.value===u.value?(d.textContent="",u.setAttribute("aria-invalid","false"),n=!0):(d.textContent="Passwords do not match",u.setAttribute("aria-invalid","true"),n=!1),t&&r&&n&&(window.location="index.html")})});
},{"regenerator-runtime/runtime":"QVnC","./cart":"TT51","../helpers/validations":"ATEA"}]},{},["we3F"], null)
//# sourceMappingURL=register.c8ba9f42.js.map