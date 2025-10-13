(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([[18],{

/***/ 5018:
/*!*****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n) {
  return {
    all: n = n || new Map(),
    on: function (t, e) {
      var i = n.get(t);
      i ? i.push(e) : n.set(t, [e]);
    },
    off: function (t, e) {
      var i = n.get(t);
      i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
    },
    emit: function (t, e) {
      var i = n.get(t);
      i && i.slice().map(function (n) {
        n(e);
      }), (i = n.get("*")) && i.slice().map(function (n) {
        n(t, e);
      });
    }
  };
}

/***/ })

}])
//# sourceMappingURL=18.js.map