(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/store/counter.js":
/*!******************************!*\
  !*** ./src/store/counter.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/*
 * @Author: SunLin
 * @Date: 2022-07-04 14:10:38
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-04 17:17:26
 * @Description: 
 */

var dataStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  counter: 100,
  counterStore: function counterStore() {
    this.counter++;
  },
  counterParams: function counterParams(count) {
    this.counter = this.counter + count;
  },
  increment: function increment() {
    this.counter++;
  },
  decrement: function decrement() {
    this.counter--;
  },
  incrementAsync: function incrementAsync() {
    var _this = this;

    setTimeout(function () {
      _this.counter++;
    }, 1000);
  },
  selected: 0,
  changeSelected: function changeSelected(index) {
    this.selected = index;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (dataStore);

/***/ })

}]);
//# sourceMappingURL=common.js.map