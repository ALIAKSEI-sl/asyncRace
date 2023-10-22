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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./flag.svg */ \"./src/flag.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: rgb(100, 100, 100);\n}\n\nli {\n  list-style-type: none;\n}\n\n.menu-pages {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n}\n.menu-pages .button {\n  font-size: 18px;\n}\n\n.button {\n  padding: 5px;\n  background-color: rgb(173, 196, 165);\n  color: #fff;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.button[disabled] {\n  color: rgb(100, 100, 100);\n  background-color: #fff;\n  cursor: auto;\n}\n\n.button:not([disabled]):hover {\n  background-color: rgb(151, 165, 147);\n}\n\n.stop-engine-button,\n.reset-btn {\n  background-color: #da5959;\n}\n.stop-engine-button:not([disabled]):hover,\n.reset-btn:not([disabled]):hover {\n  background-color: #a01d1d;\n}\n\n.start-engine-button,\n.race-btn {\n  background-color: #6b974e;\n}\n.start-engine-button:not([disabled]):hover,\n.race-btn:not([disabled]):hover {\n  background-color: #45682e;\n}\n\n.container-forms {\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n}\n\n.form {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.input {\n  width: 300px;\n  border: 1px solid rgb(173, 196, 165);\n  border-radius: 5px;\n}\n\n.race-controls {\n  display: flex;\n  padding-top: 5px;\n  justify-content: center;\n  gap: 10px;\n}\n\n.container-garage,\n.page-winners {\n  color: #fff;\n}\n\n.header {\n  padding-left: 5px;\n}\n\n.header-page {\n  padding: 10px 0 10px 5px;\n}\n\n.general-buttons,\n.control-buttons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 20px;\n}\n\n.control-buttons {\n  padding-top: 5px;\n}\n\n.car-name {\n  color: #d6cf84;\n  font-size: 20px;\n}\n\n.car-win .car {\n  height: 30px;\n}\n\n.number-wins,\n.record-column {\n  cursor: pointer;\n}\n\n.colum-wins {\n  padding: 0 20px;\n}\n\n.number-wins:hover,\n.record-column:hover {\n  color: #d6cf84;\n}\n\n.road {\n  border-bottom: 2px dashed black;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-left: 30px;\n  padding-right: 150px;\n  margin-bottom: 15px;\n}\n\n.table-win {\n  margin: 0 auto;\n  font-size: 20px;\n}\n\n.flag {\n  width: 60px;\n  height: 60px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: 60px;\n}\n\n.pagination {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 0 20px 0;\n}\n\n.popup-winner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  font-size: 32px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n  font-family: \"Roboto\", sans-serif;\n}\n\n.car {\n  height: 67px;\n}\n\n.garage .car {\n  width: 140px;\n}\n\n.hide {\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://asyncRace/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://asyncRace/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://asyncRace/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://asyncRace/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://asyncRace/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://asyncRace/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://asyncRace/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://asyncRace/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://asyncRace/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://asyncRace/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://asyncRace/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_storageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storageService */ \"./src/modules/storageService.ts\");\n/* harmony import */ var _modules_templateBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/templateBuilder */ \"./src/modules/templateBuilder.ts\");\n\n\nclass App {\n    storage;\n    template;\n    constructor(storage, template) {\n        this.storage = storage;\n        this.template = template;\n    }\n    async start(Handler, Listener) {\n        await this.storage.initialization();\n        this.template.initialization(this.storage);\n        const handler = new Handler(this.template, this.storage);\n        const listener = new Listener(handler);\n        listener.listen();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App(_modules_storageService__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _modules_templateBuilder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n\n//# sourceURL=webpack://asyncRace/./src/app.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n/* harmony import */ var _modules_eventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/eventHandler */ \"./src/modules/eventHandler.ts\");\n/* harmony import */ var _modules_eventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/eventListener */ \"./src/modules/eventListener.ts\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\n\n\nawait _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start(_modules_eventHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _modules_eventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://asyncRace/./src/main.ts?");

/***/ }),

/***/ "./src/modules/eventHandler.ts":
/*!*************************************!*\
  !*** ./src/modules/eventHandler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventHandler)\n/* harmony export */ });\n/* harmony import */ var _template_modelCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template/modelCar */ \"./src/template/modelCar.ts\");\n\nclass EventHandler {\n    template;\n    storage;\n    updateCarId;\n    isWinner;\n    constructor(template, storage) {\n        this.template = template;\n        this.storage = storage;\n        this.isWinner = true;\n        this.updateCarId = 0;\n    }\n    changeView(view) {\n        if (view === 'garage') {\n            this.template.showViewGarage();\n        }\n        else\n            this.template.showViewWinners();\n    }\n    async submitForms(event) {\n        event.preventDefault();\n        this.template.toggleBtnDisable('.button-create');\n        const form = event.target;\n        const data = new FormData(form);\n        const name = data.get('nameCar');\n        const color = data.get('color');\n        if (name && form.id === 'create') {\n            await this.createCar(name, color);\n        }\n        else if (name && form.id === 'update') {\n            await this.updateCar(name, color);\n            this.updateCarId = 0;\n        }\n    }\n    async createCar(name, color) {\n        await this.storage.createCar({ name, color });\n        this.template.changeViewGarage(this.storage);\n    }\n    async updateCar(name, color) {\n        await this.storage.updateCar(this.updateCarId, { name, color });\n        this.template.changeViewGarage(this.storage);\n        this.template.createWinnersChild(this.storage);\n    }\n    async removeCar(button) {\n        const id = +button.id.replace('remove-car-', '');\n        await this.storage.removeCar(id);\n        this.template.changeViewGarage(this.storage);\n        this.template.createWinnersChild(this.storage);\n    }\n    async selectCar(button) {\n        this.template.toggleBtnDisable('.button-create');\n        const id = +button.id.replace('select-car-', '');\n        const { name, color } = this.storage.garage.find((car) => car.id === id);\n        const form = document.querySelector('#update');\n        const inputName = form.nameCar;\n        const inputColor = form.color;\n        const btn = form.button;\n        inputName.value = name;\n        inputColor.value = color;\n        inputName.disabled = false;\n        inputColor.disabled = false;\n        btn.disabled = false;\n        this.updateCarId = id;\n    }\n    async nextPageGarage() {\n        await this.storage.getNextCars();\n        this.template.changeViewGarage(this.storage);\n        const btnRace = document.querySelector('.race-btn');\n        if (btnRace.disabled) {\n            await this.resetRace();\n        }\n    }\n    async prevPageGarage() {\n        await this.storage.getPrevCars();\n        this.template.changeViewGarage(this.storage);\n        const btnRace = document.querySelector('.race-btn');\n        if (btnRace.disabled) {\n            await this.resetRace();\n        }\n    }\n    async nextPageWinners() {\n        await this.storage.getNextWinners();\n        this.template.changeViewWinner(this.storage);\n        this.storage.changeVisibilityArrow();\n    }\n    async prevPageWinners() {\n        await this.storage.getPrevWinners();\n        this.template.changeViewWinner(this.storage);\n        this.storage.changeVisibilityArrow();\n    }\n    async generatorCars() {\n        const cars = Array.from({ length: 100 }, () => ({\n            name: this.getRandomModel(),\n            color: this.getRandomColor(),\n        }));\n        await this.storage.generatorCars(cars);\n        this.template.changeViewGarage(this.storage);\n    }\n    getRandomColor() {\n        const sign = '123456789ABCDEF';\n        const limit = 6;\n        let color = '#';\n        for (let i = 0; i < limit; i += 1) {\n            color += sign[Math.floor(Math.random() * sign.length)];\n        }\n        return color;\n    }\n    getRandomModel() {\n        const model = _template_modelCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"][Math.floor(Math.random() * _template_modelCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length)].split(' ')[0];\n        const mark = _template_modelCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"][Math.floor(Math.random() * _template_modelCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length)].split(' ')[1];\n        return `${model} ${mark}`;\n    }\n    async startCar(button) {\n        const id = +button.id.replace('start-engine-car-', '');\n        await this.moveCar(id, false);\n    }\n    async startRace() {\n        this.storage.garage.forEach(async (car) => {\n            this.template.toggleBtnDisable(`#start-engine-car-${car.id}`);\n            await this.moveCar(car.id, true);\n        });\n    }\n    async moveCar(id, isRace) {\n        const { distance, velocity } = await this.storage.startCar(id);\n        this.template.toggleBtnDisable(`#stop-engine-car-${id}`);\n        this.template.switchControlsBtn(true);\n        const time = +(distance / velocity / 1000).toFixed(1);\n        const car = this.template.garageChild.querySelector(`#car-${id}`);\n        this.template.animationCarStart(car, time);\n        if (isRace)\n            this.subscribeWinner(car, id, time);\n        const { success } = await this.storage.driveCar(id);\n        if (!success)\n            this.template.animationCarStop(car);\n    }\n    subscribeWinner(car, id, time) {\n        const transitionEndHandler = () => {\n            if (this.isWinner)\n                this.handleWinner(id, time);\n            car.removeEventListener('transitionend', transitionEndHandler);\n        };\n        car.addEventListener('transitionend', transitionEndHandler);\n    }\n    async handleWinner(id, time) {\n        this.isWinner = false;\n        const { name } = this.storage.garage.find((c) => c.id === id);\n        this.template.showWinner(name, time);\n        await this.storage.updateWinner(id, time);\n        this.template.changeViewWinner(this.storage);\n    }\n    async stopCar(button) {\n        const id = +button.id.replace('stop-engine-car-', '');\n        await this.resetCar(id);\n    }\n    async resetRace() {\n        this.isWinner = true;\n        this.storage.garage.forEach(async (car) => {\n            await this.resetCar(car.id);\n        });\n        this.template.hideWinner();\n    }\n    async resetCar(id) {\n        this.storage.signalAbort(id);\n        await this.storage.stopCar(id);\n        this.template.resetCar(id);\n    }\n    async sortingWinners(by) {\n        await this.storage.sortingWinners(by);\n        this.template.changeViewWinner(this.storage);\n        this.storage.changeVisibilityArrow();\n    }\n}\n\n\n//# sourceURL=webpack://asyncRace/./src/modules/eventHandler.ts?");

/***/ }),

/***/ "./src/modules/eventListener.ts":
/*!**************************************!*\
  !*** ./src/modules/eventListener.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventListener)\n/* harmony export */ });\nclass EventListener {\n    handler;\n    garageBtn;\n    winnersBtn;\n    container;\n    constructor(handler) {\n        this.handler = handler;\n        this.garageBtn = document.querySelector('.garage-btn');\n        this.winnersBtn = document.querySelector('.winners-btn');\n        this.container = document.querySelector('.container');\n    }\n    listen() {\n        this.changeView();\n        this.listenContainer();\n    }\n    changeView() {\n        this.winnersBtn.addEventListener('click', () => {\n            this.handler.changeView('winners');\n        });\n        this.garageBtn.addEventListener('click', () => {\n            this.handler.changeView('garage');\n        });\n    }\n    listenContainer() {\n        this.container.addEventListener('submit', async (event) => {\n            await this.handler.submitForms(event);\n        });\n        this.container.addEventListener('click', async (event) => {\n            await this.clickHandler(event);\n        });\n    }\n    async clickHandler(event) {\n        const targetElement = event.target;\n        if (targetElement.classList.contains('number-wins')) {\n            await this.handler.sortingWinners('wins');\n        }\n        else if (targetElement.classList.contains('record-column')) {\n            await this.handler.sortingWinners('time');\n        }\n        else\n            this.clickButton(targetElement);\n    }\n    async clickButton(targetElement) {\n        const btn = targetElement;\n        const className = btn.className.replace('button ', '');\n        switch (className) {\n            case 'remove-button':\n                this.handler.removeCar(btn);\n                break;\n            case 'select-button':\n                this.handler.selectCar(btn);\n                break;\n            case 'next-btn-garage':\n                this.handler.nextPageGarage();\n                break;\n            case 'prev-btn-garage':\n                this.handler.prevPageGarage();\n                break;\n            case 'next-btn-winner':\n                this.handler.nextPageWinners();\n                break;\n            case 'prev-btn-winner':\n                this.handler.prevPageWinners();\n                break;\n            case 'generator-btn':\n                btn.disabled = true;\n                await this.handler.generatorCars();\n                btn.disabled = false;\n                break;\n            case 'start-engine-button':\n                btn.disabled = true;\n                await this.handler.startCar(btn);\n                break;\n            case 'stop-engine-button':\n                btn.disabled = true;\n                await this.handler.stopCar(btn);\n                break;\n            case 'race-btn':\n                this.handler.startRace();\n                break;\n            case 'reset-btn':\n                this.handler.resetRace();\n                break;\n            default:\n                break;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://asyncRace/./src/modules/eventListener.ts?");

/***/ }),

/***/ "./src/modules/storageService.ts":
/*!***************************************!*\
  !*** ./src/modules/storageService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _requests_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requests/engine */ \"./src/requests/engine.ts\");\n/* harmony import */ var _requests_garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requests/garage */ \"./src/requests/garage.ts\");\n/* harmony import */ var _requests_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requests/winner */ \"./src/requests/winner.ts\");\n\n\n\nclass StorageService {\n    garageClient;\n    engineClient;\n    winnerClient;\n    garage;\n    winners;\n    countCar;\n    countWinners;\n    pageGarage;\n    pageWinners;\n    sortWinners;\n    orderWinners;\n    controllers;\n    constructor(garageClient, engineClient, winnerClient) {\n        this.garageClient = garageClient;\n        this.engineClient = engineClient;\n        this.winnerClient = winnerClient;\n        this.pageGarage = 1;\n        this.pageWinners = 1;\n        this.sortWinners = 'id';\n        this.orderWinners = null;\n        this.controllers = new Map();\n    }\n    async initialization() {\n        await this.getCars();\n        await this.getWinners();\n    }\n    async getCars() {\n        const { data, count } = await this.garageClient.getAll(this.pageGarage);\n        this.garage = data;\n        this.countCar = count;\n    }\n    async getWinners() {\n        const limitWinners = 10;\n        const { data, count } = await this.winnerClient.getAll(this.pageWinners, limitWinners, this.sortWinners ?? 'ASC', this.orderWinners);\n        const winnersFull = await this.getWinnersInfo(data);\n        this.winners = winnersFull;\n        this.countWinners = count;\n    }\n    async getWinnersInfo(data) {\n        const cars = data.map(async (w) => {\n            const { name, color } = await this.getCar(w.id);\n            return { ...w, name, color };\n        });\n        return Promise.all(cars);\n    }\n    async getCar(id) {\n        return this.garageClient.get(id);\n    }\n    async createCar(body) {\n        await this.garageClient.create(body);\n        await this.getCars();\n    }\n    async updateCar(id, body) {\n        await this.garageClient.update(id, body);\n        await this.getCars();\n    }\n    async removeCar(id) {\n        await this.garageClient.remove(id);\n        if (this.pageGarage > 1 && this.garage.length === 1) {\n            this.pageGarage -= 1;\n        }\n        await this.getCars();\n        await this.removeWinners(id);\n    }\n    async removeWinners(id) {\n        const carWinner = await this.winnerClient.get(id);\n        if (carWinner) {\n            await this.winnerClient.remove(id);\n            await this.getWinners();\n        }\n    }\n    async getNextCars() {\n        this.pageGarage += 1;\n        await this.getCars();\n    }\n    async getPrevCars() {\n        this.pageGarage -= 1;\n        await this.getCars();\n    }\n    async getNextWinners() {\n        this.pageWinners += 1;\n        await this.getWinners();\n    }\n    async getPrevWinners() {\n        this.pageWinners -= 1;\n        await this.getWinners();\n    }\n    changeVisibilityArrow() {\n        if (this.orderWinners) {\n            const arw = document.querySelector(`#${this.sortWinners}`);\n            arw.textContent = this.orderWinners === 'ASC' ? '↑' : '↓';\n        }\n    }\n    async generatorCars(cars) {\n        await Promise.all(cars.map(async (car) => {\n            await this.createCar(car);\n        }));\n    }\n    async startCar(id) {\n        return this.engineClient.control(id, 'started');\n    }\n    async updateWinner(id, time) {\n        const car = await this.winnerClient.get(id);\n        if (car) {\n            await this.winnerClient.update(id, {\n                wins: car.wins + 1,\n                time: time < car.time ? time : car.time,\n            });\n        }\n        else {\n            await this.winnerClient.create({ id, wins: 1, time });\n        }\n        await this.getWinners();\n    }\n    async sortingWinners(sort) {\n        this.orderWinners = this.orderWinners === 'ASC' ? 'DESC' : 'ASC';\n        this.sortWinners = sort;\n        await this.getWinners();\n    }\n    async driveCar(id) {\n        const controller = new AbortController();\n        this.controllers.set(id, controller);\n        return this.engineClient.switch(id, 'drive', controller.signal);\n    }\n    async stopCar(id) {\n        return this.engineClient.control(id, 'stopped');\n    }\n    signalAbort(id) {\n        this.controllers.get(id)?.abort();\n        this.controllers.delete(id);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new StorageService(_requests_garage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _requests_engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _requests_winner__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n\n//# sourceURL=webpack://asyncRace/./src/modules/storageService.ts?");

/***/ }),

/***/ "./src/modules/templateBuilder.ts":
/*!****************************************!*\
  !*** ./src/modules/templateBuilder.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _template_finishRace_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template/finishRace.template */ \"./src/template/finishRace.template.ts\");\n/* harmony import */ var _template_garage_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/garage.template */ \"./src/template/garage.template.ts\");\n/* harmony import */ var _template_main_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template/main.template */ \"./src/template/main.template.ts\");\n/* harmony import */ var _template_winners_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template/winners.template */ \"./src/template/winners.template.ts\");\n\n\n\n\nclass TemplateBuilder {\n    container;\n    garageChild;\n    winnersChild;\n    containerWinners;\n    containerGarage;\n    limitCar;\n    limitWinners;\n    constructor() {\n        this.limitCar = 7;\n        this.limitWinners = 10;\n    }\n    initialization(storage) {\n        document.body.innerHTML = _template_main_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        const container = document.body.querySelector('.container');\n        const containerGarage = this.createElement('div', 'container-garage');\n        const containerWinners = this.createElement('div', 'container-winners');\n        containerWinners.classList.add('hide');\n        container.append(containerGarage, containerWinners);\n        this.containerGarage = containerGarage;\n        this.containerWinners = containerWinners;\n        this.createGarageChild(storage);\n        this.createWinnersChild(storage);\n        containerGarage.append(this.garageChild);\n        containerWinners.append(this.winnersChild);\n    }\n    createElement(name, className) {\n        const elem = document.createElement(name);\n        elem.classList.add(className);\n        return elem;\n    }\n    createGarageChild(storage) {\n        const root = document.createElement('div');\n        root.classList.add('page-garage');\n        root.innerHTML = (0,_template_garage_template__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(storage.countCar, storage.pageGarage, storage.garage);\n        this.garageChild = root;\n        this.paginationVisibility('garage', storage.pageGarage, storage.countCar);\n    }\n    createWinnersChild(storage) {\n        const root = document.createElement('div');\n        root.classList.add('page-winners');\n        root.innerHTML = (0,_template_winners_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(storage.countWinners, storage.pageWinners, storage.winners);\n        this.winnersChild = root;\n        this.paginationVisibility('winner', storage.pageWinners, storage.countWinners);\n    }\n    paginationVisibility(pageName, page, count) {\n        const parent = pageName === 'garage' ? this.garageChild : this.winnersChild;\n        const limit = pageName === 'garage' ? this.limitCar : this.limitWinners;\n        const prevBtn = parent.querySelector(`.prev-btn-${pageName}`);\n        const nextBtn = parent.querySelector(`.next-btn-${pageName}`);\n        if (page > 1)\n            prevBtn.disabled = false;\n        if (page * limit < count)\n            nextBtn.disabled = false;\n    }\n    showViewWinners() {\n        if (this.containerWinners.classList.contains('hide')) {\n            this.containerGarage.classList.add('hide');\n            this.containerWinners.classList.remove('hide');\n        }\n    }\n    showViewGarage() {\n        if (this.containerGarage.classList.contains('hide')) {\n            this.containerGarage.classList.remove('hide');\n            this.containerWinners.classList.add('hide');\n        }\n    }\n    showWinner(name, time) {\n        const finishTemplate = (0,_template_finishRace_template__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, time);\n        this.garageChild.insertAdjacentHTML('beforeend', finishTemplate);\n    }\n    hideWinner() {\n        const popup = this.garageChild.querySelector('.popup-winner');\n        popup?.remove();\n    }\n    updateViewGarage() {\n        this.containerGarage.innerHTML = '';\n        this.containerGarage.append(this.garageChild);\n    }\n    updateViewWinner() {\n        this.containerWinners.innerHTML = '';\n        this.containerWinners.append(this.winnersChild);\n    }\n    changeViewGarage(storage) {\n        this.createGarageChild(storage);\n        this.updateViewGarage();\n    }\n    changeViewWinner(storage) {\n        this.createWinnersChild(storage);\n        this.updateViewWinner();\n    }\n    toggleBtnDisable(selector) {\n        const btn = this.garageChild.querySelector(`${selector}`);\n        btn.disabled = !btn.disabled;\n    }\n    animationCarStart(car, time) {\n        const moveCar = car;\n        const widthCar = 200;\n        moveCar.style.transition = `transform ${time}s linear`;\n        moveCar.style.transform = `translateX(${window.innerWidth - widthCar}px)`;\n    }\n    animationCarReset(id) {\n        const car = this.garageChild.querySelector(`#car-${id}`);\n        car.style.transition = 'none';\n        car.style.transform = 'none';\n    }\n    animationCarStop(car) {\n        const stopCar = car;\n        const currentPosition = getComputedStyle(car).getPropertyValue('transform');\n        stopCar.style.transform = currentPosition;\n        stopCar.style.transition = 'none';\n    }\n    switchControlsBtn(isStart) {\n        const btnRace = this.garageChild.querySelector('.race-btn');\n        const btnRes = this.garageChild.querySelector('.reset-btn');\n        if (isStart) {\n            btnRace.disabled = true;\n            btnRes.disabled = false;\n        }\n        else {\n            const btnsStr = Array.from(this.garageChild.querySelectorAll('.start-engine-button'));\n            if (btnsStr.every((e) => !e.disabled)) {\n                btnRace.disabled = false;\n                btnRes.disabled = true;\n                this.hideWinner();\n            }\n        }\n    }\n    resetCarBtn(id) {\n        const btnStr = this.garageChild.querySelector(`#start-engine-car-${id}`);\n        const btnStop = this.garageChild.querySelector(`#stop-engine-car-${id}`);\n        btnStr.disabled = false;\n        btnStop.disabled = true;\n    }\n    resetCar(id) {\n        this.resetCarBtn(id);\n        this.switchControlsBtn(false);\n        this.animationCarReset(id);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TemplateBuilder());\n\n\n//# sourceURL=webpack://asyncRace/./src/modules/templateBuilder.ts?");

/***/ }),

/***/ "./src/requests/engine.ts":
/*!********************************!*\
  !*** ./src/requests/engine.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Engine {\n    url;\n    constructor() {\n        this.url = 'http://127.0.0.1:3000/engine';\n    }\n    async control(id, status) {\n        const response = await fetch(`${this.url}?id=${id}&status=${status}`, {\n            method: 'PATCH',\n        });\n        return response.json();\n    }\n    async switch(id, status, signal) {\n        try {\n            const response = await fetch(`${this.url}?id=${id}&status=${status}`, {\n                method: 'PATCH',\n                signal,\n            });\n            return await response.json();\n        }\n        catch {\n            return { success: false };\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Engine());\n\n\n//# sourceURL=webpack://asyncRace/./src/requests/engine.ts?");

/***/ }),

/***/ "./src/requests/garage.ts":
/*!********************************!*\
  !*** ./src/requests/garage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Garage {\n    url;\n    limitCar;\n    constructor() {\n        this.url = 'http://127.0.0.1:3000/garage';\n        this.limitCar = 7;\n    }\n    async getAll(page, limit = this.limitCar) {\n        const response = await fetch(`${this.url}?_page=${page}&_limit=${limit}`);\n        return {\n            data: await response.json(),\n            count: Number(response.headers.get('X-Total-Count')),\n        };\n    }\n    async get(id) {\n        const response = await fetch(`${this.url}/${id}`);\n        return response.json();\n    }\n    async create(body) {\n        const response = await fetch(this.url, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify(body),\n        });\n        return response.json();\n    }\n    async remove(id) {\n        await fetch(`${this.url}/${id}`, { method: 'DELETE' });\n    }\n    async update(id, body) {\n        const response = await fetch(`${this.url}/${id}`, {\n            method: 'PUT',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify(body),\n        });\n        return response.json();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Garage());\n\n\n//# sourceURL=webpack://asyncRace/./src/requests/garage.ts?");

/***/ }),

/***/ "./src/requests/winner.ts":
/*!********************************!*\
  !*** ./src/requests/winner.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Winner {\n    url;\n    limitWinner;\n    constructor() {\n        this.url = 'http://127.0.0.1:3000/winners';\n        this.limitWinner = 10;\n    }\n    async getAll(page, limit = this.limitWinner, sort = 'id', order = 'ASC') {\n        const response = await fetch(`${this.url}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);\n        return {\n            data: await response.json(),\n            count: Number(response.headers.get('X-Total-Count')),\n        };\n    }\n    async get(id) {\n        const response = await fetch(`${this.url}/${id}`);\n        if (response.status === 404)\n            return null;\n        return response.json();\n    }\n    async create(body) {\n        const response = await fetch(this.url, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify(body),\n        });\n        return response.json();\n    }\n    async remove(id) {\n        await fetch(`${this.url}/${id}`, { method: 'DELETE' });\n    }\n    async update(id, body) {\n        const response = await fetch(`${this.url}/${id}`, {\n            method: 'PUT',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify(body),\n        });\n        return response.json();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Winner());\n\n\n//# sourceURL=webpack://asyncRace/./src/requests/winner.ts?");

/***/ }),

/***/ "./src/template/carColor.ts":
/*!**********************************!*\
  !*** ./src/template/carColor.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n  <?xml version=\"1.0\" standalone=\"no\"?>\r\n  <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 20010904//EN\"\r\n  \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\r\n  <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" display=\"none\">\r\n  <symbol id=\"car\" width=\"110.000000pt\" height=\"50.000000pt\" viewBox=\"0 0 1280.000000 640.000000\"\r\n  preserveAspectRatio=\"xMidYMid meet\"\r\n  </symbol>\r\n  <g transform=\"translate(0.000000,750.000000) scale(0.100000,-0.100000)\">\r\n  <path d=\"M3605 5335 c-5 -1 -38 -10 -71 -20 l-62 -17 -7 -79 c-5 -66 -10 -82\r\n  -28 -94 -30 -19 -173 -75 -547 -215 -482 -180 -1078 -425 -1215 -500 -148 -81\r\n  -230 -105 -410 -120 -71 -6 -173 -19 -225 -30 -143 -28 -342 -49 -558 -56\r\n  l-193 -7 -28 -36 c-56 -71 -74 -123 -47 -138 18 -11 36 -47 36 -74 0 -12 -12\r\n  -52 -27 -88 -26 -63 -28 -76 -31 -259 l-4 -192 -33 -26 c-68 -51 -103 -126\r\n  -135 -284 -24 -113 -25 -187 -5 -298 10 -54 12 -96 6 -120 -5 -26 -2 -72 13\r\n  -153 l21 -116 63 -52 c55 -46 87 -84 168 -200 49 -69 293 -133 674 -176 146\r\n  -16 517 -42 670 -47 l95 -3 -3 125 c-13 525 321 967 833 1101 79 21 112 24\r\n  265 23 155 0 186 -3 271 -26 395 -106 686 -404 790 -807 35 -134 36 -369 3\r\n  -565 l-7 -38 2989 7 c1644 4 2992 9 2995 11 3 2 -3 36 -14 76 -17 60 -20 104\r\n  -21 253 0 164 2 189 26 277 105 386 401 682 786 786 88 23 114 26 277 26 151\r\n  0 192 -4 255 -21 208 -58 351 -137 494 -274 192 -183 303 -402 337 -664 13\r\n  -101 6 -257 -15 -350 -8 -33 -12 -63 -10 -67 3 -5 29 -6 57 -3 29 3 115 10\r\n  192 16 204 16 345 42 399 73 46 27 95 88 122 152 13 32 13 53 -1 195 -14 143\r\n  -14 168 0 247 22 127 45 323 52 432 6 111 -22 282 -59 359 -93 195 -453 342\r\n  -1267 516 -817 174 -1442 244 -2181 245 -254 0 -256 1 -373 83 -191 135 -1154\r\n  667 -1517 839 -344 163 -740 255 -1320 305 -166 14 -308 18 -755 17 -539 0\r\n  -624 -3 -1262 -46 l-182 -12 -78 46 c-105 60 -155 76 -198 63z m1846 -295 c4\r\n  -19 42 -249 83 -510 42 -261 78 -491 82 -511 4 -26 2 -37 -7 -41 -20 -6 -1356\r\n  18 -1694 32 -400 16 -647 38 -763 69 -74 20 -179 118 -229 214 -25 46 -28 63\r\n  -28 147 0 136 18 180 99 232 239 154 665 274 1216 342 368 45 677 64 1015 62\r\n  l219 -1 7 -35z m863 -5 c353 -51 697 -124 874 -186 111 -39 387 -181 567 -292\r\n  203 -124 370 -240 370 -255 0 -7 -24 -21 -53 -31 -112 -38 -134 -88 -119 -266\r\n  l2 -30 -901 -3 c-714 -2 -904 1 -911 10 -39 49 -353 998 -353 1066 l0 25 176\r\n  -7 c97 -4 254 -18 348 -31z\"/>\r\n  <path d=\"M2670 3124 c-480 -87 -818 -429 -880 -892 -51 -372 117 -758 426\r\n  -978 79 -56 227 -127 323 -153 556 -153 1134 181 1278 738 127 497 -131 1017\r\n  -602 1213 -129 53 -217 71 -375 74 -80 1 -156 0 -170 -2z m365 -304 c335 -105\r\n  552 -417 532 -765 -25 -433 -413 -760 -837 -706 -172 22 -322 94 -441 211\r\n  -208 205 -280 499 -189 772 40 118 87 195 173 285 109 113 235 185 382 219 90\r\n  21 291 12 380 -16z\"/>\r\n  <path d=\"M2615 2694 c-66 -24 -145 -67 -145 -78 0 -19 207 -219 219 -212 7 5\r\n  11 58 11 157 0 148 0 149 -22 148 -13 0 -41 -7 -63 -15z\"/>\r\n  <path d=\"M2930 2561 c0 -99 4 -152 11 -157 12 -7 219 193 219 212 0 20 -167\r\n  94 -211 94 -18 0 -19 -10 -19 -149z\"/>\r\n  <path d=\"M3225 2340 c-89 -89 -107 -112 -95 -120 8 -6 77 -9 155 -7 l140 2 -3\r\n  35 c-2 29 -74 200 -84 200 -2 0 -53 -50 -113 -110z\"/>\r\n  <path d=\"M2252 2373 c-47 -105 -57 -144 -41 -154 19 -12 270 -11 289 1 12 8\r\n  -5 30 -90 115 -57 58 -110 105 -116 105 -6 0 -25 -30 -42 -67z\"/>\r\n  <path d=\"M2790 2316 c0 -13 6 -26 13 -29 22 -7 37 4 37 29 0 19 -5 24 -25 24\r\n  -20 0 -25 -5 -25 -24z\"/>\r\n  <path d=\"M2755 2155 c-35 -34 -33 -78 4 -116 38 -38 74 -38 112 0 56 57 23\r\n  141 -56 141 -25 0 -44 -8 -60 -25z\"/>\r\n  <path d=\"M2582 2121 c-21 -13 -10 -46 16 -49 27 -4 40 22 22 43 -14 17 -20 18\r\n  -38 6z\"/>\r\n  <path d=\"M3010 2115 c-18 -21 -5 -47 22 -43 26 3 37 36 16 49 -18 12 -24 11\r\n  -38 -6z\"/>\r\n  <path d=\"M2205 1948 c11 -49 53 -150 75 -178 l19 -25 106 105 c58 57 105 110\r\n  105 117 0 10 -37 13 -156 13 l-156 0 7 -32z\"/>\r\n  <path d=\"M3120 1967 c0 -20 206 -220 219 -213 22 14 91 174 91 213 0 10 -32\r\n  13 -155 13 -118 0 -155 -3 -155 -13z\"/>\r\n  <path d=\"M2794 1896 c-9 -24 4 -48 23 -44 12 2 18 12 18 28 0 29 -32 41 -41\r\n  16z\"/>\r\n  <path d=\"M2572 1687 c-56 -56 -102 -106 -102 -110 0 -19 210 -104 224 -90 3 4\r\n  6 73 6 155 0 113 -3 148 -13 148 -7 0 -58 -46 -115 -103z\"/>\r\n  <path d=\"M2930 1641 c0 -83 4 -152 9 -155 20 -12 221 72 221 92 0 13 -205 212\r\n  -217 212 -10 0 -13 -35 -13 -149z\"/>\r\n  <path d=\"M10765 3123 c-228 -35 -436 -143 -593 -307 -186 -194 -277 -405 -289\r\n  -668 -9 -201 25 -360 115 -531 194 -371 607 -594 1015 -548 245 27 437 116\r\n  610 280 98 94 158 173 212 281 84 169 110 284 109 480 -2 174 -28 291 -98 435\r\n  -108 222 -273 383 -500 491 -140 66 -234 86 -406 90 -80 1 -158 0 -175 -3z\r\n  m380 -307 c119 -40 208 -97 305 -195 147 -148 214 -311 214 -521 0 -123 -11\r\n  -186 -54 -290 -76 -190 -242 -348 -438 -420 -364 -133 -765 29 -932 375 -65\r\n  134 -84 226 -77 369 8 170 50 287 153 422 109 144 256 238 439 280 40 9 102\r\n  13 185 10 103 -3 139 -8 205 -30z\"/>\r\n  <path d=\"M10702 2690 c-67 -24 -132 -61 -132 -75 0 -18 207 -218 219 -211 7 5\r\n  11 58 11 157 0 171 5 165 -98 129z\"/>\r\n  <path d=\"M11030 2556 c0 -119 3 -156 13 -156 7 0 59 47 116 104 85 85 102 107\r\n  93 119 -16 19 -139 74 -184 82 l-38 7 0 -156z\"/>\r\n  <path d=\"M10367 2409 c-34 -60 -71 -165 -64 -184 5 -12 29 -15 144 -15 76 0\r\n  145 5 153 10 12 8 -7 31 -96 121 l-112 112 -25 -44z\"/>\r\n  <path d=\"M11320 2335 c-85 -85 -102 -107 -90 -115 18 -12 270 -13 288 -2 23\r\n  15 -51 208 -83 219 -6 2 -57 -44 -115 -102z\"/>\r\n  <path d=\"M10886 2323 c-5 -11 -1 -22 9 -30 23 -16 47 -5 43 21 -4 27 -43 34\r\n  -52 9z\"/>\r\n  <path d=\"M10855 2155 c-47 -46 -24 -125 42 -141 53 -14 113 46 99 99 -16 67\r\n  -94 90 -141 42z\"/>\r\n  <path d=\"M10682 2121 c-20 -12 -10 -46 14 -49 25 -4 40 24 23 44 -13 16 -19\r\n  17 -37 5z\"/>\r\n  <path d=\"M11110 2115 c-17 -20 -5 -45 20 -45 11 0 23 7 26 15 6 15 -11 45 -26\r\n  45 -4 0 -13 -7 -20 -15z\"/>\r\n  <path d=\"M10305 1943 c8 -46 68 -177 85 -188 14 -8 220 191 220 212 0 10 -37\r\n  13 -156 13 l-156 0 7 -37z\"/>\r\n  <path d=\"M11220 1967 c0 -12 199 -217 212 -217 15 0 80 137 93 198 l7 32 -156\r\n  0 c-119 0 -156 -3 -156 -13z\"/>\r\n  <path d=\"M10890 1895 c-11 -13 -11 -19 3 -32 21 -21 49 -9 45 19 -4 28 -30 35\r\n  -48 13z\"/>\r\n  <path d=\"M10672 1687 c-56 -56 -102 -105 -102 -109 0 -22 200 -105 221 -92 5\r\n  3 9 72 9 155 0 114 -3 149 -13 149 -7 0 -58 -46 -115 -103z\"/>\r\n  <path d=\"M11030 1635 c0 -85 1 -155 3 -155 36 0 227 82 227 97 0 13 -204 213\r\n  -217 213 -10 0 -13 -37 -13 -155z\"/>\r\n  </g>\r\n  </svg>\r\n`);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/carColor.ts?");

/***/ }),

/***/ "./src/template/finishRace.template.ts":
/*!*********************************************!*\
  !*** ./src/template/finishRace.template.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, time) => `\r\n<p class=\"popup-winner\"> Race winner ${name}. Time ${time} s</p>\r\n`);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/finishRace.template.ts?");

/***/ }),

/***/ "./src/template/garage.template.ts":
/*!*****************************************!*\
  !*** ./src/template/garage.template.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderGarage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGarage */ \"./src/template/renderGarage.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((countCar, pageGarage, garage) => `\r\n    <div class=\"container-forms\">\r\n      <form class=\"form\" id=\"create\" name=\"create\">\r\n        <input class=\"input\" id=\"create-name\" name=\"nameCar\" type=\"\"text\"></input>\r\n        <input class=\"color\" id=\"create-color\" name=\"color\" type=\"color\" value=\"#000000\"></input>\r\n        <button class=\"button button-create\" type=\"submit\">Create</button>\r\n      </form>\r\n      <form class=\"form\" id=\"update\" name=\"update\">\r\n        <input class=\"input\" id=\"update-name\" name=\"nameCar\" type=\"\"text\" disabled></input>\r\n        <input class=\"color\" id=\"update-color\" name=\"color\" type=\"color\" value=\"#ffffff\" disabled></input>\r\n        <button class=\"button\" id=\"update-submit\" type=\"submit\" name=\"button\" disabled>Update</button>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"race-controls\">\r\n      <button class=\"button race-btn\" id=\"race\" type=\"submit\">Race</button>\r\n      <button class=\"button reset-btn\" id=\"reset\" type=\"submit\" disabled>Reset</button>\r\n      <button class=\"button generator-btn\" id=\"generator\"> Generate cars</button>\r\n    </div>\r\n\r\n    <div class=\"container-garage\">\r\n      ${(0,_renderGarage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(countCar, pageGarage, garage)}\r\n    </div>\r\n\r\n    <div class=\"pagination\">\r\n      <button class=\"button prev-btn-garage\" id='prev-garage' disabled>Previous page</button>\r\n      <button class=\"button next-btn-garage\" id='next-garage' disabled>Next page</button>\r\n    </div>\r\n`);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/garage.template.ts?");

/***/ }),

/***/ "./src/template/main.template.ts":
/*!***************************************!*\
  !*** ./src/template/main.template.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _carColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carColor */ \"./src/template/carColor.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n  <div class='wrapper'>\r\n    <div class='menu-pages'>\r\n      <button class='button garage-btn'>To Garage</button>\r\n      <button class='button winners-btn'>To Winners</button>\r\n    </div>\r\n    <div class='container'></div>\r\n  </div>\r\n  ${_carColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\r\n`);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/main.template.ts?");

/***/ }),

/***/ "./src/template/modelCar.ts":
/*!**********************************!*\
  !*** ./src/template/modelCar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    'Opel Astra',\n    'Honda',\n    'Porsche Macan',\n    'Volkswagen Polo',\n    'Hyundai Elantra',\n    'Geely Atlas',\n    'Lada Vesta',\n    'Renault Captur',\n    'Peugeot 208',\n    'Toyota Corolla',\n    'BMW X3',\n    'Ford Focus',\n    'Mercedes E-Class',\n    'Audi A4',\n    'Nissan Sentra',\n    'Chevrolet Malibu',\n    'Subaru Impreza',\n    'Mazda CX-9',\n    'Kia Rio',\n    'Volvo S60',\n    'Tesla  Model X',\n    'Lamborghini Aventador',\n    'Ferrari Portofino',\n    'Jaguar F-PACE',\n    'Rolls-Royce Ghost',\n    'Bentley Continental GT',\n    'Aston Martin DB11',\n    'McLaren 720S',\n    'Maserati Ghibli',\n    'Bugatti Chiron',\n    'Alfa Romeo Giulia',\n    'Lexus ES',\n    'Infiniti Q50',\n    'Land Rover Discovery',\n]);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/modelCar.ts?");

/***/ }),

/***/ "./src/template/renderCar.ts":
/*!***********************************!*\
  !*** ./src/template/renderCar.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, color, id) => `\r\n  <div class=\"general-buttons\">\r\n    <button class=\"button select-button\" id=\"select-car-${id}\">Select</button>\r\n    <button class=\"button remove-button\" id=\"remove-car-${id}\">Remove</button>\r\n    <span class=\"car-name\">${name}</span>\r\n  </div>\r\n  <div class=\"control-buttons\">\r\n    <button class=\"button start-engine-button\" id=\"start-engine-car-${id}\">Start</button>\r\n    <button class=\"button stop-engine-button\" id=\"stop-engine-car-${id}\" disabled>Stop</button>\r\n  </div>\r\n  <div class=\"road\">\r\n    <div class=\"road-car\">\r\n      <svg class=\"car\" id=\"car-${id}\" style=\"fill: ${color}\">\r\n      <use href=\"#car\"></use>\r\n      </svg>\r\n    </div>\r\n    <div class=\" flag flag-${id}\"></div>\r\n  </div>\r\n`);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/renderCar.ts?");

/***/ }),

/***/ "./src/template/renderGarage.ts":
/*!**************************************!*\
  !*** ./src/template/renderGarage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCar */ \"./src/template/renderCar.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((countCar, pageGarage, garage) => `\r\n  <h1 class=\"header\">Garage (${countCar})</h1>\r\n  <h2 class=\"header-page\">Page #(${pageGarage})</h2>\r\n  <ul class=\"garage\">\r\n    ${garage\n    .map(({ name, color, id }) => `<li>${(0,_renderCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, color, id)}</li>`)\n    .join('')}\r\n  </ul>\r\n`);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/renderGarage.ts?");

/***/ }),

/***/ "./src/template/renderWinners.ts":
/*!***************************************!*\
  !*** ./src/template/renderWinners.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((winners, page) => {\n    const limit = 10;\n    return `\r\n  ${winners\n        .map(({ name, color, wins, time }, i) => `\r\n      <tr>\r\n        <td>${(page - 1) * limit + (i + 1)}</td>\r\n        <td>\r\n          <div class=\"car-win\">\r\n          <svg class=\"car\" style=\"fill: ${color}\" width=\"70\">\r\n            <use href=\"#car\" width=\"50\" height=\"30\"></use>\r\n          </svg>\r\n          </div>\r\n        </td>\r\n        <td>${name}</td>\r\n        <td class=\"colum-wins\">${wins}</td>\r\n        <td>${time}</td>\r\n      </tr>\r\n      `)\n        .join('')}\r\n  `;\n});\n\n\n//# sourceURL=webpack://asyncRace/./src/template/renderWinners.ts?");

/***/ }),

/***/ "./src/template/winners.template.ts":
/*!******************************************!*\
  !*** ./src/template/winners.template.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderWinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWinners */ \"./src/template/renderWinners.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((countWinners, pageWinners, winners) => `\r\n  <h1 class=\"header\">Winners (${countWinners})</h1>\r\n  <h2 class=\"header-page\">Page #(${pageWinners})</h2>\r\n  <table class=\"table-win\">\r\n    <thead>\r\n      <tr>\r\n        <th>Number</th>\r\n        <th>Car</th>\r\n        <th>Name</th>\r\n        <th class=\"number-wins colum-wins\">Wins <span id=\"wins\"></span></th>\r\n        <th class=\"record-column\">Best time (seconds) <span id=\"time\"></span></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n    ${(0,_renderWinners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(winners, pageWinners)}\r\n    </tbody>\r\n  </table>\r\n  <div class=\"pagination\">\r\n    <button class=\"button prev-btn-winner\" id='prev-winner' disabled>Previous page</button>\r\n    <button class=\"button next-btn-winner\" id='prev-winner' disabled>Next page</button>\r\n  </div>\r\n`);\n\n\n//# sourceURL=webpack://asyncRace/./src/template/winners.template.ts?");

/***/ }),

/***/ "./src/flag.svg":
/*!**********************!*\
  !*** ./src/flag.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ddf1a8f026d4f02d8c6.svg\";\n\n//# sourceURL=webpack://asyncRace/./src/flag.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;