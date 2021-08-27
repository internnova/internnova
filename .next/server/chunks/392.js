exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: ./components/Logo.tsx


const Logo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/logo.png",
    alt: "",
    className: "h-16 w-20"
  });
};
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(583);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Navbar.tsx








const Navbar = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center justify-between w-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {})
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex gap-2 items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(SocialButtons, {})
    })]
  });
};

const SocialButtons = () => {
  const socials = [{
    icon: index_esm/* FaTwitter */.fWC,
    link: 'https://twitter.com/_internhigh_'
  }, {
    icon: index_esm/* FaDiscord */.j2d,
    link: 'dsc.gg/intern'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: socials.map((social, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "rounded-md bg-variant-1 h-10 w-10 grid place-items-center cursor-pointer",
        href: social.link,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(social.icon, {
          className: "h-5 w-5"
        })
      }, i);
    })
  });
};

/* harmony default export */ const components_Navbar = (Navbar);

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;