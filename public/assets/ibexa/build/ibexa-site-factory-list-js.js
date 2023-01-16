(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-site-factory-list-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js":
/*!***********************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js ***!
  \***********************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ibexa-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ibexa-table__cell--has-checkbox .ibexa-input--checkbox'));
    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);
    if (!buttonRemove) {
      return;
    }
    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };
    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(function (global, doc, ibexa) {
  var popupMenusContainer = doc.querySelectorAll('.ibexa-grid-view-item__actions-container');
  var switchViewSelect = doc.querySelector('.ibexa-sf-list-view-switcher');
  var selectView = function selectView(_ref) {
    var currentTarget = _ref.currentTarget;
    var linkToChangeView = doc.querySelector(".ibexa-sf-list-change-view[data-view-value=\"".concat(currentTarget.value, "\"]"));
    linkToChangeView.click();
  };
  switchViewSelect.addEventListener('change', selectView, false);
  popupMenusContainer.forEach(function (container) {
    var triggerElement = container.querySelector('.ibexa-sf-list-grid-entry__tools-trigger');
    var popupMenuElement = container.querySelector('.ibexa-popup-menu');
    if (!triggerElement) {
      return;
    }
    new ibexa.core.PopupMenu({
      popupMenuElement: popupMenuElement,
      triggerElement: triggerElement,
      position: function position(menu) {
        var leftPositionCorrectedOffset = 14;
        var _menu$getBoundingClie = menu.getBoundingClientRect(),
          menuWidth = _menu$getBoundingClie.width,
          menuXPosition = _menu$getBoundingClie.x;
        var maxLeftPositionOfMenu = global.innerWidth - menuWidth;
        if (menuXPosition > maxLeftPositionOfMenu) {
          var correctedLeftPosition = menuWidth + leftPositionCorrectedOffset;
          menu.style.left = "-".concat(correctedLeftPosition, "px");
        }
      }
    });
  });
})(__webpack_require__.g, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.modal.delete.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.modal.delete.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var deleteButtons = doc.querySelectorAll('.ibexa-btn--delete:not(:disabled) > .ibexa-popup-menu__item-content');
  var siteIdInput = doc.querySelector('#site_delete_site');
  var changeDeleteId = function changeDeleteId(event) {
    var siteId = event.currentTarget.dataset.siteId;
    siteIdInput.value = siteId;
  };
  deleteButtons.forEach(function (btn) {
    return btn.addEventListener('click', changeDeleteId);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.modal.delete.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js"));
/******/ }
]);