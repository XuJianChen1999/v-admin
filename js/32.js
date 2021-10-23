(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/mosaic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/mosaic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      width: null,\n      height: null\n    };\n  },\n  methods: {\n    //生成canvas\n    generateCanvas: function generateCanvas() {\n      var _this = this;\n\n      var btn = document.querySelector(\"button\");\n      var img = new Image();\n      img.src = __webpack_require__(/*! ../../assets/users/1.png */ \"./src/assets/users/1.png\");\n\n      img.onload = function () {\n        var _ref = [img.width, img.height],\n            width = _ref[0],\n            height = _ref[1];\n\n        var _this$createCanvasAnd = _this.createCanvasAndCtx(width, height),\n            canvas = _this$createCanvasAnd.canvas,\n            ctx = _this$createCanvasAnd.ctx;\n\n        ctx.drawImage(img, 0, 0, width, height);\n        document.getElementById(\"wrapper\").appendChild(canvas, btn);\n      };\n    },\n    // 创建画布和上下文对象\n    createCanvasAndCtx: function createCanvasAndCtx(width, height) {\n      var canvas = document.createElement(\"canvas\");\n      canvas.setAttribute(\"width\", width);\n      canvas.setAttribute(\"height\", height);\n      canvas.setAttribute(\"onmouseout\", \"this.end()\");\n      canvas.setAttribute(\"onmousedown\", \"this.start()\");\n      canvas.setAttribute(\"onmouseup\", \"this.end()\");\n      var ctx = canvas.getContext(\"2d\");\n      return {\n        canvas: canvas,\n        ctx: ctx\n      };\n    },\n    //生成图片\n    generateImg: function generateImg() {\n      var canvas = document.querySelector(\"canvas\");\n      var newImg = new Image();\n      newImg.src = canvas.toDataURL(\"image/png\");\n      document.getElementById(\"wrapper\").appendChild(newImg, canvas);\n    },\n    // 开始打马赛克\n    start: function start() {\n      var _this2 = this;\n\n      var img = document.querySelector(\"img\");\n      var canvas = document.querySelector(\"canvas\");\n      var ctx = canvas.getContext(\"2d\");\n      var imgData = ctx.getImageData(0, 0, img.clientWidth, img.clientHeight);\n\n      canvas.onmousemove = function (e) {\n        //马赛克的程度，数字越大越模糊\n        var num = 10; //获取鼠标当前所在的像素RGBA\n\n        var color = _this2.getXY(imgData, e.offsetX, e.offsetY);\n\n        for (var k = 0; k < num; k++) {\n          for (var l = 0; l < num; l++) {\n            //设置imgData上坐标为(e.offsetX + l, e.offsetY + k)的的颜色\n            _this2.setXY(imgData, e.offsetX + l, e.offsetY + k, color);\n          }\n        } //更新canvas数据\n\n\n        ctx.putImageData(imgData, 0, 0);\n      };\n    },\n    end: function end() {\n      var canvas = document.querySelector(\"canvas\");\n      canvas.onmousemove = null;\n    },\n    // 设置x、y轴\n    setXY: function setXY(obj, x, y, color) {\n      var width = obj.width,\n          data = obj.data;\n      var w = width;\n      data[4 * (y * w + x)] = color[0];\n      data[4 * (y * w + x) + 1] = color[1];\n      data[4 * (y * w + x) + 2] = color[2];\n      data[4 * (y * w + x) + 3] = color[3];\n    },\n    getXY: function getXY(obj, x, y) {\n      var width = obj.width,\n          data = obj.data;\n      var w = width;\n      var color = [];\n      color[0] = data[4 * (y * w + x)];\n      color[1] = data[4 * (y * w + x) + 1];\n      color[2] = data[4 * (y * w + x) + 2];\n      color[3] = data[4 * (y * w + x) + 3];\n      return color;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/components/mosaic.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0614eea8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/mosaic.vue?vue&type=template&id=bad1150e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0614eea8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/mosaic.vue?vue&type=template&id=bad1150e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"ComWrapper\", [\n    _c(\"div\", { attrs: { id: \"wrapper\" } }),\n    _c(\"img\", { attrs: { src: __webpack_require__(/*! ../../assets/users/1.png */ \"./src/assets/users/1.png\") } }),\n    _c(\n      \"div\",\n      { staticStyle: { \"margin-top\": \"50px\" } },\n      [\n        _c(\n          \"el-button\",\n          { staticClass: \"primary\", on: { click: _vm.generateCanvas } },\n          [_vm._v(\"生成Canvas\")]\n        ),\n        _c(\n          \"el-button\",\n          { staticClass: \"primary\", on: { click: _vm.generateImg } },\n          [_vm._v(\"生成图片\")]\n        )\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/components/mosaic.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220614eea8-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/users/1.png":
/*!********************************!*\
  !*** ./src/assets/users/1.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/1.2afb3db4.png\";\n\n//# sourceURL=webpack:///./src/assets/users/1.png?");

/***/ }),

/***/ "./src/views/components/mosaic.vue":
/*!*****************************************!*\
  !*** ./src/views/components/mosaic.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mosaic_vue_vue_type_template_id_bad1150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mosaic.vue?vue&type=template&id=bad1150e& */ \"./src/views/components/mosaic.vue?vue&type=template&id=bad1150e&\");\n/* harmony import */ var _mosaic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mosaic.vue?vue&type=script&lang=js& */ \"./src/views/components/mosaic.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mosaic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mosaic_vue_vue_type_template_id_bad1150e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mosaic_vue_vue_type_template_id_bad1150e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/components/mosaic.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/components/mosaic.vue?");

/***/ }),

/***/ "./src/views/components/mosaic.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/views/components/mosaic.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mosaic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mosaic.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/mosaic.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mosaic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/components/mosaic.vue?");

/***/ }),

/***/ "./src/views/components/mosaic.vue?vue&type=template&id=bad1150e&":
/*!************************************************************************!*\
  !*** ./src/views/components/mosaic.vue?vue&type=template&id=bad1150e& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0614eea8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mosaic_vue_vue_type_template_id_bad1150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0614eea8-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mosaic.vue?vue&type=template&id=bad1150e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0614eea8-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/mosaic.vue?vue&type=template&id=bad1150e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0614eea8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mosaic_vue_vue_type_template_id_bad1150e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0614eea8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mosaic_vue_vue_type_template_id_bad1150e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/components/mosaic.vue?");

/***/ })

}]);