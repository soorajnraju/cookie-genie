(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const cookie = require("cookie-genie");

window.onload = () => {
  let count = 0;
  if (!cookie.get("counter")) {
    cookie.set("counter", 0);
  } else {
    count = parseInt(cookie.get("counter"));
    count++;
    cookie.set("counter", count);
  }
  document.getElementById("count").innerHTML = count;
};

},{"cookie-genie":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.get = void 0;
const cookieModule = function (doc = document) {
    if (typeof doc === "string")
        doc = { cookie: doc };
    if (!doc.cookie)
        doc.cookie = "";
    const self = {
        get: function (key) {
            const splat = doc.cookie.split(/;\s*/);
            for (let i = 0; i < splat.length; i++) {
                const ps = splat[i].split("=");
                const k = decodeURIComponent(ps[0].trim());
                if (k === key)
                    return decodeURIComponent(ps[1].trim());
            }
            return undefined;
        },
        set: function (key, value, opts) {
            opts = Object.assign({}, opts);
            let s = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            if (opts.expires)
                s += "; expires=" + opts.expires.toUTCString();
            if (opts.path)
                s += "; path=" + encodeURIComponent(opts.path);
            if (opts.domain)
                s += "; domain=" + encodeURIComponent(opts.domain);
            if (opts.secure)
                s += "; secure";
            doc.cookie = s;
            return s;
        },
    };
    return self;
};
const exportedModule = cookieModule();
exports.get = exportedModule.get, exports.set = exportedModule.set;
exports.default = cookieModule;

},{}]},{},[1]);
