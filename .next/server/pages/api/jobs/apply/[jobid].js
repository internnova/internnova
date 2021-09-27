"use strict";
(() => {
var exports = {};
exports.id = 71;
exports.ids = [71];
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

/***/ 204:
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
    let {
      data,
      user
    } = req.body;
    data = data;
    user = user;
    internship = await db__WEBPACK_IMPORTED_MODULE_0__/* .default.internship.findFirst */ .Z.internship.findFirst({
      where: {
        id: Number(jobId)
      }
    });

    if (internship !== null) {
      const internUserObj = await db__WEBPACK_IMPORTED_MODULE_0__/* .default.user.findFirst */ .Z.user.findFirst({
        where: {
          email: user ? user.email : " "
        }
      });
      const userFromDb = await db__WEBPACK_IMPORTED_MODULE_0__/* .default.user.findFirst */ .Z.user.findFirst({
        where: {
          email: user.email
        }
      });

      if (internUserObj && user && userFromDb) {
        await db__WEBPACK_IMPORTED_MODULE_0__/* .default.application.create */ .Z.application.create({
          data: {
            Internship: {
              connect: {
                id: internship.id
              }
            },
            internName: data.name,
            internEmail: data.email,
            internPhoneNumber: data.tel,
            aboutIntern: data.about,
            internUserObj: {
              connect: {
                id: userFromDb.id
              }
            }
          }
        });
        res.status(200).json({
          code: "success"
        });
      } else {
        res.status(500).json({
          code: "internal-server-error"
        });
      }
    } else {
      res.status(400).json({
        code: "bad_data",
        message: "Make sure the data is valid."
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
var __webpack_exports__ = (__webpack_exec__(204));
module.exports = __webpack_exports__;

})();