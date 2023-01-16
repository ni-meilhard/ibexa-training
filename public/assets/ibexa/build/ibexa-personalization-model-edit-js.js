(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-model-edit-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.editorial.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.editorial.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_search_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/search.input */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js");

(function (doc, ibexa) {
  var editorialModels = doc.querySelector('.ibexa-perso-editorial-models');
  if (!editorialModels) {
    return;
  }
  var customerId = doc.querySelector('.ibexa-perso-model-edit__form').dataset.customerId;
  var itemsContainer = editorialModels.querySelector('.ibexa-perso-editorial-models__items');
  var updateEditorialNoItemsContainer = function updateEditorialNoItemsContainer() {
    var hasAnyItem = editorialModels.querySelectorAll('.ibexa-perso-editorial-models__item').length > 0;
    var noItemsMessageNode = editorialModels.querySelector('.ibexa-perso-editorial-models__no-items');
    noItemsMessageNode.classList.toggle('d-none', hasAnyItem);
  };
  var removeTag = function removeTag(event) {
    var removeBtn = event.currentTarget;
    var tag = removeBtn.closest('.ibexa-perso-editorial-models__item');
    tag.remove();
    updateEditorialNoItemsContainer();
  };
  var addTag = function addTag(_ref) {
    var label = _ref.label,
      value = _ref.value,
      typeId = _ref.typeId;
    var template = itemsContainer.dataset.template;
    var lastItemNode = itemsContainer.querySelector('.ibexa-perso-editorial-models__item:last-child');
    var lastItemNodeInput = lastItemNode === null || lastItemNode === void 0 ? void 0 : lastItemNode.querySelector('.ibexa-perso-editorial-models__input--id');
    var tagIndex = lastItemNodeInput ? parseInt(lastItemNodeInput.name.replace(/[^0-9]/g, ''), 10) + 1 : 0;
    itemsContainer.insertAdjacentHTML('beforeend', template.replace('{{ label }}', label).replaceAll('__name__', tagIndex));
    var insertedTag = itemsContainer.querySelector(".ibexa-perso-editorial-models__item:last-child");
    insertedTag.querySelector('.ibexa-perso-editorial-models__input--id').value = value;
    insertedTag.querySelector('.ibexa-perso-editorial-models__input--type').value = typeId;
    insertedTag.querySelector('.ibexa-tag__remove-btn').addEventListener('click', removeTag, false);
  };
  var handleAddItem = function handleAddItem(item) {
    var value = item.value,
      id = item.id,
      typeId = item.typeId;
    var valueEscaped = ibexa.helpers.text.escapeHTML(value.replace(/\$/g, '$$$$'));
    var isAlreadySelectedItem = itemsContainer.querySelector(".ibexa-perso-editorial-models__input--id[value=\"".concat(id.replace(/["\\]/g, '\\$&'), "\"]"));
    if (isAlreadySelectedItem) {
      return;
    }
    addTag({
      label: valueEscaped,
      value: id,
      typeId: typeId
    });
    updateEditorialNoItemsContainer();
  };
  var searchInputContainer = doc.querySelector('.ibexa-perso-editorial-models__search-input');
  var searchInput = new _core_search_input__WEBPACK_IMPORTED_MODULE_0__.SearchInput({
    container: searchInputContainer,
    customerId: customerId,
    onItemAdd: handleAddItem
  });
  searchInput.init();
  editorialModels.querySelectorAll('.ibexa-tag__remove-btn').forEach(function (button) {
    button.addEventListener('click', function (event) {
      removeTag(event);
      updateEditorialNoItemsContainer();
    }, false);
  });
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.js ***!
  \***********************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (doc, Routing, ibexa, Translator) {
  var _doc$querySelector, _doc$querySelector2;
  var draggedItem = null;
  var dragItemSourceContainer = null;
  var submodelSelectedKey = '';
  var submodelSelectedType = '';
  var submodelAttributeSource = null;
  var submodelSource = null;
  var submodelSelectedContainer = '';
  var getJsonFromResponse = ibexa.helpers.request.getJsonFromResponse;
  var submodelTypeSelectNode = doc.querySelector('.ibexa-perso-submodel-select');
  var emptyTagTemplateNode = doc.querySelector('.ibexa-perso-submodel-empty-tag-template');
  var submodelsContainer = doc.querySelector('.ibexa-perso-model-edit__submodels');
  var NOMINAL_TYPE = 'NOMINAL';
  var setSubmodelData = function setSubmodelData() {
    var selectedOption = doc.querySelector("option[value=\"".concat(submodelTypeSelectNode.value, "\"]"));
    var _selectedOption$datas = selectedOption.dataset,
      type = _selectedOption$datas.type,
      attributeSource = _selectedOption$datas.attributeSource,
      source = _selectedOption$datas.source;
    submodelSelectedContainer = doc.querySelector(".ibexa-perso-submodel--".concat(selectedOption.value));
    submodelSelectedKey = selectedOption.value;
    submodelSelectedType = type;
    submodelAttributeSource = attributeSource;
    submodelSource = source;
  };
  var submodelTypeChange = function submodelTypeChange() {
    setSubmodelData();
    var selectedSubmodelClass = "ibexa-perso-submodel--".concat(submodelSelectedKey);
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel').forEach(function (submodelNode) {
      var isSelectedSubmodel = submodelNode.classList.contains(selectedSubmodelClass);
      submodelNode.classList.toggle('d-none', !isSelectedSubmodel);
      if (isSelectedSubmodel && submodelSelectedType === NOMINAL_TYPE) {
        fetchSubmodelAvailableItems();
      }
    });
  };
  var toggleEmptyContainer = function toggleEmptyContainer(submodelSidebarItemsContainer) {
    var submodelSidebarItemsEmpty = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list-empty');
    var visibleItems = submodelSidebarItemsContainer.querySelectorAll('.ibexa-perso-submodel-sidebar-item:not(.ibexa-perso-submodel-sidebar-item--hidden)');
    submodelSidebarItemsEmpty.classList.toggle('ibexa-perso-submodel-sidebar__list-empty--visible', !visibleItems.length);
  };
  var fetchSubmodelAvailableItems = function fetchSubmodelAvailableItems() {
    var customerId = doc.querySelector('.ibexa-perso-model-edit__form').dataset.customerId;
    var submodelSidebarItemsContainer = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list');
    var submodelSidebarItemsSpinner = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list-spinner');
    var areItemsAlreadyFetched = submodelSidebarItemsContainer.children.length > 0;
    if (areItemsAlreadyFetched) {
      return;
    }
    var url = Routing.generate('ibexa.personalization.model.attribute', {
      attributeKey: submodelSelectedKey,
      attributeType: submodelSelectedType,
      attributeSource: submodelAttributeSource,
      source: submodelSource,
      customerId: customerId
    });
    var request = new Request(url, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
      }
    });
    fetch(request).then(getJsonFromResponse).then(function (response) {
      var groupsWrapper = submodelSelectedContainer.querySelector('.ibexa-perso-models-drop-groups__groups-wrapper');
      var allGroupsItems = groupsWrapper.querySelectorAll('.ibexa-perso-models-drop-group-item');
      var valuesAlreadyAssignedToGroups = _toConsumableArray(allGroupsItems).map(function (item) {
        return item.querySelector('.ibexa-perso-models-drop-group-item__input');
      }).map(function (input) {
        return input.value;
      });
      var itemTemplate = emptyTagTemplateNode.dataset.template;
      var fragment = doc.createDocumentFragment();
      response.forEach(function (itemValue) {
        var container = doc.createElement('div');
        var templateRendered = itemTemplate.replaceAll('{{ name }}', itemValue);
        container.insertAdjacentHTML('beforeend', templateRendered);
        var newItem = container.querySelector('.ibexa-perso-submodel-sidebar-item');
        var isNewItemAlreadyAssigned = valuesAlreadyAssignedToGroups.includes(itemValue);
        newItem.classList.toggle('ibexa-perso-submodel-sidebar-item--hidden', isNewItemAlreadyAssigned);
        fragment.append(newItem);
      });
      submodelSidebarItemsSpinner.classList.add('ibexa-perso-submodel-sidebar__list-spinner--hidden');
      submodelSidebarItemsContainer.append(fragment);
      attachSidebarItemsEvents(submodelSidebarItemsContainer);
      toggleEmptyContainer(submodelSidebarItemsContainer);
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var attachSidebarItemsEvents = function attachSidebarItemsEvents(sidebar) {
    var sidebarItems = sidebar.querySelectorAll('.ibexa-perso-submodel-sidebar-item');
    sidebarItems.forEach(function (sidebarItem) {
      sidebarItem.addEventListener('dragstart', dragStart, false);
      sidebarItem.addEventListener('dragend', dragEnd, false);
      sidebarItem.addEventListener('click', addItemByClick, false);
    });
  };
  var addItemByClick = function addItemByClick(event) {
    draggedItem = event.currentTarget;
    var activeSubmodelSelectedContainer = draggedItem.closest('.ibexa-perso-submodel').querySelector('.ibexa-perso-models-drop-group.ibexa-perso-models-drop-group--active');
    if (activeSubmodelSelectedContainer) {
      addItem(activeSubmodelSelectedContainer);
      updateGroup(activeSubmodelSelectedContainer);
    }
  };
  var updateGroupContainer = function updateGroupContainer(groupsWrapper) {
    var groupNumber = 1;
    var itemTemplateNode = submodelSelectedContainer.querySelector('.ibexa-perso-submodel__item-template');
    var _itemTemplateNode$dat = itemTemplateNode.dataset,
      inputIdPattern = _itemTemplateNode$dat.inputIdPattern,
      inputNamePattern = _itemTemplateNode$dat.inputNamePattern;
    var groups = groupsWrapper.querySelectorAll('.ibexa-perso-models-drop-group');
    groups.forEach(function (group) {
      var groupItems = group.querySelectorAll('.ibexa-perso-models-drop-group-item');
      groupItems.forEach(function (item, itemIndex) {
        var input = item.querySelector('input');
        input.id = inputIdPattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
        input.name = inputNamePattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
      });
      groupNumber++;
    });
  };
  var dragStart = function dragStart(event) {
    draggedItem = event.target;
    dragItemSourceContainer = event.currentTarget;
    var isFromSidebar = draggedItem.classList.contains('ibexa-perso-submodel-sidebar-item');
    if (isFromSidebar) {
      draggedItem.classList.add('ibexa-perso-submodel-sidebar-item--is-dragging-out');
    }
  };
  var dragEnd = function dragEnd() {
    var isFromSidebar = draggedItem.classList.contains('ibexa-perso-submodel-sidebar-item');
    if (isFromSidebar) {
      draggedItem.classList.remove('ibexa-perso-submodel-sidebar-item--is-dragging-out');
    }
  };
  var dropItem = function dropItem(event) {
    event.stopPropagation();
    if (event.currentTarget.isSameNode(dragItemSourceContainer)) {
      return;
    }
    var isFromSidebar = dragItemSourceContainer.closest('.ibexa-perso-submodel-sidebar') !== null;
    var groupItemsContainer = event.currentTarget;
    var groupsWrapper = groupItemsContainer.closest('.ibexa-perso-models-drop-groups__groups-wrapper');
    var activeGroup = groupsWrapper.querySelector('.ibexa-perso-models-drop-group--active');
    if (!isFromSidebar) {
      var previousGroup = draggedItem.closest('.ibexa-perso-models-drop-group');
      draggedItem.parentNode.removeChild(draggedItem);
      updateGroup(previousGroup);
    }
    activeGroup === null || activeGroup === void 0 ? void 0 : activeGroup.classList.remove('ibexa-perso-models-drop-group--active');
    groupItemsContainer.classList.add('ibexa-perso-models-drop-group--active');
    addItem(groupItemsContainer);
    updateGroup(groupItemsContainer);
  };
  var updateGroup = function updateGroup(container) {
    var emptyGroup = container.querySelector('.ibexa-perso-models-drop-empty-group');
    var placeholder = container.querySelector('.ibexa-perso-models-drop-group-item-placeholder');
    var items = container.querySelectorAll('.ibexa-perso-models-drop-group-item');
    var isGroupEmpty = !items.length;
    emptyGroup.classList.toggle('ibexa-perso-models-drop-empty-group--hidden', !isGroupEmpty);
    placeholder.classList.toggle('ibexa-perso-models-drop-group-item-placeholder--hidden', isGroupEmpty);
  };
  var addItem = function addItem(groupItemsContainer) {
    var value = draggedItem.dataset.value;
    var template = submodelSelectedContainer.querySelector('.ibexa-perso-submodel__item-template').dataset.template;
    var itemPlaceholder = groupItemsContainer.querySelector('.ibexa-perso-models-drop-group-item-placeholder');
    itemPlaceholder.insertAdjacentHTML('beforebegin', template.replace('__name__', value).replace('__name__', value));
    var itemsContainer = groupItemsContainer.querySelector('.ibexa-perso-models-drop-group__items');
    var insertedItem = itemsContainer.querySelector('.ibexa-perso-models-drop-group-item:nth-last-child(3)');
    var insertedItemInput = insertedItem.querySelector('.ibexa-perso-models-drop-group-item__input');
    insertedItem.dataset.value = value;
    insertedItemInput.setAttribute('value', value);
    attachGroupItemEvents(insertedItem);
    var groupsWrapper = groupItemsContainer.closest('.ibexa-perso-models-drop-groups__groups-wrapper');
    updateGroupContainer(groupsWrapper);
    toggleSidebarItem(value, false);
  };
  var attachGroupEvents = function attachGroupEvents(group) {
    var removeBtn = group.querySelector('.ibexa-perso-models-drop-group__remove-btn');
    removeBtn.addEventListener('click', removeGroup, false);
    group.addEventListener('dragstart', dragStart, false);
    group.addEventListener('drop', dropItem, false);
    group.addEventListener('dragover', function (event) {
      return event.preventDefault();
    }, false);
  };
  var attachGroupItemEvents = function attachGroupItemEvents(groupItem) {
    var itemRemoveBtn = groupItem.querySelector('.ibexa-perso-models-drop-group-item__remove-btn');
    itemRemoveBtn.addEventListener('click', removeGroupItem, false);
  };
  var addGroup = function addGroup(event) {
    var addGroupBtn = event.currentTarget;
    var groups = addGroupBtn.closest('.ibexa-perso-models-drop-groups');
    var groupTemplate = groups.dataset.groupTemplate;
    var groupsWrapper = groups.querySelector('.ibexa-perso-models-drop-groups__groups-wrapper');
    groupsWrapper.insertAdjacentHTML('beforeend', groupTemplate);
    var allGroups = groupsWrapper.querySelectorAll('.ibexa-perso-models-drop-group');
    var insertedGroup = allGroups[allGroups.length - 1];
    attachGroupEvents(insertedGroup);
    updateGroupContainer(groupsWrapper);
  };
  var removeGroup = function removeGroup(event) {
    var removeBtn = event.currentTarget;
    var group = removeBtn.closest('.ibexa-perso-models-drop-group');
    var groupItems = group.querySelectorAll('.ibexa-perso-models-drop-group-item');
    var groupsWrapper = removeBtn.closest('.ibexa-perso-models-drop-groups__groups-wrapper');
    _toConsumableArray(groupItems).map(function (groupItem) {
      return groupItem.dataset.value;
    }).forEach(function (itemValue) {
      toggleSidebarItem(itemValue, true);
    });
    group.remove();
    updateGroupContainer(groupsWrapper);
  };
  var removeGroupItem = function removeGroupItem(event) {
    var removeBtn = event.currentTarget;
    var groupItem = removeBtn.closest('.ibexa-perso-models-drop-group-item');
    var group = removeBtn.closest('.ibexa-perso-models-drop-group');
    groupItem.remove();
    updateGroup(group);
    toggleSidebarItem(groupItem.dataset.value, true);
  };
  var toggleSidebarItem = function toggleSidebarItem(value, isVisible) {
    var sidebarItemsList = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list');
    var item = sidebarItemsList.querySelector(".ibexa-perso-submodel-sidebar-item[data-value=\"".concat(value, "\""));
    item.classList.toggle('ibexa-perso-submodel-sidebar-item--hidden', !isVisible);
    toggleEmptyContainer(sidebarItemsList);
  };
  var addRange = function addRange() {
    var numberOfItems = submodelSelectedContainer.querySelectorAll('.ibexa-perso-submodel-range').length;
    var template = submodelSelectedContainer.querySelector('.ibexa-perso-submodel__item-template').dataset.template;
    var rangesContainer = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-ranges__items-wrapper');
    rangesContainer.insertAdjacentHTML('beforeend', template.replaceAll('__name__', numberOfItems));
    var allRanges = submodelSelectedContainer.querySelectorAll('.ibexa-perso-submodel-range');
    var insertedRange = allRanges[allRanges.length - 1];
    var insertedRangeRemoveBtn = insertedRange.querySelector('.ibexa-perso-submodel-range__remove-btn');
    insertedRangeRemoveBtn.addEventListener('click', removeRange, false);
  };
  var removeRange = function removeRange(event) {
    var nodeToRemove = event.currentTarget.closest('.ibexa-perso-submodel-range');
    nodeToRemove.remove();
  };
  var setSegmentsSidebarInfoMessage = function setSegmentsSidebarInfoMessage() {
    var sidebarTitleInfo = doc.querySelector('.ibexa-perso-segment-sidebar__title-bar .ibexa-form-help');
    if (!sidebarTitleInfo) {
      return;
    }
    var relevantHistory = doc.querySelector('.ibexa-perso-model-relevant-history');
    var maximumRatingAgeText = relevantHistory.dataset.maximumRatingAgeText;
    var infoMessage = Translator.trans( /*@Desc("Selected timeframe %timeframe%")*/'models.segments.sidebar.relevant_history_info', {
      timeframe: maximumRatingAgeText
    }, 'ibexa_personalization');
    sidebarTitleInfo.insertAdjacentHTML('beforeend', infoMessage);
  };
  setSegmentsSidebarInfoMessage();
  if (submodelTypeSelectNode) {
    setSubmodelData();
    if (submodelSelectedType === NOMINAL_TYPE) {
      fetchSubmodelAvailableItems();
    }
    submodelTypeSelectNode.addEventListener('change', submodelTypeChange, false);
  }
  var searchSubmodels = function searchSubmodels(event) {
    var itemFilterQueryLowerCase = event.currentTarget.value.toLowerCase();
    var sidebarItems = doc.querySelectorAll('.ibexa-perso-submodel-sidebar__list .ibexa-perso-submodel-sidebar-item');
    sidebarItems.forEach(function (item) {
      var itemNameNode = item.querySelector('.ibexa-perso-submodel-sidebar-item__label');
      var itemNameLowerCase = itemNameNode.innerText.toLowerCase();
      var isItemHidden = !itemNameLowerCase.includes(itemFilterQueryLowerCase);
      item.classList.toggle('ibexa-perso-submodel-sidebar-item--filtered', isItemHidden);
    });
  };
  if (submodelsContainer) {
    submodelsContainer.querySelectorAll('.ibexa-perso-models-drop-groups__add-group-btn').forEach(function (button) {
      button.addEventListener('click', addGroup, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel-ranges__add-range-btn').forEach(function (button) {
      button.addEventListener('click', addRange, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel-range__remove-btn').forEach(function (button) {
      button.addEventListener('click', removeRange, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel-sidebar__search-bar .ibexa-input').forEach(function (sidebarSearchInput) {
      sidebarSearchInput.addEventListener('keyup', searchSubmodels, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-models-drop-group').forEach(attachGroupEvents);
    submodelsContainer.querySelectorAll('.ibexa-perso-models-drop-group-item').forEach(attachGroupItemEvents);
  }
  doc.querySelector('.ibexa-btn--save-close').addEventListener('click', function () {
    doc.querySelector('#model_save_and_close').click();
  });
  doc.querySelector('.ibexa-btn--close').addEventListener('click', function () {
    doc.querySelector('.ibexa-anchor-navigation-menu__close').click();
  });
  doc.querySelector('.ibexa-btn--save').addEventListener('click', function () {
    doc.querySelector('#model_save').click();
  });
  (_doc$querySelector = doc.querySelector('.ibexa-btn--apply')) === null || _doc$querySelector === void 0 ? void 0 : _doc$querySelector.addEventListener('click', function () {
    doc.querySelector('#model_apply').click();
  });
  (_doc$querySelector2 = doc.querySelector('.ibexa-btn--trigger-model-build')) === null || _doc$querySelector2 === void 0 ? void 0 : _doc$querySelector2.addEventListener('click', function () {
    doc.querySelector('#model_trigger_model_build').click();
  });
})(window.document, window.Routing, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.segments.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.segments.js ***!
  \********************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (doc) {
  var GROUP_ITEM_ID_PLACEHOLDER = '{{ groupItemId }}';
  var segmentsContainer = doc.querySelector('.ibexa-perso-segments-edit');
  if (!segmentsContainer) {
    return;
  }
  var draggedItem = null;
  var dragItemSourceContainer = null;
  var groupsContainer = segmentsContainer.querySelector('.ibexa-perso-models-drop-groups');
  var groups = groupsContainer.querySelectorAll('.ibexa-perso-models-drop-group');
  var groupsItems = _toConsumableArray(segmentsContainer.querySelectorAll('.ibexa-perso-segment-group-item'));
  var groupsItemsSegmentsContainer = _toConsumableArray(segmentsContainer.querySelectorAll('.ibexa-perso-models-drop-group-item__segments'));
  var sidebar = segmentsContainer.querySelector('.ibexa-perso-segment-sidebar');
  var sidebarActiveItemsList = segmentsContainer.querySelector('.ibexa-perso-segment-sidebar-group__segments--active-segments');
  var sidebarActiveItems = sidebarActiveItemsList.querySelectorAll('.ibexa-perso-segment-sidebar-item');
  var sidebarItemTemplate = sidebar.dataset.itemTemplate;
  var sidebarGroupsTitleBars = _toConsumableArray(segmentsContainer.querySelectorAll('.ibexa-perso-segment-sidebar-group__title-bar'));
  var addGroupBtn = segmentsContainer.querySelector('.ibexa-perso-models-drop-groups__add-group-btn');
  var filterFieldInput = segmentsContainer.querySelector('.ibexa-perso-segment-sidebar__sidebar-filter');
  var groupsCount = groups.length;
  var toggleEmptyContainer = function toggleEmptyContainer() {
    var sidebarItemsContainer = sidebar.querySelector('.ibexa-perso-segment-sidebar__list');
    var sidebarItemsEmpty = sidebar.querySelector('.ibexa-perso-segment-sidebar__list-empty');
    var items = sidebarItemsContainer.querySelectorAll(".ibexa-perso-segment-sidebar-item");
    sidebarItemsEmpty.classList.toggle('ibexa-perso-segment-sidebar__list-empty--visible', !items.length);
    sidebarItemsContainer.classList.toggle('ibexa-perso-segment-sidebar__list--hidden', !items.length);
  };
  var attachSidebarItemEvents = function attachSidebarItemEvents(item) {
    item.addEventListener('dragstart', dragStart, false);
    item.addEventListener('click', addItemByClick, false);
  };
  var attachGroupEvents = function attachGroupEvents(group) {
    var removeBtn = group.querySelector('.ibexa-perso-models-drop-group__remove-btn');
    removeBtn.addEventListener('click', removeGroup, false);
    group.addEventListener('dragstart', dragStart, false);
    group.addEventListener('drop', dropItem, false);
    group.addEventListener('dragover', function (event) {
      return event.preventDefault();
    }, false);
  };
  var attachGroupItemEvents = function attachGroupItemEvents(item) {
    var itemRemoveBtn = item.querySelector('.ibexa-perso-segment-group-item__remove-btn');
    itemRemoveBtn.addEventListener('click', removeGroupItem, false);
  };
  var addSidebarItem = function addSidebarItem(value, isActive) {
    var sidebarGroupList = isActive ? sidebar.querySelector('.ibexa-perso-segment-sidebar-group__segments--active-segments') : sidebar.querySelector('.ibexa-perso-segment-sidebar-group__segments--inactive-segments');
    var itemRendered = sidebarItemTemplate.replaceAll('{{ value }}', value);
    sidebarGroupList.insertAdjacentHTML('afterbegin', itemRendered);
    var insertedItem = sidebarGroupList.querySelector('.ibexa-perso-segment-sidebar-item:first-child');
    insertedItem.draggable = isActive;
    attachSidebarItemEvents(insertedItem);
    toggleEmptyContainer();
  };
  var removeSidebarItem = function removeSidebarItem(value) {
    var itemToRemove = sidebar.querySelector(".ibexa-perso-segment-sidebar-item[data-value=\"".concat(value, "\""));
    itemToRemove.remove();
    toggleEmptyContainer();
  };
  var toggleSidebarGroup = function toggleSidebarGroup(event) {
    var titleBar = event.currentTarget;
    var sidebarGroup = titleBar.closest('.ibexa-perso-segment-sidebar-group');
    sidebarGroup.classList.toggle('ibexa-perso-segment-sidebar-group--collapsed');
  };
  var addItemByClick = function addItemByClick(event) {
    draggedItem = event.currentTarget;
    var activeGroup = segmentsContainer.querySelector('.ibexa-perso-models-drop-group--active');
    if (activeGroup) {
      addGroupItem(activeGroup);
      removeSidebarItem(draggedItem.dataset.value);
    }
  };
  var dragStart = function dragStart(event) {
    draggedItem = event.target;
    dragItemSourceContainer = event.currentTarget;
  };
  var dropItem = function dropItem(event) {
    event.stopPropagation();
    if (event.currentTarget.isSameNode(dragItemSourceContainer)) {
      return;
    }
    var groupItemsContainer = event.currentTarget;
    var groupsWrapper = groupItemsContainer.closest('.ibexa-perso-models-drop-groups__groups-wrapper');
    var activeGroup = groupsWrapper.querySelector('.ibexa-perso-models-drop-group--active');
    draggedItem.parentNode.removeChild(draggedItem);
    activeGroup === null || activeGroup === void 0 ? void 0 : activeGroup.classList.remove('ibexa-perso-models-drop-group--active');
    groupItemsContainer.classList.add('ibexa-perso-models-drop-group--active');
    addGroupItem(groupItemsContainer);
  };
  var addGroupItem = function addGroupItem(groupItemsContainer) {
    var value = draggedItem.dataset.value;
    var groupItemSegmentsContainer = groupItemsContainer.querySelector('.ibexa-perso-models-drop-group-item__segments');
    var groupItemTemplate = groupItemSegmentsContainer.dataset.prototype;
    var itemsCount = parseInt(groupItemSegmentsContainer.dataset.itemsCount, 10);
    var renderedItem = groupItemTemplate.replaceAll('{{ name }}', value).replaceAll(GROUP_ITEM_ID_PLACEHOLDER, itemsCount);
    groupItemSegmentsContainer.insertAdjacentHTML('beforeend', renderedItem);
    var insertedItem = groupItemSegmentsContainer.querySelector(':scope > :last-child');
    var insertedItemInput = insertedItem.querySelector('.ibexa-perso-segment-group-item__input');
    var insertedItemInputGroupId = insertedItem.querySelector('.ibexa-perso-segment-group-item__input-group-id');
    groupItemSegmentsContainer.dataset.itemsCount = itemsCount + 1;
    insertedItem.dataset.value = value;
    insertedItemInput.value = value;
    insertedItemInputGroupId.value = groupItemSegmentsContainer.dataset.groupId;
    attachGroupItemEvents(insertedItem);
    toggleEmptyContainer();
  };
  var addGroup = function addGroup() {
    groupsCount = groupsCount + 1;
    var groupTemplate = groupsContainer.dataset.groupTemplate;
    var groupsWrapper = groupsContainer.querySelector('.ibexa-perso-models-drop-groups__groups-wrapper');
    var groupTemplateRendered = groupTemplate.replace('__name__', groupsCount).replace('__name__', groupsCount);
    groupsWrapper.insertAdjacentHTML('beforeend', groupTemplateRendered);
    var insertedGroup = groupsWrapper.querySelector(':scope > :last-child');
    var insertedGroupSegmentsContainer = insertedGroup.querySelector('.ibexa-perso-models-drop-group-item__segments');
    var groupIdInput = insertedGroup.querySelector('.ibexa-perso-segment-group__input-group-id');
    var groupItemTemplate = insertedGroupSegmentsContainer.dataset.prototype;
    groupIdInput.value = groupsCount;
    insertedGroupSegmentsContainer.dataset.prototype = groupItemTemplate.replace('__name__', groupsCount).replace('__name__', GROUP_ITEM_ID_PLACEHOLDER).replace('__name__', groupsCount).replace('__name__', GROUP_ITEM_ID_PLACEHOLDER).replace('__name__', groupsCount).replace('__name__', GROUP_ITEM_ID_PLACEHOLDER).replace('__name__', groupsCount).replace('__name__', GROUP_ITEM_ID_PLACEHOLDER);
    insertedGroupSegmentsContainer.dataset.itemsCount = 0;
    insertedGroupSegmentsContainer.dataset.groupId = groupsCount;
    attachGroupEvents(insertedGroup);
  };
  var removeGroup = function removeGroup(event) {
    var removeBtn = event.currentTarget;
    var group = removeBtn.closest('.ibexa-perso-models-drop-group');
    var groupItems = _toConsumableArray(group.querySelectorAll('.ibexa-perso-segment-group-item'));
    groupItems.reverse().forEach(function (groupItem) {
      var itemValue = groupItem.dataset.value;
      var isGroupItemActive = checkIsGroupItemActive(groupItem);
      addSidebarItem(itemValue, isGroupItemActive);
    });
    group.remove();
  };
  var removeGroupItem = function removeGroupItem(event) {
    var removeBtn = event.currentTarget;
    var groupItem = removeBtn.closest('.ibexa-perso-segment-group-item');
    var groupItemValue = groupItem.dataset.value;
    var isGroupItemActive = checkIsGroupItemActive(groupItem);
    groupItem.remove();
    addSidebarItem(groupItemValue, isGroupItemActive);
  };
  var checkIsGroupItemActive = function checkIsGroupItemActive(groupItem) {
    return !!groupItem.querySelector('.ibexa-perso-segment-group-item__status--active');
  };
  var searchField = function searchField(event) {
    var fieldFilterQueryLowerCase = event.currentTarget.value.toLowerCase();
    var sidebarFields = segmentsContainer.querySelectorAll('.ibexa-perso-segment-sidebar-item');
    sidebarFields.forEach(function (field) {
      var fieldNameNode = field.querySelector('.ibexa-perso-segment-sidebar-item__label');
      var fieldNameLowerCase = fieldNameNode.innerText.toLowerCase();
      var isFieldHidden = !fieldNameLowerCase.includes(fieldFilterQueryLowerCase);
      field.classList.toggle('ibexa-perso-segment-sidebar-item--hidden', isFieldHidden);
    });
  };
  sidebarActiveItems.forEach(attachSidebarItemEvents);
  groups.forEach(attachGroupEvents);
  groupsItems.forEach(attachGroupItemEvents);
  addGroupBtn.addEventListener('click', addGroup, false);
  sidebarGroupsTitleBars.forEach(function (titleBar) {
    return titleBar.addEventListener('click', toggleSidebarGroup, false);
  });
  groupsItemsSegmentsContainer.forEach(function (groupItemSegmentsContainer) {
    var groupItemTemplate = groupItemSegmentsContainer.dataset.prototype;
    groupItemSegmentsContainer.dataset.prototype = groupItemTemplate.replaceAll('__name__', GROUP_ITEM_ID_PLACEHOLDER);
    groupItemSegmentsContainer.dataset.itemsCount = groupItemSegmentsContainer.children.length;
  });
  filterFieldInput.addEventListener('keyup', searchField, false);
})(window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.editorial.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.segments.js"));
/******/ }
]);