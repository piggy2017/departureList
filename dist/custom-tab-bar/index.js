(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["custom-tab-bar/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/custom-tab-bar/index.jsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/custom-tab-bar/index.jsx ***!
  \**********************************************************************/
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
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.styl */ "./src/custom-tab-bar/index.styl");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_tabImg_sign1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/tabImg/sign1.png */ "./src/static/tabImg/sign1.png");
/* harmony import */ var _static_tabImg_sign1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_tabImg_sign1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_tabImg_sign2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/tabImg/sign2.png */ "./src/static/tabImg/sign2.png");
/* harmony import */ var _static_tabImg_sign2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_tabImg_sign2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_tabImg_sign3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/tabImg/sign3.png */ "./src/static/tabImg/sign3.png");
/* harmony import */ var _static_tabImg_sign3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_tabImg_sign3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_tabImg_sign4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/tabImg/sign4.png */ "./src/static/tabImg/sign4.png");
/* harmony import */ var _static_tabImg_sign4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_tabImg_sign4_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/counter */ "./src/store/counter.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);

/*
 * @Author: SunLin
 * @Date: 2022-11-04 15:54:08
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-04 17:38:37
 * @Description: 
 */













var CustomTabBar = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* observer */ "b"])(function (prop) {
  console.log("自定义 tabbar 触发 渲染", prop);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      selected = _useState2[0],
      setselected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("#999"),
      _useState4 = Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("#B90220"),
      _useState6 = Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      selectedColor = _useState6[0],
      setselectedColor = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    pagePath: "/pages/index/index",
    iconPath: _static_tabImg_sign1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    selectedIconPath: _static_tabImg_sign2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    text: "首页"
  }, {
    pagePath: "/pages/home/home",
    iconPath: _static_tabImg_sign3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    selectedIconPath: _static_tabImg_sign4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    text: "我的"
  }]),
      _useState8 = Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      list = _useState8[0],
      setlist = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(9),
      _useState10 = Object(_Users_sunlin_Desktop_testm_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
      num = _useState10[0],
      setnum = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setselected(_store_counter__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].selected);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverView */ "c"], {
    className: "custom-tab",
    children: list.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverView */ "c"], {
        className: "custom-tab-item",
        onClick: function onClick() {
          switchTab(index);
        },
        "data-path": item.pagePath,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverImage */ "b"], {
          className: "custom-tab-item-img",
          src: selected === index ? item.selectedIconPath : item.iconPath
        }), index === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverView */ "c"], {
          className: "custom-tab-item-num",
          children: num
        }) : '', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverView */ "c"], {
          className: "custom-tab-item-text",
          style: {
            color: selected === index ? selectedColor : color
          },
          children: item.text
        })]
      }, index);
    })
  });

  function switchTab(index) {
    var url = list[index].pagePath;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.switchTab({
      url: url
    }); //setselected(index);

    _store_counter__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].changeSelected(index);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (CustomTabBar); // export default class customTabBar extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             selected: '',
//             color: '#999',
//             selectedColor: '#B90220',
//             backgroundColor: "#000",
//             list: [{
//                 pagePath: "/pages/index/index",
//                 iconPath: Icon1,
//                 selectedIconPath: Icon2,
//                 text: "首页"
//             },{
//                 pagePath: "/pages/home/home",
//                 iconPath: Icon3,
//                 selectedIconPath: Icon4,
//                 text: "我的"
//             }],
//             num: 9
//         }
//     }
//     render() {
//         return (
//             <CoverView className='custom-tab'>
//                 {
//                     this.state.list.map((item, index) => {
//                         return <CoverView className='custom-tab-item' onClick={this.switchTab.bind(this, index)} data-path={item.pagePath} key={index}>
//                             <CoverImage className='custom-tab-item-img' src={this.state.selected === index ? item.selectedIconPath : item.iconPath} />
//                             {index === 1 ? <CoverView className='custom-tab-item-num'>{this.state.num}</CoverView> : ''}
//                             <CoverView className='custom-tab-item-text' style={{ color: this.state.selected === index ? this.state.selectedColor : this.state.color }}>
//                                 {item.text}
//                             </CoverView>
//                         </CoverView>
//                     })
//                 }
//             </CoverView>
//         )
//     }
//     switchTab = (index) => {
//         const url = this.state.list[index].pagePath
//         Taro.switchTab({
//             url: url
//         })
//         let that = this
//         that.setState({
//             selected: index
//         })
//     }
// }

/***/ }),

/***/ "./src/custom-tab-bar/index.jsx":
/*!**************************************!*\
  !*** ./src/custom-tab-bar/index.jsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/custom-tab-bar/index.jsx");


var inst = Component(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createComponentConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'custom-tab-bar/index'))



/***/ }),

/***/ "./src/custom-tab-bar/index.styl":
/*!***************************************!*\
  !*** ./src/custom-tab-bar/index.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/static/tabImg/sign1.png":
/*!*************************************!*\
  !*** ./src/static/tabImg/sign1.png ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAApCAYAAABZa1t7AAAABHNCSVQICAgIfAhkiAAAAqxJREFUWIXtlzFMFEEUhr8ZKJAG6KCCQmuO0g6isaC6WGjsMBjudjdRoJKO1pjcYbHM0igkFloJBQmFiWdisCKeNTbExFZocCyYZ3ELgfMiNwvHJeb+5naSffO+my+7MwuXlFKpdK1cLvdf1nzqohMsLi52Dw4OPheRWQAR+WStvTM/P/+rbWArKytDzrnPwDBwAOyn13R1dY3NzMxUs86tsxYuLy/nnXM/UpANa+1IEAQjwAuAo6OjL8aYpyKS6c97F6XqXovIfQARmQvDcKkeWim1CvRlVesFVqduzzmXj6KooS5jzAiwDoyCv9qmwdJVeJcON6y1U3Nzc/vn1RljloAn6XChWCw+U0rJhcGaUXdesqj9J5iPuvNSr9Y5dyOKom/eYFnVNQF4olYp9ahQKLxspPYvsFKpdK23t/fVRdQ1ATcFLAF9Sqm3h4eHD+vVngGL4/i61vo9l6DuvMRxnNNar1JTu+ecu31arQYQEZUkybTWejeFWrPW5loFBRBFUdVaOw6sAcNa690kSaaPX8gqhXoD3KO2rcwGQbDaKqBGqVdbKBQedA0NDS0Aj4Gvzrl8GIZbVwkFsLm5WZ2cnNxSSt0Ebu3s7PxWxhgBsNYOXMZTd5GUy+X+np6en3BqE283VD1D5tNFq9MB800HzDcdMN90wHzjDWaMGb+Kmm7PBlVgNEmSfaACVJxzVRE5OD4ixXGcU0r1aa1zwLiI5AGSJKkWi8WxloAB/QAi0g/kgbxSCqUUxpgzN4pI/XjAp5GXSudcntrB7sCj7ABYS2ubjteKpbqm4ORjZRzIUVvJ0fS2j+lvVUQqYRiu+/TIBHY6acNMTZvJ//O6uKp0wHzTAfONBr5DbStpM8tphm2VbrAf2sjTKBM6CIIKcBfYbjMM1BgmgiCo/AEZxl73VY2XwAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/static/tabImg/sign2.png":
/*!*************************************!*\
  !*** ./src/static/tabImg/sign2.png ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAApCAYAAABZa1t7AAAABHNCSVQICAgIfAhkiAAAAkhJREFUWIXtlz1oE2EYx//Pe1JtaevHnEGTS20EySBYcHAQMri4OTgIdrn0gnZwUHFyknZwqFB6jUNcHFy6uNlBB4VGDNLFQC86BVfRhAasd3+HK7Q2Ns2brytyv+WF956PH88DdxzQKx5Rnb7FY70qJ90WOHubZzyPiwCubl99El/uu8uyGpqYafM6wGUAJ5uf8kFlyZjvtHbHYokc54W8d0D5l773Pfs1f+pH38XiWSaVggPwSpspLihWxZG3On2UTnAyxxtKWNKQAoAkhG9M27ur06vtiZk2nwDUKt4E+WLTV9a3vGx2LZbMMUXAAXm5K6kdPpNifXHkfauglqs0Z3iT5MceSgHAORG+S9i80ypo34klct6CUGZ7KNQEyecnfGWV8rJ1oFjc4nll0AFwqZ9SuxTWxdvKuvmh4r5iSfv3NKEcAEODkdotIra7JE6TmDnjLUIkN2ihvyCfVRzDAgCJWzyuDL4GcDFUqR1KvyAZJYY/h8MjBQAXjsKfE9P2awBGw7bZQ13h8EkBwKjWt3KQRGK6RGK6RGK6RGK6aItNTeg36STniE7wq4eCyRjwswEUN4DiBlGuArUGUK4GMakYMDYcnFMTgkw6uC9XgWuP2R+xsZHgHB8GMmkgk27/t3R8RKeT5ipth1hZCybULrUGsLIW5Oogpu3rZWyTSQerSsWCCU7GgvsPbnCWq8GqV9c7qd6FWL/5f14XgyIS0yUS00UBqIct8Q/qSsBC2BZ7EbAgAJC0vaeETCP8f8y6gAV3yZj9A3pyuYkLfcsiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/static/tabImg/sign3.png":
/*!*************************************!*\
  !*** ./src/static/tabImg/sign3.png ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tabImg/sign3.png";

/***/ }),

/***/ "./src/static/tabImg/sign4.png":
/*!*************************************!*\
  !*** ./src/static/tabImg/sign4.png ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tabImg/sign4.png";

/***/ })

},[["./src/custom-tab-bar/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map