require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.jsx":
/*!*****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/counter */ "./src/store/counter.js");
/* harmony import */ var _app_styl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.styl */ "./src/app.styl");
/* harmony import */ var _app_styl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_styl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









var store = {
  counterStore: _store_counter__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
};

var App = /*#__PURE__*/function (_Component) {
  Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "onLaunch",
    value: function onLaunch(options) {
      console.log("onLaunch", options);
    } // this.props.children 就是要渲染的页面

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* Provider */ "a"], {
        store: store,
        children: this.props.children
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.jsx */ "./node_modules/babel-loader/lib/index.js!./src/app.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");









var config = {"pages":["pages/index/index","pages/home/home"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"custom":true,"list":[{"iconPath":"./static/tabImg/sign1.png","selectedIconPath":"./static/tabImg/sign2.png","pagePath":"pages/index/index","text":"首页"},{"iconPath":"./static/tabImg/sign3.png","selectedIconPath":"./static/tabImg/sign4.png","pagePath":"pages/home/home","text":"我的"}],"usingComponents":{"customtabbar":"custom-tab-bar/index"},"color":"#828282","selectedColor":"#2469FE","backgroundColor":"#fff","borderStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_lib_index_js_app_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["initPxTransform"])({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/app.styl":
/*!**********************!*\
  !*** ./src/app.styl ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/app.jsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=app.js.map