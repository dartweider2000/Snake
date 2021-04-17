/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _ts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/main */ \"./src/ts/main.ts\");\n\n\n\n//# sourceURL=webpack://pack/./src/main.js?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Game */ \"./src/ts/modules/Game.ts\");\n\nvar canv = document.querySelector('.canvas'),\n    cx = canv.getContext('2d'),\n    box = document.querySelector('.box');\ncanv.width = box.offsetWidth;\ncanv.height = box.offsetHeight;\nvar game = new _modules_Game__WEBPACK_IMPORTED_MODULE_0__.default();\nconsole.log(game);\n\n//# sourceURL=webpack://pack/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/modules/AbstractClasses/ModeObject.ts":
/*!******************************************************!*\
  !*** ./src/ts/modules/AbstractClasses/ModeObject.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModeObject)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ModeObject = /*#__PURE__*/function () {\n  function ModeObject() {\n    _classCallCheck(this, ModeObject);\n  }\n\n  _createClass(ModeObject, [{\n    key: \"Data\",\n    get: function get() {\n      return this.data;\n    }\n  }, {\n    key: \"View\",\n    get: function get() {\n      return this.view;\n    }\n  }]);\n\n  return ModeObject;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/AbstractClasses/ModeObject.ts?");

/***/ }),

/***/ "./src/ts/modules/AbstractClasses/ViewObject.ts":
/*!******************************************************!*\
  !*** ./src/ts/modules/AbstractClasses/ViewObject.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewObject)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ViewObject = function ViewObject() {\n  _classCallCheck(this, ViewObject);\n\n  this.canv = document.querySelector('.canvas');\n  this.cx = this.canv.getContext('2d');\n};\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/AbstractClasses/ViewObject.ts?");

/***/ }),

/***/ "./src/ts/modules/Game.ts":
/*!********************************!*\
  !*** ./src/ts/modules/Game.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ModeClasses_PlayMode_Play__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModeClasses/PlayMode/Play */ \"./src/ts/modules/ModeClasses/PlayMode/Play.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.mode = new _ModeClasses_PlayMode_Play__WEBPACK_IMPORTED_MODULE_0__.default();\n    this.activeKeys = new Set();\n    this.loop = this.loop.bind(this);\n    document.addEventListener(\"keydown\", function (_ref) {\n      var code = _ref.code;\n      console.log(code);\n    });\n    document.addEventListener(\"keyup\", function (_ref2) {\n      var code = _ref2.code;\n      console.log(code);\n    });\n  }\n\n  _createClass(Game, [{\n    key: \"loop\",\n    value: function loop() {\n      this.mode.Data.update(this.activeKeys);\n      this.mode.View.render(this.mode.Data);\n      requestAnimationFrame(this.loop);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.loop();\n    }\n  }, {\n    key: \"Mode\",\n    set: function set(mode) {\n      this.mode = mode;\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/Game.ts?");

/***/ }),

/***/ "./src/ts/modules/ModeClasses/PlayMode/Play.ts":
/*!*****************************************************!*\
  !*** ./src/ts/modules/ModeClasses/PlayMode/Play.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Play)\n/* harmony export */ });\n/* harmony import */ var _AbstractClasses_ModeObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../AbstractClasses/ModeObject */ \"./src/ts/modules/AbstractClasses/ModeObject.ts\");\n/* harmony import */ var _PlayWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayWorld */ \"./src/ts/modules/ModeClasses/PlayMode/PlayWorld.ts\");\n/* harmony import */ var _PlayView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayView */ \"./src/ts/modules/ModeClasses/PlayMode/PlayView.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar Play = /*#__PURE__*/function (_ModeObject) {\n  _inherits(Play, _ModeObject);\n\n  var _super = _createSuper(Play);\n\n  function Play() {\n    var _this;\n\n    _classCallCheck(this, Play);\n\n    _this = _super.call(this);\n    _this.data = new _PlayWorld__WEBPACK_IMPORTED_MODULE_1__.default();\n    _this.view = new _PlayView__WEBPACK_IMPORTED_MODULE_2__.default();\n    return _this;\n  }\n\n  return Play;\n}(_AbstractClasses_ModeObject__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/ModeClasses/PlayMode/Play.ts?");

/***/ }),

/***/ "./src/ts/modules/ModeClasses/PlayMode/PlayView.ts":
/*!*********************************************************!*\
  !*** ./src/ts/modules/ModeClasses/PlayMode/PlayView.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayView)\n/* harmony export */ });\n/* harmony import */ var _AbstractClasses_ViewObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../AbstractClasses/ViewObject */ \"./src/ts/modules/AbstractClasses/ViewObject.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar PlayView = /*#__PURE__*/function (_ViewObject) {\n  _inherits(PlayView, _ViewObject);\n\n  var _super = _createSuper(PlayView);\n\n  function PlayView() {\n    _classCallCheck(this, PlayView);\n\n    return _super.call(this);\n  }\n\n  _createClass(PlayView, [{\n    key: \"render\",\n    value: function render(data) {}\n  }]);\n\n  return PlayView;\n}(_AbstractClasses_ViewObject__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/ModeClasses/PlayMode/PlayView.ts?");

/***/ }),

/***/ "./src/ts/modules/ModeClasses/PlayMode/PlayWorld.ts":
/*!**********************************************************!*\
  !*** ./src/ts/modules/ModeClasses/PlayMode/PlayWorld.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayWorld)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//import Snake from '../../PlayObjects/Snake'\n//import Level from '../../PlayObjects/Level'\nvar PlayWorld = /*#__PURE__*/function () {\n  //: Snake;\n  //: Level;\n  function PlayWorld() {\n    _classCallCheck(this, PlayWorld);\n  }\n\n  _createClass(PlayWorld, [{\n    key: \"update\",\n    value: function update(activeKeys) {}\n  }, {\n    key: \"Score\",\n    get: function get() {\n      return this.score;\n    },\n    set: function set(score) {\n      this.score = score;\n    }\n  }]);\n\n  return PlayWorld;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/ModeClasses/PlayMode/PlayWorld.ts?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pack/./src/scss/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;