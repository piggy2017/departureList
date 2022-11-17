(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index/index.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.styl */ "./src/pages/index/index.styl");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/counter */ "./src/store/counter.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

/*
 * @Author: SunLin
 * @Date: 2022-07-04 14:10:38
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-04 17:28:56
 * @Description: 
 */









var Index = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* observer */ "b"])(function (prop) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      i = _useState2[0],
      seti = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    seti(_store_counter__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].counter);
  });

  var clickFunc = function clickFunc(type) {
    if (type === "add") {
      _store_counter__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].counterStore();
    } else if (type === "addparams") {
      _store_counter__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].counterParams(25);
    } else {
      _store_counter__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].decrement();
    }
  };

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {//counterStore.changeSelected(0);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "d"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: function onClick() {
        clickFunc("addparams");
      },
      children: "add addparams"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: function onClick() {
        clickFunc("add");
      },
      children: "add count"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "d"], {
      children: ["counter:", _store_counter__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].counter]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "d"], {
      children: ["i:", i]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: function onClick() {
        clickFunc("reduce");
      },
      children: "reduce count"
    })]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.styl":
/*!************************************!*\
  !*** ./src/pages/index/index.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map