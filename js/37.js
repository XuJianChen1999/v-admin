(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/clipboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/clipboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      //复制的内容\n      clipboard: '',\n      activeName: '1',\n      collapseList: [{\n        title: '一致性',\n        content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'\n      }, {\n        title: '反馈',\n        content: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'\n      }, {\n        title: '效率',\n        content: '清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；'\n      }, {\n        title: '可控',\n        content: '用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'\n      }]\n    };\n  },\n  methods: {\n    //复制内容\n    onClickCopy: function onClickCopy(item) {\n      var input = document.createElement('input');\n      document.body.appendChild(input);\n      input.setAttribute('value', item);\n      input.select();\n      this.clipboard = input.value;\n      document.execCommand('copy') && document.execCommand('copy');\n      document.body.removeChild(input);\n      console.log(input.value);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/components/clipboard.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61f32ba4-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/clipboard.vue?vue&type=template&id=614d9677&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61f32ba4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/clipboard.vue?vue&type=template&id=614d9677&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"ComWrapper\",\n    [\n      _c(\n        \"el-collapse\",\n        {\n          attrs: { accordion: \"\" },\n          model: {\n            value: _vm.activeName,\n            callback: function($$v) {\n              _vm.activeName = $$v\n            },\n            expression: \"activeName\"\n          }\n        },\n        _vm._l(_vm.collapseList, function(item, index) {\n          return _c(\n            \"el-collapse-item\",\n            {\n              key: index,\n              staticClass: \"collapse-item\",\n              attrs: { title: item.title, name: index }\n            },\n            [\n              _c(\"div\", [_vm._v(_vm._s(item.content))]),\n              _c(\n                \"el-button\",\n                {\n                  staticClass: \"primary\",\n                  attrs: { type: \"primary\", icon: \"el-icon-document-copy\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.onClickCopy(item.content)\n                    }\n                  }\n                },\n                [_vm._v(\"点击复制\")]\n              )\n            ],\n            1\n          )\n        }),\n        1\n      ),\n      _c(\"el-input\", {\n        staticStyle: { \"margin-top\": \"60px\" },\n        attrs: { placeholder: \"请输入复制的内容\" },\n        model: {\n          value: _vm.clipboard,\n          callback: function($$v) {\n            _vm.clipboard = $$v\n          },\n          expression: \"clipboard\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/components/clipboard.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2261f32ba4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/components/clipboard.vue":
/*!********************************************!*\
  !*** ./src/views/components/clipboard.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clipboard_vue_vue_type_template_id_614d9677_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard.vue?vue&type=template&id=614d9677&scoped=true& */ \"./src/views/components/clipboard.vue?vue&type=template&id=614d9677&scoped=true&\");\n/* harmony import */ var _clipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clipboard.vue?vue&type=script&lang=js& */ \"./src/views/components/clipboard.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _clipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _clipboard_vue_vue_type_template_id_614d9677_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _clipboard_vue_vue_type_template_id_614d9677_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"614d9677\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/components/clipboard.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/components/clipboard.vue?");

/***/ }),

/***/ "./src/views/components/clipboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/views/components/clipboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./clipboard.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/clipboard.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/components/clipboard.vue?");

/***/ }),

/***/ "./src/views/components/clipboard.vue?vue&type=template&id=614d9677&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/views/components/clipboard.vue?vue&type=template&id=614d9677&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61f32ba4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clipboard_vue_vue_type_template_id_614d9677_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61f32ba4-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./clipboard.vue?vue&type=template&id=614d9677&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"61f32ba4-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/clipboard.vue?vue&type=template&id=614d9677&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61f32ba4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clipboard_vue_vue_type_template_id_614d9677_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61f32ba4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clipboard_vue_vue_type_template_id_614d9677_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/components/clipboard.vue?");

/***/ })

}]);