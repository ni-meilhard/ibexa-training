(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-commerce-admin-ui-configuration-settings-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/admin.location.tab.js":
/*!**********************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/admin.location.tab.js ***!
  \**********************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var SELECTOR_TABS = '.ibexa-tabs';
  var SELECTOR_TAB = '.ibexa-tabs__tab';
  var SELECTOR_TAB_ACTIVE = '.ibexa-tabs__tab--active';
  var CLASS_TAB_ACTIVE = 'ibexa-tabs__tab--active';
  var switchActiveTabs = function switchActiveTabs(currentTab, previousTab) {
    if (previousTab) {
      previousTab.classList.remove(CLASS_TAB_ACTIVE);
    }
    currentTab.classList.add(CLASS_TAB_ACTIVE);
  };
  var changeHashForPageReload = function changeHashForPageReload(hash) {
    global.location.hash = "".concat(hash, "#tab");
  };
  var handleTabShown = function handleTabShown(event) {
    var target = event.target,
      relatedTarget = event.relatedTarget;
    var currentTab = target.closest(SELECTOR_TAB);
    var previousTab = relatedTarget.closest(SELECTOR_TAB);
    changeHashForPageReload(event.target.hash);
    switchActiveTabs(currentTab, previousTab);
  };
  var setActiveHashTab = function setActiveHashTab() {
    var activeHashTabLink = doc.querySelector(".ibexa-tabs a[href=\"#".concat(global.location.hash.split('#')[1], "\"]"));
    if (!activeHashTabLink) {
      return;
    }
    var activeHashTab = activeHashTabLink.closest(SELECTOR_TAB);
    var parentTabs = activeHashTab.closest(SELECTOR_TABS);
    var currentActiveTab = parentTabs.querySelector(SELECTOR_TAB_ACTIVE);
    bootstrap.Tab.getOrCreateInstance(activeHashTabLink).show();
    switchActiveTabs(activeHashTab, currentActiveTab);
  };
  setActiveHashTab();
  doc.querySelectorAll('.ibexa-tabs a').forEach(function (tab) {
    return tab.addEventListener('shown.bs.tab', handleTabShown);
  });
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/commerce-shop/src/bundle/Eshop/Resources/public/js/configuration.settings.configuration.fields.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ibexa/commerce-shop/src/bundle/Eshop/Resources/public/js/configuration.settings.configuration.fields.js ***!
  \************************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var DROPDOWN_SELECTOR = '.ibexa-dropdown';
  var addItemButtons = doc.querySelectorAll('.ibexa-configuration-field-array .ibexa-btn--add-input');
  var removeItemButtons = doc.querySelectorAll('.ibexa-configuration-field-array .ibexa-btn--trash');
  var removeInputItem = function removeInputItem(event) {
    event.currentTarget.closest('.ibexa-configuration-field-array__item').remove();
  };
  var addInputItem = function addInputItem(event) {
    var itemsWrapper = event.currentTarget.closest('.ibexa-configuration-field-array').querySelector('.ibexa-configuration-field-array__items');
    var widget = itemsWrapper.dataset.prototype;
    var htmlWidget = doc.createRange().createContextualFragment(widget);
    itemsWrapper.append(htmlWidget);
    itemsWrapper.querySelector('.ibexa-configuration-field-array__item:last-child .ibexa-btn--trash').addEventListener('click', removeInputItem, false);
    doc.querySelectorAll(DROPDOWN_SELECTOR).forEach(function (container) {
      var dropdown = new ibexa.core.Dropdown({
        container: container,
        itemsContainer: container.querySelector('.ibexa-dropdown__items'),
        sourceInput: container.querySelector('.ibexa-dropdown__source-input')
      });
      dropdown.init();
    });
  };
  addItemButtons.forEach(function (button) {
    return button.addEventListener('click', addInputItem, false);
  });
  removeItemButtons.forEach(function (button) {
    return button.addEventListener('click', removeInputItem, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/commerce-shop/src/bundle/Eshop/Resources/public/js/configuration.settings.group.toggle.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/commerce-shop/src/bundle/Eshop/Resources/public/js/configuration.settings.group.toggle.js ***!
  \****************************************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc) {
  var togglers = _toConsumableArray(doc.querySelectorAll('.ibexa-card__body-display-toggler'));
  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    var group = event.currentTarget.closest('.ibexa-card--commerce-configuration-group');
    if (group.classList.contains('ibexa-card--collapsed')) {
      var activePanel = group.closest('.tab-pane');
      var notCollapsedGroup = activePanel.querySelector('.ibexa-card--commerce-configuration-group:not(.ibexa-card--collapsed)');
      if (notCollapsedGroup) {
        notCollapsedGroup.classList.add('ibexa-card--collapsed');
      }
    }
    group.classList.toggle('ibexa-card--collapsed');
  };
  togglers.forEach(function (button) {
    return button.addEventListener('click', toggleFieldTypeView, false);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/admin.location.tab.js"), __webpack_exec__("./vendor/ibexa/commerce-shop/src/bundle/Eshop/Resources/public/js/configuration.settings.group.toggle.js"), __webpack_exec__("./vendor/ibexa/commerce-shop/src/bundle/Eshop/Resources/public/js/configuration.settings.configuration.fields.js"));
/******/ }
]);