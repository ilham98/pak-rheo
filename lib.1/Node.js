"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsdom = _interopRequireWildcard(require("jsdom"));

var _conditions = _interopRequireDefault(require("./conditions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var document = new _jsdom.JSDOM("...").window.document;

var Node = function Node(_val) {
  var _this = this;

  var _range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _arr_before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  _classCallCheck(this, Node);

  _defineProperty(this, "getResult", function (val, range) {
    var arr_before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    arr_before.push({
      val: val,
      range: range
    });

    var new_arr = _conditions.default.map(function (condition) {
      var arr_new = null;

      if (val !== condition.val) {
        arr_new = null;
      } else {
        arr_new = condition.canGoTo.map(function (go) {
          if (!_this.isExist(go.val, arr_before)) return new Node(go.val, go.range, arr_before);else return null;
        }).filter(function (arr) {
          return arr !== null;
        });
      }

      return arr_new;
    }).filter(function (arr) {
      return arr !== null;
    });

    return new_arr[0];
  });

  _defineProperty(this, "isExist", function (val, arr_before) {
    arr_before = arr_before.filter(function (arr_bf) {
      return val === arr_bf.val;
    });

    if (arr_before.length > 0) {
      return true;
    } else {
      return false;
    }
  });

  this.val = _val;
  this.range = _range;
  this.nodes = [];
  this.nodes = this.getResult(_val, _range, _arr_before);

  _arr_before.pop();
};

var _default = Node;
exports.default = _default;