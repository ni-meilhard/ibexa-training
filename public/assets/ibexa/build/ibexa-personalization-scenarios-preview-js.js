"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-scenarios-preview-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/category.path.select.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/category.path.select.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPathSelect": () => (/* binding */ CategoryPathSelect)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var CategoryPathSelect = /*#__PURE__*/function () {
  function CategoryPathSelect() {
    var _options$onAdd, _options$onRemove;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, CategoryPathSelect);
    if (!options.container) {
      console.error('Missing some CategoryPathSelect options.');
      return;
    }
    this.onAdd = (_options$onAdd = options.onAdd) !== null && _options$onAdd !== void 0 ? _options$onAdd : function () {};
    this.onRemove = (_options$onRemove = options.onRemove) !== null && _options$onRemove !== void 0 ? _options$onRemove : function () {};
    this.container = options.container;
    this.isSingleSelect = this.container.classList.contains('ibexa-perso-category-path-select--single-select');
    this.udwBtn = this.container.querySelector('.ibexa-perso-category-path-select__add-path-udw-btn');
    this.customPathInput = this.container.querySelector('.ibexa-perso-category-path-select__custom-path-input');
    this.customPathAddBtn = this.container.querySelector('.ibexa-perso-category-path-select__add-custom-path-btn');
    this.tagsContainer = this.container.querySelector('.ibexa-perso-scenario-preview__tags');
    this.udwRoot = null;
    this.udwConfig = JSON.parse(this.udwBtn.dataset.udwConfig);
    this.udwTitle = this.udwBtn.dataset.udwTitle;
    this.tagTemplate = this.container.dataset.tagTemplate;
    this.handleUdwConfirm = this.handleUdwConfirm.bind(this);
    this.handleUdwCancel = this.handleUdwCancel.bind(this);
  }
  _createClass(CategoryPathSelect, [{
    key: "init",
    value: function init() {
      var _this = this;
      var tags = this.tagsContainer.querySelectorAll('.ibexa-tag');
      tags.forEach(function (tag) {
        return _this.attachTagEvents(tag);
      });
      this.udwBtn.addEventListener('click', function () {
        return _this.openUDW();
      }, false);
      this.customPathAddBtn.addEventListener('click', function () {
        return _this.handleCustomPathAdd();
      }, false);
      this.customPathInput.addEventListener('input', function () {
        _this.customPathAddBtn.disabled = _this.customPathInput.value === '';
      }, false);
    }
  }, {
    key: "openUDW",
    value: function openUDW() {
      var udwContainer = document.getElementById('react-udw');
      this.udwRoot = window.ReactDOM.createRoot(udwContainer);
      this.udwRoot.render(window.React.createElement(window.ibexa.modules.UniversalDiscovery, _objectSpread({
        title: this.udwTitle,
        onConfirm: this.handleUdwConfirm,
        onCancel: this.handleUdwCancel
      }, this.udwConfig)));
    }
  }, {
    key: "closeUDW",
    value: function closeUDW() {
      this.udwRoot.unmount();
    }
  }, {
    key: "handleUdwCancel",
    value: function handleUdwCancel() {
      this.closeUDW();
    }
  }, {
    key: "handleUdwConfirm",
    value: function handleUdwConfirm(selectedLocation) {
      var _this2 = this;
      var _window$ibexa$helpers = window.ibexa.helpers.location,
        removeRootFromPathString = _window$ibexa$helpers.removeRootFromPathString,
        findLocationsByIds = _window$ibexa$helpers.findLocationsByIds,
        buildLocationsBreadcrumbs = _window$ibexa$helpers.buildLocationsBreadcrumbs;
      var _selectedLocation = _slicedToArray(selectedLocation, 1),
        pathString = _selectedLocation[0].pathString;
      this.closeUDW();
      findLocationsByIds(removeRootFromPathString(pathString), function (locations) {
        return _this2.addTag(buildLocationsBreadcrumbs(locations), pathString);
      });
    }
  }, {
    key: "handleCustomPathAdd",
    value: function handleCustomPathAdd() {
      var value = this.customPathInput.value;
      this.addTag(value, value);
      this.customPathInput.value = '';
      this.customPathAddBtn.disabled = true;
    }
  }, {
    key: "addTag",
    value: function addTag(label, value) {
      if (this.isSingleSelect) {
        var existingTag = this.tagsContainer.querySelector('.ibexa-tag');
        if (existingTag) {
          this.removeTag(existingTag);
        }
      }
      var renderedTemplate = this.tagTemplate.replaceAll('{{ label }}', label);
      this.tagsContainer.insertAdjacentHTML('beforeend', renderedTemplate);
      var insertedTag = this.tagsContainer.querySelector('.ibexa-tag:last-of-type');
      insertedTag.dataset.value = value;
      this.attachTagEvents(insertedTag);
      this.onAdd(value);
      window.ibexa.helpers.ellipsis.middle.parseAll();
    }
  }, {
    key: "attachTagEvents",
    value: function attachTagEvents(tag) {
      var _this3 = this;
      var tagRemoveBtn = tag.querySelector('.ibexa-tag__remove-btn');
      tagRemoveBtn.addEventListener('click', function () {
        return _this3.removeTag(tag);
      }, false);
    }
  }, {
    key: "removeTag",
    value: function removeTag(tag) {
      var tagValue = tag.dataset.value;
      tag.remove();
      this.onRemove(tagValue);
    }
  }, {
    key: "toggleDisabled",
    value: function toggleDisabled(isDisabled) {
      this.container.classList.toggle('ibexa-perso-category-path-select--disabled', isDisabled);
      this.udwBtn.disabled = isDisabled;
      this.customPathInput.disabled = isDisabled;
      this.customPathAddBtn.disabled = isDisabled || this.customPathInput.value === '';
      var tag = this.tagsContainer.querySelector('.ibexa-tag');
      if (tag) {
        var tagRemoveBtn = tag.querySelector('.ibexa-tag__remove-btn');
        tagRemoveBtn.disabled = isDisabled;
      }
    }
  }]);
  return CategoryPathSelect;
}();

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInput": () => (/* binding */ SearchInput)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var SearchInput = /*#__PURE__*/function () {
  function SearchInput() {
    var _options$onItemAdd;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SearchInput);
    if (!options.customerId || !options.container) {
      console.error('Missing SearchInput options.');
      return;
    }
    this.customerId = options.customerId;
    this.onItemAdd = (_options$onItemAdd = options.onItemAdd) !== null && _options$onItemAdd !== void 0 ? _options$onItemAdd : function () {};
    this.container = options.container;
    this.input = this.container.querySelector('.ibexa-perso-search-input__input');
    this.popup = this.container.querySelector('.ibexa-perso-search-input__popup');
    this.addBtn = this.container.querySelector('.ibexa-btn--add-search-item');
    this.selectedItem = null;
    this.popupItemTemplate = this.container.dataset.popupItemTemplate;
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.updateHints = this.updateHints.bind(this);
    this.handleSelectPopupItem = this.handleSelectPopupItem.bind(this);
  }
  _createClass(SearchInput, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.popperInstance = window.Popper.createPopper(this.input, this.popup, {
        placement: 'bottom',
        container: 'body'
      });
      this.input.addEventListener('focusin', this.showPopup, false);
      this.input.addEventListener('input', function () {
        _this.selectItem(null);
        _this.updateHints();
      }, false);
      this.isMouseInsidePopup = false;
      this.popup.addEventListener('mouseover', function () {
        return _this.isMouseInsidePopup = true;
      }, false);
      this.popup.addEventListener('mouseout', function () {
        return _this.isMouseInsidePopup = false;
      }, false);
      document.addEventListener('click', function (event) {
        var closestSearchPopup = event.target.closest('.ibexa-perso-search-input__popup');
        var isMouseInsidePopup = closestSearchPopup === _this.popup;
        var closestSearchInput = event.target.closest('.ibexa-perso-search-input__input');
        var searchInputHasFocus = closestSearchInput === _this.input && closestSearchInput === document.activeElement;
        if (isMouseInsidePopup || searchInputHasFocus) {
          return;
        }
        _this.hidePopup();
      }, false);
      this.addBtn.addEventListener('click', function () {
        _this.onItemAdd(_this.selectedItem);
      }, false);
    }
  }, {
    key: "getHints",
    value: function getHints(inputValue) {
      var searchUrl = window.Routing.generate('ibexa.personalization.search.attributes', {
        customerId: this.customerId,
        phrase: inputValue
      });
      var abortController = new AbortController();
      return {
        abortController: abortController,
        data: fetch(searchUrl, {
          method: 'GET',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json'
          },
          mode: 'same-origin',
          credentials: 'same-origin',
          signal: abortController.signal
        }).then(window.ibexa.helpers.request.getJsonFromResponse).then(function (_ref) {
          var searchHits = _ref.searchHits;
          return searchHits;
        })
      };
    }
  }, {
    key: "updateHints",
    value: function updateHints() {
      var _this2 = this;
      if (this.cancelLastHintsRequest) {
        this.cancelLastHintsRequest();
        this.cancelLastHintsRequest = null;
      }
      var inputValue = this.input.value;
      var isInputValueSameAsSelectedItem = this.selectedItem && inputValue === this.selectedItem.value;
      if (!inputValue || isInputValueSameAsSelectedItem) {
        return;
      }
      var _this$getHints = this.getHints(inputValue),
        abortController = _this$getHints.abortController,
        data = _this$getHints.data;
      this.cancelLastHintsRequest = function () {
        abortController.abort();
      };
      data.then(function (hints) {
        var fragment = document.createDocumentFragment();
        hints.forEach(function (_ref2) {
          var id = _ref2.id,
            value = _ref2.value,
            typeId = _ref2.typeId;
          var container = document.createElement('ul');
          var renderedItem = _this2.popupItemTemplate.replace('{{ value }}', value).replace('{{ type_id }}', typeId).replace('{{ id }}', id);
          container.insertAdjacentHTML('beforeend', renderedItem);
          var listItemNode = container.querySelector('.ibexa-perso-search-input__popup-item');
          listItemNode.addEventListener('click', _this2.handleSelectPopupItem, false);
          fragment.append(listItemNode);
        });
        _this2.popup.innerHTML = '';
        _this2.popup.append(fragment);
      })["catch"](function (error) {
        var isAbortError = error.name === 'AbortError';
        if (isAbortError) {
          return;
        }
        window.ibexa.helpers.notification.showErrorNotification(error);
      });
    }
  }, {
    key: "updateAddBtn",
    value: function updateAddBtn() {
      var isAnythingSelected = !!this.selectedItem;
      this.addBtn.disabled = !isAnythingSelected;
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      this.popup.setAttribute('data-show', '');
      this.popperInstance.update();
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      if (this.isMouseInsidePopup) {
        return;
      }
      this.popup.removeAttribute('data-show');
      this.popperInstance.update();
    }
  }, {
    key: "handleSelectPopupItem",
    value: function handleSelectPopupItem(event) {
      var popupItem = event.currentTarget;
      var value = popupItem.innerText;
      var _popupItem$dataset = popupItem.dataset,
        id = _popupItem$dataset.itemId,
        typeId = _popupItem$dataset.itemTypeId;
      this.selectItem({
        value: value,
        id: id,
        typeId: typeId
      });
      this.input.value = value;
      this.input.focus();
      this.updateHints();
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.selectedItem = item;
      this.updateAddBtn();
    }
  }]);
  return SearchInput;
}();

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/json.prettier.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/json.prettier.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonPrettier": () => (/* binding */ JsonPrettier)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var CLASS_JSON_KEY = 'ibexa-json ibexa-json__key';
var CLASS_JSON_VALUE = 'ibexa-json ibexa-json__value';
var CLASS_JSON_STRING = 'ibexa-json ibexa-json__string';
var REGEXP_JSON_LINE = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/gm;
var JsonPrettier = /*#__PURE__*/function () {
  function JsonPrettier() {
    _classCallCheck(this, JsonPrettier);
  }
  _createClass(JsonPrettier, [{
    key: "construct",
    value: function construct() {
      this.jsonString = '{}';
    }
  }, {
    key: "jsonContent",
    set: function set(json) {
      if (typeof json !== 'string') {
        json = JSON.stringify(json, null, 3);
      }
      this.jsonString = json;
    }
  }, {
    key: "replaceCallback",
    value: function replaceCallback(match, indent, key, value, closing) {
      var jsonRow = indent || '';
      var jsonRowClosing = closing || '';
      if (key) {
        var jsonKey = key.replace(/[": ]/g, '');
        var jsonKeyRow = "<span class=\"".concat(CLASS_JSON_KEY, "\">").concat(jsonKey, "</span>: ");
        jsonRow += jsonKeyRow;
      }
      if (value) {
        var jsonValueClass = value[0] === '"' ? CLASS_JSON_STRING : CLASS_JSON_VALUE;
        var jsonValueRow = "<span class=\"".concat(jsonValueClass, "\">").concat(value, "</span>");
        jsonRow += jsonValueRow;
      }
      return jsonRow + jsonRowClosing;
    }
  }, {
    key: "getFormattedJson",
    value: function getFormattedJson() {
      return this.jsonString.replace(/&/g, '&amp;').replace(/\\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(REGEXP_JSON_LINE, this.replaceCallback);
    }
  }]);
  return JsonPrettier;
}();

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.preview.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.preview.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_category_path_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/category.path.select */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/category.path.select.js");
/* harmony import */ var _json_prettier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json.prettier */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/json.prettier.js");
/* harmony import */ var _core_search_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/search.input */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js");
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



(function (global, doc, ibexa, Routing, Translator) {
  var COPY_TOOLTIP_TIMEOUT = 3000;
  var SELECTOR_CONTENT_FIELD = '.form-group';
  var SELECTOR_TAGS_CONTAINER = '.ibexa-perso-scenario-preview__tags';
  var SELECTOR_TAG = '.ibexa-perso-scenario-preview__tag';
  var SELECTOR_ADD_TAG_INPUT = '.ibexa-perso-scenario-preview__input--add-tag';
  var SELECTOR_ADD_TAG_BUTTON = '.ibexa-perso-scenario-preview__add-tag-btn';
  var SELECTOR_TAG_INPUT = '.ibexa-perso-scenario-preview__tag-input';
  var SELECTOR_REMOVE_TAG_BUTTON = '.ibexa-tag__remove-btn';
  var prettier = new _json_prettier__WEBPACK_IMPORTED_MODULE_1__.JsonPrettier();
  var getJsonFromResponse = ibexa.helpers.request.getJsonFromResponse;
  var preview = doc.querySelector('.ibexa-perso-scenario-preview');
  var jsonResponseToggleBtn = doc.querySelector('.ibexa-perso-scenario-preview-response-code__toggler');
  var jsonResponsePreviewCard = doc.querySelector('.ibexa-perso-scenario-preview-response-code__card');
  var jsonResponsePreviewCode = doc.querySelector('.ibexa-perso-scenario-preview-response-code__code');
  var jsonResponsePreviewCodeCopyBtn = doc.querySelector('.ibexa-perso-scenario-preview-response-code__copy-btn');
  var generatedUrlNode = doc.querySelector('.ibexa-perso-scenario-preview__generated-url');
  var sendRequestButton = doc.querySelector('.ibexa-perso-scenario-preview__submit-btn');
  var outputTypeSelect = doc.querySelector('select[name="recommendation_call[output_type]"]');
  var categoryPathSelectContainer = doc.querySelector('.ibexa-perso-category-path-select');
  var categoryPathInput = doc.querySelector('.ibexa-input--category-path');
  var contextItemsSearchInput = doc.querySelector('.ibexa-perso-scenario-preview__context-items-input');
  var gallery = doc.querySelector('.ibexa-perso-scenario-preview__gallery');
  var noRecommendations = doc.querySelector('.ibexa-perso-scenario-preview__no-recommendations');
  var _preview$dataset = preview.dataset,
    scenarioName = _preview$dataset.scenarioName,
    customerId = _preview$dataset.customerId;
  var fetchData = function fetchData() {
    var form = doc.querySelector('.ibexa-perso-scenario-preview__form');
    var isFormValid = form.reportValidity();
    if (isFormValid) {
      var formData = new FormData(form);
      var request = new Request(Routing.generate('ibexa.personalization.recommendation.preview', {
        customerId: customerId,
        name: scenarioName
      }), {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json'
        },
        body: formData
      });
      fetch(request).then(getJsonFromResponse).then(updateResponseContent)["catch"](ibexa.helpers.notification.showErrorNotification);
    }
  };
  var fetchAttributes = function fetchAttributes(event) {
    var _event$target$selecte = _slicedToArray(event.target.selectedOptions, 1),
      option = _event$target$selecte[0];
    var outputTypeId = option.dataset.outputTypeId;
    var requestInput;
    if (outputTypeId) {
      requestInput = Routing.generate('ibexa.personalization.output_type.attributes.item_type_id', {
        customerId: customerId,
        itemTypeId: outputTypeId
      });
    } else {
      requestInput = Routing.generate('ibexa.personalization.output_type.attributes.scenario', {
        customerId: customerId,
        scenarioName: scenarioName
      });
    }
    var request = new Request(requestInput, {
      method: 'GET'
    });
    fetch(request).then(getJsonFromResponse).then(setAttributes)["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var setAttributes = function setAttributes(data) {
    var container = doc.querySelector('.ibexa-perso-scenario-preview__attributes');
    var tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
    tagsContainer.innerHTML = '';
    if (data instanceof Array) {
      data.forEach(function (name) {
        addTag({
          label: name,
          value: name,
          container: container
        });
      });
    }
  };
  var updateResponseContent = function updateResponseContent(data) {
    updateGallery(data.previewRecommendationItemList);
    updateRequestUrl(data.requestUrl);
    updateJsonResponsePreview(data.response);
    updateResponseErrorMessage(data.errorMessage);
    toggleNoRecommendations(!data.previewRecommendationItemList);
    var contentContainer = doc.querySelector('.ibexa-edit-content');
    contentContainer.scrollTo({
      top: 0
    });
  };
  var updateRequestUrl = function updateRequestUrl(requestUrl) {
    generatedUrlNode.innerHTML = requestUrl;
  };
  var updateGallery = function updateGallery(items) {
    var galleryItemTemplate = gallery.dataset.itemTemplate;
    gallery.innerHTML = '';
    if (!items) {
      return;
    }
    items.forEach(function (_ref) {
      var title = _ref.title,
        description = _ref.description,
        image = _ref.image;
      var renderedGalleryItem = galleryItemTemplate.replace('{{ image }}', image !== null && image !== void 0 ? image : '').replace('{{ title }}', title !== null && title !== void 0 ? title : '').replace('{{ description }}', description !== null && description !== void 0 ? description : '');
      gallery.insertAdjacentHTML('beforeend', renderedGalleryItem);
    });
  };
  var updateResponseErrorMessage = function updateResponseErrorMessage(errorMessage) {
    var alert = doc.querySelector('.ibexa-perso-scenario-preview__response-error');
    var alertTitle = alert.querySelector('.ibexa-alert__title');
    alert.classList.toggle('ibexa-perso-scenario-preview__response-error--hidden', !errorMessage);
    alertTitle.textContent = errorMessage;
  };
  var updateJsonResponsePreview = function updateJsonResponsePreview() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    prettier.jsonContent = content;
    jsonResponsePreviewCode.innerHTML = prettier.getFormattedJson();
  };
  var toggleJsonResponse = function toggleJsonResponse() {
    var isJsonResponseHidden = jsonResponseToggleBtn.classList.contains('ibexa-perso-scenario-preview-response-code__toggler--rolled-up');
    jsonResponseToggleBtn.classList.toggle('ibexa-perso-scenario-preview-response-code__toggler--rolled-up', !isJsonResponseHidden);
    jsonResponsePreviewCard.classList.toggle('ibexa-perso-scenario-preview-response-code__card--hidden', !isJsonResponseHidden);
  };
  var toggleNoRecommendations = function toggleNoRecommendations(noRecommenations) {
    gallery.classList.toggle('ibexa-perso-scenario-preview__gallery--hidden', noRecommenations);
    noRecommendations.classList.toggle('ibexa-perso-scenario-preview__no-recommendations--hidden', !noRecommenations);
  };
  var showDefaultJsonResponse = function showDefaultJsonResponse() {
    var defaultJsonResponse = jsonResponsePreviewCode.dataset.defaultJsonResponse;
    updateJsonResponsePreview(defaultJsonResponse);
  };
  var removeTag = function removeTag(event) {
    var container = event.currentTarget.closest(SELECTOR_CONTENT_FIELD);
    var tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
    var tag = event.currentTarget.closest(SELECTOR_TAG);
    var inputId = tag.dataset.inputId;
    if (inputId) {
      var input = tagsContainer.querySelector("#".concat(inputId));
      var inputWrapper = input.closest('.ibexa-input-text-wrapper');
      inputWrapper.remove();
    }
    tag.remove();
  };
  var addTag = function addTag(_ref2) {
    var label = _ref2.label,
      value = _ref2.value,
      container = _ref2.container;
    var tagIndex = 0;
    var renderedTemplate;
    var _container$dataset = container.dataset,
      inputTemplate = _container$dataset.inputTemplate,
      tagTemplate = _container$dataset.tagTemplate;
    var tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
    var lastTagInputWrapper = tagsContainer.querySelector(':scope > :nth-last-child(1)');
    var lastTagInput = lastTagInputWrapper === null || lastTagInputWrapper === void 0 ? void 0 : lastTagInputWrapper.querySelector('.ibexa-input');
    if (tagTemplate) {
      renderedTemplate = tagTemplate.replace('{{ content }}', label);
    } else if (inputTemplate) {
      if (lastTagInput) {
        tagIndex = parseInt(lastTagInput.name.replace(/[^0-9]/g, ''), 10) + 1;
      }
      renderedTemplate = inputTemplate.replace('__name__', tagIndex).replace('__name__', label).replace('__name__', label).replaceAll('__name__', tagIndex);
    }
    tagsContainer.insertAdjacentHTML('beforeend', renderedTemplate);
    var tags = _toConsumableArray(tagsContainer.querySelectorAll(SELECTOR_TAG));
    var lastTagAfterInsert = tags[tags.length - 1];
    var tagsInputs = _toConsumableArray(tagsContainer.querySelectorAll(SELECTOR_TAG_INPUT));
    var lastTagInputAfterInsert = tagsInputs[tagsInputs.length - 1];
    lastTagAfterInsert.querySelector(SELECTOR_REMOVE_TAG_BUTTON).addEventListener('click', removeTag, false);
    if (lastTagInputAfterInsert) {
      lastTagAfterInsert.dataset.inputId = lastTagInputAfterInsert.id;
      lastTagInputAfterInsert.setAttribute('value', value);
    }
  };
  var addRecommendationCallAttribute = function addRecommendationCallAttribute(event) {
    var button = event.currentTarget;
    var container = button.closest(SELECTOR_CONTENT_FIELD);
    var input = container.querySelector(SELECTOR_ADD_TAG_INPUT);
    if (input.value) {
      addTag({
        label: input.value,
        value: input.value,
        container: container
      });
    } else {
      ibexa.helpers.notification.showErrorNotification(Translator.trans( /*@Desc("Fill attribute value")*/'scenarios.preview.add_attribute_error', {}, 'ibexa_personalization'));
    }
    input.value = '';
  };
  var onConfirmContextItems = function onConfirmContextItems(item) {
    var value = item.value,
      id = item.id;
    var container = contextItemsSearchInput.closest('.ibexa-perso-scenario-preview__context-items');
    var valueEscaped = ibexa.helpers.text.escapeHTML(value.replace(/\$/g, '$$$$'));
    var isAlreadySelectedItem = container.querySelector("".concat(SELECTOR_TAG_INPUT, "[value=\"").concat(id.replace(/["\\]/g, '\\$&'), "\"]"));
    if (isAlreadySelectedItem) {
      return;
    }
    addTag({
      label: valueEscaped,
      value: id,
      container: container
    });
  };
  var copyResponseCodeToClipboard = function copyResponseCodeToClipboard() {
    if (!global.navigator.clipboard) {
      ibexa.helpers.notification.showErrorNotification(Translator.trans( /*@Desc("Cannot copy the response due to browser limitations. Select and copy manually.")*/'scenarios.preview.copy_clipboard_error', {}, 'ibexa_personalization'));
      return;
    }
    var range = doc.createRange();
    range.selectNode(jsonResponsePreviewCode);
    global.getSelection().removeAllRanges();
    global.getSelection().addRange(range);
    var responseCode = global.getSelection().toString();
    global.getSelection().removeAllRanges();
    global.navigator.clipboard.writeText(responseCode);
    global.bootstrap.Tooltip.getOrCreateInstance(jsonResponsePreviewCodeCopyBtn).show();
    setTimeout(function () {
      return global.bootstrap.Tooltip.getOrCreateInstance(jsonResponsePreviewCodeCopyBtn).hide();
    }, COPY_TOOLTIP_TIMEOUT);
  };
  if (sendRequestButton) {
    sendRequestButton.addEventListener('click', fetchData, false);
  }
  if (outputTypeSelect) {
    outputTypeSelect.addEventListener('change', fetchAttributes, false);
  }
  var categoryPathSelect = new _core_category_path_select__WEBPACK_IMPORTED_MODULE_0__.CategoryPathSelect({
    container: categoryPathSelectContainer,
    onAdd: function onAdd(value) {
      categoryPathInput.value = value;
    },
    onRemove: function onRemove() {
      categoryPathInput.value = '';
    }
  });
  categoryPathSelect.init();
  if (contextItemsSearchInput) {
    var searchInput = new _core_search_input__WEBPACK_IMPORTED_MODULE_2__.SearchInput({
      container: contextItemsSearchInput,
      customerId: customerId,
      onItemAdd: onConfirmContextItems
    });
    searchInput.init();
  }
  doc.querySelectorAll(SELECTOR_ADD_TAG_BUTTON).forEach(function (button) {
    button.addEventListener('click', addRecommendationCallAttribute, false);
  });
  doc.querySelectorAll(SELECTOR_REMOVE_TAG_BUTTON).forEach(function (button) {
    button.addEventListener('click', removeTag, false);
  });
  jsonResponseToggleBtn.addEventListener('click', toggleJsonResponse, false);
  jsonResponsePreviewCodeCopyBtn.addEventListener('click', copyResponseCodeToClipboard, false);
  showDefaultJsonResponse();
})(window, window.document, window.ibexa, window.Routing, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.preview.js"));
/******/ }
]);