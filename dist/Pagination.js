"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./pagination.css");

var _arrowRightIcon = require("./assets/arrowRightIcon.svg");

var _arrowLeftIcon = require("./assets/arrowLeftIcon.svg");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pagination = function Pagination(_ref) {
  var _ref$defaultData = _ref.defaultData,
      defaultData = _ref$defaultData === void 0 ? [] : _ref$defaultData,
      setPost = _ref.setPost,
      _ref$line = _ref.line,
      line = _ref$line === void 0 ? 5 : _ref$line,
      _ref$showNumber = _ref.showNumber,
      showNumber = _ref$showNumber === void 0 ? 10 : _ref$showNumber,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "" : _ref$type;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      originPostData = _useState2[0],
      setOriginPostData = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      postData = _useState4[0],
      setPostData = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var pagelength = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    pagelength.current = Math.ceil(defaultData.length / line);
    var originArray = [];
    var useArray = [];

    for (var i = 0; i < pagelength.current; i++) {
      originArray.push(i + 1);
    }

    for (var j = 0; j < pagelength.current; j++) {
      useArray.push(j + 1);

      if (pagelength.current < showNumber) {
        if (j + 1 === pagelength.current) {
          break;
        }
      } else {
        if (j + 1 === showNumber) {
          break;
        }
      }
    }

    setOriginPostData(originArray);
    setPostData(useArray);
  }, [defaultData.length, line, showNumber]);

  var prevClick = function prevClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % showNumber === 0) {
        setPostData(originPostData.slice(currentPage - showNumber - 1, currentPage - 1));
      }
    }
  };

  var nextClick = function nextClick() {
    if (originPostData.length > currentPage) {
      setCurrentPage(currentPage + 1);

      if (currentPage % showNumber === 0) {
        setPostData(originPostData.slice(currentPage, currentPage + showNumber));
      }
    }
  };

  (0, _react.useEffect)(function () {
    setPost(defaultData.slice((currentPage - 1) * line, currentPage * line));
  }, [currentPage, defaultData, line, setPost]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rp-container ".concat(type)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rp-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rp-arrow rp-prevArrow",
    onClick: prevClick
  }, /*#__PURE__*/_react.default.createElement(_arrowLeftIcon.ReactComponent, {
    width: 7,
    height: 14,
    stroke: '#333'
  })), /*#__PURE__*/_react.default.createElement("article", {
    className: "rp-pageNumberContainer"
  }, postData && postData.map(function (post, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rp-pageNumber ".concat(post === currentPage ? 'active' : ''),
      key: "page-".concat(index),
      onClick: function onClick() {
        setCurrentPage(post);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, post));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "rp-arrow rp-nextArrow",
    onClick: nextClick
  }, /*#__PURE__*/_react.default.createElement(_arrowRightIcon.ReactComponent, {
    width: 7,
    height: 14,
    stroke: '#333'
  }))));
};

var _default = Pagination;
exports.default = _default;