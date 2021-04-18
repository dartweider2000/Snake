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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Game */ \"./src/ts/modules/Game.ts\");\n\nvar game = new _modules_Game__WEBPACK_IMPORTED_MODULE_0__.default();\nconsole.log(game);\ngame.start();\n\n//# sourceURL=webpack://pack/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/modules/AbstractClasses/ModeObject.ts":
/*!******************************************************!*\
  !*** ./src/ts/modules/AbstractClasses/ModeObject.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModeObject)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ModeObject = /*#__PURE__*/function () {\n  function ModeObject() {\n    _classCallCheck(this, ModeObject);\n  }\n\n  _createClass(ModeObject, [{\n    key: \"Data\",\n    get: function get() {\n      return this.data;\n    }\n  }, {\n    key: \"View\",\n    get: function get() {\n      return this.view;\n    }\n  }]);\n\n  return ModeObject;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/AbstractClasses/ModeObject.ts?");

/***/ }),

/***/ "./src/ts/modules/AbstractClasses/PlayObject.ts":
/*!******************************************************!*\
  !*** ./src/ts/modules/AbstractClasses/PlayObject.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayObject)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ \"./src/ts/modules/consts.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PlayObject = /*#__PURE__*/function () {\n  function PlayObject(x, y) {\n    _classCallCheck(this, PlayObject);\n\n    if (x === undefined) return;\n    this.size = _consts__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE;\n    this.x = x * this.Size;\n    this.y = y * this.Size;\n  }\n\n  _createClass(PlayObject, [{\n    key: \"render\",\n    value: function render(cx) {\n      this.renderBehavior.render(cx);\n    }\n  }, {\n    key: \"Left\",\n    get: function get() {\n      return this.x;\n    },\n    set: function set(x) {\n      this.x = x;\n    }\n  }, {\n    key: \"Top\",\n    get: function get() {\n      return this.y;\n    },\n    set: function set(y) {\n      this.y = y;\n    }\n  }, {\n    key: \"Right\",\n    get: function get() {\n      return this.Left + this.Size;\n    }\n  }, {\n    key: \"Bottom\",\n    get: function get() {\n      return this.Top + this.Size;\n    }\n  }, {\n    key: \"Size\",\n    get: function get() {\n      return this.size;\n    }\n  }]);\n\n  return PlayObject;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/AbstractClasses/PlayObject.ts?");

/***/ }),

/***/ "./src/ts/modules/AbstractClasses/ViewObject.ts":
/*!******************************************************!*\
  !*** ./src/ts/modules/AbstractClasses/ViewObject.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewObject)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ViewObject = function ViewObject() {\n  _classCallCheck(this, ViewObject);\n\n  this.canv = document.querySelector('.canvas');\n  this.cx = this.canv.getContext('2d');\n  this.parent = this.canv.parentElement;\n  this.canv.width = this.parent.offsetWidth;\n  this.canv.height = this.parent.offsetHeight;\n};\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/AbstractClasses/ViewObject.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayView)\n/* harmony export */ });\n/* harmony import */ var _AbstractClasses_ViewObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../AbstractClasses/ViewObject */ \"./src/ts/modules/AbstractClasses/ViewObject.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar PlayView = /*#__PURE__*/function (_ViewObject) {\n  _inherits(PlayView, _ViewObject);\n\n  var _super = _createSuper(PlayView);\n\n  function PlayView() {\n    _classCallCheck(this, PlayView);\n\n    return _super.call(this);\n  }\n\n  _createClass(PlayView, [{\n    key: \"render\",\n    value: function render(data) {\n      data.Level.render(this.cx);\n    }\n  }]);\n\n  return PlayView;\n}(_AbstractClasses_ViewObject__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/ModeClasses/PlayMode/PlayView.ts?");

/***/ }),

/***/ "./src/ts/modules/ModeClasses/PlayMode/PlayWorld.ts":
/*!**********************************************************!*\
  !*** ./src/ts/modules/ModeClasses/PlayMode/PlayWorld.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayWorld)\n/* harmony export */ });\n/* harmony import */ var _PlayObjects_Level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../PlayObjects/Level */ \"./src/ts/modules/PlayObjects/Level.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PlayWorld = /*#__PURE__*/function () {\n  //: Snake;\n  function PlayWorld() {\n    _classCallCheck(this, PlayWorld);\n\n    this.level = new _PlayObjects_Level__WEBPACK_IMPORTED_MODULE_0__.default();\n  }\n\n  _createClass(PlayWorld, [{\n    key: \"update\",\n    value: function update(activeKeys) {}\n  }, {\n    key: \"Score\",\n    get: function get() {\n      return this.score;\n    },\n    set: function set(score) {\n      this.score = score;\n    }\n  }, {\n    key: \"Level\",\n    get: function get() {\n      return this.level;\n    } // public get Snake() : Snake{\n    // \treturn this.snake;\n    // }\n\n  }]);\n\n  return PlayWorld;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/ModeClasses/PlayMode/PlayWorld.ts?");

/***/ }),

/***/ "./src/ts/modules/PlayObjects/Food.ts":
/*!********************************************!*\
  !*** ./src/ts/modules/PlayObjects/Food.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Food)\n/* harmony export */ });\n/* harmony import */ var _AbstractClasses_PlayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractClasses/PlayObject */ \"./src/ts/modules/AbstractClasses/PlayObject.ts\");\n/* harmony import */ var _RenderBehaviorClasses_FoodRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderBehaviorClasses/FoodRender */ \"./src/ts/modules/PlayObjects/RenderBehaviorClasses/FoodRender.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Food = /*#__PURE__*/function (_PlayObject) {\n  _inherits(Food, _PlayObject);\n\n  var _super = _createSuper(Food);\n\n  function Food(x, y) {\n    var _this;\n\n    _classCallCheck(this, Food);\n\n    _this = _super.call(this, x, y);\n    _this.score = 10;\n    _this.eaten = false;\n    _this.renderBehavior = new _RenderBehaviorClasses_FoodRender__WEBPACK_IMPORTED_MODULE_1__.default();\n    _this.renderBehavior.render = _this.renderBehavior.render.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Food, [{\n    key: \"Score\",\n    get: function get() {\n      return this.score;\n    }\n  }, {\n    key: \"Eaten\",\n    get: function get() {\n      return this.eaten;\n    }\n  }]);\n\n  return Food;\n}(_AbstractClasses_PlayObject__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/PlayObjects/Food.ts?");

/***/ }),

/***/ "./src/ts/modules/PlayObjects/Grass.ts":
/*!*********************************************!*\
  !*** ./src/ts/modules/PlayObjects/Grass.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Grass)\n/* harmony export */ });\n/* harmony import */ var _AbstractClasses_PlayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractClasses/PlayObject */ \"./src/ts/modules/AbstractClasses/PlayObject.ts\");\n/* harmony import */ var _RenderBehaviorClasses_GrassRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderBehaviorClasses/GrassRender */ \"./src/ts/modules/PlayObjects/RenderBehaviorClasses/GrassRender.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Grass = /*#__PURE__*/function (_PlayObject) {\n  _inherits(Grass, _PlayObject);\n\n  var _super = _createSuper(Grass);\n\n  function Grass(x, y) {\n    var _this;\n\n    _classCallCheck(this, Grass);\n\n    _this = _super.call(this, x, y);\n    _this.renderBehavior = new _RenderBehaviorClasses_GrassRender__WEBPACK_IMPORTED_MODULE_1__.default();\n    _this.renderBehavior.render = _this.renderBehavior.render.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  return Grass;\n}(_AbstractClasses_PlayObject__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/PlayObjects/Grass.ts?");

/***/ }),

/***/ "./src/ts/modules/PlayObjects/Level.ts":
/*!*********************************************!*\
  !*** ./src/ts/modules/PlayObjects/Level.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _RenderBehaviorClasses_LevelRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderBehaviorClasses/LevelRender */ \"./src/ts/modules/PlayObjects/RenderBehaviorClasses/LevelRender.ts\");\n/* harmony import */ var _AbstractClasses_PlayObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractClasses/PlayObject */ \"./src/ts/modules/AbstractClasses/PlayObject.ts\");\n/* harmony import */ var _Grass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grass */ \"./src/ts/modules/PlayObjects/Grass.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Food */ \"./src/ts/modules/PlayObjects/Food.ts\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consts */ \"./src/ts/modules/consts.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Level = /*#__PURE__*/function (_PlayObject) {\n  _inherits(Level, _PlayObject);\n\n  var _super = _createSuper(Level);\n\n  function Level() {\n    var _this;\n\n    _classCallCheck(this, Level);\n\n    _this = _super.call(this);\n    _this.width = _consts__WEBPACK_IMPORTED_MODULE_4__.LevelSize.Width;\n    _this.height = _consts__WEBPACK_IMPORTED_MODULE_4__.LevelSize.Height;\n    _this.map = [];\n    _this.renderBehavior = new _RenderBehaviorClasses_LevelRender__WEBPACK_IMPORTED_MODULE_0__.default();\n    _this.renderBehavior.render = _this.renderBehavior.render.bind(_assertThisInitialized(_this));\n\n    for (var j = 0; j < _this.height; j++) {\n      _this.map[j] = [];\n\n      for (var i = 0; i < _this.width; i++) {\n        _this.map[j][i] = new _Grass__WEBPACK_IMPORTED_MODULE_2__.default(i, j);\n      }\n    }\n\n    _this.food = new _Food__WEBPACK_IMPORTED_MODULE_3__.default(2, 2);\n    return _this;\n  }\n\n  _createClass(Level, [{\n    key: \"generateFood\",\n    value: function generateFood(snake) {}\n  }]);\n\n  return Level;\n}(_AbstractClasses_PlayObject__WEBPACK_IMPORTED_MODULE_1__.default);\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/PlayObjects/Level.ts?");

/***/ }),

/***/ "./src/ts/modules/PlayObjects/RenderBehaviorClasses/FoodRender.ts":
/*!************************************************************************!*\
  !*** ./src/ts/modules/PlayObjects/RenderBehaviorClasses/FoodRender.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FoodRender)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FoodRender = /*#__PURE__*/function () {\n  function FoodRender() {\n    _classCallCheck(this, FoodRender);\n  }\n\n  _createClass(FoodRender, [{\n    key: \"render\",\n    value: function render(cx) {\n      cx.fillStyle = 'orange';\n      cx.fillRect(this.Left, this.Top, this.Size, this.Size);\n    }\n  }]);\n\n  return FoodRender;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/PlayObjects/RenderBehaviorClasses/FoodRender.ts?");

/***/ }),

/***/ "./src/ts/modules/PlayObjects/RenderBehaviorClasses/GrassRender.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/modules/PlayObjects/RenderBehaviorClasses/GrassRender.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GrassRender)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GrassRender = /*#__PURE__*/function () {\n  function GrassRender() {\n    _classCallCheck(this, GrassRender);\n  }\n\n  _createClass(GrassRender, [{\n    key: \"render\",\n    value: function render(cx) {\n      cx.fillStyle = \"#242424\";\n      cx.fillRect(this.Left, this.Top, this.Size, this.Size);\n    }\n  }]);\n\n  return GrassRender;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/PlayObjects/RenderBehaviorClasses/GrassRender.ts?");

/***/ }),

/***/ "./src/ts/modules/PlayObjects/RenderBehaviorClasses/LevelRender.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/modules/PlayObjects/RenderBehaviorClasses/LevelRender.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LevelRender)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LevelRender = /*#__PURE__*/function () {\n  function LevelRender() {\n    _classCallCheck(this, LevelRender);\n  }\n\n  _createClass(LevelRender, [{\n    key: \"render\",\n    value: function render(cx) {\n      this.map.forEach(function (row) {\n        return row.forEach(function (grass) {\n          return grass.render(cx);\n        });\n      });\n      this.food.render(cx);\n    }\n  }]);\n\n  return LevelRender;\n}();\n\n\n\n//# sourceURL=webpack://pack/./src/ts/modules/PlayObjects/RenderBehaviorClasses/LevelRender.ts?");

/***/ }),

/***/ "./src/ts/modules/consts.ts":
/*!**********************************!*\
  !*** ./src/ts/modules/consts.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BLOCK_SIZE\": () => (/* binding */ BLOCK_SIZE),\n/* harmony export */   \"LevelSize\": () => (/* binding */ LevelSize),\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\n\nvar parent = document.querySelector('.box');\nvar LevelSize;\n\n(function (LevelSize) {\n  LevelSize[LevelSize[\"Height\"] = 18] = \"Height\";\n  LevelSize[LevelSize[\"Width\"] = 24] = \"Width\";\n})(LevelSize || (LevelSize = {}));\n\nvar BLOCK_SIZE = parent.offsetHeight / LevelSize.Height;\nvar Vector;\n\n(function (Vector) {\n  Vector[Vector[\"Up\"] = 0] = \"Up\";\n  Vector[Vector[\"Right\"] = 1] = \"Right\";\n  Vector[Vector[\"Down\"] = 2] = \"Down\";\n  Vector[Vector[\"Left\"] = 3] = \"Left\";\n})(Vector || (Vector = {}));\n\n//# sourceURL=webpack://pack/./src/ts/modules/consts.ts?");

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