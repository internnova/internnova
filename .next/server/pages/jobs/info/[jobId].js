"use strict";
(() => {
var exports = {};
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 73:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Loading = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
  className: "flex h-screen justify-center items-center",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "animate-bounce",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_0__/* .Logo */ .T, {
      big: true
    })
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ 989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(875);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(174);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(583);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// import { FaLocationArrow } from "react-icons/fa"








const JobListing = response => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    user,
    isLoading
  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser)();
  const {
    jobId
  } = router.query;

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Loading__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {});
  }

  if (!user) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
        className: "h-screen w-screen bg-gradient-to-r from-variant-1 to-variant-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "flex h-screen justify-center items-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
              href: "/api/auth/login",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
                className: "text-4xl md:text-6xl text-center text-fgvar underline ",
                children: "Login to apply"
              })
            })
          })
        })
      })
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (response.code === "no-internship-found") {
      router.push("/404");
    }
  }, [router, response.code]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "py-10 px-7 sm:px-10 md:px-20 xl:container mx-auto w-screen relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("header", {
        className: "mb-8 mt-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center mb-8 justify-center gap-3 flex-col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
          src: response.data["logo"],
          width: "80em"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
          className: "text-center text-variant-2 text-4xl font-bold ",
          children: ["Apply for ", response.data["company"]]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
          className: "text-center text-2xl",
          children: ["Position: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "font-bold text-variant-2",
            children: response.data.position
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container m-auto",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "flex gap-4 justify-between",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-wrap cursor-pointer items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "text-variant-2 bg-variant-1 font-bold px-3 py-1 mb-4 rounded lg:mb-0 m-2",
              children: ["Contract: ", response.data.contract]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "text-variant-2 bg-variant-1 font-bold px-3 py-1 mb-4 rounded lg:mb-0 m-2",
              children: ["Duration: ", response.data.duration]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "text-variant-2 bg-variant-1 font-bold px-3 py-1 mb-4 rounded lg:mb-0 m-2",
              children: ["Number of Openings: ", response.data.numOfOpenings]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "text-variant-2 bg-variant-1 font-bold px-3 py-1 mb-4 rounded lg:mb-0 m-2",
              children: ["Location: ", response.data.location]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
          className: "py-4 px-6 bg-transparent text-variant-2 font-semibold border border-variant-2 rounded hover:bg-variant-2 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-4 hover:shadow-lg hover:text-[#fff] inline-flex items-center text-xl mt-4 ml-2",
          href: `/jobs/apply/${jobId}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaLaptop */ .SyT, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "pl-2",
            children: "Apply now!"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "mt-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
              className: "text-[#0f0f0f] text-2xl font-bold",
              children: "Description"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "flex w-full justify-start",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "border-b-2 my-4 border-gray w-[calc(100%-50%)]"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: "font-semibold w-[calc(100%-20%)] text-[#0f0f0f]",
              children: response.data.description
            })]
          })
        })]
      })]
    })
  });
};

const getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONProps)(async context => {
  const {
    jobId
  } = context.query;
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/jobs/info/${jobId}`);
  let response = await res.json();
  return {
    props: _objectSpread({}, response)
  };
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONPage)(JobListing));

/***/ }),

/***/ 84:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 875:
/***/ ((module) => {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ 731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [127,583,174], () => (__webpack_exec__(989)));
module.exports = __webpack_exports__;

})();