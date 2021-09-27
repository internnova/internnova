"use strict";
(() => {
var exports = {};
exports.id = 142;
exports.ids = [142];
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

/***/ 185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ jobs),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "babel-plugin-superjson-next/tools"
var tools_ = __webpack_require__(875);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/JobComponent.tsx






const TagsComponent = ({
  tags,
  handleTagClick
}) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex flex-wrap cursor-pointer items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:mt-0 lg:pt-0",
    children: tags ? tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx("span", {
      onClick: () => handleTagClick(tag),
      className: "text-variant-2 bg-variant-1 font-bold px-3 py-1 mb-4 rounded lg:mb-0 m-2",
      children: tag
    }, tag)) : ""
  })
});

const JobComponent = ({
  job,
  handleTagClick
}) => {
  const env = "production";
  const {
    id,
    position,
    contract,
    location,
    logo,
    company,
    postedAt,
    tools,
    isNew,
    numOfOpenings
  } = job;
  let url = "";

  if (env.toLowerCase() === "production") {
    url = `http://internnova.co/jobs/info/${id}`;
  } else {
    url = `http://localhost:3000/jobs/info/${id}`;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col shadow-lg m-4 p-6 my-16 mx-4 rounded 'border-solid border-variant-1 border-l-8 lg:flex-row lg:my-6 hover:shadow-xl transition duration-500",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "-mt-16 mb-4 w-20 h-20 lg:w-24 lg:h-24 lg:my-0",
        src: logo,
        alt: company
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col justify-between ml-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        className: "font-bold text-variant-2",
        children: [company, isNew && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bg-variant-2 text-variant-1 uppercase m-2 px-2 py-1 rounded-full",
          children: "New!"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: url,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "font-bold text-xl my-2 lg:my-0",
            children: position
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-gray-500",
            children: [" ", external_moment_default()(postedAt).fromNow(), " \xB7 ", contract, " \xB7 ", location, " "]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-variant-2",
            children: ["Available Openings: ", numOfOpenings]
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TagsComponent, {
      tags: tools,
      handleTagClick: handleTagClick
    })]
  });
};

/* harmony default export */ const components_JobComponent = (JobComponent);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(84);
// EXTERNAL MODULE: ./components/Loading.tsx
var Loading = __webpack_require__(73);
// EXTERNAL MODULE: ./components/Navbar.tsx
var Navbar = __webpack_require__(174);
// EXTERNAL MODULE: ./db/index.ts + 1 modules
var db = __webpack_require__(669);
;// CONCATENATED MODULE: ./pages/jobs/index.tsx












const FilterList = ({
  filters,
  handleFilterClick,
  clearFilters
}) => {
  const {
    isLoading
  } = (0,nextjs_auth0_.useUser)();

  if (isLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {});
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: filters.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `flex flex-wrap shadow-md mb-10 mx-10 pb-6 px-6 rounded bg-variant-2 pt-6`,
      children: [filters.map(filter => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => handleFilterClick(filter),
        className: "text-white bg-variant-2 h-10 w-auto cursor-pointer font-bold justify-center items-center flex rounded lg:mb-0 mr-2",
        children: [filter, /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "mr-2 ml-2 h-10 w-10 bg-variant-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/icon-remove.svg",
            className: "w-4 h-4 mt-3 ml-3",
            alt: "bg"
          })
        })]
      }, filter)), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: clearFilters,
        className: "font-bold ml-auto",
        children: "clear"
      })]
    })
  });
};

const JobsList = ({
  jobsData,
  filterFunc,
  handleTagClick
}) => {
  let filteredJobs = // @ts-ignore
  jobsData && typeof jobsData !== "string" ? jobsData.filter(filterFunc) : [];

  if (typeof jobsData !== "string") {
    if (jobsData.length === 0) {
      return /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "text-center text-variant-2 text-6xl font-bold mb-8",
        children: jobsData
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: filteredJobs.map(job => /*#__PURE__*/jsx_runtime_.jsx(components_JobComponent, {
          job: job,
          handleTagClick: handleTagClick
        }, job.id))
      });
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "text-center text-variant-2 text-6xl font-bold mb-8",
    children: jobsData
  });
};

const JobsPage = ({
  jobsData
}) => {
  const {
    0: filters,
    1: setFilters
  } = (0,external_react_.useState)([]);

  const filterFunc = ({
    role,
    level,
    tools
  }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    return filters.every(filter => tags.includes(filter));
  };

  const handleTagClick = tag => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = passedFilter => {
    setFilters(filters.filter(f => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-10 px-7 sm:px-10 md:px-20 xl:container mx-auto w-screen relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: "mb-8 mt-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(Navbar/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-center text-variant-2 text-6xl font-bold mb-8",
      children: "Jobs"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container m-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(FilterList, {
          filters: filters,
          handleFilterClick: handleFilterClick,
          clearFilters: clearFilters
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(JobsList, {
        jobsData: jobsData,
        filterFunc: filterFunc,
        handleTagClick: handleTagClick
      })]
    })]
  });
};

const getServerSideProps = (0,tools_.withSuperJSONProps)(async function getServerSideProps() {
  let data;

  try {
    data = await db/* default.internship.findMany */.Z.internship.findMany();
  } catch {
    data = "";
  }

  if (!data) {
    return {
      props: {
        jobsData: "Sorry no jobs are currently available"
      }
    };
  }

  return {
    props: {
      jobsData: data
    } // will be passed to the page component as props

  };
}, []);
/* harmony default export */ const jobs = ((0,tools_.withSuperJSONPage)(JobsPage));

/***/ }),

/***/ 84:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 875:
/***/ ((module) => {

module.exports = require("babel-plugin-superjson-next/tools");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [174], () => (__webpack_exec__(185)));
module.exports = __webpack_exports__;

})();