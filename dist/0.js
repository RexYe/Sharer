webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5b2c171a", content, true);

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Hello_css__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Hello_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Hello_css__);
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





// 全局组件
// Vue.component('todo-item', {
// 	props:['todo'],
// 	template: '<div><li>{{todo.text}}</li></div>'
// })

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'hello',
	data() {
		return {
			iftopShow: false
		};
	},
	components: {},
	methods: {
		toTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			this.iftopShow = false;
		}

	},
	computed: {},
	watch: {},
	mounted: function () {
		const t = this;
		window.onscroll = function () {
			if (document.body.scrollTop > 0) {
				t.iftopShow = true;
			}
			if (document.body.scrollTop == 0) {
				t.iftopShow = false;
			}
		};
		// const t = this;
		// setInterval(function changetop(){
		// 	if(document.body.scrollTop>0){
		// 		t.iftopShow = true;
		// 	}
		// 	if(document.body.scrollTop==0){
		// 		t.iftopShow = false;
		// 	}
		// } ,900);
	}
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./Hello.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./Hello.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".index{width:100%;padding-top:5rem}.index .index-block{margin:0 auto;width:100%;height:25rem}.index .index-block img{position:absolute;top:50px;left:20%;width:700px;height:400px;z-index:1;opacity:.5}@-webkit-keyframes typing{0%{width:0}}@keyframes typing{0%{width:0}}@-webkit-keyframes blink-caret{50%{border-color:transparent}}@keyframes blink-caret{50%{border-color:transparent}}.typing-text{z-index:100;position:absolute;left:32%;color:#294057;font:700 270% Consolas,Monaco,monospace;border-right:.1em solid;width:116.5em;width:25ch;white-space:nowrap;overflow:hidden;-webkit-animation:typing 4.5s infinite steps(30),blink-caret .3s step-end infinite alternate;animation:typing 4.5s infinite steps(30),blink-caret .3s step-end infinite alternate;-webkit-animation-direction:alternate;animation-direction:alternate}.intro1{background:#178e6f}.intro1,.intro2{width:100%;height:600px}.intro3{position:fixed;bottom:100px;right:50px;width:50px;height:30px;z-index:500;cursor:pointer;-webkit-transition:opacity .6s;transition:opacity .6s}.intro3 img{width:27px;height:27px}.intro3:hover{opacity:.6}", ""]);

// exports


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "index-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "intro1"
  }), _vm._v(" "), _c('div', {
    staticClass: "intro2"
  }, [_vm._v("\n\t\t\t111\n\t\t")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.iftopShow),
      expression: "iftopShow"
    }],
    staticClass: "intro3",
    on: {
      "click": function($event) {
        _vm.toTop()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(122),
      "alt": ""
    }
  })])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-block"
  }, [_c('img', {
    staticClass: "building",
    attrs: {
      "src": __webpack_require__(123),
      "alt": ""
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "typing-text"
  }, [_vm._v("基于大学生的书籍共享平台 (*^__^*) ")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFNElEQVR4XuWb75UUNwzApQoCFXBUEFJBjgpiV5CjAkgFOSoAKuCowKICQgWECjgqyFGB8jTP3ucbZix5Vp4JL/tlv3ht+Wfrvxfhf/7BI/cfQrgGgFsiujlKjsMAhBAeIOI/zHwHAI+JSL53/xwCIITwBADeIqJ8AzP/DQDPiEi+d/3sDiBv/gMiPqh3mm/C070h7ApgbfMFxBEQdgOgbf4oCLsAEIMHAJ8Q8cKi4NkmiDoMN4x7AbhBxN8tm69uwg0RPev5zZaxwwGEEAIipi3CMbN4hqExwlAA+ep/mVt8K4w9YoTRAK4R8U/rhpfGMfNLIpKIcchnGIBzT3/mFX4hotsRBEYCOPv0KwjviOjqhwHgdfqzSPHhCLc45AaEEK4Q8a3niY3yCEMAxBgJAH7zBAAA71NKwXlOcAdQ0lxvQXPW6K4GIwBI4PNiEIBrIvrLc253AJ7C7TGXO4AQwiUi8ijhU0ofPed2BRBCuEDEL54CzudiZgmK3CpH3gDk9D8MBuCaIHkDcIv+1iB65wauADr9/1dmnix6Lo7+bLw5rvGANwDZ0K/KRr4xc5i7s2w8JYD6Sfn9x5TSpRGWOmxvALL5yzUjJnVDRPzUklpqBET0UN2ZccCuAJhZzepCCK8R8XlL/pSSm9xnTyShb8nSYoxNFWBmKXQ2I7msCk1PUgDUaxsP/LthmwGIoADwHBFDEWhvADHGO2YWWG80sGuAugHkXF/aWqfMjJmnJGUnAF9TSlN5PcZ4ijizR5EYoaty1AWg0daarnYIoVn+ZmY5qWaiZLABkxdYijq3dJbMAFrNDWaORETS7taKoK1Q1uIFSl1gzVZkCOYaYg+A1dMt0ZkRwJ2kyymld7VeShUJAF5pJfRqrdWqk6gDET21GEYTAC3JKVfbYsGLUMwsulr0Vfz/vW5xIxSecgENtjVpsgLQfHPRy+nRg4X81jFlYwaDq9qbKQy3CKItJnNUrlAamlo4a1l2cUy1jtyeR42JTCGzFYC6KWaWZy63Flibdw9w2lTtApfmExUjosfaWlYAaoWnxxNoQjX0f7rWVltjCZk9AUw9PKtwWyD0QvYEICUoLV8fbgiriNPUd/AEYMnza0NoAdZ7CT6nlKZXZZIDGAytnxHUQtzKt5eQWHObvZuXp3RF/9WaQZ7cFcALRHylSV1FaZtfhTQMYAm3u2TRZDYZwQ7DNswOVG7WpP/FYLoA6NA7uaolNfa0A4spcGtzRQ5PAFbyJVZ3swOV/ltV62Qw3QB09PynsvU5r8PmQlf+3/Tcjpn/IKLX2ubNuYAMzG1vib/VOL9SAzWCtAhZzWdxf1J5vrC+JjEZwSKkloLmcSLAk5wXmNRGgVAbVvUALJXner1eANL8FOO2egvqpywdarPKoL7OBrU6wbfcrC4VMN6Ce8GHx2uReWGjFZRt6Rt23YACIca46OKWqjCd/cL5wZ3cX3UAay146TWK6nU9sN4EIBcvJT+oVWEx9JRyGgCYXokvXFtpg333FmDpFliaLktqsQlA9gr3ipKjnrEtCT23BT1ubz7fZgBzCNoJdITTEk1O1aU1Q1bbll6r7wogQ5iSE0vuHWPU6niyebWBmkNzto5teYSzbkBlmK4s7/pDCCWT+5ztQrEh7wFg6vlbgxhxsZY1NXfoAkBbpAIlZfNbeSAhwWVpg4v3yGPEig/9g4S7Clg3P78tVRvsW0rJ1BTpXcsyftcbMBdI4gn5g9Sop/D/eQC5Hyi+XnKGQz6H3gCPFx7nUjsUwLnCe/z+X6N+oW5924AmAAAAAElFTkSuQmCC"

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/building.945236d.png";

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fddf0f1e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__(121);
function injectStyle (ssrContext) {
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fddf0f1e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fddf0f1e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});