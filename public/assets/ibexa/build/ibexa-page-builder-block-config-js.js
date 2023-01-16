(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-block-config-js"],{

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js ***!
  \********************************************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function (global, doc, ibexa, Translator) {
  var SELECTOR_FIELD_WRAPPER = '.ibexa-pb-block-embed-field';
  ibexa.BlockConfigEmbedFieldBase = /*#__PURE__*/function () {
    "use strict";

    function BlockConfigEmbedFieldBase() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, BlockConfigEmbedFieldBase);
      this.selectorPreview = config.selectorPreview || '.ibexa-pb-embed-meta__preview';
      this.selectorIcon = config.selectorIcon || '.ibexa-pb-embed-meta__preview-icon';
      this.selectorTitle = config.selectorTitle || '.ibexa-pb-embed-meta__title';
      this.selectorContentType = config.selectorContentType || '.ibexa-pb-embed-meta__content-type';
      this.selectorEmbedMeta = config.selectorEmbedMeta || '.ibexa-pb-embed-meta';
      this.previewFieldTypeIdentifier = config.previewFieldTypeIdentifier || 'ezimage';
      this.openUDWSelector = config.openUDWSelector || '[data-open-udw-embed]';
      this.openUDW = this.openUDW.bind(this);
    }

    /**
     * Gets placeholders nodes
     *
     * @method getPlaceholderNodes
     * @param {HTMLElement} container
     * @returns {Object}
     */
    _createClass(BlockConfigEmbedFieldBase, [{
      key: "getPlaceholderNodes",
      value: function getPlaceholderNodes(container) {
        return {
          preview: container.querySelector(this.selectorPreview),
          previewIcon: container.querySelector(this.selectorIcon),
          title: container.querySelector(this.selectorTitle),
          contentType: container.querySelector(this.selectorContentType)
        };
      }

      /**
       * Clears the meta information
       *
       * @method clearMeta
       * @param {HTMLElement} btn
       * @param {HTMLElement} container
       */
    }, {
      key: "clearMeta",
      value: function clearMeta(btn, container) {
        doc.querySelector(btn.dataset.target).value = '';
        container.setAttribute('hidden', true);
        btn.removeAttribute('hidden');
      }

      /**
       * Gets the preview src
       *
       * @method getPreviewSrc
       * @param {Array} data list of Content objects
       * @returns {String}
       */
    }, {
      key: "getPreviewSrc",
      value: function getPreviewSrc(data) {
        var _versionData$ContentI,
          _versionData$ContentI2,
          _this = this;
        var versionData = Array.isArray(data) ? data[0] || {} : {};
        var currentVersion = (_versionData$ContentI = versionData.ContentInfo) === null || _versionData$ContentI === void 0 ? void 0 : (_versionData$ContentI2 = _versionData$ContentI.Content) === null || _versionData$ContentI2 === void 0 ? void 0 : _versionData$ContentI2.CurrentVersion;
        if (!currentVersion) {
          return '';
        }
        var version = currentVersion.Version;
        var imageField = version.Fields.field.find(function (field) {
          return field.fieldTypeIdentifier === _this.previewFieldTypeIdentifier;
        });
        return imageField && imageField.fieldValue ? imageField.fieldValue.uri : '';
      }

      /**
       * Gets the input value
       *
       * @method getInputValue
       * @param {Array} data list of Content objects
       * @returns {Number}
       */
    }, {
      key: "getInputValue",
      value: function getInputValue(data) {
        return data[0].ContentInfo.Content._id;
      }

      /**
       * Gets the content info
       *
       * @method getContentInfo
       * @param {Array} data list of Content objects
       * @returns {Object}
       */
    }, {
      key: "getContentInfo",
      value: function getContentInfo(data) {
        return data[0].ContentInfo.Content;
      }

      /**
       * Updates the field value
       *
       * @method updateFieldValue
       * @param {HTMLElement} btn
       * @param {Array} items list of Content objects
       */
    }, {
      key: "updateFieldValue",
      value: function updateFieldValue(btn, items) {
        var metaContainer = btn.closest(SELECTOR_FIELD_WRAPPER).querySelector(this.selectorEmbedMeta);
        var contentInfo = this.getContentInfo(items);
        var previewSrc = this.getPreviewSrc(items);
        var inputValue = this.getInputValue(items);
        var _this$getPlaceholderN = this.getPlaceholderNodes(metaContainer),
          preview = _this$getPlaceholderN.preview,
          previewIcon = _this$getPlaceholderN.previewIcon,
          title = _this$getPlaceholderN.title,
          contentType = _this$getPlaceholderN.contentType;
        var contentTypeName = ibexa.helpers.contentType.getContentTypeName(contentInfo.ContentTypeInfo.identifier);
        var contentTypeIcon = ibexa.helpers.contentType.getContentTypeIconUrl(contentInfo.ContentTypeInfo.identifier);
        var contentName = ibexa.helpers.text.escapeHTML(contentInfo.TranslatedName);
        doc.querySelector(btn.dataset.target).value = inputValue;
        title.innerHTML = contentName;
        contentType.innerHTML = contentTypeName;
        if (previewSrc) {
          preview.src = previewSrc;
          preview.removeAttribute('hidden');
          previewIcon.setAttribute('hidden', true);
        } else {
          preview.setAttribute('hidden', true);
          previewIcon.removeAttribute('hidden');
          previewIcon.querySelector('use').setAttribute('href', contentTypeIcon);
        }
        metaContainer.removeAttribute('hidden');
        btn.setAttribute('hidden', true);
      }

      /**
       * Attaches event listener for remove button
       *
       * @method attachRemoveItemEvent
       * @param {HTMLElement} btn
       */
    }, {
      key: "attachRemoveItemEvent",
      value: function attachRemoveItemEvent(btn) {
        var metaContainer = btn.closest(SELECTOR_FIELD_WRAPPER).querySelector(this.selectorEmbedMeta);
        var removeBtn = metaContainer.querySelector('.ibexa-pb-embed-meta__action--remove');
        removeBtn.addEventListener('click', this.clearMeta.bind(this, btn, metaContainer), false);
      }

      /**
       * Opens UDW
       *
       * @method openUDW
       * @param {Event} event
       */
    }, {
      key: "openUDW",
      value: function openUDW(event) {
        event.preventDefault();
        var currentTarget = event.currentTarget;
        var config = JSON.parse(currentTarget.dataset.udwConfig);
        var title = Translator.trans( /*@Desc("Browse content")*/'config_form.block_config.embed_field_base.udw.title', {}, 'page_builder');
        var openUdwEvent = new CustomEvent('ibexa-open-udw', {
          detail: _objectSpread({
            title: title,
            multiple: false,
            onConfirm: this.updateFieldValue.bind(this, currentTarget)
          }, config)
        });
        doc.body.dispatchEvent(openUdwEvent);
      }

      /**
       * Initializes the embed field event handlers
       *
       * @method init
       */
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
        var openUdwBtns = _toConsumableArray(container.querySelectorAll(this.openUDWSelector));
        openUdwBtns.forEach(function (btn) {
          _this2.attachRemoveItemEvent(btn);
          btn.addEventListener('click', _this2.openUDW, false);
        });
      }
    }]);
    return BlockConfigEmbedFieldBase;
  }();
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js ***!
  \*****************************************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (doc, bootstrap) {
  var SELECTOR_INVALID = '.is-invalid';
  var SELECTOR_TAB = '.ibexa-pb-block-config__tab';
  var errorNodes = _toConsumableArray(doc.querySelectorAll(SELECTOR_INVALID));
  errorNodes.forEach(function (errorNode, index) {
    var tab = errorNode.closest(SELECTOR_TAB);
    var navLinkId = tab.getAttribute('aria-labelledby');
    var navLink = doc.getElementById(navLinkId);
    var navItem = navLink.closest('.ibexa-tabs__tab');
    navItem.classList.add('ibexa-tabs__tab--error');
    if (!index) {
      bootstrap.Tab.getOrCreateInstance(navLink).show();
    }
  });
})(window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js ***!
  \***********************************************************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function (global, doc, ibexa, Translator) {
  ibexa.BlockConfigScheduleFieldBase = /*#__PURE__*/function () {
    "use strict";

    function BlockConfigScheduleFieldBase() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, BlockConfigScheduleFieldBase);
      this.classLoading = config.classLoading || 'ibexa-pb-schedule--is-loading';
      this.selectorContainer = config.selectorContainer || '.ibexa-pb-schedule';
      this.selectorActiveList = config.selectorActiveList || '.ibexa-pb-schedule__active-items';
      this.selectorActiveItem = config.selectorActiveItem || '.ibexa-pb-schedule-active-item';
      this.selectorNoActiveItemsInfo = config.selectorNoActiveItemsInfo || '.ibexa-pb-schedule__no-active-items-info';
      this.selectorQueueList = config.selectorQueueList || '.ibexa-pb-schedule__queue-items';
      this.selectorQueueItem = config.selectorQueueItem || '.ibexa-pb-schedule-queue-item';
      this.selectorNoQueuedItemsInfo = config.selectorNoQueuedItemsInfo || '.ibexa-pb-schedule__no-queued-items-info';
      this.selectorDragPlaceholder = config.selectorDragPlaceholder || '.ibexa-pb-schedule-placeholder';
      this.selectorOpenUdwBtn = config.selectorOpenUdwBtn || '.ibexa-btn--select-content';
      this.selectorTrashBtn = config.selectorTrashBtn || '.ibexa-btn--trash';
      this.selectorChangeAirtimeBtn = config.selectorChangeAirtimeBtn || '.ibexa-btn--change-airtime';
      this.selectorEventsTextarea = config.selectorEventsTextarea || '#block_configuration_attributes_events_value';
      this.timeoutRemovePlaceholders = config.timeoutRemovePlaceholders || 500;
      this.classNoActiveItemsInfoHidden = config.classNoActiveItemsInfoHidden || 'ibexa-pb-schedule__no-active-items-info--hidden';
      this.classActiveItemUnavailable = config.classActiveItemUnavailable || 'ibexa-pb-schedule-active-item--is-unavailable';
      this.classNoQueuedItemsInfoHidden = config.classNoQueuedItemsInfoHidden || 'ibexa-pb-schedule__no-queued-items-info--hidden';
      this.classQueuedItemUnavailable = config.classQueuedItemUnavailable || 'ibexa-pb-schedule-queue-item--is-unavailable';
      this.classActiveItemDragDisabled = config.classActiveItemDragDisabled || 'ibexa-pb-schedule-active-item--drag-disabled';
      this.classDragPlaceholder = config.classDragPlaceholder || 'ibexa-pb-schedule-placeholder';
      this.draggedItem = null;
      this.onDragOverTimeout = null;
      this.onDragStartHandler = this.onDragStartHandler.bind(this);
      this.onDragEndHandler = this.onDragEndHandler.bind(this);
      this.renderItems = this.renderItems.bind(this);
      this.lastItemsListRequestNo = -1;
    }
    _createClass(BlockConfigScheduleFieldBase, [{
      key: "getItemsList",
      value: function getItemsList(container, events) {
        var _this = this;
        var url = window.Routing.generate('ibexa.page.block.schedule_block.list_content');
        var model = JSON.parse(container.dataset.model);
        var blockValue = model.blockValue;
        var data = new FormData();
        this.lastItemsListRequestNo += 1;
        this.toggleLoadingScreen(container, true);
        blockValue.attributes = blockValue.attributes.map(function (attr) {
          if (attr.name === 'events') {
            attr.value = JSON.stringify(events);
          }
          return attr;
        });
        data.append('blockValue', JSON.stringify(blockValue));
        var request = new Request(url, {
          method: 'POST',
          body: data,
          mode: 'same-origin',
          credentials: 'same-origin'
        });
        var requestNo = this.lastItemsListRequestNo;
        fetch(request).then(function (response) {
          return response.json();
        }).then(function (json) {
          if (requestNo < _this.lastItemsListRequestNo) {
            return;
          }
          var _json$lists = json.lists,
            active = _json$lists.active,
            queue = _json$lists.queue;
          container.dataset.blockValue = JSON.stringify(json.blockValue);
          _this.renderItems(container, {
            active: active,
            queue: queue
          });
        });
      }
    }, {
      key: "addNewEvents",
      value: function addNewEvents(container, newEvents) {
        var eventsTextarea = container.querySelector(this.selectorEventsTextarea);
        var currentEvents = JSON.parse(eventsTextarea.value);
        var allEvents = [].concat(_toConsumableArray(currentEvents), _toConsumableArray(newEvents));
        eventsTextarea.value = JSON.stringify(allEvents);
        return allEvents;
      }
    }, {
      key: "toggleLoadingScreen",
      value: function toggleLoadingScreen(container, show) {
        container.classList.toggle(this.classLoading, show);
      }
    }, {
      key: "openUdw",
      value: function openUdw(container, event) {
        event.preventDefault();
        var currentTarget = event.currentTarget;
        var config = JSON.parse(currentTarget.dataset.udwConfig);
        var title = Translator.trans( /*@Desc("Select content")*/'config_form.widgets.schedule.udw.title', {}, 'page_builder');
        var openUdwEvent = new CustomEvent('ibexa-open-udw', {
          detail: _objectSpread({
            title: title,
            multiple: true,
            onConfirm: this.confirmUdwHandler.bind(this, container)
          }, config)
        });
        doc.body.dispatchEvent(openUdwEvent);
      }
    }, {
      key: "openAirtimePopup",
      value: function openAirtimePopup(callback) {
        var airtime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getDefaultAirtime();
        var openAirtimePopupEvent = new CustomEvent('ibexa-open-airtime-popup', {
          detail: {
            airtime: airtime,
            onSubmit: callback
          }
        });
        doc.body.dispatchEvent(openAirtimePopupEvent);
      }
    }, {
      key: "confirmUdwHandler",
      value: function confirmUdwHandler(container, items) {
        this.openAirtimePopup(this.addItemsFromUDW.bind(this, container, items));
      }
    }, {
      key: "addItemsFromUDW",
      value: function addItemsFromUDW(container, itemsLocations, airtime) {
        var _this2 = this;
        var events = itemsLocations.map(function (itemLocation) {
          var itemData = {
            locationId: itemLocation.id
          };
          return _this2.createItemAddedEvent(itemData, airtime);
        });
        var allEvents = this.addNewEvents(container, events);
        this.getItemsList(container, allEvents);
      }

      /**
       *
       * @param {Number} dateTime
       * @returns {{id: String, dateTime: Number}}
       */
    }, {
      key: "getEventBasicParams",
      value: function getEventBasicParams(dateTime) {
        return {
          id: this.generateId('sbe-'),
          dateTime: dateTime
        };
      }

      /**
       * @returns {Number}
       */
    }, {
      key: "getDefaultAirtime",
      value: function getDefaultAirtime() {
        var now = new Date();
        now.setSeconds(0);
        return Math.floor(now.getTime() / 1000);
      }
    }, {
      key: "createEvent",
      value: function createEvent(additionalParams, type) {
        var airtime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getDefaultAirtime();
        var basicEventParams = this.getEventBasicParams(airtime);
        return _objectSpread(_objectSpread(_objectSpread({}, basicEventParams), additionalParams), {}, {
          type: type
        });
      }
    }, {
      key: "createItemAddedEvent",
      value: function createItemAddedEvent(_ref, additionDate) {
        var locationId = _ref.locationId;
        var newItemData = {
          id: this.generateId('sbi-'),
          additionDate: additionDate,
          location: {
            id: locationId
          }
        };
        return this.createEvent({
          item: newItemData
        }, 'itemAdded', additionDate);
      }
    }, {
      key: "createItemRemovedEvent",
      value: function createItemRemovedEvent(_ref2, dateTime) {
        var itemId = _ref2.itemId;
        return this.createEvent({
          itemId: itemId
        }, 'itemRemoved', dateTime);
      }
    }, {
      key: "createItemsReorderedEvent",
      value: function createItemsReorderedEvent(_ref3, dateTime) {
        var map = _ref3.map;
        return this.createEvent({
          map: map
        }, 'itemsReordered', dateTime);
      }
    }, {
      key: "createLimitChangedEvent",
      value: function createLimitChangedEvent(_ref4, dateTime) {
        var limit = _ref4.limit;
        return this.createEvent({
          limit: limit
        }, 'limitChanged', dateTime);
      }
    }, {
      key: "generateId",
      value: function generateId() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id-';
        return [prefix, this.makeIdPiece(), this.makeIdPiece(true), this.makeIdPiece(true), this.makeIdPiece()].join('');
      }
    }, {
      key: "makeIdPiece",
      value: function makeIdPiece(addDashes) {
        var piece = "".concat(Math.random().toString(16), "000000000").substr(2, 8);
        return addDashes ? "-".concat(piece.substr(0, 4), "-").concat(piece.substr(4, 4)) : piece;
      }
    }, {
      key: "onDragStartHandler",
      value: function onDragStartHandler(event) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.setData('text/html', event.currentTarget);
        setTimeout(function () {
          event.target.style.setProperty('display', 'none');
        }, 0);
        this.draggedItem = event.currentTarget;
        this.draggedItem.classList.add('ibexa-pb-schedule-queue-item--is-dragging-out');
      }
    }, {
      key: "onDragEndHandler",
      value: function onDragEndHandler() {
        this.draggedItem.style.removeProperty('display');
        this.draggedItem.classList.remove('ibexa-pb-schedule-queue-item--is-dragging-out');
      }
    }, {
      key: "hidePlaceholdersAfterTimeout",
      value: function hidePlaceholdersAfterTimeout(container) {
        var _this3 = this;
        global.clearTimeout(this.onDragOverTimeout);
        this.onDragOverTimeout = global.setTimeout(function () {
          return _this3.removeDragPlaceholder(container);
        }, this.timeoutRemovePlaceholders);
      }
    }, {
      key: "attachEventsToDraggableItems",
      value: function attachEventsToDraggableItems(container, item) {
        item.ondragstart = this.onDragStartHandler;
        item.ondragend = this.onDragEndHandler;
        item.ondrag = this.hidePlaceholdersAfterTimeout.bind(this, container);
      }
    }, {
      key: "attachEventsToActiveListBtns",
      value: function attachEventsToActiveListBtns(container, item) {
        item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, false), false);
        item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
      }
    }, {
      key: "attachEventsToQueueListBtns",
      value: function attachEventsToQueueListBtns(container, item) {
        item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, true), false);
        item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
      }
    }, {
      key: "attachEventsToLimitInput",
      value: function attachEventsToLimitInput(container) {
        var limitInput = container.querySelector('#block_configuration_attributes_limit_value');
        limitInput.addEventListener('change', this.onLimitChanged.bind(this, container), false);
      }
    }, {
      key: "updateAirtime",
      value: function updateAirtime(container, event) {
        event.preventDefault();
        var itemNode = event.target.closest('[data-airtime]');
        var isUnavailable = itemNode.classList.contains(this.classActiveItemUnavailable) || itemNode.classList.contains(this.classQueuedItemUnavailable);
        if (isUnavailable) {
          return;
        }
        var airtime = itemNode.dataset.airtime;
        this.openAirtimePopup(this.setAirtime.bind(this, container, event), airtime);
        ibexa.helpers.tooltips.hideAll(itemNode);
      }
    }, {
      key: "setAirtime",
      value: function setAirtime(container, event, airtime) {
        var itemNode = event.target.closest('[data-item-id]');
        var _itemNode$dataset = itemNode.dataset,
          locationId = _itemNode$dataset.locationId,
          itemId = _itemNode$dataset.itemId;
        var oldAirtime = itemNode.dataset.airtime;
        var isItemInQueue = itemNode.classList.contains('ibexa-pb-schedule-queue-item');
        var removedAirtime = isItemInQueue ? oldAirtime : this.getDefaultAirtime();
        var eventRemoved = this.createItemRemovedEvent({
          itemId: itemId
        }, removedAirtime);
        var eventAdded = this.createItemAddedEvent({
          locationId: locationId
        }, airtime);
        var allEvents = this.addNewEvents(container, [eventRemoved, eventAdded]);
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "removeListItem",
      value: function removeListItem(container, isQueueList, event) {
        event.preventDefault();
        var listElementNode = event.currentTarget.closest('[data-item-id]');
        var _listElementNode$data = listElementNode.dataset,
          itemId = _listElementNode$data.itemId,
          airtime = _listElementNode$data.airtime;
        var scheduleEvent = isQueueList ? this.createItemRemovedEvent({
          itemId: itemId
        }, airtime) : this.createItemRemovedEvent({
          itemId: itemId
        });
        var allEvents = this.addNewEvents(container, [scheduleEvent]);
        ibexa.helpers.tooltips.hideAll(listElementNode);
        listElementNode.remove();
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "removeDragPlaceholder",
      value: function removeDragPlaceholder(container) {
        var placeholder = container.querySelector(this.selectorDragPlaceholder);
        if (placeholder) {
          placeholder.remove();
        }
      }
    }, {
      key: "addPlaceholder",
      value: function addPlaceholder(container, element, positionY) {
        var rect = element.getBoundingClientRect();
        var middlePositionY = rect.top + rect.height / 2;
        var where = positionY <= middlePositionY ? element : element.nextSibling;
        this.addPlaceholderAfter(container, where);
      }
    }, {
      key: "addPlaceholderAfter",
      value: function addPlaceholderAfter(container, element) {
        var isDragPlaceholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var wrapper = doc.createElement('div');
        var list = container.querySelector(this.selectorActiveList);
        wrapper.insertAdjacentHTML('beforeend', list.dataset.placeholder);
        var placeholder = wrapper.querySelector(this.selectorDragPlaceholder);
        placeholder.classList.toggle(this.classDragPlaceholder, isDragPlaceholder);
        list.insertBefore(placeholder, element);
      }
    }, {
      key: "onDragOverHandler",
      value: function onDragOverHandler(container, event) {
        var listItem = event.target.closest("".concat(this.selectorActiveItem, ":not(").concat(this.selectorDragPlaceholder, ")"));
        if (!listItem) {
          return false;
        }
        this.removeDragPlaceholder(container);
        this.addPlaceholder(container, listItem, event.clientY);
      }

      /**
       *
       * @param {HTMLElement} container
       */
    }, {
      key: "onDropHandler",
      value: function onDropHandler(container) {
        var list = container.querySelector(this.selectorActiveList);
        list.insertBefore(this.draggedItem, list.querySelector(this.selectorDragPlaceholder));
        this.removeDragPlaceholder(container);
        this.onItemsReordered(container, list);
      }

      /**
       *
       * @param {HTMLElement} container
       * @param {HTMLElement} list
       */
    }, {
      key: "onItemsReordered",
      value: function onItemsReordered(container, list) {
        var elementsNodes = list.querySelectorAll('.ibexa-pb-schedule-active-item');
        var newOrderIdsMap = _toConsumableArray(elementsNodes).map(function (elementNode) {
          return elementNode.dataset.itemId;
        });
        var reorderEvent = this.createItemsReorderedEvent({
          map: newOrderIdsMap
        });
        var allEvents = this.addNewEvents(container, [reorderEvent]);
        this.getItemsList(container, allEvents);
      }

      /**
       *
       * @param {HTMLElement} container
       * @param {Event} event
       */
    }, {
      key: "onLimitChanged",
      value: function onLimitChanged(container, event) {
        var inputElement = event.target;
        var newLimit = inputElement.value;
        var limitChangeEvent = this.createLimitChangedEvent({
          limit: newLimit
        });
        var allEvents = this.addNewEvents(container, [limitChangeEvent]);
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "renderActiveItem",
      value: function renderActiveItem(container, item) {
        var escapeHTML = ibexa.helpers.text.escapeHTML;
        var list = container.querySelector(this.selectorActiveList);
        var template = list.dataset.activeItemTemplate;
        var isUnavailable = item.location.unavailable;
        var additionalClasses = isUnavailable ? this.classActiveItemUnavailable : '';
        var contentName = escapeHTML(item.location.contentInfo.name);
        var itemId = escapeHTML(item.id);
        var locationId = escapeHTML(item.location.id);
        var additionDate = escapeHTML(item.additionDate);
        var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ item_id }}', itemId).replace('{{ location_id }}', locationId).replace('{{ airtime }}', additionDate).replace('{{ additional_classes }}', additionalClasses);
        var wrapper = doc.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', renderedItem);
        var listItem = wrapper.querySelector(this.selectorActiveItem);
        list.append(listItem);
      }
    }, {
      key: "renderQueueItem",
      value: function renderQueueItem(container, item) {
        var formatFullDateTime = ibexa.helpers.timezone.formatFullDateTime;
        var escapeHTML = ibexa.helpers.text.escapeHTML;
        var formatedAdditionDate = formatFullDateTime(item.additionDate * 1000);
        var list = container.querySelector(this.selectorQueueList);
        var isUnavailable = item.location.unavailable;
        var additionalClasses = isUnavailable ? this.classQueuedItemUnavailable : '';
        var template = list.dataset.queueTemplate;
        var contentName = escapeHTML(item.location.contentInfo.name);
        var itemId = escapeHTML(item.id);
        var locationId = escapeHTML(item.location.id);
        var additionDate = escapeHTML(item.additionDate);
        var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ item_id }}', itemId).replace('{{ location_id }}', locationId).replace('{{ airtime }}', additionDate).replace('{{ airtime_formatted }}', formatedAdditionDate).replace('{{ additional_classes }}', additionalClasses);
        var wrapper = doc.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', renderedItem);
        var listItem = wrapper.querySelector(this.selectorQueueItem);
        list.append(listItem);
      }
    }, {
      key: "removeNodeChildren",
      value: function removeNodeChildren(node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }, {
      key: "clearItems",
      value: function clearItems(container) {
        var activeList = container.querySelector(this.selectorActiveList);
        var queueList = container.querySelector(this.selectorQueueList);
        this.removeNodeChildren(activeList);
        this.removeNodeChildren(queueList);
      }
    }, {
      key: "manageNoItemsLabels",
      value: function manageNoItemsLabels(container, _ref5) {
        var activeItems = _ref5.activeItems,
          queuedItems = _ref5.queuedItems;
        var noActiveItems = !activeItems.length;
        var noQueuedItems = !queuedItems.length;
        container.querySelector(this.selectorNoActiveItemsInfo).classList.toggle(this.classNoActiveItemsInfoHidden, !noActiveItems);
        container.querySelector(this.selectorNoQueuedItemsInfo).classList.toggle(this.classNoQueuedItemsInfoHidden, !noQueuedItems);
      }
    }, {
      key: "renderItems",
      value: function renderItems(container, _ref6) {
        var active = _ref6.active,
          queue = _ref6.queue;
        this.clearItems(container);
        this.manageNoItemsLabels(container, {
          activeItems: active,
          queuedItems: queue
        });
        active.forEach(this.renderActiveItem.bind(this, container));
        queue.forEach(this.renderQueueItem.bind(this, container));
        this.attachEventsToLists(container);
        this.toggleLoadingScreen(container, false);
        ibexa.helpers.tooltips.parse(container);
      }
    }, {
      key: "disableDragOnActiveList",
      value: function disableDragOnActiveList(container) {
        var _this4 = this;
        var activeItems = container.querySelectorAll(this.selectorActiveItem);
        activeItems.forEach(function (activeItem) {
          activeItem.classList.add(_this4.classActiveItemDragDisabled);
        });
      }
    }, {
      key: "attachEventsToLists",
      value: function attachEventsToLists(container) {
        var activeList = container.querySelector(this.selectorActiveList);
        var activeListItems = activeList.querySelectorAll(this.selectorActiveItem);
        var queueListItems = container.querySelectorAll(this.selectorQueueItem);
        if (activeListItems.length > 1) {
          activeList.ondragover = this.onDragOverHandler.bind(this, container);
          activeListItems.forEach(this.attachEventsToDraggableItems.bind(this, container));
        } else {
          activeList.ondragover = null;
          this.disableDragOnActiveList(container);
        }
        activeList.ondrop = this.onDropHandler.bind(this, container);
        activeListItems.forEach(this.attachEventsToActiveListBtns.bind(this, container));
        queueListItems.forEach(this.attachEventsToQueueListBtns.bind(this, container));
      }

      /**
       * Initializes the schedule field event handlers
       *
       * @method init
       */
    }, {
      key: "init",
      value: function init() {
        var _this5 = this;
        var containers = doc.querySelectorAll(this.selectorContainer);
        containers.forEach(function (container) {
          var openUdwBtn = container.querySelector(_this5.selectorOpenUdwBtn);
          var model = JSON.parse(container.dataset.model);
          _this5.attachEventsToLists(container);
          _this5.attachEventsToLimitInput(container);
          _this5.renderItems(container, {
            active: model.lists.active,
            queue: model.lists.queue
          });
          openUdwBtn.addEventListener('click', _this5.openUdw.bind(_this5, container), false);
        });
      }
    }]);
    return BlockConfigScheduleFieldBase;
  }();
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js ***!
  \*************************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var SELECTOR_REVEAL = '.ibexa-pb-reveal-hide-date-time__reveal';
  var SELECTOR_HIDE = '.ibexa-pb-reveal-hide-date-time__hide';
  var SELECTOR_PICKER = '.ibexa-picker';
  var SELECTOR_PICKER_FORM_INPUT = '.ibexa-picker__form-input';
  var containerReveal = doc.querySelector(SELECTOR_REVEAL);
  var containerHide = doc.querySelector(SELECTOR_HIDE);
  if (!containerReveal || !containerHide) {
    return;
  }
  var pickerComponentReveal = containerReveal.querySelector('#block_configuration_since_custom_date').closest(SELECTOR_PICKER);
  var pickerComponentHide = containerHide.querySelector('#block_configuration_till_custom_date').closest(SELECTOR_PICKER);
  var getNowAccurateToMinutes = function getNowAccurateToMinutes() {
    var now = new Date();
    now.setSeconds(0);
    return now;
  };
  var getPickerSelectedDate = function getPickerSelectedDate(pickerComponent) {
    var pickerHiddenInput = pickerComponent.querySelector(SELECTOR_PICKER_FORM_INPUT);
    var inputValue = pickerHiddenInput.value;
    return inputValue ? new Date(inputValue * 1000) : null;
  };
  var getPickerFlatpickrInstance = function getPickerFlatpickrInstance(pickerComponent) {
    var pickerWidget = ibexa.helpers.objectInstances.getInstance(pickerComponent);
    return pickerWidget.flatpickrInstance;
  };
  var setPickerDate = function setPickerDate(pickerContainer, date) {
    var pickerInstance = getPickerFlatpickrInstance(pickerContainer);
    pickerInstance.setDate(date, true);
  };
  var setPickerMinDate = function setPickerMinDate(pickerContainer, minDate) {
    var pickerInstance = getPickerFlatpickrInstance(pickerContainer);
    pickerInstance.set('minDate', minDate);
  };
  var toggleCustomDateInput = function toggleCustomDateInput(customDateInput, disabled) {
    customDateInput.hidden = disabled;
  };
  var isRadioButton = function isRadioButton(eventTarget) {
    return eventTarget.type === 'radio';
  };
  var setNeverHideState = function setNeverHideState() {
    var neverOptionRadioButton = containerHide.querySelector('input[type=radio][value=never]');
    neverOptionRadioButton.checked = true;
    toggleCustomDateInput(pickerComponentHide, true);
  };
  var onRevealOptionChange = function onRevealOptionChange(_ref) {
    var target = _ref.target;
    if (!isRadioButton(target)) {
      return;
    }
    var customDateOptionSelected = target.value === 'custom_date';
    var nowAccurateToMinutes = getNowAccurateToMinutes();
    if (customDateOptionSelected) {
      setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
      setPickerDate(pickerComponentReveal, nowAccurateToMinutes);
      setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
    } else {
      var hideDate = getPickerSelectedDate(pickerComponentHide);
      if (hideDate && hideDate < nowAccurateToMinutes) {
        setNeverHideState();
      } else {
        setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
      }
    }
    toggleCustomDateInput(pickerComponentReveal, !customDateOptionSelected);
  };
  var onHideOptionChange = function onHideOptionChange(_ref2) {
    var target = _ref2.target;
    if (!isRadioButton(target)) {
      return;
    }
    var customDateOptionSelected = target.value === 'custom_date';
    if (customDateOptionSelected) {
      var _revealDate = getPickerSelectedDate(pickerComponentReveal);
      var _nowAccurateToMinutes = getNowAccurateToMinutes();
      var newMinHideDate = _revealDate < _nowAccurateToMinutes ? _nowAccurateToMinutes : _revealDate;
      setPickerMinDate(pickerComponentHide, newMinHideDate);
      setPickerDate(pickerComponentHide, newMinHideDate);
    }
    toggleCustomDateInput(pickerComponentHide, !customDateOptionSelected);
  };
  var onRevealCustomDateChange = function onRevealCustomDateChange(newDates) {
    if (!newDates.length) {
      return;
    }
    var newRevealDate = new Date(newDates[0]);
    var hideDate = getPickerSelectedDate(pickerComponentHide);
    var clearHideDate = newRevealDate > hideDate;
    setPickerMinDate(pickerComponentHide, newRevealDate);
    if (clearHideDate) {
      // flatpickr ignores minDate when only time has changed:
      // https://github.com/flatpickr/flatpickr/issues/591
      setPickerDate(pickerComponentHide, null);
    }
  };
  var flatpickrInstanceReveal = getPickerFlatpickrInstance(pickerComponentReveal);
  var isCustomDateSelectedReveal = containerReveal.querySelector('input[type=radio][value=custom_date]').checked;
  var isCustomDateSelectedHide = containerHide.querySelector('input[type=radio][value=custom_date]').checked;
  var revealDate = getPickerSelectedDate(pickerComponentReveal);
  var nowAccurateToMinutes = getNowAccurateToMinutes();
  flatpickrInstanceReveal.config.onChange.push(onRevealCustomDateChange);
  toggleCustomDateInput(pickerComponentReveal, !isCustomDateSelectedReveal);
  toggleCustomDateInput(pickerComponentHide, !isCustomDateSelectedHide);
  setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
  setPickerMinDate(pickerComponentHide, revealDate);
  containerReveal.addEventListener('click', onRevealOptionChange, false);
  containerHide.addEventListener('click', onHideOptionChange, false);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/block.config.attributes.group.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/block.config.attributes.group.js ***!
  \***************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var addNewGroupBtns = doc.querySelectorAll('.ibexa-btn--add-new-group');
  var removeGroupsBtns = doc.querySelectorAll('.ibexa-btn--remove-groups');
  var attributesGroups = doc.querySelectorAll('.ibexa-collapse--attributes-group');
  var removeGroup = function removeGroup(_ref) {
    var currentTarget = _ref.currentTarget;
    currentTarget.closest('.ibexa-collapse--attributes-group').remove();
  };
  var removeCheckedGroups = function removeCheckedGroups(event) {
    var selectedGroupCheckboxes = event.currentTarget.closest('.ibexa-block-attributes-group-wrapper').querySelectorAll('.ibexa-collapse--attributes-group .ibexa-collapse__header .ibexa-input--checkbox:checked');
    selectedGroupCheckboxes.forEach(function (selectedGroupCheckbox) {
      return selectedGroupCheckbox.closest('.ibexa-collapse--attributes-group').remove();
    });
    updateRemoveGroupsBtnState(event);
  };
  var updateRemoveGroupsBtnState = function updateRemoveGroupsBtnState(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var container = currentTarget.closest('.ibexa-block-attributes-group-wrapper');
    var selectedGroupCheckboxes = container.querySelectorAll('.ibexa-collapse--attributes-group .ibexa-input--checkbox:checked');
    var removeGroupsBtn = container.querySelector('.ibexa-btn--remove-groups');
    removeGroupsBtn.disabled = selectedGroupCheckboxes.length === 0;
  };
  addNewGroupBtns.forEach(function (addNewGroupBtn) {
    addNewGroupBtn.addEventListener('click', function (_ref3) {
      var currentTarget = _ref3.currentTarget;
      var groupsContainer = currentTarget.closest('.ibexa-block-attributes-group-wrapper').querySelector('.ibexa-block-attributes-group-wrapper__container');
      var nextGroupIndex = groupsContainer.dataset.nextGroupIndex;
      var template = groupsContainer.dataset.prototype.replaceAll('__name__', nextGroupIndex);
      var wrapper = doc.createElement('div');
      wrapper.insertAdjacentHTML('beforeend', template);
      var group = wrapper.querySelector('.ibexa-collapse--attributes-group');
      group.querySelector('.ibexa-btn--remove-group').addEventListener('click', removeGroup, false);
      group.querySelector('.ibexa-input--checkbox').addEventListener('change', updateRemoveGroupsBtnState, false);
      groupsContainer.append(group);
      groupsContainer.dataset.nextGroupIndex = parseInt(nextGroupIndex, 10) + 1;
      doc.body.dispatchEvent(new CustomEvent('ibexa-attributes-group-added', {
        detail: {
          container: group
        }
      }));
    }, false);
  });
  removeGroupsBtns.forEach(function (removeGroupsBtn) {
    removeGroupsBtn.addEventListener('click', removeCheckedGroups, false);
  });
  attributesGroups.forEach(function (attributesGroup) {
    var _attributesGroup$quer;
    var removeGroupBtn = attributesGroup.querySelector('.ibexa-btn--remove-group');
    if (removeGroupBtn) {
      removeGroupBtn.addEventListener('click', removeGroup, false);
    }
    (_attributesGroup$quer = attributesGroup.querySelector('.ibexa-input--checkbox')) === null || _attributesGroup$quer === void 0 ? void 0 : _attributesGroup$quer.addEventListener('change', updateRemoveGroupsBtnState, false);
  });
})(window, document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (doc) {
  var SELECTOR_CHECKBOX = '.ibexa-pb-block-checkbox-field__item input[type="checkbox"]';
  var SELECTOR_LABEL = '.ibexa-pb-block-checkbox-field__label';
  var CLASS_IS_CHECKED = 'is-checked';
  var checkboxes = doc.querySelectorAll(SELECTOR_CHECKBOX);
  var updateCheckboxState = function updateCheckboxState(_ref) {
    var currentTarget = _ref.currentTarget;
    currentTarget.closest(SELECTOR_LABEL).classList.toggle(CLASS_IS_CHECKED, currentTarget.checked);
  };
  var attachEvents = function attachEvents(checkbox) {
    return checkbox.addEventListener('change', updateCheckboxState, false);
  };
  checkboxes.forEach(attachEvents);
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref2) {
    var detail = _ref2.detail;
    var addedCheckboxes = detail.container.querySelectorAll(SELECTOR_CHECKBOX);
    addedCheckboxes.forEach(attachEvents);
  }, false);
})(window.document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js ***!
  \****************************************************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc, ibexa, Translator) {
  var _this = this;
  var SELECTOR_COLLECTION = '.ibexa-pb-collection';
  var SELECTOR_COLLECTION_ITEMS = '.ibexa-pb-collection__items';
  var SELECTOR_ITEM = '.ibexa-pb-collection-item';
  var SELECTOR_UDW_BTN = '.ibexa-btn--select-content';
  var SELECTOR_BLOCK_CONFIGURATION_VIEW_SELECT = '.ibexa-block-configuration-view-select';
  var collections = doc.querySelectorAll(SELECTOR_COLLECTION);
  var openUdw = function openUdw(itemsContainer, openUdwBtn, draggable, event) {
    event.preventDefault();
    var currentTarget = event.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var selectedView = doc.querySelector(SELECTOR_BLOCK_CONFIGURATION_VIEW_SELECT).value;
    var matchConfig = JSON.parse(doc.querySelector("#".concat(currentTarget.dataset.target)).dataset.match);
    var configForView = Object.assign(config, {
      cotfAllowedContentTypes: matchConfig[selectedView]
    });
    var title = Translator.trans( /*@Desc("Select content")*/'config_form.widgets.collection.udw.title', {}, 'page_builder');
    var selectedLocations = _toConsumableArray(itemsContainer.querySelectorAll(SELECTOR_ITEM)).map(function (item) {
      return item.dataset.id;
    });
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        title: title,
        multiple: true,
        onConfirm: addItems.bind(_this, itemsContainer, openUdwBtn, draggable),
        selectedLocations: selectedLocations
      }, configForView)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  var updateInputValue = function updateInputValue(itemsContainer, openUdwBtn) {
    var items = _toConsumableArray(itemsContainer.querySelectorAll(SELECTOR_ITEM));
    var input = doc.querySelector("#".concat(openUdwBtn.dataset.target));
    input.value = _toConsumableArray(items.map(function (item) {
      return item.dataset.id;
    })).join();
  };
  var attachEventsToSelectedItem = function attachEventsToSelectedItem(itemsContainer, openUdwBtn, item) {
    return item.querySelector('.ibexa-btn--trash').addEventListener('click', removeItem.bind(_this, itemsContainer, openUdwBtn), false);
  };
  var addItems = function addItems(itemsContainer, openUdwBtn, draggable, items) {
    var fragment = doc.createDocumentFragment();
    var template = itemsContainer.dataset.template;
    items.forEach(function (item) {
      var escapeHTML = ibexa.helpers.text.escapeHTML;
      var contentTypeName = ibexa.helpers.contentType.getContentTypeName(item.ContentInfo.Content.ContentTypeInfo.identifier);
      var contentName = escapeHTML(item.ContentInfo.Content.TranslatedName);
      var itemId = escapeHTML(item.id);
      var container = doc.createElement('div');
      var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ content_type_name }}', contentTypeName).replace('{{ id }}', itemId);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var listItem = container.querySelector(SELECTOR_ITEM);
      fragment.append(listItem);
    });
    itemsContainer.innerHTML = '';
    itemsContainer.append(fragment);
    updateInputValue(itemsContainer, openUdwBtn);
    draggable.reinit();
    ibexa.helpers.tooltips.parse(itemsContainer);
  };
  var removeItem = function removeItem(itemsContainer, openUdwBtn, event) {
    event.preventDefault();
    var item = event.currentTarget.closest(SELECTOR_ITEM);
    item.dispatchEvent(new CustomEvent('ibexa-drag-and-drop:start-removing'));
    item.dispatchEvent(new CustomEvent('ibexa-drag-and-drop:end-removing', {
      detail: {
        callback: function callback() {
          updateInputValue(itemsContainer, openUdwBtn);
        }
      }
    }));
  };
  var initCollection = function initCollection(collection) {
    var itemsContainer = collection.querySelector(SELECTOR_COLLECTION_ITEMS);
    var openUdwBtn = collection.querySelector(SELECTOR_UDW_BTN);
    var draggable = new CollectionDraggable({
      itemsContainer: itemsContainer,
      openUdwBtn: openUdwBtn,
      selectorItem: SELECTOR_ITEM,
      selectorPlaceholder: '.ibexa-pb-collection-placeholder'
    });
    draggable.init();
    openUdwBtn.addEventListener('click', openUdw.bind(_this, itemsContainer, openUdwBtn, draggable), false);
  };
  var CollectionDraggable = /*#__PURE__*/function (_global$ibexa$core$Dr) {
    "use strict";

    _inherits(CollectionDraggable, _global$ibexa$core$Dr);
    var _super = _createSuper(CollectionDraggable);
    function CollectionDraggable(config) {
      var _this2;
      _classCallCheck(this, CollectionDraggable);
      _this2 = _super.call(this, config);
      _this2.openUdwBtn = config.openUdwBtn;
      return _this2;
    }
    _createClass(CollectionDraggable, [{
      key: "attachEventHandlersToItem",
      value: function attachEventHandlersToItem(item) {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "attachEventHandlersToItem", this).call(this, item);
        attachEventsToSelectedItem(this.itemsContainer, this.openUdwBtn, item);
      }
    }, {
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "onDrop", this).call(this);
        updateInputValue(this.itemsContainer, this.openUdwBtn);
      }
    }]);
    return CollectionDraggable;
  }(global.ibexa.core.Draggable);
  collections.forEach(initCollection);
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    var addedCollections = detail.container.querySelectorAll(SELECTOR_COLLECTION);
    addedCollections.forEach(initCollection);
  }, false);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/dropdown.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/dropdown.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (doc, ibexa) {
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    var dropdowns = detail.container.querySelectorAll('.ibexa-dropdown:not(.ibexa-dropdown--custom-init)');
    dropdowns.forEach(function (dropdownContainer) {
      var dropdown = new ibexa.core.Dropdown({
        container: dropdownContainer
      });
      dropdown.init();
    });
  }, false);
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (doc, ibexa) {
  var BlockConfigEmbedFieldBase = ibexa.BlockConfigEmbedFieldBase;
  var embed = new BlockConfigEmbedFieldBase();
  embed.init();
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    embed.init(detail.container);
  }, false);
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var openUdw = function openUdw(config) {
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: config
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  ibexa.addConfig('richText.alloyEditor.callbacks.selectContent', openUdw, true);
  var containers = doc.querySelectorAll('.ibexa-data-source__richtext');
  containers.forEach(function (container) {
    var richtext = new ibexa.BaseRichText();
    richtext.init(container);
  });
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    var addedRichtextContainer = detail.container.querySelector('.ibexa-data-source__richtext');
    if (!addedRichtextContainer) {
      return;
    }
    var richtext = new ibexa.BaseRichText();
    richtext.init(addedRichtextContainer);
  }, false);
})(window, document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var BlockConfigScheduleFieldBase = ibexa.BlockConfigScheduleFieldBase;
  var scheduleField = new BlockConfigScheduleFieldBase();
  scheduleField.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (doc, ibexa) {
  var BlockConfigEmbedFieldBase = ibexa.BlockConfigEmbedFieldBase;
  var video = new BlockConfigEmbedFieldBase({
    previewFieldTypeIdentifier: 'ezmedia',
    openUDWSelector: '[data-open-udw-video]'
  });
  video.init();
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/personalized.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/personalized.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var scenarioSelect = doc.querySelector('.ibexa-personalization-block-config__select--scenario-list');
  var outputTypeSelect = doc.querySelector('.ibexa-personalization-block-config__select--output-type-list');
  if (!scenarioSelect || !outputTypeSelect) {
    return;
  }
  var outputTypeDropdownContainer = outputTypeSelect.closest('.ibexa-dropdown');
  var outputTypeDropdown = ibexa.helpers.objectInstances.getInstance(outputTypeDropdownContainer);
  var handleScenarioChange = function handleScenarioChange() {
    filterContentTypeDropdown();
    var outputTypeDropdownVisibleItems = outputTypeDropdown.itemsListContainer.querySelectorAll('.ibexa-dropdown__item:not(.ibexa-dropdown__item--hidden)');
    if (!outputTypeDropdownVisibleItems.length) {
      return;
    }
    var value = outputTypeDropdownVisibleItems[0].dataset.value;
    outputTypeDropdown.selectOption(value);
  };
  var filterContentTypeDropdown = function filterContentTypeDropdown() {
    var selectedScenarioValue = scenarioSelect.value;
    var selectedOption = scenarioSelect.querySelector("[value=\"".concat(selectedScenarioValue, "\"]"));
    var supportedOutputTypes = JSON.parse(selectedOption.dataset.supportedOutputTypes);
    var outputTypeDropdownItems = outputTypeDropdown.itemsListContainer.querySelectorAll('.ibexa-dropdown__item');
    outputTypeDropdownItems.forEach(function (outputTypeDropdownItem) {
      var value = outputTypeDropdownItem.dataset.value;
      var hideItem = !supportedOutputTypes.includes(value);
      outputTypeDropdownItem.classList.toggle('ibexa-dropdown__item--hidden', hideItem);
    });
  };
  filterContentTypeDropdown();
  scenarioSelect.addEventListener('change', handleScenarioChange, false);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/targeted.scenario.map.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/targeted.scenario.map.js ***!
  \******************************************************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc, ibexa, Translator) {
  var _this = this;
  var personalizations = doc.querySelectorAll('.ibexa-personalization');
  var updateInputValue = function updateInputValue(itemsContainer) {
    var inputValue = _toConsumableArray(itemsContainer.querySelectorAll('.ibexa-personalization__item')).map(function (item) {
      var segmentSelect = item.querySelector('.ibexa-personalization__select--segment');
      var segmentId = segmentSelect.value;
      var segmentOption = segmentSelect.querySelector("[value=\"".concat(segmentId, "\"]"));
      var segmentName = segmentOption.innerHTML.replace(/\s/g, '');
      var _segmentOption$datase = segmentOption.dataset,
        groupId = _segmentOption$datase.groupId,
        groupName = _segmentOption$datase.groupName;
      var scenarioSelect = item.querySelector('.ibexa-personalization__select--scenario');
      var scenarioReferenceCode = scenarioSelect.value;
      var scenarioName = scenarioSelect.querySelector("[value=\"".concat(scenarioReferenceCode, "\"]")).innerHTML;
      var outputTypeSelect = item.querySelector('.ibexa-personalization__select--output-type');
      var outputTypeValue = outputTypeSelect.value;
      var outputTypeOption = outputTypeSelect.querySelector("[value=\"".concat(outputTypeValue, "\"]"));
      return {
        group: {
          id: parseInt(groupId, 10),
          name: groupName
        },
        segment: {
          id: parseInt(segmentId, 10),
          name: segmentName
        },
        scenario: {
          referenceCode: scenarioReferenceCode,
          name: scenarioName
        },
        outputType: JSON.parse(outputTypeOption.dataset.outputType)
      };
    });
    itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input').value = JSON.stringify(inputValue);
  };
  var attachEventsToItem = function attachEventsToItem(itemsContainer, listItem) {
    listItem.querySelector('.ibexa-btn--trash').addEventListener('click', function () {
      if (itemsContainer.querySelectorAll('.ibexa-personalization__item').length > 1) {
        listItem.remove();
      }
      if (itemsContainer.querySelectorAll('.ibexa-personalization__item').length === 1) {
        itemsContainer.querySelector('.ibexa-btn--trash').setAttribute('disabled', 'disabled');
      }
      updateInputValue(itemsContainer);
    }, false);
  };
  var attachEventsToItemInputs = function attachEventsToItemInputs(itemsContainer, listItem) {
    var segmentsSelect = listItem.querySelector('.ibexa-personalization__select--segment');
    var scenariosSelect = listItem.querySelector('.ibexa-personalization__select--scenario');
    var outputTypesSelect = listItem.querySelector('.ibexa-personalization__select--output-type');
    segmentsSelect.addEventListener('change', updateInputValue.bind(_this, itemsContainer), false);
    outputTypesSelect.addEventListener('change', updateInputValue.bind(_this, itemsContainer), false);
    scenariosSelect.addEventListener('change', function (event) {
      var _outputTypesOptions$;
      var scenarioValue = event.currentTarget.value;
      var scenariosConfig = getScenariosConfig(itemsContainer);
      var outputTypesConfig = getOutputTypesConfig(itemsContainer);
      var outputTypeDropdownContainer = listItem.querySelector('.ibexa-dropdown--output-type');
      var outputTypesOptions = getOutputTypeOptions(outputTypesConfig, scenariosConfig, scenarioValue);
      renderDropdownSourceOptions(outputTypeDropdownContainer, outputTypesOptions);
      var outputTypeDropdown = ibexa.helpers.objectInstances.getInstance(outputTypeDropdownContainer);
      outputTypeDropdown.recreateOptions();
      outputTypeDropdown.selectOption((_outputTypesOptions$ = outputTypesOptions[0]) === null || _outputTypesOptions$ === void 0 ? void 0 : _outputTypesOptions$.id);
      updateInputValue.bind(_this, itemsContainer);
    }, false);
  };
  var getSegmentationsConfig = function getSegmentationsConfig(itemsContainer) {
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    var segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
    return segmentationsConfig.filter(function (group) {
      return group.segments.length;
    });
  };
  var getScenariosConfig = function getScenariosConfig(itemsContainer) {
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    return JSON.parse(sourceInput.dataset.scenarioList);
  };
  var getOutputTypesConfig = function getOutputTypesConfig(itemsContainer) {
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    return JSON.parse(sourceInput.dataset.outputTypeList);
  };
  var getOutputTypeOptions = function getOutputTypeOptions(outputTypesConfig, scenariosConfig, scenarioValue) {
    var selectedScenarioConfig = scenariosConfig.find(function (scenarioConfig) {
      return scenarioConfig.referenceCode === scenarioValue;
    });
    var filteredOutputTypesConfig = outputTypesConfig.filter(function (outputTypeConfig) {
      return selectedScenarioConfig.supportedOutputTypes.includes(outputTypeConfig.description);
    });
    if (!filteredOutputTypesConfig) {
      return [];
    }
    var options = filteredOutputTypesConfig.map(function (outputType, index) {
      return {
        id: index,
        name: "".concat(outputType.description, " ").concat(outputType.id ? "(".concat(outputType.id, ")") : ''),
        extraDatasets: [{
          name: 'outputType',
          value: JSON.stringify(outputType)
        }]
      };
    });
    return options;
  };
  var renderItem = function renderItem(itemsContainer, draggable, itemData) {
    var _segmentationsConfig$;
    var template = itemsContainer.dataset.template;
    var container = doc.createElement('ol');
    var segmentationsConfig = getSegmentationsConfig(itemsContainer);
    var itemConfig = (_segmentationsConfig$ = segmentationsConfig.find(function (category) {
      var _itemData$group;
      return category.id === ((_itemData$group = itemData.group) === null || _itemData$group === void 0 ? void 0 : _itemData$group.id);
    })) !== null && _segmentationsConfig$ !== void 0 ? _segmentationsConfig$ : segmentationsConfig[0];
    container.insertAdjacentHTML('beforeend', template);
    var listItem = container.querySelector('.ibexa-personalization__item');
    renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig);
    renderScenarioSelect(itemsContainer, listItem, getScenariosConfig(itemsContainer), itemData);
    renderOutputTypeSelect(itemsContainer, listItem, getOutputTypesConfig(itemsContainer), itemData);
    attachEventsToItem(itemsContainer, listItem);
    attachEventsToItemInputs(itemsContainer, listItem);
    itemsContainer.append(listItem);
    draggable.reinit();
  };
  var createSourceOption = function createSourceOption(_ref) {
    var optionTemplate = _ref.optionTemplate,
      groupId = _ref.groupId,
      groupName = _ref.groupName,
      value = _ref.value,
      label = _ref.label,
      extraDatasets = _ref.extraDatasets;
    var optionsContainer = doc.createElement('select');
    var optionRendered = optionTemplate.replace('{{ group_id }}', groupId).replace('{{ group_name }}', groupName).replace('{{ value }}', value).replace('{{ label }}', label);
    optionsContainer.insertAdjacentHTML('beforeend', optionRendered);
    var createdOption = optionsContainer.querySelector('option');
    extraDatasets.forEach(function (extraDataset) {
      createdOption.dataset[extraDataset.name] = extraDataset.value;
    });
    return createdOption;
  };
  var renderDropdownSourceOptions = function renderDropdownSourceOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var optionTemplate = sourceInput.dataset.optionTemplate;
    var selectOptionsFragment = doc.createDocumentFragment();
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupName = option.name;
        var groupId = option.id;
        option.subOptions.forEach(function (subOption) {
          selectOptionsFragment.append(createSourceOption({
            optionTemplate: optionTemplate,
            groupId: groupId,
            groupName: groupName,
            value: subOption.id,
            label: subOption.name,
            extraDatasets: subOption.extraDatasets || []
          }));
        });
      } else {
        selectOptionsFragment.append(createSourceOption({
          optionTemplate: optionTemplate,
          groupId: '',
          groupName: '',
          value: option.id,
          label: option.name,
          extraDatasets: option.extraDatasets || []
        }));
      }
    });
    sourceInput.innerHTML = '';
    sourceInput.append(selectOptionsFragment);
  };
  var renderDropdownListOptions = function renderDropdownListOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var itemsList = dropdownContainer.querySelector('.ibexa-dropdown__items-list');
    var itemsListFragment = doc.createDocumentFragment();
    var itemTemplate = itemsList.dataset.template;
    var dropdownGroupTemplate = sourceInput.dataset.dropdownGroupTemplate;
    itemsList.innerHTML = '';
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupsContainer = doc.createElement('ul');
        var renderedGroup = dropdownGroupTemplate.replace('{{ group_id }}', option.id).replaceAll('{{ group_name }}', option.name);
        groupsContainer.insertAdjacentHTML('beforeend', renderedGroup);
        var addedGroup = groupsContainer.querySelector('li.ibexa-dropdown__item-group:last-of-type');
        var groupItemsList = addedGroup.querySelector('.ibexa-dropdown__item-group-list');
        option.subOptions.forEach(function (subOption) {
          var itemRendered = itemTemplate.replace('{{ value }}', subOption.id).replaceAll('{{ label }}', subOption.name);
          groupItemsList.insertAdjacentHTML('beforeend', itemRendered);
        });
        itemsListFragment.append(groupsContainer.querySelector('li.ibexa-dropdown__item-group'));
      } else {
        var itemsContainer = doc.createElement('ul');
        var itemRendered = itemTemplate.replace('{{ value }}', option.id).replaceAll('{{ label }}', option.name);
        itemsContainer.insertAdjacentHTML('beforeend', itemRendered);
        itemsListFragment.append(itemsContainer.querySelector('li'));
      }
    });
    itemsList.append(itemsListFragment);
  };
  var renderSegmentSelect = function renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig) {
    var segmentDropdownContainer = listItem.querySelector('.ibexa-dropdown--segment');
    var options = segmentationsConfig.map(function (segmentationConfig) {
      return {
        id: segmentationConfig.id,
        name: segmentationConfig.name,
        subOptions: segmentationConfig.segments.map(function (segment) {
          return {
            id: segment.id,
            name: segment.name
          };
        }) || {}
      };
    });
    var optionToSelect = itemData.segment ? itemData.segment.id : itemConfig.segments[0].id;
    var segmentDropdown = new ibexa.core.Dropdown({
      container: segmentDropdownContainer
    });
    renderDropdownSourceOptions(segmentDropdownContainer, options);
    renderDropdownListOptions(segmentDropdownContainer, options);
    segmentDropdown.init();
    segmentDropdown.selectOption(optionToSelect);
  };
  var renderScenarioSelect = function renderScenarioSelect(itemsContainer, listItem, config, itemData) {
    var scenarioDropdownContainer = listItem.querySelector('.ibexa-dropdown--scenario');
    var options = config.map(function (scenario) {
      return {
        id: scenario.referenceCode,
        name: scenario.title
      };
    });
    var optionToSelect = itemData.scenario ? itemData.scenario.referenceCode : config[0].referenceCode;
    var scenarioDropdown = new ibexa.core.Dropdown({
      container: scenarioDropdownContainer
    });
    renderDropdownSourceOptions(scenarioDropdownContainer, options);
    renderDropdownListOptions(scenarioDropdownContainer, options);
    scenarioDropdown.init();
    scenarioDropdown.selectOption(optionToSelect);
  };
  var renderOutputTypeSelect = function renderOutputTypeSelect(itemsContainer, listItem, config, itemData) {
    var _optionToSelect$id;
    var scenarioSelect = listItem.querySelector('.ibexa-personalization__select--scenario');
    var outputTypeDropdownContainer = listItem.querySelector('.ibexa-dropdown--output-type');
    var options = getOutputTypeOptions(config, getScenariosConfig(itemsContainer), scenarioSelect.value);
    var outputType = itemData.outputType || {};
    var selectedOutputTypeLabel = outputType ? "".concat(outputType.description, " ").concat(outputType.id ? "(".concat(outputType.id, ")") : '') : '';
    var optionToSelect = options.find(function (option) {
      return option.name === selectedOutputTypeLabel;
    });
    var outputTypeDropdown = new ibexa.core.Dropdown({
      container: outputTypeDropdownContainer
    });
    renderDropdownSourceOptions(outputTypeDropdownContainer, options);
    renderDropdownListOptions(outputTypeDropdownContainer, options);
    outputTypeDropdown.init();
    if (!options.length) {
      return;
    }
    outputTypeDropdown.selectOption((_optionToSelect$id = optionToSelect === null || optionToSelect === void 0 ? void 0 : optionToSelect.id) !== null && _optionToSelect$id !== void 0 ? _optionToSelect$id : options[0].id);
  };
  var PersonalizationDraggable = /*#__PURE__*/function (_global$ibexa$core$Dr) {
    "use strict";

    _inherits(PersonalizationDraggable, _global$ibexa$core$Dr);
    var _super = _createSuper(PersonalizationDraggable);
    function PersonalizationDraggable() {
      _classCallCheck(this, PersonalizationDraggable);
      return _super.apply(this, arguments);
    }
    _createClass(PersonalizationDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(PersonalizationDraggable.prototype), "onDrop", this).call(this);
        updateInputValue(this.itemsContainer);
      }
    }]);
    return PersonalizationDraggable;
  }(global.ibexa.core.Draggable);
  personalizations.forEach(function (personalization) {
    var itemsContainer = personalization.querySelector('.ibexa-personalization__items');
    var draggable = new PersonalizationDraggable({
      itemsContainer: itemsContainer,
      selectorItem: '.ibexa-personalization__item',
      selectorPlaceholder: '.ibexa-personalization__item--placeholder'
    });
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    var inputValue = sourceInput.value ? JSON.parse(sourceInput.value) : [];
    var items = inputValue.length ? inputValue : [{}];
    var segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
    var allSegmentGroupsEmpty = segmentationsConfig.every(function (group) {
      return group.segments.length === 0;
    });
    var addItemBtn = personalization.querySelector('.ibexa-btn--add');
    if (!segmentationsConfig.length || allSegmentGroupsEmpty) {
      var noConfigurationMessage = Translator.trans( /*@Desc("No segments defined. Create Segments in the Admin panel to use this block.")*/'targeted_scenario_map.no_configuration', {}, 'ibexa_personalization');
      var item = "<li class=\"ibexa-personalization__item ibexa-personalization__item--no-configuration\">".concat(noConfigurationMessage, "</li>");
      var labels = personalization.querySelector('.ibexa-personalization__labels');
      itemsContainer.insertAdjacentHTML('beforeend', item);
      addItemBtn.disabled = true;
      labels.classList.add('ibexa-personalization__labels--hidden');
      return;
    }
    draggable.init();
    items.forEach(function (item) {
      return renderItem(itemsContainer, draggable, item);
    });
    updateInputValue(itemsContainer);
    if (items.length === 1) {
      var _item = personalization.querySelector('.ibexa-personalization__item');
      var deleteBtn = _item.querySelector('.ibexa-btn--trash');
      deleteBtn.setAttribute('disabled', 'disabled');
    }
    addItemBtn.addEventListener('click', function () {
      renderItem(itemsContainer, draggable, {});
      itemsContainer.querySelector('.ibexa-btn--trash').removeAttribute('disabled');
      updateInputValue(itemsContainer);
    }, false);
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js ***!
  \**************************************************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (global, doc, ibexa, Translator) {
  var _this = this;
  var segmentations = doc.querySelectorAll('.ibexa-segmentation');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var updateInputValue = function updateInputValue(itemsContainer) {
    var inputValue = _toConsumableArray(itemsContainer.querySelectorAll('.ibexa-segmentation__item')).map(function (item) {
      var segmentSelect = item.querySelector('.ibexa-segmentation__select--segment');
      var segmentId = segmentSelect.value;
      var segmentOption = segmentSelect.querySelector("[value=\"".concat(segmentId, "\"]"));
      var segmentName = segmentOption.innerHTML.replace(/\s/g, '');
      var contentTitle = item.querySelector('.ibexa-segmentation__content-title');
      var locationId = contentTitle.dataset.locationId;
      var locationName = contentTitle.innerHTML;
      var locationBreadcrumbs = item.querySelector('.ibexa-segmentation__content-breadcrumbs').innerHTML;
      return {
        segment: {
          id: parseInt(segmentId, 10),
          name: segmentName
        },
        content: {
          locationId: parseInt(locationId, 10),
          name: locationName,
          breadcrumbs: locationBreadcrumbs
        }
      };
    });
    itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input').value = JSON.stringify(inputValue);
  };
  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (val) {
      return val;
    });
    return pathArray.splice(1, pathArray.length - 2);
  };
  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "locations-by-path-string-".concat(idList.join('-')),
        "public": false,
        LocationQuery: {
          FacetBuilders: {},
          SortClauses: {
            SectionIdentifier: 'ascending'
          },
          Filter: {
            LocationIdCriterion: idList.join(',')
          },
          limit: 50,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ibexa/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans( /*@Desc("Cannot find children Locations with ID %idList%")*/'select_location.error', {
      idList: idList.join(',')
    }, 'page_builder');
    fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(function (data) {
      callback(data.View.Result.searchHits.searchHit);
    })["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var openUdw = function openUdw(itemsContainer, draggable, event) {
    event.preventDefault();
    var currentTarget = event.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var title = Translator.trans( /*@Desc("Select content")*/'config_form.widgets.segmentation.udw.title', {}, 'page_builder');
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        title: title,
        onConfirm: selectContent.bind(_this, itemsContainer, currentTarget)
      }, config)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  var selectContent = function selectContent(itemsContainer, openUdwButton, items) {
    var _items = _slicedToArray(items, 1),
      selectedContent = _items[0];
    var contentInfoWrapper = openUdwButton.closest('.ibexa-segmentation__content-wrapper').querySelector('.ibexa-segmentation__content-info');
    var contentTitle = contentInfoWrapper.querySelector('.ibexa-segmentation__content-title');
    openUdwButton.setAttribute('hidden', 'hidden');
    contentTitle.innerHTML = selectedContent.ContentInfo.Content.TranslatedName;
    contentTitle.dataset.locationId = selectedContent.id;
    findLocationsByIdList(removeRootFromPathString(selectedContent.pathString), function (locations) {
      var breadcrumbs = locations.map(function (location) {
        return location.value.Location.ContentInfo.Content.TranslatedName;
      }).join(' / ');
      contentInfoWrapper.querySelector('.ibexa-segmentation__content-breadcrumbs').innerHTML = breadcrumbs || '&nbsp;';
      updateInputValue(itemsContainer);
    });
    contentInfoWrapper.classList.remove('ibexa-segmentation__content-info--hidden');
  };
  var attachEventsToItem = function attachEventsToItem(itemsContainer, listItem, openUdwButton) {
    listItem.querySelector('.ibexa-btn--remove-content').addEventListener('click', function () {
      var contentTitle = listItem.querySelector('.ibexa-segmentation__content-title');
      openUdwButton.removeAttribute('hidden');
      listItem.querySelector('.ibexa-segmentation__content-info').classList.add('ibexa-segmentation__content-info--hidden');
      contentTitle.dataset.locationId = '';
      contentTitle.innerHTML = '';
      listItem.querySelector('.ibexa-segmentation__content-breadcrumbs').innerHTML = '';
      updateInputValue(itemsContainer);
    }, false);
    listItem.querySelector('.ibexa-btn--trash').addEventListener('click', function () {
      if (itemsContainer.querySelectorAll('.ibexa-segmentation__item').length > 1) {
        listItem.remove();
      }
      if (itemsContainer.querySelectorAll('.ibexa-segmentation__item').length === 1) {
        itemsContainer.querySelector('.ibexa-btn--trash').setAttribute('disabled', 'disabled');
      }
      updateInputValue(itemsContainer);
    }, false);
  };
  var getSegmentationsConfig = function getSegmentationsConfig(itemsContainer) {
    var segmentationsConfig = JSON.parse(itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input').dataset.segments);
    return segmentationsConfig.filter(function (group) {
      return group.segments.length;
    });
  };
  var renderItem = function renderItem(itemsContainer, draggable, itemData) {
    var template = itemsContainer.dataset.template;
    var container = doc.createElement('ol');
    var segmentationsConfig = getSegmentationsConfig(itemsContainer);
    var itemConfig = segmentationsConfig.find(function (category) {
      return itemData.group && category.id === itemData.group.id;
    }) || segmentationsConfig[0];
    container.insertAdjacentHTML('beforeend', template);
    var listItem = container.querySelector('.ibexa-segmentation__item');
    var openUdwButton = listItem.querySelector('.ibexa-btn--select-content');
    openUdwButton.addEventListener('click', openUdw.bind(_this, itemsContainer, draggable), false);
    renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig);
    if (itemData.content && itemData.content.locationId) {
      var contentInfoWrapper = openUdwButton.closest('.ibexa-segmentation__content-wrapper').querySelector('.ibexa-segmentation__content-info');
      var contentTitle = contentInfoWrapper.querySelector('.ibexa-segmentation__content-title');
      openUdwButton.setAttribute('hidden', 'hidden');
      contentTitle.innerHTML = itemData.content.name;
      contentTitle.dataset.locationId = itemData.content.locationId;
      contentInfoWrapper.querySelector('.ibexa-segmentation__content-breadcrumbs').innerHTML = itemData.content.breadcrumbs;
      contentInfoWrapper.classList.remove('ibexa-segmentation__content-info--hidden');
    }
    attachEventsToItem(itemsContainer, listItem, openUdwButton);
    itemsContainer.append(listItem);
    draggable.reinit();
  };
  var renderDropdownSourceOptions = function renderDropdownSourceOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var optionTemplate = sourceInput.dataset.optionTemplate;
    var selectOptionsFragment = doc.createDocumentFragment();
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupName = option.name;
        var groupId = option.id;
        option.subOptions.forEach(function (subOption) {
          var optionsContainer = doc.createElement('select');
          var optionRendered = optionTemplate.replace('{{ group_id }}', groupName).replace('{{ group_name }}', groupId).replace('{{ value }}', subOption.id).replace('{{ label }}', subOption.name);
          optionsContainer.insertAdjacentHTML('beforeend', optionRendered);
          selectOptionsFragment.append(optionsContainer.querySelector('option'));
        });
      } else {
        var optionsContainer = doc.createElement('select');
        var optionRendered = optionTemplate.replace('{{ group_id }}', '').replace('{{ group_name }}', '').replace('{{ value }}', option.id).replace('{{ label }}', option.name);
        optionsContainer.insertAdjacentHTML('beforeend', optionRendered);
        selectOptionsFragment.append(optionsContainer.querySelector('option'));
      }
    });
    sourceInput.innerHTML = '';
    sourceInput.append(selectOptionsFragment);
  };
  var renderDropdownListOptions = function renderDropdownListOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var itemsList = dropdownContainer.querySelector('.ibexa-dropdown__items-list');
    var itemsListFragment = doc.createDocumentFragment();
    var itemTemplate = itemsList.dataset.template;
    var dropdownGroupTemplate = sourceInput.dataset.dropdownGroupTemplate;
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupsContainer = doc.createElement('ul');
        var renderedGroup = dropdownGroupTemplate.replace('{{ group_id }}', option.id).replaceAll('{{ group_name }}', option.name);
        groupsContainer.insertAdjacentHTML('beforeend', renderedGroup);
        var addedGroup = groupsContainer.querySelector('li.ibexa-dropdown__item-group:last-of-type');
        var groupItemsList = addedGroup.querySelector('.ibexa-dropdown__item-group-list');
        option.subOptions.forEach(function (subOption) {
          var itemRendered = itemTemplate.replace('{{ value }}', subOption.id).replaceAll('{{ label }}', subOption.name);
          groupItemsList.insertAdjacentHTML('beforeend', itemRendered);
        });
        itemsListFragment.append(groupsContainer.querySelector('li.ibexa-dropdown__item-group'));
      } else {
        var itemsContainer = doc.createElement('ul');
        var itemRendered = itemTemplate.replace('{{ value }}', option.id).replaceAll('{{ label }}', option.name);
        itemsContainer.insertAdjacentHTML('beforeend', itemRendered);
        itemsListFragment.append(itemsContainer.querySelector('li'));
      }
    });
    itemsList.append(itemsListFragment);
  };
  var renderSegmentSelect = function renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig) {
    var segmentDropdownContainer = listItem.querySelector('.ibexa-dropdown--segment');
    var segmentSelect = listItem.querySelector('.ibexa-segmentation__select--segment');
    var options = segmentationsConfig.map(function (segmentationConfig) {
      return {
        id: segmentationConfig.id,
        name: segmentationConfig.name,
        subOptions: segmentationConfig.segments.map(function (segment) {
          return {
            id: segment.id,
            name: segment.name
          };
        }) || {}
      };
    });
    segmentSelect.addEventListener('change', updateInputValue.bind(_this, itemsContainer));
    renderDropdownSourceOptions(segmentDropdownContainer, options);
    renderDropdownListOptions(segmentDropdownContainer, options);
    var optionToSelect = itemData.segment ? itemData.segment.id : itemConfig.segments[0].id;
    var segmentDropdown = new ibexa.core.Dropdown({
      container: segmentDropdownContainer
    });
    segmentDropdown.init();
    segmentDropdown.selectOption(optionToSelect);
  };
  var SegmentationDraggable = /*#__PURE__*/function (_global$ibexa$core$Dr) {
    "use strict";

    _inherits(SegmentationDraggable, _global$ibexa$core$Dr);
    var _super = _createSuper(SegmentationDraggable);
    function SegmentationDraggable(config) {
      _classCallCheck(this, SegmentationDraggable);
      return _super.call(this, config);
    }
    _createClass(SegmentationDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(SegmentationDraggable.prototype), "onDrop", this).call(this);
        updateInputValue(this.itemsContainer);
      }
    }]);
    return SegmentationDraggable;
  }(global.ibexa.core.Draggable);
  segmentations.forEach(function (segmentation) {
    var itemsContainer = segmentation.querySelector('.ibexa-segmentation__items');
    var draggable = new SegmentationDraggable({
      itemsContainer: itemsContainer,
      selectorItem: '.ibexa-segmentation__item',
      selectorPlaceholder: '.ibexa-segmentation__item--placeholder'
    });
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    var inputValue = sourceInput.value ? JSON.parse(sourceInput.value) : [];
    var items = inputValue.length ? inputValue : [{}];
    var segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
    var allSegmentGroupsEmpty = segmentationsConfig.every(function (group) {
      return group.segments.length === 0;
    });
    var addItemBtn = segmentation.querySelector('.ibexa-btn--add');
    if (!segmentationsConfig.length || allSegmentGroupsEmpty) {
      var noConfigurationMessage = Translator.trans( /*@Desc("No segments defined. Create Segments in the Admin panel to use this block.")*/'targeted_content_map.no_configuration', {}, 'page_builder');
      var item = "<li class=\"ibexa-segmentation__item ibexa-segmentation__item--no-configuration\">".concat(noConfigurationMessage, "</li>");
      var labels = segmentation.querySelector('.ibexa-segmentation__labels');
      itemsContainer.insertAdjacentHTML('beforeend', item);
      addItemBtn.disabled = true;
      labels.classList.add('ibexa-segmentation__labels--hidden');
      return;
    }
    draggable.init();
    items.forEach(function (item) {
      return renderItem(itemsContainer, draggable, item);
    });
    updateInputValue(itemsContainer);
    if (items.length === 1) {
      var _item = segmentation.querySelector('.ibexa-segmentation__item');
      var deleteBtn = _item.querySelector('.ibexa-btn--trash');
      deleteBtn.setAttribute('disabled', 'disabled');
    }
    addItemBtn.addEventListener('click', function () {
      renderItem(itemsContainer, draggable, {});
      itemsContainer.querySelector('.ibexa-btn--trash').removeAttribute('disabled');
      updateInputValue(itemsContainer);
    }, false);
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/block.config.attributes.group.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/dropdown.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/targeted.scenario.map.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/personalized.js"), __webpack_exec__("./vendor/ibexa/segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js"));
/******/ }
]);