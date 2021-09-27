"use strict";
(() => {
var exports = {};
exports.id = 682;
exports.ids = [682];
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

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);

async function handler(req, res) {
  const {
    jobId
  } = req.query;
  let internship = null;

  if (jobId) {
    internship = await db__WEBPACK_IMPORTED_MODULE_0__/* .default.internship.findFirst */ .Z.internship.findFirst({
      where: {
        id: Number(jobId)
      }
    });

    if (internship !== null) {
      res.status(200).json({
        code: "success",
        data: internship
      });
    } else {
      res.status(400).json({
        code: "no-internship-found",
        message: "wrong or missing slug"
      });
    }
  } else {
    res.status(400).json({
      code: "no-internship-found",
      message: "wrong or missing slug"
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(46));
module.exports = __webpack_exports__;

})();