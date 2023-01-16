(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-segmentation-common-js"],{

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

/***/ "./vendor/ibexa/segmentation/src/bundle/Resources/public/js/add.segment.group.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/Resources/public/js/add.segment.group.js ***!
  \***************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc) {
  var addSegmentTable = doc.querySelector('.ibexa-table--add-segments');
  if (!addSegmentTable) {
    return;
  }
  var lastIndex = 0;
  var addButton = doc.querySelector('.ibexa-table-header--add-segments .ibexa-btn--add');
  var removeButton = doc.querySelector('.ibexa-table-header--add-segments .ibexa-btn--remove');
  var refreshTableMainCheckbox = function refreshTableMainCheckbox() {
    var refreshEvent = new CustomEvent('ibexa-refresh-main-table-checkbox');
    addSegmentTable.dispatchEvent(refreshEvent);
  };
  var addSegment = function addSegment() {
    var index = lastIndex++;
    var template = addSegmentTable.dataset.template;
    var tbodyFragment = doc.createElement('tbody');
    var renderedTemplate = template.replace(/__name__/g, index);
    tbodyFragment.insertAdjacentHTML('beforeend', renderedTemplate);
    var tr = tbodyFragment.querySelector('tr');
    tr.querySelector('.ibexa-input--checkbox').addEventListener('change', function () {
      var isCheckboxSelected = _toConsumableArray(addSegmentTable.querySelectorAll('.ibexa-input--checkbox')).some(function (checkbox) {
        return checkbox.checked;
      });
      var methodName = isCheckboxSelected ? 'removeAttribute' : 'setAttribute';
      removeButton[methodName]('disabled', 'disabled');
    }, false);
    addSegmentTable.querySelector('tbody').appendChild(tr);
    refreshTableMainCheckbox();
  };
  var removeSegments = function removeSegments() {
    var selectedSegments = addSegmentTable.querySelectorAll('.ibexa-table__body .ibexa-input--checkbox:checked');
    selectedSegments.forEach(function (selectedSegment) {
      return selectedSegment.closest('tr').remove();
    });
    refreshTableMainCheckbox();
    removeButton.setAttribute('disabled', 'disabled');
  };
  addButton.addEventListener('click', addSegment, false);
  removeButton.addEventListener('click', removeSegments, false);
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/segmentation/src/bundle/Resources/public/js/add.segment.group.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js"));
/******/ }
]);