"use strict";
(() => {
var exports = {};
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ db)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./db/index.ts

/* harmony default export */ const db = (new client_namespaceObject.PrismaClient());

/***/ }),

/***/ 166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);



const afterCallback = async (req, res, session, state) => {
  try {
    await db__WEBPACK_IMPORTED_MODULE_0__/* .default.user.create */ .Z.user.create({
      data: {
        name: session.user.name,
        email: session.user.email,
        picture: session.user.picture || "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
      }
    });
  } catch {}

  return session;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.handleAuth)({
  async callback(req, res) {
    await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.handleCallback)(req, res, {
      afterCallback
    });
  }

}));

/***/ }),

/***/ 84:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(166));
module.exports = __webpack_exports__;

})();