webpackJsonp([3],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AboutMe_css__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AboutMe_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AboutMe_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'aboutme',
  data() {
    return {};
  }
});

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./AboutMe.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./AboutMe.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".aboutme{width:100%}.aboutme .aboutme-container{margin:0 auto;line-height:15rem;padding:0 13%}.aboutme .aboutme-container h1{text-align:center;color:#294057;font-size:2.4rem;font-weight:400;height:3.3rem}.aboutme .aboutme-container h2{text-align:center;color:#294057;font-size:1.7rem}.aboutme .aboutme-container .title-left{margin-left:20%}.aboutme .aboutme-container .title-left,.aboutme .aboutme-container .title-right{width:500px;height:100px;padding:13px 20px;font-size:1.3rem;color:#fff;background:#294057}.aboutme .aboutme-container .title-right{margin-left:40%}.aboutme .aboutme-container span{font-size:.9rem}.aboutme .aboutme-container .intro{font-size:1rem;margin-top:-180px;margin-left:20%;margin-bottom:-100px;width:500px}.aboutme1{width:100%;height:600px}.aboutme1 .cooperation{padding:0 13%;color:#7e7e7e;font-size:2rem;height:5rem}.aboutme1 .cooperation h3{height:2rem}.aboutme1 .cooperation p{font-size:1rem;height:1rem}.aboutme2{width:100%;height:600px}.aboutme3{width:100%;height:300px;background:#2188b6}", ""]);

// exports


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "aboutme"
  }, [_c('div', {
    staticClass: "aboutme-container"
  }, [_c('h1', [_vm._v("关于")]), _vm._v(" "), _c('h2', [_vm._v("关于 Sharer")]), _vm._v(" "), _c('label', {
    staticClass: "title-left"
  }, [_vm._v("Sharer的故事与精神 /\n    "), _c('span', [_vm._v("Our Story & Spirit")])]), _vm._v(" "), _c('p', {
    staticClass: "intro"
  }, [_vm._v("山东高速公司共和国的活动151515151541511")]), _vm._v(" "), _c('label', {
    staticClass: "title-right"
  }, [_vm._v("Sharer的使命与愿景 /\n    "), _c('span', [_vm._v("Our Mission & Vision")])]), _vm._v(" "), _c('div', {
    staticClass: "aboutme1"
  }, [_c('div', {
    staticClass: "cooperation"
  }, [_c('h3', [_vm._v("联系我们")]), _vm._v(" "), _c('p', [_vm._v("邮箱:yeql_7@163.com")])])]), _vm._v(" "), _c('div', {
    staticClass: "aboutme2"
  })])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AboutMe_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fe5de17_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AboutMe_vue__ = __webpack_require__(127);
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AboutMe_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fe5de17_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AboutMe_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});