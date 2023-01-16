(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-welcome-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/welcome.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/welcome.js ***!
  \********************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc, bootstrap) {
  var termsContentContainer = doc.querySelector('.ibexa-modal__content-terms');
  var termsListContainer = doc.querySelector('.ibexa-modal__table-of-contents-list');
  var openModalBtn = doc.querySelector('.ibexa-perso-welcome__show-modal-button');
  var acceptTermsBtn = doc.querySelector('.ibexa-modal__accept-terms-and-conditions-button');
  var tableOfContentsItems = _toConsumableArray(doc.querySelectorAll('.ibexa-modal__table-of-contents-list-link'));
  var paragraphsIds = tableOfContentsItems.map(function (item) {
    return item.dataset.scrollTo;
  });
  var handleContentScroll = function handleContentScroll() {
    var parentRect = termsContentContainer.getBoundingClientRect();
    var parentHeight = termsContentContainer.offsetHeight;
    var paragraphs = paragraphsIds.map(function (paragraphId) {
      return termsContentContainer.querySelector("#".concat(paragraphId));
    });
    var currentParagraph = paragraphs.reverse().find(function (paragraph) {
      var paragraphRect = paragraph.getBoundingClientRect();
      var relativeTop = paragraphRect.top - parentRect.top;
      var isAboveThreshold = relativeTop < parentHeight / 2;
      return isAboveThreshold;
    });
    var activeParagraph = currentParagraph !== null && currentParagraph !== void 0 ? currentParagraph : paragraphs[paragraphs.length - 1];
    var respectiveTableOfContentsLink = termsListContainer.querySelector("[data-scroll-to=\"".concat(activeParagraph.id, "\"]"));
    var respectiveTableOfContentsListItem = respectiveTableOfContentsLink.closest('.ibexa-modal__table-of-contents-list-item');
    var lastActiveTableOfContentsListItem = termsListContainer.querySelector('.ibexa-modal__table-of-contents-list-item--active');
    if (respectiveTableOfContentsListItem !== lastActiveTableOfContentsListItem) {
      lastActiveTableOfContentsListItem === null || lastActiveTableOfContentsListItem === void 0 ? void 0 : lastActiveTableOfContentsListItem.classList.remove('ibexa-modal__table-of-contents-list-item--active');
      respectiveTableOfContentsListItem.classList.add('ibexa-modal__table-of-contents-list-item--active');
    }
  };
  var scrollTerms = function scrollTerms(event) {
    event.preventDefault();
    var listLink = event.currentTarget;
    var scrollTo = listLink.dataset.scrollTo;
    if (scrollTo) {
      termsContentContainer.querySelector("#".concat(scrollTo)).scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  if (openModalBtn) {
    openModalBtn.addEventListener('click', function (event) {
      event.preventDefault();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#terms-and-conditions-modal')).show();
    }, false);
  }
  if (acceptTermsBtn) {
    acceptTermsBtn.addEventListener('click', function () {
      doc.querySelector('.ibexa-perso-welcome__accept-terms-checkbox').checked = true;
    }, false);
  }
  tableOfContentsItems.forEach(function (listLink) {
    listLink.addEventListener('click', scrollTerms, false);
  });
  termsContentContainer.addEventListener('scroll', handleContentScroll, false);
})(window, window.document, window.bootstrap);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/welcome.js"));
/******/ }
]);