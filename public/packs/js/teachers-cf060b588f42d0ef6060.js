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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/teachers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/teachers.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/teachers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: /Users/gopikrishna/projects/vuerailsdemo/app/javascript/packs/teachers.js: Duplicate declaration \"Swal\"\n   8 | import VueRouter from 'vue-router'\n   9 | import Swal from 'vue-sweetalert2'\n> 10 | import Swal from 'sweetalert2/dist/sweetalert2.js'\n     |        ^\n  11 | import 'sweetalert2/src/sweetalert2.scss'\n  12 | \n  13 | Vue.use(Swal);\n    at File.buildCodeFrameError (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/core/lib/transformation/file/file.js:261:12)\n    at Scope.checkBlockScopedCollisions (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/scope/index.js:346:22)\n    at Scope.registerBinding (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/scope/index.js:503:16)\n    at Scope.registerDeclaration (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/scope/index.js:451:14)\n    at Object.Declaration (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/scope/index.js:125:12)\n    at NodePath._call (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/path/context.js:88:12)\n    at TraversalContext.visitQueue (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitMultiple (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/context.js:85:17)\n    at TraversalContext.visit (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/context.js:144:19)\n    at Function.traverse.node (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/index.js:94:17)\n    at traverse (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/index.js:76:12)\n    at NodePath.traverse (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/path/index.js:161:24)\n    at Scope.crawl (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/scope/index.js:683:10)\n    at Scope.init (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/scope/index.js:633:32)\n    at NodePath.setScope (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/path/context.js:126:30)\n    at NodePath.setContext (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/traverse/lib/path/context.js:141:8)\n    at new File (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/core/lib/transformation/file/file.js:104:8)\n    at normalizeFile (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/core/lib/transformation/normalize-file.js:141:10)\n    at runSync (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/gopikrishna/projects/vuerailsdemo/node_modules/@babel/core/lib/transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })

/******/ });
//# sourceMappingURL=teachers-cf060b588f42d0ef6060.js.map