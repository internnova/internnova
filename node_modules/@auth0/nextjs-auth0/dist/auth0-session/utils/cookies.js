"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.set = exports.get = exports.getAll = void 0;
var tslib_1 = require("tslib");
var cookie_1 = require("cookie");
var getAll = function (req) {
    return cookie_1.parse(req.headers.cookie || '');
};
exports.getAll = getAll;
var get = function (req, name) {
    var cookies = exports.getAll(req);
    return cookies[name];
};
exports.get = get;
var set = function (res, name, value, options) {
    if (options === void 0) { options = {}; }
    var strCookie = cookie_1.serialize(name, value, options);
    var previousCookies = res.getHeader('Set-Cookie') || [];
    if (!Array.isArray(previousCookies)) {
        previousCookies = [previousCookies];
    }
    res.setHeader('Set-Cookie', tslib_1.__spread(previousCookies, [strCookie]));
};
exports.set = set;
var clear = function (res, name, options) {
    if (options === void 0) { options = {}; }
    exports.set(res, name, '', tslib_1.__assign(tslib_1.__assign({}, options), { maxAge: 0 }));
};
exports.clear = clear;
//# sourceMappingURL=cookies.js.map