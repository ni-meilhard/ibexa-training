(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-form-builder-common-js"],{

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

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/ezform.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/ezform.js ***!
  \**************************************************************************************/
/***/ (() => {

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
(function (global, doc, ibexa, Translator) {
  var CLASS_LOADING_PREVIEW = 'ibexa-field-edit--loading-preview';
  var SELECTOR_FIELD = '.ibexa-field-edit--ezform';
  var fieldContainer = doc.querySelector(SELECTOR_FIELD);
  var formBuilderField = doc.querySelector('.ibexa-fb-content-edit-form');
  if (!formBuilderField) {
    return;
  }
  var formPreview = formBuilderField.querySelector('[data-ibexa-form-preview]');
  var EzFormValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid) {
    "use strict";

    _inherits(EzFormValidator, _ibexa$BaseFieldValid);
    var _super = _createSuper(EzFormValidator);
    function EzFormValidator() {
      _classCallCheck(this, EzFormValidator);
      return _super.apply(this, arguments);
    }
    _createClass(EzFormValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzFormValidator
       */
      function validateInput(event) {
        var result = {
          isError: false
        };
        var field = event.currentTarget;
        var errorMessage = Translator.trans( /*@Desc("Form field is required")*/'form.cannot.be.empty', {}, 'form_builder');
        if (!field.required) {
          return result;
        }
        var fieldValue = JSON.parse(field.value);
        if (fieldValue.fields.length) {
          return result;
        }
        result.isError = true;
        result.errorMessage = errorMessage;
        return result;
      }
    }]);
    return EzFormValidator;
  }(ibexa.BaseFieldValidator);
  var validator = new EzFormValidator({
    classInvalid: 'is-invalid',
    fieldContainer: fieldContainer,
    eventsMap: [{
      elements: doc.querySelectorAll('[data-ezform-fieldvalue]'),
      eventName: 'change',
      callback: 'validateInput',
      errorNodeSelectors: ['.ibexa-field-edit__label-wrapper']
    }]
  });
  validator.init();
  formPreview.onload = function () {
    formPreview.contentWindow.onbeforeunload = function () {
      return fieldContainer.classList.add(CLASS_LOADING_PREVIEW);
    };
    fieldContainer.classList.remove(CLASS_LOADING_PREVIEW);
  };
  ibexa.fieldTypeValidators = ibexa.fieldTypeValidators ? [].concat(_toConsumableArray(ibexa.fieldTypeValidators), [validator]) : [validator];
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/form.builder.create.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/form.builder.create.js ***!
  \*****************************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var CLASS_FORM_BUILDER_CLOSED = 'ibexa-fb-modal--closed';
  var CLASS_FORM_BUILDER_VISIBLE = 'ibexa-fb-modal--visible';
  var CLASS_SCROLL_DISABLED = 'ibexa-scroll-disabled';
  var CLASS_FIELD_NO_VALUE = 'ibexa-fb-content-edit-form--no-value';
  var SELECTOR_MODAL = '.ibexa-fb-modal';
  var DEFAULT_FIELDVALUE = {
    fields: []
  };
  var KEYCODE_ESCAPE = 27;
  var FIELDTYPE_EMPTY_VALUE = JSON.stringify({
    fields: [],
    content_id: null,
    content_field_id: null,
    language_code: null
  });
  var INVALID_FIELDS_ERROR = Translator.trans( /*@Desc("Not all the fields were configured correctly. Provide missing configuration.")*/'invalid.fields', {}, 'form_builder');
  var fieldTypeContainer = doc.querySelector('.ibexa-fb-content-edit-form');
  var formBuilderContainer = doc.querySelector('#ibexa-fb-root');
  var openFormBuilderBtns = doc.querySelectorAll('[data-open-form-builder]');
  var formFieldsConfigInput = doc.querySelector('[data-ezform-fieldvalue]');
  var formBuilderRoot = null;
  var formBuilder;
  if (!formFieldsConfigInput) {
    return;
  }
  var handleEscapeOnKeyup = function handleEscapeOnKeyup(event) {
    if (event.keyCode !== KEYCODE_ESCAPE) {
      return;
    }
    closeFormBuilder();
  };
  var findFieldConfig = function findFieldConfig(field) {
    return ibexa.formBuilder.config.fieldsConfig.find(function (config) {
      return config.identifier === field.identifier;
    });
  };
  var checkFieldIsInValid = function checkFieldIsInValid(field) {
    var fieldConfig = findFieldConfig(field);
    if (!fieldConfig) {
      return true;
    }
    return !field.attributes.every(function (attr) {
      return checkAttributeValidState(fieldConfig, attr);
    });
  };
  var checkAttributeValidState = function checkAttributeValidState(fieldConfig, attr) {
    var attrConfig = fieldConfig.attributes.find(function (config) {
      return config.identifier === attr.identifier;
    });
    if (!Object.keys(attrConfig.constraints).length) {
      return true;
    }
    var isRequired = !!Object.keys(attrConfig.constraints).find(function (key) {
      return key === 'not_blank';
    });
    if (!isRequired) {
      return true;
    }
    var isValid = !!attr.value.trim().length;
    return isValid;
  };
  var checkCanCloseFormBuilder = function checkCanCloseFormBuilder() {
    var formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
    var formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;
    if (!formHasAnyFields) {
      return {
        canClose: true,
        invalidFields: []
      };
    }
    var invalidFields = formFieldsConfig.fields.filter(checkFieldIsInValid);
    return {
      canClose: !invalidFields.length,
      invalidFields: invalidFields
    };
  };
  var hideFormBuilderModal = function hideFormBuilderModal() {
    var modal = fieldTypeContainer.querySelector('.ibexa-fb-modal');
    doc.body.classList.add(CLASS_FORM_BUILDER_CLOSED);
    doc.body.classList.remove(CLASS_SCROLL_DISABLED);
    global.parent.document.body.dispatchEvent(new CustomEvent('ibexa-udw-show-footer'));
    modal.classList.remove(CLASS_FORM_BUILDER_VISIBLE);
    modal.removeEventListener('keyup', handleEscapeOnKeyup);
    formBuilderRoot.unmount();
    formBuilderRoot = null;
  };
  var saveFormBuilder = function saveFormBuilder() {
    var _checkCanCloseFormBui = checkCanCloseFormBuilder(),
      canClose = _checkCanCloseFormBui.canClose,
      invalidFields = _checkCanCloseFormBui.invalidFields;
    if (!canClose) {
      ibexa.helpers.notification.showErrorNotification(INVALID_FIELDS_ERROR);
      formBuilder.markInvalidFields(invalidFields);
      return;
    }
    ibexa.helpers.tooltips.hideAll();
    updatePreview();
    hideFormBuilderModal();
  };
  var closeFormBuilder = function closeFormBuilder() {
    doc.body.dispatchEvent(new CustomEvent('ibexa-form-builder:before-close'));
    hideFormBuilderModal();
  };
  var openFormBuilder = function openFormBuilder(event) {
    event.preventDefault();
    doc.body.dispatchEvent(new CustomEvent('ibexa-form-builder:before-open'));
    var modal = fieldTypeContainer.querySelector(SELECTOR_MODAL);
    var hasCorrectValue = formFieldsConfigInput.value.trim().length && formFieldsConfigInput.value !== 'null';
    var fieldValue = hasCorrectValue ? JSON.parse(formFieldsConfigInput.value) : DEFAULT_FIELDVALUE;
    var config = _objectSpread(_objectSpread({}, ibexa.formBuilder.config), {}, {
      fieldValue: fieldValue,
      fieldValueInput: formFieldsConfigInput,
      fieldFormRequestConfig: doc.querySelector('form[name="request_field_configuration"]')
    });
    doc.body.classList.remove(CLASS_FORM_BUILDER_CLOSED);
    doc.body.classList.add(CLASS_SCROLL_DISABLED);
    modal.classList.add(CLASS_FORM_BUILDER_VISIBLE);
    modal.focus();
    modal.addEventListener('keyup', handleEscapeOnKeyup, false);
    formBuilderRoot = ReactDOM.createRoot(formBuilderContainer);
    formBuilderRoot.render(React.createElement(ibexa.modules.FormBuilder, _objectSpread(_objectSpread({}, config), {}, {
      ref: function ref(formBuilderRef) {
        formBuilder = formBuilderRef;
      }
    })));
  };
  var removeFieldValue = function removeFieldValue() {
    formFieldsConfigInput.value = FIELDTYPE_EMPTY_VALUE;
    updatePreview();
  };
  var attachEventHandlers = function attachEventHandlers(btn) {
    var btnClose = fieldTypeContainer.querySelector('[data-close-form-builder]');
    var btnSave = fieldTypeContainer.querySelector('[data-save-form-builder]');
    var btnRemove = fieldTypeContainer.querySelector('.ibexa-fb-content-edit-form__preview-action--trash');
    btn.addEventListener('click', openFormBuilder, false);
    btnClose.addEventListener('click', closeFormBuilder, false);
    btnSave.addEventListener('click', saveFormBuilder, false);
    btnRemove.addEventListener('click', removeFieldValue, false);
  };
  var updatePreview = function updatePreview() {
    var formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
    var formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;
    var callToAction = doc.querySelector('.ibexa-fb-content-edit-form__call-to-action');
    if (formHasAnyFields) {
      var iframeForm = doc.querySelector('form[name=request_form_preview]');
      var iframeFormInput = doc.querySelector('#request_form_preview_form');
      iframeFormInput.value = formFieldsConfigInput.value;
      iframeForm.submit();
      fieldTypeContainer.classList.remove(CLASS_FIELD_NO_VALUE);
      callToAction.setAttribute('hidden', true);
      return;
    }
    fieldTypeContainer.classList.add(CLASS_FIELD_NO_VALUE);
    callToAction.removeAttribute('hidden');
  };
  openFormBuilderBtns.forEach(attachEventHandlers);
  updatePreview();
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/resize.form.preview.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/resize.form.preview.js ***!
  \*****************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var formPreviewIframe = doc.querySelector('[name="form-preview"]');
  var tabEventAttached = false;
  if (!formPreviewIframe) {
    return;
  }
  var resizePreviewIframeToFitContent = function resizePreviewIframeToFitContent() {
    if (!formPreviewIframe || !formPreviewIframe.contentWindow || !formPreviewIframe.contentWindow.document || !formPreviewIframe.contentWindow.document.body) {
      return;
    }
    var bodyScrollHeight = formPreviewIframe.contentWindow.document.body.scrollHeight;
    formPreviewIframe.height = bodyScrollHeight;
    if (!bodyScrollHeight && !tabEventAttached) {
      var locationTab = doc.querySelector('#ibexa-tab-label-location-view');
      if (locationTab) {
        locationTab.addEventListener('shown.bs.tab', resizePreviewIframeToFitContent);
      }
      tabEventAttached = true;
    }
  };
  formPreviewIframe.addEventListener('load', resizePreviewIframeToFitContent, false);
  resizePreviewIframeToFitContent();
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/submission.details.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/submission.details.js ***!
  \****************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var modal = doc.querySelector('#submission-details-modal');
  var showModalOnLoad = function showModalOnLoad(event) {
    var values = event.relatedTarget.dataset.submissionValues;
    var tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';
    tbody.insertAdjacentHTML('afterbegin', values);
  };
  if (modal) {
    modal.addEventListener('show.bs.modal', showModalOnLoad);
  }
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js ***!
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


var Action = function Action(_ref) {
  var icon = _ref.icon,
    onClick = _ref.onClick,
    title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text c-action",
    type: "button",
    onClick: onClick,
    title: title
  }, icon);
};
Action.propTypes = {
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/field.config.panel.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/field.config.panel.js ***!
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
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");




var FieldConfigPanel = function FieldConfigPanel(_ref) {
  var title = _ref.title,
    isClosed = _ref.isClosed,
    onCancel = _ref.onCancel,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    extraClasses: "c-ibexa-fb-config-panel",
    type: _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__.CONFIG_PANEL_TYPE_RIGHT,
    showCloseBtn: true,
    onCancel: onCancel,
    title: title,
    isClosed: isClosed,
    isWithBackdrop: true,
    hasBackBtn: true,
    backdropContainer: document.querySelector('.ibexa-fb-modal__body')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-ibexa-fb-config-panel__body"
  }, children));
};
FieldConfigPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
FieldConfigPanel.defaultProps = {
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js ***!
  \*************************************************************************************************************/
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
/* harmony import */ var _action_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/action */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _field_config_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field.config.panel */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/field.config.panel.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
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
  Translator = _window.Translator;
var SELECTOR_POPUP_WRAPPER = '.m-ibexa-fb__popup-wrapper';
var FormField = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormField, _PureComponent);
  var _super = _createSuper(FormField);
  function FormField(props) {
    var _this;
    _classCallCheck(this, FormField);
    _this = _super.call(this, props);
    _this._refField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refConfigPopupComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refIframeComponent;
    _this._refUdwContainer = window.document.querySelector('#react-udw');
    _this.openFieldConfigPopup = _this.openFieldConfigPopup.bind(_assertThisInitialized(_this));
    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.hideConfigPopup = _this.hideConfigPopup.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    _this.getConfigIframe = _this.getConfigIframe.bind(_assertThisInitialized(_this));
    _this.attachConfigPopupEventHandlers = _this.attachConfigPopupEventHandlers.bind(_assertThisInitialized(_this));
    _this.handleOnConfigPopupIframeLoad = _this.handleOnConfigPopupIframeLoad.bind(_assertThisInitialized(_this));
    _this.handleLoadAfterConfigFormSubmit = _this.handleLoadAfterConfigFormSubmit.bind(_assertThisInitialized(_this));
    _this.setConfigIframeRef = _this.setConfigIframeRef.bind(_assertThisInitialized(_this));
    _this.setConfigFormSubmittedState = _this.setConfigFormSubmittedState.bind(_assertThisInitialized(_this));
    _this.openUdw = _this.openUdw.bind(_assertThisInitialized(_this));
    _this.closeUdw = _this.closeUdw.bind(_assertThisInitialized(_this));
    _this.updateFieldNameState = _this.updateFieldNameState.bind(_assertThisInitialized(_this));
    _this.updateFieldNameOnClose = _this.updateFieldNameOnClose.bind(_assertThisInitialized(_this));
    _this.state = {
      isConfigPopupVisible: false,
      shouldPopupWatchLoad: false,
      isConfigDataSent: false,
      udwConfig: null,
      nameFieldValue: props.name,
      isDragging: false
    };
    return _this;
  }
  _createClass(FormField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.ibexa.helpers.tooltips.parse();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.ibexa.helpers.tooltips.hideAll();
    }
  }, {
    key: "openFieldConfigPopup",
    value: function openFieldConfigPopup(event) {
      var _this2 = this;
      event.preventDefault();
      this.setState(function () {
        return {
          isConfigPopupVisible: true,
          shouldPopupWatchLoad: true
        };
      }, function () {
        return _this2.props.onConfigPopupOpened(_this2.props.id);
      });
    }
  }, {
    key: "openUdw",
    value: function openUdw(event) {
      var _this3 = this;
      this.setState({
        udwConfig: _objectSpread(_objectSpread({}, event.detail), {}, {
          onConfirm: function onConfirm(items) {
            event.detail.onConfirm(items);
            _this3.closeUdw();
          },
          onCancel: function onCancel() {
            event.detail.onCancel();
            _this3.closeUdw();
          }
        })
      });
    }
  }, {
    key: "closeUdw",
    value: function closeUdw() {
      this.setState({
        udwConfig: null
      });
    }
  }, {
    key: "updateFieldNameState",
    value: function updateFieldNameState(_ref) {
      var _this4 = this;
      var detail = _ref.detail;
      var nameFieldValue = detail.name;
      this.props.checkCanSetFieldName({
        id: detail.id,
        value: nameFieldValue,
        successCallback: function successCallback() {
          return _this4.setState(function () {
            return {
              nameFieldValue: nameFieldValue
            };
          }, detail.successCallback);
        },
        errorCallback: detail.errorCallback
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this$props = this.props,
        onRemove = _this$props.onRemove,
        id = _this$props.id;
      onRemove(id);
    }
  }, {
    key: "hideConfigPopup",
    value: function hideConfigPopup() {
      this.setState(function () {
        return {
          isConfigPopupVisible: false
        };
      }, this.updateFieldNameOnClose);
    }
  }, {
    key: "updateFieldNameOnClose",
    value: function updateFieldNameOnClose() {
      var _this5 = this;
      var _this$state = this.state,
        nameFieldValue = _this$state.nameFieldValue,
        isConfigDataSent = _this$state.isConfigDataSent;
      if (isConfigDataSent) {
        return this.props.onNameChange(this.props.id, nameFieldValue);
      }
      this.setState(function () {
        return {
          nameFieldValue: _this5.props.name
        };
      });
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(event) {
      var _this6 = this;
      var _this$props2 = this.props,
        onDragStart = _this$props2.onDragStart,
        id = _this$props2.id,
        identifier = _this$props2.identifier,
        name = _this$props2.name,
        views = _this$props2.views;
      var image = document.querySelector("[data-ibexa-sidebar-field-type=\"".concat(identifier, "\"]"));
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', image);
      event.dataTransfer.setDragImage(image, 0, 0);
      setTimeout(function () {
        _this6.setState({
          isDragging: true
        });
      }, 0);
      onDragStart({
        id: id,
        identifier: identifier,
        name: name,
        views: views
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(event) {
      this.props.onDragEnd(event);
      this.setState({
        isDragging: false
      });
    }
  }, {
    key: "getConfigIframe",
    value: function getConfigIframe() {
      return this._refIframeComponent && this._refIframeComponent._refIframe;
    }
  }, {
    key: "getConfigPopup",
    value: function getConfigPopup() {
      return this._refConfigPopupComponent.current && this._refConfigPopupComponent.current._refModal;
    }
  }, {
    key: "forceConfigPopupBackdropHidden",
    value: function forceConfigPopupBackdropHidden() {
      var popup = this.getConfigPopup();
      if (popup) {
        window.bootstrap.Modal.getOrCreateInstance(popup).hide();
      }
    }
  }, {
    key: "allowScrolling",
    value: function allowScrolling() {
      document.body.classList.remove('modal-open', 'ibexa-non-scrollable');
    }
  }, {
    key: "attachConfigPopupEventHandlers",
    value: function attachConfigPopupEventHandlers() {
      if (this.state.isConfigDataSent) {
        return;
      }
      var iframeDoc = this.getConfigIframe().contentDocument;
      iframeDoc.body.addEventListener('ibexa-open-udw', this.openUdw, false);
      iframeDoc.body.addEventListener('ibexa-update-field-name', this.updateFieldNameState, false);
      iframeDoc.querySelector('[name="field_configuration"]').addEventListener('submit', this.setConfigFormSubmittedState, false);
      iframeDoc.querySelector('[data-form-action="discard"]').addEventListener('click', this.hideConfigPopup, false);
    }
  }, {
    key: "setConfigFormSubmittedState",
    value: function setConfigFormSubmittedState() {
      this.getConfigIframe().onload = this.handleLoadAfterConfigFormSubmit;
      this.setState(function () {
        return {
          isConfigPopupVisible: true,
          isConfigDataSent: true,
          shouldPopupWatchLoad: true
        };
      });
    }
  }, {
    key: "handleOnConfigPopupIframeLoad",
    value: function handleOnConfigPopupIframeLoad() {
      this.setState(function () {
        return {
          isConfigDataSent: false,
          shouldPopupWatchLoad: false,
          isConfigPopupVisible: true
        };
      }, this.attachConfigPopupEventHandlers);
    }
  }, {
    key: "handleLoadAfterConfigFormSubmit",
    value: function handleLoadAfterConfigFormSubmit() {
      var _this7 = this;
      var iframe = this.getConfigIframe();
      var iframeDocument = iframe.contentDocument;
      var fieldData = iframeDocument.querySelector('[name="FieldConfiguration"]');
      if (!fieldData) {
        this.attachConfigPopupEventHandlers();
        this.setState(function () {
          return {
            isConfigDataSent: false,
            shouldPopupWatchLoad: false
          };
        });
        return;
      }
      iframe.onload = null;
      this.setState(function () {
        return {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        };
      }, function () {
        return _this7.props.onFieldDataUpdate(JSON.parse(fieldData.content));
      });
    }
  }, {
    key: "renderConfigPopup",
    value: function renderConfigPopup() {
      var _this$state2 = this.state,
        isConfigDataSent = _this$state2.isConfigDataSent,
        isConfigPopupVisible = _this$state2.isConfigPopupVisible,
        nameFieldValue = _this$state2.nameFieldValue;
      if (!isConfigPopupVisible) {
        this.forceConfigPopupBackdropHidden();
        this.allowScrolling();
        return null;
      }
      var id = this.props.id;
      var iframeAttrs = {
        ref: this.setConfigIframeRef,
        src: 'about:blank',
        id: id,
        name: id,
        title: id,
        onLoad: isConfigDataSent ? this.handleLoadAfterConfigFormSubmit : this.handleOnConfigPopupIframeLoad,
        isVisible: !isConfigDataSent
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_field_config_panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onCancel: this.hideConfigPopup,
        title: nameFieldValue,
        isClosed: !isConfigPopupVisible
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, iframeAttrs, {
        fs: true
      }))), document.querySelector(SELECTOR_POPUP_WRAPPER));
    }
  }, {
    key: "setConfigIframeRef",
    value: function setConfigIframeRef(ref) {
      this._refIframeComponent = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$nameField;
      var _this$props3 = this.props,
        id = _this$props3.id,
        onDragOver = _this$props3.onDragOver,
        identifier = _this$props3.identifier,
        isHighlighted = _this$props3.isHighlighted,
        isRemoved = _this$props3.isRemoved;
      var udwConfig = this.state.udwConfig;
      var actionTitleSettings = Translator.trans( /*@Desc("Settings")*/'field.settings', {}, 'form_builder');
      var actionTitleRemove = Translator.trans( /*@Desc("Remove")*/'field.remove', {}, 'form_builder');
      var fieldClassName = 'c-ibexa-fb-form-field';
      if (this.props.isInvalid) {
        fieldClassName = "".concat(fieldClassName, " ").concat(fieldClassName, "--invalid");
      }
      if (this.state.isDragging) {
        fieldClassName = "".concat(fieldClassName, " ").concat(fieldClassName, "--is-dragging-out");
      }
      if (isHighlighted) {
        fieldClassName = "".concat(fieldClassName, " ").concat(fieldClassName, "--highlighted");
      }
      if (isRemoved) {
        fieldClassName = "".concat(fieldClassName, " ").concat(fieldClassName, "--removed");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, udwConfig && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(window.ibexa.modules.UniversalDiscovery, udwConfig), this._refUdwContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this._refField,
        className: fieldClassName,
        onDragStart: this.handleDragStart,
        onDragOver: onDragOver,
        onDragEnd: this.handleDragEnd,
        "data-ibexa-field-id": id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__content",
        draggable: "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__left-col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__drag-handler"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "drag",
        extraClasses: "ibexa-icon--tiny-small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__label"
      }, (_this$state$nameField = this.state.nameFieldValue) !== null && _this$state$nameField !== void 0 ? _this$state$nameField : identifier)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__right-col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__setting-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_action__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: actionTitleSettings,
        onClick: this.openFieldConfigPopup,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "settings-block",
          extraClasses: "ibexa-icon--small"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__trash-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_action__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: actionTitleRemove,
        onClick: this.remove,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "trash",
          extraClasses: "ibexa-icon--small"
        })
      }))), this.renderConfigPopup())));
    }
  }]);
  return FormField;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
FormField.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  identifier: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  fieldName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  views: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onDragOver: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onDragEnd: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onConfigPopupOpened: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onFieldDataUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onNameChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  isInvalid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  checkCanSetFieldName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  isHighlighted: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isRemoved: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
FormField.defaultProps = {
  isHighlighted: false,
  isRemoved: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormField);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.field.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.field.js ***!
  \******************************************************************************************************************/
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




var SidebarField = /*#__PURE__*/function (_PureComponent) {
  _inherits(SidebarField, _PureComponent);
  var _super = _createSuper(SidebarField);
  function SidebarField(props) {
    var _this;
    _classCallCheck(this, SidebarField);
    _this = _super.call(this, props);
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    _this.appendNewField = _this.appendNewField.bind(_assertThisInitialized(_this));
    _this.state = {
      isDragging: false
    };
    return _this;
  }
  _createClass(SidebarField, [{
    key: "handleDragStart",
    value: function handleDragStart(event) {
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('text/html', event.currentTarget);
      var _this$props = this.props,
        onDragStart = _this$props.onDragStart,
        type = _this$props.type;
      onDragStart({
        identifier: type
      });
      this.setState(function () {
        return {
          isDragging: true
        };
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd() {
      this.props.onDragEnd();
      this.setState(function () {
        return {
          isDragging: false
        };
      });
    }
  }, {
    key: "appendNewField",
    value: function appendNewField() {
      var _this$props2 = this.props,
        appendNewField = _this$props2.appendNewField,
        type = _this$props2.type;
      appendNewField(type);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        name = _this$props3.name,
        thumbnail = _this$props3.thumbnail,
        type = _this$props3.type,
        isHidden = _this$props3.isHidden;
      var sidebarFieldClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
        'c-ibexa-fb-sidebar-field': true,
        'c-ibexa-fb-sidebar-field--hidden': isHidden,
        'c-ibexa-fb-sidebar-field--is-dragging-out': this.state.isDragging
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: sidebarFieldClassName,
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        "data-ibexa-sidebar-field-type": type,
        onClick: this.appendNewField
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__content",
        draggable: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__drag"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "drag",
        extraClasses: "c-ibexa-fb-sidebar-field__drag-icon ibexa-icon--tiny-small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__type"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        customPath: thumbnail,
        extraClasses: "c-ibexa-fb-sidebar-field__type-icon ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__label"
      }, name)));
    }
  }]);
  return SidebarField;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
SidebarField.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onDragEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  isHidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  appendNewField: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarField);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.fields.group.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.fields.group.js ***!
  \*************************************************************************************************************************/
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




var SidebarFieldsGroup = function SidebarFieldsGroup(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.isCollapsed),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var fieldsGroupClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-ibexa-fb-sidebar-fields-group': true,
    'c-ibexa-fb-sidebar-fields-group--collapsed': isCollapsed
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: fieldsGroupClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__title-bar",
    onClick: function onClick() {
      return setIsCollapsed(function (isCollapsedPrev) {
        return !isCollapsedPrev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__toggler"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-down",
    extraClasses: "ibexa-icon--tiny-small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__fields"
  }, props.children));
};
SidebarFieldsGroup.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  isCollapsed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
SidebarFieldsGroup.defaultProps = {
  isCollapsed: false,
  title: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarFieldsGroup);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.js ***!
  \************************************************************************************************************/
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
/* harmony import */ var _sidebar_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.field */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.field.js");
/* harmony import */ var _sidebar_fields_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.fields.group */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.fields.group.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var _window = window,
  Translator = _window.Translator;
var title = Translator.trans( /*@Desc("Fields")*/'sidebar.fields', {}, 'form_builder');
var Sidebar = function Sidebar(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    fieldFilterQuery = _useState2[0],
    setFieldFilterQuery = _useState2[1];
  var renderSidebarField = function renderSidebarField(_ref) {
    var name = _ref.name,
      identifier = _ref.identifier,
      thumbnail = _ref.thumbnail;
    var fieldFilterQueryLowerCase = fieldFilterQuery.toLowerCase();
    var fieldNameLowerCase = name.toLowerCase();
    var isHidden = !fieldNameLowerCase.includes(fieldFilterQueryLowerCase);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: identifier,
      name: name,
      type: identifier,
      thumbnail: thumbnail,
      isHidden: isHidden,
      onDragStart: props.fieldDragStart,
      onDragEnd: props.fieldDragEnd,
      appendNewField: props.appendNewField
    });
  };
  var renderSidebarSingleGroup = function renderSidebarSingleGroup(category, isCollapsed) {
    var categoryFormFields = props.fieldsConfigByCategory[category];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_fields_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: category,
      title: category,
      isCollapsed: isCollapsed
    }, categoryFormFields.map(renderSidebarField));
  };
  var renderSidebarGroups = function renderSidebarGroups() {
    var fieldsConfigByCategory = props.fieldsConfigByCategory;
    return Object.keys(fieldsConfigByCategory).map(function (category) {
      return renderSidebarSingleGroup(category, false);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar__title-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "c-ibexa-fb-sidebar__title"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar__search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: fieldFilterQuery,
    onChange: function onChange(event) {
      return setFieldFilterQuery(event.target.value);
    },
    className: "ibexa-input ibexa-input--text c-ibexa-fb-sidebar__sidebar-filter form-control",
    placeholder: Translator.trans( /*@Desc("Search...")*/'sidebar_filter.placeholder', {}, 'form_builder')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "search",
    extraClasses: "ibexa-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar__list"
  }, renderSidebarGroups()));
};
Sidebar.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  fieldsConfigByCategory: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  appendNewField: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  fieldDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  fieldDragEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Sidebar.defaultProps = {
  fieldDragStart: function fieldDragStart() {},
  fieldDragEnd: function fieldDragEnd() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js ***!
  \**********************************************************************************************/
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
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js");
/* harmony import */ var _helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/remove.from.array */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.js");
/* harmony import */ var _components_field_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/field/form.field */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  Translator = _window.Translator;
var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_WORKSPACE = 'm-ibexa-fb-workspace';
var SELECTOR_PLACEHOLDER = '.droppable-placeholder';
var ZONE_ID = 'workspace';
var IDENTIFIER_FIELD_DATA_ATTRIBUTE = 'ibexaFieldId';
var HIGHLIGHT_TIMEOUT = 3000;
var REMOVE_ACTIVE_ZONE_TIMEOUT = 400;
var nonDraggingState = {
  isDragging: false,
  draggedFieldData: null,
  draggedFromSidebar: null,
  dragOverZoneId: null
};
var FormBuilder = /*#__PURE__*/function (_Component) {
  _inherits(FormBuilder, _Component);
  var _super = _createSuper(FormBuilder);
  function FormBuilder(props) {
    var _this;
    _classCallCheck(this, FormBuilder);
    _this = _super.call(this, props);
    _this._refWorkspace = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refWorkspaceContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refFieldConfigTextarea;
    _this._refFieldConfigIdInput;
    _this.handleDragStartSidebarField = _this.handleDragStartSidebarField.bind(_assertThisInitialized(_this));
    _this.handleDragStartFormField = _this.handleDragStartFormField.bind(_assertThisInitialized(_this));
    _this.handleDropSidebarField = _this.handleDropSidebarField.bind(_assertThisInitialized(_this));
    _this.handleDropWorkspaceField = _this.handleDropWorkspaceField.bind(_assertThisInitialized(_this));
    _this.handleElementDragOver = _this.handleElementDragOver.bind(_assertThisInitialized(_this));
    _this.handleZoneDragOver = _this.handleZoneDragOver.bind(_assertThisInitialized(_this));
    _this.handleZoneDragOut = _this.handleZoneDragOut.bind(_assertThisInitialized(_this));
    _this.handleActiveZone = _this.handleActiveZone.bind(_assertThisInitialized(_this));
    _this.getPlaceholderNodes = _this.getPlaceholderNodes.bind(_assertThisInitialized(_this));
    _this.cancelDraggingState = _this.cancelDraggingState.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    _this.addPlaceholderInZone = _this.addPlaceholderInZone.bind(_assertThisInitialized(_this));
    _this.removePlaceholders = _this.removePlaceholders.bind(_assertThisInitialized(_this));
    _this.removePlaceholdersWithDelay = _this.removePlaceholdersWithDelay.bind(_assertThisInitialized(_this));
    _this.renderFormField = _this.renderFormField.bind(_assertThisInitialized(_this));
    _this.removeFieldFromFieldsState = _this.removeFieldFromFieldsState.bind(_assertThisInitialized(_this));
    _this.updateFieldPosition = _this.updateFieldPosition.bind(_assertThisInitialized(_this));
    _this.insertSiblingField = _this.insertSiblingField.bind(_assertThisInitialized(_this));
    _this.updateFields = _this.updateFields.bind(_assertThisInitialized(_this));
    _this.finishDropAction = _this.finishDropAction.bind(_assertThisInitialized(_this));
    _this.requestFieldConfigForm = _this.requestFieldConfigForm.bind(_assertThisInitialized(_this));
    _this.getFieldsState = _this.getFieldsState.bind(_assertThisInitialized(_this));
    _this.updateFieldValue = _this.updateFieldValue.bind(_assertThisInitialized(_this));
    _this.updateFieldNameValue = _this.updateFieldNameValue.bind(_assertThisInitialized(_this));
    _this.checkCanSetFieldName = _this.checkCanSetFieldName.bind(_assertThisInitialized(_this));
    _this.getNewFieldName = _this.getNewFieldName.bind(_assertThisInitialized(_this));
    _this.appendNewField = _this.appendNewField.bind(_assertThisInitialized(_this));
    var fieldsConfigByCategory = _this.groupFormFieldsByCategory(_this.props.fieldsConfig);
    _this.state = _objectSpread(_objectSpread({}, nonDraggingState), {}, {
      fields: props.fieldValue.fields,
      fieldsConfigByCategory: fieldsConfigByCategory,
      invalidFields: [],
      fieldFilterQuery: '',
      removedFieldsIds: []
    });
    return _this;
  }
  _createClass(FormBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._refFieldConfigTextarea = this.props.fieldFormRequestConfig.querySelector('#request_field_configuration_form');
      this._refFieldConfigIdInput = this.props.fieldFormRequestConfig.querySelector('#request_field_configuration_field_id');
      window.document.body.dispatchEvent(new CustomEvent('ibexa-form-builder-loaded'));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.dispatchEvent(new CustomEvent('ibexa-form-builder-unloaded'));
    }
  }, {
    key: "groupFormFieldsByCategory",
    value: function groupFormFieldsByCategory(formFields) {
      return formFields.reduce(function (formFieldsMap, formField) {
        var formFieldCategory = formField.category;
        formFieldsMap[formFieldCategory] = formFieldsMap[formFieldCategory] || [];
        formFieldsMap[formFieldCategory].push(formField);
        return formFieldsMap;
      }, {});
    }
  }, {
    key: "handleDragStartSidebarField",
    value: function handleDragStartSidebarField(draggedFieldData) {
      this.setState(function () {
        return {
          isDragging: true,
          draggedFieldData: draggedFieldData,
          draggedFromSidebar: true
        };
      });
    }
  }, {
    key: "handleDragStartFormField",
    value: function handleDragStartFormField(draggedFieldData) {
      this.setState(function () {
        return {
          isDragging: true,
          draggedFieldData: draggedFieldData,
          draggedFromSidebar: false
        };
      });
    }
  }, {
    key: "handleZoneDragOver",
    value: function handleZoneDragOver(event) {
      var _this2 = this;
      event.preventDefault();
      var target = event.target;
      var _this$state = this.state,
        dragOverZoneId = _this$state.dragOverZoneId,
        isDragging = _this$state.isDragging;
      var isDropZone = target === this._refWorkspaceContent.current;
      var shouldAddPlaceholder = isDropZone && !dragOverZoneId && isDragging;
      if (shouldAddPlaceholder) {
        this.setState(function () {
          return {
            dragOverZoneId: target.dataset.ezZoneId
          };
        }, function () {
          return _this2.addPlaceholderInZone(target);
        });
      }
      return false;
    }
  }, {
    key: "handleActiveZone",
    value: function handleActiveZone() {
      var _this3 = this;
      window.clearTimeout(this.activeZoneTimeout);
      this._refWorkspace.current.classList.add("".concat(CLASS_WORKSPACE, "--active"));
      this.activeZoneTimeout = window.setTimeout(function () {
        _this3._refWorkspace.current.classList.remove("".concat(CLASS_WORKSPACE, "--active"));
      }, REMOVE_ACTIVE_ZONE_TIMEOUT);
    }
  }, {
    key: "handleZoneDragOut",
    value: function handleZoneDragOut(event) {
      if (event.target.isSameNode(this._refWorkspace.current)) {
        this.removePlaceholders();
        this.setState(_objectSpread({}, this.props.getInitDragDropState()));
      }
    }
  }, {
    key: "getFormFieldElement",
    value: function getFormFieldElement(target) {
      return this.props.getElement(target, function (element) {
        return element.dataset && element.dataset[IDENTIFIER_FIELD_DATA_ATTRIBUTE];
      });
    }
  }, {
    key: "getPlaceholderPreviewNode",
    value: function getPlaceholderPreviewNode() {
      return this._refWorkspaceContent.current.querySelector(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "removeFieldFromFieldsState",
    value: function removeFieldFromFieldsState(fieldId) {
      this.setState(function (state) {
        return {
          removedFieldsIds: [].concat(_toConsumableArray(state.removedFieldsIds), [fieldId])
        };
      });
    }
  }, {
    key: "insertSiblingField",
    value: function insertSiblingField(fields, fieldData, siblingFieldId, insertBefore) {
      var besideFieldIndex = fields.findIndex(function (element) {
        return element.id === siblingFieldId;
      });
      if (besideFieldIndex === -1) {
        var message = Translator.trans( /*@Desc("Moved field data does not exist.")*/'moved.field.data.not.exists', {}, 'form_builder');
        window.ibexa.helpers.notification.showErrorNotification(message);
        return fields;
      }
      var insertionIndex = insertBefore ? besideFieldIndex : besideFieldIndex + 1;
      fields.splice(insertionIndex, 0, fieldData);
      return fields;
    }
  }, {
    key: "appendFormField",
    value: function appendFormField(fields, fieldData) {
      fields.push(fieldData);
      return fields;
    }
  }, {
    key: "findByFieldId",
    value: function findByFieldId(fieldId) {
      return function (field) {
        return field.id === fieldId;
      };
    }
  }, {
    key: "getNewFieldName",
    value: function getNewFieldName(fieldName) {
      var index = 1;
      var fields = this.state.fields;
      var generateFieldName = function generateFieldName(name) {
        var isNameUsed = fields.find(function (field) {
          return field.name === name;
        });
        if (!isNameUsed) {
          return name;
        }
        var numbersInName = name.match(/(#)\d+$/);
        if (numbersInName) {
          name = name.substring(0, numbersInName.index).trim();
        }
        index++;
        return generateFieldName("".concat(name, " #").concat(index));
      };
      return generateFieldName(fieldName);
    }
  }, {
    key: "getNewFieldData",
    value: function getNewFieldData(fieldIdentifier) {
      var fieldsConfig = this.props.fieldsConfig;
      var fieldConfig = fieldsConfig.find(function (field) {
        return field.identifier === fieldIdentifier;
      });
      var fieldName = this.getNewFieldName(fieldConfig.name);
      var newField = {
        id: (0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__["default"])('fbf-'),
        identifier: fieldConfig.identifier,
        name: fieldName,
        attributes: fieldConfig.attributes.map(function (attr) {
          return {
            id: (0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__["default"])('fbfa-'),
            name: attr.id,
            type: attr.type,
            identifier: attr.identifier,
            value: attr.values || attr.defaultValue || ''
          };
        }),
        validators: fieldConfig.validators || []
      };
      return newField;
    }
  }, {
    key: "appendNewField",
    value: function appendNewField(identifier) {
      var _this4 = this;
      var fieldData = this.getNewFieldData(identifier);
      this.setState(function (state) {
        return {
          fields: _this4.appendFormField((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldData)
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "handleDropSidebarField",
    value: function handleDropSidebarField(_ref) {
      var _this5 = this;
      var siblingFieldId = _ref.siblingFieldId,
        insertBefore = _ref.insertBefore;
      var fieldData = this.getNewFieldData(this.state.draggedFieldData.identifier);
      var initialData = _objectSpread({}, this.props.getInitDragDropState());
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, initialData), {}, {
          highlightedFieldId: fieldData.id,
          fields: _this5.updateFields((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldData, siblingFieldId, insertBefore)
        });
      }, this.finishDropAction);
    }
  }, {
    key: "handleDropWorkspaceField",
    value: function handleDropWorkspaceField(_ref2) {
      var _this6 = this;
      var siblingFieldId = _ref2.siblingFieldId,
        insertBefore = _ref2.insertBefore;
      var fieldId = this.state.draggedFieldData.id;
      if (fieldId === siblingFieldId) {
        return;
      }
      var initialData = _objectSpread({}, this.props.getInitDragDropState());
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, initialData), {}, {
          highlightedFieldId: fieldId,
          fields: _this6.updateFieldPosition((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldId, siblingFieldId, insertBefore)
        });
      }, this.finishDropAction);
    }
  }, {
    key: "updateFieldPosition",
    value: function updateFieldPosition(fields, fieldId, siblingFieldId, insertBefore) {
      var findCallback = this.findByFieldId(fieldId);
      var fieldData = fields.find(findCallback);
      if (!fieldData) {
        return fields;
      }
      return this.updateFields((0,_helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__["default"])(fields, findCallback), fieldData, siblingFieldId, insertBefore);
    }
  }, {
    key: "updateFields",
    value: function updateFields(fields, fieldData, siblingFieldId, insertBefore) {
      if (siblingFieldId) {
        return this.insertSiblingField(fields, fieldData, siblingFieldId, insertBefore);
      }
      return this.appendFormField(fields, fieldData);
    }
  }, {
    key: "addPlaceholderInZone",
    value: function addPlaceholderInZone(target) {
      var placeholders = _toConsumableArray(this.getPlaceholderNodes());
      if (placeholders.length !== 0 && this.state.fields.length !== 0 && target.isSameNode(this._refWorkspaceContent.current)) {
        return;
      }
      this.props.addPlaceholderInZone(target, placeholders, IDENTIFIER_FIELD_DATA_ATTRIBUTE, this.removePlaceholdersWithDelay);
    }
  }, {
    key: "removePlaceholders",
    value: function removePlaceholders() {
      this.props.removePlaceholders(this.getPlaceholderNodes(), this.props.removePlaceholderWithoutAnimation);
    }
  }, {
    key: "removePlaceholdersWithDelay",
    value: function removePlaceholdersWithDelay() {
      this.props.removePlaceholdersAfterTimeout(this.getPlaceholderNodes, this.cancelDraggingState);
    }
  }, {
    key: "getPlaceholderNodes",
    value: function getPlaceholderNodes() {
      return this._refWorkspaceContent.current.querySelectorAll(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "cancelDraggingState",
    value: function cancelDraggingState() {
      this.setState(function () {
        return _objectSpread({}, nonDraggingState);
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      var placeholder = this.getPlaceholderPreviewNode();
      if (!placeholder) {
        this.finishDropAction();
        return;
      }
      var _placeholder$dataset = placeholder.dataset,
        placeholderPosition = _placeholder$dataset.position,
        siblingFieldId = _placeholder$dataset.ibexaFieldId;
      var insertBefore = placeholderPosition === 'top';
      var isFieldIdDefined = siblingFieldId && siblingFieldId !== 'undefined';
      var placeholderDropData = {
        insertBefore: insertBefore,
        siblingFieldId: isFieldIdDefined ? siblingFieldId : null,
        isNew: this.state.draggedFromSidebar
      };
      if (this.state.draggedFromSidebar) {
        this.handleDropSidebarField(placeholderDropData);
      } else {
        this.handleDropWorkspaceField(placeholderDropData);
      }
    }
  }, {
    key: "finishDropAction",
    value: function finishDropAction() {
      var _this7 = this;
      this.cancelDraggingState();
      this.setFormFieldTypeFormFieldValue();
      window.setTimeout(function () {
        _this7.setState({
          highlightedFieldId: null
        });
      }, HIGHLIGHT_TIMEOUT);
    }
  }, {
    key: "setFormFieldTypeFormFieldValue",
    value: function setFormFieldTypeFormFieldValue() {
      var changeEvent = new Event('change');
      this.props.fieldValueInput.value = JSON.stringify({
        fields: this.state.fields
      });
      this.props.fieldValueInput.dispatchEvent(changeEvent);
    }
  }, {
    key: "handleElementDragOver",
    value: function handleElementDragOver(_ref3) {
      var target = _ref3.target,
        clientY = _ref3.clientY,
        currentTarget = _ref3.currentTarget;
      var formFieldElement = this.getFormFieldElement(target);
      var isPlaceholder = currentTarget.classList.contains(CLASS_PLACEHOLDER);
      if (!formFieldElement || isPlaceholder || !this.state.isDragging) {
        return;
      }
      var placeholders = this.getPlaceholderNodes();
      var _this$state2 = this.state,
        placeholderPosition = _this$state2.placeholderPosition,
        placeholderElementId = _this$state2.placeholderElementId,
        placeholderZoneId = _this$state2.placeholderZoneId;
      var placeholderMeta = this.props.addPlaceholderBesideElement(formFieldElement, clientY, placeholders, IDENTIFIER_FIELD_DATA_ATTRIBUTE, this.handleElementDragOver, {
        placeholderPosition: placeholderPosition,
        placeholderElementId: placeholderElementId,
        placeholderZoneId: placeholderZoneId
      });
      this.setState(function () {
        return _objectSpread({}, placeholderMeta);
      });
    }
  }, {
    key: "requestFieldConfigForm",
    value: function requestFieldConfigForm(fieldId) {
      this.props.fieldFormRequestConfig.target = fieldId;
      this._refFieldConfigTextarea.value = this.props.fieldValueInput.value;
      this._refFieldConfigIdInput.value = fieldId;
      this.props.fieldFormRequestConfig.submit();
    }
  }, {
    key: "getFieldsState",
    value: function getFieldsState() {
      return (0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(this.state.fields);
    }
  }, {
    key: "updateFieldValue",
    value: function updateFieldValue(fieldData) {
      var fields = this.getFieldsState().map(function (field) {
        return field.id === fieldData.id ? _objectSpread({}, fieldData) : _objectSpread({}, field);
      });
      this.setState(function () {
        return {
          fields: fields
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "checkCanSetFieldName",
    value: function checkCanSetFieldName(_ref4) {
      var id = _ref4.id,
        value = _ref4.value,
        successCallback = _ref4.successCallback,
        errorCallback = _ref4.errorCallback;
      var isNameUsed = this.state.fields.find(function (field) {
        return field.name === value && field.id !== id;
      });
      if (isNameUsed) {
        return errorCallback();
      }
      successCallback();
    }
  }, {
    key: "updateFieldNameValue",
    value: function updateFieldNameValue(fieldId, name) {
      var fields = this.getFieldsState().map(function (field) {
        return field.id === fieldId ? _objectSpread(_objectSpread({}, field), {}, {
          name: name
        }) : _objectSpread({}, field);
      });
      this.setState(function () {
        return {
          fields: fields
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "markInvalidFields",
    value: function markInvalidFields(invalidFields) {
      this.setState(function () {
        return {
          invalidFields: invalidFields
        };
      });
    }
  }, {
    key: "checkIsFieldInvalid",
    value: function checkIsFieldInvalid(field) {
      return !!this.state.invalidFields.find(function (invalidField) {
        return invalidField.id === field.id;
      });
    }
  }, {
    key: "renderFormField",
    value: function renderFormField(config) {
      var _this8 = this;
      var isRemoved = this.state.removedFieldsIds.includes(config.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_field_form_field__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        key: config.id
      }, config, {
        fieldName: window.ibexa.formBuilder.config.fieldsConfig.find(function (data) {
          return data.identifier === config.identifier;
        }).name,
        onRemove: this.removeFieldFromFieldsState,
        onDragOver: this.handleElementDragOver,
        onDragStart: this.handleDragStartFormField,
        onDragEnd: this.removePlaceholders,
        onConfigPopupOpened: this.requestFieldConfigForm,
        onFieldDataUpdate: this.updateFieldValue,
        onNameChange: this.updateFieldNameValue,
        checkCanSetFieldName: this.checkCanSetFieldName,
        isInvalid: this.checkIsFieldInvalid(config),
        isHighlighted: config.id === this.state.highlightedFieldId,
        isRemoved: isRemoved,
        ref: function ref(element) {
          if (element) {
            element._refField.current.addEventListener('animationend', function () {
              if (isRemoved) {
                _this8.setState(function (state) {
                  return {
                    fields: (0,_helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), _this8.findByFieldId(config.id)),
                    removedFieldsIds: state.removedFieldsIds.filter(function (fieldId) {
                      return fieldId != config.id;
                    })
                  };
                }, _this8.setFormFieldTypeFormFieldValue);
              }
            });
          }
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      var _this$state3 = this.state,
        fields = _this$state3.fields,
        isDragging = _this$state3.isDragging,
        fieldsConfigByCategory = _this$state3.fieldsConfigByCategory;
      var showEmptyMessage = !fields.length && !isDragging;
      var workspaceClassName = "".concat(CLASS_WORKSPACE, "__content");
      var emptyMessage = Translator.trans( /*@Desc("Create a form by dragging elements here")*/'drag.drop.call.to.action', {}, 'form_builder');
      var emptyZoneHeadline = Translator.trans( /*@Desc("Build your form")*/'drag.drop.empty.zone.headline', {}, 'form_builder');
      var emptyZoneMessage = Translator.trans( /*@Desc("Drag and drop item from library to build form")*/'drag.drop.empty.zone.message', {}, 'form_builder');
      if (showEmptyMessage) {
        workspaceClassName = "".concat(workspaceClassName, " ").concat(CLASS_WORKSPACE, "__content--empty");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb__workspace-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: CLASS_WORKSPACE,
        onDragOver: function onDragOver(event) {
          event.preventDefault();
          _this9.handleZoneDragOut(event);
          _this9.handleActiveZone();
          return false;
        },
        ref: this._refWorkspace
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: workspaceClassName,
        "data-empty-message": emptyMessage,
        ref: this._refWorkspaceContent,
        "data-ibexa-zone-id": ZONE_ID,
        onDrop: this.handleDrop,
        onDragOver: this.handleZoneDragOver
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb-workspace__empty-zone-placeholder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "m-ibexa-fb-workspace__empty-zone-image",
        src: "/bundles/ibexaadminui/img/empty-field-definition-group.svg",
        alt: emptyZoneMessage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "m-ibexa-fb-workspace__empty-zone-headline"
      }, emptyZoneHeadline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb-workspace__empty-zone-label"
      }, emptyZoneMessage)), fields.map(this.renderFormField)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb__sidebar-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fieldsConfigByCategory: fieldsConfigByCategory,
        fieldDragStart: this.handleDragStartSidebarField,
        fieldDragEnd: function fieldDragEnd() {
          _this9.cancelDraggingState();
          _this9.removePlaceholders();
        },
        appendNewField: this.appendNewField
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb__popup-wrapper"
      }));
    }
  }]);
  return FormBuilder;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
FormBuilder.propTypes = {
  fieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    fields: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
  }).isRequired,
  fieldValueInput: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  fieldFormRequestConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  fieldsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    category: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    identifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
  })).isRequired,
  getElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  getInitDragDropState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  addPlaceholderInZone: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  addPlaceholderBesideElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  removePlaceholders: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  removePlaceholdersAfterTimeout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  removePlaceholderWithoutAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBuilder);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var removeFromArray = function removeFromArray(fields, callback) {
  var fieldIndex = fields.findIndex(callback);
  if (fieldIndex !== -1) {
    fields.splice(fieldIndex, 1);
  }
  return fields;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeFromArray);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_builder_form_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-builder/form.builder */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/core/drag.drop */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js");
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




var FormBuilderModule = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormBuilderModule, _PureComponent);
  var _super = _createSuper(FormBuilderModule);
  function FormBuilderModule(props) {
    var _this;
    _classCallCheck(this, FormBuilderModule);
    _this = _super.call(this, props);
    _this._refFormBuilder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.markInvalidFields = _this.markInvalidFields.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(FormBuilderModule, [{
    key: "markInvalidFields",
    value: function markInvalidFields(fields) {
      return this._refFormBuilder.current.markInvalidFields(fields);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        render: function render(methods) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_builder_form_builder__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
            ref: _this2._refFormBuilder
          }, _this2.props, methods));
        }
      }));
    }
  }]);
  return FormBuilderModule;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBuilderModule);
window.ibexa.addConfig('modules.FormBuilder', FormBuilderModule);

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
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/submission.details.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/resize.form.preview.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/ezform.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/form.builder.create.js"));
/******/ }
]);