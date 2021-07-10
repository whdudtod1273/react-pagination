import React, { useState, useRef, useEffect } from 'react';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var RightArrowIcon = function RightArrowIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      stroke = _ref.stroke;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 60 110",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Vector",
    d: "M55 55.0539L5.10769 105M54.8923 54.9461L5 5",
    stroke: stroke,
    "stroke-width": "10",
    "stroke-linecap": "round"
  }));
};

var LeftArrowIcon = function LeftArrowIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      stroke = _ref.stroke;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 60 110",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Vector",
    d: "M5 54.9461L54.8923 5M5.10768 55.0539L55 105",
    stroke: stroke,
    "stroke-width": "10",
    "stroke-linecap": "round"
  }));
};

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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      originPostData = _useState2[0],
      setOriginPostData = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      postData = _useState4[0],
      setPostData = _useState4[1];

  var _useState5 = useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var pagelength = useRef();
  useEffect(function () {
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

  useEffect(function () {
    setPost(defaultData.slice((currentPage - 1) * line, currentPage * line));
  }, [currentPage, defaultData, line, setPost]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rp-container ".concat(type)
  }, /*#__PURE__*/React.createElement("div", {
    className: "rp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rp-arrow rp-prevArrow",
    onClick: prevClick
  }, /*#__PURE__*/React.createElement(LeftArrowIcon, {
    width: 7,
    height: 14,
    stroke: '#333'
  })), /*#__PURE__*/React.createElement("article", {
    className: "rp-pageNumberContainer"
  }, postData && postData.map(function (post, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "rp-pageNumber ".concat(post === currentPage ? 'active' : ''),
      key: "page-".concat(index),
      onClick: function onClick() {
        setCurrentPage(post);
      }
    }, /*#__PURE__*/React.createElement("span", null, post));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rp-arrow rp-nextArrow",
    onClick: nextClick
  }, /*#__PURE__*/React.createElement(RightArrowIcon, {
    width: 7,
    height: 14,
    stroke: '#333'
  })))), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n            .rp-container{display: block;width: 100%;}\n            .rp-container .rp-wrap{display: flex;flex: 1;justify-content: center;}\n            .rp-container .rp-wrap .rp-arrow{width: 30px;height: 30px;display: flex;justify-content: center;align-items: center;cursor: pointer;color:#424242;\n              -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;\n            }\n            .rp-container .rp-wrap .rp-prevArrow{}\n            .rp-container .rp-wrap .rp-nextArrow{}\n            .rp-container .rp-wrap .rp-pageNumberContainer{}\n            .rp-container .rp-wrap .rp-pageNumberContainer .rp-pageNumber{float: left;cursor: pointer;width: 30px;height: 30px;display: flex;justify-content: center;align-items: center;padding: 0 10px;\n              -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;\n            }\n            .rp-container .rp-wrap .rp-pageNumberContainer .rp-pageNumber span{color:#424242;font-size: 15px;display: inline-block;line-height: 1;}\n            .rp-container .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active span{font-weight: bold;}\n\n            /* roundBox */\n            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber{border: 1px solid #e0e0e0;border-radius: 5px; padding: 0;margin: 0 5px;}\n            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber span{color: #757575;}\n            .rp-container.roundEdge .rp-wrap .rp-arrow{border: 1px solid #e0e0e0;border-radius: 5px;}\n            .rp-container.roundEdge .rp-wrap .rp-arrow.rp-prevArrow{margin-right: 5px;}\n            .rp-container.roundEdge .rp-wrap .rp-arrow.rp-nextArrow{margin-left: 5px;}\n            /* active */\n            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active{background-color: #424242;border: 1px solid #424242;}\n            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active span{color: #fff;}\n\n            /* round */\n            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber{border: 1px solid #e0e0e0;border-radius: 50%; padding: 0;margin: 0 5px;}\n            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber span{color: #757575;}\n            .rp-container.round .rp-wrap .rp-arrow{border: 1px solid #e0e0e0;border-radius: 50%;}\n            .rp-container.round .rp-wrap .rp-arrow.rp-prevArrow{margin-right: 5px;}\n            .rp-container.round .rp-wrap .rp-arrow.rp-nextArrow{margin-left: 5px;}\n            /* active */\n            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active{background-color: #424242;border: 1px solid #424242;}\n            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active span{color: #fff;}\n          "));
};

export { Pagination };
//# sourceMappingURL=Pagination.js.map
