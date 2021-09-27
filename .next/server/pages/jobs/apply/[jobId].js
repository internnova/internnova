"use strict";
(() => {
var exports = {};
exports.id = 558;
exports.ids = [558];
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

/***/ 494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Logo = ({
  big
}) => {
  if (big) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      src: "/images/logo.png",
      alt: "",
      className: "h-32 w-32"
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
    src: "/images/logo.png",
    alt: "",
    className: "h-16 w-16"
  });
};

/***/ }),

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _jobId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "babel-plugin-superjson-next/tools"
var tools_ = __webpack_require__(875);
;// CONCATENATED MODULE: external "react-hook-form"
const external_react_hook_form_namespaceObject = require("react-hook-form");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var index_esm = __webpack_require__(649);
// EXTERNAL MODULE: ./components/Loading.tsx
var Loading = __webpack_require__(73);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(84);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/jobs/apply/[jobId].tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const ApplyPage = response => {
  const router = (0,router_.useRouter)();
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_namespaceObject.useForm)();
  const {
    0: result,
    1: setResult
  } = (0,external_react_.useState)("");
  const {
    0: characterCount,
    1: setCharacterCount
  } = (0,external_react_.useState)(0);
  const {
    user,
    isLoading
  } = (0,nextjs_auth0_.useUser)();
  const {
    jobId
  } = router.query;
  (0,external_react_.useEffect)(() => {
    if (response.code === "no-internship-found") {
      router.push("/404");
    }
  }, [router, response.code]);

  const onSubmit = async data => {
    external_axios_default().post(`/api/jobs/apply/${jobId}`, {
      data,
      user
    }).then(res => {
      if (res.status === 200) {
        router.push("/jobs/apply/success");
      } else {
        console.log(res);
      }
    });
  };

  if (isLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {});
  }

  if (!user) {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "hr-screen w-screen bg-gradient-to-r from-variant-1 to-variant-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex h-screen justify-center items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/api/auth/login",
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "text-4xl md:text-6xl text-center text-fgvar underline ",
                children: "Login to apply"
              })
            })
          })
        })
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "md:grid md:grid-cols-3 md:gap-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:col-span-1",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "pl-6 pt-10 md:pl-10",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "text-3xl md:text-xl lg:text-3xl font-medium leading-6 text-variant-2",
              children: "Apply for internship"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "mt-1 text-sm text-gray-600 mb-4",
              children: "All this information will be sent to the company"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "py-2 px-4 bg-transparent text-variant-2 font-semibold border border-variant-2 rounded hover:bg-variant-2 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-4 hover:shadow-lg hover:text-[#fff] inline-flex items-center",
              href: "/",
              children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoMdArrowRoundBack */.D_, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "pl-2",
                children: "Go back"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-5 md:mt-0 md:col-span-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("form", {
            onSubmit: handleSubmit(onSubmit),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "shadow sm:rounded-md sm:overflow-hidden",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "grid grid-cols-3 gap-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-3 sm:col-span-2",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      htmlFor: "name",
                      className: "block text-sm font-medium text-gray-700",
                      children: [" ", "Name"]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({}, register("name")), {}, {
                        type: "text",
                        name: "name",
                        id: "name",
                        className: "focus:ring-variant-2 focus:border-variant-2 flex-1 block w-full rounded-none rounded-r-md rounded-l-md sm:text-sm border-gray-300",
                        placeholder: "Enter your name",
                        defaultValue: user ? user.name : "ERROR",
                        required: true
                      }))
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "grid grid-cols-3 gap-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-3 sm:col-span-2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "name",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Email"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({}, register("email")), {}, {
                        type: "email",
                        name: "email",
                        id: "email",
                        className: "focus:ring-variant-2 focus:border-variant-2 flex-1 block w-full rounded-none rounded-r-md rounded-l-md sm:text-sm border-gray-300",
                        defaultValue: user ? user.email : "ERROR",
                        placeholder: "Enter your email",
                        required: true
                      }))
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "grid grid-cols-3 gap-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-3 sm:col-span-2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "tel",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Phone Number"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({}, register("tel")), {}, {
                        type: "tel",
                        name: "tel",
                        placeholder: "8888888888",
                        pattern: "[0-9]{10}",
                        maxLength: 10,
                        required: true,
                        className: "focus:ring-variant-2 focus:border-variant-2 flex-1 block w-full rounded-none rounded-r-md rounded-l-md sm:text-sm border-gray-300"
                      }))
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                    htmlFor: "about",
                    className: "block text-sm font-medium text-gray-700",
                    children: ["About you(try incorporating the points below)", /*#__PURE__*/(0,jsx_runtime_.jsxs)("ol", {
                      className: "list-decimal pl-10",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: "Past Experiences"
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: "Tools you know how to use"
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: "Why should you be given this internship?"
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "mt-1",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("textarea", _objectSpread(_objectSpread({}, register("about")), {}, {
                      id: "about",
                      name: "about",
                      rows: 10,
                      minLength: 150,
                      maxLength: 1500,
                      className: "shadow-sm focus:ring-variant-2 focus:border-variant-2 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",
                      placeholder: "Enter your text here",
                      defaultValue: "",
                      onChange: e => setCharacterCount(e.target.value.length),
                      required: true
                    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                      className: "block text-sm font-medium text-gray-700",
                      children: ["Total Number of characters: ", characterCount]
                    }), characterCount <= 150 ? /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "block text-sm font-medium text-gray-700",
                      children: "Minimum number of characters: 150"
                    }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "block text-sm font-medium text-gray-700",
                      children: "Maximum number of characters: 1500"
                    })]
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: result
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "py-2 px-4 bg-transparent text-variant-2 font-semibold border border-variant-2 rounded hover:bg-variant-2 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-4 hover:shadow-lg hover:text-[#fff] inline-flex items-center md:mb-16",
                  type: "submit",
                  children: "Apply"
                })
              })]
            })
          })
        })]
      })
    })
  });
};

const getServerSideProps = (0,tools_.withSuperJSONProps)(async context => {
  const {
    jobId
  } = context.query;
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/jobs/info/${jobId}`);
  let response = await res.json();
  return {
    props: _objectSpread({}, response)
  };
}, []);
/* harmony default export */ const _jobId_ = ((0,tools_.withSuperJSONPage)(ApplyPage));

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
var __webpack_exports__ = __webpack_require__.X(0, [127,649], () => (__webpack_exec__(102)));
module.exports = __webpack_exports__;

})();