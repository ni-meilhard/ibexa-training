(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-preview-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/admin.version.edit.conflict.js":
/*!*******************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/admin.version.edit.conflict.js ***!
  \*******************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var editVersion = function editVersion(event) {
    var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
    var _event$currentTarget$ = event.currentTarget.dataset,
      contentDraftEditUrl = _event$currentTarget$.contentDraftEditUrl,
      versionHasConflictUrl = _event$currentTarget$.versionHasConflictUrl,
      contentId = _event$currentTarget$.contentId,
      languageCode = _event$currentTarget$.languageCode;
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans( /*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'content');
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(versionHasConflictUrl, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    var handleVersionDraftConflict = function handleVersionDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        doc.querySelector('#edit-conflicted-draft').href = contentDraftEditUrl;
        bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-conflict-modal')).show();
      }
      if (response.status === 403) {
        response.text().then(showErrorNotification);
      }
      if (response.status === 200) {
        global.location.href = contentDraftEditUrl;
      }
    };
    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleVersionDraftConflict)["catch"](showErrorNotification);
  };
  doc.querySelectorAll('.ibexa-btn--content-draft-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./public/bundles/ibexaadminui/js/scripts/sidebar/instant.filter.js":
/*!**************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/sidebar/instant.filter.js ***!
  \**************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc) {
  var filterTimeout;
  var SELECTOR_ITEM = '.ibexa-instant-filter__group-item';
  var timeout = 200;
  var filters = doc.querySelectorAll('.ibexa-instant-filter');
  var toggleGroupDisplay = function toggleGroupDisplay(group) {
    var areChildrenHidden = _toConsumableArray(group.querySelectorAll(SELECTOR_ITEM)).every(function (item) {
      return item.hasAttribute('hidden');
    });
    group.toggleAttribute('hidden', areChildrenHidden);
  };
  var filterItems = function filterItems(itemsMap, groups, event) {
    window.clearTimeout(filterTimeout);
    filterTimeout = window.setTimeout(function () {
      var query = event.target.value.toLowerCase();
      var results = itemsMap.filter(function (item) {
        return item.label.includes(query);
      });
      itemsMap.forEach(function (item) {
        return item.element.setAttribute('hidden', true);
      });
      results.forEach(function (item) {
        return item.element.removeAttribute('hidden');
      });
      groups.forEach(toggleGroupDisplay);
    }, timeout);
  };
  var initFilter = function initFilter(filter) {
    var filterInput = filter.querySelector('.ibexa-instant-filter__input');
    var groups = _toConsumableArray(filter.querySelectorAll('.ibexa-instant-filter__group'));
    var items = _toConsumableArray(filter.querySelectorAll(SELECTOR_ITEM));
    var itemsMap = items.reduce(function (total, item) {
      return [].concat(_toConsumableArray(total), [{
        label: item.textContent.toLowerCase(),
        element: item
      }]);
    }, []);
    filterInput.addEventListener('change', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('blur', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keyup', filterItems.bind(filter, itemsMap, groups), false);
  };
  filters.forEach(initFilter);
})(window, window.document);

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

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var iframe = doc.querySelector('#page-builder-preview');
  var POST_MESSAGE_ID = 'ibexa-cross-origin-event';
  var POST_MESSAGE_TIMEOUT = 100;
  var updateLocationUrlTimeoutId = null;
  /**
   * Updates location URL
   *
   * @function updateLocationUrl
   */
  var updateLocationUrl = function updateLocationUrl() {
    doc.body.classList.add('ibexa-pb-app--is-preview-loading');
    iframe.removeEventListener('load', reloadPageBuilder);
    global.setTimeout(setPageBuilderUrl, 0);
  };
  /**
   * Updates location URL on form submission
   *
   * @function updateLocationUrlOnSubmit
   * @param {Event} event
   * @param {Window} target
   */
  var updateLocationUrlOnSubmit = function updateLocationUrlOnSubmit(_ref) {
    var target = _ref.target;
    target.removeEventListener('load', updateLocationUrlOnSubmit);
    updateLocationUrl();
  };
  /**
   * Handles in-iframe-form submissions events.
   *
   * @function handleInIframeFormSubmit
   * @param {Window} iframeWindow
   */
  var handleInIframeFormSubmit = function handleInIframeFormSubmit(iframeWindow) {
    iframeWindow.removeEventListener('unload', updateLocationUrl);
    iframeWindow.addEventListener('load', updateLocationUrlOnSubmit, false);
  };
  /**
   * Sets a new app URL in the browser address bar
   *
   * @function setPageBuilderUrl
   */
  var setPageBuilderUrl = function setPageBuilderUrl() {
    try {
      var url = iframe.contentWindow.location.href;
      if (url.includes('page_preview[reference_timestamp]')) {
        iframe.addEventListener('load', reloadPageBuilder, false);
        doc.body.classList.remove('ibexa-pb-app--is-preview-loading');
      } else {
        global.location = global.Routing.generate('ezplatform.page_builder.url_preview', {
          url: url
        }, true);
      }
    } catch (error) {
      var errorScreen = doc.querySelector('.ibexa-pb-app__error-screen');
      doc.body.classList.remove('ibexa-pb-app--is-preview-loading');
      doc.body.classList.add('ibexa-pb-app--has-error');
      errorScreen.classList.remove('ibexa-pb-app__error-screen--hidden');
      errorScreen.querySelector('.ibexa-error-screen__link').setAttribute('href', global.location.href);
    }
  };
  /**
   * Fires the post message
   *
   * @function firePostMessage
   */
  var firePostMessage = function firePostMessage() {
    doc.body.classList.add('ibexa-pb-app--is-preview-loading');
    iframe.contentWindow.postMessage({
      id: POST_MESSAGE_ID
    }, ibexa.pageBuilder.config.host);
    updateLocationUrlTimeoutId = global.setTimeout(updateLocationUrl, POST_MESSAGE_TIMEOUT);
  };
  /**
   * Handles the post message
   *
   * @function handlePostMessage
   * @param {Event} event
   */
  var handlePostMessage = function handlePostMessage(event) {
    if (event.data.id !== POST_MESSAGE_ID) {
      return;
    }
    if (updateLocationUrlTimeoutId) {
      global.clearTimeout(updateLocationUrlTimeoutId);
      updateLocationUrlTimeoutId = null;
    }
    var url = event.data.href;
    var generatedUrl = global.Routing.generate('ezplatform.page_builder.url_preview', {
      url: url
    }, true);
    if (url !== iframe.src) {
      global.location = generatedUrl;
      return;
    }
    doc.body.classList.remove('ibexa-pb-app--is-preview-loading');
  };
  /**
   * Updates Page Builder UI
   *
   * @function reloadPageBuilder
   * @param {Event} event
   */
  var reloadPageBuilder = function reloadPageBuilder(event) {
    var newIframe = event.target;
    var iframeWindow = newIframe.contentWindow;
    doc.body.classList.remove('ibexa-pb-app--is-preview-loading');
    newIframe.contentDocument.addEventListener('submit', handleInIframeFormSubmit.bind(null, iframeWindow), false);
    iframeWindow.addEventListener('unload', updateLocationUrl, false);
  };
  if (ibexa.pageBuilder.config.isMultihostSetup) {
    iframe.addEventListener('load', firePostMessage, false);
    global.addEventListener('message', handlePostMessage, false);
  } else {
    iframe.addEventListener('load', reloadPageBuilder, false);
  }
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.view.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.view.js ***!
  \***************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  new ibexa.modules.InfoBar();
  var removeLoadingSpinner = function removeLoadingSpinner() {
    return doc.body.classList.remove('ibexa-pb-app--is-preview-loading');
  };
  var iframe = doc.querySelector('.ibexa-pb-app__preview');
  iframe.src = iframe.dataset.src;
  if (ibexa.pageBuilder.config.isMultihostSetup) {
    iframe.addEventListener('load', removeLoadingSpinner, false);
  } else {
    iframe.contentWindow.addEventListener('DOMContentLoaded', removeLoadingSpinner, false);
  }
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/timeline.view.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/timeline.view.js ***!
  \***********************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, React, ReactDOM) {
  var timelineContainer = doc.querySelector('.ibexa-pb-timeline-wrapper');
  var timelineRoot = ReactDOM.createRoot(timelineContainer);
  var onTimelineEventSelect = function onTimelineEventSelect(oldTimestamp, newTimestamp, events) {
    var event = new CustomEvent('ibexa-timestamp-changed', {
      detail: {
        oldTimestamp: oldTimestamp,
        newTimestamp: newTimestamp,
        events: events
      }
    });
    doc.body.dispatchEvent(event);
  };
  var refreshPreviewIframe = function refreshPreviewIframe(event) {
    var previewUrl = new URL(ibexa.pageBuilder.config.previewUrl);
    var referenceTimestamp = parseInt(event.detail.newTimestamp / 1000, 10);
    previewUrl.searchParams["delete"](ibexa.pageBuilder.config.tokenQueryParamName);
    previewUrl.searchParams.append('page_preview[reference_timestamp]', referenceTimestamp);
    doc.querySelector('#page-builder-preview').src = decodeURIComponent(previewUrl.toString());
  };
  timelineRoot.render(React.createElement(ibexa.modules.Timeline, {
    onTimelineEventSelect: onTimelineEventSelect,
    events: ibexa.pageBuilder.timeline.events,
    selectedTimestamp: window.ibexa.pageBuilder.config.referenceTimestamp * 1000
  }));
  doc.body.addEventListener('ibexa-timestamp-changed', refreshPreviewIframe, false);
})(window, window.document, window.ibexa, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/versions.js":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/versions.js ***!
  \******************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var CLASS_EDIT_DRAFT_CREATION_BTN = 'ibexa-btn--edit-with-draft-creation';
  var CLASS_DRAFT_EDIT_BTN = 'ibexa-btn--content-draft-edit';
  var modal = doc.querySelector('.ibexa-modal--versions');
  var tableWrapper = modal.querySelector('.ibexa-modal__table-wrapper');
  var editVersion = function editVersion(event) {
    var editWithDraftCreationBtn = event.target.closest(".".concat(CLASS_EDIT_DRAFT_CREATION_BTN));
    var isEditWithDraftCreationBtn = event.target.classList.contains(CLASS_EDIT_DRAFT_CREATION_BTN) || !!editWithDraftCreationBtn;
    var isDraftEditBtn = event.target.classList.contains(CLASS_DRAFT_EDIT_BTN) || event.target.closest(".".concat(CLASS_DRAFT_EDIT_BTN));
    if (isDraftEditBtn) {
      bootstrap.Modal.getOrCreateInstance(modal).hide();
      return;
    }
    if (!isEditWithDraftCreationBtn) {
      return;
    }
    event.preventDefault();
    var _editWithDraftCreatio = editWithDraftCreationBtn.dataset,
      contentId = _editWithDraftCreatio.contentId,
      versionNo = _editWithDraftCreatio.versionNo,
      languageCode = _editWithDraftCreatio.languageCode;
    var versionEditForm = doc.querySelector('form[name="version_edit"]');
    var contentInfoInput = versionEditForm.querySelector('input[name="version_edit[content_info]"]');
    var versionInfoContentInfoInput = versionEditForm.querySelector('input[name="version_edit[version_info][content_info]"]');
    var versionInfoVersionNoInput = versionEditForm.querySelector('input[name="version_edit[version_info][version_no]"]');
    var languageInput = versionEditForm.querySelector("#version_edit_language_".concat(languageCode));
    contentInfoInput.value = contentId;
    versionInfoContentInfoInput.value = contentId;
    versionInfoVersionNoInput.value = versionNo;
    languageInput.setAttribute('checked', true);
    versionEditForm.submit();
  };
  tableWrapper.addEventListener('click', editVersion, false);
})(window, window.document, window.bootstrap);

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

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/last.visited.sites.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/last.visited.sites.js ***!
  \****************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (doc, ibexa) {
  var KEY_SITE_FACTORY_LAST_VISITED = 'ibexa-site-factory-last-visited';
  var menuItems = _toConsumableArray(doc.querySelectorAll('#ezplatform_page_manager .navbar-nav .ibexa-navbar__item'));
  var siteData = {
    siteaccess: ibexa.pageBuilder.data.siteaccess,
    locationId: ibexa.pageBuilder.data.locationId
  };
  var userId = ibexa.helpers.user.getId();
  var saveLastVisited = function saveLastVisited() {
    var lastVisitedStringified = localStorage.getItem(KEY_SITE_FACTORY_LAST_VISITED);
    var lastVisited = lastVisitedStringified ? JSON.parse(lastVisitedStringified) : {};
    var isSiteFactoryEntry = menuItems.some(function (menuItem) {
      return parseInt(menuItem.dataset.ibexaSiteLocationId, 10) === siteData.locationId;
    });
    var lastVisitedIndex = -1;
    if (!lastVisited[userId]) {
      lastVisited[userId] = [];
    }
    if (isSiteFactoryEntry) {
      lastVisitedIndex = lastVisited[userId].findIndex(function (_ref) {
        var locationId = _ref.locationId;
        return locationId === siteData.locationId;
      });
    } else {
      lastVisitedIndex = lastVisited[userId].findIndex(function (_ref2) {
        var siteaccess = _ref2.siteaccess;
        return siteaccess === siteData.siteaccess;
      });
    }
    if (lastVisitedIndex > -1) {
      lastVisited[userId].splice(lastVisitedIndex, 1);
    }
    lastVisited[userId].unshift(siteData);
    lastVisited[userId].splice(5);
    localStorage.setItem(KEY_SITE_FACTORY_LAST_VISITED, JSON.stringify(lastVisited));
  };
  saveLastVisited();
  doc.body.dispatchEvent(new CustomEvent('ibexa-site-factory-refresh-menu'));
})(window.document, window.ibexa);

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
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline.module.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/versions.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.view.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/timeline.view.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/sidebar/instant.filter.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/admin.version.edit.conflict.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/last.visited.sites.js"));
/******/ }
]);