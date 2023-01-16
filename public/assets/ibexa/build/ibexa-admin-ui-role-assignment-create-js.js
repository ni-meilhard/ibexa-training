(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-role-assignment-create-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js ***!
  \***************************************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
(function (global, doc, ibexa, React, ReactDOM) {
  var _this = this;
  var udwContainer = doc.getElementById('react-udw');
  var limitationsRadio = doc.querySelectorAll('.ibexa-assign__limitations-item-radio');
  var selectSubtreeWidget = new ibexa.core.TagViewSelect({
    fieldContainer: doc.querySelector('.ibexa-assign__limitations-item-subtree')
  });
  var selectUsersWidget = new ibexa.core.TagViewSelect({
    fieldContainer: doc.querySelector('.ibexa-assign__users')
  });
  var selectGroupsWidget = new ibexa.core.TagViewSelect({
    fieldContainer: doc.querySelector('.ibexa-assign__groups')
  });
  var selectSubtreeBtn = doc.querySelector('.ibexa-assign__limitations-item-select-subtree');
  var selectUsersBtn = doc.querySelector('#role_assignment_create_users__btn');
  var selectGroupsBtn = doc.querySelector('#role_assignment_create_groups__btn');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var confirmSubtreeUDW = function confirmSubtreeUDW(data) {
    ibexa.helpers.tagViewSelect.buildItemsFromUDWResponse(data, function (item) {
      return item.id;
    }, function (items) {
      selectSubtreeWidget.addItems(items, true);
      closeUDW();
    });
  };
  var openSubtreeUDW = function openSubtreeUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var selectedLocations = selectSubtreeWidget.inputField.value;
    var selectedLocationsIds = selectedLocations ? selectedLocations.split(',') : [];
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: confirmSubtreeUDW.bind(_this),
      onCancel: closeUDW,
      multiple: true,
      selectedLocations: selectedLocationsIds
    }, config)));
  };
  var confirmUsersAndGroupsUDW = function confirmUsersAndGroupsUDW(widget, selectedItems) {
    ibexa.helpers.tagViewSelect.buildItemsFromUDWResponse(selectedItems, function (item) {
      return item.ContentInfo.Content._id;
    }, function (items) {
      var itemsMap = selectedItems.reduce(function (output, item) {
        return _objectSpread(_objectSpread({}, output), {}, _defineProperty({}, item.ContentInfo.Content._id, item.id));
      }, {});
      widget.addItems(items, true);
      widget.selectBtn.setAttribute('data-items-map', JSON.stringify(itemsMap));
      closeUDW();
    });
  };
  var openUsersAndGroupsUDW = function openUsersAndGroupsUDW(widget, event) {
    event.preventDefault();
    var selectBtn = event.currentTarget;
    var config = JSON.parse(selectBtn.dataset.udwConfig);
    var itemsMap = JSON.parse(selectBtn.dataset.itemsMap);
    var selectedContent = widget.inputField.value;
    var selectedContentIds = selectedContent ? selectedContent.split(',') : [];
    var selectedLocationsIds = selectedContentIds.map(function (contentId) {
      return itemsMap[contentId];
    });
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: confirmUsersAndGroupsUDW.bind(_this, widget),
      onCancel: function onCancel() {
        return udwRoot.unmount();
      },
      title: selectBtn.dataset.universaldiscoveryTitle,
      multiple: true,
      selectedLocations: selectedLocationsIds
    }, config)));
  };
  var toggleDisabledState = function toggleDisabledState() {
    limitationsRadio.forEach(function (radio) {
      var disableNode = radio.closest('.ibexa-assign__limitations-item').querySelector(radio.dataset.disableSelector);
      if (disableNode) {
        if (radio.dataset.disableClass) {
          disableNode.classList.toggle(radio.dataset.disableClass, !radio.checked);
        } else {
          disableNode.toggleAttribute('disabled', !radio.checked);
        }
      }
    });
  };
  selectSubtreeBtn.addEventListener('click', openSubtreeUDW, false);
  selectUsersBtn.addEventListener('click', openUsersAndGroupsUDW.bind(null, selectUsersWidget), false);
  selectGroupsBtn.addEventListener('click', openUsersAndGroupsUDW.bind(null, selectGroupsWidget), false);
  limitationsRadio.forEach(function (radio) {
    return radio.addEventListener('change', toggleDisabledState, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js"));
/******/ }
]);