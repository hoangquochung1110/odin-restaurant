"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sanwa-limbu.jpg */ "./src/images/sanwa-limbu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --burnt-orange: #E36920;\n    --amber: #EFA710;\n    --champagne: #E8D4C0;\n    --scallop-seashell: #DCAD90;\n    --red-orange: #FC2E20;\n    --underliner: rgba(61,61,60,0.2);\n    --darker-night: rgba(0, 0, 0, 0.6);   \n}\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n::placeholder{\n    color: var(--scallop-seashell);\n}\nhtml {\n    font-size: 10px;\n    font-family: 'M PLUS 1', sans-serif;\n}\nbody { \n    background-color: var(--champagne);\n    font-size: 2em;\n    margin: 0;\n}\n\n.fixed-nav{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    box-shadow: 0 2px rgb(0 0 0 / 20%);\n}\n\nnav {\n    background: var(--scallop-seashell);\n    top: 0;\n    width: 100%;\n    transition:all 0.5s;\n    position: relative;\n    z-index: 1;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n}\nnav li {\n    flex: 1;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--amber);\n}\nnav a {\n    text-decoration: none;\n    padding: 20px;\n    display: inline-block;\n    color: var(--burnt-orange);\n    transition: all 0.2s;\n    text-transform: uppercase;\n}\nli#nav-brandname {\n    max-width: 0;\n    overflow: hidden;\n    background: var(--burnt-orange);\n    transition: all 0.5s;\n    font-weight: 600;\n}\n.fixed-nav li#nav-brandname {\n    max-width: 400px;\n}\n\n#main {\n    color: var(--scallop-seashell);\n    height: 100vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: top center;\n    object-fit: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#homepage{\n    text-align: center;\n}\n\n#homepage__title{\n    margin: auto 0%;\n    letter-spacing: .2em;\n    font-size: 2em;\n    border-top: 3px solid whitesmoke;\n    border-bottom: 3px solid whitesmoke;\n\n}\n\n#contactpage{\n    border: 2px dashed var(--amber);\n    margin: auto 30%;\n    text-align: center;\n    padding: 0 10px;\n}\n#order-title{\n    font-size: 1.5em;\n    font-family: 'Comfortaa', cursive;\n    padding: 1% 0;\n}\n.order-input-style{\n    border: 4px solid var(--amber);\n    outline: 2px solid var(--amber);\n    outline-offset: 2px;\t\n    margin: 4% auto;\n    color: var(--scallop-seashell);\n}\n\ninput, select{\n    width: 100%;\n    background-color: inherit;\n    text-align: center;\n}\n\n#order-confirm-btn-style{\n    border: 4px solid var(--    );\n    outline: 2px solid var(--amber);\n    outline-offset: 2px;\n    max-width: 40%;\n    margin: 2% 30%;\n    background-color: var(--scallop-seashell);\n    color: var(--burnt-orange);\n    font-weight: bolder;\n}\n\n#menu-bg{\n    width: 100%;\n    height: 60vh;\n    object-fit: cover;\n}\n\n#food-menu{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 2em;\n    padding: 2em 5em;\n    border: 2px dashed var(--amber);\n}\n\n.food-group{\n    font-size: 1em;\n    font-weight: bold;\n}\n\n.menu-item {\n    font-size: .6em;\n    margin-bottom: 1em;\n}\n\n.menu_item__name{\n    display: grid;\n    grid-template-columns: max-content 1fr max-content; \n    grid-column-gap: .5em;\n}\n\n.menu_item__description{\n    font-style: oblique;\n    font-weight: 400;\n}\n\n.underline {\n    display: block;\n    width: 100%;\n    height: 1px;\n    margin-top: 1rem;\n    background-color: var(--underliner);\n}\n\n.menu-item:first-child {\n    margin-top: .5em;\n}\n\n.menu-item:last-child {\n    margin-bottom: 1.5em;\n}\n\n#order-now{\n    padding-top: 5%;\n    font-size: 2.5em;\n    font-style: oblique;\n    text-shadow: 5px 5px 2px var(--scallop-seashell);\n}\n\nfooter {\n    min-height: 10vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: var(--scallop-seashell);\n    color: var(--burnt-orange);\n}\n\n#footer__faq{\n    display: flex;\n    justify-content: space-between;\n    column-gap: 5%;\n}\n\n#footer__faq div {\n    font-size: .5em;\n}\n\n#social-list {\n    min-width: 5em;\n    list-style-type: none;\n    display: flex;\n    justify-content: space-between;\n    column-gap: 2em;\n}\n\n/* Media queries */\n/* Mobile: width < 740px */\n@media only screen and (max-width: 74em){\n    html {\n        font-size: 6px;\n    }\n    #food-menu{\n        grid-template-columns: 1fr;\n    }\n    #restaurant-contact__sb {\n        margin: auto 2em;\n    }\n    #store-fl-box{\n        flex-flow: row wrap;\n    }\n\n}   \n/* Tablet: 740px <= width < 1024px */\n@media only screen and (min-width:74em) and (max-width:102.4em){\n    html{\n        font-size: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --burnt-orange: #E36920;\n    --amber: #EFA710;\n    --champagne: #E8D4C0;\n    --scallop-seashell: #DCAD90;\n    --red-orange: #FC2E20;\n    --underliner: rgba(61,61,60,0.2);\n    --darker-night: rgba(0, 0, 0, 0.6);   \n}\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n::placeholder{\n    color: var(--scallop-seashell);\n}\nhtml {\n    font-size: 10px;\n    font-family: 'M PLUS 1', sans-serif;\n}\nbody { \n    background-color: var(--champagne);\n    font-size: 2em;\n    margin: 0;\n}\n\n.fixed-nav{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    box-shadow: 0 2px rgb(0 0 0 / 20%);\n}\n\nnav {\n    background: var(--scallop-seashell);\n    top: 0;\n    width: 100%;\n    transition:all 0.5s;\n    position: relative;\n    z-index: 1;\n}\n\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n}\nnav li {\n    flex: 1;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--amber);\n}\nnav a {\n    text-decoration: none;\n    padding: 20px;\n    display: inline-block;\n    color: var(--burnt-orange);\n    transition: all 0.2s;\n    text-transform: uppercase;\n}\nli#nav-brandname {\n    max-width: 0;\n    overflow: hidden;\n    background: var(--burnt-orange);\n    transition: all 0.5s;\n    font-weight: 600;\n}\n.fixed-nav li#nav-brandname {\n    max-width: 400px;\n}\n\n#main {\n    color: var(--scallop-seashell);\n    height: 100vh;\n    background-image: url('../images/sanwa-limbu.jpg');\n    background-size: cover;\n    background-position: top center;\n    object-fit: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#homepage{\n    text-align: center;\n}\n\n#homepage__title{\n    margin: auto 0%;\n    letter-spacing: .2em;\n    font-size: 2em;\n    border-top: 3px solid whitesmoke;\n    border-bottom: 3px solid whitesmoke;\n\n}\n\n#contactpage{\n    border: 2px dashed var(--amber);\n    margin: auto 30%;\n    text-align: center;\n    padding: 0 10px;\n}\n#order-title{\n    font-size: 1.5em;\n    font-family: 'Comfortaa', cursive;\n    padding: 1% 0;\n}\n.order-input-style{\n    border: 4px solid var(--amber);\n    outline: 2px solid var(--amber);\n    outline-offset: 2px;\t\n    margin: 4% auto;\n    color: var(--scallop-seashell);\n}\n\ninput, select{\n    width: 100%;\n    background-color: inherit;\n    text-align: center;\n}\n\n#order-confirm-btn-style{\n    border: 4px solid var(--    );\n    outline: 2px solid var(--amber);\n    outline-offset: 2px;\n    max-width: 40%;\n    margin: 2% 30%;\n    background-color: var(--scallop-seashell);\n    color: var(--burnt-orange);\n    font-weight: bolder;\n}\n\n#menu-bg{\n    width: 100%;\n    height: 60vh;\n    object-fit: cover;\n}\n\n#food-menu{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 2em;\n    padding: 2em 5em;\n    border: 2px dashed var(--amber);\n}\n\n.food-group{\n    font-size: 1em;\n    font-weight: bold;\n}\n\n.menu-item {\n    font-size: .6em;\n    margin-bottom: 1em;\n}\n\n.menu_item__name{\n    display: grid;\n    grid-template-columns: max-content 1fr max-content; \n    grid-column-gap: .5em;\n}\n\n.menu_item__description{\n    font-style: oblique;\n    font-weight: 400;\n}\n\n.underline {\n    display: block;\n    width: 100%;\n    height: 1px;\n    margin-top: 1rem;\n    background-color: var(--underliner);\n}\n\n.menu-item:first-child {\n    margin-top: .5em;\n}\n\n.menu-item:last-child {\n    margin-bottom: 1.5em;\n}\n\n#order-now{\n    padding-top: 5%;\n    font-size: 2.5em;\n    font-style: oblique;\n    text-shadow: 5px 5px 2px var(--scallop-seashell);\n}\n\nfooter {\n    min-height: 10vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: var(--scallop-seashell);\n    color: var(--burnt-orange);\n}\n\n#footer__faq{\n    display: flex;\n    justify-content: space-between;\n    column-gap: 5%;\n}\n\n#footer__faq div {\n    font-size: .5em;\n}\n\n#social-list {\n    min-width: 5em;\n    list-style-type: none;\n    display: flex;\n    justify-content: space-between;\n    column-gap: 2em;\n}\n\n/* Media queries */\n/* Mobile: width < 740px */\n@media only screen and (max-width: 74em){\n    html {\n        font-size: 6px;\n    }\n    #food-menu{\n        grid-template-columns: 1fr;\n    }\n    #restaurant-contact__sb {\n        margin: auto 2em;\n    }\n    #store-fl-box{\n        flex-flow: row wrap;\n    }\n\n}   \n/* Tablet: 740px <= width < 1024px */\n@media only screen and (min-width:74em) and (max-width:102.4em){\n    html{\n        font-size: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _modules_main_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main-loader */ "./src/modules/main-loader.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav */ "./src/modules/nav.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");




const content = document.querySelector('#content');

init();
function init(){
    (0,_modules_nav__WEBPACK_IMPORTED_MODULE_2__.createNav)();
    createMain();
    (0,_modules_footer__WEBPACK_IMPORTED_MODULE_3__.createFooter)();
    if (!location.hash)
    {
        location.hash = '#menu';
    } 
    (0,_modules_main_loader__WEBPACK_IMPORTED_MODULE_1__.loadMain)(); // get main content once the URI fragment is set
    window.addEventListener('hashchange', _modules_main_loader__WEBPACK_IMPORTED_MODULE_1__.loadMain);
}

function createMain(){
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);
}

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _restaurant_stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-stores */ "./src/modules/restaurant-stores.js");


var storeList = [_restaurant_stores__WEBPACK_IMPORTED_MODULE_0__.LeDuan01, _restaurant_stores__WEBPACK_IMPORTED_MODULE_0__.HamNghi77];

function loadContact(main){
    const contactpage = document.createElement('div');
    contactpage.setAttribute('id', 'contactpage');
    main.appendChild(contactpage);

    const upper = document.createElement('div');
    upper.setAttribute('id', 'order-title');
    upper.textContent = 'RESERVATION';
    contactpage.appendChild(upper);

    const form = document.createElement('form');
    contactpage.appendChild(form);

    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('align-items-center');
    form.appendChild(row);

    const nameColumn = document.createElement('div');
    nameColumn.classList.add('col-sm-6');
    nameColumn.innerHTML = `<input type="text" placeholder="Full name" class="order-input-style">`;
    row.appendChild(nameColumn);

    const phoneNumberColumn = document.createElement('div');
    phoneNumberColumn.classList.add('col-sm-6');
    phoneNumberColumn.innerHTML = `<input type="text" placeholder="Phone number" class="order-input-style">`;
    row.appendChild(phoneNumberColumn);

    const storeColumn = document.createElement('div');
    storeColumn.classList.add('col-sm-8');
    row.appendChild(storeColumn);
    const storeSelector = document.createElement('select');
    storeSelector.classList.add('order-input-style');
    storeSelector.innerHTML = storeList.map(item => `<option>${item.name}</option>`).join('');
    storeColumn.appendChild(storeSelector);
    
    const quantityColumn = document.createElement('div');
    quantityColumn.classList.add('col-sm-4');
    quantityColumn.innerHTML= `<input type="number" placeholder="Quantity" class="order-input-style">`;
    row.appendChild(quantityColumn);

    const dateColumn = document.createElement('div');
    dateColumn.classList.add('col-sm-6');
    dateColumn.innerHTML = `<input type="date" placeholder="DD/MM/YYYY" class="order-input-style">`;
    row.appendChild(dateColumn);

    const timeColumn = document.createElement('div');
    timeColumn.classList.add('col-sm-6');
    timeColumn.innerHTML = `<input type="text" placeholder="Time" class="order-input-style">`;
    row.appendChild(timeColumn);

    const confirmer = document.createElement('div');
    confirmer.innerHTML = `<input type="submit" value="CONFIRM" id="order-confirm-btn-style">`;
    form.appendChild(confirmer);

}   



/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
function loadSocialContainer(){
    const socialNav = document.createElement('div');

    const socialList = document.createElement('ul');
    socialList.setAttribute('id', 'social-list');
    socialNav.appendChild(socialList);

    const github = document.createElement('li');
    github.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>`;
    socialList.appendChild(github);

    const youtube = document.createElement('li');
    youtube.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>`;
    socialList.appendChild(youtube);

    const instagram = document.createElement('li');
    instagram.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg>`;
    socialList.appendChild(instagram);

    return socialNav;
}

function loadFAQContainer(){
    const faq = document.createElement('div');
    faq.setAttribute('id', 'footer__faq');

    const career = document.createElement('div');
    career.textContent = 'Career';
    faq.appendChild(career);

    const press = document.createElement('div');
    press.textContent = 'Press';
    faq.appendChild(press);

    const newsletter = document.createElement('div');
    newsletter.textContent = 'Newsletter';
    faq.appendChild(newsletter);

    return faq;
}

function loadAllRightsReserved(){
    const d = document.createElement('div');
    d.style.fontSize = '.5em';
    d.innerHTML = `<div>@ Copyright. All rights reserved</div>`;
    return d;
}

function createFooter(){
    const footer = document.createElement('footer');
    content.appendChild(footer);

    footer.appendChild(loadFAQContainer());
    footer.appendChild(loadAllRightsReserved());
    footer.appendChild(loadSocialContainer());
}



/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome(main){

    const homepage = document.createElement('div');
    homepage.setAttribute('id', 'homepage');
    main.appendChild(homepage);

    const homepageNote = document.createElement('div');
    homepageNote.setAttribute('id', 'homepage__note');
    homepage.appendChild(homepageNote);

    const established = document.createElement('div');
    established.textContent = 'EST. 2009';
    homepageNote.appendChild(established);     

    const homepageTitle = document.createElement('div');
    homepageTitle.setAttribute('id', 'homepage__title');
    homepageTitle.textContent = 'MOXU BISTRO';
    homepageNote.appendChild(homepageTitle);
    
    const homepageSubtitle = document.createElement('div');
    homepageSubtitle.setAttribute('id', 'homepage__subtitle');
    homepageSubtitle.textContent = 'AUTHENTIC VIETNAMESE CUISINE';
    homepageNote.appendChild(homepageSubtitle);
}



/***/ }),

/***/ "./src/modules/main-loader.js":
/*!************************************!*\
  !*** ./src/modules/main-loader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMain": () => (/* binding */ loadMain)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");





function loadMain(){
    const main = document.querySelector('#main');
    main.innerHTML = '';
    const fragmentID = location.hash.substr(1); // menu or contact or home
    switch (fragmentID){
        case 'home':
            (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(main);
            break;
        case 'menu':
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)(main);
            break;
        case 'contact':
            (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContact)(main);
            break;
        default:
            console.log('ERROR !!!');
    }
}









/***/ }),

/***/ "./src/modules/menu-items.js":
/*!***********************************!*\
  !*** ./src/modules/menu-items.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sandwich": () => (/* binding */ sandwich),
/* harmony export */   "soup": () => (/* binding */ soup),
/* harmony export */   "friedChicken": () => (/* binding */ friedChicken),
/* harmony export */   "blackBean": () => (/* binding */ blackBean),
/* harmony export */   "meatBall": () => (/* binding */ meatBall),
/* harmony export */   "brokenRice": () => (/* binding */ brokenRice),
/* harmony export */   "beanCurd": () => (/* binding */ beanCurd),
/* harmony export */   "snakeheadFish": () => (/* binding */ snakeheadFish),
/* harmony export */   "grilledPawn": () => (/* binding */ grilledPawn),
/* harmony export */   "grilledBanana": () => (/* binding */ grilledBanana)
/* harmony export */ });
class foodItem {
    constructor(name, category, price, description) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
    }
}

const sandwich = new foodItem(
    'Bánh mì pate', 
    'snack', 
    1, 
    'Famous Vietnamese sandwich with liver pate, cilantro and ham'
    );

const soup = new foodItem(
    'Phở',
    'main',
    4,
    'Beef noodle soup, sliced beef with herbs'
);

const friedChicken = new foodItem(
    'Cơm gà xối mỡ',
    'main',
    4,
    'Crispy fried chicken on a bed of colorful fried rice'
);

const blackBean = new foodItem(
    'Chè đậu đen thạch trân châu',
    'dessert',
    1.5,
    'Black beans stewed with sugar water, with pearls, black jelly...'
);

const meatBall = new foodItem(
    'Bánh mì xíu mại',
    'snack',
    2,
    'Vietnamese sandwich with meat balls in tomato sauce',

);  

const brokenRice = new foodItem(
    'Cơm Tấm Sài Gòn',
    'main',
    3,
    'The legendary and truly Saigon broken rice'
);

const beanCurd = new foodItem(
    'Tàu hủ nuớc đường gừng',
    'dessert',
    2,
    'Bean curd in ginger caramel sauce'
);

const snakeheadFish = new foodItem(
    'Cá lóc hấp bầu',
    'seafood',
    5,
    'Steamed snakehead fish with calabash'
);

const grilledPawn = new foodItem(
    'Tôm sú nướng sốt ngò xanh',
    'seafood',
    5,
    'Grilled pawn with green coriander sauce'
)

const grilledBanana = new foodItem(
    'Chuối bọc nếp nướng',
    'dessert',
    2,
    'Grilled banana in sticky rice'
)



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ "./src/modules/menu-items.js");



var mainCourseList = [], snackList = [], dessertList = [], seafoodList = []; // implement caching
[
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.sandwich, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.soup, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.friedChicken, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.blackBean, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.meatBall, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.brokenRice, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.beanCurd,
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.snakeheadFish,
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.grilledPawn,
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.grilledBanana,
    ].forEach(item => {
    let category = item.category;
    if(category == 'main') mainCourseList.push(item);
    else if(category == 'snack') snackList.push(item);
    else if(category == 'dessert') dessertList.push(item);
    else if(category == 'seafood') seafoodList.push(item);
})
function loadMenu(main){

    const menu = document.createElement('div');
    menu.setAttribute('id', 'food-menu');
    main.appendChild(menu);

    const mainCourseElement = document.createElement('div');
    mainCourseElement.setAttribute('id', 'menu__main-course');
    mainCourseElement.classList.add('food-group');
    mainCourseElement.textContent = 'Main';
    menu.appendChild(mainCourseElement);
    
    const dessertElement = document.createElement('div');
    dessertElement.setAttribute('id', 'menu__dessert');
    dessertElement.classList.add('food-group');
    dessertElement.textContent = 'Dessert   ';
    menu.appendChild(dessertElement);

    const snackElement = document.createElement('div');
    snackElement.setAttribute('id', 'menu__snack');
    snackElement.classList.add('food-group');
    snackElement.textContent = 'Snack';
    menu.appendChild(snackElement);

    const seafoodElement = document.createElement('div');
    seafoodElement.setAttribute('id', 'menu__seafood');
    seafoodElement.classList.add('food-group');
    seafoodElement.textContent = 'Seafood';
    menu.appendChild(seafoodElement);


    mainCourseList.forEach(item => {
        mainCourseElement.appendChild(loadMenuItem(item));
    });

    snackList.forEach(item => {
        snackElement.appendChild(loadMenuItem(item));
    });

    dessertList.forEach(item => {
        dessertElement.appendChild(loadMenuItem(item));
    }); 

    seafoodList.forEach(item => {
        seafoodElement.appendChild(loadMenuItem(item));
    });

    const orderNow = document.createElement('div');
    const inner = document.createElement('div');
    inner.textContent = 'ORDER NOW !!!';
    orderNow.appendChild(inner);
    orderNow.setAttribute('id', 'order-now');
    main.appendChild(orderNow);
}

function loadMenuItem(obj){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('div');
    foodName.classList.add('menu_item__name');
    foodName.innerHTML = `<span>${obj.name}</span><span class="underline"></span><span>$${obj.price}</span>`;

    const foodDescription = document.createElement('div');
    foodDescription.classList.add('menu_item__description');
    foodDescription.textContent = obj.description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}



/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav)
/* harmony export */ });
function createNav(){
    const navBar = document.createElement('nav');
    navBar.classList.add("fixed-nav");
    content.appendChild(navBar);

    const unorderList = document.createElement('ul');
    navBar.appendChild(unorderList);

    const brandname = document.createElement('li');
    brandname.setAttribute('id', 'nav-brandname');
    brandname.textContent = 'MOXU BISTRO';
    unorderList.appendChild(brandname);

    const home = createTab('home', '#home', 'Home');
    const contact = createTab('contact', '#contact', 'Contact');
    const menu = createTab('menu', '#menu', 'Menu');

    [home, menu, contact].forEach(e => unorderList.appendChild(e));
}

function createTab(id, href, textContent){
    const atag = document.createElement('a');
    atag.setAttribute('id', id);
    atag.setAttribute('href', href)
    atag.textContent = textContent;

    const div = document.createElement('li');
    div.appendChild(atag);
    
    return div;
};



/***/ }),

/***/ "./src/modules/restaurant-stores.js":
/*!******************************************!*\
  !*** ./src/modules/restaurant-stores.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeDuan01": () => (/* binding */ LeDuan01),
/* harmony export */   "HamNghi77": () => (/* binding */ HamNghi77)
/* harmony export */ });
class store {
    constructor(name, description, address, imgURL) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.imgURL = imgURL;
    }
}

const LeDuan01 = new store(
    'Moxu Bistro - Le Duan', 
    'Two separated areas: indoor and outdoor. Offered Vietnamese seasonal food. Ideal location for foreign tourists. Office lunch set is served with rice, main dishes, soup and dessert.',
    '01 Le Duan blvd, District 1, Ho Chi Minh city',
    'images/cater-yang.jpg'
    )

const HamNghi77 = new store(
    'Moxu Bistro - Ham Nghi',
    'The restaurant with lots of small open spaces surrounded by tropical trees. Perfect site for ceremonies, meetings and romantic events',
    '77 Ham Nghi street, District 1, Ho Chi Minh city',
    'images/murat-karahan.jpg'
)



/***/ }),

/***/ "./src/images/sanwa-limbu.jpg":
/*!************************************!*\
  !*** ./src/images/sanwa-limbu.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76be65064708762dbb88.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sZ0NBQWdDLDhCQUE4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QVk7QUFDaEIsSUFBSSxrREFBUztBQUNiLElBQUksaURBQVE7QUFDWixJQUFJLG1EQUFVO0FBQ2QsSUFBSSxpREFBUTtBQUNaLElBQUksc0RBQWE7QUFDakIsSUFBSSxvREFBVztBQUNmLElBQUksc0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUywrQ0FBK0MsVUFBVTs7QUFFcEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tYWluLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LWl0ZW1zLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3Jlc3RhdXJhbnQtc3RvcmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2Fud2EtbGltYnUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJ1cm50LW9yYW5nZTogI0UzNjkyMDtcXG4gICAgLS1hbWJlcjogI0VGQTcxMDtcXG4gICAgLS1jaGFtcGFnbmU6ICNFOEQ0QzA7XFxuICAgIC0tc2NhbGxvcC1zZWFzaGVsbDogI0RDQUQ5MDtcXG4gICAgLS1yZWQtb3JhbmdlOiAjRkMyRTIwO1xcbiAgICAtLXVuZGVybGluZXI6IHJnYmEoNjEsNjEsNjAsMC4yKTtcXG4gICAgLS1kYXJrZXItbmlnaHQ6IHJnYmEoMCwgMCwgMCwgMC42KTsgICBcXG59XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbjo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1zY2FsbG9wLXNlYXNoZWxsKTtcXG59XFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNIFBMVVMgMScsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhbXBhZ25lKTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmZpeGVkLW5hdntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCByZ2IoMCAwIDAgLyAyMCUpO1xcbn1cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zY2FsbG9wLXNlYXNoZWxsKTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjphbGwgMC41cztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbm5hdiBsaSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1hbWJlcik7XFxufVxcbm5hdiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1idXJudC1vcmFuZ2UpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxubGkjbmF2LWJyYW5kbmFtZSB7XFxuICAgIG1heC13aWR0aDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnVybnQtb3JhbmdlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5maXhlZC1uYXYgbGkjbmF2LWJyYW5kbmFtZSB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbiNtYWluIHtcXG4gICAgY29sb3I6IHZhcigtLXNjYWxsb3Atc2Vhc2hlbGwpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob21lcGFnZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jaG9tZXBhZ2VfX3RpdGxle1xcbiAgICBtYXJnaW46IGF1dG8gMCU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMmVtO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG4jY29udGFjdHBhZ2V7XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1hbWJlcik7XFxuICAgIG1hcmdpbjogYXV0byAzMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4jb3JkZXItdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMSUgMDtcXG59XFxuLm9yZGVyLWlucHV0LXN0eWxle1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hbWJlcik7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hbWJlcik7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XFx0XFxuICAgIG1hcmdpbjogNCUgYXV0bztcXG4gICAgY29sb3I6IHZhcigtLXNjYWxsb3Atc2Vhc2hlbGwpO1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jb3JkZXItY29uZmlybS1idG4tc3R5bGV7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLSAgICApO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYW1iZXIpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luOiAyJSAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjYWxsb3Atc2Vhc2hlbGwpO1xcbiAgICBjb2xvcjogdmFyKC0tYnVybnQtb3JhbmdlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI21lbnUtYmd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4jZm9vZC1tZW51e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMmVtO1xcbiAgICBwYWRkaW5nOiAyZW0gNWVtO1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYW1iZXIpO1xcbn1cXG5cXG4uZm9vZC1ncm91cHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAuNmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5tZW51X2l0ZW1fX25hbWV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50OyBcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAuNWVtO1xcbn1cXG5cXG4ubWVudV9pdGVtX19kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnVuZGVybGluZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVuZGVybGluZXIpO1xcbn1cXG5cXG4ubWVudS1pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogLjVlbTtcXG59XFxuXFxuLm1lbnUtaXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxufVxcblxcbiNvcmRlci1ub3d7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMnB4IHZhcigtLXNjYWxsb3Atc2Vhc2hlbGwpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhbGxvcC1zZWFzaGVsbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXJudC1vcmFuZ2UpO1xcbn1cXG5cXG4jZm9vdGVyX19mYXF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sdW1uLWdhcDogNSU7XFxufVxcblxcbiNmb290ZXJfX2ZhcSBkaXYge1xcbiAgICBmb250LXNpemU6IC41ZW07XFxufVxcblxcbiNzb2NpYWwtbGlzdCB7XFxuICAgIG1pbi13aWR0aDogNWVtO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sdW1uLWdhcDogMmVtO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuLyogTW9iaWxlOiB3aWR0aCA8IDc0MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NGVtKXtcXG4gICAgaHRtbCB7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgfVxcbiAgICAjZm9vZC1tZW51e1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG4gICAgI3Jlc3RhdXJhbnQtY29udGFjdF9fc2Ige1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIDJlbTtcXG4gICAgfVxcbiAgICAjc3RvcmUtZmwtYm94e1xcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgfVxcblxcbn0gICBcXG4vKiBUYWJsZXQ6IDc0MHB4IDw9IHdpZHRoIDwgMTAyNHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc0ZW0pIGFuZCAobWF4LXdpZHRoOjEwMi40ZW0pe1xcbiAgICBodG1se1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0FBQ3RDO0FBQ0E7OztJQUdJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSw4QkFB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QUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSjtBQUNBLG9DQUFvQztBQUNwQztJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1idXJudC1vcmFuZ2U6ICNFMzY5MjA7XFxuICAgIC0tYW1iZXI6ICNFRkE3MTA7XFxuICAgIC0tY2hhbXBhZ25lOiAjRThENEMwO1xcbiAgICAtLXNjYWxsb3Atc2Vhc2hlbGw6ICNEQ0FEOTA7XFxuICAgIC0tcmVkLW9yYW5nZTogI0ZDMkUyMDtcXG4gICAgLS11bmRlcmxpbmVyOiByZ2JhKDYxLDYxLDYwLDAuMik7XFxuICAgIC0tZGFya2VyLW5pZ2h0OiByZ2JhKDAsIDAsIDAsIDAuNik7ICAgXFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG46OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogdmFyKC0tc2NhbGxvcC1zZWFzaGVsbCk7XFxufVxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTSBQTFVTIDEnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYW1wYWduZSk7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5maXhlZC1uYXZ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggcmdiKDAgMCAwIC8gMjAlKTtcXG59XFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2NhbGxvcC1zZWFzaGVsbCk7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246YWxsIDAuNXM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5uYXYgbGkge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tYW1iZXIpO1xcbn1cXG5uYXYgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogdmFyKC0tYnVybnQtb3JhbmdlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbmxpI25hdi1icmFuZG5hbWUge1xcbiAgICBtYXgtd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1cm50LW9yYW5nZSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZml4ZWQtbmF2IGxpI25hdi1icmFuZG5hbWUge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1zY2FsbG9wLXNlYXNoZWxsKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc2Fud2EtbGltYnUuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvbWVwYWdle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNob21lcGFnZV9fdGl0bGV7XFxuICAgIG1hcmdpbjogYXV0byAwJTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4yZW07XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlc21va2U7XFxuXFxufVxcblxcbiNjb250YWN0cGFnZXtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWFtYmVyKTtcXG4gICAgbWFyZ2luOiBhdXRvIDMwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbiNvcmRlci10aXRsZXtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgICBwYWRkaW5nOiAxJSAwO1xcbn1cXG4ub3JkZXItaW5wdXQtc3R5bGV7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWFtYmVyKTtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFtYmVyKTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHRcXG4gICAgbWFyZ2luOiA0JSBhdXRvO1xcbiAgICBjb2xvcjogdmFyKC0tc2NhbGxvcC1zZWFzaGVsbCk7XFxufVxcblxcbmlucHV0LCBzZWxlY3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNvcmRlci1jb25maXJtLWJ0bi1zdHlsZXtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tICAgICk7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hbWJlcik7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAgIG1heC13aWR0aDogNDAlO1xcbiAgICBtYXJnaW46IDIlIDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NhbGxvcC1zZWFzaGVsbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXJudC1vcmFuZ2UpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jbWVudS1iZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbiNmb29kLW1lbnV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XFxuICAgIHBhZGRpbmc6IDJlbSA1ZW07XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1hbWJlcik7XFxufVxcblxcbi5mb29kLWdyb3Vwe1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBmb250LXNpemU6IC42ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLm1lbnVfaXRlbV9fbmFtZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7IFxcbiAgICBncmlkLWNvbHVtbi1nYXA6IC41ZW07XFxufVxcblxcbi5tZW51X2l0ZW1fX2Rlc2NyaXB0aW9ue1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udW5kZXJsaW5lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdW5kZXJsaW5lcik7XFxufVxcblxcbi5tZW51LWl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuI29yZGVyLW5vd3tcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAycHggdmFyKC0tc2NhbGxvcC1zZWFzaGVsbCk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY2FsbG9wLXNlYXNoZWxsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1cm50LW9yYW5nZSk7XFxufVxcblxcbiNmb290ZXJfX2ZhcXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2x1bW4tZ2FwOiA1JTtcXG59XFxuXFxuI2Zvb3Rlcl9fZmFxIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogLjVlbTtcXG59XFxuXFxuI3NvY2lhbC1saXN0IHtcXG4gICAgbWluLXdpZHRoOiA1ZW07XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2x1bW4tZ2FwOiAyZW07XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG4vKiBNb2JpbGU6IHdpZHRoIDwgNzQwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0ZW0pe1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICB9XFxuICAgICNmb29kLW1lbnV7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgICAjcmVzdGF1cmFudC1jb250YWN0X19zYiB7XFxuICAgICAgICBtYXJnaW46IGF1dG8gMmVtO1xcbiAgICB9XFxuICAgICNzdG9yZS1mbC1ib3h7XFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB9XFxuXFxufSAgIFxcbi8qIFRhYmxldDogNzQwcHggPD0gd2lkdGggPCAxMDI0cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzRlbSkgYW5kIChtYXgtd2lkdGg6MTAyLjRlbSl7XFxuICAgIGh0bWx7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7bG9hZE1haW59IGZyb20gJy4vbW9kdWxlcy9tYWluLWxvYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVOYXYgfSBmcm9tICcuL21vZHVsZXMvbmF2JztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmluaXQoKTtcbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBjcmVhdGVOYXYoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG4gICAgaWYgKCFsb2NhdGlvbi5oYXNoKVxuICAgIHtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjbWVudSc7XG4gICAgfSBcbiAgICBsb2FkTWFpbigpOyAvLyBnZXQgbWFpbiBjb250ZW50IG9uY2UgdGhlIFVSSSBmcmFnbWVudCBpcyBzZXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGxvYWRNYWluKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufSIsImltcG9ydCB7IExlRHVhbjAxLCBIYW1OZ2hpNzd9IGZyb20gJy4vcmVzdGF1cmFudC1zdG9yZXMnO1xuXG52YXIgc3RvcmVMaXN0ID0gW0xlRHVhbjAxLCBIYW1OZ2hpNzddO1xuXG5mdW5jdGlvbiBsb2FkQ29udGFjdChtYWluKXtcbiAgICBjb25zdCBjb250YWN0cGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdHBhZ2UnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RwYWdlKTtcblxuICAgIGNvbnN0IHVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci10aXRsZScpO1xuICAgIHVwcGVyLnRleHRDb250ZW50ID0gJ1JFU0VSVkFUSU9OJztcbiAgICBjb250YWN0cGFnZS5hcHBlbmRDaGlsZCh1cHBlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnRhY3RwYWdlLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICAgIG5hbWVDb2x1bW4uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCIgY2xhc3M9XCJvcmRlci1pbnB1dC1zdHlsZVwiPmA7XG4gICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaG9uZU51bWJlckNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICAgIHBob25lTnVtYmVyQ29sdW1uLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBob25lIG51bWJlclwiIGNsYXNzPVwib3JkZXItaW5wdXQtc3R5bGVcIj5gO1xuICAgIHJvdy5hcHBlbmRDaGlsZChwaG9uZU51bWJlckNvbHVtbik7XG5cbiAgICBjb25zdCBzdG9yZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3JlQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS04Jyk7XG4gICAgcm93LmFwcGVuZENoaWxkKHN0b3JlQ29sdW1uKTtcbiAgICBjb25zdCBzdG9yZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc3RvcmVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdvcmRlci1pbnB1dC1zdHlsZScpO1xuICAgIHN0b3JlU2VsZWN0b3IuaW5uZXJIVE1MID0gc3RvcmVMaXN0Lm1hcChpdGVtID0+IGA8b3B0aW9uPiR7aXRlbS5uYW1lfTwvb3B0aW9uPmApLmpvaW4oJycpO1xuICAgIHN0b3JlQ29sdW1uLmFwcGVuZENoaWxkKHN0b3JlU2VsZWN0b3IpO1xuICAgIFxuICAgIGNvbnN0IHF1YW50aXR5Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcXVhbnRpdHlDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTQnKTtcbiAgICBxdWFudGl0eUNvbHVtbi5pbm5lckhUTUw9IGA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUXVhbnRpdHlcIiBjbGFzcz1cIm9yZGVyLWlucHV0LXN0eWxlXCI+YDtcbiAgICByb3cuYXBwZW5kQ2hpbGQocXVhbnRpdHlDb2x1bW4pO1xuXG4gICAgY29uc3QgZGF0ZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTYnKTtcbiAgICBkYXRlQ29sdW1uLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkREL01NL1lZWVlcIiBjbGFzcz1cIm9yZGVyLWlucHV0LXN0eWxlXCI+YDtcbiAgICByb3cuYXBwZW5kQ2hpbGQoZGF0ZUNvbHVtbik7XG5cbiAgICBjb25zdCB0aW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGltZUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICAgIHRpbWVDb2x1bW4uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGltZVwiIGNsYXNzPVwib3JkZXItaW5wdXQtc3R5bGVcIj5gO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0aW1lQ29sdW1uKTtcblxuICAgIGNvbnN0IGNvbmZpcm1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNPTkZJUk1cIiBpZD1cIm9yZGVyLWNvbmZpcm0tYnRuLXN0eWxlXCI+YDtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1lcik7XG5cbn0gICBcblxuZXhwb3J0IHtsb2FkQ29udGFjdH07IiwiZnVuY3Rpb24gbG9hZFNvY2lhbENvbnRhaW5lcigpe1xuICAgIGNvbnN0IHNvY2lhbE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc29jaWFsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc29jaWFsTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NvY2lhbC1saXN0Jyk7XG4gICAgc29jaWFsTmF2LmFwcGVuZENoaWxkKHNvY2lhbExpc3QpO1xuXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBnaXRodWIuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWdpdGh1YlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICA8cGF0aCBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEyIDguMDEyIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCIvPlxuICA8L3N2Zz5gO1xuICAgIHNvY2lhbExpc3QuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcblxuICAgIGNvbnN0IHlvdXR1YmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHlvdXR1YmUuaW5uZXJIVE1MID0gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS15b3V0dWJlXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgIDxwYXRoIGQ9XCJNOC4wNTEgMS45OTloLjA4OWMuODIyLjAwMyA0Ljk4Ny4wMzMgNi4xMS4zMzVhMi4wMSAyLjAxIDAgMCAxIDEuNDE1IDEuNDJjLjEwMS4zOC4xNzIuODgzLjIyIDEuNDAybC4wMS4xMDQuMDIyLjI2LjAwOC4xMDRjLjA2NS45MTQuMDczIDEuNzcuMDc0IDEuOTU3di4wNzVjLS4wMDEuMTk0LS4wMSAxLjEwOC0uMDgyIDIuMDZsLS4wMDguMTA1LS4wMDkuMTA0Yy0uMDUuNTcyLS4xMjQgMS4xNC0uMjM1IDEuNTU4YTIuMDA3IDIuMDA3IDAgMCAxLTEuNDE1IDEuNDJjLTEuMTYuMzEyLTUuNTY5LjMzNC02LjE4LjMzNWgtLjE0MmMtLjMwOSAwLTEuNTg3LS4wMDYtMi45MjctLjA1MmwtLjE3LS4wMDYtLjA4Ny0uMDA0LS4xNzEtLjAwNy0uMTcxLS4wMDdjLTEuMTEtLjA0OS0yLjE2Ny0uMTI4LTIuNjU0LS4yNmEyLjAwNyAyLjAwNyAwIDAgMS0xLjQxNS0xLjQxOWMtLjExMS0uNDE3LS4xODUtLjk4Ni0uMjM1LTEuNTU4TC4wOSA5LjgybC0uMDA4LS4xMDRBMzEuNCAzMS40IDAgMCAxIDAgNy42OHYtLjEyM2MuMDAyLS4yMTUuMDEtLjk1OC4wNjQtMS43NzhsLjAwNy0uMTAzLjAwMy0uMDUyLjAwOC0uMTA0LjAyMi0uMjYuMDEtLjEwNGMuMDQ4LS41MTkuMTE5LTEuMDIzLjIyLTEuNDAyYTIuMDA3IDIuMDA3IDAgMCAxIDEuNDE1LTEuNDJjLjQ4Ny0uMTMgMS41NDQtLjIxIDIuNjU0LS4yNmwuMTctLjAwNy4xNzItLjAwNi4wODYtLjAwMy4xNzEtLjAwN0E5OS43ODggOTkuNzg4IDAgMCAxIDcuODU4IDJoLjE5M3pNNi40IDUuMjA5djQuODE4bDQuMTU3LTIuNDA4TDYuNCA1LjIwOXpcIi8+XG4gIDwvc3ZnPmA7XG4gICAgc29jaWFsTGlzdC5hcHBlbmRDaGlsZCh5b3V0dWJlKTtcblxuICAgIGNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaW5zdGFncmFtLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1pbnN0YWdyYW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiLz5cbiAgPC9zdmc+YDtcbiAgICBzb2NpYWxMaXN0LmFwcGVuZENoaWxkKGluc3RhZ3JhbSk7XG5cbiAgICByZXR1cm4gc29jaWFsTmF2O1xufVxuXG5mdW5jdGlvbiBsb2FkRkFRQ29udGFpbmVyKCl7XG4gICAgY29uc3QgZmFxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmFxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyX19mYXEnKTtcblxuICAgIGNvbnN0IGNhcmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmVlci50ZXh0Q29udGVudCA9ICdDYXJlZXInO1xuICAgIGZhcS5hcHBlbmRDaGlsZChjYXJlZXIpO1xuXG4gICAgY29uc3QgcHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmVzcy50ZXh0Q29udGVudCA9ICdQcmVzcyc7XG4gICAgZmFxLmFwcGVuZENoaWxkKHByZXNzKTtcblxuICAgIGNvbnN0IG5ld3NsZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdzbGV0dGVyLnRleHRDb250ZW50ID0gJ05ld3NsZXR0ZXInO1xuICAgIGZhcS5hcHBlbmRDaGlsZChuZXdzbGV0dGVyKTtcblxuICAgIHJldHVybiBmYXE7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxSaWdodHNSZXNlcnZlZCgpe1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkLnN0eWxlLmZvbnRTaXplID0gJy41ZW0nO1xuICAgIGQuaW5uZXJIVE1MID0gYDxkaXY+QCBDb3B5cmlnaHQuIEFsbCByaWdodHMgcmVzZXJ2ZWQ8L2Rpdj5gO1xuICAgIHJldHVybiBkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobG9hZEZBUUNvbnRhaW5lcigpKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobG9hZEFsbFJpZ2h0c1Jlc2VydmVkKCkpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsb2FkU29jaWFsQ29udGFpbmVyKCkpO1xufVxuXG5leHBvcnQge2NyZWF0ZUZvb3Rlcn07IiwiZnVuY3Rpb24gbG9hZEhvbWUobWFpbil7XG5cbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBhZ2UnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVwYWdlKTtcblxuICAgIGNvbnN0IGhvbWVwYWdlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlTm90ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwYWdlX19ub3RlJyk7XG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VOb3RlKTtcblxuICAgIGNvbnN0IGVzdGFibGlzaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXN0YWJsaXNoZWQudGV4dENvbnRlbnQgPSAnRVNULiAyMDA5JztcbiAgICBob21lcGFnZU5vdGUuYXBwZW5kQ2hpbGQoZXN0YWJsaXNoZWQpOyAgICAgXG5cbiAgICBjb25zdCBob21lcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZXBhZ2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwYWdlX190aXRsZScpO1xuICAgIGhvbWVwYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnTU9YVSBCSVNUUk8nO1xuICAgIGhvbWVwYWdlTm90ZS5hcHBlbmRDaGlsZChob21lcGFnZVRpdGxlKTtcbiAgICBcbiAgICBjb25zdCBob21lcGFnZVN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZXBhZ2VTdWJ0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwYWdlX19zdWJ0aXRsZScpO1xuICAgIGhvbWVwYWdlU3VidGl0bGUudGV4dENvbnRlbnQgPSAnQVVUSEVOVElDIFZJRVROQU1FU0UgQ1VJU0lORSc7XG4gICAgaG9tZXBhZ2VOb3RlLmFwcGVuZENoaWxkKGhvbWVwYWdlU3VidGl0bGUpO1xufVxuXG5leHBvcnQge2xvYWRIb21lfTsiLCJcbmltcG9ydCB7bG9hZEhvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGxvYWRNYWluKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBmcmFnbWVudElEID0gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSk7IC8vIG1lbnUgb3IgY29udGFjdCBvciBob21lXG4gICAgc3dpdGNoIChmcmFnbWVudElEKXtcbiAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICBsb2FkSG9tZShtYWluKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGxvYWRNZW51KG1haW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgbG9hZENvbnRhY3QobWFpbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiAhISEnKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7bG9hZE1haW59O1xuXG5cblxuXG5cbiIsImNsYXNzIGZvb2RJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjYXRlZ29yeSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5jb25zdCBzYW5kd2ljaCA9IG5ldyBmb29kSXRlbShcbiAgICAnQsOhbmggbcOsIHBhdGUnLCBcbiAgICAnc25hY2snLCBcbiAgICAxLCBcbiAgICAnRmFtb3VzIFZpZXRuYW1lc2Ugc2FuZHdpY2ggd2l0aCBsaXZlciBwYXRlLCBjaWxhbnRybyBhbmQgaGFtJ1xuICAgICk7XG5cbmNvbnN0IHNvdXAgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ1Bo4bufJyxcbiAgICAnbWFpbicsXG4gICAgNCxcbiAgICAnQmVlZiBub29kbGUgc291cCwgc2xpY2VkIGJlZWYgd2l0aCBoZXJicydcbik7XG5cbmNvbnN0IGZyaWVkQ2hpY2tlbiA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8ahbSBnw6AgeOG7kWkgbeG7oScsXG4gICAgJ21haW4nLFxuICAgIDQsXG4gICAgJ0NyaXNweSBmcmllZCBjaGlja2VuIG9uIGEgYmVkIG9mIGNvbG9yZnVsIGZyaWVkIHJpY2UnXG4pO1xuXG5jb25zdCBibGFja0JlYW4gPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0Now6ggxJHhuq11IMSRZW4gdGjhuqFjaCB0csOibiBjaMOidScsXG4gICAgJ2Rlc3NlcnQnLFxuICAgIDEuNSxcbiAgICAnQmxhY2sgYmVhbnMgc3Rld2VkIHdpdGggc3VnYXIgd2F0ZXIsIHdpdGggcGVhcmxzLCBibGFjayBqZWxseS4uLidcbik7XG5cbmNvbnN0IG1lYXRCYWxsID0gbmV3IGZvb2RJdGVtKFxuICAgICdCw6FuaCBtw6wgeMOtdSBt4bqhaScsXG4gICAgJ3NuYWNrJyxcbiAgICAyLFxuICAgICdWaWV0bmFtZXNlIHNhbmR3aWNoIHdpdGggbWVhdCBiYWxscyBpbiB0b21hdG8gc2F1Y2UnLFxuXG4pOyAgXG5cbmNvbnN0IGJyb2tlblJpY2UgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0PGoW0gVOG6pW0gU8OgaSBHw7JuJyxcbiAgICAnbWFpbicsXG4gICAgMyxcbiAgICAnVGhlIGxlZ2VuZGFyeSBhbmQgdHJ1bHkgU2FpZ29uIGJyb2tlbiByaWNlJ1xuKTtcblxuY29uc3QgYmVhbkN1cmQgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ1TDoHUgaOG7pyBudeG7m2MgxJHGsOG7nW5nIGfhu6tuZycsXG4gICAgJ2Rlc3NlcnQnLFxuICAgIDIsXG4gICAgJ0JlYW4gY3VyZCBpbiBnaW5nZXIgY2FyYW1lbCBzYXVjZSdcbik7XG5cbmNvbnN0IHNuYWtlaGVhZEZpc2ggPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0PDoSBsw7NjIGjhuqVwIGLhuqd1JyxcbiAgICAnc2VhZm9vZCcsXG4gICAgNSxcbiAgICAnU3RlYW1lZCBzbmFrZWhlYWQgZmlzaCB3aXRoIGNhbGFiYXNoJ1xuKTtcblxuY29uc3QgZ3JpbGxlZFBhd24gPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ1TDtG0gc8O6IG7GsOG7m25nIHPhu5F0IG5nw7IgeGFuaCcsXG4gICAgJ3NlYWZvb2QnLFxuICAgIDUsXG4gICAgJ0dyaWxsZWQgcGF3biB3aXRoIGdyZWVuIGNvcmlhbmRlciBzYXVjZSdcbilcblxuY29uc3QgZ3JpbGxlZEJhbmFuYSA9IG5ldyBmb29kSXRlbShcbiAgICAnQ2h14buRaSBi4buNYyBu4bq/cCBuxrDhu5tuZycsXG4gICAgJ2Rlc3NlcnQnLFxuICAgIDIsXG4gICAgJ0dyaWxsZWQgYmFuYW5hIGluIHN0aWNreSByaWNlJ1xuKVxuXG5leHBvcnQge1xuICAgIHNhbmR3aWNoLCBcbiAgICBzb3VwLCBcbiAgICBmcmllZENoaWNrZW4sIFxuICAgIGJsYWNrQmVhbiwgXG4gICAgbWVhdEJhbGwsIFxuICAgIGJyb2tlblJpY2UsIFxuICAgIGJlYW5DdXJkLFxuICAgIHNuYWtlaGVhZEZpc2gsXG4gICAgZ3JpbGxlZFBhd24sXG4gICAgZ3JpbGxlZEJhbmFuYVxufTsiLCJpbXBvcnQge1xuICAgIHNhbmR3aWNoLCBcbiAgICBzb3VwLCBcbiAgICBmcmllZENoaWNrZW4sIFxuICAgIGJsYWNrQmVhbiwgXG4gICAgbWVhdEJhbGwsIFxuICAgIGJyb2tlblJpY2UsIFxuICAgIGJlYW5DdXJkLFxuICAgIHNuYWtlaGVhZEZpc2gsXG4gICAgZ3JpbGxlZFBhd24sXG4gICAgZ3JpbGxlZEJhbmFuYVxufSBmcm9tICcuL21lbnUtaXRlbXMnO1xuXG5cbnZhciBtYWluQ291cnNlTGlzdCA9IFtdLCBzbmFja0xpc3QgPSBbXSwgZGVzc2VydExpc3QgPSBbXSwgc2VhZm9vZExpc3QgPSBbXTsgLy8gaW1wbGVtZW50IGNhY2hpbmdcbltcbiAgICBzYW5kd2ljaCwgXG4gICAgc291cCwgXG4gICAgZnJpZWRDaGlja2VuLCBcbiAgICBibGFja0JlYW4sIFxuICAgIG1lYXRCYWxsLCBcbiAgICBicm9rZW5SaWNlLCBcbiAgICBiZWFuQ3VyZCxcbiAgICBzbmFrZWhlYWRGaXNoLFxuICAgIGdyaWxsZWRQYXduLFxuICAgIGdyaWxsZWRCYW5hbmEsXG4gICAgXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgaWYoY2F0ZWdvcnkgPT0gJ21haW4nKSBtYWluQ291cnNlTGlzdC5wdXNoKGl0ZW0pO1xuICAgIGVsc2UgaWYoY2F0ZWdvcnkgPT0gJ3NuYWNrJykgc25hY2tMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnZGVzc2VydCcpIGRlc3NlcnRMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnc2VhZm9vZCcpIHNlYWZvb2RMaXN0LnB1c2goaXRlbSk7XG59KVxuZnVuY3Rpb24gbG9hZE1lbnUobWFpbil7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb2QtbWVudScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBjb25zdCBtYWluQ291cnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db3Vyc2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fbWFpbi1jb3Vyc2UnKTtcbiAgICBtYWluQ291cnNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgbWFpbkNvdXJzZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnTWFpbic7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtYWluQ291cnNlRWxlbWVudCk7XG4gICAgXG4gICAgY29uc3QgZGVzc2VydEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNzZXJ0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX2Rlc3NlcnQnKTtcbiAgICBkZXNzZXJ0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgZGVzc2VydEVsZW1lbnQudGV4dENvbnRlbnQgPSAnRGVzc2VydCAgICc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChkZXNzZXJ0RWxlbWVudCk7XG5cbiAgICBjb25zdCBzbmFja0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzbmFja0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19zbmFjaycpO1xuICAgIHNuYWNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgc25hY2tFbGVtZW50LnRleHRDb250ZW50ID0gJ1NuYWNrJztcbiAgICBtZW51LmFwcGVuZENoaWxkKHNuYWNrRWxlbWVudCk7XG5cbiAgICBjb25zdCBzZWFmb29kRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYWZvb2RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fc2VhZm9vZCcpO1xuICAgIHNlYWZvb2RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBzZWFmb29kRWxlbWVudC50ZXh0Q29udGVudCA9ICdTZWFmb29kJztcbiAgICBtZW51LmFwcGVuZENoaWxkKHNlYWZvb2RFbGVtZW50KTtcblxuXG4gICAgbWFpbkNvdXJzZUxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbWFpbkNvdXJzZUVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIHNuYWNrTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBzbmFja0VsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIGRlc3NlcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGRlc3NlcnRFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7IFxuXG4gICAgc2VhZm9vZExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgc2VhZm9vZEVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9yZGVyTm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lci50ZXh0Q29udGVudCA9ICdPUkRFUiBOT1cgISEhJztcbiAgICBvcmRlck5vdy5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgb3JkZXJOb3cuc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci1ub3cnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG9yZGVyTm93KTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVJdGVtKG9iail7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZE5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtX19uYW1lJyk7XG4gICAgZm9vZE5hbWUuaW5uZXJIVE1MID0gYDxzcGFuPiR7b2JqLm5hbWV9PC9zcGFuPjxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPjxzcGFuPiQke29iai5wcmljZX08L3NwYW4+YDtcblxuICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW1fX2Rlc2NyaXB0aW9uJyk7XG4gICAgZm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCB7bG9hZE1lbnV9OyIsImZ1bmN0aW9uIGNyZWF0ZU5hdigpe1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtbmF2XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIGNvbnN0IHVub3JkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodW5vcmRlckxpc3QpO1xuXG4gICAgY29uc3QgYnJhbmRuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBicmFuZG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduYXYtYnJhbmRuYW1lJyk7XG4gICAgYnJhbmRuYW1lLnRleHRDb250ZW50ID0gJ01PWFUgQklTVFJPJztcbiAgICB1bm9yZGVyTGlzdC5hcHBlbmRDaGlsZChicmFuZG5hbWUpO1xuXG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZVRhYignaG9tZScsICcjaG9tZScsICdIb21lJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZVRhYignY29udGFjdCcsICcjY29udGFjdCcsICdDb250YWN0Jyk7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZVRhYignbWVudScsICcjbWVudScsICdNZW51Jyk7XG5cbiAgICBbaG9tZSwgbWVudSwgY29udGFjdF0uZm9yRWFjaChlID0+IHVub3JkZXJMaXN0LmFwcGVuZENoaWxkKGUpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFiKGlkLCBocmVmLCB0ZXh0Q29udGVudCl7XG4gICAgY29uc3QgYXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhdGFnLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgYXRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKVxuICAgIGF0YWcudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGF0YWcpO1xuICAgIFxuICAgIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQge2NyZWF0ZU5hdn07IiwiY2xhc3Mgc3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBhZGRyZXNzLCBpbWdVUkwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB0aGlzLmltZ1VSTCA9IGltZ1VSTDtcbiAgICB9XG59XG5cbmNvbnN0IExlRHVhbjAxID0gbmV3IHN0b3JlKFxuICAgICdNb3h1IEJpc3RybyAtIExlIER1YW4nLCBcbiAgICAnVHdvIHNlcGFyYXRlZCBhcmVhczogaW5kb29yIGFuZCBvdXRkb29yLiBPZmZlcmVkIFZpZXRuYW1lc2Ugc2Vhc29uYWwgZm9vZC4gSWRlYWwgbG9jYXRpb24gZm9yIGZvcmVpZ24gdG91cmlzdHMuIE9mZmljZSBsdW5jaCBzZXQgaXMgc2VydmVkIHdpdGggcmljZSwgbWFpbiBkaXNoZXMsIHNvdXAgYW5kIGRlc3NlcnQuJyxcbiAgICAnMDEgTGUgRHVhbiBibHZkLCBEaXN0cmljdCAxLCBIbyBDaGkgTWluaCBjaXR5JyxcbiAgICAnaW1hZ2VzL2NhdGVyLXlhbmcuanBnJ1xuICAgIClcblxuY29uc3QgSGFtTmdoaTc3ID0gbmV3IHN0b3JlKFxuICAgICdNb3h1IEJpc3RybyAtIEhhbSBOZ2hpJyxcbiAgICAnVGhlIHJlc3RhdXJhbnQgd2l0aCBsb3RzIG9mIHNtYWxsIG9wZW4gc3BhY2VzIHN1cnJvdW5kZWQgYnkgdHJvcGljYWwgdHJlZXMuIFBlcmZlY3Qgc2l0ZSBmb3IgY2VyZW1vbmllcywgbWVldGluZ3MgYW5kIHJvbWFudGljIGV2ZW50cycsXG4gICAgJzc3IEhhbSBOZ2hpIHN0cmVldCwgRGlzdHJpY3QgMSwgSG8gQ2hpIE1pbmggY2l0eScsXG4gICAgJ2ltYWdlcy9tdXJhdC1rYXJhaGFuLmpwZydcbilcblxuZXhwb3J0IHtMZUR1YW4wMSwgSGFtTmdoaTc3fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=