(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-preview-non-location-based-js"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.view.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js"));
/******/ }
]);