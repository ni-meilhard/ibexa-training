(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-parts-javascript-js"],{

/***/ "./public/bundles/ibexaadminuiassets/vendors/react-dom/client.js":
/*!***********************************************************************!*\
  !*** ./public/bundles/ibexaadminuiassets/vendors/react-dom/client.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function (c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function (c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ICON_NAME_MAP = {
  info: 'system-information',
  error: 'circle-close',
  warning: 'warning-triangle',
  success: 'checkbox'
};
var Alert = function Alert(_ref) {
  var _createCssClassNames;
  var type = _ref.type,
    title = _ref.title,
    subtitle = _ref.subtitle,
    iconNameProp = _ref.iconName,
    iconPath = _ref.iconPath,
    showSubtitleBelow = _ref.showSubtitleBelow,
    showCloseBtn = _ref.showCloseBtn,
    onClose = _ref.onClose,
    extraClasses = _ref.extraClasses,
    children = _ref.children;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)((_createCssClassNames = {
    'alert ibexa-alert': true
  }, _defineProperty(_createCssClassNames, "ibexa-alert--".concat(type), true), _defineProperty(_createCssClassNames, extraClasses, true), _createCssClassNames));
  var contentClassName = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'ibexa-alert__content': true,
    'ibexa-alert__content--subtitle-below': showSubtitleBelow
  });
  var iconName = undefined;
  if (!iconPath) {
    iconName = iconNameProp ? iconNameProp : ICON_NAME_MAP[type];
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: iconName,
    customPath: iconPath,
    extraClasses: "ibexa-icon--small ibexa-alert__icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: contentClassName
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-alert__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-alert__subtitle"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-alert__extra_content"
  }, children)), showCloseBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text ibexa-alert__close-btn",
    type: "button",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--tiny-small"
  })));
};
Alert.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  iconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  iconPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  showSubtitleBelow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)
};
Alert.defaultProps = {
  title: null,
  subtitle: null,
  iconName: null,
  iconPath: null,
  showSubtitleBelow: false,
  showCloseBtn: false,
  onClose: function onClose() {},
  extraClasses: '',
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCssClassNames": () => (/* binding */ createCssClassNames)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }
  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      condition = _ref2[1];
    return "".concat(total, " ").concat(condition ? name : '');
  }, '').trim();
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var Icon = function Icon(props) {
  var linkHref = props.customPath ? props.customPath : window.ibexa.helpers.icon.getIconPath(props.name);
  var className = 'ibexa-icon';
  if (props.extraClasses) {
    className = "".concat(className, " ").concat(props.extraClasses);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: linkHref
  }));
};
Icon.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _window = window,
  Translator = _window.Translator;
var CLASS_NON_SCROLLABLE = 'ibexa-non-scrollable';
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};
var MODAL_SIZE_CLASS = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg'
};
var Popup = /*#__PURE__*/function (_Component) {
  _inherits(Popup, _Component);
  var _super = _createSuper(Popup);
  function Popup(props) {
    var _this;
    _classCallCheck(this, Popup);
    _this = _super.call(this, props);
    _this._refModal = null;
    _this.setModalRef = _this.setModalRef.bind(_assertThisInitialized(_this));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_this));
    _this.state = {
      currentProps: {
        isVisible: props.isVisible,
        isLoading: props.isLoading
      },
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    return _this;
  }
  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        noKeyboard = _this$props.noKeyboard,
        hasFocus = _this$props.hasFocus;
      var show = this.state.isVisible;
      if (show) {
        var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
          keyboard: !noKeyboard,
          focus: hasFocus
        }));
        bootstrapModal.show();
        this.attachModalEventHandlers();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var show = this.state.isVisible;
      var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
        focus: this.props.hasFocus
      }));
      if (show) {
        bootstrapModal.show();
        this.attachModalEventHandlers();
      } else {
        bootstrapModal.hide();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.bootstrap.Modal.getOrCreateInstance(this._refModal).hide();
      document.body.classList.remove(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
    }
  }, {
    key: "attachModalEventHandlers",
    value: function attachModalEventHandlers() {
      this._refModal.addEventListener('keyup', this.onKeyUp);
      this._refModal.addEventListener('hidden.bs.modal', this.props.onClose);
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var originalEvent = event.originalEvent;
      var escKeyCode = 27;
      var escKeyPressed = originalEvent && (originalEvent.which === escKeyCode || originalEvent.keyCode === escKeyCode);
      if (escKeyPressed) {
        this.props.onClose();
      }
    }
  }, {
    key: "setModalRef",
    value: function setModalRef(component) {
      this._refModal = component;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'modal-header c-popup__header'
      }, this.renderHeadline(), this.renderCloseButton());
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      if (this.props.noCloseBtn) {
        return;
      }
      var closeBtnLabel = Translator.trans( /*@Desc("Close")*/'popup.close.label', {}, 'universal_discovery_widget');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "close c-popup__btn--close",
        "data-bs-dismiss": "modal",
        "aria-label": closeBtnLabel,
        onClick: this.props.onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "discard",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "renderHeadline",
    value: function renderHeadline() {
      var title = this.props.title;
      if (!title) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "modal-title c-popup__headline",
        title: this.props.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-popup__title"
      }, this.props.title), this.renderSubtitle());
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var subtitle = this.props.subtitle;
      if (!subtitle) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-popup__subtitle"
      }, subtitle);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var footerChildren = this.props.footerChildren;
      if (!footerChildren) {
        return;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'modal-footer c-popup__footer'
      }, footerChildren);
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      var _this$props2 = this.props,
        additionalClasses = _this$props2.additionalClasses,
        size = _this$props2.size,
        noHeader = _this$props2.noHeader,
        extraClasses = _this$props2.extraClasses;
      var modalAttrs = {
        className: "c-popup modal fade ".concat(extraClasses),
        ref: this.setModalRef,
        tabIndex: this.props.hasFocus ? -1 : undefined
      };
      document.body.classList.toggle(CLASS_MODAL_OPEN, isVisible);
      document.body.classList.toggle(CLASS_NON_SCROLLABLE, isVisible);
      if (additionalClasses) {
        modalAttrs.className = "".concat(modalAttrs.className, " ").concat(additionalClasses);
      }
      if (noHeader) {
        modalAttrs.className = "".concat(modalAttrs.className, " c-popup--no-header");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", modalAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-dialog c-popup__dialog ".concat(MODAL_SIZE_CLASS[size]),
        role: "dialog"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-content c-popup__content"
      }, noHeader ? this.renderCloseButton() : this.renderHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-body c-popup__body"
      }, this.props.children), this.renderFooter())));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isVisible !== prevState.currentProps.isVisible || nextProps.isLoading !== prevState.currentProps.isLoading) {
        return {
          currentProps: {
            isVisible: nextProps.isVisible,
            isLoading: nextProps.isLoading
          },
          isVisible: nextProps.isVisible,
          isLoading: nextProps.isLoading
        };
      }
      return null;
    }
  }]);
  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Popup.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  additionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  footerChildren: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  noHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noKeyboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Popup.defaultProps = {
  isVisible: false,
  isLoading: true,
  hasFocus: true,
  size: 'large',
  noHeader: false,
  noCloseBtn: false,
  noKeyboard: false,
  extraClasses: '',
  title: null,
  subtitle: null,
  additionalClasses: null,
  footerChildren: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SimpleDropdown = function SimpleDropdown(_ref) {
  var options = _ref.options,
    selectedOption = _ref.selectedOption,
    extraClasses = _ref.extraClasses,
    onOptionClick = _ref.onOptionClick,
    isDisabled = _ref.isDisabled,
    selectedItemLabel = _ref.selectedItemLabel;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var dropdownClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-simple-dropdown': true,
    'c-simple-dropdown--expanded': isExpanded,
    'c-simple-dropdown--disabled': isDisabled
  }, extraClasses, true));
  var toggleExpanded = function toggleExpanded() {
    if (isDisabled) {
      return;
    }
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  };
  var onOptionClickWrapper = function onOptionClickWrapper(option) {
    onOptionClick(option);
    setIsExpanded(false);
  };
  var renderItem = function renderItem(item) {
    var isItemSelected = item.value === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
    var itemClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-simple-dropdown__list-item': true,
      'c-simple-dropdown__list-item--selected': isItemSelected
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.value,
      className: itemClass,
      onClick: function onClick() {
        return onOptionClickWrapper(item);
      }
    }, item.iconName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: item.iconName,
      extraClasses: "c-simple-dropdown__list-item-type-icon ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.label), isItemSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__list-item-checkmark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "checkmark",
      extraClasses: "c-simple-dropdown__list-item-checkmark-icon ibexa-icon--tiny-small"
    })));
  };
  var renderCaretIcon = function renderCaretIcon() {
    var iconName = isExpanded ? 'caret-up' : 'caret-down';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: "ibexa-icon--tiny-small c-simple-dropdown__expand-icon"
    });
  };
  var renderSelectedLabel = function renderSelectedLabel() {
    if (!selectedOption && !!selectedItemLabel) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-simple-dropdown__selected-item-label"
    }, selectedItemLabel.length ? selectedItemLabel : selectedOption.label);
  };
  var renderSelectedIcon = function renderSelectedIcon() {
    if (!selectedOption || !selectedOption.iconName) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: selectedOption.iconName,
      extraClasses: "ibexa-icon--small c-simple-dropdown__selected-item-type-icon"
    });
  };
  var renderSelectedItem = function renderSelectedItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__selected",
      onClick: toggleExpanded
    }, renderSelectedIcon(), renderSelectedLabel(), renderCaretIcon());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpanded) {
      return;
    }
    var onInteractionOutside = function onInteractionOutside(event) {
      if (containerRef.current.contains(event.target)) {
        return;
      }
      setIsExpanded(false);
    };
    document.body.addEventListener('click', onInteractionOutside, false);
    return function () {
      document.body.removeEventListener('click', onInteractionOutside, false);
    };
  }, [isExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: dropdownClass,
    ref: containerRef
  }, renderSelectedItem(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-simple-dropdown__items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-simple-dropdown__list-items"
  }, options.map(renderItem))));
};
SimpleDropdown.propTypes = {
  options: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  selectedOption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onOptionClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectedItemLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
SimpleDropdown.defaultProps = {
  isDisabled: false,
  extraClasses: '',
  selectedItemLabel: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDropdown);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
(function (global, doc, ibexa, Translator) {
  ibexa.EzLandingPageValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid) {
    "use strict";

    _inherits(EzLandingPageValidator, _ibexa$BaseFieldValid);
    var _super = _createSuper(EzLandingPageValidator);
    function EzLandingPageValidator(config) {
      var _this;
      _classCallCheck(this, EzLandingPageValidator);
      _this = _super.call(this, config);
      _this.pageBuilder = config.pageBuilder;
      return _this;
    }

    /**
     * Validates the input field value
     *
     * @method validateInput
     * @returns {Object}
     * @memberof EzLandingPageValidator
     */
    _createClass(EzLandingPageValidator, [{
      key: "validateInput",
      value: function validateInput() {
        var isValid = this.pageBuilder.validateAllBlocksData();
        var errorMessage = Translator.trans( /*@Desc("Some blocks are missing configuration")*/'fieldtype.landing_page.missing_proper_configuration.error.message', {}, 'page_builder');
        return {
          isError: !isValid,
          errorMessage: errorMessage
        };
      }
    }]);
    return EzLandingPageValidator;
  }(ibexa.BaseFieldValidator);
  ibexa.EzLandingPageLayoutValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid2) {
    "use strict";

    _inherits(EzLandingPageLayoutValidator, _ibexa$BaseFieldValid2);
    var _super2 = _createSuper(EzLandingPageLayoutValidator);
    function EzLandingPageLayoutValidator(config) {
      var _this2;
      _classCallCheck(this, EzLandingPageLayoutValidator);
      _this2 = _super2.call(this, config);
      _this2.pageBuilder = config.pageBuilder;
      return _this2;
    }
    _createClass(EzLandingPageLayoutValidator, [{
      key: "validateLayout",
      value: function validateLayout() {
        var isValidLayout = this.pageBuilder.validateLayoutData();
        var errorMessage = Translator.trans( /*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'layout_selector.error.label', {}, 'page_builder');
        return {
          isError: !isValidLayout,
          errorMessage: errorMessage
        };
      }
    }]);
    return EzLandingPageLayoutValidator;
  }(ibexa.BaseFieldValidator);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js":
/*!*****************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js ***!
  \*****************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function (global, doc, ibexa) {
  global.ibexa = global.ibexa || {
    modules: {}
  };
  var CLASS_PREVIEW_ACTION_SELECTED = 'ibexa-btn--selected';
  var CLASS_DROPDOWN_EXPANDED = 'ibexa-dropdown--expanded';
  var CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_WITH_BACKDROP = 'ibexa-with-backdrop';
  var CLASS_DROPDOWN_SWITCHER = 'ibexa-dropdown__switcher';
  var SELECTOR_DROPDOWN = '.ibexa-dropdown';
  var SELECTOR_ICON_CHECKBOX = '.ibexa-checkbox-icon__checkbox';
  var SELECTOR_EXTRA_ACTIONS_EDIT = '.ibexa-extra-actions--page-edit';
  var SELECTOR_EXTRA_ACTIONS_CREATE = '.ibexa-extra-actions--page-create';
  var SELECTOR_EXTRA_ACTIONS_WRAPPER = '.ibexa-page-info-bar__create-content-wrapper';
  var SELECTOR_STANDARD_ACTIONS_WRAPPER = '.ibexa-page-info-bar__actions';
  var PREVIEW_WIDTH_MAP = {
    desktop: '100%',
    tablet: '1280px',
    mobile: '800px'
  };
  global.ibexa.modules.InfoBar = /*#__PURE__*/function () {
    "use strict";

    function InfoBar() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$containerSelecto = _ref.containerSelector,
        containerSelector = _ref$containerSelecto === void 0 ? '.ibexa-pb-infobar' : _ref$containerSelecto,
        _ref$isCreateMode = _ref.isCreateMode,
        isCreateMode = _ref$isCreateMode === void 0 ? false : _ref$isCreateMode;
      _classCallCheck(this, InfoBar);
      this.container = doc.querySelector(containerSelector);
      this.isCreateMode = isCreateMode;
      this.subMenuBackdrop = null;
      this.contentActionSwitcher = this.container.querySelector('.ibexa-pb-action-bar__content-action-switcher');
      this.contentModeSwitcher = this.container.querySelector('.ibexa-pb-action-bar__content-mode-switcher');
      this.previewSwitcher = this.container.querySelector('.ibexa-preview-switcher');
      this.createContentBtnWrapper = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_WRAPPER);
      this.standardActionsWrapper = this.container.querySelector(SELECTOR_STANDARD_ACTIONS_WRAPPER);
      this.editActionsWrapper = this.standardActionsWrapper ? this.standardActionsWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_EDIT) : null;
      this.contentUrl = this.container.querySelector('.ibexa-pb-content-action-info__url');
      this.contentLanguage = this.container.querySelector('.ibexa-pb-content-action-info__language-name');
      this.contentAuthor = this.container.querySelector('.ibexa-content-details__author');
      this.contentModificationDate = this.container.querySelector('.ibexa-content-details__modified-date');
      if (this.previewSwitcher) {
        this.previewActions = _toConsumableArray(this.previewSwitcher.querySelectorAll('.ibexa-preview-switcher__action'));
      }
      if (this.createContentBtnWrapper) {
        this.dropdownSwitcher = this.createContentBtnWrapper.querySelector('.ibexa-dropdown__switcher');
        this.createContentBtn = this.createContentBtnWrapper.querySelector('.ibexa-pb-action-bar__create-content');
      }
      this.redirectToAction = this.redirectToAction.bind(this);
      this.showVersionLanguagePicker = this.showVersionLanguagePicker.bind(this);
      this.hideVersionLanguagePicker = this.hideVersionLanguagePicker.bind(this);
      this.toggleContentMode = this.toggleContentMode.bind(this);
      this.changePreviewMode = this.changePreviewMode.bind(this);
      this.showPreviewExtraActions = this.showPreviewExtraActions.bind(this);
      this.hidePreviewExtraActions = this.hidePreviewExtraActions.bind(this);
      this.toggleEditExtraActions = this.toggleEditExtraActions.bind(this);
      this.showEditExtraActions = this.showEditExtraActions.bind(this);
      this.hideEditExtraActions = this.hideEditExtraActions.bind(this);
      this.removeSubMenuBackdrop = this.removeSubMenuBackdrop.bind(this);
      this.onDraftConflictModalCancel = this.onDraftConflictModalCancel.bind(this);
      this.onVersionLanguagePickerBackdropClick = this.onVersionLanguagePickerBackdropClick.bind(this);
      this.attachEventListeners();
    }
    _createClass(InfoBar, [{
      key: "attachEventListeners",
      value: function attachEventListeners() {
        var _this = this;
        if (!this.isCreateMode && this.contentActionSwitcher) {
          this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.redirectToAction, false);
        }
        if (this.contentModeSwitcher) {
          this.contentModeSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.toggleContentMode, false);
        }
        if (this.previewActions) {
          this.previewActions.forEach(function (action) {
            return action.addEventListener('click', _this.changePreviewMode, false);
          });
        }
        if (this.dropdownSwitcher) {
          this.dropdownSwitcher.addEventListener('click', this.toggleEditExtraActions, false);
        }
        if (this.createContentBtn) {
          this.createContentBtn.addEventListener('click', this.showPreviewExtraActions, false);
          var extraActions = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
          if (extraActions) {
            this.attachSubmitEvent(extraActions);
          }
        }
        doc.body.addEventListener('ibexa-draft-conflict-modal-hidden', this.onDraftConflictModalCancel, false);
      }
    }, {
      key: "attachSubmitEvent",
      value: function attachSubmitEvent(actions) {
        var form = actions.querySelector('form');
        var radioBtns = _toConsumableArray(actions.querySelectorAll('.form-check [type="radio"]'));
        radioBtns.forEach(function (btn) {
          return btn.addEventListener('change', function () {
            form.submit();
          }, false);
        });
      }
    }, {
      key: "redirectToAction",
      value: function redirectToAction(event) {
        var dataset = event.currentTarget.dataset;
        if (this.contentActionSwitcher.classList.contains('disabled')) {
          return;
        }
        this.toggleSwitcherState(this.contentActionSwitcher);
        if (!dataset.urlPreview) {
          this.showVersionLanguagePicker();
        } else {
          global.location.href = dataset.urlPreview;
        }
      }
    }, {
      key: "addSubMenuBackdrop",
      value: function addSubMenuBackdrop(eventHandler) {
        if (this.subMenuBackdrop) {
          return;
        }
        this.subMenuBackdrop = doc.createElement('div');
        this.subMenuBackdrop.classList.add('ibexa-backdrop');
        this.subMenuBackdrop.addEventListener('click', eventHandler, false);
        doc.body.appendChild(this.subMenuBackdrop);
      }
    }, {
      key: "removeSubMenuBackdrop",
      value: function removeSubMenuBackdrop(eventHandler) {
        if (!this.subMenuBackdrop) {
          return;
        }
        this.subMenuBackdrop.removeEventListener('click', eventHandler);
        doc.body.removeChild(this.subMenuBackdrop);
        this.subMenuBackdrop = null;
      }
    }, {
      key: "toggleContentMode",
      value: function toggleContentMode() {
        this.toggleSwitcherState(this.contentModeSwitcher);
        ibexa.helpers.tooltips.hideAll();
      }
    }, {
      key: "toggleSwitcherState",
      value: function toggleSwitcherState(switcher) {
        switcher.classList.toggle('is-checked');
      }
    }, {
      key: "toggleEditActions",
      value: function toggleEditActions(show) {
        this.editActionsWrapper.classList.toggle(CLASS_WITH_BACKDROP, show);
        this.editActionsWrapper.classList.toggle(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN, !show);
      }
    }, {
      key: "changePreviewMode",
      value: function changePreviewMode(event) {
        this.previewActions.forEach(function (action) {
          return action.classList.remove(CLASS_PREVIEW_ACTION_SELECTED);
        });
        event.currentTarget.classList.add(CLASS_PREVIEW_ACTION_SELECTED);
        var type = event.currentTarget.dataset.previewMode;
        doc.querySelector('#page-builder-preview').style = "width: ".concat(PREVIEW_WIDTH_MAP[type], ";");
        ibexa.helpers.tooltips.hideAll();
      }
    }, {
      key: "onDraftConflictModalCancel",
      value: function onDraftConflictModalCancel() {
        this.hideVersionLanguagePicker();
      }
    }, {
      key: "showVersionLanguagePicker",
      value: function showVersionLanguagePicker() {
        if (this.editActionsWrapper.classList.contains('ibexa-extra-actions--prevent-show')) {
          var languageRadioOption = this.editActionsWrapper.querySelector('[type="radio"]');
          languageRadioOption.checked = true;
          languageRadioOption.dispatchEvent(new CustomEvent('change'));
          return;
        }
        this.toggleEditActions(true);
        this.addSubMenuBackdrop(this.onVersionLanguagePickerBackdropClick);
      }
    }, {
      key: "onVersionLanguagePickerBackdropClick",
      value: function onVersionLanguagePickerBackdropClick(_ref2) {
        var target = _ref2.target;
        var wrapper = target.closest(SELECTOR_STANDARD_ACTIONS_WRAPPER);
        if (wrapper) {
          return;
        }
        this.hideVersionLanguagePicker();
      }
    }, {
      key: "hideVersionLanguagePicker",
      value: function hideVersionLanguagePicker() {
        var switcher = this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX);
        this.toggleEditActions(false);
        switcher.checked = false;
        this.toggleSwitcherState(this.contentActionSwitcher);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "showPreviewExtraActions",
      value: function showPreviewExtraActions() {
        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.remove(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "hidePreviewExtraActions",
      value: function hidePreviewExtraActions(_ref3) {
        var target = _ref3.target;
        var wrapper = target.closest(SELECTOR_EXTRA_ACTIONS_WRAPPER);
        if (wrapper) {
          return;
        }
        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.add(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.remove(CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "toggleEditExtraActions",
      value: function toggleEditExtraActions(event) {
        var isExpanded = event.target.classList.contains(CLASS_DROPDOWN_EXPANDED) || event.target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));
        if (isExpanded) {
          this.hideEditExtraActions(event);
        } else {
          this.showEditExtraActions();
        }
      }
    }, {
      key: "showEditExtraActions",
      value: function showEditExtraActions() {
        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.add(CLASS_DROPDOWN_EXPANDED);
        dropdown.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hideEditExtraActions);
      }
    }, {
      key: "hideEditExtraActions",
      value: function hideEditExtraActions(_ref4) {
        var target = _ref4.target;
        var isDropdown = target.classList.contains(CLASS_DROPDOWN_EXPANDED) || target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));
        var isDropdownSwitcher = target.classList.contains(CLASS_DROPDOWN_SWITCHER);
        if (isDropdown && !isDropdownSwitcher) {
          return;
        }
        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.remove(CLASS_DROPDOWN_EXPANDED, CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hideEditExtraActions);
      }
    }]);
    return InfoBar;
  }();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc) {
  var configPanels = _toConsumableArray(doc.querySelectorAll('.ibexa-pb-config-panel'));
  var adjustConfigPanelFooterShadow = function adjustConfigPanelFooterShadow(configPanel) {
    var configPanelBody = configPanel.querySelector('.ibexa-pb-config-panel__body');
    if (!configPanelBody) {
      return;
    }
    var isScrollVisible = configPanelBody.scrollHeight > configPanelBody.clientHeight;
    var scrolledToBottom = configPanelBody.offsetHeight + configPanelBody.scrollTop === configPanelBody.scrollHeight;
    var showShadow = isScrollVisible && !scrolledToBottom;
    configPanelBody.classList.toggle('ibexa-pb-config-panel__body--with-shadow', showShadow);
  };
  var adjustAllConfigPanelsFooterShadow = function adjustAllConfigPanelsFooterShadow() {
    configPanels.forEach(adjustConfigPanelFooterShadow);
  };
  var attachConfigPanelEventListeners = function attachConfigPanelEventListeners(configPanel) {
    var configPanelBody = configPanel.querySelector('.ibexa-pb-config-panel__body');
    if (!configPanelBody) {
      return;
    }
    configPanelBody.addEventListener('scroll', adjustConfigPanelFooterShadow.bind(null, configPanel), false);
  };
  var handleNewConfigPanelsAdded = function handleNewConfigPanelsAdded() {
    var currentConfigPanels = _toConsumableArray(doc.querySelectorAll('.ibexa-pb-config-panel'));
    var newConfigPanels = currentConfigPanels.filter(function (configPanel) {
      return !configPanels.includes(configPanel);
    });
    newConfigPanels.forEach(attachConfigPanelEventListeners);
    adjustAllConfigPanelsFooterShadow();
    configPanels = currentConfigPanels;
  };
  configPanels.forEach(attachConfigPanelEventListeners);
  global.addEventListener('resize', adjustAllConfigPanelsFooterShadow, false);
  adjustAllConfigPanelsFooterShadow();
  doc.addEventListener('ibexa-pb-config-panel-added', handleNewConfigPanelsAdded, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js ***!
  \*******************************************************************************************************/
/***/ (() => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
(function (global, doc) {
  var _openedConfigPanelSet;
  var CONFIG_PANEL_SIDE_LEFT = 'LEFT';
  var CONFIG_PANEL_SIDE_RIGHT = 'RIGHT';
  var openedConfigPanelSettings = (_openedConfigPanelSet = {}, _defineProperty(_openedConfigPanelSet, CONFIG_PANEL_SIDE_LEFT, null), _defineProperty(_openedConfigPanelSet, CONFIG_PANEL_SIDE_RIGHT, null), _openedConfigPanelSet);
  var getSide = function getSide(event) {
    var _event$detail$side$to, _event$detail, _event$detail$side;
    return (_event$detail$side$to = (_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : (_event$detail$side = _event$detail.side) === null || _event$detail$side === void 0 ? void 0 : _event$detail$side.toUpperCase()) !== null && _event$detail$side$to !== void 0 ? _event$detail$side$to : CONFIG_PANEL_SIDE_LEFT;
  };
  var closeConfigPanel = function closeConfigPanel(side) {
    if (openedConfigPanelSettings[side]) {
      var wasConfigPanelClosed = openedConfigPanelSettings[side].onClose();
      if (wasConfigPanelClosed) {
        openedConfigPanelSettings[side] = null;
      }
      return wasConfigPanelClosed;
    }
    return true;
  };
  var openConfigPanel = function openConfigPanel(configPanelSettings, side) {
    var wasPrevConfigPanelClosed = closeConfigPanel(side);
    if (wasPrevConfigPanelClosed) {
      var _configPanelSettings$, _configPanelSettings$2;
      var wasNewConfigPanelOpened = (_configPanelSettings$ = configPanelSettings === null || configPanelSettings === void 0 ? void 0 : (_configPanelSettings$2 = configPanelSettings.onOpen) === null || _configPanelSettings$2 === void 0 ? void 0 : _configPanelSettings$2.call(configPanelSettings)) !== null && _configPanelSettings$ !== void 0 ? _configPanelSettings$ : true;
      if (wasNewConfigPanelOpened) {
        openedConfigPanelSettings[side] = configPanelSettings;
      }
    } else {
      var _configPanelSettings$3;
      configPanelSettings === null || configPanelSettings === void 0 ? void 0 : (_configPanelSettings$3 = configPanelSettings.onAbort) === null || _configPanelSettings$3 === void 0 ? void 0 : _configPanelSettings$3.call(configPanelSettings);
    }
    return wasPrevConfigPanelClosed;
  };
  var handleConfigPanelClose = function handleConfigPanelClose(event) {
    var side = getSide(event);
    var configPanelsClosed = closeConfigPanel(side);
    if (!configPanelsClosed) {
      event.preventDefault();
    }
  };
  var handleConfigPanelCloseItself = function handleConfigPanelCloseItself(event) {
    var side = getSide(event);
    openedConfigPanelSettings[side] = null;
  };
  var handleConfigPanelOpen = function handleConfigPanelOpen(event) {
    var _event$detail2;
    var side = getSide(event);
    var configPanelSettings = (_event$detail2 = event.detail) === null || _event$detail2 === void 0 ? void 0 : _event$detail2.settings;
    var configPanelsOpened = openConfigPanel(configPanelSettings, side);
    if (!configPanelsOpened) {
      event.preventDefault();
    }
  };
  doc.addEventListener('ibexa-pb-config-panel-open', handleConfigPanelOpen, false);
  doc.addEventListener('ibexa-pb-config-panel-close', handleConfigPanelClose, false);
  doc.addEventListener('ibexa-pb-config-panel-close-itself', handleConfigPanelCloseItself, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js ***!
  \******************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var EXCLUDED_VALIDATOR_NAMES = ['EzLandingPageValidator', 'EzLandingPageLayoutValidator'];
  var fieldsConfigPanel = doc.querySelector('.ibexa-pb-fields-config-panel');
  var fieldsConfigPanelTogglerBtn = doc.querySelector('.ibexa-btn--show-fields');
  var isFieldsConfigPanelOpenedAtStartup = fieldsConfigPanelTogglerBtn.classList.contains('ibexa-btn--selected');
  var openConfigPanel = function openConfigPanel() {
    fieldsConfigPanelTogglerBtn.classList.toggle('ibexa-btn--selected');
    fieldsConfigPanel.classList.toggle('ibexa-pb-config-panel--closed');
    return true;
  };
  var closeConfigPanel = function closeConfigPanel() {
    fieldsConfigPanel.classList.add('ibexa-pb-config-panel--closed');
    fieldsConfigPanelTogglerBtn.classList.remove('ibexa-btn--selected');
    return true;
  };
  var toggleFieldsConfigPanel = function toggleFieldsConfigPanel() {
    var isConfigPanelClosed = fieldsConfigPanel.classList.contains('ibexa-pb-config-panel--closed');
    if (isConfigPanelClosed) {
      var wasConfigPanelOpened = doc.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
        cancelable: true,
        detail: {
          settings: {
            onOpen: openConfigPanel,
            onClose: closeConfigPanel
          }
        }
      }));
      if (wasConfigPanelOpened) {
        ibexa.helpers.tooltips.hideAll();
      }
    } else {
      doc.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
      closeConfigPanel();
    }
  };
  fieldsConfigPanelTogglerBtn.addEventListener('click', toggleFieldsConfigPanel, false);
  if (isFieldsConfigPanelOpenedAtStartup) {
    doc.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
      cancelable: true,
      detail: {
        settings: {
          onOpen: function onOpen() {},
          onClose: closeConfigPanel,
          onAbort: closeConfigPanel
        }
      }
    }));
  }
  doc.body.addEventListener('ibexa-form-builder:before-open', function () {
    fieldsConfigPanel.classList.add('ibexa-pb-fields-config-panel--full-screen-field-opened');
  }, false);
  doc.body.addEventListener('ibexa-form-builder:before-close', function () {
    fieldsConfigPanel.classList.remove('ibexa-pb-fields-config-panel--full-screen-field-opened');
  }, false);
  doc.body.addEventListener('ibexa-pb:validation:other-field-types', function (event) {
    var isValid = event.detail.isValid;
    fieldsConfigPanelTogglerBtn.classList.toggle('ibexa-btn--error', !isValid);
  }, false);
  doc.body.addEventListener('ibexa-inputs-validation:change-state', function () {
    var isFormValid = true;
    ibexa.fieldTypeValidators.forEach(function (validator) {
      var validatorName = validator.constructor.name;
      var isValidatorExcluded = EXCLUDED_VALIDATOR_NAMES.includes(validatorName);
      if (!isValidatorExcluded) {
        var fieldsToValidate = validator.fieldsToValidate,
          fieldSelector = validator.fieldSelector;
        fieldsToValidate.forEach(function (fieldToValidate) {
          var fieldContainer = fieldToValidate.item.closest(fieldSelector);
          var hasContainerErrorClass = fieldContainer.classList.contains('is-invalid');
          var hasInvalidNodes = !!fieldContainer.querySelectorAll('.is-invalid').length;
          if (hasContainerErrorClass || hasInvalidNodes) {
            isFormValid = false;
          }
        });
      }
    });
    fieldsConfigPanelTogglerBtn.classList.toggle('ibexa-btn--error', !isFormValid);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.publish.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.publish.js ***!
  \******************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc, ibexa, Translator) {
  var VALIDATOR_NAME_PAGE = 'EzLandingPageValidator';
  var VALIDATOR_NAME_PAGE_LAYOUT = 'EzLandingPageLayoutValidator';
  var form = doc.querySelector('.ibexa-form-validate');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
  submitBtns.forEach(function (btn) {
    var clickHandler = function clickHandler() {
      var isFormError = !parseInt(btn.dataset.isFormValid, 10);
      if (!isFormError) {
        return;
      }
      var validatorsWithErrors = btn.dataset.validatorsWithErrors.split(',');
      var isPageLayoutError = validatorsWithErrors.includes(VALIDATOR_NAME_PAGE_LAYOUT);
      var isPageFieldTypeError = validatorsWithErrors.includes(VALIDATOR_NAME_PAGE);
      var otherInvalidFieldTypes = _toConsumableArray(validatorsWithErrors);
      var pageFieldTypeIndex = otherInvalidFieldTypes.indexOf(VALIDATOR_NAME_PAGE);
      if (pageFieldTypeIndex > -1) {
        otherInvalidFieldTypes.splice(pageFieldTypeIndex, 1);
      }
      var pageLayoutTypeIndex = otherInvalidFieldTypes.indexOf(VALIDATOR_NAME_PAGE_LAYOUT);
      if (pageLayoutTypeIndex > -1) {
        otherInvalidFieldTypes.splice(pageLayoutTypeIndex, 1);
      }
      var otherFieldTypesInvalid = !!otherInvalidFieldTypes.length;
      if (otherFieldTypesInvalid) {
        var pageFieldTypeErrorMessage = Translator.trans( /*@Desc("Fields error")*/'infobar.form.error.message', {}, 'ezplatform_page_builder_infobar');
        ibexa.helpers.notification.showErrorNotification(pageFieldTypeErrorMessage);
      }
      if (isPageLayoutError) {
        var pageLayoutErrorMessage = Translator.trans( /*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'infobar.page.layout.error.label', {}, 'ezplatform_page_builder_infobar');
        ibexa.helpers.notification.showErrorNotification(pageLayoutErrorMessage);
      }
      if (isPageFieldTypeError) {
        var _pageFieldTypeErrorMessage = Translator.trans( /*@Desc("Update missing configuration in the Block view")*/'infobar.page.field.type.error.message', {}, 'ezplatform_page_builder_infobar');
        ibexa.helpers.notification.showErrorNotification(_pageFieldTypeErrorMessage);
      }
      doc.body.dispatchEvent(new CustomEvent('ibexa-pb:validation:other-field-types', {
        detail: {
          isValid: !otherFieldTypesInvalid
        }
      }));
      doc.body.dispatchEvent(new CustomEvent('ibexa-pb:validation:layout', {
        detail: {
          isValid: !isPageLayoutError
        }
      }));
    };
    btn.addEventListener('click', clickHandler, false);
  });
})(window, document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/backdrop/backdrop.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/backdrop/backdrop.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Backdrop = function Backdrop(_ref) {
  var extraClasses = _ref.extraClasses,
    isOpen = _ref.isOpen;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-backdrop': true
  }, extraClasses, true));
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  });
};
Backdrop.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Backdrop.defaultProps = {
  extraClasses: '',
  isOpen: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Backdrop);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ConfigPanelBody = function ConfigPanelBody(_ref) {
  var children = _ref.children,
    extraClasses = _ref.extraClasses;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-pb-config-panel__body': true
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, children);
};
ConfigPanelBody.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ConfigPanelBody.defaultProps = {
  children: null,
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPanelBody);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ConfigPanelFooter = function ConfigPanelFooter(_ref) {
  var children = _ref.children,
    extraClasses = _ref.extraClasses;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-pb-config-panel__footer': true
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, children);
};
ConfigPanelFooter.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ConfigPanelFooter.defaultProps = {
  children: null,
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPanelFooter);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_PANEL_TYPE_LEFT": () => (/* binding */ CONFIG_PANEL_TYPE_LEFT),
/* harmony export */   "CONFIG_PANEL_TYPE_RIGHT": () => (/* binding */ CONFIG_PANEL_TYPE_RIGHT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _backdrop_backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../backdrop/backdrop */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/backdrop/backdrop.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CONFIG_PANEL_TYPE_LEFT = 'CONFIG_PANEL_TYPE_LEFT';
var CONFIG_PANEL_TYPE_RIGHT = 'CONFIG_PANEL_TYPE_RIGHT';
var ConfigPanel = function ConfigPanel(_ref) {
  var extraClasses = _ref.extraClasses,
    type = _ref.type,
    children = _ref.children,
    title = _ref.title,
    onCancel = _ref.onCancel,
    showCloseBtn = _ref.showCloseBtn,
    isClosed = _ref.isClosed,
    isWithBackdrop = _ref.isWithBackdrop,
    backdropContainer = _ref.backdropContainer,
    hasBackBtn = _ref.hasBackBtn;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)(_defineProperty({
    'ibexa-pb-config-panel': true,
    'ibexa-pb-config-panel--closed': isClosed,
    'ibexa-pb-config-panel--left': type === CONFIG_PANEL_TYPE_LEFT,
    'ibexa-pb-config-panel--right': type === CONFIG_PANEL_TYPE_RIGHT,
    'ibexa-pb-config-panel--with-backdrop': isWithBackdrop
  }, extraClasses, true));
  var headerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
    'ibexa-pb-config-panel__header': true,
    'ibexa-pb-config-panel__header--with-back-btn': hasBackBtn
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-added'));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: headerClassName
  }, hasBackBtn && showCloseBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--tertiary ibexa-btn--no-text ibexa-pb-config-panel__back-btn",
    onClick: onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "back",
    extraClasses: "ibexa-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-pb-config-panel__headline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ibexa-pb-config-panel__title"
  }, title)), !hasBackBtn && showCloseBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text ibexa-pb-config-panel__close-btn",
    onClick: onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--small"
  }))), children), isWithBackdrop && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_backdrop_backdrop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    extraClasses: "ibexa-pb-config-panel__backdrop",
    isOpen: !isClosed
  }), backdropContainer || document.body));
};
ConfigPanel.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  showCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isWithBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  hasBackBtn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  backdropContainer: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};
ConfigPanel.defaultProps = {
  extraClasses: '',
  type: CONFIG_PANEL_TYPE_LEFT,
  children: null,
  title: null,
  showCloseBtn: true,
  isClosed: false,
  isWithBackdrop: false,
  hasBackBtn: false,
  backdropContainer: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _window = window,
  Translator = _window.Translator;
var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_PLACEHOLDER_REMOVING = 'droppable-placeholder--removing';
var SELECTOR_ZONE = '[data-ibexa-zone-id]';
var PLACEHOLDER_POSITION_TOP = 'top';
var TIMEOUT_REMOVE_PLACEHOLDERS = 500;
var DragDrop = /*#__PURE__*/function (_Component) {
  _inherits(DragDrop, _Component);
  var _super = _createSuper(DragDrop);
  function DragDrop(props) {
    var _this;
    _classCallCheck(this, DragDrop);
    _this = _super.call(this, props);
    _this.onDragOverTimeout = null;
    _this.placeholderRemovalTimeout = null;
    _this.getElement = _this.getElement.bind(_assertThisInitialized(_this));
    _this.getInitDragDropState = _this.getInitDragDropState.bind(_assertThisInitialized(_this));
    _this.scrollContainer = _this.scrollContainer.bind(_assertThisInitialized(_this));
    _this.removePlaceholderWithAnimation = _this.removePlaceholderWithAnimation.bind(_assertThisInitialized(_this));
    _this.removePlaceholderWithoutAnimation = _this.removePlaceholderWithoutAnimation.bind(_assertThisInitialized(_this));
    _this.createPlaceholder = _this.createPlaceholder.bind(_assertThisInitialized(_this));
    _this.insertAfter = _this.insertAfter.bind(_assertThisInitialized(_this));
    _this.insertBefore = _this.insertBefore.bind(_assertThisInitialized(_this));
    _this.addPlaceholderBesideElement = _this.addPlaceholderBesideElement.bind(_assertThisInitialized(_this));
    _this.addPlaceholderInZone = _this.addPlaceholderInZone.bind(_assertThisInitialized(_this));
    _this.removePlaceholders = _this.removePlaceholders.bind(_assertThisInitialized(_this));
    _this.removePlaceholdersAfterTimeout = _this.removePlaceholdersAfterTimeout.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Finds next element identifier
   *
   * @method findNextElementIdentifier
   * @param {HTMLElement} placeholder
   * @param {String} elementIdentifier
   * @returns {String|null}
   */
  _createClass(DragDrop, [{
    key: "findNextElementIdentifier",
    value: function findNextElementIdentifier(placeholder, elementIdentifier) {
      if (placeholder.dataset.position === PLACEHOLDER_POSITION_TOP) {
        return placeholder.dataset[elementIdentifier];
      }
      return placeholder.nextElementSibling ? placeholder.nextElementSibling.dataset[elementIdentifier] : null;
    }

    /**
     * Removes placeholders
     *
     * @method removePlaceholders
     * @param {NodeList|Array} placeholders
     * @param {Function} removePlaceholderCallback
     */
  }, {
    key: "removePlaceholders",
    value: function removePlaceholders(placeholders, removePlaceholderCallback) {
      placeholders.forEach(removePlaceholderCallback);
    }

    /**
     * Removes a placeholder node without removal animation
     *
     * @method removePlaceholderWithoutAnimation
     * @param {HTMLElement} placeholder
     */
  }, {
    key: "removePlaceholderWithoutAnimation",
    value: function removePlaceholderWithoutAnimation(placeholder) {
      window.clearTimeout(this.placeholderRemovalTimeout);
      window.clearTimeout(this.onDragOverTimeout);
      if (!placeholder || !placeholder.parentNode) {
        return;
      }
      placeholder.parentNode.removeChild(placeholder);
    }

    /**
     * Removes a placeholder with removal animation
     *
     * @method removePlaceholderWithAnimation
     * @param {HTMLElement} placeholder
     */
  }, {
    key: "removePlaceholderWithAnimation",
    value: function removePlaceholderWithAnimation(placeholder) {
      var _this2 = this;
      placeholder.classList.add(CLASS_PLACEHOLDER_REMOVING);
      window.clearTimeout(this.placeholderRemovalTimeout);
      window.clearTimeout(this.onDragOverTimeout);
      this.placeholderRemovalTimeout = window.setTimeout(function () {
        return _this2.removePlaceholderWithoutAnimation(placeholder);
      }, TIMEOUT_REMOVE_PLACEHOLDERS);
    }

    /**
     * Rremoves a placeholder node after a timeout
     *
     * @method removePlaceholdersAfterTimeout
     * @param {Function} onTimeout
     */
  }, {
    key: "removePlaceholdersAfterTimeout",
    value: function removePlaceholdersAfterTimeout(getPlaceholderNodes, onTimeout) {
      var _this3 = this;
      window.clearTimeout(this.onDragOverTimeout);
      this.onDragOverTimeout = window.setTimeout(function () {
        _this3.removePlaceholders(getPlaceholderNodes(), _this3.removePlaceholderWithAnimation);
        onTimeout();
      }, TIMEOUT_REMOVE_PLACEHOLDERS);
    }

    /**
     * Adds a placeholder node beside element (above or below)
     *
     * @method addPlaceholderBesideElement
     * @param {HTMLElement} element
     * @param {Number} positionY
     * @param {NodeList|Array} placeholders
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @param {Function} onElementDragOver
     * @returns {Object}
     */
  }, {
    key: "addPlaceholderBesideElement",
    value: function addPlaceholderBesideElement(element, positionY, placeholders, elementIdentifier, onElementDragOver, _ref) {
      var placeholderPosition = _ref.placeholderPosition,
        placeholderElementId = _ref.placeholderElementId,
        placeholderZoneId = _ref.placeholderZoneId;
      var placeholder = this.createPlaceholder(element, elementIdentifier, onElementDragOver);
      var rect = element.getBoundingClientRect();
      var middlePositionY = rect.top + rect.height / 2;
      var position = positionY <= middlePositionY ? PLACEHOLDER_POSITION_TOP : 'bottom';
      var placehoderExists = placeholderPosition === position && placeholderElementId === placeholder.dataset[elementIdentifier] && placeholderZoneId === placeholder.dataset.ibexaZoneId;
      if (placehoderExists) {
        return {
          placeholderPosition: placeholderPosition,
          placeholderElementId: placeholderElementId,
          placeholderZoneId: placeholderZoneId
        };
      }
      this.removePlaceholders(placeholders, this.removePlaceholderWithoutAnimation);
      placeholder.dataset.position = position;
      if (position === PLACEHOLDER_POSITION_TOP) {
        this.insertBefore(element, placeholder);
      } else {
        this.insertAfter(element, placeholder);
      }
      return {
        placeholderElementId: placeholder.dataset[elementIdentifier],
        placeholderZoneId: placeholder.dataset.ibexaZoneId,
        placeholderPosition: position
      };
    }

    /**
     * Add a placeholder node inside a zone
     *
     * @method addPlaceholderInZone
     * @param {HTMLElement} zone
     * @param {NodeList|Array} placeholders
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @param {Function} onElementDragOver
     */
  }, {
    key: "addPlaceholderInZone",
    value: function addPlaceholderInZone(zone, placeholders, elementIdentifier, onElementDragOver) {
      var placeholder = this.createPlaceholder(zone, elementIdentifier, onElementDragOver);
      this.removePlaceholders(placeholders, this.removePlaceholderWithoutAnimation);
      zone.appendChild(placeholder);
    }

    /**
     * Inserts a node before a target node
     *
     * @method insertBefore
     * @param {HTMLElement} where
     * @param {HTMLElement} what
     */
  }, {
    key: "insertBefore",
    value: function insertBefore(where, what) {
      if (where && where.parentNode) {
        where.parentNode.insertBefore(what, where);
      }
    }

    /**
     * Inserts a node after a target node
     *
     * @method insertAfter
     * @param {HTMLElement} where
     * @param {HTMLElement} what
     */
  }, {
    key: "insertAfter",
    value: function insertAfter(where, what) {
      if (where && where.parentNode) {
        where.parentNode.insertBefore(what, where.nextSibling);
      }
    }

    /**
     * Create a placeholder node
     *
     * @method createPlaceholder
     * @param {HTMLElement} element
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @returns {HTMLElement}
     */
  }, {
    key: "createPlaceholder",
    value: function createPlaceholder(element, elementIdentifier) {
      var placeholder = document.createElement('div');
      var dropHereMessage = Translator.trans( /*@Desc("Drop block here")*/'drop.block.here', {}, 'page_builder');
      placeholder.classList.add(CLASS_PLACEHOLDER);
      if (element.dataset[elementIdentifier]) {
        placeholder.dataset[elementIdentifier] = element.dataset[elementIdentifier];
      }
      placeholder.dataset.zoneId = element.dataset.zoneId ? element.dataset.zoneId : element.closest(SELECTOR_ZONE).dataset.ibexaZoneId;
      placeholder.dataset.dropHereMessage = dropHereMessage;
      return placeholder;
    }

    /**
     * Scroll container
     *
     * @method scrollContainer
     * @param {Event} event
     * @param {Number} event.clientY
     * @param {HTMLElement} container
     */
  }, {
    key: "scrollContainer",
    value: function scrollContainer(_ref2, container) {
      var clientY = _ref2.clientY;
      var diffSize = 50;
      if (container.innerHeight - clientY < diffSize) {
        container.scrollBy(0, 10);
      } else if (clientY < diffSize) {
        container.scrollBy(0, -10);
      }
    }

    /**
     * Gets an element recursively that matches a callback action comparison
     *
     * @method getElement
     * @param {HTMLElement} element
     * @param {Function} checkIsCorrect comparison check callback
     * @returns {HTMLElement|undefined}
     */
  }, {
    key: "getElement",
    value: function getElement(element, checkIsCorrect) {
      var parent = element.parentNode;
      if (!parent) {
        return undefined;
      }
      if (checkIsCorrect(element)) {
        return element;
      }
      return checkIsCorrect(parent) ? parent : this.getElement(parent, checkIsCorrect);
    }

    /**
     * Returns initial drag & drop state
     *
     * @method getInitDragDropState
     * @returns {Object}
     */
  }, {
    key: "getInitDragDropState",
    value: function getInitDragDropState() {
      return {
        draggedSidebarElementType: null,
        dragOverZoneId: null,
        placeholderType: null,
        placeholderElementId: null,
        placeholderZoneId: null,
        placeholderPosition: null
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.render({
        getElement: this.getElement,
        getInitDragDropState: this.getInitDragDropState,
        scrollContainer: this.scrollContainer,
        removePlaceholderWithAnimation: this.removePlaceholderWithAnimation,
        removePlaceholderWithoutAnimation: this.removePlaceholderWithoutAnimation,
        insertAfter: this.insertAfter,
        insertBefore: this.insertBefore,
        removePlaceholders: this.removePlaceholders,
        addPlaceholderBesideElement: this.addPlaceholderBesideElement,
        addPlaceholderInZone: this.addPlaceholderInZone,
        removePlaceholdersAfterTimeout: this.removePlaceholdersAfterTimeout,
        findNextElementIdentifier: this.findNextElementIdentifier
      });
    }
  }]);
  return DragDrop;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
DragDrop.propTypes = {
  render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DragDrop);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Generates a GUID string.
 *
 * @function generateGuid
 * @param prefix {String} the id prefix
 * @return {String} The generated GUID.
 *
 * @example b-af8a8416-6e18-a307-bd9c-f2c947bbb3aa
 * @author Slavik Meltser (http://slavik.meltser.info/?p=142)
 */
var generateGuid = function generateGuid() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'guid-';
  return [prefix, makeGuidPiece(), makeGuidPiece(true), makeGuidPiece(true), makeGuidPiece()].join('');
};

/**
 * Generates GUID piece
 * @param addDashes {Boolean} add dashes flag
 * @return {String} generated piece of guid
 */
var makeGuidPiece = function makeGuidPiece(addDashes) {
  var piece = "".concat(Math.random().toString(16), "000000000").substr(2, 8);
  return addDashes ? "-".concat(piece.substr(0, 4), "-").concat(piece.substr(4, 4)) : piece;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateGuid);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var deepClone = function deepClone(data) {
  var clonedData;
  if (_typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return data;
  }
  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];
    for (var i = 0; i < data.length; i++) {
      clonedData[i] = deepClone(data[i]);
    }
    return clonedData;
  }
  clonedData = {};
  for (var _i in data) {
    if (Object.prototype.hasOwnProperty.call(data, _i)) {
      clonedData[_i] = deepClone(data[_i]);
    }
  }
  return clonedData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepClone);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MINUTES_IN_DAY": () => (/* binding */ MINUTES_IN_DAY),
/* harmony export */   "MINUTES_IN_HOUR": () => (/* binding */ MINUTES_IN_HOUR),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var MINUTES_IN_HOUR = 60;
var MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;
var PERCENTAGE_FACTOR = 100;
var getEventInDayLeftPosition = function getEventInDayLeftPosition(timestamp) {
  var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
  var date = convertDateToTimezone(parseInt(timestamp, 10));
  var minutesCount = date.hour() * MINUTES_IN_HOUR + date.minutes();
  var leftPosition = minutesCount / MINUTES_IN_DAY * PERCENTAGE_FACTOR;
  return leftPosition;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEventInDayLeftPosition);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Checks whether a given item is an object.
 *
 * @function isObject
 * @param {Any} item
 * @returns {Boolean}
 */
var isObject = function isObject(item) {
  return item instanceof Object && item.constructor === Object;
};

/**
 * Serializes object into a string format
 *
 * @function serializeObject
 * @param {String} key param key
 * @param {Object} param reguest param
 * @returns {String}
 */
var serializeObject = function serializeObject(key, param) {
  return Object.entries(param).reduce(function (requestParameters, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      paramKey = _ref2[0],
      paramValue = _ref2[1];
    return [].concat(_toConsumableArray(requestParameters), [serializeByType("".concat(key, "[").concat(paramKey, "]"), paramValue)]);
  }, []).join('&');
};

/**
 * Serializes array into a string format
 *
 * @function serializeArray
 * @param {String} key param key
 * @param {Array} param reguest param
 * @returns {String}
 */
var serializeArray = function serializeArray(key, param) {
  return param.map(function (paramValue, index) {
    return serializeByType("".concat(key, "[").concat(index, "]"), paramValue);
  }).join('&');
};

/**
 * Serializes data by type
 *
 * @function serializeByType
 * @param {String} key param key
 * @param {Mixed} param reguest param
 * @returns {String}
 */
var serializeByType = function serializeByType(key, value) {
  if (isObject(value)) {
    return serializeObject(key, value);
  } else if (Array.isArray(value)) {
    return serializeArray(key, value);
  }
  return "".concat(key, "=").concat(value);
};

/**
 * Serializes request params into a string format
 *
 * @function serialize
 * @param {Object} params request params
 * @returns {String}
 */
var serialize = function serialize(params) {
  return Object.keys(params).map(function (key) {
    var value = params[key];
    if (isObject(value)) {
      return serializeObject(key, value);
    }
    if (Array.isArray(value)) {
      return serializeArray(key, value);
    }
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
  }).join('&');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serialize);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var ActionMenu = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var attrs = {
    className: "c-pb-action-menu ".concat(props.forceShow && 'c-pb-action-menu--keep-visible'),
    onMouseLeave: props.handleMouseLeave
  };
  var handlerAttrs = {
    className: 'c-pb-action-menu__handler'
  };
  if (props.isEditable) {
    handlerAttrs.className = "".concat(handlerAttrs.className, " ").concat(handlerAttrs.className, "--is-editable");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, attrs, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-action-menu__name",
    onMouseDown: props.handleDragStart
  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-action-menu__actions"
  }, props.children));
});
ActionMenu.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  handleMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  handleDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  isEditable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  forceShow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
ActionMenu.displayName = 'ActionMenu';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMenu);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block-config-panel/block.config.panel.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block-config-panel/block.config.panel.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");




var BlockConfigPanel = function BlockConfigPanel(_ref) {
  var title = _ref.title,
    isClosed = _ref.isClosed,
    onCancel = _ref.onCancel,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    extraClasses: "c-pb-block-config-panel",
    type: _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__.CONFIG_PANEL_TYPE_RIGHT,
    showCloseBtn: true,
    onCancel: onCancel,
    title: title,
    isClosed: isClosed,
    isWithBackdrop: true,
    hasBackBtn: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-block-config-panel__body"
  }, children));
};
BlockConfigPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
BlockConfigPanel.defaultProps = {
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js");
/* harmony import */ var _iframe_iframe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iframe/iframe */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
/* harmony import */ var _action_menu_action_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-menu/action.menu */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js");
/* harmony import */ var _config_popup_config_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-popup/config.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _date_picker_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../date-picker/date.picker */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js");
/* harmony import */ var _block_config_panel_block_config_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../block-config-panel/block.config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block-config-panel/block.config.panel.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var SELECTOR_BLOCK_PREVIEW = '.c-pb-block-preview';
var CLASS_ACTION_MENU_TO_RIGHT = 'c-pb-preview-block--action-menu-to-right';
var PreviewBlock = /*#__PURE__*/function (_Component) {
  _inherits(PreviewBlock, _Component);
  var _super = _createSuper(PreviewBlock);
  function PreviewBlock(props) {
    var _this;
    _classCallCheck(this, PreviewBlock);
    _this = _super.call(this, props);
    _this.pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
    _this._refPreviewComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refIframeComponent = null;
    _this._refActionMenuComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.state = {
      shouldPopupWatchLoad: false,
      isConfigPopupVisible: false,
      isConfigDataSent: false,
      isUdwOpened: false,
      udwProps: null,
      isAirtimePopupOpened: false,
      maxHeight: 50,
      isActive: props.forceShowActionMenu
    };
    _this.prepareConfigPopup = _this.prepareConfigPopup.bind(_assertThisInitialized(_this));
    _this.removeBlock = _this.removeBlock.bind(_assertThisInitialized(_this));
    _this.hideConfigPopup = _this.hideConfigPopup.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.initDragging = _this.initDragging.bind(_assertThisInitialized(_this));
    _this.unMountBlock = _this.unMountBlock.bind(_assertThisInitialized(_this));
    _this.showConfigPopup = _this.showConfigPopup.bind(_assertThisInitialized(_this));
    _this.handleOnConfigPopupIframeLoad = _this.handleOnConfigPopupIframeLoad.bind(_assertThisInitialized(_this));
    _this.handleLoadAfterConfigFormSubmit = _this.handleLoadAfterConfigFormSubmit.bind(_assertThisInitialized(_this));
    _this.preventHidingConfigPopup = _this.preventHidingConfigPopup.bind(_assertThisInitialized(_this));
    _this.openUdw = _this.openUdw.bind(_assertThisInitialized(_this));
    _this.closeUdw = _this.closeUdw.bind(_assertThisInitialized(_this));
    _this.setConfigIframeRef = _this.setConfigIframeRef.bind(_assertThisInitialized(_this));
    _this.setConfigFormSubmittedState = _this.setConfigFormSubmittedState.bind(_assertThisInitialized(_this));
    _this.getConfigIframe = _this.getConfigIframe.bind(_assertThisInitialized(_this));
    _this.removeDragEventListeners = _this.removeDragEventListeners.bind(_assertThisInitialized(_this));
    _this.setActionMenuPosition = _this.setActionMenuPosition.bind(_assertThisInitialized(_this));
    _this.openAirtimePopup = _this.openAirtimePopup.bind(_assertThisInitialized(_this));
    _this.changeAirtime = _this.changeAirtime.bind(_assertThisInitialized(_this));
    _this.closeAirtimePopup = _this.closeAirtimePopup.bind(_assertThisInitialized(_this));
    _this.setAirtimePopupRef = _this.setAirtimePopupRef.bind(_assertThisInitialized(_this));
    _this.toggleActionMenuDisplay = _this.toggleActionMenuDisplay.bind(_assertThisInitialized(_this));
    _this.hideActionMenu = _this.hideActionMenu.bind(_assertThisInitialized(_this));
    _this.checkShouldShowActionMenu = _this.checkShouldShowActionMenu.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(PreviewBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      if (!this.props.meta.preview.length) {
        wrapper.style.minHeight = '50px';
      }
      if (window.getComputedStyle(wrapper).position === 'static') {
        wrapper.style.position = 'relative';
      }
      wrapper.dataset.type = 'preview';
      wrapper.tabIndex = '0';
      wrapper.addEventListener('dragover', this.props.onDragOver, false);
      wrapper.addEventListener('dragstart', this.initDragging, false);
      wrapper.addEventListener('dragend', this.removeDragEventListeners, false);
      wrapper.addEventListener('mouseenter', this.setActionMenuPosition, false);
      wrapper.addEventListener('click', this.toggleActionMenuDisplay, false);
      window.ibexa.helpers.tooltips.parse(wrapper);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      document.body.classList.toggle('ibexa-airtime-popup-visible', this.state.isAirtimePopupOpened);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      wrapper.removeEventListener('mouseenter', this.showActionMenu);
      wrapper.removeEventListener('mouseleave', this.hideActionMenu);
      wrapper.removeEventListener('dragover', this.props.onDragOver);
      wrapper.removeEventListener('dragend', this.removeDragEventListeners);
      wrapper.removeEventListener('mouseenter', this.setActionMenuPosition);
      wrapper.removeEventListener('click', this.toggleActionMenuDisplay);
    }

    /**
     * Finds block preview wrapper
     *
     * @method findBlockWrapper
     * @param {HTMLElement} block
     * @returns {HTMLElement|undefined}
     */
  }, {
    key: "findBlockWrapper",
    value: function findBlockWrapper(block) {
      if (!block) {
        return;
      }
      return block.dataset.blockId ? block : block.closest('[data-ez-block-id]');
    }
  }, {
    key: "getConfigIframe",
    value: function getConfigIframe() {
      return this._refIframeComponent && this._refIframeComponent._refIframe;
    }
  }, {
    key: "getAirtimePopup",
    value: function getAirtimePopup() {
      return this._refAirtimePopupComponent && this._refAirtimePopupComponent._refModal;
    }
  }, {
    key: "toggleActionMenuDisplay",
    value: function toggleActionMenuDisplay(event) {
      var _this2 = this;
      var actionMenu = this._refActionMenuComponent.current;
      var isActionMenu = event.target === actionMenu;
      var isInActionMenu = actionMenu.contains(event.target);
      if ((isActionMenu || isInActionMenu) && this.state.isActive) {
        return;
      }
      this.setState(function (state, props) {
        return {
          isActive: !props.forceShowActionMenu
        };
      }, function () {
        var isActive = _this2.state.isActive;
        var methodName = isActive ? 'addEventListener' : 'removeEventListener';
        var iframeBody = _this2.findBlockWrapper(_this2._refPreviewComponent.current).closest('body');
        iframeBody[methodName]('click', _this2.hideActionMenu, false);
        _this2.props.onClick(isActive ? _this2.props.block.id : null);
      });
    }
  }, {
    key: "hideActionMenu",
    value: function hideActionMenu(event) {
      var _this3 = this;
      if (!this._refPreviewComponent.current) {
        return;
      }
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      var isInBlock = wrapper.contains(event.target);
      var isBlock = wrapper === event.target;
      if (isInBlock || isBlock) {
        return;
      }
      this.setState(function () {
        return {
          isActive: false
        };
      }, function () {
        return _this3.props.onClickOutside(_this3.props.block.id);
      });
    }
  }, {
    key: "setActionMenuPosition",
    value: function setActionMenuPosition(_ref) {
      var currentTarget = _ref.currentTarget;
      if (currentTarget.querySelector('.c-pb-action-menu')) {
        var rect = currentTarget.getBoundingClientRect();
        var shouldAlignActionMenuToRight = rect.left > window.innerWidth / 2;
        var actionMenuTopPosition = rect.y < 0 ? Math.abs(rect.y) : 0;
        currentTarget.querySelector('.c-pb-action-menu').style.top = "".concat(actionMenuTopPosition, "px");
        currentTarget.classList.toggle(CLASS_ACTION_MENU_TO_RIGHT, shouldAlignActionMenuToRight);
      }
    }
  }, {
    key: "openAirtimePopup",
    value: function openAirtimePopup(_ref2) {
      var detail = _ref2.detail;
      this.airtimeDate = detail.airtime;
      this.setState({
        isAirtimePopupOpened: true,
        airtimePopupData: {
          onSubmit: detail.onSubmit
        }
      });
    }
  }, {
    key: "applyAirtime",
    value: function applyAirtime(callback) {
      if (!this.airtimeDate) {
        return;
      }
      this.closeAirtimePopup();
      callback(this.airtimeDate);
    }
  }, {
    key: "changeAirtime",
    value: function changeAirtime(airtime) {
      this.airtimeDate = airtime;
    }
  }, {
    key: "setAirtimePopupRef",
    value: function setAirtimePopupRef(popup) {
      this._refAirtimePopupComponent = popup;
    }
  }, {
    key: "closeAirtimePopup",
    value: function closeAirtimePopup() {
      this.forceAirtimePopupBackdropHidden();
      this.setState({
        isAirtimePopupOpened: false
      });
    }
  }, {
    key: "openUdw",
    value: function openUdw(_ref3) {
      var _this4 = this;
      var detail = _ref3.detail;
      var udwProps = _objectSpread(_objectSpread({}, detail), {}, {
        onCancel: function onCancel() {
          var _detail$onCancel;
          detail === null || detail === void 0 ? void 0 : (_detail$onCancel = detail.onCancel) === null || _detail$onCancel === void 0 ? void 0 : _detail$onCancel.call(detail);
          _this4.closeUdw();
        },
        onConfirm: function onConfirm(items) {
          var _detail$onConfirm;
          detail === null || detail === void 0 ? void 0 : (_detail$onConfirm = detail.onConfirm) === null || _detail$onConfirm === void 0 ? void 0 : _detail$onConfirm.call(detail, items);
          _this4.closeUdw();
        }
      });
      this.setState({
        isUdwOpened: true,
        udwProps: udwProps
      });
    }
  }, {
    key: "closeUdw",
    value: function closeUdw() {
      this.setState({
        isUdwOpened: false,
        udwProps: null
      });
    }
  }, {
    key: "unMountBlock",
    value: function unMountBlock() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      window.ibexa.helpers.tooltips.hideAll(wrapper);
      this.props.root.unmount();
      wrapper.parentNode.removeChild(wrapper);
    }
  }, {
    key: "removeBlock",
    value: function removeBlock() {
      var _this5 = this;
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      wrapper.classList.add('c-pb-block-preview--is-removing');
      wrapper.addEventListener('animationend', function () {
        var shouldRemoveBlock = wrapper.classList.contains('c-pb-block-preview--removed');
        if (shouldRemoveBlock) {
          _this5.unMountBlock();
          _this5.props.onRemove(_this5.props.block);
        } else {
          wrapper.classList.add('c-pb-block-preview--removed');
        }
      });
    }
  }, {
    key: "setConfigFormSubmittedState",
    value: function setConfigFormSubmittedState() {
      this.getConfigIframe().onload = this.handleLoadAfterConfigFormSubmit;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          isConfigDataSent: true,
          shouldPopupWatchLoad: true
        });
      });
    }
  }, {
    key: "handleLoadAfterConfigFormSubmit",
    value: function handleLoadAfterConfigFormSubmit() {
      var _this6 = this;
      var iframe = this.getConfigIframe();
      var iframeDocument = iframe.contentDocument;
      var blockConfiguration = iframeDocument.querySelector('[name="BlockConfiguration"]');
      var blockVisible = iframeDocument.querySelector('[name="BlockVisible"]');
      if (!blockConfiguration) {
        this.setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            isConfigDataSent: false,
            shouldPopupWatchLoad: false
          });
        }, function () {
          _this6.attachConfigPopupEventHandlers();
        });
        return;
      }
      var blockData = JSON.parse(blockConfiguration.content);
      var isVisible = parseInt(blockVisible.content, 10);
      iframe.onload = null;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        });
      }, function () {
        return _this6.props.onBlockDataUpdate({
          blockData: blockData,
          isVisible: isVisible
        });
      });
    }
  }, {
    key: "handleOnConfigPopupIframeLoad",
    value: function handleOnConfigPopupIframeLoad(iframe) {
      if (this.state.isUdwOpened) {
        return;
      }
      this.showConfigPopup(iframe);
    }
  }, {
    key: "renderConfigPopup",
    value: function renderConfigPopup() {
      var _this$state = this.state,
        isConfigPopupVisible = _this$state.isConfigPopupVisible,
        isConfigDataSent = _this$state.isConfigDataSent;
      var block = this.props.block;
      if (!isConfigPopupVisible) {
        return null;
      }
      var iframeAttrs = {
        ref: this.setConfigIframeRef,
        src: 'about:blank',
        id: block.id,
        name: block.id,
        title: block.id,
        onLoad: isConfigDataSent ? this.handleLoadAfterConfigFormSubmit : this.handleOnConfigPopupIframeLoad,
        isVisible: !isConfigDataSent
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_block_config_panel_block_config_panel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onCancel: this.hideConfigPopup,
        title: block.name,
        isClosed: !isConfigPopupVisible
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, iframeAttrs, {
        fs: true
      }))), this.pageBuilderConfigPanelWrapper);
    }
  }, {
    key: "forceAirtimePopupBackdropHidden",
    value: function forceAirtimePopupBackdropHidden() {
      var popup = this.getAirtimePopup();
      this.forcePopupBackdropHidden(popup);
    }
  }, {
    key: "forcePopupBackdropHidden",
    value: function forcePopupBackdropHidden(popup) {
      if (popup) {
        window.bootstrap.Modal.getOrCreateInstance(popup).hide();
      }
    }
  }, {
    key: "hideConfigPopup",
    value: function hideConfigPopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        });
      });
    }
  }, {
    key: "showConfigPopup",
    value: function showConfigPopup() {
      if (!this.state.shouldPopupWatchLoad) {
        return;
      }
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        });
      }, this.attachConfigPopupEventHandlers);
    }
  }, {
    key: "preventHidingConfigPopup",
    value: function preventHidingConfigPopup(event) {
      event.preventDefault();
    }
  }, {
    key: "prepareConfigPopup",
    value: function prepareConfigPopup(event) {
      var _this7 = this;
      var actionBtn = event.currentTarget;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          shouldPopupWatchLoad: true
        });
      }, function () {
        actionBtn.blur();
        _this7.props.onConfigPopupOpen(_this7.props.block);
      });
    }
  }, {
    key: "attachConfigPopupEventHandlers",
    value: function attachConfigPopupEventHandlers() {
      if (this.state.isConfigDataSent) {
        return;
      }
      var iframeDoc = this.getConfigIframe().contentDocument;
      iframeDoc.body.addEventListener('ibexa-open-udw', this.openUdw, false);
      iframeDoc.body.addEventListener('ibexa-open-airtime-popup', this.openAirtimePopup, false);
      iframeDoc.querySelector('[name="block_configuration"]').addEventListener('submit', this.setConfigFormSubmittedState, false);
      iframeDoc.querySelector('[data-form-action="discard"]').addEventListener('click', this.hideConfigPopup, false);
    }
  }, {
    key: "initDragging",
    value: function initDragging(event) {
      var preview = event.currentTarget.querySelector(SELECTOR_BLOCK_PREVIEW);
      var image = document.querySelector("[data-ibexa-sidebar-block-type=\"".concat(this.props.meta.config.type, "\"]"));
      if (preview) {
        event.currentTarget.ondragover = function () {
          return true;
        };
        event.currentTarget.addEventListener('drag', this.props.onDrag, false);
      }
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', image);
      event.dataTransfer.setDragImage(image, 0, 0);
    }
  }, {
    key: "removeDragEventListeners",
    value: function removeDragEventListeners() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      wrapper.removeEventListener('drag', this.props.onDrag);
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      var _this$props = this.props,
        block = _this$props.block,
        meta = _this$props.meta;
      var preview = wrapper.querySelector(SELECTOR_BLOCK_PREVIEW);
      var wrapperClasses = wrapper.className.split(' ').filter(function (wrapperClass) {
        return wrapperClass !== '';
      });
      meta.preview = preview.innerHTML;
      wrapper.draggable = true;
      this.props.onDragStart({
        block: block,
        meta: meta,
        wrapperClasses: wrapperClasses,
        unMountBlock: this.unMountBlock
      });
    }
  }, {
    key: "checkShouldShowActionMenu",
    value: function checkShouldShowActionMenu() {
      return this.props.forceShowActionMenu && this.state.isActive;
    }
  }, {
    key: "renderActionMenu",
    value: function renderActionMenu() {
      var _this$props2 = this.props,
        block = _this$props2.block,
        meta = _this$props2.meta,
        isEditable = _this$props2.isEditable,
        isAvailable = _this$props2.isAvailable;
      var props = {
        name: block.name || meta.config.name,
        handleDragStart: this.handleDragStart,
        handleMouseLeave: this.hideActionMenu,
        blockId: block.id,
        isEditable: isEditable && isAvailable,
        forceShow: this.checkShouldShowActionMenu(),
        ref: this._refActionMenuComponent
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_menu_action_menu__WEBPACK_IMPORTED_MODULE_5__["default"], props, this.renderActions());
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var isEditable = this.props.isEditable;
      var settingAttrs = {
        className: 'c-pb-preview-block__action ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text',
        'data-tooltip-iframe-selector': '#page-builder-preview',
        title: Translator.trans( /*@Desc("Block settings")*/'block.settings', {}, 'page_builder')
      };
      var removeAttrs = {
        className: 'c-pb-preview-block__action ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text',
        'data-tooltip-iframe-selector': '#page-builder-preview',
        title: Translator.trans( /*@Desc("Delete block")*/'block.delete', {}, 'page_builder')
      };
      if (this.props.isEditable) {
        settingAttrs.className = "".concat(settingAttrs.className, " ").concat(settingAttrs.className, "--is-editable");
        settingAttrs.onClick = this.prepareConfigPopup;
        removeAttrs.className = "".concat(removeAttrs.className, " ").concat(removeAttrs.className, "--is-editable");
        removeAttrs.onClick = this.removeBlock;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, settingAttrs, {
        disabled: !isEditable,
        type: "button"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "settings-block",
        extraClasses: "ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, removeAttrs, {
        disabled: !isEditable,
        type: "button"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "trash",
        extraClasses: "ibexa-icon--small"
      })));
    }
  }, {
    key: "setConfigIframeRef",
    value: function setConfigIframeRef(component) {
      this._refIframeComponent = component;
    }
  }, {
    key: "renderUdw",
    value: function renderUdw() {
      var UniversalDiscovery = ibexa.modules.UniversalDiscovery;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UniversalDiscovery, this.state.udwProps);
    }
  }, {
    key: "renderAirtimePopup",
    value: function renderAirtimePopup() {
      var popupTitle = Translator.trans( /*@Desc("Content airtime settings")*/'airtime_popup.title', {}, 'page_builder');
      var discardLabel = Translator.trans( /*@Desc("Discard")*/'airtime_popup.discard.btn', {}, 'page_builder');
      var submitLabel = Translator.trans( /*@Desc("Submit")*/'airtime_popup.submit.btn', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_config_popup_config_popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: this.setAirtimePopupRef,
        onClose: this.closeAirtimePopup,
        isVisible: true,
        isLoading: false,
        additionalClasses: "c-pb-config-popup--airtime",
        name: popupTitle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_date_picker_date_picker__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onDateChange: this.changeAirtime,
        airtime: this.airtimeDate
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-config-popup__btns"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--primary",
        onClick: this.applyAirtime.bind(this, this.state.airtimePopupData.onSubmit),
        type: "button"
      }, submitLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--secondary",
        onClick: this.closeAirtimePopup,
        type: "button"
      }, discardLabel)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        meta = _this$props3.meta,
        isAvailable = _this$props3.isAvailable,
        udwContainer = _this$props3.udwContainer,
        airtimeContainer = _this$props3.airtimeContainer;
      var _this$state2 = this.state,
        isUdwOpened = _this$state2.isUdwOpened,
        isAirtimePopupOpened = _this$state2.isAirtimePopupOpened;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isUdwOpened && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(this.renderUdw(), udwContainer), isAirtimePopupOpened && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(this.renderAirtimePopup(), airtimeContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_preview__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: this._refPreviewComponent,
        preview: meta.preview,
        name: meta.config.name,
        isValid: meta.isValid,
        isVisible: meta.isVisible,
        shouldDisplayError: meta.shouldDisplayError,
        hasVisibleActionMenu: this.checkShouldShowActionMenu(),
        isAvailable: isAvailable,
        removeBlock: this.removeBlock
      }), isAvailable && this.renderActionMenu(), isAvailable && this.renderConfigPopup());
    }
  }]);
  return PreviewBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
PreviewBlock.propTypes = {
  onDragOver: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onBlockDataUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  block: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  root: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    config: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
    preview: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    shouldDisplayError: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
    isValid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
    isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
  }).isRequired,
  onConfigPopupOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  udwContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)).isRequired,
  onDrag: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  isEditable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  forceShowActionMenu: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  isAvailable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  onClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  airtimeContainer: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
PreviewBlock.defaultProps = {
  isAvailable: false,
  onClickOutside: function onClickOutside() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewBlock);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var _window = window,
  Translator = _window.Translator;
var CLASS_INVISIBLE = 'ibexa-mark-invisible';
var setInnerHTML = function setInnerHTML(__html) {
  return {
    __html: __html
  };
};
var setInvisibleClass = function setInvisibleClass(preview, isVisible) {
  var container = document.createElement('div');
  container.insertAdjacentHTML('beforeend', preview);
  _toConsumableArray(container.childNodes).forEach(function (child) {
    if (child instanceof HTMLElement) {
      child.classList.toggle(CLASS_INVISIBLE, !isVisible);
    }
  });
  return container.innerHTML;
};
var Preview = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var baseClassName = 'c-pb-block-preview';
  var className = "".concat(baseClassName);
  var preview = props.preview.trim();
  if (!props.isValid && props.shouldDisplayError) {
    className = "".concat(className, " ").concat(baseClassName, "--invalid");
  }
  if (props.hasVisibleActionMenu) {
    className = "".concat(className, " ").concat(baseClassName, "--action-menu-visible");
  }
  if (!props.isAvailable) {
    className = "".concat(className, " ").concat(baseClassName, "--unavailable");
    preview = setInvisibleClass(preview, props.isVisible);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-mask"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-mask-title"
    }, Translator.trans( /*@Desc("This element is not available in this page")*/'block.no_availability.title', {}, 'page_builder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-mask-content"
    }, Translator.trans( /*@Desc("You have to delete it to publish")*/'block.no_availability.content', {}, 'page_builder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "c-pb-block-preview__delete-unavailable-block",
      onClick: props.removeBlock
    }, Translator.trans( /*@Desc("Delete")*/'block.no_availability.delete', {}, 'page_builder'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-block-content",
      ref: ref,
      dangerouslySetInnerHTML: setInnerHTML(preview)
    }));
  }
  if (preview.length) {
    preview = setInvisibleClass(preview, props.isVisible);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className,
      ref: ref,
      dangerouslySetInnerHTML: setInnerHTML(preview)
    });
  }
  var emptyBlockText = Translator.trans( /*@Desc("%name% block")*/'empty_block.info.text', {
    name: props.name
  }, 'page_builder');
  className = "".concat(className, " ").concat(baseClassName, "--empty");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    ref: ref
  }, emptyBlockText);
});
Preview.displayName = 'Preview';
Preview.propTypes = {
  setBlockPreviewContainerRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  preview: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  shouldDisplayError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isValid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  hasVisibleActionMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isAvailable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  removeBlock: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Preview.defaultProps = {
  isAvailable: false,
  removeBlock: function removeBlock() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.block.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.block.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SidebarBlock = /*#__PURE__*/function (_PureComponent) {
  _inherits(SidebarBlock, _PureComponent);
  var _super = _createSuper(SidebarBlock);
  function SidebarBlock(props) {
    var _this;
    _classCallCheck(this, SidebarBlock);
    _this = _super.call(this, props);
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this._refBlockNameContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    return _this;
  }
  _createClass(SidebarBlock, [{
    key: "handleDragStart",
    value: function handleDragStart(event) {
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('text/html', event.currentTarget);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      var _this$props = this.props,
        onDragStart = _this$props.onDragStart,
        type = _this$props.type;
      onDragStart(type);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        name = _this$props2.name,
        thumbnail = _this$props2.thumbnail,
        type = _this$props2.type,
        isDraggable = _this$props2.isDraggable,
        isHidden = _this$props2.isHidden;
      var blockAttrs = {
        className: 'c-pb-sidebar-block',
        'data-ibexa-sidebar-block-type': type,
        hidden: isHidden
      };
      var blockContentAttrs = {
        className: 'c-pb-sidebar-block__content'
      };
      if (isDraggable) {
        blockAttrs.className = "".concat(blockAttrs.className, " ").concat(blockAttrs.className, "--draggable");
        blockContentAttrs.draggable = 'true';
        blockContentAttrs.onDragStart = this.handleDragStart;
        blockContentAttrs.onDrag = this.props.onDrag;
        blockContentAttrs.onMouseDown = this.handleMouseDown;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", blockAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", blockContentAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar-block__drag"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "drag",
        extraClasses: "c-pb-sidebar-block__drag-icon ibexa-icon--tiny-small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar-block__type"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        customPath: thumbnail,
        extraClasses: "ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar-block__label"
      }, name)));
    }
  }]);
  return SidebarBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
SidebarBlock.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  onDrag: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  isDraggable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isHidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarBlock);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.blocks.group.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.blocks.group.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SidebarBlocksGroup = function SidebarBlocksGroup(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.isCollapsed),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var blocksGroupClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-pb-sidebar-blocks-group': true,
    'c-pb-sidebar-blocks-group--collapsed': isCollapsed
  });
  var iconName = isCollapsed ? 'caret-up' : 'caret-down';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsCollapsed(props.isCollapsed);
  }, [props.isCollapsed]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.onCollapseChange();
  }, [isCollapsed]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: blocksGroupClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-sidebar-blocks-group__title-bar",
    onClick: function onClick() {
      return setIsCollapsed(function (isCollapsedPrev) {
        return !isCollapsedPrev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-sidebar-blocks-group__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-sidebar-blocks-group__toggler"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: iconName,
    extraClasses: "ibexa-icon--tiny-small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-sidebar-blocks-group__blocks"
  }, props.children));
};
SidebarBlocksGroup.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  isCollapsed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onCollapseChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
SidebarBlocksGroup.defaultProps = {
  isCollapsed: false,
  title: '',
  onCollapseChange: function onCollapseChange() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarBlocksGroup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _window = window,
  Translator = _window.Translator;
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};
var ConfigPopup = /*#__PURE__*/function (_Component) {
  _inherits(ConfigPopup, _Component);
  var _super = _createSuper(ConfigPopup);
  function ConfigPopup(props) {
    var _this;
    _classCallCheck(this, ConfigPopup);
    _this = _super.call(this, props);
    _this._refModal = null;
    _this.setModalRef = _this.setModalRef.bind(_assertThisInitialized(_this));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_this));
    _this.state = {
      currentProps: {
        isVisible: props.isVisible,
        isLoading: props.isLoading
      },
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    return _this;
  }
  _createClass(ConfigPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var show = this.state.isVisible;
      if (show) {
        var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
          focus: this.props.hasFocus
        }));
        bootstrapModal.show();
        this.attachModalEventHandlers();
      }
      window.ibexa.helpers.tooltips.parse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var show = this.state.isVisible;
      var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
        focus: this.props.hasFocus
      }));
      if (show) {
        bootstrapModal.show();
        this.attachModalEventHandlers();
      } else {
        bootstrapModal.hide();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.bootstrap.Modal.getOrCreateInstance(this._refModal).hide();
      document.body.classList.remove(CLASS_MODAL_OPEN);
    }
  }, {
    key: "attachModalEventHandlers",
    value: function attachModalEventHandlers() {
      this._refModal.addEventListener('keyup', this.onKeyUp);
      this._refModal.addEventListener('hidden.bs.modal', this.props.onClose);
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var originalEvent = event.originalEvent;
      var escKeyCode = 27;
      var escKeyPressed = originalEvent && (originalEvent.which === escKeyCode || originalEvent.keyCode === escKeyCode);
      if (escKeyPressed) {
        this.props.onClose();
      }
    }
  }, {
    key: "setModalRef",
    value: function setModalRef(component) {
      this._refModal = component;
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var type = this.props.type;
      if (!type) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-pb-config-popup__subtitle"
      }, type);
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      var additionalClasses = this.props.additionalClasses;
      var modalAttrs = {
        className: 'c-pb-config-popup modal fade',
        ref: this.setModalRef,
        tabIndex: this.props.hasFocus ? '-1' : undefined
      };
      var closeBtnLabel = Translator.trans( /*@Desc("Close")*/'config_popup.close.label', {}, 'page_builder');
      document.body.classList.toggle(CLASS_MODAL_OPEN, isVisible);
      if (additionalClasses) {
        modalAttrs.className = "".concat(modalAttrs.className, " ").concat(additionalClasses);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", modalAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-dialog c-pb-config-popup__dialog modal-lg",
        role: "dialog"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-content c-pb-config-popup__content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-header c-pb-config-popup__header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "modal-title c-pb-config-popup__headline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-pb-config-popup__title"
      }, this.props.name), this.renderSubtitle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "close c-pb-config-popup__btn--close",
        "data-bs-dismiss": "modal",
        "aria-label": closeBtnLabel,
        onClick: this.props.onClose,
        title: closeBtnLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "discard",
        extraClasses: "ibexa-icon--medium"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-body c-pb-config-popup__body"
      }, this.props.children))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isVisible !== prevState.currentProps.isVisible || nextProps.isLoading !== prevState.currentProps.isLoading) {
        return {
          currentProps: {
            isVisible: nextProps.isVisible,
            isLoading: nextProps.isLoading
          },
          isVisible: nextProps.isVisible,
          isLoading: nextProps.isLoading
        };
      }
      return null;
    }
  }]);
  return ConfigPopup;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
ConfigPopup.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  additionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ConfigPopup.defaultProps = {
  isVisible: false,
  isLoading: true,
  type: null,
  hasFocus: true,
  additionalClasses: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var DatePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);
  var _super = _createSuper(DatePicker);
  function DatePicker(props) {
    var _this;
    _classCallCheck(this, DatePicker);
    _this = _super.call(this, props);
    _this.setPickerRef = _this.setPickerRef.bind(_assertThisInitialized(_this));
    _this.updateAirtime = _this.updateAirtime.bind(_assertThisInitialized(_this));
    _this.clearAirtime = _this.clearAirtime.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var airtime = this.props.airtime;
      var userTimezoneCurrentTime = convertDateToTimezone(new Date());
      var selectedDateWithUserTimezone = airtime ? convertDateToTimezone(airtime * 1000) : userTimezoneCurrentTime;
      var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      var minDate = new Date(this.roundMinutes(convertDateToTimezone(userTimezoneCurrentTime, browserTimezone, true)));
      var defaultDate = new Date(this.roundMinutes(convertDateToTimezone(selectedDateWithUserTimezone, browserTimezone, true)));
      if (defaultDate < minDate) {
        defaultDate = minDate;
      }
      minDate.setSeconds(0);
      this.dateTimePickerWidget = new ibexa.core.DateTimePicker({
        container: this._refPicker,
        onChange: this.updateAirtime,
        flatpickrConfig: {
          enableTime: false,
          minDate: minDate,
          defaultDate: defaultDate
        }
      });
      this.dateTimePickerWidget.init();
    }
  }, {
    key: "roundMinutes",
    value: function roundMinutes(date) {
      var roundDiff = date.minute() % 5;
      if (roundDiff) {
        return date.add(5 - roundDiff, 'minutes');
      }
      return date;
    }
  }, {
    key: "updateAirtime",
    value: function updateAirtime(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        timestamp = _ref2[0];
      this.props.onDateChange(timestamp);
    }
  }, {
    key: "clearAirtime",
    value: function clearAirtime() {
      this.dateTimePickerWidget.clear();
    }
  }, {
    key: "setPickerRef",
    value: function setPickerRef(ref) {
      this._refPicker = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var label = Translator.trans( /*@Desc("Date and time")*/'date_picker.label', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-date-picker",
        ref: this.setPickerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "c-pb-date-picker__label ibexa-label"
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-date-picker__input-wrapper ibexa-date-time-picker ibexa-date-time-picker--inline-datetime-popup ibexa-input-text-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        className: "c-pb-date-picker__input ibexa-input ibexa-input--text form-control ibexa-date-time-picker__input flatpickr flatpickr-date-input",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-input-text-wrapper__actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--clear",
        tabIndex: "-1",
        onClick: this.clearAirtime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "discard"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-input-text-wrapper__action-btn",
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "date",
        extraClasses: "ibexa-icon--small"
      })))));
    }
  }]);
  return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
DatePicker.propTypes = {
  onDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  airtime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _window = window,
  Translator = _window.Translator;
var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);
  var _super = _createSuper(ErrorBoundary);
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.error('catch:error', error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var errorMessage = Translator.trans( /*@Desc("Something went wrong")*/'error.message', {}, 'page_builder');
      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, errorMessage);
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
ErrorBoundary.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Iframe = /*#__PURE__*/function (_PureComponent) {
  _inherits(Iframe, _PureComponent);
  var _super = _createSuper(Iframe);
  function Iframe(props) {
    var _this;
    _classCallCheck(this, Iframe);
    _this = _super.call(this, props);
    _this._refIframe = null;
    _this.state = {
      currentProps: {
        isVisible: props.isVisible,
        isLoading: props.isLoading
      },
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    _this.handleLoad = _this.handleLoad.bind(_assertThisInitialized(_this));
    _this.setPreviewRef = _this.setPreviewRef.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Iframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true
        });
      });
    }
  }, {
    key: "handleLoad",
    value: function handleLoad() {
      this.props.onLoad(this._refIframe);
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false
        });
      });
    }
  }, {
    key: "setPreviewRef",
    value: function setPreviewRef(iframe) {
      this._refIframe = iframe;
    }
  }, {
    key: "renderLoadingScreen",
    value: function renderLoadingScreen() {
      if (!this.state.isLoading) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-iframe__loading d-flex justify-content-center align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        className: "ibexa-icon ibexa-spin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
        xlinkHref: window.ibexa.helpers.icon.getIconPath('spinner')
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        id = _this$props.id,
        name = _this$props.name,
        src = _this$props.src;
      var attrs = {
        className: 'c-pb-iframe'
      };
      var iframeAttrs = {
        id: id,
        src: src,
        name: name,
        ref: this.setPreviewRef,
        onLoad: this.handleLoad,
        className: 'c-pb-iframe__preview',
        frameBorder: 0,
        hidden: !this.state.isVisible
      };
      if (this.state.isLoading) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--is-loading");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", attrs, this.renderLoadingScreen(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", iframeAttrs));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isVisible !== prevState.currentProps.isVisible || nextProps.isLoading !== prevState.currentProps.isLoading) {
        return {
          currentProps: {
            isVisible: nextProps.isVisible,
            isLoading: nextProps.isLoading
          },
          isVisible: nextProps.isVisible,
          isLoading: nextProps.isLoading
        };
      }
      return null;
    }
  }]);
  return Iframe;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
Iframe.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onLoad: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  src: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
Iframe.defaultProps = {
  id: 'page-builder-preview',
  name: 'page-builder-preview',
  title: 'Page preview',
  isVisible: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iframe);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_alert_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");
/* harmony import */ var _common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.footer */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var _window = window,
  Translator = _window.Translator,
  ReactDOM = _window.ReactDOM;
var LayoutSelector = /*#__PURE__*/function (_Component) {
  _inherits(LayoutSelector, _Component);
  var _super = _createSuper(LayoutSelector);
  function LayoutSelector(props) {
    var _this;
    _classCallCheck(this, LayoutSelector);
    _this = _super.call(this, props);
    _this.renderLayoutItem = _this.renderLayoutItem.bind(_assertThisInitialized(_this));
    _this.selectItem = _this.selectItem.bind(_assertThisInitialized(_this));
    _this.modalContainer = null;
    _this.state = {
      currentProps: {
        itemSelectedId: props.itemSelectedId,
        isValidActiveLayout: props.isValidActiveLayout
      },
      itemSelectedId: props.itemSelectedId,
      isValidActiveLayout: props.isValidActiveLayout
    };
    return _this;
  }
  _createClass(LayoutSelector, [{
    key: "selectItem",
    value: function selectItem(event) {
      this.setState({
        itemSelectedId: event.currentTarget.dataset.id,
        isValidActiveLayout: true
      });
    }
  }, {
    key: "renderLayoutItem",
    value: function renderLayoutItem(data) {
      if (!data.visible && data.id !== this.state.itemSelectedId) {
        return null;
      }
      var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
        'c-pb-layout-selector__item': true,
        'c-pb-layout-selector__item--selected': data.id === this.state.itemSelectedId,
        'c-pb-layout-selector__item--unavailable': !data.visible
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: data.id,
        className: className,
        onClick: this.selectItem,
        "data-id": data.id,
        title: data.description
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "c-pb-layout-selector__item-image",
        src: data.thumbnail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "c-pb-layout-selector__item-desc"
      }, data.description));
    }
  }, {
    key: "renderWarningMessage",
    value: function renderWarningMessage() {
      var warningMessage = Translator.trans( /*@Desc("Switching layout saves the current Page draft")*/'layout_selector.warning.message', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_alert_alert__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "info",
        title: warningMessage
      });
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      var errorMessage = Translator.trans( /*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'layout_selector.error.label', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_alert_alert__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "error",
        title: errorMessage
      });
    }
  }, {
    key: "renderAlerts",
    value: function renderAlerts() {
      if (!this.props.displaySaveDraftWarning && this.state.isValidActiveLayout) {
        return null;
      }
      return this.state.isValidActiveLayout ? this.renderWarningMessage() : this.renderErrorMessage();
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$state = this.state,
        isValidActiveLayout = _this$state.isValidActiveLayout,
        itemSelectedId = _this$state.itemSelectedId;
      var _this$props = this.props,
        onCancel = _this$props.onCancel,
        onConfirm = _this$props.onConfirm;
      var forceSelection = !isValidActiveLayout;
      var cancelBtnLabel = Translator.trans( /*@Desc("Cancel")*/'layout_selector.cancel.label', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--filled-info",
        disabled: !itemSelectedId,
        onClick: function onClick() {
          return onConfirm(itemSelectedId);
        }
      }, this.props.confirmBtnLabel), !forceSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--info",
        onClick: onCancel
      }, cancelBtnLabel));
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      var isValidActiveLayout = this.state.isValidActiveLayout;
      var _this$props2 = this.props,
        title = _this$props2.title,
        layouts = _this$props2.layouts,
        isCreateMode = _this$props2.isCreateMode;
      var forceSelection = !isValidActiveLayout;
      var forceFooterBtnsClick = forceSelection || isCreateMode;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isVisible: true,
        isLoading: false,
        size: "medium",
        footerChildren: this.renderFooter(),
        title: title,
        noCloseBtn: forceFooterBtnsClick,
        noKeyboard: forceFooterBtnsClick,
        extraClasses: "c-pb-layout-selector__popup"
      }, this.renderAlerts(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-layout-selector__layouts"
      }, layouts.map(this.renderLayoutItem)));
    }
  }, {
    key: "renderConfigPanel",
    value: function renderConfigPanel() {
      var _this$props3 = this.props,
        title = _this$props3.title,
        layouts = _this$props3.layouts,
        onCancel = _this$props3.onCancel;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        extraClasses: "ibexa-pb-config-panel--layout-switcher c-pb-layout-selector",
        onCancel: onCancel,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
        extraClasses: "c-pb-layout-selector__content"
      }, this.renderAlerts(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-layout-selector__layouts"
      }, layouts.map(this.renderLayoutItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_7__["default"], null, this.renderFooter()));
    }
  }, {
    key: "render",
    value: function render() {
      var isCreateMode = this.props.isCreateMode;
      return ReactDOM.createPortal(isCreateMode ? this.renderPopup() : this.renderConfigPanel(), document.querySelector('.m-page-builder__modal-container'));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.itemSelectedId !== prevState.currentProps.itemSelectedId || nextProps.isValidActiveLayout !== prevState.currentProps.isValidActiveLayout) {
        return {
          currentProps: {
            itemSelectedId: nextProps.itemSelectedId,
            isValidActiveLayout: nextProps.isValidActiveLayout
          },
          itemSelectedId: nextProps.itemSelectedId,
          isValidActiveLayout: nextProps.isValidActiveLayout
        };
      }
      return null;
    }
  }]);
  return LayoutSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
LayoutSelector.propTypes = {
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  layouts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  modalContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  confirmBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  itemSelectedId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  isValidActiveLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isCreateMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  displaySaveDraftWarning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSelector);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");




var _window = window,
  Translator = _window.Translator;
var LayoutSwitcher = function LayoutSwitcher(_ref) {
  var isSwitchingLayout = _ref.isSwitchingLayout,
    isDisabled = _ref.isDisabled,
    hasErrorState = _ref.hasErrorState,
    onClick = _ref.onClick;
  var btnTitle = Translator.trans( /*@Desc("Switch layout")*/'switch_layout.label', {}, 'page_builder');
  var btnClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'btn ibexa-btn ibexa-btn--selector ibexa-btn--no-text ibexa-pb-action-bar__action-btn': true,
    'ibexa-btn--selected': isSwitchingLayout,
    'ibexa-btn--error': hasErrorState,
    'disabled ': isDisabled
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: btnClassName,
    onClick: onClick,
    title: btnTitle,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "layout-switch",
    extraClasses: "ibexa-icon--medium"
  }));
};
LayoutSwitcher.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  isSwitchingLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  hasErrorState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSwitcher);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/sidebar/sidebar.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/sidebar/sidebar.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _block_sidebar_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../block/sidebar.block */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.block.js");
/* harmony import */ var _block_sidebar_blocks_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block/sidebar.blocks.group */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.blocks.group.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var _window = window,
  Translator = _window.Translator;
var CLASS_IFRAME_BACKDROP_DISPLAYED = 'ibexa-pb-app--iframe-backdrop-visible';
var MENU_BAR_HEIGHT = 68;
var Sidebar = /*#__PURE__*/function (_Component) {
  _inherits(Sidebar, _Component);
  var _super = _createSuper(Sidebar);
  function Sidebar(props) {
    var _this;
    _classCallCheck(this, Sidebar);
    _this = _super.call(this, props);
    _this.infobarTogglerContainer = document.querySelector('.ibexa-pb-action-bar__right');
    _this._refWrapper = null;
    _this._refDragHandler = null;
    _this.updateViewportBoundaries = _this.updateViewportBoundaries.bind(_assertThisInitialized(_this));
    _this.toggleCollapsedState = _this.toggleCollapsedState.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    _this.setDragHandlerRef = _this.setDragHandlerRef.bind(_assertThisInitialized(_this));
    _this.updateBlockFilterQuery = _this.updateBlockFilterQuery.bind(_assertThisInitialized(_this));
    _this.updatePositionAndDimensions = _this.updatePositionAndDimensions.bind(_assertThisInitialized(_this));
    _this.state = {
      isCollapsed: props.isCollapsed,
      isDragged: false,
      isDragging: false,
      top: 0,
      left: 0,
      sidebarWidth: 0,
      sidebarHeight: 0,
      windowWidth: 0,
      windowHeight: 0,
      diffX: 0,
      diffY: 0,
      blockFilterQuery: ''
    };
    return _this;
  }
  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rect = this._refWrapper.getBoundingClientRect();
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          sidebarWidth: rect.width,
          sidebarHeight: rect.height
        });
      });
      window.addEventListener('resize', this.updateViewportBoundaries, false);
      document.body.addEventListener('mouseup', this.handleDragEnd, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var shouldUpdatePositionAndDimension = this.state.isCollapsed !== prevState.isCollapsed || this.state.blockFilterQuery !== prevState.blockFilterQuery || this.props.blocksToRender !== prevProps.blocksToRender;
      if (shouldUpdatePositionAndDimension) {
        this.updatePositionAndDimensions();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewportBoundaries);
      document.body.removeEventListener('mouseup', this.handleDragEnd);
    }
  }, {
    key: "updateViewportBoundaries",
    value: function updateViewportBoundaries() {
      var _this2 = this;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          sidebarHeight: _this2._refWrapper.offsetHeight,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight
        });
      });
    }
  }, {
    key: "updatePositionAndDimensions",
    value: function updatePositionAndDimensions() {
      var _this3 = this;
      var rect = this._refWrapper.getBoundingClientRect();
      var _this$getPosition = this.getPosition({
          clientX: rect.left + this.state.diffX,
          clientY: rect.top + this.state.diffY,
          sidebarHeight: rect.height
        }),
        top = _this$getPosition.top,
        left = _this$getPosition.left;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          sidebarHeight: _this3._refWrapper.offsetHeight,
          top: top,
          left: left
        });
      });
    }
  }, {
    key: "updateBlockFilterQuery",
    value: function updateBlockFilterQuery(event) {
      this.setState({
        blockFilterQuery: event.target.value
      });
    }
  }, {
    key: "toggleCollapsedState",
    value: function toggleCollapsedState() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isCollapsed: !state.isCollapsed
        });
      });
    }
  }, {
    key: "getPosition",
    value: function getPosition(_ref) {
      var clientX = _ref.clientX,
        clientY = _ref.clientY,
        _ref$sidebarHeight = _ref.sidebarHeight,
        sidebarHeight = _ref$sidebarHeight === void 0 ? this.state.sidebarHeight : _ref$sidebarHeight,
        _ref$diffX = _ref.diffX,
        diffX = _ref$diffX === void 0 ? this.state.diffX : _ref$diffX,
        _ref$diffY = _ref.diffY,
        diffY = _ref$diffY === void 0 ? this.state.diffY : _ref$diffY;
      var _this$state = this.state,
        windowHeight = _this$state.windowHeight,
        windowWidth = _this$state.windowWidth,
        sidebarWidth = _this$state.sidebarWidth;
      var maxOffsetLeft = windowWidth - sidebarWidth;
      var maxOffsetTop = windowHeight - sidebarHeight;
      clientX = clientX - diffX;
      clientY = clientY - diffY;
      return {
        top: clientY < maxOffsetTop ? Math.max(MENU_BAR_HEIGHT, clientY) : maxOffsetTop,
        left: clientX < maxOffsetLeft ? Math.max(0, clientX) : maxOffsetLeft
      };
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(event) {
      var _this4 = this;
      var isSidebarToggler = event.nativeEvent.target.classList.contains('c-pb-sidebar__toggler') || !!event.nativeEvent.target.closest('.c-pb-sidebar__toggler');
      var buttonPressedCode = event.buttons !== undefined ? event.buttons : event.nativeEvent.which;
      var isLeftClick = buttonPressedCode === 1;
      if (isSidebarToggler || !isLeftClick) {
        return;
      }
      var rect = this._refDragHandler.getBoundingClientRect();
      var diffX = event.nativeEvent.clientX - rect.left;
      var diffY = event.nativeEvent.clientY - rect.top;
      var _this$getPosition2 = this.getPosition(_objectSpread(_objectSpread({}, event), {}, {
          diffX: diffX,
          diffY: diffY
        })),
        top = _this$getPosition2.top,
        left = _this$getPosition2.left;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isDragged: true,
          isDragging: true,
          top: top,
          left: left,
          diffX: diffX,
          diffY: diffY
        });
      }, function () {
        document.body.classList.add(CLASS_IFRAME_BACKDROP_DISPLAYED);
        document.body.addEventListener('mousemove', _this4.handleDrag, false);
        document.body.addEventListener('mouseleave', _this4.handleDragEnd, false);
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(event) {
      var _this5 = this;
      if (!this.state.isDragging) {
        return;
      }
      var _this$getPosition3 = this.getPosition(event),
        top = _this$getPosition3.top,
        left = _this$getPosition3.left;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isDragged: true,
          isDragging: false,
          top: top,
          left: left,
          diffX: 0,
          diffY: 0
        });
      }, function () {
        document.body.classList.remove(CLASS_IFRAME_BACKDROP_DISPLAYED);
        document.body.removeEventListener('mousemove', _this5.handleDrag);
        document.body.removeEventListener('mouseleave', _this5.handleDragEnd);
      });
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(event) {
      event.preventDefault();
      var _this$getPosition4 = this.getPosition(event),
        top = _this$getPosition4.top,
        left = _this$getPosition4.left;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isDragged: true,
          isDragging: true,
          top: top,
          left: left
        });
      });
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(ref) {
      this._refWrapper = ref;
    }
  }, {
    key: "setDragHandlerRef",
    value: function setDragHandlerRef(ref) {
      this._refDragHandler = ref;
    }
  }, {
    key: "renderInfobarCollapseBtn",
    value: function renderInfobarCollapseBtn() {
      var btnClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
        'btn ibexa-btn ibexa-btn--tertiary ibexa-btn--no-text c-pb-sidebar__infobar-toggler': true,
        'c-pb-sidebar__infobar-toggler--collapsed': this.state.isCollapsed
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: btnClassName,
        onClick: this.toggleCollapsedState,
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "collapse",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "renderSidebarBlocks",
    value: function renderSidebarBlocks() {
      var _this6 = this;
      var _this$props = this.props,
        blocksToRender = _this$props.blocksToRender,
        onBlockDrag = _this$props.onBlockDrag,
        onBlockDragStart = _this$props.onBlockDragStart,
        isAddingBlocksEnabled = _this$props.isAddingBlocksEnabled;
      var blockFilterQuery = this.state.blockFilterQuery;
      var blockFilterQueryLowerCase = blockFilterQuery.toLowerCase();
      var blocksByCategories = blocksToRender.reduce(function (output, config) {
        var blockNameLowerCase = config.name.toLowerCase();
        var isHidden = !blockNameLowerCase.includes(blockFilterQueryLowerCase);
        if (!(config.category in output)) {
          output[config.category] = [];
        }
        output[config.category].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_block_sidebar_block__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: config.type,
          type: config.type,
          name: config.name,
          thumbnail: config.thumbnail,
          onDragStart: onBlockDragStart,
          onDrag: onBlockDrag,
          isDraggable: isAddingBlocksEnabled,
          isHidden: isHidden
        }));
        return output;
      }, {});
      return Object.keys(blocksByCategories).map(function (blockCategory) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_block_sidebar_blocks_group__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: blockCategory,
          key: "block-group-".concat(blockCategory),
          onCollapseChange: _this6.updatePositionAndDimensions
        }, blocksByCategories[blockCategory]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        isCollapsed = _this$state2.isCollapsed,
        isDragged = _this$state2.isDragged,
        top = _this$state2.top,
        left = _this$state2.left;
      var wrapperAttrs = {
        ref: this.setWrapperRef,
        className: (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
          'c-pb-sidebar': true,
          'c-pb-sidebar--draggable': true,
          'c-pb-sidebar--collapsed': isCollapsed
        })
      };
      var title = Translator.trans( /*@Desc("Elements")*/'sidebar.title', {}, 'page_builder');
      var blockFilterPlaceholder = Translator.trans( /*@Desc("Search...")*/'block_filter.placeholder', {}, 'page_builder');
      if (isDragged) {
        wrapperAttrs.style = {
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          position: 'fixed'
        };
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(this.renderInfobarCollapseBtn(), this.infobarTogglerContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", wrapperAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar__action-bar",
        onMouseDown: this.handleDragStart,
        ref: this.setDragHandlerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar__icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "drag",
        extraClasses: "ibexa-icon--tiny-small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar__toggler",
        onClick: this.toggleCollapsedState
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "box-collapse",
        extraClasses: "ibexa-icon--small"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar__title-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "c-pb-sidebar__title"
      }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar__search-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        name: "filter",
        placeholder: blockFilterPlaceholder,
        value: this.state.blockFilterQuery,
        onChange: this.updateBlockFilterQuery,
        className: "form-control ibexa-input ibexa-input--text c-pb-sidebar__sidebar-filter"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-sidebar__list"
      }, this.renderSidebarBlocks())));
    }
  }]);
  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Sidebar.propTypes = {
  blocksToRender: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),
  onBlockDrag: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onBlockDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  isAddingBlocksEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  isCollapsed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
Sidebar.defaultProps = {
  isCollapsed: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-dom/client */ "./public/bundles/ibexaadminuiassets/vendors/react-dom/client.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/iframe/iframe */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
/* harmony import */ var _components_block_preview_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block/preview.block */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/sidebar/sidebar.js");
/* harmony import */ var _components_layout_selector_layout_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout-selector/layout.selector */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js");
/* harmony import */ var _components_layout_switcher_layout_switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout-switcher/layout.switcher */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js");
/* harmony import */ var _components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/error-boundary/error.boundary */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js");
/* harmony import */ var _timeline_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../timeline.module */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline.module.js");
/* harmony import */ var _guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guid-generator/guid.generator */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js");
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/preview.service */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js");
/* harmony import */ var _services_timeline_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/timeline.service */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js");
/* harmony import */ var _helpers_deep_clone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/deep.clone */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
















var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_HIGHLIGHT = 'c-pb-block-preview--highlighted';
var CLASS_ZONE = 'm-page-builder__zone';
var CLASS_ZONE_DRAGOVER = 'm-page-builder__zone--dragover';
var CLASS_PAGE_BUILDER_DISABLED = 'ibexa-pb-app--is-disabled';
var CLASS_GO_BACK_ENABLED = 'ibexa-pb-app--go-back-enabled';
var SELECTOR_PLACEHOLDER = '.droppable-placeholder';
var SELECTOR_ZONE = '[data-ibexa-zone-id]';
var SELECTOR_SAVE_DRAFT = '#ezplatform_content_forms_content_edit_saveDraft';
var PLACEHOLDER_TYPE_ZONE = 'zone';
var IDENTIFIER_BLOCK_DATA_ATTRIBUTE = 'ezBlockId';
var ELEMENT_DIV = 'div';
var TIMEOUT_REMOVE_HIGHLIGHT = 3000;
var BLOCKS_BASE_STATE = {
  shouldDisplayError: false,
  isValid: false,
  preview: ''
};
var PageBuilder = /*#__PURE__*/function (_Component) {
  _inherits(PageBuilder, _Component);
  var _super = _createSuper(PageBuilder);
  function PageBuilder(props) {
    var _this;
    _classCallCheck(this, PageBuilder);
    _this = _super.call(this, props);
    _this.requestForm = _this.requestForm.bind(_assertThisInitialized(_this));
    _this.handleLayoutSelectorCancelExternal = _this.handleLayoutSelectorCancelExternal.bind(_assertThisInitialized(_this));
    _this.handleLayoutSelectorCancelInternal = _this.handleLayoutSelectorCancelInternal.bind(_assertThisInitialized(_this));
    _this.handleLayoutSelectorCancelOnCreate = _this.handleLayoutSelectorCancelOnCreate.bind(_assertThisInitialized(_this));
    _this.handleLayoutSelectorConfirm = _this.handleLayoutSelectorConfirm.bind(_assertThisInitialized(_this));
    _this.handleIframeLoad = _this.handleIframeLoad.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    _this.handleDragStartSidebarBlock = _this.handleDragStartSidebarBlock.bind(_assertThisInitialized(_this));
    _this.handleDragStartPreviewBlock = _this.handleDragStartPreviewBlock.bind(_assertThisInitialized(_this));
    _this.handleElementDragOver = _this.handleElementDragOver.bind(_assertThisInitialized(_this));
    _this.handleBlockRemove = _this.handleBlockRemove.bind(_assertThisInitialized(_this));
    _this.renderSinglePreviewBlock = _this.renderSinglePreviewBlock.bind(_assertThisInitialized(_this));
    _this.handleZoneDragOver = _this.handleZoneDragOver.bind(_assertThisInitialized(_this));
    _this.handleBlockDataUpdate = _this.handleBlockDataUpdate.bind(_assertThisInitialized(_this));
    _this.updateBlocksPreview = _this.updateBlocksPreview.bind(_assertThisInitialized(_this));
    _this.updateBlocksPreviewState = _this.updateBlocksPreviewState.bind(_assertThisInitialized(_this));
    _this.attachDocumentDropListeners = _this.attachDocumentDropListeners.bind(_assertThisInitialized(_this));
    _this.getPreviewDocument = _this.getPreviewDocument.bind(_assertThisInitialized(_this));
    _this.getPreviewWindow = _this.getPreviewWindow.bind(_assertThisInitialized(_this));
    _this.getBlockPreviewNode = _this.getBlockPreviewNode.bind(_assertThisInitialized(_this));
    _this.getPlaceholderPreviewNode = _this.getPlaceholderPreviewNode.bind(_assertThisInitialized(_this));
    _this.getBlocksFromZones = _this.getBlocksFromZones.bind(_assertThisInitialized(_this));
    _this.disableInIframeClicks = _this.disableInIframeClicks.bind(_assertThisInitialized(_this));
    _this.setPageFieldTypeFormFieldValue = _this.setPageFieldTypeFormFieldValue.bind(_assertThisInitialized(_this));
    _this.validateAllBlocksData = _this.validateAllBlocksData.bind(_assertThisInitialized(_this));
    _this.validateAllBlocksAvailability = _this.validateAllBlocksAvailability.bind(_assertThisInitialized(_this));
    _this.validateLayoutData = _this.validateLayoutData.bind(_assertThisInitialized(_this));
    _this.areBlocksValid = _this.areBlocksValid.bind(_assertThisInitialized(_this));
    _this.validateBlockData = _this.validateBlockData.bind(_assertThisInitialized(_this));
    _this.setBlockValidState = _this.setBlockValidState.bind(_assertThisInitialized(_this));
    _this.initBlocksPreviewState = _this.initBlocksPreviewState.bind(_assertThisInitialized(_this));
    _this.handleDragBlock = _this.handleDragBlock.bind(_assertThisInitialized(_this));
    _this.showLayoutSelector = _this.showLayoutSelector.bind(_assertThisInitialized(_this));
    _this.setIframeRef = _this.setIframeRef.bind(_assertThisInitialized(_this));
    _this.getPlaceholderNodes = _this.getPlaceholderNodes.bind(_assertThisInitialized(_this));
    _this.handleDragOverTimeout = _this.handleDragOverTimeout.bind(_assertThisInitialized(_this));
    _this.cancelDropState = _this.cancelDropState.bind(_assertThisInitialized(_this));
    _this.setIsEditableState = _this.setIsEditableState.bind(_assertThisInitialized(_this));
    _this.setDocumentDragOverEventHandler = _this.setDocumentDragOverEventHandler.bind(_assertThisInitialized(_this));
    _this.unsetDocumentDragOverEventHandler = _this.unsetDocumentDragOverEventHandler.bind(_assertThisInitialized(_this));
    _this.setClientYPosition = _this.setClientYPosition.bind(_assertThisInitialized(_this));
    _this.updateTimelineEvents = _this.updateTimelineEvents.bind(_assertThisInitialized(_this));
    _this.updateTimelineEventsState = _this.updateTimelineEventsState.bind(_assertThisInitialized(_this));
    _this.handleOnBlockClick = _this.handleOnBlockClick.bind(_assertThisInitialized(_this));
    _this.handleOnBlockOutsideClick = _this.handleOnBlockOutsideClick.bind(_assertThisInitialized(_this));
    _this.clearZoneDragOverState = _this.clearZoneDragOverState.bind(_assertThisInitialized(_this));
    _this.updatePreviewRequestParams = _this.updatePreviewRequestParams.bind(_assertThisInitialized(_this));
    _this.blockConfigRequestForm = window.document.querySelector('form[name="request_block_configuration"]');
    _this.blockConfigTextarea = _this.blockConfigRequestForm.querySelector('#request_block_configuration_page');
    _this.blockConfigBlocksInput = _this.blockConfigRequestForm.querySelector('#request_block_configuration_block_id');
    _this.blockConfigSubmit = _this.blockConfigRequestForm.querySelector('#request_block_configuration_request');
    _this.updatePreviewRequestParamsComponents = window.ibexa.pageBuilder.components ? window.ibexa.pageBuilder.components.updatePreviewRequestParams : [];
    _this.onDragOverTimeout = null;
    _this.contentEditForm = null;
    _this._clientY = 0;
    var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
    var blocksMap = _this.initBlocksMap();
    var layoutSelectorTitle = Translator.trans( /*@Desc("Page creation")*/'layout_selector.create.title', {}, 'page_builder');
    var layoutSelectorConfirmBtnLabel = Translator.trans( /*@Desc("Create draft")*/'layout_selector.create.confirm.label', {}, 'page_builder');
    _this.state = _objectSpread(_objectSpread({}, props.getInitDragDropState()), {}, {
      draggedPreviewBlockData: null,
      draggedSidebarBlockType: null,
      iframeLoaded: false,
      isIframelessMode: false,
      previewUrl: props.previewUrl,
      fieldValue: props.fieldValue,
      blocksMap: blocksMap,
      shouldUpdateBlocksPreviewState: !!Object.keys(blocksMap).length,
      isSwitchingLayout: false,
      shouldCreateBlocksPreviewNodes: false,
      layoutSelectorTitle: layoutSelectorTitle,
      layoutSelectorConfirmBtnLabel: layoutSelectorConfirmBtnLabel,
      timestamp: convertDateToTimezone(new Date()).valueOf(),
      timelineEvents: ibexa.pageBuilder.timeline.events,
      activeBlockId: null,
      isOverZone: false,
      dragOverZoneId: null,
      blockPreviewPagePreviewRequestParams: {},
      isValidActiveLayout: _this.isValidActiveLayout(props.fieldValue),
      layoutSelected: false,
      hasLayoutValidationError: false
    });
    return _this;
  }
  _createClass(PageBuilder, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$state = this.state,
        draggedPreviewBlockData = _this$state.draggedPreviewBlockData,
        draggedSidebarBlockType = _this$state.draggedSidebarBlockType,
        blocksMap = _this$state.blocksMap;
      var isDuringDragDrop = !!draggedPreviewBlockData || !!draggedSidebarBlockType;
      var willBeDuringDragDrop = !!nextState.draggedPreviewBlockData || !!nextState.draggedSidebarBlockType;
      var blocksMapWillChange = blocksMap !== nextState.blocksMap;
      var dragDropContinues = isDuringDragDrop && willBeDuringDragDrop;
      var shouldNotUpdate = dragDropContinues && !blocksMapWillChange;
      return !shouldNotUpdate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state2 = this.state,
        iframeLoaded = _this$state2.iframeLoaded,
        shouldUpdateBlocksPreviewState = _this$state2.shouldUpdateBlocksPreviewState,
        shouldCreateBlocksPreviewNodes = _this$state2.shouldCreateBlocksPreviewNodes,
        isOverZone = _this$state2.isOverZone;
      if (!iframeLoaded) {
        return;
      }
      if (shouldUpdateBlocksPreviewState) {
        this.initBlocksPreviewState();
      }
      if (shouldCreateBlocksPreviewNodes) {
        this.createBlocksPreviewNodes();
      }
      if (!isOverZone) {
        this.props.removePlaceholders(this.getPlaceholderNodes(), this.props.removePlaceholderWithAnimation);
      }
      this.renderPreviewBlocks();
      this.manageZoneEventHandlers();
      this.disableInIframeClicks();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var _this$state3 = this.state,
        iframeLoaded = _this$state3.iframeLoaded,
        shouldUpdateBlocksPreviewState = _this$state3.shouldUpdateBlocksPreviewState;
      var isCreateMode = this.isCreateMode();
      this.modalContainer = document.createElement(ELEMENT_DIV);
      this.udwContainer = document.createElement(ELEMENT_DIV);
      this.airtimeContainer = document.createElement(ELEMENT_DIV);
      this.layoutSwitcherContainer = document.querySelector('.ibexa-pb-action-bar__layout-switcher-toggler');
      this.pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
      this.timelineContainer = document.querySelector('.ibexa-pb-timeline-wrapper');
      this.modalContainer.classList.add('m-page-builder__modal-container');
      this.udwContainer.classList.add('m-page-builder__udw-container');
      this.airtimeContainer.classList.add('m-page-builder__airtime-container');
      document.body.appendChild(this.modalContainer);
      document.body.appendChild(this.udwContainer);
      document.body.appendChild(this.airtimeContainer);
      document.body.classList.add(CLASS_PAGE_BUILDER_DISABLED, CLASS_GO_BACK_ENABLED);
      if (iframeLoaded) {
        this.manageZoneEventHandlers();
        this.disableInIframeClicks();
        if (shouldUpdateBlocksPreviewState) {
          this.initBlocksPreviewState();
        }
        document.body.classList.remove(CLASS_PAGE_BUILDER_DISABLED, CLASS_GO_BACK_ENABLED);
      }
      if (isCreateMode) {
        document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
          cancelable: true,
          detail: {}
        }));
        this.setState(function () {
          return {
            isIframelessMode: true
          };
        });
      }
      if (!this.state.isValidActiveLayout) {
        this.showLayoutSelector();
      }
      if (!this.validateAllBlocksAvailability()) {
        window.ibexa.helpers.notification.showErrorNotification(Translator.trans( /*@Desc("One or more blocks is not available in this page")*/'block.no_availability', {}, 'page_builder'));
      }
      document.body.addEventListener('ibexa-pb:validation:layout', function (_ref) {
        var isValid = _ref.detail.isValid;
        _this2.setState(function () {
          return {
            hasLayoutValidationError: !isValid
          };
        });
      }, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalContainer);
      document.body.removeChild(this.udwContainer);
      document.body.removeChild(this.airtimeContainer);
    }
  }, {
    key: "isCreateMode",
    value: function isCreateMode() {
      return ['create', 'translate_without_base_language'].includes(this.props.mode);
    }
  }, {
    key: "isValidActiveLayout",
    value: function isValidActiveLayout(fieldValue) {
      return this.props.layoutsConfig.some(function (layoutConfig) {
        return layoutConfig.id === fieldValue.layout && layoutConfig.visible;
      });
    }
  }, {
    key: "updatePreviewRequestParams",
    value: function updatePreviewRequestParams(blockPreviewPagePreviewRequestParams) {
      var _this3 = this;
      var blocksIds = Object.keys(this.state.blocksMap);
      this.setState(function () {
        return {
          blockPreviewPagePreviewRequestParams: blockPreviewPagePreviewRequestParams
        };
      }, function () {
        return _this3.updateBlocksPreview(blocksIds);
      });
    }
  }, {
    key: "handleOnBlockClick",
    value: function handleOnBlockClick(activeBlockId) {
      this.setState(function () {
        return {
          activeBlockId: activeBlockId
        };
      });
    }
  }, {
    key: "handleOnBlockOutsideClick",
    value: function handleOnBlockOutsideClick(blockId) {
      if (blockId !== this.state.activeBlockId) {
        return;
      }
      this.setState(function () {
        return {
          activeBlockId: null
        };
      });
    }
  }, {
    key: "validateAllBlocksAvailability",
    value: function validateAllBlocksAvailability() {
      var blocks = this.props.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
      var blocksConfig = this.props.blocksConfig;
      return blocks.every(function (block) {
        var blockConfig = blocksConfig.find(function (config) {
          return config.type === block.type;
        });
        return blockConfig.visible;
      });
    }
  }, {
    key: "createBlocksPreviewNodes",
    value: function createBlocksPreviewNodes() {
      var fieldValue = this.getPageFieldTypeState();
      var preview = this.getPreviewDocument();
      fieldValue.zones.forEach(function (zone) {
        zone.blocks.forEach(function (block) {
          var container = document.createElement(ELEMENT_DIV);
          container.dataset.ezBlockId = block.id;
          container.dataset.zoneId = zone.id;
          preview.querySelector("[data-ibexa-zone-id=\"".concat(zone.id, "\"]")).append(container);
        });
      });
      this.setState(function () {
        return {
          shouldCreateBlocksPreviewNodes: false
        };
      });
    }
  }, {
    key: "initBlocksMap",
    value: function initBlocksMap() {
      var _this4 = this;
      var blocks = this.props.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
      var blocksConfig = this.props.blocksConfig;
      var blocksMap = blocks.reduce(function (total, block) {
        var blockConfig = blocksConfig.find(function (config) {
          return config.type === block.type;
        });
        total[block.id] = _objectSpread(_objectSpread({}, BLOCKS_BASE_STATE), {}, {
          config: blockConfig,
          isValid: _this4.validateBlockData(block, blockConfig),
          isVisible: block.visible
        });
        return total;
      }, {});
      return blocksMap;
    }
  }, {
    key: "initBlocksPreviewState",
    value: function initBlocksPreviewState() {
      var _this5 = this;
      var blocksMap = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_14__["default"])(this.state.blocksMap);
      Object.entries(blocksMap).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          id = _ref3[0],
          meta = _ref3[1];
        meta.preview = _this5.getBlockPreviewNode(id).innerHTML;
      });
      this.setState(function () {
        return {
          blocksMap: blocksMap,
          shouldUpdateBlocksPreviewState: false
        };
      });
    }
  }, {
    key: "getBlocksFromZones",
    value: function getBlocksFromZones() {
      return this.state.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
    }
  }, {
    key: "validateAllBlocksData",
    value: function validateAllBlocksData() {
      var _this$areBlocksValid = this.areBlocksValid(),
        areValid = _this$areBlocksValid.areValid,
        blocksMap = _this$areBlocksValid.blocksMap;
      if (areValid) {
        return true;
      }
      this.setState(function () {
        return {
          blocksMap: blocksMap
        };
      });
      return false;
    }
  }, {
    key: "validateLayoutData",
    value: function validateLayoutData() {
      return this.state.isValidActiveLayout;
    }
  }, {
    key: "setBlockValidState",
    value: function setBlockValidState(block) {
      var isValid = this.validateBlockData(block, this.state.blocksMap[block.id].config);
      return _objectSpread(_objectSpread({}, block), {}, {
        isValid: isValid
      });
    }
  }, {
    key: "areBlocksValid",
    value: function areBlocksValid() {
      var _this6 = this;
      var blocksMap = this.getBlocksMapState();
      this.state.fieldValue.zones.forEach(function (zone) {
        zone.blocks.forEach(function (block) {
          var isValid = _this6.validateBlockData(block, blocksMap[block.id].config);
          if (!isValid) {
            blocksMap[block.id] = _objectSpread(_objectSpread({}, (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_14__["default"])(blocksMap[block.id])), {}, {
              isValid: false
            });
          }
          blocksMap[block.id].shouldDisplayError = !blocksMap[block.id].isValid;
        });
      });
      return {
        blocksMap: blocksMap,
        areValid: Object.values(blocksMap).every(function (block) {
          return block.isValid;
        })
      };
    }
  }, {
    key: "validateBlockData",
    value: function validateBlockData(block, config) {
      if (config.visible) {
        return block.attributes.every(function (attribute) {
          var _attrConfig$constrain;
          var attrConfig = config.attributes.find(function (attributeConfig) {
            return attributeConfig.id === attribute.name;
          });
          if (attrConfig !== null && attrConfig !== void 0 && (_attrConfig$constrain = attrConfig.constraints) !== null && _attrConfig$constrain !== void 0 && _attrConfig$constrain.not_blank) {
            var value = attribute.value;
            if (value === null || value === undefined || value === '') {
              return false;
            }
            return !!"".concat(value).trim().length;
          }
          return true;
        });
      }
      return false;
    }
  }, {
    key: "updateBlocksPreview",
    value: function updateBlocksPreview(blockIds) {
      var hasBlockIds = Array.isArray(blockIds) && blockIds.length;
      blockIds = hasBlockIds ? blockIds : this.getBlocksFromZones().map(function (block) {
        return block.id;
      });
      var page = this.stringifyPageFieldTypeState();
      var now = new Date().getTime();
      var referenceTimestamp = Math.max(now, this.state.timestamp);
      var promise = (0,_services_preview_service__WEBPACK_IMPORTED_MODULE_12__.getBlockPreview)({
        page: page,
        blockIds: blockIds,
        intent: this.props.mode,
        parameters: _objectSpread(_objectSpread({}, this.props.blockPreviewRequestParams), {}, {
          intentParameters: this.props.intentParameters,
          pagePreview: _objectSpread({
            referenceTimestamp: Math.floor(referenceTimestamp / 1000)
          }, this.state.blockPreviewPagePreviewRequestParams)
        })
      }, this.props.previewSiteaccess);
      this.setPageFieldTypeFormFieldValue(page);
      promise.then(function (response) {
        return response.json();
      }).then(this.updateBlocksPreviewState)["catch"](function (error) {
        window.ibexa.helpers.notification.showErrorNotification('Cannot update blocks preview');
        console.error('Cannot update blocks preview', error);
      });
    }
  }, {
    key: "updateBlocksPreviewState",
    value: function updateBlocksPreviewState(data) {
      var _this7 = this;
      var blockIds = [];
      var blocksMap = this.getBlocksMapState();
      var fieldValue = this.getPageFieldTypeState();
      Object.entries(data.blocks).forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          id = _ref5[0],
          meta = _ref5[1];
        var _fieldValue$zones$red = fieldValue.zones.reduce(function (total, zone) {
            return [].concat(_toConsumableArray(total), [zone.blocks.find(function (blockEntry) {
              return blockEntry.id === id;
            })]);
          }, []).filter(function (blockEntry) {
            return blockEntry;
          }),
          _fieldValue$zones$red2 = _slicedToArray(_fieldValue$zones$red, 1),
          block = _fieldValue$zones$red2[0];
        blocksMap[id].isNew = false;
        blocksMap[id].preview = meta.html;
        blocksMap[id].isVisible = meta.data.visible;
        blocksMap[id].shouldDisplayError = true;
        blocksMap[id].isValid = _this7.validateBlockData(block, blocksMap[id].config);
        blockIds.push(id);
      });
      this.setState(function () {
        return {
          blocksMap: blocksMap
        };
      }, function () {
        _this7.getPreviewDocument().body.dispatchEvent(new CustomEvent('ibexa-post-update-blocks-preview', {
          detail: {
            fieldValue: fieldValue,
            blocksMap: blocksMap,
            blockIds: blockIds
          }
        }));
      });
    }
  }, {
    key: "updateTimelineEvents",
    value: function updateTimelineEvents() {
      var page = this.stringifyPageFieldTypeState();
      var promise = (0,_services_timeline_service__WEBPACK_IMPORTED_MODULE_13__.getTimelineEvents)({
        page: page,
        intent: this.props.mode,
        parameters: _objectSpread(_objectSpread({}, this.props.timelineGetEventsRequestParams), {}, {
          intentParameters: this.props.intentParameters,
          pagePreview: {
            referenceTimestamp: parseInt(this.state.timestamp / 1000, 10)
          }
        })
      });
      promise.then(function (response) {
        return response.json();
      }).then(this.updateTimelineEventsState);
    }
  }, {
    key: "updateTimelineEventsState",
    value: function updateTimelineEventsState(data) {
      this.setState(function () {
        return {
          timelineEvents: data.events
        };
      });
    }
  }, {
    key: "getBlocksMapState",
    value: function getBlocksMapState() {
      return (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_14__["default"])(this.state.blocksMap);
    }
  }, {
    key: "getPageFieldTypeState",
    value: function getPageFieldTypeState() {
      return (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_14__["default"])(this.state.fieldValue);
    }
  }, {
    key: "stringifyPageFieldTypeState",
    value: function stringifyPageFieldTypeState() {
      return JSON.stringify(this.state.fieldValue);
    }
  }, {
    key: "setPageFieldTypeFormFieldValue",
    value: function setPageFieldTypeFormFieldValue(page) {
      var fieldSelector = window.ibexa.pageBuilder.config.pageFieldValueSelector.trim();
      if (!fieldSelector || !fieldSelector.length) {
        console.error('Missing page fieldtype form field selector!');
        return;
      }
      document.querySelector(fieldSelector).value = page;
    }
  }, {
    key: "handleBlockDataUpdate",
    value: function handleBlockDataUpdate(_ref6) {
      var _this8 = this;
      var blockData = _ref6.blockData,
        isVisible = _ref6.isVisible;
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      fieldValue.zones = fieldValue.zones.map(function (zone) {
        zone.blocks = zone.blocks.map(function (block) {
          if (block.id === blockData.id) {
            block = blockData;
          }
          return _objectSpread({}, block);
        });
        return zone;
      });
      blocksMap[blockData.id].isVisible = !!isVisible;
      this.setState(function () {
        return {
          fieldValue: fieldValue,
          blocksMap: blocksMap
        };
      }, function () {
        _this8.updateBlocksPreview([blockData.id]);
        _this8.updateTimelineEvents();
      });
    }
  }, {
    key: "getPreviewWindow",
    value: function getPreviewWindow() {
      return this._refIframeComponent._refIframe.contentWindow;
    }
  }, {
    key: "getPreviewDocument",
    value: function getPreviewDocument() {
      return this._refIframeComponent._refIframe.contentDocument;
    }
  }, {
    key: "getBlockPreviewNode",
    value: function getBlockPreviewNode(id) {
      return this.getPreviewDocument().querySelector("[data-ez-block-id=\"".concat(id, "\"]:not(").concat(SELECTOR_PLACEHOLDER, ")"));
    }
  }, {
    key: "getPlaceholderPreviewNode",
    value: function getPlaceholderPreviewNode() {
      return this.getPreviewDocument().querySelector(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "removeBlockDataFromZone",
    value: function removeBlockDataFromZone(zones, blockId) {
      return zones.map(function (zone) {
        zone.blocks = zone.blocks.filter(function (block) {
          return block.id !== blockId;
        });
        return zone;
      });
    }
  }, {
    key: "insertBlockDataIntoZone",
    value: function insertBlockDataIntoZone(zones, newBlock, zoneId, nextBlockId) {
      var updatedZones = zones.map(function (zone) {
        var isSameZone = zone.id === zoneId;
        if (isSameZone && nextBlockId) {
          var nextBlock = zone.blocks.find(function (block) {
            return block.id === nextBlockId;
          });
          var insertIndex = nextBlock ? zone.blocks.indexOf(nextBlock) : 0;
          zone.blocks.splice(insertIndex, 0, newBlock);
        } else if (isSameZone && !nextBlockId) {
          zone.blocks = [].concat(_toConsumableArray(zone.blocks), [newBlock]);
        }
        return zone;
      });
      return updatedZones;
    }
  }, {
    key: "getBlock",
    value: function getBlock(target) {
      return this.props.getElement(target, function (element) {
        return element.dataset && element.dataset.ezBlockId;
      });
    }
  }, {
    key: "handleBlockRemove",
    value: function handleBlockRemove(block) {
      var _this9 = this;
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      fieldValue.zones = this.removeBlockDataFromZone(fieldValue.zones, block.id);
      delete blocksMap[block.id];
      this.setState(function () {
        return {
          draggedSidebarBlockType: null,
          draggedPreviewBlockData: null,
          fieldValue: fieldValue,
          blocksMap: blocksMap
        };
      }, function () {
        return _this9.setPageFieldTypeFormFieldValue(_this9.stringifyPageFieldTypeState());
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.unsetDocumentDragOverEventHandler();
      if (this.state.draggedSidebarBlockType) {
        this.handleDropSidebarBlock();
      } else if (this.state.draggedPreviewBlockData) {
        this.handleDropPreviewBlock();
      }
      this.clearZoneDragOverState(event.currentTarget);
      this.setPageFieldTypeFormFieldValue(this.stringifyPageFieldTypeState());
    }
  }, {
    key: "clearZoneDragOverState",
    value: function clearZoneDragOverState(zone) {
      zone.classList.remove(CLASS_ZONE_DRAGOVER);
      return zone;
    }
  }, {
    key: "cancelDropState",
    value: function cancelDropState() {
      var initDragDropState = this.props.getInitDragDropState();
      this.unsetDocumentDragOverEventHandler();
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          isOverZone: false,
          dragOverZoneId: null
        });
      });
    }
  }, {
    key: "handleDropPreviewBlock",
    value: function handleDropPreviewBlock() {
      var _placeholder$classLis;
      var placeholder = this.getPlaceholderPreviewNode();
      if (!placeholder) {
        return this.cancelDropState();
      }
      var data = this.state.draggedPreviewBlockData;
      var zoneId = placeholder.dataset.zoneId;
      var nextBlockId = placeholder.dataset.ezBlockId;
      var fieldValue = this.getPageFieldTypeState();
      var initDragDropState = this.props.getInitDragDropState();
      var droppedBlockId = data.block.id;
      if (nextBlockId === droppedBlockId) {
        fieldValue.zones.forEach(function (zone) {
          var nextBlockData = zone.blocks.find(function (block) {
            return block.id === nextBlockId;
          });
          if (nextBlockData) {
            var afterNextBlockIndex = zone.blocks.indexOf(nextBlockData) + 1;
            nextBlockId = zone.blocks[afterNextBlockIndex] ? zone.blocks[afterNextBlockIndex].id : null;
          }
        });
      }
      fieldValue.zones = this.removeBlockDataFromZone(_toConsumableArray(fieldValue.zones), data.block.id);
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, data.block, zoneId, nextBlockId);
      data.unMountBlock();
      (_placeholder$classLis = placeholder.classList).add.apply(_placeholder$classLis, _toConsumableArray(data.wrapperClasses));
      placeholder.classList.remove(CLASS_PLACEHOLDER);
      placeholder.dataset.ezBlockId = data.block.id;
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          fieldValue: fieldValue
        });
      });
    }
  }, {
    key: "handleDropSidebarBlock",
    value: function handleDropSidebarBlock() {
      var _this10 = this;
      var placeholder = this.getPlaceholderPreviewNode();
      if (!placeholder) {
        return this.cancelDropState();
      }
      var config = this.props.blocksConfig.find(function (configEntry) {
        return configEntry.type === _this10.state.draggedSidebarBlockType;
      });
      var zoneId = placeholder.dataset.zoneId;
      var nextBlockId = this.props.findNextElementIdentifier(placeholder, IDENTIFIER_BLOCK_DATA_ATTRIBUTE);
      var newBlock = {
        id: (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_11__["default"])('b-'),
        type: config.type,
        name: config.name,
        view: Object.keys(config.views)[0],
        attributes: config.attributes.reduce(function (total, attr) {
          total.push({
            id: (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_11__["default"])('a-'),
            name: attr.id,
            value: attr.value || null
          });
          return total;
        }, [])
      };
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      var initDragDropState = this.props.getInitDragDropState();
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, newBlock, zoneId, nextBlockId);
      blocksMap[newBlock.id] = _objectSpread(_objectSpread({}, BLOCKS_BASE_STATE), {}, {
        config: config,
        isVisible: true,
        isNew: true
      });
      placeholder.classList.remove(CLASS_PLACEHOLDER);
      placeholder.classList.add(CLASS_HIGHLIGHT);
      placeholder.dataset.ezBlockId = newBlock.id;
      __webpack_require__.g.setTimeout(function () {
        placeholder.classList.remove(CLASS_HIGHLIGHT);
      }, TIMEOUT_REMOVE_HIGHLIGHT);
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          fieldValue: fieldValue,
          blocksMap: blocksMap
        });
      });
    }
  }, {
    key: "setClientYPosition",
    value: function setClientYPosition(_ref7) {
      var clientY = _ref7.clientY;
      this._clientY = clientY;
    }
  }, {
    key: "setDocumentDragOverEventHandler",
    value: function setDocumentDragOverEventHandler() {
      window.document.addEventListener('dragover', this.setClientYPosition, false);
      this.getPreviewDocument().addEventListener('dragover', this.setClientYPosition, false);
    }
  }, {
    key: "unsetDocumentDragOverEventHandler",
    value: function unsetDocumentDragOverEventHandler() {
      window.document.removeEventListener('dragover', this.setClientYPosition);
      this.getPreviewDocument().removeEventListener('dragover', this.setClientYPosition);
    }
  }, {
    key: "handleDragStartSidebarBlock",
    value: function handleDragStartSidebarBlock(draggedSidebarBlockType) {
      this.setDocumentDragOverEventHandler();
      this.setState(function () {
        return {
          draggedSidebarBlockType: draggedSidebarBlockType,
          draggedPreviewBlockData: null
        };
      }, this.attachDocumentDropListeners);
    }
  }, {
    key: "handleDragStartPreviewBlock",
    value: function handleDragStartPreviewBlock(draggedPreviewBlockData) {
      this.setDocumentDragOverEventHandler();
      this.setState(function () {
        return {
          draggedSidebarBlockType: null,
          draggedPreviewBlockData: draggedPreviewBlockData
        };
      }, this.attachDocumentDropListeners);
    }
  }, {
    key: "attachDocumentDropListeners",
    value: function attachDocumentDropListeners() {
      var _this11 = this;
      var elements = [this.getPreviewDocument(), document];
      elements.forEach(function (element) {
        element.ondragover = function () {
          return _this11.props.removePlaceholdersAfterTimeout(_this11.getPlaceholderNodes, _this11.handleDragOverTimeout);
        };
      });
    }
  }, {
    key: "handleDragOverTimeout",
    value: function handleDragOverTimeout() {
      this.cancelDropState();
    }
  }, {
    key: "handleIframeLoad",
    value: function handleIframeLoad() {
      var _this12 = this;
      if (this.state.iframeLoaded) {
        return;
      }
      var previewDoc = this.getPreviewDocument();
      var link = previewDoc.createElement('link');
      link.id = 'ibexa-pb-app-styles';
      link.rel = 'stylesheet';
      link.href = this.props.iframeCss;
      this.getPreviewDocument().body.appendChild(link);
      this.setState(function () {
        return {
          iframeLoaded: true
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-pb-app-iframe-loaded'));
        document.body.classList.remove(CLASS_PAGE_BUILDER_DISABLED);
        previewDoc.onbeforeunload = function () {
          return _this12.setState(function () {
            return {
              iframeLoaded: false
            };
          });
        };
      });
    }
  }, {
    key: "handleZoneDragOver",
    value: function handleZoneDragOver(_ref8) {
      var _this13 = this;
      var target = _ref8.target;
      var _this$state4 = this.state,
        dragOverZoneId = _this$state4.dragOverZoneId,
        placeholderType = _this$state4.placeholderType;
      var zoneId = target.dataset.ibexaZoneId;
      if (!zoneId || zoneId === dragOverZoneId && placeholderType === PLACEHOLDER_TYPE_ZONE) {
        return false;
      }
      this.setState(function () {
        return {
          placeholderType: PLACEHOLDER_TYPE_ZONE,
          dragOverZoneId: zoneId,
          isOverZone: true
        };
      }, function () {
        _this13.getPreviewDocument().querySelectorAll(SELECTOR_ZONE).forEach(_this13.clearZoneDragOverState);
        target.classList.add(CLASS_ZONE_DRAGOVER);
        _this13.props.addPlaceholderInZone(target, _this13.getPlaceholderNodes(), IDENTIFIER_BLOCK_DATA_ATTRIBUTE, _this13.handleElementDragOver);
      });
    }
  }, {
    key: "getPlaceholderNodes",
    value: function getPlaceholderNodes() {
      return this.getPreviewDocument().querySelectorAll(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "handleElementDragOver",
    value: function handleElementDragOver(_ref9) {
      var target = _ref9.target,
        clientY = _ref9.clientY,
        currentTarget = _ref9.currentTarget;
      var block = this.getBlock(target);
      var isPlaceholder = currentTarget.classList.contains(CLASS_PLACEHOLDER);
      if (!block || isPlaceholder) {
        return;
      }
      block.closest(SELECTOR_ZONE).classList.add(CLASS_ZONE_DRAGOVER);
      var placeholders = this.getPlaceholderNodes();
      var _this$state5 = this.state,
        placeholderPosition = _this$state5.placeholderPosition,
        placeholderElementId = _this$state5.placeholderElementId,
        placeholderZoneId = _this$state5.placeholderZoneId;
      var placeholderMeta = this.props.addPlaceholderBesideElement(block, clientY, placeholders, IDENTIFIER_BLOCK_DATA_ATTRIBUTE, this.handleElementDragOver, {
        placeholderPosition: placeholderPosition,
        placeholderElementId: placeholderElementId,
        placeholderZoneId: placeholderZoneId
      });
      this.setState(function () {
        return _objectSpread({
          placeholderType: 'block'
        }, placeholderMeta);
      });
    }
  }, {
    key: "manageZoneEventHandlers",
    value: function manageZoneEventHandlers() {
      var _this14 = this;
      var zones = _toConsumableArray(this.getPreviewDocument().querySelectorAll(SELECTOR_ZONE));
      var callToActionText = Translator.trans( /*@Desc("Drop blocks here")*/'drop.blocks.here', {}, 'page_builder');
      zones.forEach(function (zone) {
        var data = _this14.state.fieldValue.zones.find(function (zoneData) {
          return zoneData.id === zone.dataset.ibexaZoneId;
        });
        if (!data) {
          return;
        }
        zone.classList.add(CLASS_ZONE);
        zone.dataset.callToActionText = callToActionText;
        zone.ondragover = _this14.handleZoneDragOver;
        zone.ondragenter = _this14.handleZoneDragOver;
        zone.ondrop = _this14.handleDrop;
      });
    }
  }, {
    key: "disableInIframeClicks",
    value: function disableInIframeClicks() {
      this.getPreviewDocument().body.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    }
  }, {
    key: "renderPreviewBlocks",
    value: function renderPreviewBlocks() {
      this.getBlocksFromZones().forEach(this.renderSinglePreviewBlock);
    }
  }, {
    key: "renderSinglePreviewBlock",
    value: function renderSinglePreviewBlock(block) {
      var _blockNode$ibexaBlock;
      var blockMeta = _objectSpread({}, this.state.blocksMap[block.id]);
      var blockNode = this.getBlockPreviewNode(block.id);
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var isEditable = this.state.timestamp <= convertDateToTimezone(new Date()).valueOf() && this.state.isValidActiveLayout;
      var blockConfig = this.props.blocksConfig.find(function (blockConfigEntry) {
        return blockConfigEntry.type === block.type;
      });
      if (blockMeta.isNew) {
        if (window.getComputedStyle(blockNode).getPropertyValue('position') === 'static') {
          blockNode.style.position = 'relative';
        }
        this.props.customizeNewBlockNode(blockNode, {
          blockType: blockMeta.config.type,
          pageLayoutIdentifier: this.state.fieldValue.layout,
          zoneId: blockNode.closest(SELECTOR_ZONE).dataset.ibexaZoneId
        });
      }
      blockNode.ibexaBlockRoot = (_blockNode$ibexaBlock = blockNode.ibexaBlockRoot) !== null && _blockNode$ibexaBlock !== void 0 ? _blockNode$ibexaBlock : _react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(blockNode);
      blockNode.ibexaBlockRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_block_preview_block__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: block.id,
        block: block,
        root: blockNode.ibexaBlockRoot,
        meta: blockMeta,
        onDragOver: this.handleElementDragOver,
        onDragStart: this.handleDragStartPreviewBlock,
        onDrag: this.handleDragBlock,
        onRemove: this.handleBlockRemove,
        onBlockDataUpdate: this.handleBlockDataUpdate,
        onConfigPopupOpen: this.requestForm,
        udwContainer: this.udwContainer,
        airtimeContainer: this.airtimeContainer,
        previewWindow: this.getPreviewWindow(),
        isEditable: isEditable,
        forceShowActionMenu: this.state.activeBlockId === block.id,
        onClick: this.handleOnBlockClick,
        onClickOutside: this.handleOnBlockOutsideClick,
        isAvailable: blockConfig.visible
      }));
    }
  }, {
    key: "handleDragBlock",
    value: function handleDragBlock() {
      this.props.scrollContainer({
        clientY: this._clientY
      }, this.getPreviewWindow());
    }
  }, {
    key: "requestForm",
    value: function requestForm(block) {
      this.blockConfigRequestForm.target = block.id;
      this.blockConfigTextarea.value = JSON.stringify(this.state.fieldValue);
      this.blockConfigBlocksInput.value = block.id;
      this.blockConfigRequestForm.submit();
    }
  }, {
    key: "getBlocksData",
    value: function getBlocksData(zones) {
      return zones.map(function (zone) {
        return _objectSpread(_objectSpread({}, zone), {}, {
          blocks: zone.blocks.map(function (block) {
            return block.data;
          })
        });
      });
    }
  }, {
    key: "handleLayoutSelectorCancelExternal",
    value: function handleLayoutSelectorCancelExternal() {
      var isValidActiveLayout = this.state.isValidActiveLayout;
      var isCreateMode = this.isCreateMode();
      if (isCreateMode || !isValidActiveLayout) {
        return false;
      }
      this.setState({
        isSwitchingLayout: false,
        hasLayoutValidationError: false
      });
      return true;
    }
  }, {
    key: "handleLayoutSelectorCancelInternal",
    value: function handleLayoutSelectorCancelInternal() {
      this.setState({
        isSwitchingLayout: !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself')),
        hasLayoutValidationError: false
      });
    }
  }, {
    key: "handleLayoutSelectorCancelOnCreate",
    value: function handleLayoutSelectorCancelOnCreate() {
      var previousHref = window.ibexa.pageBuilder.config.onCreateCancelURL;
      if (previousHref.length) {
        window.location.href = previousHref;
      } else {
        window.history.back();
      }
    }
  }, {
    key: "handleLayoutSelectorConfirm",
    value: function handleLayoutSelectorConfirm(layoutId) {
      var _this15 = this;
      var zones = this.createZonesStructure(layoutId);
      var fieldValue = this.getPageFieldTypeState();
      var isSwitchingLayout = this.state.isSwitchingLayout;
      fieldValue.layout = layoutId;
      fieldValue.zones = zones;
      this.setState(function () {
        return {
          iframeLoaded: false,
          isSwitchingLayout: !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself')),
          hasLayoutValidationError: false,
          shouldCreateBlocksPreviewNodes: isSwitchingLayout,
          fieldValue: fieldValue,
          layoutSelected: true,
          isValidActiveLayout: _this15.isValidActiveLayout(fieldValue)
        };
      }, function () {
        _this15.setPageFieldTypeFormFieldValue(_this15.stringifyPageFieldTypeState());
        window.document.querySelector(SELECTOR_SAVE_DRAFT).click();
      });
    }
  }, {
    key: "createZonesStructure",
    value: function createZonesStructure(layoutId) {
      var layoutConfig = this.props.layoutsConfig.find(function (layout) {
        return layout.id === layoutId;
      });
      var fieldValue = this.getPageFieldTypeState();
      var zones = _toConsumableArray(layoutConfig.zones).map(function (zone) {
        zone.blocks = [];
        return zone;
      });
      if (this.state.isSwitchingLayout) {
        fieldValue.zones.forEach(function (zone, index) {
          var zoneToAddBlocks = zones[index] || zones[zones.length - 1];
          zoneToAddBlocks.blocks = [].concat(_toConsumableArray(zoneToAddBlocks.blocks), _toConsumableArray(zone.blocks));
        });
      }
      return zones;
    }
  }, {
    key: "renderLayoutSelector",
    value: function renderLayoutSelector() {
      var _this$state6 = this.state,
        fieldValue = _this$state6.fieldValue,
        layoutSelectorTitle = _this$state6.layoutSelectorTitle,
        layoutSelectorConfirmBtnLabel = _this$state6.layoutSelectorConfirmBtnLabel,
        isSwitchingLayout = _this$state6.isSwitchingLayout,
        layoutSelected = _this$state6.layoutSelected,
        isValidActiveLayout = _this$state6.isValidActiveLayout;
      var layoutsConfig = this.props.layoutsConfig;
      var isOnlyOneLayout = this.isOnlyOneLayout();
      var isCreateMode = this.isCreateMode();
      if (layoutSelected) {
        return null;
      }
      if (isOnlyOneLayout && isCreateMode) {
        this.handleLayoutSelectorConfirm(fieldValue.layout);
        return null;
      }
      if (!isCreateMode && !isSwitchingLayout) {
        return null;
      }
      var attrs = {
        layouts: layoutsConfig,
        onCancel: isCreateMode ? this.handleLayoutSelectorCancelOnCreate : this.handleLayoutSelectorCancelInternal,
        onConfirm: this.handleLayoutSelectorConfirm,
        modalContainer: this.modalContainer,
        itemSelectedId: fieldValue.layout,
        title: layoutSelectorTitle,
        confirmBtnLabel: layoutSelectorConfirmBtnLabel,
        isVisible: isSwitchingLayout,
        isValidActiveLayout: isValidActiveLayout,
        isCreateMode: isCreateMode,
        displaySaveDraftWarning: !isCreateMode
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_selector_layout_selector__WEBPACK_IMPORTED_MODULE_7__["default"], attrs), this.pageBuilderConfigPanelWrapper);
    }
  }, {
    key: "renderLayoutSwitcher",
    value: function renderLayoutSwitcher() {
      if (this.isOnlyOneLayout()) {
        return null;
      }
      var _this$state7 = this.state,
        isSwitchingLayout = _this$state7.isSwitchingLayout,
        isValidActiveLayout = _this$state7.isValidActiveLayout,
        hasLayoutValidationError = _this$state7.hasLayoutValidationError;
      var onClick = isSwitchingLayout ? this.handleLayoutSelectorCancelInternal : this.showLayoutSelector;
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_switcher_layout_switcher__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isSwitchingLayout: isSwitchingLayout,
        onClick: onClick,
        isDisabled: !isValidActiveLayout,
        hasErrorState: hasLayoutValidationError && !isSwitchingLayout
      }), this.layoutSwitcherContainer);
    }
  }, {
    key: "isOnlyOneLayout",
    value: function isOnlyOneLayout() {
      return this.props.layoutsConfig.filter(function (layout) {
        return layout.visible;
      }).length === 1;
    }
  }, {
    key: "setIsEditableState",
    value: function setIsEditableState(oldTimestamp, selectedTimestamp) {
      var _this16 = this;
      var blocksIds = Object.keys(this.state.blocksMap);
      this.setState(function () {
        return {
          timestamp: selectedTimestamp
        };
      }, function () {
        return _this16.updateBlocksPreview(blocksIds);
      });
    }
  }, {
    key: "renderTimeline",
    value: function renderTimeline() {
      var timelineEvents = this.state.timelineEvents;
      var attrs = {
        onTimelineEventSelect: this.setIsEditableState,
        events: timelineEvents,
        selectedTimestamp: window.ibexa.pageBuilder.config.referenceTimestamp * 1000
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_module__WEBPACK_IMPORTED_MODULE_10__["default"], attrs), this.timelineContainer);
    }
  }, {
    key: "showLayoutSelector",
    value: function showLayoutSelector() {
      var _this17 = this;
      var layoutSelectorTitle = Translator.trans( /*@Desc("Switch layout")*/'layout_selector.switch.title', {}, 'page_builder');
      var layoutSelectorConfirmBtnLabel = Translator.trans( /*@Desc("Submit")*/'layout_selector.switch.confirm.label', {}, 'page_builder');
      this.setState(function () {
        return {
          isSwitchingLayout: document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
            cancelable: true,
            detail: {
              settings: {
                onClose: _this17.handleLayoutSelectorCancelExternal
              }
            }
          })),
          hasLayoutValidationError: false,
          layoutSelected: false,
          layoutSelectorTitle: layoutSelectorTitle,
          layoutSelectorConfirmBtnLabel: layoutSelectorConfirmBtnLabel
        };
      });
    }
  }, {
    key: "renderIframe",
    value: function renderIframe() {
      var _this$state8 = this.state,
        isIframelessMode = _this$state8.isIframelessMode,
        previewUrl = _this$state8.previewUrl,
        iframeLoaded = _this$state8.iframeLoaded;
      if (isIframelessMode) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: this.setIframeRef,
        onLoad: this.handleIframeLoad,
        src: previewUrl,
        isLoading: !iframeLoaded
      });
    }
  }, {
    key: "renderActiveLayoutError",
    value: function renderActiveLayoutError() {
      if (this.state.isValidActiveLayout) {
        return null;
      }
      var errorMessage = Translator.trans( /*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'layout_selector.error.label', {}, 'page_builder');
      var errorButtonMessage = Translator.trans( /*@Desc("Change layout")*/'layout_selector.error.change_layout', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__active-layout-error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__active-layout-error-content container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__active-layout-error-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: "warning",
        extraClasses: "ibexa-icon--medium"
      }), errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn btn-primary",
        onClick: this.showLayoutSelector,
        type: "button"
      }, errorButtonMessage)));
    }
  }, {
    key: "setIframeRef",
    value: function setIframeRef(ref) {
      this._refIframeComponent = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this18 = this;
      var blocksConfig = this.props.blocksConfig;
      var _this$state9 = this.state,
        iframeLoaded = _this$state9.iframeLoaded,
        timestamp = _this$state9.timestamp;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var blocksToRender = !!blocksConfig.length ? blocksConfig.filter(function (config) {
        return config.visible;
      }) : [];
      var isAddingBlocksEnabled = timestamp <= convertDateToTimezone(new Date()).valueOf() && iframeLoaded && this.state.isValidActiveLayout;
      var blockPreviewPagePreviewRequestParams = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_14__["default"])(this.state.blockPreviewPagePreviewRequestParams);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder"
      }, this.modalContainer && this.renderLayoutSelector(), this.layoutSwitcherContainer && this.renderLayoutSwitcher(), this.timelineContainer && this.renderTimeline(), this.renderActiveLayoutError(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__preview"
      }, this.renderIframe()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        blocksToRender: blocksToRender,
        onBlockDrag: this.handleDragBlock,
        onBlockDragStart: this.handleDragStartSidebarBlock,
        isAddingBlocksEnabled: isAddingBlocksEnabled
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__block-config-wrapper"
      }), this.updatePreviewRequestParamsComponents.map(function (CustomComponent, index) {
        var key = index;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomComponent, {
          key: key,
          updatePreviewRequestParams: _this18.updatePreviewRequestParams,
          blockPreviewPagePreviewRequestParams: blockPreviewPagePreviewRequestParams
        });
      })));
    }
  }]);
  return PageBuilder;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var builderPropTypes = {
  getInitDragDropState: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  getElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  scrollContainer: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  removePlaceholderWithAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  removePlaceholderWithoutAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  addPlaceholderBesideElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  addPlaceholderInZone: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  removePlaceholders: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  findNextElementIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  insertAfter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  insertBefore: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  removePlaceholdersAfterTimeout: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)
};
PageBuilder.propTypes = _objectSpread({
  fieldValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  blocksConfig: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
  previewUrl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  iframeCss: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  layoutsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  mode: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  previewSiteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  blockPreviewRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  timelineGetEventsRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  intentParameters: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  customizeNewBlockNode: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
}, builderPropTypes);
PageBuilder.defaultProps = {
  blockPreviewRequestParams: {},
  timelineGetEventsRequestParams: {},
  intentParameters: {},
  /**
   * Extension point to customize the new block HTML attributes
   *
   * @function customizeNewBlockNode
   * @param {HTMLElement} block
   * @param {Object} meta
   * @param {String} meta.blockType
   * @param {String} meta.pageLayoutIdentifier
   * @param {String} meta.zoneId
   * @returns {HTMLElement}
   */
  customizeNewBlockNode: function customizeNewBlockNode(node, meta) {
    if (window.ibexa.pageBuilder && window.ibexa.pageBuilder.callbacks && window.ibexa.pageBuilder.callbacks.customizeNewBlockNode) {
      return window.ibexa.pageBuilder.callbacks.customizeNewBlockNode(node, meta);
    }
    return node;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBuilder);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockPreview": () => (/* binding */ getBlockPreview)
/* harmony export */ });
/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/serialize */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js");


/**
 * Gets block preview
 *
 * @function getBlockPreview
 * @param {Object} body request data
 * @returns {Promise} Fetch promise
 */
var getBlockPreview = function getBlockPreview(body, targetSiteaccess) {
  var url = window.Routing.generate('ibexa.page_builder.block.siteaccess_preview', {
    siteaccessName: targetSiteaccess
  });
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var request = new Request(url, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_0__["default"])(body),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request);
};

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimelineEvents": () => (/* binding */ getTimelineEvents)
/* harmony export */ });
/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/serialize */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js");


/**
 * Gets the timeline events
 *
 * @function getTimelineEvents
 * @param {Object} body request data
 * @returns {Promise} Fetch promise
 */
var getTimelineEvents = function getTimelineEvents(body) {
  var url = window.Routing.generate('ibexa.page_builder.timeline.events.get');
  var request = new Request(url, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_0__["default"])(body),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request);
};

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-builder/page.builder */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js");
/* harmony import */ var _core_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/drag.drop */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _window = window,
  ibexa = _window.ibexa;
var PageBuilderModule = /*#__PURE__*/function (_PureComponent) {
  _inherits(PageBuilderModule, _PureComponent);
  var _super = _createSuper(PageBuilderModule);
  function PageBuilderModule(props) {
    var _this;
    _classCallCheck(this, PageBuilderModule);
    _this = _super.call(this, props);
    _this.validateAllBlocksData = _this.validateAllBlocksData.bind(_assertThisInitialized(_this));
    _this.validateLayoutData = _this.validateLayoutData.bind(_assertThisInitialized(_this));
    _this.setPageBuilderRef = _this.setPageBuilderRef.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(PageBuilderModule, [{
    key: "validateAllBlocksData",
    value: function validateAllBlocksData() {
      return this._refPageBuilder.validateAllBlocksData();
    }
  }, {
    key: "validateLayoutData",
    value: function validateLayoutData() {
      return this._refPageBuilder.validateLayoutData();
    }
  }, {
    key: "setPageBuilderRef",
    value: function setPageBuilderRef(ref) {
      this._refPageBuilder = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        render: function render(methods) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
            ref: _this2.setPageBuilderRef
          }, _this2.props, methods));
        }
      });
    }
  }]);
  return PageBuilderModule;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBuilderModule);
ibexa.addConfig('modules.PageBuilder', PageBuilderModule);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline.module.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline.module.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _timeline_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js");
/* harmony import */ var _timeline_components_schedule_toggler_schedule_toggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/components/schedule-toggler/schedule.toggler */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-toggler/schedule.toggler.js");
/* harmony import */ var _timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/components/back-to-current-time/back.to.current.time */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js");
/* harmony import */ var _timeline_components_schedule_config_panel_schedule_config_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/components/schedule-config-panel/schedule.config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var _window = window,
  ibexa = _window.ibexa;
var CLASS_TIMELINE_VISIBLE = 'ibexa-pb-timeline-visible';
var TimelineModule = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimelineModule, _PureComponent);
  var _super = _createSuper(TimelineModule);
  function TimelineModule(props) {
    var _this;
    _classCallCheck(this, TimelineModule);
    _this = _super.call(this, props);
    _this.pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_assertThisInitialized(_this));
    _this.toggleScheduleConfigPanel = _this.toggleScheduleConfigPanel.bind(_assertThisInitialized(_this));
    _this.closeConfigPanelInternal = _this.closeConfigPanelInternal.bind(_assertThisInitialized(_this));
    _this.closeTimelineBar = _this.closeTimelineBar.bind(_assertThisInitialized(_this));
    _this.openTimelineBar = _this.openTimelineBar.bind(_assertThisInitialized(_this));
    _this.closeConfigPanelExternal = _this.closeConfigPanelExternal.bind(_assertThisInitialized(_this));
    var selectedTimestamp = props.selectedTimestamp;
    var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
    var now = convertDateToTimezone(new Date()).valueOf();
    var isFutureTimeSelected = selectedTimestamp > now;
    _this.state = {
      selectedTimestamp: props.selectedTimestamp,
      isTimelineVisible: false,
      isConfigPanelVisible: false,
      isGoBackToCurrentTimeVisible: isFutureTimeSelected,
      canShowAgainGoBackToCurrentTime: !isFutureTimeSelected
    };
    return _this;
  }
  _createClass(TimelineModule, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isTimelineVisible = this.state.isTimelineVisible;
      document.body.classList.toggle(CLASS_TIMELINE_VISIBLE, isTimelineVisible);
      window.ibexa.helpers.tooltips.hideAll();
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      var _this$props = this.props,
        onTimelineEventSelect = _this$props.onTimelineEventSelect,
        events = _this$props.events;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var oldTimestamp = this.state.selectedTimestamp;
      var now = convertDateToTimezone(new Date()).valueOf();
      var isFutureTimeSelected = selectedTimestamp > now;
      this.setState(function (_ref) {
        var isGoBackToCurrentTimeVisiblePrev = _ref.isGoBackToCurrentTimeVisible,
          canShowAgainGoBackToCurrentTimePrev = _ref.canShowAgainGoBackToCurrentTime;
        return {
          selectedTimestamp: selectedTimestamp,
          isGoBackToCurrentTimeVisible: isGoBackToCurrentTimeVisiblePrev && isFutureTimeSelected || isFutureTimeSelected && canShowAgainGoBackToCurrentTimePrev,
          canShowAgainGoBackToCurrentTime: !isFutureTimeSelected
        };
      }, function () {
        onTimelineEventSelect(oldTimestamp, selectedTimestamp, events);
      });
    }
  }, {
    key: "toggleScheduleConfigPanel",
    value: function toggleScheduleConfigPanel() {
      var _this2 = this;
      this.setState(function (_ref2) {
        var isConfigPanelVisiblePrev = _ref2.isConfigPanelVisible;
        if (isConfigPanelVisiblePrev) {
          document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
          return {
            isConfigPanelVisible: false
          };
        }
        var wasConfigPanelOpened = document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
          cancelable: true,
          detail: {
            settings: {
              onClose: _this2.closeConfigPanelExternal
            }
          }
        }));
        return {
          isConfigPanelVisible: wasConfigPanelOpened
        };
      });
    }
  }, {
    key: "closeConfigPanelInternal",
    value: function closeConfigPanelInternal() {
      this.setState(function () {
        return {
          isConfigPanelVisible: !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'))
        };
      });
    }
  }, {
    key: "closeConfigPanelExternal",
    value: function closeConfigPanelExternal() {
      this.setState(function () {
        return {
          isConfigPanelVisible: false
        };
      });
      return true;
    }
  }, {
    key: "openTimelineBar",
    value: function openTimelineBar() {
      this.setState(function () {
        return {
          isTimelineVisible: true
        };
      });
    }
  }, {
    key: "closeTimelineBar",
    value: function closeTimelineBar() {
      this.setState(function () {
        return {
          isTimelineVisible: false
        };
      });
    }
  }, {
    key: "renderTimelineBtn",
    value: function renderTimelineBtn() {
      var isConfigPanelVisible = this.state.isConfigPanelVisible;
      var timelineTogglerContainer = document.querySelector('.ibexa-pb-action-bar__timeline-toggler');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_components_schedule_toggler_schedule_toggler__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isVisible: isConfigPanelVisible,
        toggle: this.toggleScheduleConfigPanel
      }), timelineTogglerContainer);
    }
  }, {
    key: "renderBackToCurrentTime",
    value: function renderBackToCurrentTime() {
      var alertsSideTray = document.querySelector('.ibexa-pb-back-to-current-time-wrapper');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSelectedTimestampChange: this.changeSelectedTimestamp
      }), alertsSideTray);
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.props.events;
      var _this$state = this.state,
        selectedTimestamp = _this$state.selectedTimestamp,
        isConfigPanelVisible = _this$state.isConfigPanelVisible,
        isGoBackToCurrentTimeVisible = _this$state.isGoBackToCurrentTimeVisible,
        isTimelineVisible = _this$state.isTimelineVisible;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-timeline"
      }, this.renderTimelineBtn(), isGoBackToCurrentTimeVisible && this.renderBackToCurrentTime(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
        events: events,
        selectedTimestamp: selectedTimestamp,
        onSelectedTimestampChange: this.changeSelectedTimestamp,
        closeTimeline: this.closeTimelineBar
      }), /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_components_schedule_config_panel_schedule_config_panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        events: events,
        selectedTimestamp: selectedTimestamp,
        isClosed: !isConfigPanelVisible,
        isTimelineVisible: isTimelineVisible,
        onSelectedTimestampChange: this.changeSelectedTimestamp,
        onCancel: this.closeConfigPanelInternal,
        onShowTimeline: this.openTimelineBar,
        onHideTimeline: this.closeTimelineBar
      }), this.pageBuilderConfigPanelWrapper));
    }
  }]);
  return TimelineModule;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
TimelineModule.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),
  onTimelineEventSelect: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelineModule);
ibexa.addConfig('modules.Timeline', TimelineModule);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _window = window,
  Translator = _window.Translator;
var BackToCurrentTime = /*#__PURE__*/function (_PureComponent) {
  _inherits(BackToCurrentTime, _PureComponent);
  var _super = _createSuper(BackToCurrentTime);
  function BackToCurrentTime(props) {
    var _this;
    _classCallCheck(this, BackToCurrentTime);
    _this = _super.call(this, props);
    _this.setCurrentTime = _this.setCurrentTime.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(BackToCurrentTime, [{
    key: "setCurrentTime",
    value: function setCurrentTime() {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var onSelectedTimestampChange = this.props.onSelectedTimestampChange;
      onSelectedTimestampChange(convertDateToTimezone(new Date()).valueOf());
    }
  }, {
    key: "render",
    value: function render() {
      var warningText = Translator.trans( /*@Desc("Previewing in the future")*/'back_to_current_time.warning.text', {}, 'timeline');
      var btnText = Translator.trans( /*@Desc("Back to current time")*/'back_to_current_time.info.text', {}, 'timeline');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-back-to-current-time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-back-to-current-time__title"
      }, warningText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn btn-link c-pb-back-to-current-time__btn",
        onClick: this.setCurrentTime,
        type: "button"
      }, btnText));
    }
  }]);
  return BackToCurrentTime;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
BackToCurrentTime.propTypes = {
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackToCurrentTime);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var CalendarPaginator = function CalendarPaginator(_ref) {
  var displayedDate = _ref.displayedDate,
    onMonthChange = _ref.onMonthChange;
  var _window$ibexa$helpers = window.ibexa.helpers.timezone,
    convertDateToTimezone = _window$ibexa$helpers.convertDateToTimezone,
    formatFullDateTime = _window$ibexa$helpers.formatFullDateTime;
  var paginatorBtnClassName = 'btn ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text c-pb-calendar-paginator__caret';
  var date = convertDateToTimezone(displayedDate);
  var setPreviousMonth = function setPreviousMonth() {
    date.month(date.month() - 1);
    onMonthChange(date.valueOf());
  };
  var setNextMonth = function setNextMonth() {
    date.month(date.month() + 1);
    onMonthChange(date.valueOf());
  };
  var getFormattedDate = function getFormattedDate() {
    return formatFullDateTime(date, null, 'MMMM YYYY');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-calendar-paginator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: paginatorBtnClassName,
    onClick: setPreviousMonth,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-back",
    extraClasses: "ibexa-icon--tiny-small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, getFormattedDate()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: paginatorBtnClassName,
    onClick: setNextMonth,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-next",
    extraClasses: "ibexa-icon--tiny-small"
  })));
};
CalendarPaginator.propTypes = {
  displayedDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onMonthChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPaginator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-popup/calendar.popup.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-popup/calendar.popup.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar/calendar */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js");
/* harmony import */ var _timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline-popup/timeline.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js");
/* harmony import */ var _timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline-popup/timeline.popup.container */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");






var _window = window,
  Translator = _window.Translator,
  moment = _window.moment,
  ibexa = _window.ibexa;
var CalendarPopup = function CalendarPopup(props) {
  var selectedTimestamp = props.selectedTimestamp;
  var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
  var calendarBtnTitle = Translator.trans( /*@Desc("Timeline calendar")*/'timeline.calendar', {}, 'timeline');
  var selectedDate = convertDateToTimezone(selectedTimestamp, ibexa.adminUiConfig.timezone);
  var formattedSelectedTime = moment(selectedDate).formatICU('H:mm');
  var formattedSelectedDate = moment(selectedDate).formatICU('MMMM dd,yyyy');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-calendar-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__.TimelinePopupContext.Consumer, null, function (_ref) {
    var togglePopup = _ref.togglePopup;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn ibexa-btn ibexa-btn--ghost c-pb-calendar-popup__toggler",
      onClick: togglePopup,
      title: calendarBtnTitle,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "schedule",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-pb-calendar-popup__toggler-label-time"
    }, formattedSelectedTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-pb-calendar-popup__toggler-label-date"
    }, formattedSelectedDate));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    scrollWrapperExtraClasses: "c-pb-calendar-popup__scroll-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["default"], props)));
};
CalendarPopup.propTypes = {
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-paginator/calendar.paginator */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js");
/* harmony import */ var _month_view_month_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../month-view/month.view */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Calendar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Calendar, _PureComponent);
  var _super = _createSuper(Calendar);
  function Calendar(props) {
    var _this;
    _classCallCheck(this, Calendar);
    _this = _super.call(this, props);
    _this.changeMonth = _this.changeMonth.bind(_assertThisInitialized(_this));
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_assertThisInitialized(_this));
    _this.state = {
      isCalendarExpanded: false,
      selectedDate: props.selectedTimestamp,
      displayedDate: props.selectedTimestamp
    };
    return _this;
  }
  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.ibexa.helpers.tooltips.parse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;
      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }
      this.setState(function () {
        return {
          selectedDate: _this2.props.selectedTimestamp,
          displayedDate: _this2.props.selectedTimestamp
        };
      });
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(displayedDate) {
      this.setState(function () {
        return {
          displayedDate: displayedDate
        };
      });
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        selectedDate = _this$state.selectedDate,
        displayedDate = _this$state.displayedDate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-calendar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_2__["default"], {
        displayedDate: displayedDate,
        onMonthChange: this.changeMonth
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_month_view_month_view__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        displayedDate: displayedDate,
        selectedDate: selectedDate,
        onChangeSelectedTimestamp: this.changeSelectedTimestamp
      })));
    }
  }]);
  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
Calendar.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/click-outside-popup/click.outside.popup.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/click-outside-popup/click.outside.popup.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var ClickOutsidePopup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, containerRef) {
  var onClickOutside = _ref.onClickOutside,
    isPopupExpanded = _ref.isPopupExpanded,
    className = _ref.className,
    children = _ref.children;
  var handleDocumentClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var isClickOutside = !containerRef.current.contains(event.target);
    if (isClickOutside) {
      onClickOutside();
    }
  }, [onClickOutside, containerRef]);
  var handleIframeClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var isClickOutside = !containerRef.current.contains(document.activeElement);
    if (isClickOutside) {
      onClickOutside();
    }
  }, [onClickOutside, containerRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isPopupExpanded) {
      document.addEventListener('click', handleDocumentClick, false);
      window.addEventListener('blur', handleIframeClick, false);
    }
    return function () {
      document.removeEventListener('click', handleDocumentClick, false);
      window.removeEventListener('blur', handleIframeClick, false);
    };
  }, [handleDocumentClick, handleIframeClick, isPopupExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    ref: containerRef
  }, children);
});
ClickOutsidePopup.propTypes = {
  onClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  isPopupExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired)
};
ClickOutsidePopup.displayName = 'ClickOutsidePopup';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickOutsidePopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");




var DayView = function DayView(_ref) {
  var event = _ref.event,
    timestamp = _ref.timestamp,
    isSelected = _ref.isSelected,
    isSelectable = _ref.isSelectable,
    day = _ref.day,
    onChangeSelectedTimestamp = _ref.onChangeSelectedTimestamp;
  var changeSelectedTimestamp = function changeSelectedTimestamp() {
    return onChangeSelectedTimestamp(timestamp);
  };
  var hasEvent = !!event;
  var wrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-pb-day-view': true,
    'c-pb-day-view--is-selected': isSelected,
    'c-pb-day-view--is-selectable': isSelectable,
    'c-pb-day-view--has-event': hasEvent
  });
  var wrapperAttrs = {
    className: wrapperClassName
  };
  if (isSelectable) {
    wrapperAttrs.onClick = changeSelectedTimestamp;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", wrapperAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-pb-day-view__label"
  }, day), hasEvent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    event: event,
    inside: _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__.EVENT_MARKER_INSIDE_CALENDAR
  }));
};
DayView.propTypes = {
  day: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  timestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onChangeSelectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isSelectable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
DayView.defaultProps = {
  event: null,
  isSelectable: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayView);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_MARKER_INSIDE_CALENDAR": () => (/* binding */ EVENT_MARKER_INSIDE_CALENDAR),
/* harmony export */   "EVENT_MARKER_INSIDE_TIMELINE": () => (/* binding */ EVENT_MARKER_INSIDE_TIMELINE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-tooltip/event.tooltip */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/event.in.day.position */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var EVENT_MARKER_INSIDE_CALENDAR = 'EVENT_MARKER_INSIDE_CALENDAR';
var EVENT_MARKER_INSIDE_TIMELINE = 'EVENT_MARKER_INSIDE_TIMELINE';
var EventMarker = /*#__PURE__*/function (_Component) {
  _inherits(EventMarker, _Component);
  var _super = _createSuper(EventMarker);
  function EventMarker(props) {
    var _this;
    _classCallCheck(this, EventMarker);
    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.renderDot = _this.renderDot.bind(_assertThisInitialized(_this));
    _this.showTooltip = _this.showTooltip.bind(_assertThisInitialized(_this));
    _this.hideTooltip = _this.hideTooltip.bind(_assertThisInitialized(_this));
    _this._refMarker = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refTooltip = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.hideTooltipTimeout = null;
    _this.state = {
      isTooltipVisible: false
    };
    return _this;
  }
  _createClass(EventMarker, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
        onSetTime = _this$props.onSetTime,
        timestamp = _this$props.timestamp;
      onSetTime(parseInt(timestamp, 10));
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      this.toggleTooltipVisibility(true);
      window.document.body.addEventListener('mousemove', this.hideTooltip, false);
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(event) {
      var _this2 = this;
      var eventMarker = event.target.closest('.c-pb-event-marker');
      var eventTooltip = event.target.closest('.c-pb-event-tooltip');
      var isCurrentMarker = eventMarker === this._refMarker.current;
      var isCurrentMarkerTooltip = eventTooltip === this._refTooltip.current;
      window.clearTimeout(this.hideTooltipTimeout);
      if (isCurrentMarker || isCurrentMarkerTooltip) {
        return;
      }
      this.hideTooltipTimeout = window.setTimeout(function () {
        _this2.toggleTooltipVisibility(false);
        window.document.body.removeEventListener('mousemove', _this2.hideTooltip, false);
      }, 200);
    }
  }, {
    key: "toggleTooltipVisibility",
    value: function toggleTooltipVisibility(isTooltipVisible) {
      this.setState(function () {
        return {
          isTooltipVisible: isTooltipVisible
        };
      });
    }
  }, {
    key: "renderDot",
    value: function renderDot() {
      var event = this.props.event;
      var label = event.descriptions.length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-pb-event-marker__dot"
      }, label);
    }
  }, {
    key: "renderEventTooltip",
    value: function renderEventTooltip() {
      var event = this.props.event;
      var isTooltipVisible = this.state.isTooltipVisible;
      if (!isTooltipVisible) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
        descriptions: event.descriptions,
        markerRef: this._refMarker,
        ref: this._refTooltip
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        inside = _this$props2.inside,
        event = _this$props2.event,
        timestamp = _this$props2.timestamp;
      var isInsideCalendar = inside === EVENT_MARKER_INSIDE_CALENDAR;
      var isInsideTimeline = inside === EVENT_MARKER_INSIDE_TIMELINE;
      var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
        'c-pb-event-marker': true,
        'c-pb-event-marker--in-calendar': isInsideCalendar,
        'c-pb-event-marker--in-timeline': isInsideTimeline
      });
      var attrs = {
        className: className,
        ref: this._refMarker,
        onMouseEnter: this.showTooltip
      };
      if (event.type) {
        attrs['data-event-type'] = event.type;
      }
      if (isInsideTimeline) {
        var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__["default"])(timestamp);
        attrs.onClick = this.handleClick;
        attrs.style = {
          left: "".concat(leftPosition, "%")
        };
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "c-pb-event-marker__btn",
        type: "button"
      }, this.renderDot()), this.renderEventTooltip());
    }
  }]);
  return EventMarker;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
EventMarker.propTypes = {
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  onSetTime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  timestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  inside: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
EventMarker.defaultProps = {
  inside: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventMarker);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _window = window,
  Popper = _window.Popper;
var EventTooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits(EventTooltip, _PureComponent);
  var _super = _createSuper(EventTooltip);
  function EventTooltip(props) {
    var _this;
    _classCallCheck(this, EventTooltip);
    _this = _super.call(this, props);
    _this.eventsTooltipsContainer = document.querySelector('.ibexa-pb-events-tooltip-container');
    _this.popperInstance = null;
    _this.renderDescription = _this.renderDescription.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(EventTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createPopperInstanceOrUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.createPopperInstanceOrUpdate();
    }
  }, {
    key: "createPopperInstanceOrUpdate",
    value: function createPopperInstanceOrUpdate() {
      var _this$props = this.props,
        markerRef = _this$props.markerRef,
        innerRef = _this$props.innerRef;
      var markerNode = markerRef.current;
      var tooltipNode = innerRef.current;
      if (!markerNode) {
        return;
      }
      if (!this.popperInstance) {
        this.popperInstance = Popper.createPopper(markerNode, tooltipNode, {
          placement: 'left',
          modifiers: [{
            name: 'offset',
            options: {
              offset: function offset(_ref) {
                var placement = _ref.placement,
                  popper = _ref.popper;
                if (placement === 'left' || placement === 'right') {
                  return [popper.height / 2 - 30, 8];
                }
                return [0, 8];
              }
            }
          }, {
            name: 'flip',
            options: {
              fallbackPlacements: ['right', 'bottom', 'top']
            }
          }]
        });
      } else {
        this.popperInstance.update();
      }
    }
  }, {
    key: "setInnerHTML",
    value: function setInnerHTML(__html) {
      return {
        __html: __html
      };
    }
  }, {
    key: "renderDescription",
    value: function renderDescription(description, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "c-pb-event-tooltip__item",
        dangerouslySetInnerHTML: this.setInnerHTML(description)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        descriptions = _this$props2.descriptions,
        innerRef = _this$props2.innerRef;
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip",
        ref: innerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__arrow-wrapper",
        "data-popper-arrow": true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__arrow",
        "data-popper-arrow": true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__hidden-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__scroll-wrapper"
      }, descriptions.map(this.renderDescription)))), this.eventsTooltipsContainer);
    }
  }]);
  return EventTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
EventTooltip.propTypes = {
  descriptions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  markerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element)
  }),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element)
  })
};
EventTooltip.defaultProps = {
  markerRef: {},
  innerRef: {}
};
var EventTooltipForwarded = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventTooltip, _extends({
    innerRef: ref
  }, props));
});
EventTooltipForwarded.displayName = 'EventTooltip';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTooltipForwarded);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list-popup/events.list.popup.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list-popup/events.list.popup.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_list_events_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events-list/events.list */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js");
/* harmony import */ var _timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline-popup/timeline.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js");
/* harmony import */ var _timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline-popup/timeline.popup.container */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");






var _window = window,
  Translator = _window.Translator;
var EventsListPopup = function EventsListPopup(props) {
  var isDisabled = props.events.length === 0;
  var togglerLabel = Translator.trans( /*@Desc("Jump to event")*/'timeline.events_list_popup.toggler.label', {}, 'timeline');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-events-list-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__.TimelinePopupContext.Consumer, null, function (_ref) {
    var togglePopup = _ref.togglePopup;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn ibexa-btn ibexa-btn--ghost c-pb-events-list-popup__toggler",
      onClick: togglePopup,
      disabled: isDisabled,
      type: "button"
    }, togglerLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "caret-down"
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    extraClasses: "c-pb-events-list-popup__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_list_events_list__WEBPACK_IMPORTED_MODULE_2__["default"], props)));
};
EventsListPopup.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsListPopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var EventsList = function EventsList(_ref) {
  var events = _ref.events,
    onSelectedTimestampChange = _ref.onSelectedTimestampChange;
  var handleClick = function handleClick(date) {
    return onSelectedTimestampChange(date * 1000);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-events-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-pb-events-list__list"
  }, events.map(function (event, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      className: "c-pb-events-list__item",
      onClick: function onClick() {
        return handleClick(event.date);
      },
      dangerouslySetInnerHTML: {
        __html: event.description
      }
    });
  })));
};
EventsList.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsList);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _day_view_day_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../day-view/day.view */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var MonthView = /*#__PURE__*/function (_PureComponent) {
  _inherits(MonthView, _PureComponent);
  var _super = _createSuper(MonthView);
  function MonthView(props) {
    var _this;
    _classCallCheck(this, MonthView);
    _this = _super.call(this, props);
    var eventsByDay = _this.filterEvents(props.events);
    _this.state = {
      eventsByDay: eventsByDay
    };
    return _this;
  }
  _createClass(MonthView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var events = this.props.events;
      var areSameEvents = events.every(function (event, index) {
        return prevProps.events[index] && prevProps.events[index].date === event.date;
      });
      if (areSameEvents) {
        return;
      }
      var eventsByDay = this.filterEvents(events);
      this.setState(function () {
        return {
          eventsByDay: eventsByDay
        };
      });
    }
  }, {
    key: "groupEventsByDay",
    value: function groupEventsByDay(total, event) {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000);
      var timestamp = convertDateToTimezone(new Date(eventDate.year(), eventDate.month(), eventDate.date(), 12)).hour(12).valueOf();
      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }
      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events) {
      var groupedEvents = events.reduce(this.groupEventsByDay, {});
      return groupedEvents;
    }
  }, {
    key: "getAdminPanelLanguageCode",
    value: function getAdminPanelLanguageCode() {
      return document.querySelector('html').getAttribute('lang').replace(new RegExp('_', 'g'), '-');
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders() {
      return DAYS.map(function (day) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "c-pb-month-view__header",
          key: day
        }, day);
      });
    }
  }, {
    key: "renderDaysBeforeMonth",
    value: function renderDaysBeforeMonth() {
      var _this2 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var firstDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), 1);
      var day = firstDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());
      for (var i = 0; i !== day; i++) {
        days.push('');
      }
      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index - day + 1, 12)).hour(12);
        var dayOfMonth = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        var label = dayOfMonth;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this2.state.eventsByDay[timestamp],
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this2.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysOfMonth",
    value: function renderDaysOfMonth() {
      var _this3 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var days = [];
      var selectedDate = convertDateToTimezone(this.props.selectedDate);
      var now = convertDateToTimezone(new Date());
      for (var i = 0; i !== daysInMonth; i++) {
        days.push('');
      }
      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index + 1, 12)).hour(12);
        var dayOfMonth = date.date();
        var isSelected = selectedDate.isSame(date, 'day');
        var isNotSelectable = now.isAfter(date, 'day');
        var isToday = now.isSame(date, 'day');
        var dailyTimestamp = date.valueOf();
        var label = dayOfMonth === 1 ? date.locale(_this3.getAdminPanelLanguageCode()).format('D MMM') : dayOfMonth;
        if (isToday) {
          date.hour(now.hour());
          date.minute(now.minute());
        }
        var timestamp = date.valueOf();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this3.state.eventsByDay[dailyTimestamp],
          isSelected: isSelected,
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this3.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysAfterMonth",
    value: function renderDaysAfterMonth() {
      var _this4 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var lastDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), daysInMonth);
      var day = 6 - lastDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());
      for (var i = 0; i !== day; i++) {
        days.push('');
      }
      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month() + 1, index + 1, 12)).hour(12);
        var dayOfMonth = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        var label = dayOfMonth === 1 ? date.locale(_this4.getAdminPanelLanguageCode()).format('D MMM') : dayOfMonth;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this4.state.eventsByDay[timestamp],
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this4.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-month-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-month-view__headers"
      }, this.renderHeaders()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-month-view__days"
      }, this.renderDaysBeforeMonth(), this.renderDaysOfMonth(), this.renderDaysAfterMonth()));
    }
  }]);
  return MonthView;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
MonthView.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  onChangeSelectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  month: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  displayedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired,
  selectedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthView);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.js":
/*!************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js");
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");
/* harmony import */ var _events_list_events_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events-list/events.list */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js");
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar/calendar */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js");
/* harmony import */ var _schedule_config_panel_no_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule.config.panel.no.events */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.no.events.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var _window = window,
  Translator = _window.Translator;
var VIEW_LIST = 'VIEW_LIST';
var VIEW_CALENDAR = 'VIEW_CALENDAR';
var VIEW_OPTIONS = [{
  value: VIEW_LIST,
  iconName: 'view-list',
  label: Translator.trans( /*@Desc("List")*/'timeline.schedule.config_panel.view_switcher.list_view', {}, 'timeline')
}, {
  value: VIEW_CALENDAR,
  iconName: 'date',
  label: Translator.trans( /*@Desc("Calendar")*/'timeline.schedule.config_panel.view_switcher.calendar_view', {}, 'timeline')
}];
var ScheduleConfigPanel = function ScheduleConfigPanel(_ref) {
  var events = _ref.events,
    selectedTimestamp = _ref.selectedTimestamp,
    isClosed = _ref.isClosed,
    onSelectedTimestampChange = _ref.onSelectedTimestampChange,
    onCancel = _ref.onCancel,
    onShowTimeline = _ref.onShowTimeline,
    onHideTimeline = _ref.onHideTimeline,
    isTimelineVisible = _ref.isTimelineVisible;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(VIEW_LIST),
    _useState2 = _slicedToArray(_useState, 2),
    viewMode = _useState2[0],
    setViewMode = _useState2[1];
  var noEvents = events.length === 0;
  var configPanelTitle = Translator.trans( /*@Desc("Schedule")*/'timeline.schedule.config_panel.title', {}, 'timeline');
  var showTimelineLabel = Translator.trans( /*@Desc("Show timeline")*/'timeline.schedule.config_panel.show_timeline', {}, 'timeline');
  var hideTimelineLabel = Translator.trans( /*@Desc("Hide timeline")*/'timeline.schedule.config_panel.hide_timeline', {}, 'timeline');
  var viewLabel = Translator.trans( /*@Desc("View")*/'timeline.schedule.config_panel.view', {}, 'timeline');
  var handleViewModeSwitch = function handleViewModeSwitch(_ref2) {
    var value = _ref2.value;
    setViewMode(value);
  };
  var selectedOption = VIEW_OPTIONS.find(function (option) {
    return option.value === viewMode;
  });
  var renderContentViews = function renderContentViews() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, viewMode === VIEW_LIST && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_list_events_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
      events: events,
      onSelectedTimestampChange: onSelectedTimestampChange
    }), viewMode === VIEW_CALENDAR && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-schedule-config-panel__calendar-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_calendar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      events: events,
      onSelectedTimestampChange: onSelectedTimestampChange,
      selectedTimestamp: selectedTimestamp
    })));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-schedule-config-panel",
    type: _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_3__.CONFIG_PANEL_TYPE_LEFT,
    showCloseBtn: true,
    onCancel: onCancel,
    title: configPanelTitle,
    isClosed: isClosed
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_4__["default"], {
    extraClasses: "c-pb-schedule-config-panel__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel__top-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--small ibexa-btn--tertiary",
    onClick: isTimelineVisible ? onHideTimeline : onShowTimeline,
    type: "button"
  }, isTimelineVisible ? hideTimelineLabel : showTimelineLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: VIEW_OPTIONS,
    selectedOption: selectedOption,
    onOptionClick: handleViewModeSwitch,
    selectedItemLabel: viewLabel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel__content"
  }, noEvents ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_schedule_config_panel_no_events__WEBPACK_IMPORTED_MODULE_7__["default"], null) : renderContentViews())));
};
ScheduleConfigPanel.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onShowTimeline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onHideTimeline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  isTimelineVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.no.events.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.no.events.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var _window = window,
  Translator = _window.Translator;
var ScheduleConfigPanelNoEvents = function ScheduleConfigPanelNoEvents() {
  var title = Translator.trans( /*@Desc("No events")*/'timeline.schedule.config_panel.no_events.title', {}, 'timeline');
  var subtitle = Translator.trans( /*@Desc("Your events will show up here")*/'timeline.schedule.config_panel.no_events.subtitle', {}, 'timeline');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel-no-events"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "c-pb-schedule-config-panel-no-events__image",
    src: "/bundles/ibexapagebuilder/img/no-events.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel-no-events__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "c-pb-schedule-config-panel-no-events__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-pb-schedule-config-panel-no-events__subtitle"
  }, subtitle)));
};
ScheduleConfigPanelNoEvents.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleConfigPanelNoEvents);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-toggler/schedule.toggler.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-toggler/schedule.toggler.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");




var ScheduleToggler = function ScheduleToggler(_ref) {
  var isVisible = _ref.isVisible,
    toggle = _ref.toggle;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'btn ibexa-btn ibexa-btn--no-text ibexa-btn--selector': true,
    'ibexa-pb-action-bar__action-btn': true,
    'ibexa-btn--selected': isVisible
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: className,
    onClick: toggle,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "timeline",
    extraClasses: "ibexa-icon--medium"
  }));
};
ScheduleToggler.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleToggler);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thumb_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumb/thumb */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js");
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");
/* harmony import */ var _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/event.in.day.position */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);
  var _super = _createSuper(Slider);
  function Slider(props) {
    var _this;
    _classCallCheck(this, Slider);
    _this = _super.call(this, props);
    _this._refSlider = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.renderMarker = _this.renderMarker.bind(_assertThisInitialized(_this));
    _this.setTime = _this.setTime.bind(_assertThisInitialized(_this));
    _this.groupEventsByDate = _this.groupEventsByDate.bind(_assertThisInitialized(_this));
    _this.updateSliderRect = _this.updateSliderRect.bind(_assertThisInitialized(_this));
    var eventsToDisplay = _this.filterEvents(props.events, props.selectedTimestamp);
    _this.state = {
      sliderRect: {},
      eventsToDisplay: eventsToDisplay,
      selectedTimestamp: props.selectedTimestamp,
      currentTimestamp: _this.generateCurrentTimestamp()
    };
    return _this;
  }
  _createClass(Slider, [{
    key: "generateCurrentTimestamp",
    value: function generateCurrentTimestamp() {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      return convertDateToTimezone(new Date()).valueOf();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.updateSliderRect();
      window.addEventListener('resize', this.updateSliderRect, false);
      setInterval(function () {
        return _this2.setState({
          currentTimestamp: _this2.generateCurrentTimestamp()
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSliderRect);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;
      var _this$props = this.props,
        selectedTimestamp = _this$props.selectedTimestamp,
        events = _this$props.events;
      var areSameEvents = events.every(function (event, index) {
        return prevProps.events[index] && prevProps.events[index].date === event.date;
      });
      if (prevProps.selectedTimestamp === selectedTimestamp && areSameEvents) {
        return;
      }
      var eventsToDisplay = this.filterEvents(events, selectedTimestamp);
      this.setState(function () {
        return {
          selectedTimestamp: _this3.props.selectedTimestamp,
          eventsToDisplay: eventsToDisplay
        };
      });
    }
  }, {
    key: "updateSliderRect",
    value: function updateSliderRect() {
      var _this4 = this;
      this.setState(function () {
        return {
          sliderRect: _this4._refSlider.current.getBoundingClientRect()
        };
      });
    }
  }, {
    key: "groupEventsByDate",
    value: function groupEventsByDate(now, total, event) {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000, undefined, true);
      var isSameDate = eventDate.isSame(now, 'day');
      var timestamp = new Date(eventDate.year(), eventDate.month(), eventDate.date(), eventDate.hour(), eventDate.minute() + 1).getTime();
      if (!isSameDate) {
        return total;
      }
      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }
      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events, selectedTimestamp) {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var now = convertDateToTimezone(selectedTimestamp);
      var groupedEvents = events.reduce(this.groupEventsByDate.bind(this, now), {});
      return groupedEvents;
    }
  }, {
    key: "setTime",
    value: function setTime(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "renderCurrentTimeBtn",
    value: function renderCurrentTimeBtn() {
      var _this5 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var _this$state = this.state,
        selectedTimestamp = _this$state.selectedTimestamp,
        currentTimestamp = _this$state.currentTimestamp;
      var selectedDate = convertDateToTimezone(selectedTimestamp);
      var currentDate = convertDateToTimezone(currentTimestamp);
      var isSameDate = currentDate.isSame(selectedDate, 'day');
      var isSameMinute = currentDate.isSame(selectedDate, 'minute');
      if (!isSameDate || isSameMinute) {
        return null;
      }
      var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__["default"])(currentTimestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-pb-slider__current-time-btn",
        style: {
          left: "".concat(leftPosition, "%")
        },
        onClick: function onClick() {
          return _this5.props.onSelectedTimestampChange(currentTimestamp);
        }
      });
    }
  }, {
    key: "renderMarker",
    value: function renderMarker(_ref, index) {
      var _ref2 = _slicedToArray(_ref, 2),
        timestamp = _ref2[0],
        event = _ref2[1];
      var key = "".concat(index, "-").concat(timestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: key,
        timestamp: timestamp,
        event: event,
        onSetTime: this.setTime,
        inside: _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__.EVENT_MARKER_INSIDE_TIMELINE
      });
    }
  }, {
    key: "renderHours",
    value: function renderHours() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hours"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "12:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "4:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "8:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "12:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "4:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "8:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "11:59 PM"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        eventsToDisplay = _this$state2.eventsToDisplay,
        selectedTimestamp = _this$state2.selectedTimestamp;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider",
        ref: this._refSlider
      }, this.renderHours(), this.renderCurrentTimeBtn(), Object.entries(eventsToDisplay).map(this.renderMarker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_thumb_thumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sliderRect: this.state.sliderRect,
        selectedTimestamp: selectedTimestamp,
        onSetTime: this.setTime
      }));
    }
  }]);
  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Slider.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  onEventSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/event.in.day.position */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var KEYCODE_RIGHT_BTN = 3;
var Thumb = /*#__PURE__*/function (_Component) {
  _inherits(Thumb, _Component);
  var _super = _createSuper(Thumb);
  function Thumb(props) {
    var _this;
    _classCallCheck(this, Thumb);
    _this = _super.call(this, props);
    _this.attachMouseMoveEvent = _this.attachMouseMoveEvent.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.removeListeners = _this.removeListeners.bind(_assertThisInitialized(_this));
    _this.onTimeChangeTimeout = null;
    _this.backdrop = null;
    var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__["default"])(props.selectedTimestamp);
    _this.state = {
      leftPosition: leftPosition
    };
    return _this;
  }
  _createClass(Thumb, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }
      var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.selectedTimestamp);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      document.body.removeEventListener('mousemove', this.handleMouseMove);
      document.body.removeEventListener('mouseup', this.removeListeners);
      this.removeBackdrop();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var sliderRect = this.props.sliderRect;
      var isMovedOutside = event.clientX > sliderRect.right || event.clientX < sliderRect.left;
      if (isMovedOutside) {
        return;
      }
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var diff = event.clientX - sliderRect.left;
      var leftPosition = diff / sliderRect.width * 100;
      var minutesCount = _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__.MINUTES_IN_DAY * leftPosition / 100;
      var hour = Math.floor(minutesCount / _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__.MINUTES_IN_HOUR);
      var minutes = Math.floor(minutesCount % _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__.MINUTES_IN_HOUR);
      var date = convertDateToTimezone(parseInt(this.props.selectedTimestamp, 10));
      date.hour(hour);
      date.minutes(minutes);
      window.clearTimeout(this.onTimeChangeTimeout);
      this.onTimeChangeTimeout = window.setTimeout(this.setTime.bind(this, date.valueOf()), 300);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "setTime",
    value: function setTime(timestamp) {
      this.props.onSetTime(timestamp);
    }
  }, {
    key: "attachMouseMoveEvent",
    value: function attachMouseMoveEvent(_ref) {
      var nativeEvent = _ref.nativeEvent;
      var keyCode = nativeEvent.keyCode || nativeEvent.which;
      if (keyCode === KEYCODE_RIGHT_BTN) {
        return;
      }
      this.addBackdrop();
      document.body.addEventListener('mousemove', this.handleMouseMove, false);
      document.body.addEventListener('mouseup', this.removeListeners, false);
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('ibexa-backdrop');
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
  }, {
    key: "render",
    value: function render() {
      var leftPosition = this.state.leftPosition;
      var style = {
        left: "".concat(leftPosition, "%")
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-thumb",
        onMouseDown: this.attachMouseMoveEvent,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "c-pb-thumb__bottom-arrow",
        draggable: false,
        src: "/bundles/ibexapagebuilder/img/timeline-thumb.svg"
      }));
    }
  }]);
  return Thumb;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Thumb.propTypes = {
  sliderRect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onSetTime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumb);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var TimelinePopupContainer = function TimelinePopupContainer(_ref) {
  var children = _ref.children,
    extraClasses = _ref.extraClasses,
    scrollWrapperExtraClasses = _ref.scrollWrapperExtraClasses;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-pb-timeline-popup__container': true
  }, extraClasses, true));
  var scrollWrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-pb-timeline-popup__scroll-wrapper': true
  }, scrollWrapperExtraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: scrollWrapperClassName
  }, children));
};
TimelinePopupContainer.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  scrollWrapperExtraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TimelinePopupContainer.defaultProps = {
  extraClasses: '',
  scrollWrapperExtraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelinePopupContainer);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelinePopupContext": () => (/* binding */ TimelinePopupContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _click_outside_popup_click_outside_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../click-outside-popup/click.outside.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/click-outside-popup/click.outside.popup.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var _window = window,
  bootstrap = _window.bootstrap;
var TimelinePopupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var TimelinePopup = function TimelinePopup(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPopupExpanded = _useState2[0],
    setIsPopupExpanded = _useState2[1];
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var closePopup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setIsPopupExpanded(false);
  }, [setIsPopupExpanded]);
  var togglePopup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setIsPopupExpanded(!isPopupExpanded);
  }, [isPopupExpanded]);
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-pb-timeline-popup': true,
    'c-pb-timeline-popup--popup-expanded': isPopupExpanded
  }, extraClasses, true));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _containerRef$current;
    var elementsWithTooltip = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll('[data-original-title]');
    elementsWithTooltip.forEach(function (element) {
      var tooltip = bootstrap.Tooltip.getInstance(element);
      tooltip === null || tooltip === void 0 ? void 0 : tooltip.hide();
    });
  }, [isPopupExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_click_outside_popup_click_outside_popup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: containerRef,
    className: className,
    onClickOutside: closePopup,
    isPopupExpanded: isPopupExpanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TimelinePopupContext.Provider, {
    value: {
      closePopup: closePopup,
      togglePopup: togglePopup
    }
  }, children));
};
TimelinePopup.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TimelinePopup.defaultProps = {
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelinePopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider/slider */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js");
/* harmony import */ var _components_calendar_popup_calendar_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/calendar-popup/calendar.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-popup/calendar.popup.js");
/* harmony import */ var _components_events_list_popup_events_list_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/events-list-popup/events.list.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list-popup/events.list.popup.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");






var _window = window,
  Translator = _window.Translator;
var Timeline = function Timeline(props) {
  var closeTimeline = props.closeTimeline;
  var closeBtnTitle = Translator.trans( /*@Desc("Close timeline")*/'timeline.close_btn', {}, 'timeline');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__close-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--tertiary ibexa-btn--no-text c-pb-timeline__close-btn",
    onClick: closeTimeline,
    title: closeBtnTitle,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon ibexa-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__timeline-calendar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_calendar_popup_calendar_popup__WEBPACK_IMPORTED_MODULE_3__["default"], props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__list-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_events_list_popup_events_list_popup__WEBPACK_IMPORTED_MODULE_4__["default"], props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__slider-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_slider_slider__WEBPACK_IMPORTED_MODULE_2__["default"], props)));
};
Timeline.propTypes = {
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  closeTimeline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);

/***/ }),

/***/ "./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
var _this = undefined;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var UpdatePreviewRequestParams = function UpdatePreviewRequestParams(_ref) {
  var updatePreviewRequestParams = _ref.updatePreviewRequestParams,
    blockPreviewPagePreviewRequestParams = _ref.blockPreviewPagePreviewRequestParams;
  var segmentationsListNode = document.querySelector('.ibexa-segmentation-list');
  var pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isConfigPanelVisible = _useState2[0],
    setIsConfigPanelVisible = _useState2[1];
  var segmentationsList = JSON.parse(segmentationsListNode.dataset.segments);
  var handleExternalCloseConfigPanel = function handleExternalCloseConfigPanel() {
    setIsConfigPanelVisible(false);
    return true;
  };
  var handleInternalCloseConfigPanel = function handleInternalCloseConfigPanel() {
    setIsConfigPanelVisible(function () {
      return !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
    });
  };
  var toggleConfigPanel = function toggleConfigPanel() {
    setIsConfigPanelVisible(function (isConfigPanelVisiblePrev) {
      if (isConfigPanelVisiblePrev) {
        document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
        return false;
      }
      var wasConfigPanelOpened = document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
        cancelable: true,
        detail: {
          settings: {
            onClose: handleExternalCloseConfigPanel
          }
        }
      }));
      if (wasConfigPanelOpened) {
        ibexa.helpers.tooltips.hideAll();
      }
      return wasConfigPanelOpened;
    });
  };
  var handleSegmentSelect = function handleSegmentSelect(segmentId) {
    var requestParams = _objectSpread({}, blockPreviewPagePreviewRequestParams);
    if (segmentId) {
      requestParams.segmentId = segmentId;
    } else {
      delete requestParams.segmentId;
    }
    updatePreviewRequestParams(requestParams);
  };
  var renderInfobarActionMenuButton = function renderInfobarActionMenuButton() {
    var togglerTitle = Translator.trans( /*@Desc("Visibility")*/'visibility.action_btn.title', {}, 'page_builder');
    var togglerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_6__.createCssClassNames)({
      'btn ibexa-btn ibexa-btn--no-text ibexa-btn--selector': true,
      'ibexa-pb-action-bar__action-btn': true,
      'ibexa-btn--selected': isConfigPanelVisible
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: togglerClassName,
      onClick: toggleConfigPanel,
      title: togglerTitle,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "profile",
      extraClasses: "ibexa-icon--medium"
    }));
  };
  var renderSegmentationList = function renderSegmentationList() {
    var configPanelTitle = Translator.trans( /*@Desc("Segments")*/'segments.config_panel.title', {}, 'page_builder');
    var noneOptionLabel = Translator.trans( /*@Desc("None")*/'segments.config_panel.none_option.label', {}, 'page_builder');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
      extraClasses: "ibexa-pb-config-panel--visibility",
      isClosed: !isConfigPanelVisible,
      onCancel: handleInternalCloseConfigPanel,
      title: configPanelTitle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
      extraClasses: "c-layout-selector__content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-update-preview-request-params"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-update-preview-request-params__segments-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "c-update-preview-request-params__segments-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "radio",
      name: "segment",
      className: "ibexa-input ibexa-input--radio",
      onChange: handleSegmentSelect.bind(_this, null),
      defaultChecked: true
    }), noneOptionLabel), segmentationsList.map(function (segmentationGroup) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-update-preview-request-params__segments-group",
        key: segmentationGroup.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-update-preview-request-params__segments-group-name ibexa-label"
      }, segmentationGroup.name), segmentationGroup.segments.map(function (segment) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "c-update-preview-request-params__segments-item",
          key: segment.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          type: "radio",
          name: "segment",
          className: "ibexa-input ibexa-input--radio",
          onChange: handleSegmentSelect.bind(null, segment.id)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, segment.name));
      }));
    })))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(renderInfobarActionMenuButton(), segmentationsListNode), /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(renderSegmentationList(), pageBuilderConfigPanelWrapper));
};
UpdatePreviewRequestParams.propTypes = {
  updatePreviewRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  blockPreviewPagePreviewRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdatePreviewRequestParams);
window.ibexa.addConfig('pageBuilder.components.updatePreviewRequestParams', [UpdatePreviewRequestParams], true);

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.publish.js"), __webpack_exec__("./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js"));
/******/ }
]);