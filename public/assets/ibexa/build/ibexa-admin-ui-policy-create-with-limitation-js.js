(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-policy-create-with-limitation-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.limitation.pick.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.limitation.pick.js ***!
  \***********************************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var _this = this;
  var SELECTOR_LOCATION_LIMITATION_BTN = '.ibexa-pick-location-limitation-button';
  var SELECTOR_IBEXA_TAG = '.ibexa-tag';
  var IDS_SEPARATOR = ',';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var udwContainer = doc.getElementById('react-udw');
  var limitationBtns = doc.querySelectorAll(SELECTOR_LOCATION_LIMITATION_BTN);
  var udwRoot = null;
  var findLocationsByIdList = function findLocationsByIdList(pathArraysWithoutRoot, callback) {
    var bulkOperations = getBulkOperations(pathArraysWithoutRoot);
    var request = new Request('/api/ibexa/v2/bulk', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
        'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: JSON.stringify({
        bulkOperations: {
          operations: bulkOperations
        }
      }),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans( /*@Desc("Could not fetch content names")*/'limitation.pick.error', {}, 'universal_discovery_widget');
    fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(callback)["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var getBulkOperations = function getBulkOperations(pathArraysWithoutRoot) {
    return pathArraysWithoutRoot.reduce(function (operations, pathArray) {
      var locationId = pathArray[pathArray.length - 1];
      operations[locationId] = {
        uri: '/api/ibexa/v2/views',
        method: 'POST',
        headers: {
          Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
          'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
          'X-Requested-With': 'XMLHttpRequest'
        },
        content: JSON.stringify({
          ViewInput: {
            identifier: "udw-locations-by-path-string-".concat(pathArray.join('-')),
            "public": false,
            LocationQuery: {
              FacetBuilders: {},
              SortClauses: {
                SectionIdentifier: 'ascending'
              },
              Filter: {
                LocationIdCriterion: pathArray.join(IDS_SEPARATOR)
              },
              limit: 50,
              offset: 0
            }
          }
        })
      };
      return operations;
    }, {});
  };
  var removeRootLocation = function removeRootLocation(pathArray) {
    return pathArray.slice(1);
  };
  var pathStringToPathArray = function pathStringToPathArray(pathString) {
    return pathString.split('/').filter(function (el) {
      return el;
    });
  };
  var buildContentBreadcrumbs = function buildContentBreadcrumbs(viewData) {
    var searchHitList = viewData.View.Result.searchHits.searchHit;
    return searchHitList.map(function (searchHit) {
      return searchHit.value.Location.ContentInfo.Content.TranslatedName;
    }).join(' / ');
  };
  var addLocationsToInput = function addLocationsToInput(limitationBtn, selectedItems) {
    var input = doc.querySelector(limitationBtn.dataset.locationInputSelector);
    var selectedLocationsIds = selectedItems.map(function (item) {
      return item.id;
    }).join(IDS_SEPARATOR);
    input.value = selectedLocationsIds;
  };
  var removeLocationFromInput = function removeLocationFromInput(locationInputSelector, removedLocationId) {
    var input = doc.querySelector(locationInputSelector);
    var locationsIdsWithoutRemoved = input.value.split(IDS_SEPARATOR).filter(function (locationId) {
      return locationId !== removedLocationId;
    });
    input.value = locationsIdsWithoutRemoved.join(IDS_SEPARATOR);
  };
  var addLocationsTags = function addLocationsTags(limitationBtn, selectedItems) {
    var tagsList = doc.querySelector(limitationBtn.dataset.selectedLocationListSelector);
    var tagTemplate = limitationBtn.dataset.valueTemplate;
    var fragment = doc.createDocumentFragment();
    selectedItems.forEach(function (location) {
      var locationId = location.id;
      var container = doc.createElement('ul');
      container.insertAdjacentHTML('beforeend', tagTemplate);
      var tagTemplateUnescaped = container.innerHTML;
      var renderedItem = tagTemplateUnescaped.replace('{{ location_id }}', locationId);
      container.innerHTML = '';
      container.insertAdjacentHTML('beforeend', renderedItem);
      var listItemNode = container.querySelector('li');
      var tagNode = listItemNode.querySelector(SELECTOR_IBEXA_TAG);
      attachTagEventHandlers(limitationBtn, tagNode);
      fragment.append(listItemNode);
    });
    tagsList.innerHTML = '';
    tagsList.append(fragment);
    setTagsBreadcrumbs(tagsList, selectedItems);
  };
  var setTagsBreadcrumbs = function setTagsBreadcrumbs(tagsList, selectedItems) {
    var pathArraysWithoutRoot = selectedItems.map(getLocationPathArray);
    findLocationsByIdList(pathArraysWithoutRoot, function (response) {
      var operations = response.BulkOperationResponse.operations;
      Object.entries(operations).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          locationId = _ref2[0],
          content = _ref2[1].content;
        var viewData = JSON.parse(content);
        var tag = tagsList.querySelector("[data-location-id=\"".concat(locationId, "\"]"));
        var tagContent = tag.querySelector('.ibexa-tag__content');
        var tagSpinner = tag.querySelector('.ibexa-tag__spinner');
        tagContent.innerText = buildContentBreadcrumbs(viewData);
        tagSpinner.hidden = true;
        tagContent.hidden = false;
      });
    });
  };
  var getLocationPathArray = function getLocationPathArray(_ref3) {
    var pathString = _ref3.pathString;
    var pathArray = pathStringToPathArray(pathString);
    var pathArrayWithoutRoot = removeRootLocation(pathArray);
    return pathArrayWithoutRoot;
  };
  var handleTagRemove = function handleTagRemove(limitationBtn, tag) {
    var removedLocationId = tag.dataset.locationId;
    var locationInputSelector = limitationBtn.dataset.locationInputSelector;
    removeLocationFromInput(locationInputSelector, removedLocationId);
    tag.remove();
  };
  var attachTagEventHandlers = function attachTagEventHandlers(limitationBtn, tag) {
    var removeTagBtn = tag.querySelector('.ibexa-tag__remove-btn');
    removeTagBtn.addEventListener('click', function () {
      return handleTagRemove(limitationBtn, tag);
    }, false);
  };
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var handleUdwConfirm = function handleUdwConfirm(limitationBtn, selectedItems) {
    if (selectedItems.length) {
      addLocationsToInput(limitationBtn, selectedItems);
      addLocationsTags(limitationBtn, selectedItems);
    }
    closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var limitationBtn = event.currentTarget;
    var input = doc.querySelector(limitationBtn.dataset.locationInputSelector);
    var selectedLocationsIds = input.value.split(IDS_SEPARATOR).filter(function (idString) {
      return !!idString;
    }).map(function (idString) {
      return parseInt(idString, 10);
    });
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans( /*@Desc("Choose Locations")*/'subtree_limitation.title', {}, 'universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: handleUdwConfirm.bind(_this, event.target),
      onCancel: closeUDW,
      title: title,
      multiple: true,
      selectedLocations: selectedLocationsIds
    }, config)));
  };
  limitationBtns.forEach(function (limitationBtn) {
    var tagsList = doc.querySelector(limitationBtn.dataset.selectedLocationListSelector);
    var tags = tagsList.querySelectorAll(SELECTOR_IBEXA_TAG);
    tags.forEach(attachTagEventHandlers.bind(null, limitationBtn));
    limitationBtn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.limitation.pick.js"));
/******/ }
]);