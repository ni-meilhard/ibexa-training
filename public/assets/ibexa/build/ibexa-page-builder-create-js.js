(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-create-js"],{

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.create.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.create.js ***!
  \*****************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
(function (doc, React, ReactDOM, ibexa) {
  var SELECTOR_FIELD = '.ibexa-field-edit--ezlandingpage';
  var SELECTOR_INPUT = '.ibexa-data-source__input';
  var pageBuilderContainer = doc.querySelector('#ibexa-pb-app-root');
  var pageBuilderRoot = ReactDOM.createRoot(pageBuilderContainer);
  // eslint-disable-next-line
  var infobar = new ibexa.modules.InfoBar({
    isCreateMode: true
  });
  var pageBuilderConfig = _objectSpread(_objectSpread({}, ibexa.pageBuilder.config), {}, {
    isCreateMode: true
  });
  // eslint-disable-next-line
  var initValidators = function initValidators(pageBuilder) {
    var validator = new ibexa.EzLandingPageValidator({
      classInvalid: 'is-invalid',
      pageBuilder: pageBuilder,
      fieldSelector: SELECTOR_FIELD,
      eventsMap: [{
        selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT),
        eventName: 'change',
        callback: 'validateInput',
        errorNodeSelectors: ['.ibexa-field-edit__label-wrapper']
      }]
    });
    validator.init();
    ibexa.fieldTypeValidators = ibexa.fieldTypeValidators ? [].concat(_toConsumableArray(ibexa.fieldTypeValidators), [validator]) : [validator];
  };
  pageBuilderRoot.render(React.createElement(ibexa.modules.PageBuilder, _objectSpread(_objectSpread({}, pageBuilderConfig), {}, {
    ref: initValidators
  })));
})(window.document, window.React, window.ReactDOM, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.create.js"));
/******/ }
]);