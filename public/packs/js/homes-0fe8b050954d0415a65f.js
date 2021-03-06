/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/homes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/homes/styles/main.scss":
/*!***********************************************!*\
  !*** ./app/javascript/homes/styles/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/homes/styles/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/javascript/packs/homes.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/homes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _homes_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../homes/styles/main.scss */ "./app/javascript/homes/styles/main.scss");
/* harmony import */ var _homes_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_homes_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_turbolinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-turbolinks */ "./node_modules/vue-turbolinks/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-toasted */ "./node_modules/vue-toasted/dist/vue-toasted.min.js");
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_toasted__WEBPACK_IMPORTED_MODULE_4__);





vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_toasted__WEBPACK_IMPORTED_MODULE_4___default.a, {
  position: 'top-right',
  duration: '5000',
  theme: 'primary',
  className: 'toasted-custom',
  action: {
    text: 'X',
    onClick: function onClick(e, toastObject) {
      toastObject.goAway(0);
    }
  }
});
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_turbolinks__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.$I18n = window.I18n;
document.addEventListener('DOMContentLoaded', function () {
  var app = new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
    el: '[data-component="vue"]'
  });
});
document.addEventListener('page:load', function () {
  var app = new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
    el: '[data-component="vue"]'
  });
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/dist/bootstrap-vue.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--3-1!../../postcss-loader/src??ref--3-2!./bootstrap-vue.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-vue/dist/bootstrap-vue.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-vue/dist/bootstrap-vue.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/postcss-loader/src??ref--3-2!./node_modules/bootstrap-vue/dist/bootstrap-vue.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.js.org)\n */\n.alert.fade-enter-active, .alert.alert.fade-leave-active {\n  transition: opacity 0.15s linear;\n}\n.alert.fade-enter, .alert.fade-leave-to {\n  opacity: 0;\n}\n.card-img-left {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card-img-right {\n  border-top-right-radius: calc(0.25rem - 1px);\n  border-bottom-right-radius: calc(0.25rem - 1px);\n}\n.dropdown-toggle.dropdown-toggle-no-caret:after {\n  display: none !important;\n}\n.b-dropdown-form {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  width: 100%;\n  clear: both;\n  font-weight: 400;\n}\n.b-dropdown-form:first-child {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.b-dropdown-form:last-child {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.b-dropdown-text {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  margin-bottom: 0;\n  width: 100%;\n  clear: both;\n  font-weight: lighter;\n}\n.b-dropdown-text:first-child {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.b-dropdown-text:last-child {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n/* workaround for https://github.com/bootstrap-vue/bootstrap-vue/issues/1560 */\n/* workaround for https://github.com/bootstrap-vue/bootstrap-vue/issues/2114 */\n/* based on: bootstrap/scss/_input-group.scss */\n.input-group > .input-group-prepend > .btn-group > .btn,\n.input-group > .input-group-append:not(:last-child) > .btn-group > .btn,\n.input-group > .input-group-append:last-child > .btn-group:not(:last-child):not(.dropdown-toggle) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .input-group-append > .btn-group > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .btn-group > .btn,\n.input-group > .input-group-prepend:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.was-validated .form-control:invalid,\n.was-validated .form-control:valid, .form-control.is-invalid, .form-control.is-valid {\n  background-position: right calc(0.375em + 0.1875rem) center;\n}\ninput[type=\"color\"].form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\ninput[type=\"color\"].form-control.form-control-sm,\n.input-group-sm input[type=\"color\"].form-control {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\ninput[type=\"color\"].form-control.form-control-lg,\n.input-group-lg input[type=\"color\"].form-control {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\ninput[type=\"color\"].form-control:disabled {\n  background-color: #adb5bd;\n  opacity: 0.65;\n}\n/* Base .input-group > .custom-range styling (no PR yet on BS V4) */\n.input-group > .custom-range {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group > .custom-range + .form-control,\n.input-group > .custom-range + .form-control-plaintext,\n.input-group > .custom-range + .custom-select,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-range + .custom-file {\n  margin-left: -1px;\n}\n.input-group > .form-control + .custom-range,\n.input-group > .form-control-plaintext + .custom-range,\n.input-group > .custom-select + .custom-range,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-file + .custom-range {\n  margin-left: -1px;\n}\n.input-group > .custom-range:focus {\n  z-index: 3;\n}\n.input-group > .custom-range:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .custom-range:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .custom-range {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0 0.75rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  height: calc(1.5em + 0.75rem + 2px);\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .input-group > .custom-range {\n    transition: none;\n  }\n}\n.input-group > .custom-range:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.input-group > .custom-range:disabled, .input-group > .custom-range[readonly] {\n  background-color: #e9ecef;\n}\n.input-group-lg > .custom-range {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0 1rem;\n  border-radius: 0.3rem;\n}\n.input-group-sm > .custom-range {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0 0.5rem;\n  border-radius: 0.2rem;\n}\n/* b-form-input: custom-range validation styling - valid (no PR yet for BS V4.2) */\n.was-validated .input-group .custom-range:valid, .input-group .custom-range.is-valid {\n  border-color: #28a745;\n}\n.was-validated .input-group .custom-range:valid:focus, .input-group .custom-range.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-range:valid:focus::-webkit-slider-thumb, .custom-range.is-valid:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid:focus::-moz-range-thumb, .custom-range.is-valid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid:focus::-ms-thumb, .custom-range.is-valid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid::-webkit-slider-thumb, .custom-range.is-valid::-webkit-slider-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-webkit-slider-thumb:active, .custom-range.is-valid::-webkit-slider-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-webkit-slider-runnable-track, .custom-range.is-valid::-webkit-slider-runnable-track {\n  background-color: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid::-moz-range-thumb, .custom-range.is-valid::-moz-range-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-moz-range-thumb:active, .custom-range.is-valid::-moz-range-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-moz-range-track, .custom-range.is-valid::-moz-range-track {\n  background: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid ~ .valid-feedback,\n.was-validated .custom-range:valid ~ .valid-tooltip, .custom-range.is-valid ~ .valid-feedback,\n.custom-range.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-range:valid::-ms-thumb, .custom-range.is-valid::-ms-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-ms-thumb:active, .custom-range.is-valid::-ms-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-ms-track-lower, .custom-range.is-valid::-ms-track-lower {\n  background: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid::-ms-track-upper, .custom-range.is-valid::-ms-track-upper {\n  background: rgba(40, 167, 69, 0.35);\n}\n.was-validated .input-group .custom-range:invalid, .input-group .custom-range.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .input-group .custom-range:invalid:focus, .input-group .custom-range.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-range:invalid:focus::-webkit-slider-thumb, .custom-range.is-invalid:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid:focus::-moz-range-thumb, .custom-range.is-invalid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid:focus::-ms-thumb, .custom-range.is-invalid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid::-webkit-slider-thumb, .custom-range.is-invalid::-webkit-slider-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-webkit-slider-thumb:active, .custom-range.is-invalid::-webkit-slider-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-webkit-slider-runnable-track, .custom-range.is-invalid::-webkit-slider-runnable-track {\n  background-color: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid::-moz-range-thumb, .custom-range.is-invalid::-moz-range-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-moz-range-thumb:active, .custom-range.is-invalid::-moz-range-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-moz-range-track, .custom-range.is-invalid::-moz-range-track {\n  background: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid ~ .invalid-feedback,\n.was-validated .custom-range:invalid ~ .invalid-tooltip, .custom-range.is-invalid ~ .invalid-feedback,\n.custom-range.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-range:invalid::-ms-thumb, .custom-range.is-invalid::-ms-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-ms-thumb:active, .custom-range.is-invalid::-ms-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-ms-track-lower, .custom-range.is-invalid::-ms-track-lower {\n  background: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid::-ms-track-upper, .custom-range.is-invalid::-ms-track-upper {\n  background: rgba(220, 53, 69, 0.35);\n}\n/* b-table: general styling */\n.b-table.table.b-table-fixed {\n  /* fixed width columns */\n  table-layout: fixed;\n}\n.b-table.table[aria-busy=\"true\"] {\n  opacity: 0.55;\n}\n.b-table.table > tbody > tr.b-table-details > td {\n  border-top: none !important;\n}\n.b-table.table > caption {\n  caption-side: bottom;\n}\n.b-table.table > caption.b-table-caption-top {\n  caption-side: top !important;\n}\n.b-table.table > thead > tr > th,\n.b-table.table > thead > tr > td,\n.b-table.table > tfoot > tr > th,\n.b-table.table > tfoot > tr > td {\n  position: relative;\n}\n/* b-table: header sort styling */\n.b-table.table > thead > tr > th[aria-sort],\n.b-table.table > tfoot > tr > th[aria-sort] {\n  position: relative;\n  padding-right: 1.125em;\n  cursor: pointer;\n}\n.b-table.table > thead > tr > th[aria-sort]::after,\n.b-table.table > tfoot > tr > th[aria-sort]::after {\n  position: absolute;\n  display: block;\n  bottom: 0;\n  right: 0.35em;\n  padding-bottom: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  opacity: 0.4;\n  content: \"\\2195\";\n  speak: none;\n}\n.b-table.table > thead > tr > th[aria-sort][aria-sort=\"ascending\"]::after,\n.b-table.table > tfoot > tr > th[aria-sort][aria-sort=\"ascending\"]::after {\n  opacity: 1;\n  content: \"\\2193\";\n}\n.b-table.table > thead > tr > th[aria-sort][aria-sort=\"descending\"]::after,\n.b-table.table > tfoot > tr > th[aria-sort][aria-sort=\"descending\"]::after {\n  opacity: 1;\n  content: \"\\2191\";\n}\n/* b-table: stackled tables */\n@media (max-width: 575.98px) {\n  .b-table.table.b-table-stacked-sm {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-sm > caption,\n  .b-table.table.b-table-stacked-sm > tbody,\n  .b-table.table.b-table-stacked-sm > tbody > tr,\n  .b-table.table.b-table-stacked-sm > tbody > tr > td,\n  .b-table.table.b-table-stacked-sm > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-sm > thead,\n  .b-table.table.b-table-stacked-sm > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-sm > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-sm > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-sm > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-sm > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-sm > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr.top-row, .b-table.table.b-table-stacked-sm > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 767.98px) {\n  .b-table.table.b-table-stacked-md {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-md > caption,\n  .b-table.table.b-table-stacked-md > tbody,\n  .b-table.table.b-table-stacked-md > tbody > tr,\n  .b-table.table.b-table-stacked-md > tbody > tr > td,\n  .b-table.table.b-table-stacked-md > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-md > thead,\n  .b-table.table.b-table-stacked-md > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-md > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-md > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-md > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-md > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-md > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr.top-row, .b-table.table.b-table-stacked-md > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 991.98px) {\n  .b-table.table.b-table-stacked-lg {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-lg > caption,\n  .b-table.table.b-table-stacked-lg > tbody,\n  .b-table.table.b-table-stacked-lg > tbody > tr,\n  .b-table.table.b-table-stacked-lg > tbody > tr > td,\n  .b-table.table.b-table-stacked-lg > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-lg > thead,\n  .b-table.table.b-table-stacked-lg > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-lg > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-lg > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-lg > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-lg > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-lg > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr.top-row, .b-table.table.b-table-stacked-lg > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 1199.98px) {\n  .b-table.table.b-table-stacked-xl {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-xl > caption,\n  .b-table.table.b-table-stacked-xl > tbody,\n  .b-table.table.b-table-stacked-xl > tbody > tr,\n  .b-table.table.b-table-stacked-xl > tbody > tr > td,\n  .b-table.table.b-table-stacked-xl > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-xl > thead,\n  .b-table.table.b-table-stacked-xl > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-xl > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-xl > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-xl > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-xl > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-xl > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr.top-row, .b-table.table.b-table-stacked-xl > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n.b-table.table.b-table-stacked {\n  display: block;\n  width: 100%;\n}\n.b-table.table.b-table-stacked > caption,\n.b-table.table.b-table-stacked > tbody,\n.b-table.table.b-table-stacked > tbody > tr,\n.b-table.table.b-table-stacked > tbody > tr > td,\n.b-table.table.b-table-stacked > tbody > tr > td {\n  display: block;\n}\n.b-table.table.b-table-stacked > thead,\n.b-table.table.b-table-stacked > tfoot {\n  display: none;\n}\n.b-table.table.b-table-stacked > thead > tr.b-table-top-row,\n.b-table.table.b-table-stacked > thead > tr.b-table-bottom-row,\n.b-table.table.b-table-stacked > tfoot > tr.b-table-top-row,\n.b-table.table.b-table-stacked > tfoot > tr.b-table-bottom-row {\n  display: none;\n}\n.b-table.table.b-table-stacked > caption {\n  caption-side: top !important;\n}\n.b-table.table.b-table-stacked > tbody > tr > [data-label] {\n  display: grid;\n  grid-template-columns: 40% auto;\n  grid-gap: 0.25rem 1rem;\n}\n.b-table.table.b-table-stacked > tbody > tr > [data-label]::before {\n  content: attr(data-label);\n  display: inline;\n  text-align: right;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  font-style: normal;\n}\n.b-table.table.b-table-stacked > tbody > tr.top-row, .b-table.table.b-table-stacked > tbody > tr.bottom-row {\n  display: none;\n}\n.b-table.table.b-table-stacked > tbody > tr > :first-child {\n  border-top-width: 3px;\n}\n/* b-table: selectable rows */\ntable.b-table.b-table-selectable > tbody > tr {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=bootstrap-vue.css.map */", "",{"version":3,"sources":["../src/index.scss","bootstrap-vue.css","../src/components/alert/_alert.scss","../node_modules/bootstrap/scss/_variables.scss","../src/components/card/_card-img.scss","../node_modules/bootstrap/scss/mixins/_border-radius.scss","../src/components/dropdown/_dropdown.scss","../src/components/dropdown/_dropdown-form.scss","../src/components/dropdown/_dropdown-text.scss","../src/components/input-group/_input-group.scss","../src/components/form-input/_form-input.scss","../node_modules/bootstrap/scss/mixins/_transition.scss","../node_modules/bootstrap/scss/mixins/_forms.scss","../src/components/table/_table.scss","../src/_variables.scss","../node_modules/bootstrap/scss/mixins/_breakpoints.scss"],"names":[],"mappings":"AAAA;;ECEE;ACFF;EAGI,gCCyP6C;AFvPjD;ACLA;EAQI,UAAU;ADCd;AGTA;ECmCI,2CFqxBoF;EEpxBpF,8CFoxBoF;AF1yBxF;AGVA;ECiBI,4CFmyBoF;EElyBpF,+CFkyBoF;AFryBxF;AKhBA;EAEI,wBAAwB;ALkB5B;AMpBA;EACE,qBAAqB;EACrB,uBJiwBwC;EIhwBxC,WAAW;EACX,WAAW;EACX,gBJmR+B;AF5PjC;AM5BA;EFWI,2CFyuB4F;EExuB5F,4CFwuB4F;AFntBhG;AMjCA;EFyBI,+CF2tB4F;EE1tB5F,8CF0tB4F;AF9sBhG;AOtCA;EACE,qBAAqB;EACrB,uBLiwBwC;EKhwBxC,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,oBLgRmC;AFvOrC;AO/CA;EHWI,2CFyuB4F;EExuB5F,4CFwuB4F;AFhsBhG;AOpDA;EHyBI,+CF2tB4F;EE1tB5F,8CF0tB4F;AF3rBhG;AQtDE,8EAAA;AACA,8EAAA;AACA,+CAAA;AACA;;;EAKM,0BAA0B;EAC1B,6BAA6B;ARuDrC;AQ7DE;;;EAcM,yBAAyB;EACzB,4BAA4B;ARqDpC;ASxEI;;EAIE,2DAA6D;ATyEnE;ASlEA;EACE,mCP6d2H;EO3d3H,yBAA4D;AToE9D;ASjEA;;EAEE,kCPudqI;EOrdrI,yBAA4D;ATmE9D;AShEA;;EAEE,gCPidqI;EOhdrI,yBAA4D;ATmE9D;AShEA;EAEE,yBPzBgB;EO0BhB,aPyY+B;AFvUjC;AS/DA,mEAAA;AACA;EAEI,kBAAkB;EAClB,cAAc;EACd,SAAS;EACT,gBAAgB;ATiEpB;AStEA;;;;;EAYM,iBPiL2B;AF/GjC;AS9EA;;;;;EAsBM,iBPuK2B;AFvGjC;AStFA;EA2BI,UAAU;AT+Dd;AS1FA;ELrBI,0BKqDgC;ELpDhC,6BKoDgC;AT+DpC;AS/FA;ELPI,yBK0C+B;ELzC/B,4BKyC+B;ATiEnC;ASpGA;EAwCI,mCP4ZyH;EO3ZzH,kBP4SgC;EO3ShC,sBP7EW;EO8EX,4BAA4B;EAC5B,yBP3Ec;EO4Ed,mCPuZyH;EOpZvH,sBPgJ8B;EQpO9B,wER4e4F;AFzVlG;AU9II;ED+BJ;IC9BM,gBAAgB;EVkJpB;AACF;AWlJE;EACE,cTAc;ESCd,sBTRW;ESSX,qBTgdsE;ES/ctE,UAAU;EAKR,gDTcW;AFmIjB;AS7HA;EA2DM,yBP5FY;AFkKlB;ASjEA;EACE,gCPqYqI;EOpYrI,ePkSgC;EEzY9B,qBFsO+B;AF1DnC;ASjEA;EACE,kCP8XqI;EO7XrI,iBPuRiC;EEpY/B,qBFuO+B;AFrDnC;ASjEA,kFAAA;AAII;EAEE,qBPjFW;AFiJjB;ASlEI;EAKI,qBPpFS;EOqFT,gDPrFS;AFsJjB;AS3DI;EAKM,gDAAiF;AT0D3F;AS/DI;EAQM,gDAAiF;AT2D3F;ASnEI;EAWM,gDAAiF;AT4D3F;ASvEI;EAgBI,yBP3GS;EO4GT,sBAAsB;AT2D9B;AS5EI;EAoBM,yBAAsC;EACtC,sBAAsB;AT4DhC;ASjFI;EA0BI,yCPrHS;AFgLjB;ASrFI;EA8BI,yBPzHS;EO0HT,sBAAsB;AT2D9B;AS1FI;EAkCM,yBAAsC;EACtC,sBAAsB;AT4DhC;AS/FI;EAwCI,mCPnIS;AF8LjB;ASnGI;;;EA+CI,cAAc;AT0DtB;ASzGI;EAmDI,yBP9IS;EO+IT,sBAAsB;AT0D9B;AS9GI;EAuDM,yBAAsC;EACtC,sBAAsB;AT2DhC;ASnHI;EA6DI,mCPxJS;AFkNjB;ASvHI;EAgEI,mCP3JS;AFsNjB;ASvII;EAEE,qBPpFW;AF6NjB;AS3II;EAKI,qBPvFS;EOwFT,gDPxFS;AFkOjB;ASpII;EAKM,gDAAiF;ATmI3F;ASxII;EAQM,gDAAiF;AToI3F;AS5II;EAWM,gDAAiF;ATqI3F;AShJI;EAgBI,yBP9GS;EO+GT,sBAAsB;AToI9B;ASrJI;EAoBM,yBAAsC;EACtC,sBAAsB;ATqIhC;AS1JI;EA0BI,yCPxHS;AF4PjB;AS9JI;EA8BI,yBP5HS;EO6HT,sBAAsB;AToI9B;ASnKI;EAkCM,yBAAsC;EACtC,sBAAsB;ATqIhC;ASxKI;EAwCI,mCPtIS;AF0QjB;AS5KI;;;EA+CI,cAAc;ATmItB;ASlLI;EAmDI,yBPjJS;EOkJT,sBAAsB;ATmI9B;ASvLI;EAuDM,yBAAsC;EACtC,sBAAsB;AToIhC;AS5LI;EA6DI,mCP3JS;AF8RjB;AShMI;EAgEI,mCP9JS;AFkSjB;AY1UA,6BAAA;AACA;EAGI,wBAAA;EACA,mBAAmB;AZ2UvB;AY/UA;EASI,aCJuB;Ab8U3B;AYnVA;EAcI,2BAA2B;AZyU/B;AYvVA;EAkBI,oBAAoB;AZyUxB;AY3VA;EAqBM,4BAA4B;AZ0UlC;AY/VA;;;;EAgCQ,kBAAkB;AZsU1B;AYhUA,iCAAA;AACA;;EAQU,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;AZ6TzB;AYvUA;;EAcY,kBAAkB;EAClB,cAAc;EACd,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,WAAW;AZ8TvB;AYrVA;;EA6BY,UAAU;EACV,gBAAgB;AZ6T5B;AY3VA;;EAoCY,UAAU;EACV,gBAAgB;AZ4T5B;AYpTA,6BAAA;AEZI;EFeJ;IAOQ,cAAc;IACd,WAAW;EZgTjB;EYxTF;;;;;IAgBU,cAAc;EZ+StB;EY/TF;;IAsBU,aAAa;EZ6SrB;EYnUF;;;;IA0BY,aAAa;EZ+SvB;EYzUF;IAgCU,4BAA4B;EZ4SpC;EY5UF;IAwCc,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;EZuSlC;EYjVF;IA8CgB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;EZsShC;EYzVF;IA0Dc,aAAa;EZkSzB;EY5VF;IA+Dc,qBAA2C;EZgSvD;AACF;Ac/WI;EFeJ;IAOQ,cAAc;IACd,WAAW;EZ8VjB;EYtWF;;;;;IAgBU,cAAc;EZ6VtB;EY7WF;;IAsBU,aAAa;EZ2VrB;EYjXF;;;;IA0BY,aAAa;EZ6VvB;EYvXF;IAgCU,4BAA4B;EZ0VpC;EY1XF;IAwCc,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;EZqVlC;EY/XF;IA8CgB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;EZoVhC;EYvYF;IA0Dc,aAAa;EZgVzB;EY1YF;IA+Dc,qBAA2C;EZ8UvD;AACF;Ac7ZI;EFeJ;IAOQ,cAAc;IACd,WAAW;EZ4YjB;EYpZF;;;;;IAgBU,cAAc;EZ2YtB;EY3ZF;;IAsBU,aAAa;EZyYrB;EY/ZF;;;;IA0BY,aAAa;EZ2YvB;EYraF;IAgCU,4BAA4B;EZwYpC;EYxaF;IAwCc,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;EZmYlC;EY7aF;IA8CgB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;EZkYhC;EYrbF;IA0Dc,aAAa;EZ8XzB;EYxbF;IA+Dc,qBAA2C;EZ4XvD;AACF;Ac3cI;EFeJ;IAOQ,cAAc;IACd,WAAW;EZ0bjB;EYlcF;;;;;IAgBU,cAAc;EZybtB;EYzcF;;IAsBU,aAAa;EZubrB;EY7cF;;;;IA0BY,aAAa;EZybvB;EYndF;IAgCU,4BAA4B;EZsbpC;EYtdF;IAwCc,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;EZiblC;EY3dF;IA8CgB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;EZgbhC;EYneF;IA0Dc,aAAa;EZ4azB;EYteF;IA+Dc,qBAA2C;EZ0avD;AACF;AY1eA;EAOQ,cAAc;EACd,WAAW;AZuenB;AY/eA;;;;;EAgBU,cAAc;AZuexB;AYvfA;;EAsBU,aAAa;AZsevB;AY5fA;;;;EA0BY,aAAa;AZyezB;AYngBA;EAgCU,4BAA4B;AZuetC;AYvgBA;EAwCc,aAAa;EACb,+BAA+B;EAC/B,sBAAsB;AZmepC;AY7gBA;EA8CgB,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;AZmelC;AYthBA;EA0Dc,aAAa;AZge3B;AY1hBA;EA+Dc,qBAA2C;AZ+dzD;AYtdA,6BAAA;AACA;EACE,eAAe;EACf,yBAAiB;EAAjB,sBAAiB;EAAjB,qBAAiB;EAAjB,iBAAiB;AZydnB;AAIA,4CAA4C","file":"bootstrap-vue.css","sourcesContent":["/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.js.org)\n */\n// Bootstrap\n\n@import \"node_modules/bootstrap/scss/functions\";\n@import \"node_modules/bootstrap/scss/variables\";\n@import \"node_modules/bootstrap/scss/mixins\";\n\n// Bootstrap Vue\n\n@import \"variables\";\n@import \"components/index\";\n","/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.js.org)\n */\n.alert.fade-enter-active, .alert.alert.fade-leave-active {\n  transition: opacity 0.15s linear;\n}\n\n.alert.fade-enter, .alert.fade-leave-to {\n  opacity: 0;\n}\n\n.card-img-left {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-img-right {\n  border-top-right-radius: calc(0.25rem - 1px);\n  border-bottom-right-radius: calc(0.25rem - 1px);\n}\n\n.dropdown-toggle.dropdown-toggle-no-caret:after {\n  display: none !important;\n}\n\n.b-dropdown-form {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  width: 100%;\n  clear: both;\n  font-weight: 400;\n}\n\n.b-dropdown-form:first-child {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.b-dropdown-form:last-child {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.b-dropdown-text {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  margin-bottom: 0;\n  width: 100%;\n  clear: both;\n  font-weight: lighter;\n}\n\n.b-dropdown-text:first-child {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.b-dropdown-text:last-child {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n/* workaround for https://github.com/bootstrap-vue/bootstrap-vue/issues/1560 */\n/* workaround for https://github.com/bootstrap-vue/bootstrap-vue/issues/2114 */\n/* based on: bootstrap/scss/_input-group.scss */\n.input-group > .input-group-prepend > .btn-group > .btn,\n.input-group > .input-group-append:not(:last-child) > .btn-group > .btn,\n.input-group > .input-group-append:last-child > .btn-group:not(:last-child):not(.dropdown-toggle) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn-group > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .btn-group > .btn,\n.input-group > .input-group-prepend:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.was-validated .form-control:invalid,\n.was-validated .form-control:valid, .form-control.is-invalid, .form-control.is-valid {\n  background-position: right calc(0.375em + 0.1875rem) center;\n}\n\ninput[type=\"color\"].form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=\"color\"].form-control.form-control-sm,\n.input-group-sm input[type=\"color\"].form-control {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=\"color\"].form-control.form-control-lg,\n.input-group-lg input[type=\"color\"].form-control {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=\"color\"].form-control:disabled {\n  background-color: #adb5bd;\n  opacity: 0.65;\n}\n\n/* Base .input-group > .custom-range styling (no PR yet on BS V4) */\n.input-group > .custom-range {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n.input-group > .custom-range + .form-control,\n.input-group > .custom-range + .form-control-plaintext,\n.input-group > .custom-range + .custom-select,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-range + .custom-file {\n  margin-left: -1px;\n}\n\n.input-group > .form-control + .custom-range,\n.input-group > .form-control-plaintext + .custom-range,\n.input-group > .custom-select + .custom-range,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-file + .custom-range {\n  margin-left: -1px;\n}\n\n.input-group > .custom-range:focus {\n  z-index: 3;\n}\n\n.input-group > .custom-range:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .custom-range:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group > .custom-range {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0 0.75rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  height: calc(1.5em + 0.75rem + 2px);\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .input-group > .custom-range {\n    transition: none;\n  }\n}\n\n.input-group > .custom-range:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.input-group > .custom-range:disabled, .input-group > .custom-range[readonly] {\n  background-color: #e9ecef;\n}\n\n.input-group-lg > .custom-range {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0 1rem;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .custom-range {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0 0.5rem;\n  border-radius: 0.2rem;\n}\n\n/* b-form-input: custom-range validation styling - valid (no PR yet for BS V4.2) */\n.was-validated .input-group .custom-range:valid, .input-group .custom-range.is-valid {\n  border-color: #28a745;\n}\n\n.was-validated .input-group .custom-range:valid:focus, .input-group .custom-range.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .custom-range:valid:focus::-webkit-slider-thumb, .custom-range.is-valid:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n\n.was-validated .custom-range:valid:focus::-moz-range-thumb, .custom-range.is-valid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n\n.was-validated .custom-range:valid:focus::-ms-thumb, .custom-range.is-valid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n\n.was-validated .custom-range:valid::-webkit-slider-thumb, .custom-range.is-valid::-webkit-slider-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n\n.was-validated .custom-range:valid::-webkit-slider-thumb:active, .custom-range.is-valid::-webkit-slider-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n\n.was-validated .custom-range:valid::-webkit-slider-runnable-track, .custom-range.is-valid::-webkit-slider-runnable-track {\n  background-color: rgba(40, 167, 69, 0.35);\n}\n\n.was-validated .custom-range:valid::-moz-range-thumb, .custom-range.is-valid::-moz-range-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n\n.was-validated .custom-range:valid::-moz-range-thumb:active, .custom-range.is-valid::-moz-range-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n\n.was-validated .custom-range:valid::-moz-range-track, .custom-range.is-valid::-moz-range-track {\n  background: rgba(40, 167, 69, 0.35);\n}\n\n.was-validated .custom-range:valid ~ .valid-feedback,\n.was-validated .custom-range:valid ~ .valid-tooltip, .custom-range.is-valid ~ .valid-feedback,\n.custom-range.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-range:valid::-ms-thumb, .custom-range.is-valid::-ms-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n\n.was-validated .custom-range:valid::-ms-thumb:active, .custom-range.is-valid::-ms-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n\n.was-validated .custom-range:valid::-ms-track-lower, .custom-range.is-valid::-ms-track-lower {\n  background: rgba(40, 167, 69, 0.35);\n}\n\n.was-validated .custom-range:valid::-ms-track-upper, .custom-range.is-valid::-ms-track-upper {\n  background: rgba(40, 167, 69, 0.35);\n}\n\n.was-validated .input-group .custom-range:invalid, .input-group .custom-range.is-invalid {\n  border-color: #dc3545;\n}\n\n.was-validated .input-group .custom-range:invalid:focus, .input-group .custom-range.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .custom-range:invalid:focus::-webkit-slider-thumb, .custom-range.is-invalid:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n\n.was-validated .custom-range:invalid:focus::-moz-range-thumb, .custom-range.is-invalid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n\n.was-validated .custom-range:invalid:focus::-ms-thumb, .custom-range.is-invalid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n\n.was-validated .custom-range:invalid::-webkit-slider-thumb, .custom-range.is-invalid::-webkit-slider-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n\n.was-validated .custom-range:invalid::-webkit-slider-thumb:active, .custom-range.is-invalid::-webkit-slider-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n\n.was-validated .custom-range:invalid::-webkit-slider-runnable-track, .custom-range.is-invalid::-webkit-slider-runnable-track {\n  background-color: rgba(220, 53, 69, 0.35);\n}\n\n.was-validated .custom-range:invalid::-moz-range-thumb, .custom-range.is-invalid::-moz-range-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n\n.was-validated .custom-range:invalid::-moz-range-thumb:active, .custom-range.is-invalid::-moz-range-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n\n.was-validated .custom-range:invalid::-moz-range-track, .custom-range.is-invalid::-moz-range-track {\n  background: rgba(220, 53, 69, 0.35);\n}\n\n.was-validated .custom-range:invalid ~ .invalid-feedback,\n.was-validated .custom-range:invalid ~ .invalid-tooltip, .custom-range.is-invalid ~ .invalid-feedback,\n.custom-range.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-range:invalid::-ms-thumb, .custom-range.is-invalid::-ms-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n\n.was-validated .custom-range:invalid::-ms-thumb:active, .custom-range.is-invalid::-ms-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n\n.was-validated .custom-range:invalid::-ms-track-lower, .custom-range.is-invalid::-ms-track-lower {\n  background: rgba(220, 53, 69, 0.35);\n}\n\n.was-validated .custom-range:invalid::-ms-track-upper, .custom-range.is-invalid::-ms-track-upper {\n  background: rgba(220, 53, 69, 0.35);\n}\n\n/* b-table: general styling */\n.b-table.table.b-table-fixed {\n  /* fixed width columns */\n  table-layout: fixed;\n}\n\n.b-table.table[aria-busy=\"true\"] {\n  opacity: 0.55;\n}\n\n.b-table.table > tbody > tr.b-table-details > td {\n  border-top: none !important;\n}\n\n.b-table.table > caption {\n  caption-side: bottom;\n}\n\n.b-table.table > caption.b-table-caption-top {\n  caption-side: top !important;\n}\n\n.b-table.table > thead > tr > th,\n.b-table.table > thead > tr > td,\n.b-table.table > tfoot > tr > th,\n.b-table.table > tfoot > tr > td {\n  position: relative;\n}\n\n/* b-table: header sort styling */\n.b-table.table > thead > tr > th[aria-sort],\n.b-table.table > tfoot > tr > th[aria-sort] {\n  position: relative;\n  padding-right: 1.125em;\n  cursor: pointer;\n}\n\n.b-table.table > thead > tr > th[aria-sort]::after,\n.b-table.table > tfoot > tr > th[aria-sort]::after {\n  position: absolute;\n  display: block;\n  bottom: 0;\n  right: 0.35em;\n  padding-bottom: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  opacity: 0.4;\n  content: \"\\2195\";\n  speak: none;\n}\n\n.b-table.table > thead > tr > th[aria-sort][aria-sort=\"ascending\"]::after,\n.b-table.table > tfoot > tr > th[aria-sort][aria-sort=\"ascending\"]::after {\n  opacity: 1;\n  content: \"\\2193\";\n}\n\n.b-table.table > thead > tr > th[aria-sort][aria-sort=\"descending\"]::after,\n.b-table.table > tfoot > tr > th[aria-sort][aria-sort=\"descending\"]::after {\n  opacity: 1;\n  content: \"\\2191\";\n}\n\n/* b-table: stackled tables */\n@media (max-width: 575.98px) {\n  .b-table.table.b-table-stacked-sm {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-sm > caption,\n  .b-table.table.b-table-stacked-sm > tbody,\n  .b-table.table.b-table-stacked-sm > tbody > tr,\n  .b-table.table.b-table-stacked-sm > tbody > tr > td,\n  .b-table.table.b-table-stacked-sm > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-sm > thead,\n  .b-table.table.b-table-stacked-sm > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-sm > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-sm > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-sm > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-sm > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-sm > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr.top-row, .b-table.table.b-table-stacked-sm > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-sm > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .b-table.table.b-table-stacked-md {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-md > caption,\n  .b-table.table.b-table-stacked-md > tbody,\n  .b-table.table.b-table-stacked-md > tbody > tr,\n  .b-table.table.b-table-stacked-md > tbody > tr > td,\n  .b-table.table.b-table-stacked-md > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-md > thead,\n  .b-table.table.b-table-stacked-md > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-md > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-md > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-md > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-md > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-md > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr.top-row, .b-table.table.b-table-stacked-md > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-md > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .b-table.table.b-table-stacked-lg {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-lg > caption,\n  .b-table.table.b-table-stacked-lg > tbody,\n  .b-table.table.b-table-stacked-lg > tbody > tr,\n  .b-table.table.b-table-stacked-lg > tbody > tr > td,\n  .b-table.table.b-table-stacked-lg > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-lg > thead,\n  .b-table.table.b-table-stacked-lg > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-lg > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-lg > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-lg > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-lg > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-lg > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr.top-row, .b-table.table.b-table-stacked-lg > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-lg > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .b-table.table.b-table-stacked-xl {\n    display: block;\n    width: 100%;\n  }\n  .b-table.table.b-table-stacked-xl > caption,\n  .b-table.table.b-table-stacked-xl > tbody,\n  .b-table.table.b-table-stacked-xl > tbody > tr,\n  .b-table.table.b-table-stacked-xl > tbody > tr > td,\n  .b-table.table.b-table-stacked-xl > tbody > tr > td {\n    display: block;\n  }\n  .b-table.table.b-table-stacked-xl > thead,\n  .b-table.table.b-table-stacked-xl > tfoot {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-xl > thead > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-xl > thead > tr.b-table-bottom-row,\n  .b-table.table.b-table-stacked-xl > tfoot > tr.b-table-top-row,\n  .b-table.table.b-table-stacked-xl > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-xl > caption {\n    caption-side: top !important;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr > [data-label] {\n    display: grid;\n    grid-template-columns: 40% auto;\n    grid-gap: 0.25rem 1rem;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    display: inline;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr.top-row, .b-table.table.b-table-stacked-xl > tbody > tr.bottom-row {\n    display: none;\n  }\n  .b-table.table.b-table-stacked-xl > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n}\n\n.b-table.table.b-table-stacked {\n  display: block;\n  width: 100%;\n}\n\n.b-table.table.b-table-stacked > caption,\n.b-table.table.b-table-stacked > tbody,\n.b-table.table.b-table-stacked > tbody > tr,\n.b-table.table.b-table-stacked > tbody > tr > td,\n.b-table.table.b-table-stacked > tbody > tr > td {\n  display: block;\n}\n\n.b-table.table.b-table-stacked > thead,\n.b-table.table.b-table-stacked > tfoot {\n  display: none;\n}\n\n.b-table.table.b-table-stacked > thead > tr.b-table-top-row,\n.b-table.table.b-table-stacked > thead > tr.b-table-bottom-row,\n.b-table.table.b-table-stacked > tfoot > tr.b-table-top-row,\n.b-table.table.b-table-stacked > tfoot > tr.b-table-bottom-row {\n  display: none;\n}\n\n.b-table.table.b-table-stacked > caption {\n  caption-side: top !important;\n}\n\n.b-table.table.b-table-stacked > tbody > tr > [data-label] {\n  display: grid;\n  grid-template-columns: 40% auto;\n  grid-gap: 0.25rem 1rem;\n}\n\n.b-table.table.b-table-stacked > tbody > tr > [data-label]::before {\n  content: attr(data-label);\n  display: inline;\n  text-align: right;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  font-style: normal;\n}\n\n.b-table.table.b-table-stacked > tbody > tr.top-row, .b-table.table.b-table-stacked > tbody > tr.bottom-row {\n  display: none;\n}\n\n.b-table.table.b-table-stacked > tbody > tr > :first-child {\n  border-top-width: 3px;\n}\n\n/* b-table: selectable rows */\ntable.b-table.b-table-selectable > tbody > tr {\n  cursor: pointer;\n  user-select: none;\n}\n\n/*# sourceMappingURL=bootstrap-vue.css.map */",".alert {\n  &.fade-enter-active,\n  &.alert.fade-leave-active {\n    transition: $bv-alert-transition;\n  }\n\n  &.fade-enter,\n  &.fade-leave-to {\n    opacity: 0;\n  }\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$grays: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$grays: map-merge(\n  (\n    \"100\": $gray-100,\n    \"200\": $gray-200,\n    \"300\": $gray-300,\n    \"400\": $gray-400,\n    \"500\": $gray-500,\n    \"600\": $gray-600,\n    \"700\": $gray-700,\n    \"800\": $gray-800,\n    \"900\": $gray-900\n  ),\n  $grays\n);\n\n$blue:    #007bff !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #28a745 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$colors: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$colors: map-merge(\n  (\n    \"blue\":       $blue,\n    \"indigo\":     $indigo,\n    \"purple\":     $purple,\n    \"pink\":       $pink,\n    \"red\":        $red,\n    \"orange\":     $orange,\n    \"yellow\":     $yellow,\n    \"green\":      $green,\n    \"teal\":       $teal,\n    \"cyan\":       $cyan,\n    \"white\":      $white,\n    \"gray\":       $gray-600,\n    \"gray-dark\":  $gray-800\n  ),\n  $colors\n);\n\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$theme-colors: map-merge(\n  (\n    \"primary\":    $primary,\n    \"secondary\":  $secondary,\n    \"success\":    $success,\n    \"info\":       $info,\n    \"warning\":    $warning,\n    \"danger\":     $danger,\n    \"light\":      $light,\n    \"dark\":       $dark\n  ),\n  $theme-colors\n);\n\n// Set a specific jump point for requesting color jumps\n$theme-color-interval:      8% !default;\n\n// The yiq lightness value that determines when the lightness of color changes from \"dark\" to \"light\". Acceptable values are between 0 and 255.\n$yiq-contrasted-threshold:  150 !default;\n\n// Customize the light and dark text colors for use in our YIQ color contrast function.\n$yiq-text-dark:             $gray-900 !default;\n$yiq-text-light:            $white !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                                true !default;\n$enable-rounded:                              true !default;\n$enable-shadows:                              false !default;\n$enable-gradients:                            false !default;\n$enable-transitions:                          true !default;\n$enable-prefers-reduced-motion-media-query:   true !default;\n$enable-hover-media-query:                    false !default; // Deprecated, no longer affects any compiled CSS\n$enable-grid-classes:                         true !default;\n$enable-pointer-cursor-for-buttons:           true !default;\n$enable-print-styles:                         true !default;\n$enable-responsive-font-sizes:                false !default;\n$enable-validation-icons:                     true !default;\n$enable-deprecation-messages:                 true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer: 1rem !default;\n$spacers: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$spacers: map-merge(\n  (\n    0: 0,\n    1: ($spacer * .25),\n    2: ($spacer * .5),\n    3: $spacer,\n    4: ($spacer * 1.5),\n    5: ($spacer * 3)\n  ),\n  $spacers\n);\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$sizes: map-merge(\n  (\n    25: 25%,\n    50: 50%,\n    75: 75%,\n    100: 100%,\n    auto: auto\n  ),\n  $sizes\n);\n\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              theme-color(\"primary\") !default;\n$link-decoration:                         none !default;\n$link-hover-color:                        darken($link-color, 15%) !default;\n$link-hover-decoration:                   underline !default;\n// Darken percentage for links with `.text-*` class (e.g. `.text-success`)\n$emphasized-link-hover-darken-percentage: 15% !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           30px !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:              1.5 !default;\n$line-height-sm:              1.5 !default;\n\n$border-width:                1px !default;\n$border-color:                $gray-300 !default;\n\n$border-radius:               .25rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-sm:            .2rem !default;\n\n$rounded-pill:                50rem !default;\n\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n\n$component-active-color:      $white !default;\n$component-active-bg:         theme-color(\"primary\") !default;\n\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n$transition-collapse:         height .35s ease !default;\n\n$embed-responsive-aspect-ratios: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$embed-responsive-aspect-ratios: join(\n  (\n    (21 9),\n    (16 9),\n    (4 3),\n    (1 1),\n  ),\n  $embed-responsive-aspect-ratios\n);\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:            $font-family-sans-serif !default;\n// stylelint-enable value-keyword-case\n\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:                $font-size-base * 1.25 !default;\n$font-size-sm:                $font-size-base * .875 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n$line-height-base:            1.5 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n\n$headings-margin-bottom:      $spacer / 2 !default;\n$headings-font-family:        null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              null !default;\n\n$display1-size:               6rem !default;\n$display2-size:               5.5rem !default;\n$display3-size:               4.5rem !default;\n$display4-size:               3.5rem !default;\n\n$display1-weight:             300 !default;\n$display2-weight:             300 !default;\n$display3-weight:             300 !default;\n$display4-weight:             300 !default;\n$display-line-height:         $headings-line-height !default;\n\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             80% !default;\n\n$text-muted:                  $gray-600 !default;\n\n$blockquote-small-color:      $gray-600 !default;\n$blockquote-small-font-size:  $small-font-size !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n\n$hr-border-color:             rgba($black, .1) !default;\n$hr-border-width:             $border-width !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$kbd-box-shadow:              inset 0 -.1rem 0 rgba($black, .25) !default;\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-bg:                     #fcf8e3 !default;\n\n$hr-margin-y:                 $spacer !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:          .75rem !default;\n$table-cell-padding-sm:       .3rem !default;\n\n$table-color:                 $body-color !default;\n$table-bg:                    null !default;\n$table-accent-bg:             rgba($black, .05) !default;\n$table-hover-color:           $table-color !default;\n$table-hover-bg:              rgba($black, .075) !default;\n$table-active-bg:             $table-hover-bg !default;\n\n$table-border-width:          $border-width !default;\n$table-border-color:          $border-color !default;\n\n$table-head-bg:               $gray-200 !default;\n$table-head-color:            $gray-700 !default;\n\n$table-dark-color:            $white !default;\n$table-dark-bg:               $gray-800 !default;\n$table-dark-accent-bg:        rgba($white, .05) !default;\n$table-dark-hover-color:      $table-dark-color !default;\n$table-dark-hover-bg:         rgba($white, .075) !default;\n$table-dark-border-color:     lighten($table-dark-bg, 7.5%) !default;\n$table-dark-color:            $white !default;\n\n$table-striped-order:         odd !default;\n\n$table-caption-color:         $text-muted !default;\n\n$table-bg-level:              -9 !default;\n$table-border-level:          -6 !default;\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:       .2rem !default;\n$input-btn-focus-color:       rgba($component-active-bg, .25) !default;\n$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n$input-btn-line-height-sm:    $line-height-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n$input-btn-line-height-lg:    $line-height-lg !default;\n\n$input-btn-border-width:      $border-width !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n$btn-line-height-sm:          $input-btn-line-height-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n$btn-line-height-lg:          $input-btn-line-height-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-disabled-color:     $gray-600 !default;\n\n$btn-block-spacing-y:         .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n// Forms\n\n$label-margin-bottom:                   .5rem !default;\n\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n$input-line-height-sm:                  $input-btn-line-height-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n$input-line-height-lg:                  $input-btn-line-height-lg !default;\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n\n$input-color:                           $gray-700 !default;\n$input-border-color:                    $gray-400 !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              lighten($component-active-bg, 25%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               $gray-600 !default;\n$input-plaintext-color:                 $body-color !default;\n\n$input-height-border:                   $input-border-width * 2 !default;\n\n$input-height-inner:                    calc(#{$input-line-height * 1em} + #{$input-padding-y * 2}) !default;\n$input-height-inner-half:               calc(#{$input-line-height * .5em} + #{$input-padding-y}) !default;\n$input-height-inner-quarter:            calc(#{$input-line-height * .25em} + #{$input-padding-y / 2}) !default;\n\n$input-height:                          calc(#{$input-line-height * 1em} + #{$input-padding-y * 2} + #{$input-height-border}) !default;\n$input-height-sm:                       calc(#{$input-line-height-sm * 1em} + #{$input-btn-padding-y-sm * 2} + #{$input-height-border}) !default;\n$input-height-lg:                       calc(#{$input-line-height-lg * 1em} + #{$input-btn-padding-y-lg * 2} + #{$input-height-border}) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-text-margin-top:                  .25rem !default;\n\n$form-check-input-gutter:               1.25rem !default;\n$form-check-input-margin-y:             .3rem !default;\n$form-check-input-margin-x:             .25rem !default;\n\n$form-check-inline-margin-x:            .75rem !default;\n$form-check-inline-input-margin-x:      .3125rem !default;\n\n$form-grid-gutter-width:                10px !default;\n$form-group-margin-bottom:              1rem !default;\n\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n\n$custom-forms-transition:               background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$custom-control-gutter:                 .5rem !default;\n$custom-control-spacer-x:               1rem !default;\n\n$custom-control-indicator-size:         1rem !default;\n$custom-control-indicator-bg:           $input-bg !default;\n\n$custom-control-indicator-bg-size:      50% 50% !default;\n$custom-control-indicator-box-shadow:   $input-box-shadow !default;\n$custom-control-indicator-border-color: $gray-500 !default;\n$custom-control-indicator-border-width: $input-border-width !default;\n\n$custom-control-indicator-disabled-bg:          $input-disabled-bg !default;\n$custom-control-label-disabled-color:           $gray-600 !default;\n\n$custom-control-indicator-checked-color:        $component-active-color !default;\n$custom-control-indicator-checked-bg:           $component-active-bg !default;\n$custom-control-indicator-checked-disabled-bg:  rgba(theme-color(\"primary\"), .5) !default;\n$custom-control-indicator-checked-box-shadow:   none !default;\n$custom-control-indicator-checked-border-color: $custom-control-indicator-checked-bg !default;\n\n$custom-control-indicator-focus-box-shadow:     $input-focus-box-shadow !default;\n$custom-control-indicator-focus-border-color:   $input-focus-border-color !default;\n\n$custom-control-indicator-active-color:         $component-active-color !default;\n$custom-control-indicator-active-bg:            lighten($component-active-bg, 35%) !default;\n$custom-control-indicator-active-box-shadow:    none !default;\n$custom-control-indicator-active-border-color:  $custom-control-indicator-active-bg !default;\n\n$custom-checkbox-indicator-border-radius:       $border-radius !default;\n$custom-checkbox-indicator-icon-checked:        str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n\n$custom-checkbox-indicator-indeterminate-bg:           $component-active-bg !default;\n$custom-checkbox-indicator-indeterminate-color:        $custom-control-indicator-checked-color !default;\n$custom-checkbox-indicator-icon-indeterminate:         str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n$custom-checkbox-indicator-indeterminate-box-shadow:   none !default;\n$custom-checkbox-indicator-indeterminate-border-color: $custom-checkbox-indicator-indeterminate-bg !default;\n\n$custom-radio-indicator-border-radius:          50% !default;\n$custom-radio-indicator-icon-checked:           str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='#{$custom-control-indicator-checked-color}'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n\n$custom-switch-width:                           $custom-control-indicator-size * 1.75 !default;\n$custom-switch-indicator-border-radius:         $custom-control-indicator-size / 2 !default;\n$custom-switch-indicator-size:                  calc(#{$custom-control-indicator-size} - #{$custom-control-indicator-border-width * 4}) !default;\n\n$custom-select-padding-y:           $input-padding-y !default;\n$custom-select-padding-x:           $input-padding-x !default;\n$custom-select-font-family:         $input-font-family !default;\n$custom-select-font-size:           $input-font-size !default;\n$custom-select-height:              $input-height !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-font-weight:         $input-font-weight !default;\n$custom-select-line-height:         $input-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-600 !default;\n$custom-select-bg:                  $input-bg !default;\n$custom-select-disabled-bg:         $gray-200 !default;\n$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color:     $gray-800 !default;\n$custom-select-indicator:           str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n$custom-select-background:          $custom-select-indicator no-repeat right $custom-select-padding-x center / $custom-select-bg-size !default; // Used so we can have multiple background elements (e.g., arrow and feedback icon)\n\n$custom-select-feedback-icon-padding-right: calc((1em + #{2 * $custom-select-padding-y}) * 3 / 4 + #{$custom-select-padding-x + $custom-select-indicator-padding}) !default;\n$custom-select-feedback-icon-position:      center right ($custom-select-padding-x + $custom-select-indicator-padding) !default;\n$custom-select-feedback-icon-size:          $input-height-inner-half $input-height-inner-half !default;\n\n$custom-select-border-width:        $input-border-width !default;\n$custom-select-border-color:        $input-border-color !default;\n$custom-select-border-radius:       $border-radius !default;\n$custom-select-box-shadow:          inset 0 1px 2px rgba($black, .075) !default;\n\n$custom-select-focus-border-color:  $input-focus-border-color !default;\n$custom-select-focus-width:         $input-focus-width !default;\n$custom-select-focus-box-shadow:    0 0 0 $custom-select-focus-width $input-btn-focus-color !default;\n\n$custom-select-padding-y-sm:        $input-padding-y-sm !default;\n$custom-select-padding-x-sm:        $input-padding-x-sm !default;\n$custom-select-font-size-sm:        $input-font-size-sm !default;\n$custom-select-height-sm:           $input-height-sm !default;\n\n$custom-select-padding-y-lg:        $input-padding-y-lg !default;\n$custom-select-padding-x-lg:        $input-padding-x-lg !default;\n$custom-select-font-size-lg:        $input-font-size-lg !default;\n$custom-select-height-lg:           $input-height-lg !default;\n\n$custom-range-track-width:          100% !default;\n$custom-range-track-height:         .5rem !default;\n$custom-range-track-cursor:         pointer !default;\n$custom-range-track-bg:             $gray-300 !default;\n$custom-range-track-border-radius:  1rem !default;\n$custom-range-track-box-shadow:     inset 0 .25rem .25rem rgba($black, .1) !default;\n\n$custom-range-thumb-width:                   1rem !default;\n$custom-range-thumb-height:                  $custom-range-thumb-width !default;\n$custom-range-thumb-bg:                      $component-active-bg !default;\n$custom-range-thumb-border:                  0 !default;\n$custom-range-thumb-border-radius:           1rem !default;\n$custom-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$custom-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$custom-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in IE/Edge\n$custom-range-thumb-active-bg:               lighten($component-active-bg, 35%) !default;\n$custom-range-thumb-disabled-bg:             $gray-500 !default;\n\n$custom-file-height:                $input-height !default;\n$custom-file-height-inner:          $input-height-inner !default;\n$custom-file-focus-border-color:    $input-focus-border-color !default;\n$custom-file-focus-box-shadow:      $input-focus-box-shadow !default;\n$custom-file-disabled-bg:           $input-disabled-bg !default;\n\n$custom-file-padding-y:             $input-padding-y !default;\n$custom-file-padding-x:             $input-padding-x !default;\n$custom-file-line-height:           $input-line-height !default;\n$custom-file-font-family:           $input-font-family !default;\n$custom-file-font-weight:           $input-font-weight !default;\n$custom-file-color:                 $input-color !default;\n$custom-file-bg:                    $input-bg !default;\n$custom-file-border-width:          $input-border-width !default;\n$custom-file-border-color:          $input-border-color !default;\n$custom-file-border-radius:         $input-border-radius !default;\n$custom-file-box-shadow:            $input-box-shadow !default;\n$custom-file-button-color:          $custom-file-color !default;\n$custom-file-button-bg:             $input-group-addon-bg !default;\n$custom-file-text: (\n  en: \"Browse\"\n) !default;\n\n\n// Form validation\n\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $small-font-size !default;\n$form-feedback-valid-color:         theme-color(\"success\") !default;\n$form-feedback-invalid-color:       theme-color(\"danger\") !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{$form-feedback-icon-invalid-color}' viewBox='-2 -2 7 7'%3e%3cpath stroke='#{$form-feedback-icon-invalid-color}' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\"), \"#\", \"%23\") !default;\n\n$form-validation-states: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$form-validation-states: map-merge(\n  (\n    \"valid\": (\n      \"color\": $form-feedback-valid-color,\n      \"icon\": $form-feedback-icon-valid\n    ),\n    \"invalid\": (\n      \"color\": $form-feedback-invalid-color,\n      \"icon\": $form-feedback-icon-invalid\n    ),\n  ),\n  $form-validation-states\n);\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-modal:                      1050 !default;\n$zindex-popover:                    1060 !default;\n$zindex-tooltip:                    1070 !default;\n\n\n// Navs\n\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             $gray-300 !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n$nav-divider-color:                 $gray-200 !default;\n$nav-divider-margin-y:              $spacer / 2 !default;\n\n\n// Navbar\n\n$navbar-padding-y:                  $spacer / 2 !default;\n$navbar-padding-x:                  $spacer !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n\n$navbar-dark-color:                 rgba($white, .5) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-toggler-icon-bg:       str-replace(url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='#{$navbar-dark-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n\n$navbar-light-color:                rgba($black, .5) !default;\n$navbar-light-hover-color:          rgba($black, .7) !default;\n$navbar-light-active-color:         rgba($black, .9) !default;\n$navbar-light-disabled-color:       rgba($black, .3) !default;\n$navbar-light-toggler-icon-bg:      str-replace(url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\n\n$navbar-light-brand-color:                $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    $body-color !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black, .15) !default;\n$dropdown-border-radius:            $border-radius !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-inner-border-radius:      calc(#{$dropdown-border-radius} - #{$dropdown-border-width}) !default;\n$dropdown-divider-bg:               $gray-200 !default;\n$dropdown-divider-margin-y:         $nav-divider-margin-y !default;\n$dropdown-box-shadow:               0 .5rem 1rem rgba($black, .175) !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         darken($gray-900, 5%) !default;\n$dropdown-link-hover-bg:            $gray-100 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-600 !default;\n\n$dropdown-item-padding-y:           .25rem !default;\n$dropdown-item-padding-x:           1.5rem !default;\n\n$dropdown-header-color:             $gray-600 !default;\n\n\n// Pagination\n\n$pagination-padding-y:              .5rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n$pagination-line-height:            1.25 !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-color:           $gray-300 !default;\n\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     $gray-300 !default;\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $pagination-active-bg !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  $gray-300 !default;\n\n\n// Jumbotron\n\n$jumbotron-padding:                 2rem !default;\n$jumbotron-color:                   null !default;\n$jumbotron-bg:                      $gray-200 !default;\n\n\n// Cards\n\n$card-spacer-y:                     .75rem !default;\n$card-spacer-x:                     1.25rem !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black, .125) !default;\n$card-inner-border-radius:          calc(#{$card-border-radius} - #{$card-border-width}) !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-cap-color:                    null !default;\n$card-color:                        null !default;\n$card-bg:                           $white !default;\n\n$card-img-overlay-padding:          1.25rem !default;\n\n$card-group-margin:                 $grid-gutter-width / 2 !default;\n$card-deck-margin:                  $card-group-margin !default;\n\n$card-columns-count:                3 !default;\n$card-columns-gap:                  1.25rem !default;\n$card-columns-margin:               $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-border-radius:             $border-radius !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 .25rem !default;\n$tooltip-padding-x:                 .5rem !default;\n$tooltip-margin:                    0 !default;\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n\n// Form tooltips must come after regular tooltips\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   $line-height-base !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n\n\n// Popovers\n\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black, .2) !default;\n$popover-border-radius:             $border-radius-lg !default;\n$popover-box-shadow:                0 .25rem .5rem rgba($black, .2) !default;\n\n$popover-header-bg:                 darken($popover-bg, 3%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          .75rem !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $popover-header-padding-y !default;\n$popover-body-padding-x:            $popover-header-padding-x !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n\n\n// Toasts\n\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .25rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba($white, .85) !default;\n$toast-border-width:                1px !default;\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\n$toast-border-radius:               .25rem !default;\n$toast-box-shadow:                  0 .25rem .75rem rgba($black, .1) !default;\n\n$toast-header-color:                $gray-600 !default;\n$toast-header-background-color:     rgba($white, .85) !default;\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\n\n\n// Badges\n\n$badge-font-size:                   75% !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-padding-y:                   .25em !default;\n$badge-padding-x:                   .4em !default;\n$badge-border-radius:               $border-radius !default;\n\n$badge-transition:                  $btn-transition !default;\n$badge-focus-width:                 $input-btn-focus-width !default;\n\n$badge-pill-padding-x:              .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:          10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:               1rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black, .2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-border-radius:       $border-radius-lg !default;\n$modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5) !default;\n$modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $border-color !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding-y:            1rem !default;\n$modal-header-padding-x:            1rem !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-xl:                          1140px !default;\n$modal-lg:                          800px !default;\n$modal-md:                          500px !default;\n$modal-sm:                          300px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-y:                   .75rem !default;\n$alert-padding-x:                   1.25rem !default;\n$alert-margin-bottom:               1rem !default;\n$alert-border-radius:               $border-radius !default;\n$alert-link-font-weight:            $font-weight-bold !default;\n$alert-border-width:                $border-width !default;\n\n$alert-bg-level:                    -10 !default;\n$alert-border-level:                -9 !default;\n$alert-color-level:                 6 !default;\n\n\n// Progress bars\n\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               inset 0 .1rem .1rem rgba($black, .1) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   theme-color(\"primary\") !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n\n\n// List group\n\n$list-group-color:                  null !default;\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black, .125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         .75rem !default;\n$list-group-item-padding-x:         1.25rem !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            $gray-300 !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              0 1px 2px rgba($black, .075) !default;\n\n\n// Figures\n\n$figure-caption-font-size:          90% !default;\n$figure-caption-color:              $gray-600 !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-padding-y:              .75rem !default;\n$breadcrumb-padding-x:              1rem !default;\n$breadcrumb-item-padding:           .5rem !default;\n\n$breadcrumb-margin-bottom:          1rem !default;\n\n$breadcrumb-bg:                     $gray-200 !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n\n$breadcrumb-border-radius:          $border-radius !default;\n\n\n// Carousel\n\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n\n$carousel-control-icon-width:        20px !default;\n\n$carousel-control-prev-icon-bg:      str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n$carousel-control-next-icon-bg:      str-replace(url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\"), \"#\", \"%23\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n\n\n// Spinners\n\n$spinner-width:         2rem !default;\n$spinner-height:        $spinner-width !default;\n$spinner-border-width:  .25em !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n\n\n// Close\n\n$close-font-size:                   $font-size-base * 1.5 !default;\n$close-font-weight:                 $font-weight-bold !default;\n$close-color:                       $black !default;\n$close-text-shadow:                 0 1px 0 $white !default;\n\n\n// Code\n\n$code-font-size:                    87.5% !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .2rem !default;\n$kbd-padding-x:                     .4rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         $gray-900 !default;\n$pre-scrollable-max-height:         340px !default;\n\n\n// Utilities\n\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex, inline-flex !default;\n$overflows: auto, hidden !default;\n$positions: static, relative, absolute, fixed, sticky !default;\n\n\n// Printing\n\n$print-page-size:                   a3 !default;\n$print-body-min-width:              map-get($grid-breakpoints, \"lg\") !default;\n",".card-img-left {\n  @include border-left-radius($card-inner-border-radius);\n}\n\n.card-img-right {\n  @include border-right-radius($card-inner-border-radius);\n}\n","// stylelint-disable property-blacklist\n// Single side border-radius\n\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: $radius;\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n    border-top-right-radius: $radius;\n  }\n}\n\n@mixin border-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: $radius;\n    border-bottom-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: $radius;\n    border-bottom-left-radius: $radius;\n  }\n}\n\n@mixin border-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n    border-bottom-left-radius: $radius;\n  }\n}\n\n@mixin border-top-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n  }\n}\n\n@mixin border-top-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-right-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-left-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: $radius;\n  }\n}\n","// Hide the caret for no-caret setting\n// See: https://github.com/bootstrap-vue/bootstrap-vue/issues/1473\n// See: https://github.com/twbs/bootstrap/issues/23724\n.dropdown-toggle {\n  &.dropdown-toggle-no-caret:after {\n    display: none !important;\n  }\n}\n","// Custom styles for b-dropdown-form\n// Based on class .dropdown-item\n\n.b-dropdown-form {\n  display: inline-block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  width: 100%;\n  clear: both;\n  font-weight: $font-weight-normal;\n\n  &:first-child {\n    @include border-top-radius($dropdown-inner-border-radius);\n  }\n\n  &:last-child {\n    @include border-bottom-radius($dropdown-inner-border-radius);\n  }\n}\n","// Custom styles for b-dropdown-text\n// Based on class .dropdown-item\n\n.b-dropdown-text {\n  display: inline-block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  margin-bottom: 0;\n  width: 100%;\n  clear: both;\n  font-weight: $font-weight-lighter;\n\n  &:first-child {\n    @include border-top-radius($dropdown-inner-border-radius);\n  }\n\n  &:last-child {\n    @include border-bottom-radius($dropdown-inner-border-radius);\n  }\n}\n","$bv-input-group-dropdown-patched: false !default;\n\n@if $bv-input-group-dropdown-patched == false {\n  // Only include this style patch once in final CSS\n  $bv-input-group-dropdown-patched: true;\n\n  /* workaround for https://github.com/bootstrap-vue/bootstrap-vue/issues/1560 */\n  /* workaround for https://github.com/bootstrap-vue/bootstrap-vue/issues/2114 */\n  /* based on: bootstrap/scss/_input-group.scss */\n  .input-group {\n    > .input-group-prepend > .btn-group,\n    > .input-group-append:not(:last-child) > .btn-group,\n    > .input-group-append:last-child > .btn-group:not(:last-child):not(.dropdown-toggle) {\n      > .btn {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    }\n\n    > .input-group-append > .btn-group,\n    > .input-group-prepend:not(:first-child) > .btn-group,\n    > .input-group-prepend:first-child > .btn-group:not(:first-child) {\n      > .btn {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    }\n  }\n}\n","// Temporary fix for cssnano bug: https://github.com/cssnano/cssnano/issues/712\n// By moving center to last value in background-position property\n// Bug will/may affect Nuxt.JS users and docs site https://github.com/bootstrap-vue/bootstrap-vue/issues/2599\n@if $enable-validation-icons {\n  .form-control {\n    .was-validated &:invalid,\n    .was-validated &:valid,\n    &.is-invalid,\n    &.is-valid {\n      background-position: right $input-height-inner-quarter center;\n    }\n  }\n}\n\n// Bootstrap V4.x does not have special styling for color input\n// So we define some basic styles to compensate\ninput[type=\"color\"].form-control {\n  height: $input-height;\n  // We use the smaller padding to make the color block larger\n  padding: ($input-padding-y-sm / 2) ($input-padding-x-sm / 2);\n}\n\ninput[type=\"color\"].form-control.form-control-sm,\n.input-group-sm input[type=\"color\"].form-control {\n  height: $input-height-sm;\n  // We use the smaller padding to make the color block larger\n  padding: ($input-padding-y-sm / 2) ($input-padding-x-sm / 2);\n}\n\ninput[type=\"color\"].form-control.form-control-lg,\n.input-group-lg input[type=\"color\"].form-control {\n  height: $input-height-lg;\n  padding: ($input-padding-y-sm / 2) ($input-padding-x-sm / 2);\n}\n\ninput[type=\"color\"].form-control:disabled {\n  // Disabled styling needs to be a bit different than regular inputs\n  background-color: $gray-500;\n  opacity: $btn-disabled-opacity;\n}\n\n/* Base .input-group > .custom-range styling (no PR yet on BS V4) */\n.input-group {\n  > .custom-range {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0;\n\n    + .form-control,\n    + .form-control-plaintext,\n    + .custom-select,\n    + .custom-range,\n    + .custom-file {\n      margin-left: -$input-border-width;\n    }\n  }\n\n  > .form-control,\n  > .form-control-plaintext,\n  > .custom-select,\n  > .custom-range,\n  > .custom-file {\n    + .custom-range {\n      margin-left: -$input-border-width;\n    }\n  }\n\n  > .custom-range:focus {\n    z-index: 3;\n  }\n\n  > .custom-range {\n    &:not(:last-child) {\n      @include border-right-radius(0);\n    }\n    &:not(:first-child) {\n      @include border-left-radius(0);\n    }\n  }\n\n  > .custom-range {\n    height: $input-height;\n    padding: 0 $input-padding-x;\n    background-color: $input-bg;\n    background-clip: padding-box;\n    border: $input-border-width solid $input-border-color;\n    height: $input-height;\n\n    @if $enable-rounded {\n      border-radius: $input-border-radius;\n    } @else {\n      border-radius: 0;\n    }\n\n    @include box-shadow($input-box-shadow);\n    @include transition($input-transition);\n    @include form-control-focus();\n\n    &:disabled,\n    &[readonly] {\n      background-color: $input-disabled-bg;\n    }\n  }\n}\n\n.input-group-lg > .custom-range {\n  height: $input-height-lg;\n  padding: 0 $input-padding-x-lg;\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .custom-range {\n  height: $input-height-sm;\n  padding: 0 $input-padding-x-sm;\n  @include border-radius($input-border-radius-sm);\n}\n\n/* b-form-input: custom-range validation styling - valid (no PR yet for BS V4.2) */\n// Mixin for generating .input-group .custom-range validation styling\n@mixin bv-custom-range-validation-state($state, $color) {\n  .input-group .custom-range {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      border-color: $color;\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, 0.25);\n      }\n    }\n  }\n\n  .custom-range {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      // Pseudo-elements must be split across multiple rulesets to have an affect.\n      &:focus {\n        &::-webkit-slider-thumb {\n          box-shadow: 0 0 0 1px $body-bg, 0 0 0 $input-btn-focus-width lighten($color, 35%);\n        }\n        &::-moz-range-thumb {\n          box-shadow: 0 0 0 1px $body-bg, 0 0 0 $input-btn-focus-width lighten($color, 35%);\n        }\n        &::-ms-thumb {\n          box-shadow: 0 0 0 1px $body-bg, 0 0 0 $input-btn-focus-width lighten($color, 35%);\n        }\n      }\n\n      &::-webkit-slider-thumb {\n        background-color: $color;\n        background-image: none;\n\n        &:active {\n          background-color: lighten($color, 35%);\n          background-image: none;\n        }\n      }\n\n      &::-webkit-slider-runnable-track {\n        background-color: rgba($color, 0.35);\n      }\n\n      &::-moz-range-thumb {\n        background-color: $color;\n        background-image: none;\n\n        &:active {\n          background-color: lighten($color, 35%);\n          background-image: none;\n        }\n      }\n\n      &::-moz-range-track {\n        background: rgba($color, 0.35);\n      }\n      &::-moz-range-thumb {\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n\n      &::-ms-thumb {\n        background-color: $color;\n        background-image: none;\n\n        &:active {\n          background-color: lighten($color, 35%);\n          background-image: none;\n        }\n      }\n\n      &::-ms-track-lower {\n        background: rgba($color, 0.35);\n      }\n      &::-ms-track-upper {\n        background: rgba($color, 0.35);\n      }\n    }\n  }\n}\n\n@include bv-custom-range-validation-state(\"valid\", $form-feedback-valid-color);\n@include bv-custom-range-validation-state(\"invalid\", $form-feedback-invalid-color);\n","// stylelint-disable property-blacklist\n@mixin transition($transition...) {\n  @if $enable-transitions {\n    @if length($transition) == 0 {\n      transition: $transition-base;\n    } @else {\n      transition: $transition;\n    }\n  }\n\n  @if $enable-prefers-reduced-motion-media-query {\n    @media (prefers-reduced-motion: reduce) {\n      transition: none;\n    }\n  }\n}\n","// Form control focus state\n//\n// Generate a customized focus state and for any input with the specified color,\n// which defaults to the `$input-focus-border-color` variable.\n//\n// We highly encourage you to not customize the default value, but instead use\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\n// WebKit's default styles, but applicable to a wider range of browsers. Its\n// usability and accessibility should be taken into account with any change.\n//\n// Example usage: change the default blue border and shadow to white for better\n// contrast against a dark gray background.\n@mixin form-control-focus() {\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    // Avoid using mixin so we can pass custom focus shadow properly\n    @if $enable-shadows {\n      box-shadow: $input-box-shadow, $input-focus-box-shadow;\n    } @else {\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n}\n\n\n@mixin form-validation-state($state, $color, $icon) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: color-yiq($color);\n    background-color: rgba($color, $form-feedback-tooltip-opacity);\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  .form-control {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: $icon;\n        background-repeat: no-repeat;\n        background-position: center right $input-height-inner-quarter;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .custom-select {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $custom-select-feedback-icon-padding-right;\n        background: $custom-select-background, $icon $custom-select-bg no-repeat $custom-select-feedback-icon-position / $custom-select-feedback-icon-size;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n    }\n  }\n\n\n  .form-control-file {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n    }\n  }\n\n  .form-check-input {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      ~ .form-check-label {\n        color: $color;\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n    }\n  }\n\n  .custom-control-input {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      ~ .custom-control-label {\n        color: $color;\n\n        &::before {\n          border-color: $color;\n        }\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n\n      &:checked {\n        ~ .custom-control-label::before {\n          border-color: lighten($color, 10%);\n          @include gradient-bg(lighten($color, 10%));\n        }\n      }\n\n      &:focus {\n        ~ .custom-control-label::before {\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n\n        &:not(:checked) ~ .custom-control-label::before {\n          border-color: $color;\n        }\n      }\n    }\n  }\n\n  // custom file\n  .custom-file-input {\n    .was-validated &:#{$state},\n    &.is-#{$state} {\n      ~ .custom-file-label {\n        border-color: $color;\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n\n      &:focus {\n        ~ .custom-file-label {\n          border-color: $color;\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n      }\n    }\n  }\n}\n","/* b-table: general styling */\n.b-table.table {\n  // table fixed header width layout\n  &.b-table-fixed {\n    /* fixed width columns */\n    table-layout: fixed;\n  }\n\n  // Table busy styling\n  &[aria-busy=\"true\"] {\n    opacity: $b-table-busy-opacity;\n  }\n\n  // Details row styling\n  > tbody > tr.b-table-details > td {\n    border-top: none !important;\n  }\n  // captioon positioning\n  > caption {\n    caption-side: bottom;\n\n    &.b-table-caption-top {\n      caption-side: top !important;\n    }\n  }\n\n  // make cells relatively position for thinks like tooltips, etc\n  > thead,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        // So dropdowns, tooltips, sorting, etc, will position properly\n        position: relative;\n      }\n    }\n  }\n}\n\n/* b-table: header sort styling */\n.b-table.table {\n  // Sort Styling\n  > thead,\n  > tfoot {\n    > tr {\n      > th {\n        &[aria-sort] {\n          // &.sorting\n          position: relative;\n          padding-right: 1.125em;\n          cursor: pointer;\n\n          // Up/Down sort=null indicator\n          &::after {\n            position: absolute;\n            display: block;\n            bottom: 0;\n            right: 0.35em;\n            padding-bottom: inherit;\n            font-size: inherit;\n            line-height: inherit;\n            opacity: 0.4;\n            content: \"\\2195\"; // \\2195 up-down arrow\n            speak: none;\n          }\n\n          // Ascending indicator\n          &[aria-sort=\"ascending\"]::after {\n            // &.sorting_asc::after.sorting_asc\n            opacity: 1;\n            content: \"\\2193\"; // down arrow\n          }\n\n          // Descending indicator\n          &[aria-sort=\"descending\"]::after {\n            // &.sorting_desc::after\n            opacity: 1;\n            content: \"\\2191\"; // up arrow\n          }\n        }\n      }\n    }\n  }\n}\n\n/* b-table: stackled tables */\n// Generate series of `.table-stacked-*` classes for configuring the screen\n// size of where your table will be stacked.\n.b-table.table.b-table-stacked {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        display: block;\n        width: 100%;\n\n        // Convert to blocks when stacked\n        > caption,\n        > tbody,\n        > tbody > tr,\n        > tbody > tr > td,\n        > tbody > tr > td {\n          display: block;\n        }\n\n        // Hide when stacked\n        > thead,\n        > tfoot {\n          display: none;\n\n          > tr.b-table-top-row,\n          > tr.b-table-bottom-row {\n            display: none;\n          }\n        }\n\n        // Caption positioning\n        > caption {\n          caption-side: top !important;\n        }\n\n        > tbody {\n          > tr {\n            // Turn cells with labels into micro-grids\n            > [data-label] {\n              // convert TD/TH contents to \"cells\". Caveat: child elements become cells!\n              display: grid;\n              grid-template-columns: 40% auto;\n              grid-gap: 0.25rem 1rem;\n\n              // Add the cell header label pseudo element\n              &::before {\n                content: attr(data-label);\n                display: inline;\n                text-align: right;\n                overflow-wrap: break-word;\n                font-weight: bold;\n                font-style: normal;\n              }\n            }\n\n            // Dont show the fixed top/bottom rows\n            &.top-row,\n            &.bottom-row {\n              display: none;\n            }\n\n            // give the top of each \"row\" a heavy border\n            > :first-child {\n              border-top-width: (3 * $table-border-width);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n/* b-table: selectable rows */\ntable.b-table.b-table-selectable > tbody > tr {\n  cursor: pointer;\n  user-select: none;\n}\n","// Alerts\n\n$bv-alert-transition: $transition-fade !default;\n\n// Tables\n\n$b-table-busy-opacity: 0.55 !default;\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.02px\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name, $breakpoints) {\n      @content;\n    }\n  }\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/homes/styles/main.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./app/javascript/homes/styles/main.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-webkit-input-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes spinning{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}.ql-editor > * {\n  cursor: text;\n}.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}.ql-editor ul > li::before {\n  content: '\\2022';\n}.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}.ql-editor .ql-bg-black {\n  background-color: #000;\n}.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}.ql-editor .ql-color-white {\n  color: #fff;\n}.ql-editor .ql-color-red {\n  color: #e60000;\n}.ql-editor .ql-color-orange {\n  color: #f90;\n}.ql-editor .ql-color-yellow {\n  color: #ff0;\n}.ql-editor .ql-color-green {\n  color: #008a00;\n}.ql-editor .ql-color-blue {\n  color: #06c;\n}.ql-editor .ql-color-purple {\n  color: #93f;\n}.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}.ql-editor .ql-align-center {\n  text-align: center;\n}.ql-editor .ql-align-justify {\n  text-align: justify;\n}.ql-editor .ql-align-right {\n  text-align: right;\n}.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}.ql-editor > * {\n  cursor: text;\n}.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}.ql-editor ul > li::before {\n  content: '\\2022';\n}.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}.ql-editor .ql-bg-black {\n  background-color: #000;\n}.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}.ql-editor .ql-color-white {\n  color: #fff;\n}.ql-editor .ql-color-red {\n  color: #e60000;\n}.ql-editor .ql-color-orange {\n  color: #f90;\n}.ql-editor .ql-color-yellow {\n  color: #ff0;\n}.ql-editor .ql-color-green {\n  color: #008a00;\n}.ql-editor .ql-color-blue {\n  color: #06c;\n}.ql-editor .ql-color-purple {\n  color: #93f;\n}.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}.ql-editor .ql-align-center {\n  text-align: center;\n}.ql-editor .ql-align-justify {\n  text-align: justify;\n}.ql-editor .ql-align-right {\n  text-align: right;\n}.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}.ql-snow {\n  box-sizing: border-box;\n}.ql-snow * {\n  box-sizing: border-box;\n}.ql-snow .ql-hidden {\n  display: none;\n}.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}.ql-snow .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n}.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}.ql-snow .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}.ql-snow .ql-empty {\n  fill: none;\n}.ql-snow .ql-even {\n  fill-rule: evenodd;\n}.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}.ql-snow .ql-transparent {\n  opacity: 0.4;\n}.ql-snow .ql-direction svg:last-child {\n  display: none;\n}.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}.ql-snow .ql-editor a {\n  text-decoration: underline;\n}.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}.ql-snow .ql-editor img {\n  max-width: 100%;\n}.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}.ql-snow a {\n  color: #06c;\n}.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}.ql-editor > * {\n  cursor: text;\n}.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}.ql-editor ul > li::before {\n  content: '\\2022';\n}.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}.ql-editor .ql-bg-black {\n  background-color: #000;\n}.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}.ql-editor .ql-color-white {\n  color: #fff;\n}.ql-editor .ql-color-red {\n  color: #e60000;\n}.ql-editor .ql-color-orange {\n  color: #f90;\n}.ql-editor .ql-color-yellow {\n  color: #ff0;\n}.ql-editor .ql-color-green {\n  color: #008a00;\n}.ql-editor .ql-color-blue {\n  color: #06c;\n}.ql-editor .ql-color-purple {\n  color: #93f;\n}.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}.ql-editor .ql-align-center {\n  text-align: center;\n}.ql-editor .ql-align-justify {\n  text-align: justify;\n}.ql-editor .ql-align-right {\n  text-align: right;\n}.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}.ql-bubble.ql-toolbar:after,\n.ql-bubble .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-bubble.ql-toolbar button,\n.ql-bubble .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}.ql-bubble.ql-toolbar button svg,\n.ql-bubble .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}.ql-bubble.ql-toolbar button:active:hover,\n.ql-bubble .ql-toolbar button:active:hover {\n  outline: none;\n}.ql-bubble.ql-toolbar input.ql-image[type=file],\n.ql-bubble .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}.ql-bubble.ql-toolbar button:hover,\n.ql-bubble .ql-toolbar button:hover,\n.ql-bubble.ql-toolbar button:focus,\n.ql-bubble .ql-toolbar button:focus,\n.ql-bubble.ql-toolbar button.ql-active,\n.ql-bubble .ql-toolbar button.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-label:hover,\n.ql-bubble .ql-toolbar .ql-picker-label:hover,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-item:hover,\n.ql-bubble .ql-toolbar .ql-picker-item:hover,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected {\n  color: #fff;\n}.ql-bubble.ql-toolbar button:hover .ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #fff;\n}.ql-bubble.ql-toolbar button:hover .ql-stroke,\n.ql-bubble .ql-toolbar button:hover .ql-stroke,\n.ql-bubble.ql-toolbar button:focus .ql-stroke,\n.ql-bubble .ql-toolbar button:focus .ql-stroke,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #fff;\n}@media (pointer: coarse) {\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active),\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) {\n    color: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #ccc;\n  }\n}.ql-bubble {\n  box-sizing: border-box;\n}.ql-bubble * {\n  box-sizing: border-box;\n}.ql-bubble .ql-hidden {\n  display: none;\n}.ql-bubble .ql-out-bottom,\n.ql-bubble .ql-out-top {\n  visibility: hidden;\n}.ql-bubble .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n}.ql-bubble .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}.ql-bubble .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}.ql-bubble .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}.ql-bubble .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-bubble .ql-stroke {\n  fill: none;\n  stroke: #ccc;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}.ql-bubble .ql-stroke-miter {\n  fill: none;\n  stroke: #ccc;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}.ql-bubble .ql-fill,\n.ql-bubble .ql-stroke.ql-fill {\n  fill: #ccc;\n}.ql-bubble .ql-empty {\n  fill: none;\n}.ql-bubble .ql-even {\n  fill-rule: evenodd;\n}.ql-bubble .ql-thin,\n.ql-bubble .ql-stroke.ql-thin {\n  stroke-width: 1;\n}.ql-bubble .ql-transparent {\n  opacity: 0.4;\n}.ql-bubble .ql-direction svg:last-child {\n  display: none;\n}.ql-bubble .ql-direction.ql-active svg:last-child {\n  display: inline;\n}.ql-bubble .ql-direction.ql-active svg:first-child {\n  display: none;\n}.ql-bubble .ql-editor h1 {\n  font-size: 2em;\n}.ql-bubble .ql-editor h2 {\n  font-size: 1.5em;\n}.ql-bubble .ql-editor h3 {\n  font-size: 1.17em;\n}.ql-bubble .ql-editor h4 {\n  font-size: 1em;\n}.ql-bubble .ql-editor h5 {\n  font-size: 0.83em;\n}.ql-bubble .ql-editor h6 {\n  font-size: 0.67em;\n}.ql-bubble .ql-editor a {\n  text-decoration: underline;\n}.ql-bubble .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}.ql-bubble .ql-editor code,\n.ql-bubble .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}.ql-bubble .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}.ql-bubble .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}.ql-bubble .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}.ql-bubble .ql-editor img {\n  max-width: 100%;\n}.ql-bubble .ql-picker {\n  color: #ccc;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}.ql-bubble .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}.ql-bubble .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}.ql-bubble .ql-picker-options {\n  background-color: #444;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}.ql-bubble .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-label {\n  color: #777;\n  z-index: 2;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #777;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #777;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}.ql-bubble .ql-color-picker,\n.ql-bubble .ql-icon-picker {\n  width: 28px;\n}.ql-bubble .ql-color-picker .ql-picker-label,\n.ql-bubble .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}.ql-bubble .ql-color-picker .ql-picker-label svg,\n.ql-bubble .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}.ql-bubble .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}.ql-bubble .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}.ql-bubble .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}.ql-bubble .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}.ql-bubble .ql-picker.ql-header {\n  width: 98px;\n}.ql-bubble .ql-picker.ql-header .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}.ql-bubble .ql-picker.ql-font {\n  width: 108px;\n}.ql-bubble .ql-picker.ql-font .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}.ql-bubble .ql-picker.ql-size {\n  width: 98px;\n}.ql-bubble .ql-picker.ql-size .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}.ql-bubble .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}.ql-bubble .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}.ql-bubble .ql-toolbar .ql-formats {\n  margin: 8px 12px 8px 0px;\n}.ql-bubble .ql-toolbar .ql-formats:first-child {\n  margin-left: 12px;\n}.ql-bubble .ql-color-picker svg {\n  margin: 1px;\n}.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,\n.ql-bubble .ql-color-picker .ql-picker-item:hover {\n  border-color: #fff;\n}.ql-bubble .ql-tooltip {\n  background-color: #444;\n  border-radius: 25px;\n  color: #fff;\n}.ql-bubble .ql-tooltip-arrow {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \" \";\n  display: block;\n  left: 50%;\n  margin-left: -6px;\n  position: absolute;\n}.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow {\n  border-bottom: 6px solid #444;\n  top: -6px;\n}.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow {\n  border-top: 6px solid #444;\n  bottom: -6px;\n}.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor {\n  display: block;\n}.ql-bubble .ql-tooltip.ql-editing .ql-formats {\n  visibility: hidden;\n}.ql-bubble .ql-tooltip-editor {\n  display: none;\n}.ql-bubble .ql-tooltip-editor input[type=text] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  height: 100%;\n  outline: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 100%;\n}.ql-bubble .ql-tooltip-editor a {\n  top: 10px;\n  position: absolute;\n  right: 20px;\n}.ql-bubble .ql-tooltip-editor a:before {\n  color: #ccc;\n  content: \"\\D7\";\n  font-size: 16px;\n  font-weight: bold;\n}.ql-container.ql-bubble:not(.ql-disabled) a {\n  position: relative;\n  white-space: nowrap;\n}.ql-container.ql-bubble:not(.ql-disabled) a::before {\n  background-color: #444;\n  border-radius: 15px;\n  top: -5px;\n  font-size: 12px;\n  color: #fff;\n  content: attr(href);\n  font-weight: normal;\n  overflow: hidden;\n  padding: 5px 15px;\n  text-decoration: none;\n  z-index: 1;\n}.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  border-top: 6px solid #444;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n}.ql-container.ql-bubble:not(.ql-disabled) a::before,\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  left: 0;\n  margin-left: 50%;\n  position: absolute;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%);\n  transition: visibility 0s ease 200ms;\n  visibility: hidden;\n}.ql-container.ql-bubble:not(.ql-disabled) a:hover::before,\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::after {\n  visibility: visible;\n}.vue-form-wizard .wizard-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px}.vue-form-wizard .wizard-btn.disabled,.vue-form-wizard .wizard-btn[disabled],fieldset[disabled] .vue-form-wizard .wizard-btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.vue-form-wizard *{box-sizing:border-box}.vue-form-wizard a{text-decoration:none}.vue-form-wizard .wizard-nav{margin-bottom:0;padding-left:0;list-style:none}.vue-form-wizard .wizard-nav>li{position:relative;display:block}.vue-form-wizard .wizard-nav>li>a{position:relative;display:block;padding:10px 15px}.vue-form-wizard .wizard-nav>li>a:focus,.vue-form-wizard .wizard-nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-form-wizard .wizard-nav>li.disabled>a{color:#777}.vue-form-wizard .wizard-nav>li.disabled>a:focus,.vue-form-wizard .wizard-nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.vue-form-wizard .wizard-progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn,.vue-form-wizard .wizard-btn{box-sizing:border-box;border-width:2px;background-color:transparent;font-size:14px;font-weight:600;padding:6px 12px;min-width:140px}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:focus,.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:hover,.vue-form-wizard .wizard-btn:focus,.vue-form-wizard .wizard-btn:hover{outline:0!important}.vue-form-wizard .wizard-nav-pills{margin-top:0;position:relative;text-align:center;display:flex;flex-wrap:wrap}.vue-form-wizard .wizard-nav-pills a,.vue-form-wizard .wizard-nav-pills li{flex:1 1;align-items:center;flex-wrap:wrap;flex-grow:1}.vue-form-wizard .wizard-nav-pills>li>a,.vue-form-wizard .wizard-nav-pills a{display:flex}.vue-form-wizard .wizard-nav-pills>li>a{flex-direction:column;padding:0;margin:0 auto;color:rgba(0,0,0,.2);position:relative;top:3px}.vue-form-wizard .wizard-nav-pills>li>a:focus,.vue-form-wizard .wizard-nav-pills>li>a:hover{background-color:transparent;color:rgba(0,0,0,.2);outline:0!important}.vue-form-wizard .wizard-nav-pills>li>a.disabled{pointer-events:none;cursor:default}.vue-form-wizard .wizard-nav-pills>li.active>a,.vue-form-wizard .wizard-nav-pills>li.active>a:focus,.vue-form-wizard .wizard-nav-pills>li.active>a:hover{background-color:transparent;transition:font-size .2s linear}.vue-form-wizard .wizard-nav-pills>li.active>a .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:focus .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:hover .wizard-icon{color:#fff;font-size:24px;display:flex;align-items:center;justify-content:center;transition:all .2s linear}.vue-form-wizard{padding-bottom:20px}.vue-form-wizard .is_error{border-color:#c84513!important}.vue-form-wizard .is_error .icon-container{background:#c84513!important}.vue-form-wizard.xs .wizard-icon-circle{width:40px;height:40px;font-size:16px}.vue-form-wizard.xs .wizard-icon-circle.tab_shape{height:25px}.vue-form-wizard.xs .wizard-nav-pills>li.active>a .wizard-icon{font-size:16px}.vue-form-wizard.xs .wizard-navigation .wizard-progress-with-circle{position:relative;top:25px;height:4px}.vue-form-wizard.sm .wizard-icon-circle{width:50px;height:50px;font-size:20px}.vue-form-wizard.sm .wizard-icon-circle.tab_shape{height:30px}.vue-form-wizard.sm .wizard-nav-pills>li.active>a .wizard-icon{font-size:20px}.vue-form-wizard.sm .wizard-navigation .wizard-progress-with-circle{position:relative;top:30px;height:4px}.vue-form-wizard.md .wizard-icon-circle{width:70px;height:70px;font-size:24px}.vue-form-wizard.md .wizard-icon-circle.tab_shape{height:40px}.vue-form-wizard.md .wizard-nav-pills>li.active>a .wizard-icon{font-size:24px}.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard.lg .wizard-icon-circle{width:90px;height:90px;font-size:28px}.vue-form-wizard.lg .wizard-icon-circle.tab_shape{height:50px}.vue-form-wizard.lg .wizard-nav-pills>li.active>a .wizard-icon{font-size:28px}.vue-form-wizard.lg .wizard-navigation .wizard-progress-with-circle{position:relative;top:50px;height:4px}.vue-form-wizard .wizard-icon-circle{font-size:18px;border:3px solid #f3f2ee;border-radius:50%;font-weight:600;width:70px;height:70px;background-color:#fff;position:relative;display:flex;justify-content:center;align-content:center}.vue-form-wizard .wizard-icon-circle.square_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle.tab_shape{width:100%;min-width:100px;height:40px;border:none;background-color:#f3f2ee;border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon-container{display:flex;justify-content:center;flex:1 1;border-radius:40%}.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon{display:flex;align-items:center;justify-content:center}.vue-form-wizard .wizard-tab-content{min-height:100px;padding:30px 20px 10px}.vue-form-wizard .wizard-header{padding:15px;position:relative;border-radius:3px 3px 0 0;text-align:center}.vue-form-wizard .wizard-title{color:#252422;font-weight:300;margin:0;text-align:center}.vue-form-wizard .category{font-size:14px;font-weight:400;color:#9a9a9a;margin-bottom:0;text-align:center}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{box-shadow:none;transition:width .3s ease}.vue-form-wizard .clearfix:after{content:\"\";clear:both;display:table}.vue-form-wizard .wizard-card-footer{padding:0 20px}.vue-form-wizard .wizard-card-footer .wizard-footer-left{float:left}.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:right}@media screen and (max-width:350px){.vue-form-wizard .wizard-card-footer{display:flex;justify-content:center;flex-direction:column}.vue-form-wizard .wizard-card-footer .wizard-footer-left,.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:none;flex:1 1;display:flex;justify-content:center}.vue-form-wizard .wizard-card-footer .wizard-footer-right button{margin-top:10px}}.vue-form-wizard.vertical .wizard-card-footer{display:block}.vue-form-wizard.vertical .wizard-nav-pills{flex-direction:column}.vue-form-wizard.vertical .wizard-navigation{display:flex;flex-direction:row}.vue-form-wizard.vertical .wizard-card-footer{padding-top:30px}.fadeTr-enter-active {\n  transition: opacity 0.3s ease-in;\n  transition-delay: 0.1s;\n}.fadeTr-leave-active {\n  transition: opacity 0.1s ease-out;\n}.fadeTr-enter, .fadeTr-leave-to {\n  opacity: 0;\n}.slide-enter-active,\n.slide-leave-active {\n  transition: all 1s;\n}.slide-enter,\n.slide-leave-to {\n  opacity: 0;\n  -webkit-transform: translateX(30px);\n          transform: translateX(30px);\n}.dg-backdrop-enter-active {\n  -webkit-animation: dg-fadeIn .3s;\n          animation: dg-fadeIn .3s;\n}.dg-backdrop-leave-active {\n  -webkit-animation: dg-fadeOut .5s;\n          animation: dg-fadeOut .5s;\n}.dg-fade-enter-active {\n  -webkit-animation: dg-fadeIn 0.6s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-fadeIn 0.6s cubic-bezier(0, 0, 0.58, 1);\n}.dg-fade-leave-active {\n  -webkit-animation: dg-fadeOut 0.6s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-fadeOut 0.6s cubic-bezier(0, 0, 0.58, 1);\n}@-webkit-keyframes dg-fadeIn {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}@keyframes dg-fadeIn {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}@-webkit-keyframes dg-fadeOut {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}@keyframes dg-fadeOut {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}.dg-zoom-enter-active {\n  -webkit-animation: dg-zoomIn 0.3s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-zoomIn 0.3s cubic-bezier(0, 0, 0.58, 1);\n}.dg-zoom-leave-active {\n  -webkit-animation: dg-zoomOut 0.4s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-zoomOut 0.4s cubic-bezier(0, 0, 0.58, 1);\n}@-webkit-keyframes dg-zoomIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n50% {\n    opacity: 1;\n}\n}@keyframes dg-zoomIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n50% {\n    opacity: 1;\n}\n}@-webkit-keyframes dg-zoomOut {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n100% {\n    opacity: 0;\n}\n}@keyframes dg-zoomOut {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n100% {\n    opacity: 0;\n}\n}.dg-bounce-enter-active {\n  -webkit-animation: dg-bounceIn .6s;\n          animation: dg-bounceIn .6s;\n}.dg-bounce-leave-active {\n  -webkit-animation: dg-zoomOut .6s;\n          animation: dg-zoomOut .6s;\n}@-webkit-keyframes dg-bounceIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n40% {\n    opacity: 1;\n    -webkit-transform: scale(1.06);\n            transform: scale(1.06);\n}\n60% {\n    -webkit-transform: scale(0.92);\n            transform: scale(0.92);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}@keyframes dg-bounceIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n40% {\n    opacity: 1;\n    -webkit-transform: scale(1.06);\n            transform: scale(1.06);\n}\n60% {\n    -webkit-transform: scale(0.92);\n            transform: scale(0.92);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}@-webkit-keyframes dg-bounceOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n25% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n100% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}@keyframes dg-bounceOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n25% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n100% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}.dg-btn-loader {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 0;\n  left: 0;\n}.dg-btn-loader .dg-circles {\n    width: 100%;\n    display: block;\n    text-align: center;\n}.dg-btn-loader .dg-circle {\n    width: .9em;\n    height: .9em;\n    opacity: 0;\n    background-color: #09a2e3;\n    display: inline-block;\n    border-radius: 50%;\n    -webkit-animation-name: dg-circle-oscillation;\n            animation-name: dg-circle-oscillation;\n    -webkit-animation-duration: 0.5875s;\n            animation-duration: 0.5875s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-direction: normal;\n            animation-direction: normal;\n}.dg-btn-loader .dg-circle:not(:last-child) {\n      margin-right: 8px;\n}.dg-btn-loader .dg-circle:nth-child(1) {\n      -webkit-animation-delay: 0.1195s;\n              animation-delay: 0.1195s;\n}.dg-btn-loader .dg-circle:nth-child(2) {\n      -webkit-animation-delay: 0.2755s;\n              animation-delay: 0.2755s;\n}.dg-btn-loader .dg-circle:nth-child(3) {\n      -webkit-animation-delay: 0.3485s;\n              animation-delay: 0.3485s;\n}@-webkit-keyframes dg-circle-oscillation {\n0% {\n}\n50% {\n    opacity: 1;\n}\n100% {\n}\n}@keyframes dg-circle-oscillation {\n0% {\n}\n50% {\n    opacity: 1;\n}\n100% {\n}\n}body.dg-open {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}.dg-container * {\n  box-sizing: border-box;\n}.dg-container [disabled] {\n  cursor: not-allowed;\n  opacity: .3;\n}.dg-backdrop {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n}.dg-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5000;\n}.dg-content-cont {\n  width: 100%;\n  font-family: inherit;\n}.dg-main-content {\n  width: 98%;\n  /*width: calc(98% - 30px);*/\n  max-width: 400px;\n  padding: 15px;\n  border-radius: 5px;\n  margin: 25px auto;\n  background-color: #ffffff;\n}.dg-content {\n  font-size: 16px;\n  line-height: 1.3em;\n}.dg-title {\n  margin: 0 0 10px 0;\n  padding: 0;\n  font-size: 18px;\n}.dg-content-body {\n  border-bottom: 2px solid #E1E6EA;\n  padding-bottom: 15px;\n}.dg-content-footer {\n  position: relative;\n  padding: 15px 0 0;\n}.dg-form {\n  background-color: ghostwhite;\n  padding: 10px;\n  margin-bottom: -15px;\n}.dg-content-cont--floating {\n  position: absolute;\n  top: 35%;\n  -webkit-transform: translateY(-70%);\n          transform: translateY(-70%);\n  margin-top: 0;\n}@media all and (max-height: 700px) {\n.dg-content-cont--floating {\n    position: relative;\n    top: 10%;\n    -webkit-transform: none;\n            transform: none;\n    margin-top: 0;\n}\n}.dg-btn {\n  display: inline-block;\n  position: relative;\n  min-width: 80px;\n  padding: 6px 20px;\n  border-radius: 4px;\n  outline: 0;\n  border: 2px solid transparent;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: 16px;\n  font-weight: 700;\n}.dg-btn:focus,\n.dg-btn:active,\n.dg-btn:link {\n  outline: none;\n}.dg-btn::-moz-focus-inner {\n  border: 0;\n}.dg-btn--cancel {\n  color: #fefefe;\n  background-color: #0096D9;\n}.dg-btn--ok {\n  color: #0096D9;\n  background-color: #fefefe;\n  border-color: #0096D9;\n}.dg-pull-right {\n  float: right;\n}.dg-btn.dg-btn--loading .dg-btn-content {\n  visibility: hidden;\n}.dg-clear:before {\n  content: ' ';\n  display: block;\n  clear: both;\n}.dg-content-body--has-title .dg-content {\n  font-size: 14px;\n}.dg-container--has-input .dg-main-content {\n  max-width: 450px;\n}.dg-container--has-input .dg-content {\n  margin-bottom: 15px;\n}.dg-container--has-input .dg-content-body {\n  border-bottom: none;\n}.dg-container--has-input .dg-form {\n  border: 1px solid #E1E6EA;\n  border-bottom: none;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}.dg-container--has-input .dg-content-footer {\n  background-color: ghostwhite;\n  border: 1px solid #E1E6EA;\n  border-top: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding: 0 10px 10px;\n}.dg-container .dg-highlight-1 {\n  color: #FF8C00;\n  font-weight: bold;\n  border-bottom: 1px solid #2ba5ff;\n}.dg-container .dg-highlight-2 {\n  color: #2ba5ff;\n  font-weight: bold;\n  border-bottom: 1px solid #FF8C00;\n}\n", "",{"version":3,"sources":["../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css","../../../../node_modules/quill/dist/quill.core.css","../../../../node_modules/quill/dist/quill.snow.css","../../../../node_modules/quill/dist/quill.bubble.css","../../../../node_modules/vue-form-wizard/dist/vue-form-wizard.min.css","../../../../node_modules/vuejs-dialog/dist/vuejs-dialog.min.css"],"names":[],"mappings":"AAAA,gCAAgC,mBAAmB,CAAC,sBAAsB,iBAAiB,CAAC,SAAS,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,eAAe,CAAC,aAAa,CAAC,yDAAyD,iBAAiB,CAAC,UAAU,CAAC,OAAO,CAAC,QAAQ,CAAC,oBAAoB,CAAC,UAAU,CAAC,WAAW,CAAC,kBAAkB,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,gCAAgC,CAAC,6BAA6B,4DAAoD,CAApD,oDAAoD,CAAC,0CAAiC,CAAjC,kCAAkC,CAAC,4BAA4B,4DAAoD,CAApD,oDAAoD,CAAC,0CAAiC,CAAjC,kCAAkC,CAAC,sEAAsE,kCAAkC,CAAC,SAAS,CAAC,+DAA+D,SAAS,CAAC,sDAAsD,mBAAmB,CAAC,cAAc,CAA+B,yBAAyB,CAAC,aAAa,sBAAsB,CAAC,aAAa,CAAC,iBAAiB,CAAC,UAAU,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,eAAe,qBAAqB,CAAC,mBAAmB,YAAY,CAAC,uBAAuB,kBAAkB,CAAC,mBAAmB,CAAC,UAAU,CAAC,qBAAqB,UAAU,CAAC,uMAAuM,2BAA2B,CAAC,4BAA4B,CAAC,0CAA0C,gCAAuB,CAAvB,wBAAwB,CAAC,qLAAqL,wBAAwB,CAAC,yBAAyB,CAAC,yCAAyC,iBAAiB,CAAC,oBAAoB,CAAC,eAAe,CAAC,gBAAgB,CAAC,WAAW,CAAC,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,UAAU,CAAC,0BAA0B,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,0CAA0C,aAAa,CAAC,+CAAiC,aAAa,CAA9C,2CAAiC,aAAa,CAA9C,iCAAiC,aAAa,CAAC,6EAA6E,UAAU,CAAC,qDAAqD,oBAAoB,CAAC,qDAAqD,oBAAoB,CAAC,YAAY,CAAC,qBAAqB,gBAAgB,CAAC,iBAAiB,CAAC,wBAAwB,cAAc,CAAC,mBAAmB,eAAe,CAAC,aAAa,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,eAAe,CAAC,cAAc,CAAC,kBAAkB,iBAAiB,CAAC,oBAAoB,CAAC,yBAAyB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,UAAU,CAAC,aAAa,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,CAAC,cAAc,CAAC,sBAAsB,CAAC,uBAAuB,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,UAAU,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,uBAAuB,CAAC,iBAAiB,CAAC,6BAA6B,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,0DAA0D,kBAAkB,CAAC,sEAAsE,UAAU,CAAC,sBAAsB,eAAe,CAAC,eAAe,CAAC,uBAAuB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,2CAA2C,gBAAgB,CAAC,qBAAqB,CAAC,aAAa,CAAC,QAAQ,CAAC,oBAAoB,CAAC,cAAc,CAAC,qBAAqB,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,OAAO,CAAC,eAAe,CAAC,iBAAiB,CAAC,qCAA4B,CAA5B,6BAA4B,CAA5B,yDAA6B,CAAC,4BAA4B,iBAAiB,CAAC,OAAO,CAAC,OAAO,CAAC,UAAU,CAAC,cAAc,CAAC,yCAAyC,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,0BAA0B,aAAa,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,+CAA+C,YAAY,CAAC,8BAA8B,iBAAiB,CAAC,aAAa,CAAC,eAAe,CAAC,UAAU,CAAC,gBAAgB,CAAC,aAAa,CAAC,wBAAwB,CAAC,eAAe,CAAC,6BAA6B,CAAC,8BAA8B,CAAC,UAAU,CAAC,gCAAgC,CAAC,sBAAsB,eAAe,CAAC,oBAAoB,CAAC,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,kBAAkB,CAAC,kDAAkD,WAAW,CAAC,2BAA2B,CAAC,4BAA4B,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,kBAAkB,CAAC,4BAA4B,CAAC,wCAAwC,YAAY,CAAC,sBAAsB,aAAa,CAAC,qBAAqB,aAAa,CAAC,YAAY,CAAC,eAAe,CAAC,gBAAgB,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,cAAc,CAAC,kBAAkB,CAAC,2BAA2B,KAAK,CAAC,OAAO,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,cAAc,CAAC,gCAAgC,kBAAkB,CAAC,YAAY,CAAC,UAAU,CAAC,sCAAsC,yBAAyB,CAAC,kBAAkB,CAAC,UAAU,CAAC,+BAA+B,kBAAkB,CAAC,aAAa,CAAC,eAAe,CAAC,qCAAqC,2BAA2B,CAAC,YAAY,CAAC,8DAA8D,kBAAkB,CAAC,UAAU,CAAC,oEAAoE,kBAAkB,CAAC,2BAA2B,CAAC,UAAU,CAAC,yFAAyF,kBAAkB,CAAC,aAAa,CAAC,+BAA+B,4BAA4B,CAAC,uBAAuB,CAAC,WAAW,CAAC,mBAAmB,CAAC,4BAA4B,kBAAkB,CAAC,aAAa,CAAC,2DAA2D,kBAAkB,CAAC,UAAU,CAAC,iEAAiE,kBAAkB,CAAC,8DAA8D,kBAAkB,CAAC,oEAAoE,kBAAkB,CAAC,UAAU,CAAC,0EAA0E,kBAAkB,CAAC,2BAA2B,CAAC,UAAU,CAAC,oDAAoD,wBAAwB,CAAC,6CAA6C,SAAS,CAAC,qBAAqB,iBAAiB,CAAC,gBAAgB,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,uBAAuB,gBAAgB,CAAC,+BAA+B,UAAU,CAAC,QAAQ,CAAC,6BAA6B,sBAAsB,CAAC,gCAAgC,gBAAgB,CAAC,qCAAqC,UAAU,CAAC,MAAM,CAAC,8BAA8B,UAAU,CAAC,SAAS,CAAC,gCAAgC,UAAU,CAAC,QAAQ,CAAC,4BAAoB,GAAG,2BAAkB,CAAlB,mBAAmB,CAAC,GAAG,+BAAsB,CAAtB,uBAAuB,CAAC,CAAtE,oBAAoB,GAAG,2BAAkB,CAAlB,mBAAmB,CAAC,GAAG,+BAAsB,CAAtB,uBAAuB,CAAC,CCAr/N;;;;;EAKE,CACF;EACE,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;AACV,CACA;EACE,SAAS;EACT,UAAU;AACZ,CACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,cAAW;KAAX,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;AACvB,CACA;EACE,YAAY;AACd,CACA;;;;;;;;;;;EAWE,SAAS;EACT,UAAU;EACV,6EAA6E;AAC/E,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,qBAAqB;AACvB,CACA;EACE,gBAAgB;AAClB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;AACd,CACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB,CACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,oBAAoB;AACtB,CACA;EACE,6EAA6E;EAC7E,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,sEAAsE;AACxE,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,+DAA+D;AACjE,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,wDAAwD;AAC1D,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,iDAAiD;AACnD,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,mCAAmC;AACrC,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,4BAA4B;AAC9B,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,qBAAqB;AACvB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,iBAAiB;AACnB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,cAAc;EACd,eAAe;AACjB,CACA;EACE,cAAc;AAChB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,WAAW;AACb,CACA;EACE,cAAc;AAChB,CACA;EACE,WAAW;AACb,CACA;EACE,WAAW;AACb,CACA;EACE,cAAc;AAChB,CACA;EACE,WAAW;AACb,CACA;EACE,WAAW;AACb,CACA;EACE,4CAA4C;AAC9C,CACA;EACE,2CAA2C;AAC7C,CACA;EACE,iBAAiB;AACnB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,cAAc;EACd,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb,CC5YA;;;;;EAKE,CACF;EACE,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;AACV,CACA;EACE,SAAS;EACT,UAAU;AACZ,CACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,cAAW;KAAX,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;AACvB,CACA;EACE,YAAY;AACd,CACA;;;;;;;;;;;EAWE,SAAS;EACT,UAAU;EACV,6EAA6E;AAC/E,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,qBAAqB;AACvB,CACA;EACE,gBAAgB;AAClB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;AACd,CACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB,CACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,oBAAoB;AACtB,CACA;EACE,6EAA6E;EAC7E,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,sEAAsE;AACxE,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,+DAA+D;AACjE,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,wDAAwD;AAC1D,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,iDAAiD;AACnD,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,mCAAmC;AACrC,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,4BAA4B;AAC9B,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,qBAAqB;AACvB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,iBAAiB;AACnB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,cAAc;EACd,eAAe;AACjB,CACA;EACE,cAAc;AAChB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,WAAW;AACb,CACA;EACE,cAAc;AAChB,CACA;EACE,WAAW;AACb,CACA;EACE,WAAW;AACb,CACA;EACE,cAAc;AAChB,CACA;EACE,WAAW;AACb,CACA;EACE,WAAW;AACb,CACA;EACE,4CAA4C;AAC9C,CACA;EACE,2CAA2C;AAC7C,CACA;EACE,iBAAiB;AACnB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,cAAc;EACd,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb,CACA;;EAEE,WAAW;EACX,WAAW;EACX,cAAc;AAChB,CACA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb,CACA;;EAEE,WAAW;EACX,YAAY;AACd,CACA;;EAEE,aAAa;AACf,CACA;;EAEE,aAAa;AACf,CACA;;;;;;;;;;;;;;EAcE,WAAW;AACb,CACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,UAAU;AACZ,CACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,YAAY;AACd,CACA;EACE;;IAEE,WAAW;EACb;EACA;;;;IAIE,UAAU;EACZ;EACA;;;;IAIE,YAAY;EACd;AACF,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,aAAa;AACf,CACA;;EAEE,kBAAkB;AACpB,CACA;EACE,kBAAkB;EAClB,mCAA2B;UAA3B,2BAA2B;AAC7B,CACA;EACE,eAAe;EACf,qBAAqB;AACvB,CACA;EACE,oCAA4B;UAA5B,4BAA4B;AAC9B,CACA;EACE,qBAAqB;EACrB,sBAAsB;AACxB,CACA;EACE,WAAW;EACX,WAAW;EACX,cAAc;AAChB,CACA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;AACjB,CACA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB,CACA;;EAEE,UAAU;AACZ,CACA;EACE,UAAU;AACZ,CACA;EACE,kBAAkB;AACpB,CACA;;EAEE,eAAe;AACjB,CACA;EACE,YAAY;AACd,CACA;EACE,aAAa;AACf,CACA;EACE,eAAe;AACjB,CACA;EACE,aAAa;AACf,CACA;EACE,cAAc;AAChB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,cAAc;AAChB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,0BAA0B;AAC5B,CACA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB,CACA;;EAEE,yBAAyB;EACzB,kBAAkB;AACpB,CACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB,CACA;EACE,cAAc;EACd,gBAAgB;AAClB,CACA;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB,CACA;EACE,eAAe;AACjB,CACA;EACE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;AACxB,CACA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb,CACA;EACE,qBAAqB;EACrB,iBAAiB;AACnB,CACA;EACE,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB,CACA;EACE,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB,CACA;EACE,WAAW;EACX,UAAU;AACZ,CACA;EACE,UAAU;AACZ,CACA;EACE,YAAY;AACd,CACA;EACE,cAAc;EACd,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ,CACA;;EAEE,WAAW;AACb,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,UAAU;AACZ,CACA;EACE,gBAAgB;AAClB,CACA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB,CACA;EACE,gBAAgB;EAChB,YAAY;AACd,CACA;EACE,6BAA6B;EAC7B,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,WAAW;AACb,CACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,QAAQ;EACR,QAAQ;EACR,WAAW;AACb,CACA;;;;;;EAME,yBAAyB;AAC3B,CACA;EACE,WAAW;AACb,CACA;;EAEE,iBAAiB;AACnB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;EACE,cAAc;AAChB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,cAAc;AAChB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,YAAY;AACd,CACA;;EAEE,qBAAqB;AACvB,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,oBAAoB;AACtB,CACA;EACE,4CAA4C;AAC9C,CACA;EACE,2CAA2C;AAC7C,CACA;EACE,WAAW;AACb,CACA;;EAEE,iBAAiB;AACnB,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,eAAe;AACjB,CACA;EACE,eAAe;AACjB,CACA;EACE,eAAe;AACjB,CACA;EACE,eAAe;AACjB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,+DAA+D;EAC/D,YAAY;AACd,CACA;EACE,kBAAkB;AACpB,CACA;EACE,6BAA6B;AAC/B,CACA;EACE,6BAA6B;EAC7B,qCAAqC;AACvC,CACA;EACE,kBAAkB;AACpB,CACA;EACE,kBAAkB;AACpB,CACA;;EAEE,kBAAkB;AACpB,CACA;EACE,eAAe;AACjB,CACA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB,CACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;AACnB,CACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,YAAY;AACd,CACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB,CACA;EACE,4BAA4B;EAC5B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB,CACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB,CACA;EACE,iBAAiB;AACnB,CACA;;EAEE,aAAa;AACf,CACA;EACE,qBAAqB;AACvB,CACA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,uBAAuB;AACzB,CACA;EACE,WAAW;AACb,CACA;EACE,sBAAsB;AACxB,CCh7BA;;;;;EAKE,CACF;EACE,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;AACV,CACA;EACE,SAAS;EACT,UAAU;AACZ,CACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,cAAW;KAAX,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;AACvB,CACA;EACE,YAAY;AACd,CACA;;;;;;;;;;;EAWE,SAAS;EACT,UAAU;EACV,6EAA6E;AAC/E,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,qBAAqB;AACvB,CACA;EACE,gBAAgB;AAClB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;AACd,CACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB,CACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB,CACA;;EAEE,mBAAmB;AACrB,CACA;;EAEE,oBAAoB;AACtB,CACA;EACE,6EAA6E;EAC7E,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,sEAAsE;AACxE,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,+DAA+D;AACjE,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,wDAAwD;AAC1D,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,iDAAiD;AACnD,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,mCAAmC;AACrC,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,4BAA4B;AAC9B,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,0CAA0C;AAC5C,CACA;EACE,qBAAqB;AACvB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sCAAsC;AACxC,CACA;EACE,iBAAiB;AACnB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,oBAAoB;AACtB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,qBAAqB;AACvB,CACA;EACE,cAAc;EACd,eAAe;AACjB,CACA;EACE,cAAc;AAChB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,yBAAyB;AAC3B,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,WAAW;AACb,CACA;EACE,cAAc;AAChB,CACA;EACE,WAAW;AACb,CACA;EACE,WAAW;AACb,CACA;EACE,cAAc;AAChB,CACA;EACE,WAAW;AACb,CACA;EACE,WAAW;AACb,CACA;EACE,4CAA4C;AAC9C,CACA;EACE,2CAA2C;AAC7C,CACA;EACE,iBAAiB;AACnB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,cAAc;EACd,mBAAmB;AACrB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb,CACA;;EAEE,WAAW;EACX,WAAW;EACX,cAAc;AAChB,CACA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb,CACA;;EAEE,WAAW;EACX,YAAY;AACd,CACA;;EAEE,aAAa;AACf,CACA;;EAEE,aAAa;AACf,CACA;;;;;;;;;;;;;;EAcE,WAAW;AACb,CACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,UAAU;AACZ,CACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,YAAY;AACd,CACA;EACE;;IAEE,WAAW;EACb;EACA;;;;IAIE,UAAU;EACZ;EACA;;;;IAIE,YAAY;EACd;AACF,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,aAAa;AACf,CACA;;EAEE,kBAAkB;AACpB,CACA;EACE,kBAAkB;EAClB,mCAA2B;UAA3B,2BAA2B;AAC7B,CACA;EACE,eAAe;EACf,qBAAqB;AACvB,CACA;EACE,oCAA4B;UAA5B,4BAA4B;AAC9B,CACA;EACE,qBAAqB;EACrB,sBAAsB;AACxB,CACA;EACE,WAAW;EACX,WAAW;EACX,cAAc;AAChB,CACA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;AACjB,CACA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB,CACA;;EAEE,UAAU;AACZ,CACA;EACE,UAAU;AACZ,CACA;EACE,kBAAkB;AACpB,CACA;;EAEE,eAAe;AACjB,CACA;EACE,YAAY;AACd,CACA;EACE,aAAa;AACf,CACA;EACE,eAAe;AACjB,CACA;EACE,aAAa;AACf,CACA;EACE,cAAc;AAChB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,cAAc;AAChB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,0BAA0B;AAC5B,CACA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB,CACA;;EAEE,yBAAyB;EACzB,kBAAkB;AACpB,CACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB,CACA;EACE,cAAc;EACd,gBAAgB;AAClB,CACA;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB,CACA;EACE,eAAe;AACjB,CACA;EACE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;AACxB,CACA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb,CACA;EACE,qBAAqB;EACrB,iBAAiB;AACnB,CACA;EACE,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB,CACA;EACE,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB,CACA;EACE,WAAW;EACX,UAAU;AACZ,CACA;EACE,UAAU;AACZ,CACA;EACE,YAAY;AACd,CACA;EACE,cAAc;EACd,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ,CACA;;EAEE,WAAW;AACb,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,UAAU;AACZ,CACA;EACE,gBAAgB;AAClB,CACA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB,CACA;EACE,gBAAgB;EAChB,YAAY;AACd,CACA;EACE,6BAA6B;EAC7B,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,WAAW;AACb,CACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,QAAQ;EACR,QAAQ;EACR,WAAW;AACb,CACA;;;;;;EAME,yBAAyB;AAC3B,CACA;EACE,WAAW;AACb,CACA;;EAEE,iBAAiB;AACnB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;;EAEE,oBAAoB;AACtB,CACA;EACE,cAAc;AAChB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,cAAc;AAChB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,iBAAiB;AACnB,CACA;EACE,YAAY;AACd,CACA;;EAEE,qBAAqB;AACvB,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,oBAAoB;AACtB,CACA;EACE,4CAA4C;AAC9C,CACA;EACE,2CAA2C;AAC7C,CACA;EACE,WAAW;AACb,CACA;;EAEE,iBAAiB;AACnB,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,gBAAgB;AAClB,CACA;;EAEE,eAAe;AACjB,CACA;EACE,eAAe;AACjB,CACA;EACE,eAAe;AACjB,CACA;EACE,eAAe;AACjB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,sBAAsB;AACxB,CACA;EACE,wBAAwB;AAC1B,CACA;EACE,iBAAiB;AACnB,CACA;EACE,WAAW;AACb,CACA;;EAEE,kBAAkB;AACpB,CACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb,CACA;EACE,kCAAkC;EAClC,mCAAmC;EACnC,YAAY;EACZ,cAAc;EACd,SAAS;EACT,iBAAiB;EACjB,kBAAkB;AACpB,CACA;EACE,6BAA6B;EAC7B,SAAS;AACX,CACA;EACE,0BAA0B;EAC1B,YAAY;AACd,CACA;EACE,cAAc;AAChB,CACA;EACE,kBAAkB;AACpB,CACA;EACE,aAAa;AACf,CACA;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb,CACA;EACE,SAAS;EACT,kBAAkB;EAClB,WAAW;AACb,CACA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB,CACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB,CACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;AACZ,CACA;EACE,0BAA0B;EAC1B,kCAAkC;EAClC,mCAAmC;EACnC,MAAM;EACN,YAAY;EACZ,SAAS;EACT,QAAQ;AACV,CACA;;EAEE,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,yCAAiC;UAAjC,iCAAiC;EACjC,oCAAoC;EACpC,kBAAkB;AACpB,CACA;;EAEE,mBAAmB;AACrB,CCv7BA,6BAA6B,oBAAoB,CAAC,eAAe,CAAC,eAAe,CAAC,iBAAiB,CAAC,qBAAqB,CAA+B,yBAAyB,CAAC,cAAc,CAAC,qBAAqB,CAAC,4BAA4B,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,cAAc,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,6HAA6H,kBAAkB,CAAC,WAAW,CAAC,wBAAwB,CAAyB,eAAe,CAAC,mBAAiD,qBAAqB,CAAC,mBAAmB,oBAAoB,CAAC,6BAA6B,eAAe,CAAC,cAAc,CAAC,eAAe,CAAC,gCAAgC,iBAAiB,CAAC,aAAa,CAAC,kCAAkC,iBAAiB,CAAC,aAAa,CAAC,iBAAiB,CAAC,gFAAgF,oBAAoB,CAAC,qBAAqB,CAAC,2CAA2C,UAAU,CAAC,kGAAkG,UAAU,CAAC,oBAAoB,CAAC,4BAA4B,CAAC,kBAAkB,CAAC,sCAAsC,UAAU,CAAC,OAAO,CAAC,WAAW,CAAC,cAAc,CAAC,gBAAgB,CAAC,UAAU,CAAC,iBAAiB,CAAC,wBAAwB,CAAmD,yCAAyC,CAAmC,yBAAyB,CAAC,kFAAgH,qBAAqB,CAAC,gBAAgB,CAAC,4BAA4B,CAAC,cAAc,CAAC,eAAe,CAAC,gBAAgB,CAAC,eAAe,CAAC,4LAA4L,mBAAmB,CAAC,mCAAmC,YAAY,CAAC,iBAAiB,CAAC,iBAAiB,CAAyC,YAAY,CAAoB,cAAc,CAAC,2EAAyG,QAAM,CAAgD,kBAAkB,CAAoB,cAAc,CAAqB,WAAW,CAAC,6EAAqH,YAAY,CAAC,wCAA2H,qBAAqB,CAAC,SAAS,CAAC,aAAa,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,OAAO,CAAC,4FAA4F,4BAA4B,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,iDAAiD,mBAAmB,CAAC,cAAc,CAAC,yJAAyJ,4BAA4B,CAAyC,+BAA+B,CAAC,gMAAgM,UAAU,CAAC,cAAc,CAAyC,YAAY,CAAgD,kBAAkB,CAA8C,sBAAsB,CAAmC,yBAAyB,CAAC,iBAAiB,mBAAmB,CAAC,2BAA2B,8BAA8B,CAAC,2CAA2C,4BAA4B,CAAC,wCAAwC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kDAAkD,WAAW,CAAC,+DAA+D,cAAc,CAAC,oEAAoE,iBAAiB,CAAC,QAAQ,CAAC,UAAU,CAAC,wCAAwC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kDAAkD,WAAW,CAAC,+DAA+D,cAAc,CAAC,oEAAoE,iBAAiB,CAAC,QAAQ,CAAC,UAAU,CAAC,wCAAwC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kDAAkD,WAAW,CAAC,+DAA+D,cAAc,CAAC,oEAAoE,iBAAiB,CAAC,QAAQ,CAAC,UAAU,CAAC,wCAAwC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kDAAkD,WAAW,CAAC,+DAA+D,cAAc,CAAC,oEAAoE,iBAAiB,CAAC,QAAQ,CAAC,UAAU,CAAC,qCAAqC,cAAc,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,eAAe,CAAC,UAAU,CAAC,WAAW,CAAC,qBAAqB,CAAC,iBAAiB,CAAyC,YAAY,CAA8C,sBAAsB,CAA2B,oBAAoB,CAAC,kDAAkD,eAAe,CAAC,+CAA+C,UAAU,CAAC,eAAe,CAAC,WAAW,CAAC,WAAW,CAAC,wBAAwB,CAAC,eAAe,CAAC,4DAAoG,YAAY,CAA8C,sBAAsB,CAA+B,QAAM,CAAC,iBAAiB,CAAC,+IAA+I,eAAe,CAAC,kDAA0F,YAAY,CAAgD,kBAAkB,CAA8C,sBAAsB,CAAC,qCAAqC,gBAAgB,CAAC,sBAAsB,CAAC,gCAAgC,YAAY,CAAC,iBAAiB,CAAC,yBAAyB,CAAC,iBAAiB,CAAC,+BAA+B,aAAa,CAAC,eAAe,CAAC,QAAQ,CAAC,iBAAiB,CAAC,2BAA2B,cAAc,CAAC,eAAe,CAAC,aAAa,CAAC,eAAe,CAAC,iBAAiB,CAAC,iEAAiE,iBAAiB,CAAC,QAAQ,CAAC,UAAU,CAAC,sFAA8G,eAAe,CAAmC,yBAAyB,CAAC,iCAAiC,UAAU,CAAC,UAAU,CAAC,aAAa,CAAC,qCAAqC,cAAc,CAAC,yDAAyD,UAAU,CAAC,0DAA0D,WAAW,CAAC,oCAAoC,qCAA6E,YAAY,CAA8C,sBAAsB,CAAoF,qBAAqB,CAAC,mHAAmH,UAAU,CAA+B,QAAM,CAAyC,YAAY,CAA8C,sBAAsB,CAAC,iEAAiE,eAAe,CAAC,CAAC,8CAA8C,aAAa,CAAC,4CAA+H,qBAAqB,CAAC,6CAAqF,YAAY,CAAmF,kBAAkB,CAAC,8CAA8C,gBAAgB,CCChvQ;EAEE,gCAAgC;EAExB,sBAAsB;AAChC,CACA;EAEE,iCAAiC;AACnC,CACA;EACE,UAAU;AACZ,CACA;;EAGE,kBAAkB;AACpB,CACA;;EAEE,UAAU;EACV,mCAAmC;UAC3B,2BAA2B;AACrC,CACA;EACE,gCAAgC;UACxB,wBAAwB;AAClC,CACA;EACE,iCAAiC;UACzB,yBAAyB;AACnC,CACA;EACE,6DAA6D;UACrD,qDAAqD;AAC/D,CACA;EACE,8DAA8D;UACtD,sDAAsD;AAChE,CACA;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;AACA,CACA;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;AACA,CACA;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;AACA,CACA;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;AACA,CACA;EACE,6DAA6D;UACrD,qDAAqD;AAC/D,CACA;EACE,8DAA8D;UACtD,sDAAsD;AAChE,CACA;AACA;IACI,UAAU;IACV,yCAAyC;IACzC,iCAAiC;AACrC;AACA;IACI,UAAU;AACd;AACA,CACA;AACA;IACI,UAAU;IACV,yCAAyC;IACzC,iCAAiC;AACrC;AACA;IACI,UAAU;AACd;AACA,CACA;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;IACV,yCAAyC;IACzC,iCAAiC;AACrC;AACA;IACI,UAAU;AACd;AACA,CACA;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;IACV,yCAAyC;IACzC,iCAAiC;AACrC;AACA;IACI,UAAU;AACd;AACA,CACA;EACE,kCAAkC;UAC1B,0BAA0B;AACpC,CACA;EACE,iCAAiC;UACzB,yBAAyB;AACnC,CACA;AACA;IACI,UAAU;IACV,6BAA6B;YACrB,qBAAqB;AACjC;AACA;IACI,UAAU;IACV,8BAA8B;YACtB,sBAAsB;AAClC;AACA;IACI,8BAA8B;YACtB,sBAAsB;AAClC;AACA;IACI,2BAA2B;YACnB,mBAAmB;AAC/B;AACA,CACA;AACA;IACI,UAAU;IACV,6BAA6B;YACrB,qBAAqB;AACjC;AACA;IACI,UAAU;IACV,8BAA8B;YACtB,sBAAsB;AAClC;AACA;IACI,8BAA8B;YACtB,sBAAsB;AAClC;AACA;IACI,2BAA2B;YACnB,mBAAmB;AAC/B;AACA,CACA;AACA;IACI,2BAA2B;YACnB,mBAAmB;AAC/B;AACA;IACI,8BAA8B;YACtB,sBAAsB;AAClC;AACA;IACI,UAAU;IACV,6BAA6B;YACrB,qBAAqB;AACjC;AACA;IACI,UAAU;IACV,6BAA6B;YACrB,qBAAqB;AACjC;AACA,CACA;AACA;IACI,2BAA2B;YACnB,mBAAmB;AAC/B;AACA;IACI,8BAA8B;YACtB,sBAAsB;AAClC;AACA;IACI,UAAU;IACV,6BAA6B;YACrB,qBAAqB;AACjC;AACA;IACI,UAAU;IACV,6BAA6B;YACrB,qBAAqB;AACjC;AACA,CACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAGlB,aAAa;EAGL,mBAAmB;EAC3B,MAAM;EACN,OAAO;AACT,CACA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;AACtB,CACA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,qBAAqB;IACrB,kBAAkB;IAClB,6CAA6C;YACrC,qCAAqC;IAC7C,mCAAmC;YAC3B,2BAA2B;IACnC,2CAA2C;YACnC,mCAAmC;IAC3C,mCAAmC;YAC3B,2BAA2B;AACvC,CACA;MACM,iBAAiB;AACvB,CACA;MACM,gCAAgC;cACxB,wBAAwB;AACtC,CACA;MACM,gCAAgC;cACxB,wBAAwB;AACtC,CACA;MACM,gCAAgC;cACxB,wBAAwB;AACtC,CACA;AACA;AACA;AACA;IACI,UAAU;AACd;AACA;AACA;AACA,CACA;AACA;AACA;AACA;IACI,UAAU;AACd;AACA;AACA;AACA,CACA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB,CACA;EAEU,sBAAsB;AAChC,CACA;EACE,mBAAmB;EACnB,WAAW;AACb,CACA;EACE,oCAAoC;EACpC,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;AACf,CACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;AACf,CACA;EACE,WAAW;EACX,oBAAoB;AACtB,CACA;EACE,UAAU;EACV,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;AAC3B,CACA;EACE,eAAe;EACf,kBAAkB;AACpB,CACA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB,CACA;EACE,gCAAgC;EAChC,oBAAoB;AACtB,CACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB,CACA;EACE,4BAA4B;EAC5B,aAAa;EACb,oBAAoB;AACtB,CACA;EACE,kBAAkB;EAClB,QAAQ;EACR,mCAAmC;UAC3B,2BAA2B;EACnC,aAAa;AACf,CACA;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,uBAAuB;YACf,eAAe;IACvB,aAAa;AACjB;AACA,CACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,6BAA6B;EAC7B,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB,CACA;;;EAGE,aAAa;AACf,CACA;EACE,SAAS;AACX,CACA;EACE,cAAc;EACd,yBAAyB;AAC3B,CACA;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB,CACA;EACE,YAAY;AACd,CACA;EACE,kBAAkB;AACpB,CACA;EACE,YAAY;EACZ,cAAc;EACd,WAAW;AACb,CACA;EACE,eAAe;AACjB,CACA;EACE,gBAAgB;AAClB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,mBAAmB;AACrB,CACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,2BAA2B;EAC3B,4BAA4B;AAC9B,CACA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,gBAAgB;EAChB,8BAA8B;EAC9B,+BAA+B;EAC/B,oBAAoB;AACtB,CACA;EACE,cAAc;EACd,iBAAiB;EACjB,gCAAgC;AAClC,CACA;EACE,cAAc;EACd,iBAAiB;EACjB,gCAAgC;AAClC","file":"main.scss","sourcesContent":["fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}","/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n","/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n","/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-bubble.ql-toolbar:after,\n.ql-bubble .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble.ql-toolbar button,\n.ql-bubble .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-bubble.ql-toolbar button svg,\n.ql-bubble .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-bubble.ql-toolbar button:active:hover,\n.ql-bubble .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-bubble.ql-toolbar input.ql-image[type=file],\n.ql-bubble .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-bubble.ql-toolbar button:hover,\n.ql-bubble .ql-toolbar button:hover,\n.ql-bubble.ql-toolbar button:focus,\n.ql-bubble .ql-toolbar button:focus,\n.ql-bubble.ql-toolbar button.ql-active,\n.ql-bubble .ql-toolbar button.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-label:hover,\n.ql-bubble .ql-toolbar .ql-picker-label:hover,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-item:hover,\n.ql-bubble .ql-toolbar .ql-picker-item:hover,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected {\n  color: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-stroke,\n.ql-bubble .ql-toolbar button:hover .ql-stroke,\n.ql-bubble.ql-toolbar button:focus .ql-stroke,\n.ql-bubble .ql-toolbar button:focus .ql-stroke,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #fff;\n}\n@media (pointer: coarse) {\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active),\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) {\n    color: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #ccc;\n  }\n}\n.ql-bubble {\n  box-sizing: border-box;\n}\n.ql-bubble * {\n  box-sizing: border-box;\n}\n.ql-bubble .ql-hidden {\n  display: none;\n}\n.ql-bubble .ql-out-bottom,\n.ql-bubble .ql-out-top {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-bubble .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-bubble .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-bubble .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-bubble .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble .ql-stroke {\n  fill: none;\n  stroke: #ccc;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-bubble .ql-stroke-miter {\n  fill: none;\n  stroke: #ccc;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-bubble .ql-fill,\n.ql-bubble .ql-stroke.ql-fill {\n  fill: #ccc;\n}\n.ql-bubble .ql-empty {\n  fill: none;\n}\n.ql-bubble .ql-even {\n  fill-rule: evenodd;\n}\n.ql-bubble .ql-thin,\n.ql-bubble .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-bubble .ql-transparent {\n  opacity: 0.4;\n}\n.ql-bubble .ql-direction svg:last-child {\n  display: none;\n}\n.ql-bubble .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-bubble .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-bubble .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-bubble .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-bubble .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-editor a {\n  text-decoration: underline;\n}\n.ql-bubble .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-bubble .ql-editor code,\n.ql-bubble .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-bubble .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-bubble .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-bubble .ql-editor img {\n  max-width: 100%;\n}\n.ql-bubble .ql-picker {\n  color: #ccc;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-bubble .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-bubble .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-bubble .ql-picker-options {\n  background-color: #444;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-bubble .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label {\n  color: #777;\n  z-index: 2;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-bubble .ql-color-picker,\n.ql-bubble .ql-icon-picker {\n  width: 28px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label,\n.ql-bubble .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label svg,\n.ql-bubble .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-bubble .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-bubble .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-bubble .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-bubble .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-bubble .ql-toolbar .ql-formats {\n  margin: 8px 12px 8px 0px;\n}\n.ql-bubble .ql-toolbar .ql-formats:first-child {\n  margin-left: 12px;\n}\n.ql-bubble .ql-color-picker svg {\n  margin: 1px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,\n.ql-bubble .ql-color-picker .ql-picker-item:hover {\n  border-color: #fff;\n}\n.ql-bubble .ql-tooltip {\n  background-color: #444;\n  border-radius: 25px;\n  color: #fff;\n}\n.ql-bubble .ql-tooltip-arrow {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \" \";\n  display: block;\n  left: 50%;\n  margin-left: -6px;\n  position: absolute;\n}\n.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow {\n  border-bottom: 6px solid #444;\n  top: -6px;\n}\n.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow {\n  border-top: 6px solid #444;\n  bottom: -6px;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor {\n  display: block;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-formats {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip-editor {\n  display: none;\n}\n.ql-bubble .ql-tooltip-editor input[type=text] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  height: 100%;\n  outline: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 100%;\n}\n.ql-bubble .ql-tooltip-editor a {\n  top: 10px;\n  position: absolute;\n  right: 20px;\n}\n.ql-bubble .ql-tooltip-editor a:before {\n  color: #ccc;\n  content: \"\\D7\";\n  font-size: 16px;\n  font-weight: bold;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a {\n  position: relative;\n  white-space: nowrap;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before {\n  background-color: #444;\n  border-radius: 15px;\n  top: -5px;\n  font-size: 12px;\n  color: #fff;\n  content: attr(href);\n  font-weight: normal;\n  overflow: hidden;\n  padding: 5px 15px;\n  text-decoration: none;\n  z-index: 1;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  border-top: 6px solid #444;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before,\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  left: 0;\n  margin-left: 50%;\n  position: absolute;\n  transform: translate(-50%, -100%);\n  transition: visibility 0s ease 200ms;\n  visibility: hidden;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::before,\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::after {\n  visibility: visible;\n}\n",".vue-form-wizard .wizard-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px}.vue-form-wizard .wizard-btn.disabled,.vue-form-wizard .wizard-btn[disabled],fieldset[disabled] .vue-form-wizard .wizard-btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.vue-form-wizard *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue-form-wizard a{text-decoration:none}.vue-form-wizard .wizard-nav{margin-bottom:0;padding-left:0;list-style:none}.vue-form-wizard .wizard-nav>li{position:relative;display:block}.vue-form-wizard .wizard-nav>li>a{position:relative;display:block;padding:10px 15px}.vue-form-wizard .wizard-nav>li>a:focus,.vue-form-wizard .wizard-nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-form-wizard .wizard-nav>li.disabled>a{color:#777}.vue-form-wizard .wizard-nav>li.disabled>a:focus,.vue-form-wizard .wizard-nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.vue-form-wizard .wizard-progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn,.vue-form-wizard .wizard-btn{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:2px;background-color:transparent;font-size:14px;font-weight:600;padding:6px 12px;min-width:140px}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:focus,.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:hover,.vue-form-wizard .wizard-btn:focus,.vue-form-wizard .wizard-btn:hover{outline:0!important}.vue-form-wizard .wizard-nav-pills{margin-top:0;position:relative;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.vue-form-wizard .wizard-nav-pills a,.vue-form-wizard .wizard-nav-pills li{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-positive:1;flex-grow:1}.vue-form-wizard .wizard-nav-pills>li>a,.vue-form-wizard .wizard-nav-pills a{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-form-wizard .wizard-nav-pills>li>a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0 auto;color:rgba(0,0,0,.2);position:relative;top:3px}.vue-form-wizard .wizard-nav-pills>li>a:focus,.vue-form-wizard .wizard-nav-pills>li>a:hover{background-color:transparent;color:rgba(0,0,0,.2);outline:0!important}.vue-form-wizard .wizard-nav-pills>li>a.disabled{pointer-events:none;cursor:default}.vue-form-wizard .wizard-nav-pills>li.active>a,.vue-form-wizard .wizard-nav-pills>li.active>a:focus,.vue-form-wizard .wizard-nav-pills>li.active>a:hover{background-color:transparent;-webkit-transition:font-size .2s linear;transition:font-size .2s linear}.vue-form-wizard .wizard-nav-pills>li.active>a .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:focus .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:hover .wizard-icon{color:#fff;font-size:24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .2s linear;transition:all .2s linear}.vue-form-wizard{padding-bottom:20px}.vue-form-wizard .is_error{border-color:#c84513!important}.vue-form-wizard .is_error .icon-container{background:#c84513!important}.vue-form-wizard.xs .wizard-icon-circle{width:40px;height:40px;font-size:16px}.vue-form-wizard.xs .wizard-icon-circle.tab_shape{height:25px}.vue-form-wizard.xs .wizard-nav-pills>li.active>a .wizard-icon{font-size:16px}.vue-form-wizard.xs .wizard-navigation .wizard-progress-with-circle{position:relative;top:25px;height:4px}.vue-form-wizard.sm .wizard-icon-circle{width:50px;height:50px;font-size:20px}.vue-form-wizard.sm .wizard-icon-circle.tab_shape{height:30px}.vue-form-wizard.sm .wizard-nav-pills>li.active>a .wizard-icon{font-size:20px}.vue-form-wizard.sm .wizard-navigation .wizard-progress-with-circle{position:relative;top:30px;height:4px}.vue-form-wizard.md .wizard-icon-circle{width:70px;height:70px;font-size:24px}.vue-form-wizard.md .wizard-icon-circle.tab_shape{height:40px}.vue-form-wizard.md .wizard-nav-pills>li.active>a .wizard-icon{font-size:24px}.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard.lg .wizard-icon-circle{width:90px;height:90px;font-size:28px}.vue-form-wizard.lg .wizard-icon-circle.tab_shape{height:50px}.vue-form-wizard.lg .wizard-nav-pills>li.active>a .wizard-icon{font-size:28px}.vue-form-wizard.lg .wizard-navigation .wizard-progress-with-circle{position:relative;top:50px;height:4px}.vue-form-wizard .wizard-icon-circle{font-size:18px;border:3px solid #f3f2ee;border-radius:50%;font-weight:600;width:70px;height:70px;background-color:#fff;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}.vue-form-wizard .wizard-icon-circle.square_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle.tab_shape{width:100%;min-width:100px;height:40px;border:none;background-color:#f3f2ee;border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;border-radius:40%}.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-tab-content{min-height:100px;padding:30px 20px 10px}.vue-form-wizard .wizard-header{padding:15px;position:relative;border-radius:3px 3px 0 0;text-align:center}.vue-form-wizard .wizard-title{color:#252422;font-weight:300;margin:0;text-align:center}.vue-form-wizard .category{font-size:14px;font-weight:400;color:#9a9a9a;margin-bottom:0;text-align:center}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{-webkit-box-shadow:none;box-shadow:none;-webkit-transition:width .3s ease;transition:width .3s ease}.vue-form-wizard .clearfix:after{content:\"\";clear:both;display:table}.vue-form-wizard .wizard-card-footer{padding:0 20px}.vue-form-wizard .wizard-card-footer .wizard-footer-left{float:left}.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:right}@media screen and (max-width:350px){.vue-form-wizard .wizard-card-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard .wizard-card-footer .wizard-footer-left,.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:none;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-card-footer .wizard-footer-right button{margin-top:10px}}.vue-form-wizard.vertical .wizard-card-footer{display:block}.vue-form-wizard.vertical .wizard-nav-pills{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard.vertical .wizard-navigation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.vue-form-wizard.vertical .wizard-card-footer{padding-top:30px}","\n.fadeTr-enter-active {\n  -webkit-transition: opacity 0.3s ease-in;\n  transition: opacity 0.3s ease-in;\n  -webkit-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n}\n.fadeTr-leave-active {\n  -webkit-transition: opacity 0.1s ease-out;\n  transition: opacity 0.1s ease-out;\n}\n.fadeTr-enter, .fadeTr-leave-to {\n  opacity: 0;\n}\n.slide-enter-active,\n.slide-leave-active {\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.slide-enter,\n.slide-leave-to {\n  opacity: 0;\n  -webkit-transform: translateX(30px);\n          transform: translateX(30px);\n}\n.dg-backdrop-enter-active {\n  -webkit-animation: dg-fadeIn .3s;\n          animation: dg-fadeIn .3s;\n}\n.dg-backdrop-leave-active {\n  -webkit-animation: dg-fadeOut .5s;\n          animation: dg-fadeOut .5s;\n}\n.dg-fade-enter-active {\n  -webkit-animation: dg-fadeIn 0.6s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-fadeIn 0.6s cubic-bezier(0, 0, 0.58, 1);\n}\n.dg-fade-leave-active {\n  -webkit-animation: dg-fadeOut 0.6s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-fadeOut 0.6s cubic-bezier(0, 0, 0.58, 1);\n}\n@-webkit-keyframes dg-fadeIn {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes dg-fadeIn {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes dg-fadeOut {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes dg-fadeOut {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n.dg-zoom-enter-active {\n  -webkit-animation: dg-zoomIn 0.3s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-zoomIn 0.3s cubic-bezier(0, 0, 0.58, 1);\n}\n.dg-zoom-leave-active {\n  -webkit-animation: dg-zoomOut 0.4s cubic-bezier(0, 0, 0.58, 1);\n          animation: dg-zoomOut 0.4s cubic-bezier(0, 0, 0.58, 1);\n}\n@-webkit-keyframes dg-zoomIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n50% {\n    opacity: 1;\n}\n}\n@keyframes dg-zoomIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n50% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes dg-zoomOut {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes dg-zoomOut {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n100% {\n    opacity: 0;\n}\n}\n.dg-bounce-enter-active {\n  -webkit-animation: dg-bounceIn .6s;\n          animation: dg-bounceIn .6s;\n}\n.dg-bounce-leave-active {\n  -webkit-animation: dg-zoomOut .6s;\n          animation: dg-zoomOut .6s;\n}\n@-webkit-keyframes dg-bounceIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n40% {\n    opacity: 1;\n    -webkit-transform: scale(1.06);\n            transform: scale(1.06);\n}\n60% {\n    -webkit-transform: scale(0.92);\n            transform: scale(0.92);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes dg-bounceIn {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n40% {\n    opacity: 1;\n    -webkit-transform: scale(1.06);\n            transform: scale(1.06);\n}\n60% {\n    -webkit-transform: scale(0.92);\n            transform: scale(0.92);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes dg-bounceOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n25% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n100% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n@keyframes dg-bounceOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n25% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n100% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n.dg-btn-loader {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n}\n.dg-btn-loader .dg-circles {\n    width: 100%;\n    display: block;\n    text-align: center;\n}\n.dg-btn-loader .dg-circle {\n    width: .9em;\n    height: .9em;\n    opacity: 0;\n    background-color: #09a2e3;\n    display: inline-block;\n    border-radius: 50%;\n    -webkit-animation-name: dg-circle-oscillation;\n            animation-name: dg-circle-oscillation;\n    -webkit-animation-duration: 0.5875s;\n            animation-duration: 0.5875s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-direction: normal;\n            animation-direction: normal;\n}\n.dg-btn-loader .dg-circle:not(:last-child) {\n      margin-right: 8px;\n}\n.dg-btn-loader .dg-circle:nth-child(1) {\n      -webkit-animation-delay: 0.1195s;\n              animation-delay: 0.1195s;\n}\n.dg-btn-loader .dg-circle:nth-child(2) {\n      -webkit-animation-delay: 0.2755s;\n              animation-delay: 0.2755s;\n}\n.dg-btn-loader .dg-circle:nth-child(3) {\n      -webkit-animation-delay: 0.3485s;\n              animation-delay: 0.3485s;\n}\n@-webkit-keyframes dg-circle-oscillation {\n0% {\n}\n50% {\n    opacity: 1;\n}\n100% {\n}\n}\n@keyframes dg-circle-oscillation {\n0% {\n}\n50% {\n    opacity: 1;\n}\n100% {\n}\n}\nbody.dg-open {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.dg-container * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.dg-container [disabled] {\n  cursor: not-allowed;\n  opacity: .3;\n}\n.dg-backdrop {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n}\n.dg-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5000;\n}\n.dg-content-cont {\n  width: 100%;\n  font-family: inherit;\n}\n.dg-main-content {\n  width: 98%;\n  /*width: calc(98% - 30px);*/\n  max-width: 400px;\n  padding: 15px;\n  border-radius: 5px;\n  margin: 25px auto;\n  background-color: #ffffff;\n}\n.dg-content {\n  font-size: 16px;\n  line-height: 1.3em;\n}\n.dg-title {\n  margin: 0 0 10px 0;\n  padding: 0;\n  font-size: 18px;\n}\n.dg-content-body {\n  border-bottom: 2px solid #E1E6EA;\n  padding-bottom: 15px;\n}\n.dg-content-footer {\n  position: relative;\n  padding: 15px 0 0;\n}\n.dg-form {\n  background-color: ghostwhite;\n  padding: 10px;\n  margin-bottom: -15px;\n}\n.dg-content-cont--floating {\n  position: absolute;\n  top: 35%;\n  -webkit-transform: translateY(-70%);\n          transform: translateY(-70%);\n  margin-top: 0;\n}\n@media all and (max-height: 700px) {\n.dg-content-cont--floating {\n    position: relative;\n    top: 10%;\n    -webkit-transform: none;\n            transform: none;\n    margin-top: 0;\n}\n}\n.dg-btn {\n  display: inline-block;\n  position: relative;\n  min-width: 80px;\n  padding: 6px 20px;\n  border-radius: 4px;\n  outline: 0;\n  border: 2px solid transparent;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: 16px;\n  font-weight: 700;\n}\n.dg-btn:focus,\n.dg-btn:active,\n.dg-btn:link {\n  outline: none;\n}\n.dg-btn::-moz-focus-inner {\n  border: 0;\n}\n.dg-btn--cancel {\n  color: #fefefe;\n  background-color: #0096D9;\n}\n.dg-btn--ok {\n  color: #0096D9;\n  background-color: #fefefe;\n  border-color: #0096D9;\n}\n.dg-pull-right {\n  float: right;\n}\n.dg-btn.dg-btn--loading .dg-btn-content {\n  visibility: hidden;\n}\n.dg-clear:before {\n  content: ' ';\n  display: block;\n  clear: both;\n}\n.dg-content-body--has-title .dg-content {\n  font-size: 14px;\n}\n.dg-container--has-input .dg-main-content {\n  max-width: 450px;\n}\n.dg-container--has-input .dg-content {\n  margin-bottom: 15px;\n}\n.dg-container--has-input .dg-content-body {\n  border-bottom: none;\n}\n.dg-container--has-input .dg-form {\n  border: 1px solid #E1E6EA;\n  border-bottom: none;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.dg-container--has-input .dg-content-footer {\n  background-color: ghostwhite;\n  border: 1px solid #E1E6EA;\n  border-top: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding: 0 10px 10px;\n}\n.dg-container .dg-highlight-1 {\n  color: #FF8C00;\n  font-weight: bold;\n  border-bottom: 1px solid #2ba5ff;\n}\n.dg-container .dg-highlight-2 {\n  color: #2ba5ff;\n  font-weight: bold;\n  border-bottom: 1px solid #FF8C00;\n}\n\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-toasted/dist/vue-toasted.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-toasted/dist/vue-toasted.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module))) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var r, n; }
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t;
    }, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "/dist/", e(e.s = 6);
  }([function (t, e, n) {
    "use strict";

    function r() {
      d = !1;
    }

    function i(t) {
      if (!t) return void (f !== m && (f = m, r()));

      if (t !== f) {
        if (t.length !== m.length) throw new Error("Custom alphabet for shortid must be " + m.length + " unique characters. You submitted " + t.length + " characters: " + t);
        var e = t.split("").filter(function (t, e, n) {
          return e !== n.lastIndexOf(t);
        });
        if (e.length) throw new Error("Custom alphabet for shortid must be " + m.length + " unique characters. These characters were not unique: " + e.join(", "));
        f = t, r();
      }
    }

    function o(t) {
      return i(t), f;
    }

    function a(t) {
      h.seed(t), p !== t && (r(), p = t);
    }

    function s() {
      f || i(m);

      for (var t, e = f.split(""), n = [], r = h.nextValue(); e.length > 0;) {
        r = h.nextValue(), t = Math.floor(r * e.length), n.push(e.splice(t, 1)[0]);
      }

      return n.join("");
    }

    function c() {
      return d || (d = s());
    }

    function u(t) {
      return c()[t];
    }

    function l() {
      return f || m;
    }

    var f,
        p,
        d,
        h = n(19),
        m = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
    t.exports = {
      get: l,
      characters: o,
      seed: a,
      lookup: u,
      shuffled: c
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(5),
        i = n.n(r);
    e.a = {
      animateIn: function animateIn(t) {
        i()({
          targets: t,
          translateY: "-35px",
          opacity: 1,
          duration: 300,
          easing: "easeOutCubic"
        });
      },
      animateOut: function animateOut(t, e) {
        i()({
          targets: t,
          opacity: 0,
          marginTop: "-40px",
          duration: 300,
          easing: "easeOutExpo",
          complete: e
        });
      },
      animateOutBottom: function animateOutBottom(t, e) {
        i()({
          targets: t,
          opacity: 0,
          marginBottom: "-40px",
          duration: 300,
          easing: "easeOutExpo",
          complete: e
        });
      },
      animateReset: function animateReset(t) {
        i()({
          targets: t,
          left: 0,
          opacity: 1,
          duration: 300,
          easing: "easeOutExpo"
        });
      },
      animatePanning: function animatePanning(t, e, n) {
        i()({
          targets: t,
          duration: 10,
          easing: "easeOutQuad",
          left: e,
          opacity: n
        });
      },
      animatePanEnd: function animatePanEnd(t, e) {
        i()({
          targets: t,
          opacity: 0,
          duration: 300,
          easing: "easeOutExpo",
          complete: e
        });
      },
      clearAnimation: function clearAnimation(t) {
        var e = i.a.timeline();
        t.forEach(function (t) {
          e.add({
            targets: t.el,
            opacity: 0,
            right: "-40px",
            duration: 300,
            offset: "-=150",
            easing: "easeOutExpo",
            complete: function complete() {
              t.remove();
            }
          });
        });
      }
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = n(16);
  }, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return s;
    });
    var r = n(8),
        i = n(1),
        o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        a = n(2);
    n(11).polyfill();

    var s = function t(e) {
      var n = this;
      return this.id = a.generate(), this.options = e, this.cached_options = {}, this.global = {}, this.groups = [], this.toasts = [], u(this), this.group = function (e) {
        e || (e = {}), e.globalToasts || (e.globalToasts = {}), Object.assign(e.globalToasts, n.global);
        var r = new t(e);
        return n.groups.push(r), r;
      }, this.register = function (t, e, r) {
        return r = r || {}, l(n, t, e, r);
      }, this.show = function (t, e) {
        return c(n, t, e);
      }, this.success = function (t, e) {
        return e = e || {}, e.type = "success", c(n, t, e);
      }, this.info = function (t, e) {
        return e = e || {}, e.type = "info", c(n, t, e);
      }, this.error = function (t, e) {
        return e = e || {}, e.type = "error", c(n, t, e);
      }, this.remove = function (t) {
        n.toasts = n.toasts.filter(function (e) {
          return e.el.hash !== t.hash;
        }), t.parentNode && t.parentNode.removeChild(t);
      }, this.clear = function (t) {
        return i.a.clearAnimation(n.toasts, function () {
          t && t();
        }), n.toasts = [], !0;
      }, this;
    },
        c = function c(t, e, i) {
      i = i || {};
      var a = null;
      if ("object" !== (void 0 === i ? "undefined" : o(i))) return console.error("Options should be a type of object. given : " + i), null;
      t.options.singleton && t.toasts.length > 0 && (t.cached_options = i, t.toasts[t.toasts.length - 1].goAway(0));
      var s = Object.assign({}, t.options);
      return Object.assign(s, i), a = n.i(r.a)(t, e, s), t.toasts.push(a), a;
    },
        u = function u(t) {
      var e = t.options.globalToasts,
          n = function n(e, _n) {
        return "string" == typeof _n && t[_n] ? t[_n].apply(t, [e, {}]) : c(t, e, _n);
      };

      e && (t.global = {}, Object.keys(e).forEach(function (r) {
        t.global[r] = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e[r].apply(null, [t, n]);
        };
      }));
    },
        l = function l(t, e, n, r) {
      t.options.globalToasts || (t.options.globalToasts = {}), t.options.globalToasts[e] = function (t, e) {
        var i = null;
        return "string" == typeof n && (i = n), "function" == typeof n && (i = n(t)), e(i, r);
      }, u(t);
    };
  }, function (t, e, n) {
    n(22);
    var r = n(21)(null, null, null, null);
    t.exports = r.exports;
  }, function (t, e, n) {
    (function (n) {
      var r,
          i,
          o,
          a = {
        scope: {}
      };
      a.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
        if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
        t != Array.prototype && t != Object.prototype && (t[e] = n.value);
      }, a.getGlobal = function (t) {
        return "undefined" != typeof window && window === t ? t : void 0 !== n && null != n ? n : t;
      }, a.global = a.getGlobal(this), a.SYMBOL_PREFIX = "jscomp_symbol_", a.initSymbol = function () {
        a.initSymbol = function () {}, a.global.Symbol || (a.global.Symbol = a.Symbol);
      }, a.symbolCounter_ = 0, a.Symbol = function (t) {
        return a.SYMBOL_PREFIX + (t || "") + a.symbolCounter_++;
      }, a.initSymbolIterator = function () {
        a.initSymbol();
        var t = a.global.Symbol.iterator;
        t || (t = a.global.Symbol.iterator = a.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && a.defineProperty(Array.prototype, t, {
          configurable: !0,
          writable: !0,
          value: function value() {
            return a.arrayIterator(this);
          }
        }), a.initSymbolIterator = function () {};
      }, a.arrayIterator = function (t) {
        var e = 0;
        return a.iteratorPrototype(function () {
          return e < t.length ? {
            done: !1,
            value: t[e++]
          } : {
            done: !0
          };
        });
      }, a.iteratorPrototype = function (t) {
        return a.initSymbolIterator(), t = {
          next: t
        }, t[a.global.Symbol.iterator] = function () {
          return this;
        }, t;
      }, a.array = a.array || {}, a.iteratorFromArray = function (t, e) {
        a.initSymbolIterator(), t instanceof String && (t += "");
        var n = 0,
            r = {
          next: function next() {
            if (n < t.length) {
              var i = n++;
              return {
                value: e(i, t[i]),
                done: !1
              };
            }

            return r.next = function () {
              return {
                done: !0,
                value: void 0
              };
            }, r.next();
          }
        };
        return r[Symbol.iterator] = function () {
          return r;
        }, r;
      }, a.polyfill = function (t, e, n, r) {
        if (e) {
          for (n = a.global, t = t.split("."), r = 0; r < t.length - 1; r++) {
            var i = t[r];
            i in n || (n[i] = {}), n = n[i];
          }

          t = t[t.length - 1], r = n[t], e = e(r), e != r && null != e && a.defineProperty(n, t, {
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      }, a.polyfill("Array.prototype.keys", function (t) {
        return t || function () {
          return a.iteratorFromArray(this, function (t) {
            return t;
          });
        };
      }, "es6-impl", "es3");
      var s = this;
      !function (n, a) {
        i = [], r = a, void 0 !== (o = "function" == typeof r ? r.apply(e, i) : r) && (t.exports = o);
      }(0, function () {
        function t(t) {
          if (!R.col(t)) try {
            return document.querySelectorAll(t);
          } catch (t) {}
        }

        function e(t, e) {
          for (var n = t.length, r = 2 <= arguments.length ? arguments[1] : void 0, i = [], o = 0; o < n; o++) {
            if (o in t) {
              var a = t[o];
              e.call(r, a, o, t) && i.push(a);
            }
          }

          return i;
        }

        function n(t) {
          return t.reduce(function (t, e) {
            return t.concat(R.arr(e) ? n(e) : e);
          }, []);
        }

        function r(e) {
          return R.arr(e) ? e : (R.str(e) && (e = t(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
        }

        function i(t, e) {
          return t.some(function (t) {
            return t === e;
          });
        }

        function o(t) {
          var e,
              n = {};

          for (e in t) {
            n[e] = t[e];
          }

          return n;
        }

        function a(t, e) {
          var n,
              r = o(t);

          for (n in t) {
            r[n] = e.hasOwnProperty(n) ? e[n] : t[n];
          }

          return r;
        }

        function c(t, e) {
          var n,
              r = o(t);

          for (n in e) {
            r[n] = R.und(t[n]) ? e[n] : t[n];
          }

          return r;
        }

        function u(t) {
          t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, r) {
            return e + e + n + n + r + r;
          });
          var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          t = parseInt(e[1], 16);
          var n = parseInt(e[2], 16),
              e = parseInt(e[3], 16);
          return "rgba(" + t + "," + n + "," + e + ",1)";
        }

        function l(t) {
          function e(t, e, n) {
            return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (e - t) * n : .5 > n ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
          }

          var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
          t = parseInt(n[1]) / 360;
          var r = parseInt(n[2]) / 100,
              i = parseInt(n[3]) / 100,
              n = n[4] || 1;
          if (0 == r) i = r = t = i;else {
            var o = .5 > i ? i * (1 + r) : i + r - i * r,
                a = 2 * i - o,
                i = e(a, o, t + 1 / 3),
                r = e(a, o, t);
            t = e(a, o, t - 1 / 3);
          }
          return "rgba(" + 255 * i + "," + 255 * r + "," + 255 * t + "," + n + ")";
        }

        function f(t) {
          if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) return t[2];
        }

        function p(t) {
          return -1 < t.indexOf("translate") || "perspective" === t ? "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? "deg" : void 0;
        }

        function d(t, e) {
          return R.fnc(t) ? t(e.target, e.id, e.total) : t;
        }

        function h(t, e) {
          if (e in t.style) return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
        }

        function m(t, e) {
          return R.dom(t) && i(D, e) ? "transform" : R.dom(t) && (t.getAttribute(e) || R.svg(t) && t[e]) ? "attribute" : R.dom(t) && "transform" !== e && h(t, e) ? "css" : null != t[e] ? "object" : void 0;
        }

        function v(t, n) {
          var r = p(n),
              r = -1 < n.indexOf("scale") ? 1 : 0 + r;
          if (!(t = t.style.transform)) return r;

          for (var i = [], o = [], a = [], s = /(\w+)\((.+?)\)/g; i = s.exec(t);) {
            o.push(i[1]), a.push(i[2]);
          }

          return t = e(a, function (t, e) {
            return o[e] === n;
          }), t.length ? t[0] : r;
        }

        function g(t, e) {
          switch (m(t, e)) {
            case "transform":
              return v(t, e);

            case "css":
              return h(t, e);

            case "attribute":
              return t.getAttribute(e);
          }

          return t[e] || 0;
        }

        function y(t, e) {
          var n = /^(\*=|\+=|-=)/.exec(t);
          if (!n) return t;
          var r = f(t) || 0;

          switch (e = parseFloat(e), t = parseFloat(t.replace(n[0], "")), n[0][0]) {
            case "+":
              return e + t + r;

            case "-":
              return e - t + r;

            case "*":
              return e * t + r;
          }
        }

        function b(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }

        function x(t) {
          t = t.points;

          for (var e, n = 0, r = 0; r < t.numberOfItems; r++) {
            var i = t.getItem(r);
            0 < r && (n += b(e, i)), e = i;
          }

          return n;
        }

        function T(t) {
          if (t.getTotalLength) return t.getTotalLength();

          switch (t.tagName.toLowerCase()) {
            case "circle":
              return 2 * Math.PI * t.getAttribute("r");

            case "rect":
              return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");

            case "line":
              return b({
                x: t.getAttribute("x1"),
                y: t.getAttribute("y1")
              }, {
                x: t.getAttribute("x2"),
                y: t.getAttribute("y2")
              });

            case "polyline":
              return x(t);

            case "polygon":
              var e = t.points;
              return x(t) + b(e.getItem(e.numberOfItems - 1), e.getItem(0));
          }
        }

        function w(t, e) {
          function n(n) {
            return n = void 0 === n ? 0 : n, t.el.getPointAtLength(1 <= e + n ? e + n : 0);
          }

          var r = n(),
              i = n(-1),
              o = n(1);

          switch (t.property) {
            case "x":
              return r.x;

            case "y":
              return r.y;

            case "angle":
              return 180 * Math.atan2(o.y - i.y, o.x - i.x) / Math.PI;
          }
        }

        function E(t, e) {
          var n,
              r = /-?\d*\.?\d+/g;
          if (n = R.pth(t) ? t.totalLength : t, R.col(n)) {
            if (R.rgb(n)) {
              var i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
              n = i ? "rgba(" + i[1] + ",1)" : n;
            } else n = R.hex(n) ? u(n) : R.hsl(n) ? l(n) : void 0;
          } else i = (i = f(n)) ? n.substr(0, n.length - i.length) : n, n = e && !/\s/g.test(n) ? i + e : i;
          return n += "", {
            original: n,
            numbers: n.match(r) ? n.match(r).map(Number) : [0],
            strings: R.str(t) || e ? n.split(r) : []
          };
        }

        function C(t) {
          return t = t ? n(R.arr(t) ? t.map(r) : r(t)) : [], e(t, function (t, e, n) {
            return n.indexOf(t) === e;
          });
        }

        function S(t) {
          var e = C(t);
          return e.map(function (t, n) {
            return {
              target: t,
              id: n,
              total: e.length
            };
          });
        }

        function O(t, e) {
          var n = o(e);

          if (R.arr(t)) {
            var i = t.length;
            2 !== i || R.obj(t[0]) ? R.fnc(e.duration) || (n.duration = e.duration / i) : t = {
              value: t
            };
          }

          return r(t).map(function (t, n) {
            return n = n ? 0 : e.delay, t = R.obj(t) && !R.pth(t) ? t : {
              value: t
            }, R.und(t.delay) && (t.delay = n), t;
          }).map(function (t) {
            return c(t, n);
          });
        }

        function A(t, e) {
          var n,
              r = {};

          for (n in t) {
            var i = d(t[n], e);
            R.arr(i) && (i = i.map(function (t) {
              return d(t, e);
            }), 1 === i.length && (i = i[0])), r[n] = i;
          }

          return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r;
        }

        function I(t) {
          return R.arr(t) ? F.apply(this, t) : z[t];
        }

        function M(t, e) {
          var n;
          return t.tweens.map(function (r) {
            r = A(r, e);
            var i = r.value,
                o = g(e.target, t.name),
                a = n ? n.to.original : o,
                a = R.arr(i) ? i[0] : a,
                s = y(R.arr(i) ? i[1] : i, a),
                o = f(s) || f(a) || f(o);
            return r.from = E(a, o), r.to = E(s, o), r.start = n ? n.end : t.offset, r.end = r.start + r.delay + r.duration, r.easing = I(r.easing), r.elasticity = (1e3 - Math.min(Math.max(r.elasticity, 1), 999)) / 1e3, r.isPath = R.pth(i), r.isColor = R.col(r.from.original), r.isColor && (r.round = 1), n = r;
          });
        }

        function P(t, r) {
          return e(n(t.map(function (t) {
            return r.map(function (e) {
              var n = m(t.target, e.name);

              if (n) {
                var r = M(e, t);
                e = {
                  type: n,
                  property: e.name,
                  animatable: t,
                  tweens: r,
                  duration: r[r.length - 1].end,
                  delay: r[0].delay
                };
              } else e = void 0;

              return e;
            });
          })), function (t) {
            return !R.und(t);
          });
        }

        function k(t, e, n, r) {
          var i = "delay" === t;
          return e.length ? (i ? Math.min : Math.max).apply(Math, e.map(function (e) {
            return e[t];
          })) : i ? r.delay : n.offset + r.delay + r.duration;
        }

        function L(t) {
          var e,
              n = a(_, t),
              r = a(X, t),
              i = S(t.targets),
              o = [],
              s = c(n, r);

          for (e in t) {
            s.hasOwnProperty(e) || "targets" === e || o.push({
              name: e,
              offset: s.offset,
              tweens: O(t[e], r)
            });
          }

          return t = P(i, o), c(n, {
            children: [],
            animatables: i,
            animations: t,
            duration: k("duration", t, n, r),
            delay: k("delay", t, n, r)
          });
        }

        function j(t) {
          function n() {
            return window.Promise && new Promise(function (t) {
              return f = t;
            });
          }

          function r(t) {
            return d.reversed ? d.duration - t : t;
          }

          function i(t) {
            for (var n = 0, r = {}, i = d.animations, o = i.length; n < o;) {
              var a = i[n],
                  s = a.animatable,
                  c = a.tweens,
                  u = c.length - 1,
                  l = c[u];
              u && (l = e(c, function (e) {
                return t < e.end;
              })[0] || l);

              for (var c = Math.min(Math.max(t - l.start - l.delay, 0), l.duration) / l.duration, f = isNaN(c) ? 1 : l.easing(c, l.elasticity), c = l.to.strings, p = l.round, u = [], m = void 0, m = l.to.numbers.length, v = 0; v < m; v++) {
                var g = void 0,
                    g = l.to.numbers[v],
                    y = l.from.numbers[v],
                    g = l.isPath ? w(l.value, f * g) : y + f * (g - y);
                p && (l.isColor && 2 < v || (g = Math.round(g * p) / p)), u.push(g);
              }

              if (l = c.length) for (m = c[0], f = 0; f < l; f++) {
                p = c[f + 1], v = u[f], isNaN(v) || (m = p ? m + (v + p) : m + (v + " "));
              } else m = u[0];
              Y[a.type](s.target, a.property, m, r, s.id), a.currentValue = m, n++;
            }

            if (n = Object.keys(r).length) for (i = 0; i < n; i++) {
              N || (N = h(document.body, "transform") ? "transform" : "-webkit-transform"), d.animatables[i].target.style[N] = r[i].join(" ");
            }
            d.currentTime = t, d.progress = t / d.duration * 100;
          }

          function o(t) {
            d[t] && d[t](d);
          }

          function a() {
            d.remaining && !0 !== d.remaining && d.remaining--;
          }

          function s(t) {
            var e = d.duration,
                s = d.offset,
                h = s + d.delay,
                m = d.currentTime,
                v = d.reversed,
                g = r(t);

            if (d.children.length) {
              var y = d.children,
                  b = y.length;
              if (g >= d.currentTime) for (var x = 0; x < b; x++) {
                y[x].seek(g);
              } else for (; b--;) {
                y[b].seek(g);
              }
            }

            (g >= h || !e) && (d.began || (d.began = !0, o("begin")), o("run")), g > s && g < e ? i(g) : (g <= s && 0 !== m && (i(0), v && a()), (g >= e && m !== e || !e) && (i(e), v || a())), o("update"), t >= e && (d.remaining ? (u = c, "alternate" === d.direction && (d.reversed = !d.reversed)) : (d.pause(), d.completed || (d.completed = !0, o("complete"), "Promise" in window && (f(), p = n()))), l = 0);
          }

          t = void 0 === t ? {} : t;
          var c,
              u,
              l = 0,
              f = null,
              p = n(),
              d = L(t);
          return d.reset = function () {
            var t = d.direction,
                e = d.loop;

            for (d.currentTime = 0, d.progress = 0, d.paused = !0, d.began = !1, d.completed = !1, d.reversed = "reverse" === t, d.remaining = "alternate" === t && 1 === e ? 2 : e, i(0), t = d.children.length; t--;) {
              d.children[t].reset();
            }
          }, d.tick = function (t) {
            c = t, u || (u = c), s((l + c - u) * j.speed);
          }, d.seek = function (t) {
            s(r(t));
          }, d.pause = function () {
            var t = q.indexOf(d);
            -1 < t && q.splice(t, 1), d.paused = !0;
          }, d.play = function () {
            d.paused && (d.paused = !1, u = 0, l = r(d.currentTime), q.push(d), H || V());
          }, d.reverse = function () {
            d.reversed = !d.reversed, u = 0, l = r(d.currentTime);
          }, d.restart = function () {
            d.pause(), d.reset(), d.play();
          }, d.finished = p, d.reset(), d.autoplay && d.play(), d;
        }

        var N,
            _ = {
          update: void 0,
          begin: void 0,
          run: void 0,
          complete: void 0,
          loop: 1,
          direction: "normal",
          autoplay: !0,
          offset: 0
        },
            X = {
          duration: 1e3,
          delay: 0,
          easing: "easeOutElastic",
          elasticity: 500,
          round: 0
        },
            D = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
            R = {
          arr: function arr(t) {
            return Array.isArray(t);
          },
          obj: function obj(t) {
            return -1 < Object.prototype.toString.call(t).indexOf("Object");
          },
          pth: function pth(t) {
            return R.obj(t) && t.hasOwnProperty("totalLength");
          },
          svg: function svg(t) {
            return t instanceof SVGElement;
          },
          dom: function dom(t) {
            return t.nodeType || R.svg(t);
          },
          str: function str(t) {
            return "string" == typeof t;
          },
          fnc: function fnc(t) {
            return "function" == typeof t;
          },
          und: function und(t) {
            return void 0 === t;
          },
          hex: function hex(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
          },
          rgb: function rgb(t) {
            return /^rgb/.test(t);
          },
          hsl: function hsl(t) {
            return /^hsl/.test(t);
          },
          col: function col(t) {
            return R.hex(t) || R.rgb(t) || R.hsl(t);
          }
        },
            F = function () {
          function t(t, e, n) {
            return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
          }

          return function (e, n, r, i) {
            if (0 <= e && 1 >= e && 0 <= r && 1 >= r) {
              var o = new Float32Array(11);
              if (e !== n || r !== i) for (var a = 0; 11 > a; ++a) {
                o[a] = t(.1 * a, e, r);
              }
              return function (a) {
                if (e === n && r === i) return a;
                if (0 === a) return 0;
                if (1 === a) return 1;

                for (var s = 0, c = 1; 10 !== c && o[c] <= a; ++c) {
                  s += .1;
                }

                --c;
                var c = s + (a - o[c]) / (o[c + 1] - o[c]) * .1,
                    u = 3 * (1 - 3 * r + 3 * e) * c * c + 2 * (3 * r - 6 * e) * c + 3 * e;

                if (.001 <= u) {
                  for (s = 0; 4 > s && 0 !== (u = 3 * (1 - 3 * r + 3 * e) * c * c + 2 * (3 * r - 6 * e) * c + 3 * e); ++s) {
                    var l = t(c, e, r) - a,
                        c = c - l / u;
                  }

                  a = c;
                } else if (0 === u) a = c;else {
                  var c = s,
                      s = s + .1,
                      f = 0;

                  do {
                    l = c + (s - c) / 2, u = t(l, e, r) - a, 0 < u ? s = l : c = l;
                  } while (1e-7 < Math.abs(u) && 10 > ++f);

                  a = l;
                }

                return t(a, n, i);
              };
            }
          };
        }(),
            z = function () {
          function t(t, e) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e);
          }

          var e,
              n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
              r = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], t],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (e, n) {
              return 1 - t(1 - e, n);
            }],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (e, n) {
              return .5 > e ? t(2 * e, n) / 2 : 1 - t(-2 * e + 2, n) / 2;
            }]
          },
              i = {
            linear: F(.25, .25, .75, .75)
          },
              o = {};

          for (e in r) {
            o.type = e, r[o.type].forEach(function (t) {
              return function (e, r) {
                i["ease" + t.type + n[r]] = R.fnc(e) ? e : F.apply(s, e);
              };
            }(o)), o = {
              type: o.type
            };
          }

          return i;
        }(),
            Y = {
          css: function css(t, e, n) {
            return t.style[e] = n;
          },
          attribute: function attribute(t, e, n) {
            return t.setAttribute(e, n);
          },
          object: function object(t, e, n) {
            return t[e] = n;
          },
          transform: function transform(t, e, n, r, i) {
            r[i] || (r[i] = []), r[i].push(e + "(" + n + ")");
          }
        },
            q = [],
            H = 0,
            V = function () {
          function t() {
            H = requestAnimationFrame(e);
          }

          function e(e) {
            var n = q.length;

            if (n) {
              for (var r = 0; r < n;) {
                q[r] && q[r].tick(e), r++;
              }

              t();
            } else cancelAnimationFrame(H), H = 0;
          }

          return t;
        }();

        return j.version = "2.2.0", j.speed = 1, j.running = q, j.remove = function (t) {
          t = C(t);

          for (var e = q.length; e--;) {
            for (var n = q[e], r = n.animations, o = r.length; o--;) {
              i(t, r[o].animatable.target) && (r.splice(o, 1), r.length || n.pause());
            }
          }
        }, j.getValue = g, j.path = function (e, n) {
          var r = R.str(e) ? t(e)[0] : e,
              i = n || 100;
          return function (t) {
            return {
              el: r,
              property: t,
              totalLength: T(r) * (i / 100)
            };
          };
        }, j.setDashoffset = function (t) {
          var e = T(t);
          return t.setAttribute("stroke-dasharray", e), e;
        }, j.bezier = F, j.easings = z, j.timeline = function (t) {
          var e = j(t);
          return e.pause(), e.duration = 0, e.add = function (n) {
            return e.children.forEach(function (t) {
              t.began = !0, t.completed = !0;
            }), r(n).forEach(function (n) {
              var r = c(n, a(X, t || {}));
              r.targets = r.targets || t.targets, n = e.duration;
              var i = r.offset;
              r.autoplay = !1, r.direction = e.direction, r.offset = R.und(i) ? n : y(i, n), e.began = !0, e.completed = !0, e.seek(r.offset), r = j(r), r.began = !0, r.completed = !0, r.duration > n && (e.duration = r.duration), e.children.push(r);
            }), e.seek(0), e.reset(), e.autoplay && e.restart(), e;
          }, e;
        }, j.random = function (t, e) {
          return Math.floor(Math.random() * (e - t + 1)) + t;
        }, j;
      });
    }).call(e, n(25));
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(3),
        i = n(4),
        o = n.n(i),
        a = {
      install: function install(t, e) {
        e || (e = {});
        var n = new r.a(e);
        t.component("toasted", o.a), t.toasted = t.prototype.$toasted = n;
      }
    };
    "undefined" != typeof window && window.Vue && (window.Toasted = a), e.default = a;
  }, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return c;
    });

    var r = n(1),
        i = this,
        o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        a = function a(t, e, n) {
      return setTimeout(function () {
        if (n.cached_options.position && n.cached_options.position.includes("bottom")) return void r.a.animateOutBottom(t, function () {
          n.remove(t);
        });
        r.a.animateOut(t, function () {
          n.remove(t);
        });
      }, e), !0;
    },
        s = function s(t, e) {
      return ("object" === ("undefined" == typeof HTMLElement ? "undefined" : o(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : o(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e) : t.innerHTML = e, i;
    },
        c = function c(t, e) {
      var n = !1;
      return {
        el: t,
        text: function text(e) {
          return s(t, e), this;
        },
        goAway: function goAway() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 800;
          return n = !0, a(t, r, e);
        },
        remove: function remove() {
          e.remove(t);
        },
        disposed: function disposed() {
          return n;
        }
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(12),
        i = n.n(r),
        o = n(1),
        a = n(7),
        s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        c = n(2);
    String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
      value: function value(t, e) {
        return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
      }
    });

    var u = {},
        l = null,
        f = function f(t) {
      return t.className = t.className || null, t.onComplete = t.onComplete || null, t.position = t.position || "top-right", t.duration = t.duration || null, t.theme = t.theme || "toasted-primary", t.type = t.type || "default", t.containerClass = t.containerClass || null, t.fullWidth = t.fullWidth || !1, t.icon = t.icon || null, t.action = t.action || null, t.fitToScreen = t.fitToScreen || null, t.closeOnSwipe = void 0 === t.closeOnSwipe || t.closeOnSwipe, t.iconPack = t.iconPack || "material", t.className && "string" == typeof t.className && (t.className = t.className.split(" ")), t.className || (t.className = []), t.theme && t.className.push(t.theme.trim()), t.type && t.className.push(t.type), t.containerClass && "string" == typeof t.containerClass && (t.containerClass = t.containerClass.split(" ")), t.containerClass || (t.containerClass = []), t.position && t.containerClass.push(t.position.trim()), t.fullWidth && t.containerClass.push("full-width"), t.fitToScreen && t.containerClass.push("fit-to-screen"), u = t, t;
    },
        p = function p(t, e) {
      var r = document.createElement("div");

      if (r.classList.add("toasted"), r.hash = c.generate(), e.className && e.className.forEach(function (t) {
        r.classList.add(t);
      }), ("object" === ("undefined" == typeof HTMLElement ? "undefined" : s(HTMLElement)) ? t instanceof HTMLElement : t && "object" === (void 0 === t ? "undefined" : s(t)) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) ? r.appendChild(t) : r.innerHTML = t, d(e, r), e.closeOnSwipe) {
        var u = new i.a(r, {
          prevent_default: !1
        });
        u.on("pan", function (t) {
          var e = t.deltaX;
          r.classList.contains("panning") || r.classList.add("panning");
          var n = 1 - Math.abs(e / 80);
          n < 0 && (n = 0), o.a.animatePanning(r, e, n);
        }), u.on("panend", function (t) {
          var n = t.deltaX;
          Math.abs(n) > 80 ? o.a.animatePanEnd(r, function () {
            "function" == typeof e.onComplete && e.onComplete(), r.parentNode && l.remove(r);
          }) : (r.classList.remove("panning"), o.a.animateReset(r));
        });
      }

      if (Array.isArray(e.action)) e.action.forEach(function (t) {
        var e = m(t, n.i(a.a)(r, l));
        e && r.appendChild(e);
      });else if ("object" === s(e.action)) {
        var f = m(e.action, n.i(a.a)(r, l));
        f && r.appendChild(f);
      }
      return r;
    },
        d = function d(t, e) {
      if (t.icon) {
        var n = document.createElement("i");

        switch (t.iconPack) {
          case "fontawesome":
            n.classList.add("fa");
            var r = t.icon.name ? t.icon.name : t.icon;
            r.includes("fa-") ? n.classList.add(r.trim()) : n.classList.add("fa-" + r.trim());
            break;

          case "mdi":
            n.classList.add("mdi");
            var i = t.icon.name ? t.icon.name : t.icon;
            i.includes("mdi-") ? n.classList.add(i.trim()) : n.classList.add("mdi-" + i.trim());
            break;

          case "custom-class":
            var o = t.icon.name ? t.icon.name : t.icon;
            "string" == typeof o ? o.split(" ").forEach(function (t) {
              n.classList.add(t);
            }) : Array.isArray(o) && o.forEach(function (t) {
              n.classList.add(t.trim());
            });
            break;

          case "callback":
            var a = t.icon && t.icon instanceof Function ? t.icon : null;
            a && (n = a(n));
            break;

          default:
            n.classList.add("material-icons"), n.textContent = t.icon.name ? t.icon.name : t.icon;
        }

        t.icon.after && n.classList.add("after"), h(t, n, e);
      }
    },
        h = function h(t, e, n) {
      t.icon && (t.icon.after && t.icon.name ? n.appendChild(e) : (t.icon.name, n.insertBefore(e, n.firstChild)));
    },
        m = function m(t, e) {
      if (!t) return null;
      var n = document.createElement("a");

      if (n.classList.add("action"), n.classList.add("ripple"), t.text && (n.text = t.text), t.href && (n.href = t.href), t.target && (n.target = t.target), t.icon) {
        n.classList.add("icon");
        var r = document.createElement("i");

        switch (u.iconPack) {
          case "fontawesome":
            r.classList.add("fa"), t.icon.includes("fa-") ? r.classList.add(t.icon.trim()) : r.classList.add("fa-" + t.icon.trim());
            break;

          case "mdi":
            r.classList.add("mdi"), t.icon.includes("mdi-") ? r.classList.add(t.icon.trim()) : r.classList.add("mdi-" + t.icon.trim());
            break;

          case "custom-class":
            "string" == typeof t.icon ? t.icon.split(" ").forEach(function (t) {
              n.classList.add(t);
            }) : Array.isArray(t.icon) && t.icon.forEach(function (t) {
              n.classList.add(t.trim());
            });
            break;

          default:
            r.classList.add("material-icons"), r.textContent = t.icon;
        }

        n.appendChild(r);
      }

      return t.class && ("string" == typeof t.class ? t.class.split(" ").forEach(function (t) {
        n.classList.add(t);
      }) : Array.isArray(t.class) && t.class.forEach(function (t) {
        n.classList.add(t.trim());
      })), t.push && n.addEventListener("click", function (n) {
        if (n.preventDefault(), !u.router) return void console.warn("[vue-toasted] : Vue Router instance is not attached. please check the docs");
        u.router.push(t.push), t.push.dontClose || e.goAway(0);
      }), t.onClick && "function" == typeof t.onClick && n.addEventListener("click", function (n) {
        t.onClick && (n.preventDefault(), t.onClick(n, e));
      }), n;
    };

    e.a = function (t, e, r) {
      l = t, r = f(r);
      var i = document.getElementById(l.id);
      null === i && (i = document.createElement("div"), i.id = l.id, document.body.appendChild(i)), r.containerClass.unshift("toasted-container"), i.className !== r.containerClass.join(" ") && (i.className = "", r.containerClass.forEach(function (t) {
        i.classList.add(t);
      }));
      var s = p(e, r);
      e && i.appendChild(s), s.style.opacity = 0, o.a.animateIn(s);
      var c = r.duration,
          u = void 0;
      return null !== c && (u = setInterval(function () {
        null === s.parentNode && window.clearInterval(u), s.classList.contains("panning") || (c -= 20), c <= 0 && (o.a.animateOut(s, function () {
          "function" == typeof r.onComplete && r.onComplete(), s.parentNode && l.remove(s);
        }), window.clearInterval(u));
      }, 20)), n.i(a.a)(s, l);
    };
  }, function (t, e, n) {
    e = t.exports = n(10)(), e.push([t.i, ".toasted{padding:0 20px}.toasted.rounded{border-radius:24px}.toasted .primary,.toasted.toasted-primary{border-radius:2px;min-height:38px;line-height:1.1em;background-color:#353535;padding:0 20px;font-size:15px;font-weight:300;color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.toasted .primary.success,.toasted.toasted-primary.success{background:#4caf50}.toasted .primary.error,.toasted.toasted-primary.error{background:#f44336}.toasted .primary.info,.toasted.toasted-primary.info{background:#3f51b5}.toasted .primary .action,.toasted.toasted-primary .action{color:#a1c2fa}.toasted.bubble{border-radius:30px;min-height:38px;line-height:1.1em;background-color:#ff7043;padding:0 20px;font-size:15px;font-weight:300;color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.toasted.bubble.success{background:#4caf50}.toasted.bubble.error{background:#f44336}.toasted.bubble.info{background:#3f51b5}.toasted.bubble .action{color:#8e2b0c}.toasted.outline{border-radius:30px;min-height:38px;line-height:1.1em;background-color:#fff;border:1px solid #676767;padding:0 20px;font-size:15px;color:#676767;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);font-weight:700}.toasted.outline.success{color:#4caf50;border-color:#4caf50}.toasted.outline.error{color:#f44336;border-color:#f44336}.toasted.outline.info{color:#3f51b5;border-color:#3f51b5}.toasted.outline .action{color:#607d8b}.toasted-container{position:fixed;z-index:10000}.toasted-container,.toasted-container.full-width{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.toasted-container.full-width{max-width:86%;width:100%}.toasted-container.full-width.fit-to-screen{min-width:100%}.toasted-container.full-width.fit-to-screen .toasted:first-child{margin-top:0}.toasted-container.full-width.fit-to-screen.top-right{top:0;right:0}.toasted-container.full-width.fit-to-screen.top-left{top:0;left:0}.toasted-container.full-width.fit-to-screen.top-center{top:0;left:0;-webkit-transform:translateX(0);transform:translateX(0)}.toasted-container.full-width.fit-to-screen.bottom-right{right:0;bottom:0}.toasted-container.full-width.fit-to-screen.bottom-left{left:0;bottom:0}.toasted-container.full-width.fit-to-screen.bottom-center{left:0;bottom:0;-webkit-transform:translateX(0);transform:translateX(0)}.toasted-container.top-right{top:10%;right:7%}.toasted-container.top-left{top:10%;left:7%}.toasted-container.top-center{top:10%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.toasted-container.bottom-right{right:5%;bottom:7%}.toasted-container.bottom-left{left:5%;bottom:7%}.toasted-container.bottom-center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:7%}.toasted-container.bottom-left .toasted,.toasted-container.top-left .toasted{float:left}.toasted-container.bottom-right .toasted,.toasted-container.top-right .toasted{float:right}.toasted-container .toasted{top:35px;width:auto;clear:both;margin-top:10px;position:relative;max-width:100%;height:auto;word-break:normal;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;box-sizing:inherit}.toasted-container .toasted .fa,.toasted-container .toasted .fab,.toasted-container .toasted .far,.toasted-container .toasted .fas,.toasted-container .toasted .material-icons,.toasted-container .toasted .mdi{margin-right:.5rem;margin-left:-.4rem}.toasted-container .toasted .fa.after,.toasted-container .toasted .fab.after,.toasted-container .toasted .far.after,.toasted-container .toasted .fas.after,.toasted-container .toasted .material-icons.after,.toasted-container .toasted .mdi.after{margin-left:.5rem;margin-right:-.4rem}.toasted-container .toasted .action{text-decoration:none;font-size:.8rem;padding:8px;margin:5px -7px 5px 7px;border-radius:3px;text-transform:uppercase;letter-spacing:.03em;font-weight:600;cursor:pointer}.toasted-container .toasted .action.icon{padding:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toasted-container .toasted .action.icon .fa,.toasted-container .toasted .action.icon .material-icons,.toasted-container .toasted .action.icon .mdi{margin-right:0;margin-left:4px}.toasted-container .toasted .action.icon:hover{text-decoration:none}.toasted-container .toasted .action:hover{text-decoration:underline}@media only screen and (max-width:600px){#toasted-container{min-width:100%}#toasted-container .toasted:first-child{margin-top:0}#toasted-container.top-right{top:0;right:0}#toasted-container.top-left{top:0;left:0}#toasted-container.top-center{top:0;left:0;-webkit-transform:translateX(0);transform:translateX(0)}#toasted-container.bottom-right{right:0;bottom:0}#toasted-container.bottom-left{left:0;bottom:0}#toasted-container.bottom-center{left:0;bottom:0;-webkit-transform:translateX(0);transform:translateX(0)}#toasted-container.bottom-center,#toasted-container.top-center{-ms-flex-align:stretch!important;align-items:stretch!important}#toasted-container.bottom-left .toasted,#toasted-container.bottom-right .toasted,#toasted-container.top-left .toasted,#toasted-container.top-right .toasted{float:none}#toasted-container .toasted{border-radius:0}}", ""]);
  }, function (t, e) {
    t.exports = function () {
      var t = [];
      return t.toString = function () {
        for (var t = [], e = 0; e < this.length; e++) {
          var n = this[e];
          n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
        }

        return t.join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0);
        }

        for (i = 0; i < e.length; i++) {
          var a = e[i];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
        }
      }, t;
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");

      for (var n = Object(t), r = 1; r < arguments.length; r++) {
        var i = arguments[r];
        if (void 0 !== i && null !== i) for (var o = Object.keys(Object(i)), a = 0, s = o.length; a < s; a++) {
          var c = o[a],
              u = Object.getOwnPropertyDescriptor(i, c);
          void 0 !== u && u.enumerable && (n[c] = i[c]);
        }
      }

      return n;
    }

    function i() {
      Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: r
      });
    }

    t.exports = {
      assign: r,
      polyfill: i
    };
  }, function (t, e, n) {
    var r;
    !function (i, o, a, s) {
      "use strict";

      function c(t, e, n) {
        return setTimeout(d(t, n), e);
      }

      function u(t, e, n) {
        return !!Array.isArray(t) && (l(t, n[e], n), !0);
      }

      function l(t, e, n) {
        var r;
        if (t) if (t.forEach) t.forEach(e, n);else if (t.length !== s) for (r = 0; r < t.length;) {
          e.call(n, t[r], r, t), r++;
        } else for (r in t) {
          t.hasOwnProperty(r) && e.call(n, t[r], r, t);
        }
      }

      function f(t, e, n) {
        var r = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
        return function () {
          var e = new Error("get-stack-trace"),
              n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              o = i.console && (i.console.warn || i.console.log);
          return o && o.call(i.console, r, n), t.apply(this, arguments);
        };
      }

      function p(t, e, n) {
        var r,
            i = e.prototype;
        r = t.prototype = Object.create(i), r.constructor = t, r._super = i, n && ht(r, n);
      }

      function d(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }

      function h(t, e) {
        return _typeof(t) == gt ? t.apply(e ? e[0] || s : s, e) : t;
      }

      function m(t, e) {
        return t === s ? e : t;
      }

      function v(t, e, n) {
        l(x(e), function (e) {
          t.addEventListener(e, n, !1);
        });
      }

      function g(t, e, n) {
        l(x(e), function (e) {
          t.removeEventListener(e, n, !1);
        });
      }

      function y(t, e) {
        for (; t;) {
          if (t == e) return !0;
          t = t.parentNode;
        }

        return !1;
      }

      function b(t, e) {
        return t.indexOf(e) > -1;
      }

      function x(t) {
        return t.trim().split(/\s+/g);
      }

      function T(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);

        for (var r = 0; r < t.length;) {
          if (n && t[r][n] == e || !n && t[r] === e) return r;
          r++;
        }

        return -1;
      }

      function w(t) {
        return Array.prototype.slice.call(t, 0);
      }

      function E(t, e, n) {
        for (var r = [], i = [], o = 0; o < t.length;) {
          var a = e ? t[o][e] : t[o];
          T(i, a) < 0 && r.push(t[o]), i[o] = a, o++;
        }

        return n && (r = e ? r.sort(function (t, n) {
          return t[e] > n[e];
        }) : r.sort()), r;
      }

      function C(t, e) {
        for (var n, r, i = e[0].toUpperCase() + e.slice(1), o = 0; o < mt.length;) {
          if (n = mt[o], (r = n ? n + i : e) in t) return r;
          o++;
        }

        return s;
      }

      function S() {
        return Et++;
      }

      function O(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || i;
      }

      function A(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
          h(t.options.enable, [t]) && n.handler(e);
        }, this.init();
      }

      function I(t) {
        var e = t.options.inputClass;
        return new (e || (Ot ? q : At ? W : St ? B : Y))(t, M);
      }

      function M(t, e, n) {
        var r = n.pointers.length,
            i = n.changedPointers.length,
            o = e & Mt && r - i == 0,
            a = e & (kt | Lt) && r - i == 0;
        n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, P(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n;
      }

      function P(t, e) {
        var n = t.session,
            r = e.pointers,
            i = r.length;
        n.firstInput || (n.firstInput = j(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = j(e) : 1 === i && (n.firstMultiple = !1);
        var o = n.firstInput,
            a = n.firstMultiple,
            s = a ? a.center : o.center,
            c = e.center = N(r);
        e.timeStamp = xt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = R(s, c), e.distance = D(s, c), k(n, e), e.offsetDirection = X(e.deltaX, e.deltaY);

        var u = _(e.deltaTime, e.deltaX, e.deltaY);

        e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = bt(u.x) > bt(u.y) ? u.x : u.y, e.scale = a ? z(a.pointers, r) : 1, e.rotation = a ? F(a.pointers, r) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, L(n, e);
        var l = t.element;
        y(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l;
      }

      function k(t, e) {
        var n = e.center,
            r = t.offsetDelta || {},
            i = t.prevDelta || {},
            o = t.prevInput || {};
        e.eventType !== Mt && o.eventType !== kt || (i = t.prevDelta = {
          x: o.deltaX || 0,
          y: o.deltaY || 0
        }, r = t.offsetDelta = {
          x: n.x,
          y: n.y
        }), e.deltaX = i.x + (n.x - r.x), e.deltaY = i.y + (n.y - r.y);
      }

      function L(t, e) {
        var n,
            r,
            i,
            o,
            a = t.lastInterval || e,
            c = e.timeStamp - a.timeStamp;

        if (e.eventType != Lt && (c > It || a.velocity === s)) {
          var u = e.deltaX - a.deltaX,
              l = e.deltaY - a.deltaY,
              f = _(c, u, l);

          r = f.x, i = f.y, n = bt(f.x) > bt(f.y) ? f.x : f.y, o = X(u, l), t.lastInterval = e;
        } else n = a.velocity, r = a.velocityX, i = a.velocityY, o = a.direction;

        e.velocity = n, e.velocityX = r, e.velocityY = i, e.direction = o;
      }

      function j(t) {
        for (var e = [], n = 0; n < t.pointers.length;) {
          e[n] = {
            clientX: yt(t.pointers[n].clientX),
            clientY: yt(t.pointers[n].clientY)
          }, n++;
        }

        return {
          timeStamp: xt(),
          pointers: e,
          center: N(e),
          deltaX: t.deltaX,
          deltaY: t.deltaY
        };
      }

      function N(t) {
        var e = t.length;
        if (1 === e) return {
          x: yt(t[0].clientX),
          y: yt(t[0].clientY)
        };

        for (var n = 0, r = 0, i = 0; i < e;) {
          n += t[i].clientX, r += t[i].clientY, i++;
        }

        return {
          x: yt(n / e),
          y: yt(r / e)
        };
      }

      function _(t, e, n) {
        return {
          x: e / t || 0,
          y: n / t || 0
        };
      }

      function X(t, e) {
        return t === e ? jt : bt(t) >= bt(e) ? t < 0 ? Nt : _t : e < 0 ? Xt : Dt;
      }

      function D(t, e, n) {
        n || (n = Yt);
        var r = e[n[0]] - t[n[0]],
            i = e[n[1]] - t[n[1]];
        return Math.sqrt(r * r + i * i);
      }

      function R(t, e, n) {
        n || (n = Yt);
        var r = e[n[0]] - t[n[0]],
            i = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(i, r) / Math.PI;
      }

      function F(t, e) {
        return R(e[1], e[0], qt) + R(t[1], t[0], qt);
      }

      function z(t, e) {
        return D(e[0], e[1], qt) / D(t[0], t[1], qt);
      }

      function Y() {
        this.evEl = Vt, this.evWin = Wt, this.pressed = !1, A.apply(this, arguments);
      }

      function q() {
        this.evEl = $t, this.evWin = Gt, A.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }

      function H() {
        this.evTarget = Qt, this.evWin = Jt, this.started = !1, A.apply(this, arguments);
      }

      function V(t, e) {
        var n = w(t.touches),
            r = w(t.changedTouches);
        return e & (kt | Lt) && (n = E(n.concat(r), "identifier", !0)), [n, r];
      }

      function W() {
        this.evTarget = te, this.targetIds = {}, A.apply(this, arguments);
      }

      function U(t, e) {
        var n = w(t.touches),
            r = this.targetIds;
        if (e & (Mt | Pt) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
        var i,
            o,
            a = w(t.changedTouches),
            s = [],
            c = this.target;
        if (o = n.filter(function (t) {
          return y(t.target, c);
        }), e === Mt) for (i = 0; i < o.length;) {
          r[o[i].identifier] = !0, i++;
        }

        for (i = 0; i < a.length;) {
          r[a[i].identifier] && s.push(a[i]), e & (kt | Lt) && delete r[a[i].identifier], i++;
        }

        return s.length ? [E(o.concat(s), "identifier", !0), s] : void 0;
      }

      function B() {
        A.apply(this, arguments);
        var t = d(this.handler, this);
        this.touch = new W(this.manager, t), this.mouse = new Y(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
      }

      function $(t, e) {
        t & Mt ? (this.primaryTouch = e.changedPointers[0].identifier, G.call(this, e)) : t & (kt | Lt) && G.call(this, e);
      }

      function G(t) {
        var e = t.changedPointers[0];

        if (e.identifier === this.primaryTouch) {
          var n = {
            x: e.clientX,
            y: e.clientY
          };
          this.lastTouches.push(n);

          var r = this.lastTouches,
              i = function i() {
            var t = r.indexOf(n);
            t > -1 && r.splice(t, 1);
          };

          setTimeout(i, ee);
        }
      }

      function Z(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
          var i = this.lastTouches[r],
              o = Math.abs(e - i.x),
              a = Math.abs(n - i.y);
          if (o <= ne && a <= ne) return !0;
        }

        return !1;
      }

      function Q(t, e) {
        this.manager = t, this.set(e);
      }

      function J(t) {
        if (b(t, se)) return se;
        var e = b(t, ce),
            n = b(t, ue);
        return e && n ? se : e || n ? e ? ce : ue : b(t, ae) ? ae : oe;
      }

      function K(t) {
        this.options = ht({}, this.defaults, t || {}), this.id = S(), this.manager = null, this.options.enable = m(this.options.enable, !0), this.state = fe, this.simultaneous = {}, this.requireFail = [];
      }

      function tt(t) {
        return t & ve ? "cancel" : t & he ? "end" : t & de ? "move" : t & pe ? "start" : "";
      }

      function et(t) {
        return t == Dt ? "down" : t == Xt ? "up" : t == Nt ? "left" : t == _t ? "right" : "";
      }

      function nt(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t;
      }

      function rt() {
        K.apply(this, arguments);
      }

      function it() {
        rt.apply(this, arguments), this.pX = null, this.pY = null;
      }

      function ot() {
        rt.apply(this, arguments);
      }

      function at() {
        K.apply(this, arguments), this._timer = null, this._input = null;
      }

      function st() {
        rt.apply(this, arguments);
      }

      function ct() {
        rt.apply(this, arguments);
      }

      function ut() {
        K.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }

      function lt(t, e) {
        return e = e || {}, e.recognizers = m(e.recognizers, lt.defaults.preset), new ft(t, e);
      }

      function ft(t, e) {
        this.options = ht({}, lt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = I(this), this.touchAction = new Q(this, this.options.touchAction), pt(this, !0), l(this.options.recognizers, function (t) {
          var e = this.add(new t[0](t[1]));
          t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
        }, this);
      }

      function pt(t, e) {
        var n = t.element;

        if (n.style) {
          var r;
          l(t.options.cssProps, function (i, o) {
            r = C(n.style, o), e ? (t.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = t.oldCssProps[r] || "";
          }), e || (t.oldCssProps = {});
        }
      }

      function dt(t, e) {
        var n = o.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n);
      }

      var ht,
          mt = ["", "webkit", "Moz", "MS", "ms", "o"],
          vt = o.createElement("div"),
          gt = "function",
          yt = Math.round,
          bt = Math.abs,
          xt = Date.now;
      ht = "function" != typeof Object.assign ? function (t) {
        if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");

        for (var e = Object(t), n = 1; n < arguments.length; n++) {
          var r = arguments[n];
          if (r !== s && null !== r) for (var i in r) {
            r.hasOwnProperty(i) && (e[i] = r[i]);
          }
        }

        return e;
      } : Object.assign;
      var Tt = f(function (t, e, n) {
        for (var r = Object.keys(e), i = 0; i < r.length;) {
          (!n || n && t[r[i]] === s) && (t[r[i]] = e[r[i]]), i++;
        }

        return t;
      }, "extend", "Use `assign`."),
          wt = f(function (t, e) {
        return Tt(t, e, !0);
      }, "merge", "Use `assign`."),
          Et = 1,
          Ct = /mobile|tablet|ip(ad|hone|od)|android/i,
          St = "ontouchstart" in i,
          Ot = C(i, "PointerEvent") !== s,
          At = St && Ct.test(navigator.userAgent),
          It = 25,
          Mt = 1,
          Pt = 2,
          kt = 4,
          Lt = 8,
          jt = 1,
          Nt = 2,
          _t = 4,
          Xt = 8,
          Dt = 16,
          Rt = Nt | _t,
          Ft = Xt | Dt,
          zt = Rt | Ft,
          Yt = ["x", "y"],
          qt = ["clientX", "clientY"];
      A.prototype = {
        handler: function handler() {},
        init: function init() {
          this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(O(this.element), this.evWin, this.domHandler);
        },
        destroy: function destroy() {
          this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(O(this.element), this.evWin, this.domHandler);
        }
      };
      var Ht = {
        mousedown: Mt,
        mousemove: Pt,
        mouseup: kt
      },
          Vt = "mousedown",
          Wt = "mousemove mouseup";
      p(Y, A, {
        handler: function handler(t) {
          var e = Ht[t.type];
          e & Mt && 0 === t.button && (this.pressed = !0), e & Pt && 1 !== t.which && (e = kt), this.pressed && (e & kt && (this.pressed = !1), this.callback(this.manager, e, {
            pointers: [t],
            changedPointers: [t],
            pointerType: "mouse",
            srcEvent: t
          }));
        }
      });
      var Ut = {
        pointerdown: Mt,
        pointermove: Pt,
        pointerup: kt,
        pointercancel: Lt,
        pointerout: Lt
      },
          Bt = {
        2: "touch",
        3: "pen",
        4: "mouse",
        5: "kinect"
      },
          $t = "pointerdown",
          Gt = "pointermove pointerup pointercancel";
      i.MSPointerEvent && !i.PointerEvent && ($t = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel"), p(q, A, {
        handler: function handler(t) {
          var e = this.store,
              n = !1,
              r = t.type.toLowerCase().replace("ms", ""),
              i = Ut[r],
              o = Bt[t.pointerType] || t.pointerType,
              a = "touch" == o,
              s = T(e, t.pointerId, "pointerId");
          i & Mt && (0 === t.button || a) ? s < 0 && (e.push(t), s = e.length - 1) : i & (kt | Lt) && (n = !0), s < 0 || (e[s] = t, this.callback(this.manager, i, {
            pointers: e,
            changedPointers: [t],
            pointerType: o,
            srcEvent: t
          }), n && e.splice(s, 1));
        }
      });
      var Zt = {
        touchstart: Mt,
        touchmove: Pt,
        touchend: kt,
        touchcancel: Lt
      },
          Qt = "touchstart",
          Jt = "touchstart touchmove touchend touchcancel";
      p(H, A, {
        handler: function handler(t) {
          var e = Zt[t.type];

          if (e === Mt && (this.started = !0), this.started) {
            var n = V.call(this, t, e);
            e & (kt | Lt) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: "touch",
              srcEvent: t
            });
          }
        }
      });
      var Kt = {
        touchstart: Mt,
        touchmove: Pt,
        touchend: kt,
        touchcancel: Lt
      },
          te = "touchstart touchmove touchend touchcancel";
      p(W, A, {
        handler: function handler(t) {
          var e = Kt[t.type],
              n = U.call(this, t, e);
          n && this.callback(this.manager, e, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: "touch",
            srcEvent: t
          });
        }
      });
      var ee = 2500,
          ne = 25;
      p(B, A, {
        handler: function handler(t, e, n) {
          var r = "touch" == n.pointerType,
              i = "mouse" == n.pointerType;

          if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if (r) $.call(this, e, n);else if (i && Z.call(this, n)) return;
            this.callback(t, e, n);
          }
        },
        destroy: function destroy() {
          this.touch.destroy(), this.mouse.destroy();
        }
      });

      var re = C(vt.style, "touchAction"),
          ie = re !== s,
          oe = "auto",
          ae = "manipulation",
          se = "none",
          ce = "pan-x",
          ue = "pan-y",
          le = function () {
        if (!ie) return !1;
        var t = {},
            e = i.CSS && i.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
          t[n] = !e || i.CSS.supports("touch-action", n);
        }), t;
      }();

      Q.prototype = {
        set: function set(t) {
          "compute" == t && (t = this.compute()), ie && this.manager.element.style && le[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim();
        },
        update: function update() {
          this.set(this.manager.options.touchAction);
        },
        compute: function compute() {
          var t = [];
          return l(this.manager.recognizers, function (e) {
            h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
          }), J(t.join(" "));
        },
        preventDefaults: function preventDefaults(t) {
          var e = t.srcEvent,
              n = t.offsetDirection;
          if (this.manager.session.prevented) return void e.preventDefault();
          var r = this.actions,
              i = b(r, se) && !le[se],
              o = b(r, ue) && !le[ue],
              a = b(r, ce) && !le[ce];

          if (i) {
            var s = 1 === t.pointers.length,
                c = t.distance < 2,
                u = t.deltaTime < 250;
            if (s && c && u) return;
          }

          return a && o ? void 0 : i || o && n & Rt || a && n & Ft ? this.preventSrc(e) : void 0;
        },
        preventSrc: function preventSrc(t) {
          this.manager.session.prevented = !0, t.preventDefault();
        }
      };
      var fe = 1,
          pe = 2,
          de = 4,
          he = 8,
          me = he,
          ve = 16;
      K.prototype = {
        defaults: {},
        set: function set(t) {
          return ht(this.options, t), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function recognizeWith(t) {
          if (u(t, "recognizeWith", this)) return this;
          var e = this.simultaneous;
          return t = nt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
        },
        dropRecognizeWith: function dropRecognizeWith(t) {
          return u(t, "dropRecognizeWith", this) ? this : (t = nt(t, this), delete this.simultaneous[t.id], this);
        },
        requireFailure: function requireFailure(t) {
          if (u(t, "requireFailure", this)) return this;
          var e = this.requireFail;
          return t = nt(t, this), -1 === T(e, t) && (e.push(t), t.requireFailure(this)), this;
        },
        dropRequireFailure: function dropRequireFailure(t) {
          if (u(t, "dropRequireFailure", this)) return this;
          t = nt(t, this);
          var e = T(this.requireFail, t);
          return e > -1 && this.requireFail.splice(e, 1), this;
        },
        hasRequireFailures: function hasRequireFailures() {
          return this.requireFail.length > 0;
        },
        canRecognizeWith: function canRecognizeWith(t) {
          return !!this.simultaneous[t.id];
        },
        emit: function emit(t) {
          function e(e) {
            n.manager.emit(e, t);
          }

          var n = this,
              r = this.state;
          r < he && e(n.options.event + tt(r)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), r >= he && e(n.options.event + tt(r));
        },
        tryEmit: function tryEmit(t) {
          if (this.canEmit()) return this.emit(t);
          this.state = 32;
        },
        canEmit: function canEmit() {
          for (var t = 0; t < this.requireFail.length;) {
            if (!(this.requireFail[t].state & (32 | fe))) return !1;
            t++;
          }

          return !0;
        },
        recognize: function recognize(t) {
          var e = ht({}, t);
          if (!h(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);
          this.state & (me | ve | 32) && (this.state = fe), this.state = this.process(e), this.state & (pe | de | he | ve) && this.tryEmit(e);
        },
        process: function process(t) {},
        getTouchAction: function getTouchAction() {},
        reset: function reset() {}
      }, p(rt, K, {
        defaults: {
          pointers: 1
        },
        attrTest: function attrTest(t) {
          var e = this.options.pointers;
          return 0 === e || t.pointers.length === e;
        },
        process: function process(t) {
          var e = this.state,
              n = t.eventType,
              r = e & (pe | de),
              i = this.attrTest(t);
          return r && (n & Lt || !i) ? e | ve : r || i ? n & kt ? e | he : e & pe ? e | de : pe : 32;
        }
      }), p(it, rt, {
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: zt
        },
        getTouchAction: function getTouchAction() {
          var t = this.options.direction,
              e = [];
          return t & Rt && e.push(ue), t & Ft && e.push(ce), e;
        },
        directionTest: function directionTest(t) {
          var e = this.options,
              n = !0,
              r = t.distance,
              i = t.direction,
              o = t.deltaX,
              a = t.deltaY;
          return i & e.direction || (e.direction & Rt ? (i = 0 === o ? jt : o < 0 ? Nt : _t, n = o != this.pX, r = Math.abs(t.deltaX)) : (i = 0 === a ? jt : a < 0 ? Xt : Dt, n = a != this.pY, r = Math.abs(t.deltaY))), t.direction = i, n && r > e.threshold && i & e.direction;
        },
        attrTest: function attrTest(t) {
          return rt.prototype.attrTest.call(this, t) && (this.state & pe || !(this.state & pe) && this.directionTest(t));
        },
        emit: function emit(t) {
          this.pX = t.deltaX, this.pY = t.deltaY;
          var e = et(t.direction);
          e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
        }
      }), p(ot, rt, {
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [se];
        },
        attrTest: function attrTest(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & pe);
        },
        emit: function emit(t) {
          if (1 !== t.scale) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e;
          }

          this._super.emit.call(this, t);
        }
      }), p(at, K, {
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          threshold: 9
        },
        getTouchAction: function getTouchAction() {
          return [oe];
        },
        process: function process(t) {
          var e = this.options,
              n = t.pointers.length === e.pointers,
              r = t.distance < e.threshold,
              i = t.deltaTime > e.time;
          if (this._input = t, !r || !n || t.eventType & (kt | Lt) && !i) this.reset();else if (t.eventType & Mt) this.reset(), this._timer = c(function () {
            this.state = me, this.tryEmit();
          }, e.time, this);else if (t.eventType & kt) return me;
          return 32;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit(t) {
          this.state === me && (t && t.eventType & kt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = xt(), this.manager.emit(this.options.event, this._input)));
        }
      }), p(st, rt, {
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [se];
        },
        attrTest: function attrTest(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & pe);
        }
      }), p(ct, rt, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: .3,
          direction: Rt | Ft,
          pointers: 1
        },
        getTouchAction: function getTouchAction() {
          return it.prototype.getTouchAction.call(this);
        },
        attrTest: function attrTest(t) {
          var e,
              n = this.options.direction;
          return n & (Rt | Ft) ? e = t.overallVelocity : n & Rt ? e = t.overallVelocityX : n & Ft && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && bt(e) > this.options.velocity && t.eventType & kt;
        },
        emit: function emit(t) {
          var e = et(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        }
      }), p(ut, K, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10
        },
        getTouchAction: function getTouchAction() {
          return [ae];
        },
        process: function process(t) {
          var e = this.options,
              n = t.pointers.length === e.pointers,
              r = t.distance < e.threshold,
              i = t.deltaTime < e.time;
          if (this.reset(), t.eventType & Mt && 0 === this.count) return this.failTimeout();

          if (r && i && n) {
            if (t.eventType != kt) return this.failTimeout();
            var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                a = !this.pCenter || D(this.pCenter, t.center) < e.posThreshold;
            this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
            if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = c(function () {
              this.state = me, this.tryEmit();
            }, e.interval, this), pe) : me;
          }

          return 32;
        },
        failTimeout: function failTimeout() {
          return this._timer = c(function () {
            this.state = 32;
          }, this.options.interval, this), 32;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit() {
          this.state == me && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
      }), lt.VERSION = "2.0.7", lt.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[st, {
          enable: !1
        }], [ot, {
          enable: !1
        }, ["rotate"]], [ct, {
          direction: Rt
        }], [it, {
          direction: Rt
        }, ["swipe"]], [ut], [ut, {
          event: "doubletap",
          taps: 2
        }, ["tap"]], [at]],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      };
      ft.prototype = {
        set: function set(t) {
          return ht(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
        },
        stop: function stop(t) {
          this.session.stopped = t ? 2 : 1;
        },
        recognize: function recognize(t) {
          var e = this.session;

          if (!e.stopped) {
            this.touchAction.preventDefaults(t);
            var n,
                r = this.recognizers,
                i = e.curRecognizer;
            (!i || i && i.state & me) && (i = e.curRecognizer = null);

            for (var o = 0; o < r.length;) {
              n = r[o], 2 === e.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && n.state & (pe | de | he) && (i = e.curRecognizer = n), o++;
            }
          }
        },
        get: function get(t) {
          if (t instanceof K) return t;

          for (var e = this.recognizers, n = 0; n < e.length; n++) {
            if (e[n].options.event == t) return e[n];
          }

          return null;
        },
        add: function add(t) {
          if (u(t, "add", this)) return this;
          var e = this.get(t.options.event);
          return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
        },
        remove: function remove(t) {
          if (u(t, "remove", this)) return this;

          if (t = this.get(t)) {
            var e = this.recognizers,
                n = T(e, t);
            -1 !== n && (e.splice(n, 1), this.touchAction.update());
          }

          return this;
        },
        on: function on(t, e) {
          if (t !== s && e !== s) {
            var n = this.handlers;
            return l(x(t), function (t) {
              n[t] = n[t] || [], n[t].push(e);
            }), this;
          }
        },
        off: function off(t, e) {
          if (t !== s) {
            var n = this.handlers;
            return l(x(t), function (t) {
              e ? n[t] && n[t].splice(T(n[t], e), 1) : delete n[t];
            }), this;
          }
        },
        emit: function emit(t, e) {
          this.options.domEvents && dt(t, e);
          var n = this.handlers[t] && this.handlers[t].slice();

          if (n && n.length) {
            e.type = t, e.preventDefault = function () {
              e.srcEvent.preventDefault();
            };

            for (var r = 0; r < n.length;) {
              n[r](e), r++;
            }
          }
        },
        destroy: function destroy() {
          this.element && pt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        }
      }, ht(lt, {
        INPUT_START: Mt,
        INPUT_MOVE: Pt,
        INPUT_END: kt,
        INPUT_CANCEL: Lt,
        STATE_POSSIBLE: fe,
        STATE_BEGAN: pe,
        STATE_CHANGED: de,
        STATE_ENDED: he,
        STATE_RECOGNIZED: me,
        STATE_CANCELLED: ve,
        STATE_FAILED: 32,
        DIRECTION_NONE: jt,
        DIRECTION_LEFT: Nt,
        DIRECTION_RIGHT: _t,
        DIRECTION_UP: Xt,
        DIRECTION_DOWN: Dt,
        DIRECTION_HORIZONTAL: Rt,
        DIRECTION_VERTICAL: Ft,
        DIRECTION_ALL: zt,
        Manager: ft,
        Input: A,
        TouchAction: Q,
        TouchInput: W,
        MouseInput: Y,
        PointerEventInput: q,
        TouchMouseInput: B,
        SingleTouchInput: H,
        Recognizer: K,
        AttrRecognizer: rt,
        Tap: ut,
        Pan: it,
        Swipe: ct,
        Pinch: ot,
        Rotate: st,
        Press: at,
        on: v,
        off: g,
        each: l,
        merge: wt,
        extend: Tt,
        assign: ht,
        inherit: p,
        bindFn: d,
        prefixed: C
      }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = lt, (r = function () {
        return lt;
      }.call(e, n, e, t)) !== s && (t.exports = r);
    }(window, document);
  }, function (t, e) {
    t.exports = function (t, e, n) {
      for (var r = (2 << Math.log(e.length - 1) / Math.LN2) - 1, i = Math.ceil(1.6 * r * n / e.length), o = "";;) {
        for (var a = t(i), s = 0; s < i; s++) {
          var c = a[s] & r;
          if (e[c] && (o += e[c], o.length === n)) return o;
        }
      }
    };
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      var e = "",
          n = Math.floor(.001 * (Date.now() - s));
      return n === o ? i++ : (i = 0, o = n), e += a(c), e += a(t), i > 0 && (e += a(i)), e += a(n);
    }

    var i,
        o,
        a = n(15),
        s = (n(0), 1459707606518),
        c = 6;
    t.exports = r;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      for (var e, n = 0, r = ""; !e;) {
        r += a(o, i.get(), 1), e = t < Math.pow(16, n + 1), n++;
      }

      return r;
    }

    var i = n(0),
        o = n(18),
        a = n(13);
    t.exports = r;
  }, function (t, e, n) {
    "use strict";

    function r(e) {
      return s.seed(e), t.exports;
    }

    function i(e) {
      return l = e, t.exports;
    }

    function o(t) {
      return void 0 !== t && s.characters(t), s.shuffled();
    }

    function a() {
      return c(l);
    }

    var s = n(0),
        c = n(14),
        u = n(17),
        l = n(20) || 0;
    t.exports = a, t.exports.generate = a, t.exports.seed = r, t.exports.worker = i, t.exports.characters = o, t.exports.isValid = u;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return !(!t || "string" != typeof t || t.length < 6) && !new RegExp("[^" + i.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(t);
    }

    var i = n(0);
    t.exports = r;
  }, function (t, e, n) {
    "use strict";

    var r,
        i = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (window.crypto || window.msCrypto);
    r = i && i.getRandomValues ? function (t) {
      return i.getRandomValues(new Uint8Array(t));
    } : function (t) {
      for (var e = [], n = 0; n < t; n++) {
        e.push(Math.floor(256 * Math.random()));
      }

      return e;
    }, t.exports = r;
  }, function (t, e, n) {
    "use strict";

    function r() {
      return (o = (9301 * o + 49297) % 233280) / 233280;
    }

    function i(t) {
      o = t;
    }

    var o = 1;
    t.exports = {
      nextValue: r,
      seed: i
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = 0;
  }, function (t, e) {
    t.exports = function (t, e, n, r) {
      var i,
          o = t = t || {},
          a = _typeof(t.default);

      "object" !== a && "function" !== a || (i = t, o = t.default);
      var s = "function" == typeof o ? o.options : o;

      if (e && (s.render = e.render, s.staticRenderFns = e.staticRenderFns), n && (s._scopeId = n), r) {
        var c = Object.create(s.computed || null);
        Object.keys(r).forEach(function (t) {
          var e = r[t];

          c[t] = function () {
            return e;
          };
        }), s.computed = c;
      }

      return {
        esModule: i,
        exports: o,
        options: s
      };
    };
  }, function (t, e, n) {
    var r = n(9);
    "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    n(23)("02af2e15", r, !0, {});
  }, function (t, e, n) {
    function r(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e],
            r = l[n.id];

        if (r) {
          r.refs++;

          for (var i = 0; i < r.parts.length; i++) {
            r.parts[i](n.parts[i]);
          }

          for (; i < n.parts.length; i++) {
            r.parts.push(o(n.parts[i]));
          }

          r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
        } else {
          for (var a = [], i = 0; i < n.parts.length; i++) {
            a.push(o(n.parts[i]));
          }

          l[n.id] = {
            id: n.id,
            refs: 1,
            parts: a
          };
        }
      }
    }

    function i() {
      var t = document.createElement("style");
      return t.type = "text/css", f.appendChild(t), t;
    }

    function o(t) {
      var e,
          n,
          r = document.querySelector("style[" + g + '~="' + t.id + '"]');

      if (r) {
        if (h) return m;
        r.parentNode.removeChild(r);
      }

      if (y) {
        var o = d++;
        r = p || (p = i()), e = a.bind(null, r, o, !1), n = a.bind(null, r, o, !0);
      } else r = i(), e = s.bind(null, r), n = function n() {
        r.parentNode.removeChild(r);
      };

      return e(t), function (r) {
        if (r) {
          if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
          e(t = r);
        } else n();
      };
    }

    function a(t, e, n, r) {
      var i = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = b(e, i);else {
        var o = document.createTextNode(i),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
      }
    }

    function s(t, e) {
      var n = e.css,
          r = e.media,
          i = e.sourceMap;
      if (r && t.setAttribute("media", r), v.ssrId && t.setAttribute(g, e.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;else {
        for (; t.firstChild;) {
          t.removeChild(t.firstChild);
        }

        t.appendChild(document.createTextNode(n));
      }
    }

    var c = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

    var u = n(24),
        l = {},
        f = c && (document.head || document.getElementsByTagName("head")[0]),
        p = null,
        d = 0,
        h = !1,
        m = function m() {},
        v = null,
        g = "data-vue-ssr-id",
        y = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    t.exports = function (t, e, n, i) {
      h = n, v = i || {};
      var o = u(t, e);
      return r(o), function (e) {
        for (var n = [], i = 0; i < o.length; i++) {
          var a = o[i],
              s = l[a.id];
          s.refs--, n.push(s);
        }

        e ? (o = u(t, e), r(o)) : o = [];

        for (var i = 0; i < n.length; i++) {
          var s = n[i];

          if (0 === s.refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }

            delete l[s.id];
          }
        }
      };
    };

    var b = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n");
      };
    }();
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var o = e[i],
            a = o[0],
            s = o[1],
            c = o[2],
            u = o[3],
            l = {
          id: t + ":" + i,
          css: s,
          media: c,
          sourceMap: u
        };
        r[a] ? r[a].parts.push(l) : n.push(r[a] = {
          id: a,
          parts: [l]
        });
      }

      return n;
    };
  }, function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    t.exports = n;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/vue-turbolinks/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-turbolinks/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function handleVueDestructionOn(turbolinksEvent, vue) {
  document.addEventListener(turbolinksEvent, function teardown() {
    vue.$destroy();
    document.removeEventListener(turbolinksEvent, teardown);
  });
}

function plugin(Vue, options) {
  // Install a global mixin
  Vue.mixin({
    beforeMount: function beforeMount() {
      // If this is the root component, we want to cache the original element contents to replace later
      // We don't care about sub-components, just the root
      if (this == this.$root && this.$el) {
        var destroyEvent = this.$options.turbolinksDestroyEvent || 'turbolinks:visit';
        handleVueDestructionOn(destroyEvent, this);
        this.$originalEl = this.$el.outerHTML;
      }
    },
    destroyed: function destroyed() {
      // We only need to revert the html for the root component
      if (this == this.$root && this.$el) {
        this.$el.outerHTML = this.$originalEl;
      }
    }
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Vue.js v2.6.8
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  _typeof(value) === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function no(a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function identity(_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = '__proto__' in {}; // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set =
  /*@__PURE__*/
  function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function repeat(str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode(text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) {
    args[len] = arguments[len];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res)) {
      // issue #9511
      // reassign to res to avoid catch triggering multiple times when nested calls
      res = res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      });
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function timerFunc() {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function timerFunc() {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function timerFunc() {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function timerFunc() {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function warnReservedPrefix(target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function mark(tag) {
      return perf.mark(tag);
    };

    measure = function measure(name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var isStable = slots ? !!slots.$stable : true;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && Object.keys(normalSlots).length === 0) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function normalized() {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && _typeof(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    return res && res.length === 0 ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function loop(key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);

        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + camelizedKey] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) {
        loop(key);
      }
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function merged(a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (!isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function forceRender(renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.

if (inBrowser && getNow() > document.createEvent('Event').timeStamp) {
  // if the low-res timestamp which is bigger than the event timestamp
  // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
  // and we need to use the hi-res version for event listeners as well.
  getNow = function getNow() {
    return performance.now();
  };
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.8';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps =
/*#__PURE__*/
Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function blocker(e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // #9462 bail for iOS 9 bug: event.timeStamp is 0 after history.pushState
      e.timeStamp === 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecesarry `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function setProp(el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (_typeof(def$$1) === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function isNotTextNode(c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function isVShowDirective(d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function performLeave() {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ __webpack_exports__["default"] = (Vue);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=homes-0fe8b050954d0415a65f.js.map