"use strict";
(() => {
var exports = {};
exports.id = 3;
exports.ids = [3];
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

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);


const handler = async (req, res) => {
  const data = req.body;

  if (!(data.position && data.contract && data.location && data.logo && data.company && data.tools && data.description && data.numOfOpenings && data.duration)) {
    res.status(400).json({
      code: "bad-data",
      message: "The data was either missing a logo key, position key, contract key, location key, company key, description key, a number of openings key, or tools key"
    });
  }

  await db__WEBPACK_IMPORTED_MODULE_0__/* .default.internship.create */ .Z.internship.create({
    data: data
  });
  res.status(200).json({
    code: "success"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(98));
module.exports = __webpack_exports__;

})();