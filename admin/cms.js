!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(3),e.exports=n(5)},function(e,t,n){"use strict";var i=n(0),o=i(n(4)),r=i(n(10));window.___emitter=r.default,window.___loader={enqueue:function(){},hovering:function(){}},o.default.init(),o.default.registerPreviewStyle("cms.css")},function(e,t){e.exports=NetlifyCmsApp},function(e,t,n){"use strict";(function(e){var t=n(0)(n(9));window.netlifyIdentity=t.default;var i=function(){return t.default.on("login",(function(){document.location.href="/southfact-gatsby-site/admin/"}))};t.default.on("init",(function(e){e?t.default.on("logout",(function(){i()})):i()})),e((function(){t.default.init()}))}).call(this,n(6).setImmediate)},function(e,t,n){(function(e){var i=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(7),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var i,o,r,u,c,a=1,s={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?i=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){p(e.data)},i=function(e){r.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,i=function(e){var t=l.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):i=function(e){setTimeout(p,0,e)}:(u="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(u)&&p(+t.data.slice(u.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),i=function(t){e.postMessage(u+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[a]=o,i(a),a++},d.clearImmediate=m}function m(e){delete s[e]}function p(e){if(f)setTimeout(p,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{m(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(8))},function(e,t){var n,i,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:u}catch(e){i=u}}();var a,s=[],f=!1,l=-1;function d(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&m())}function m(){if(!f){var e=c(d);f=!0;for(var t=s.length;t;){for(a=s,s=[];++l<t;)a&&a[l].run();l=-1,t=s.length}a=null,f=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===u||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||f||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=netlifyIdentity},function(e,t,n){"use strict";n.r(t);const i=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map((function(e){e(n)})),(e["*"]||[]).slice().map((function(e){e(t,n)}))}}}();t.default=i}]);
//# sourceMappingURL=cms.js.map