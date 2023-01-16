(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-edit-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/edit.form.validator.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/edit.form.validator.js ***!
  \********************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc, Translator) {
  var submitBtn = doc.querySelector('.ibexa-pc-edit__submit-btn');
  var editForm = doc.querySelector('.ibexa-pc-edit__form');
  var fieldsToValidate = editForm.querySelectorAll('.ibexa-pc-edit__form-field-required');
  var validateField = function validateField(field) {
    var errorText = '';
    var input = field.querySelector('.ibexa-input');
    var label = field.querySelector('.ibexa-label');
    var errorWrapper = field.querySelector('.ibexa-form-error');
    if (label) {
      var fieldName = label.innerText;
      errorText = Translator.trans( /*@Desc("%fieldName% Field is required")*/'error.required.field', {
        fieldName: fieldName
      }, 'forms');
    } else {
      errorText = Translator.trans( /*@Desc("This value should not be blank")*/'error.required.field_not_blank', {}, 'forms');
    }
    errorWrapper.innerText = input.value ? '' : errorText;
    input.classList.toggle('is-invalid', !input.value);
    return !!input.value;
  };
  var validateForm = function validateForm(event) {
    event.preventDefault();
    var isFormValid = _toConsumableArray(fieldsToValidate).map(validateField).every(function (isValid) {
      return isValid;
    });
    if (isFormValid) {
      editForm.submit();
    }
  };
  var attachTriggerToValidateFields = function attachTriggerToValidateFields(fieldList) {
    fieldList.forEach(function (field) {
      var input = field.querySelector('.ibexa-input');
      if (input) {
        input.addEventListener('blur', function () {
          return validateField(field);
        }, false);
      }
    });
  };
  attachTriggerToValidateFields(fieldsToValidate);
  submitBtn.addEventListener('click', validateForm, false);
  doc.body.addEventListener('ibexa-pc-edit-form-added-field', function (event) {
    var inputsContainer = event.detail.inputsContainer;
    var addedRequiredFields = inputsContainer.querySelectorAll('.ibexa-pc-edit__form-field-required');
    fieldsToValidate = editForm.querySelectorAll('.ibexa-pc-edit__form-field-required');
    attachTriggerToValidateFields(addedRequiredFields);
  });
})(window, window.document, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/edit.form.validator.js"));
/******/ }
]);