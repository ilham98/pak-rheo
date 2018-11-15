"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conditions = _interopRequireDefault(require("./conditions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Node = function Node(_arr) {
  var _this = this;

  var _arr_before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  _classCallCheck(this, Node);

  _defineProperty(this, "getResult", function (arr) {
    var arr_before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    arr_before.push(arr);

    var arr_new = _conditions.default.map(function (condition) {
      var first = condition.first,
          second = condition.second;

      if (arr[0] >= first.min && arr[0] <= first.max && arr[1] >= second.min && arr[1] <= second.max) {
        var array = [arr];
        array[0] = arr[0] + first.val;
        array[1] = arr[1] + second.val;

        if (typeof first.mt === 'number') {
          array[0] = first.mt;
        } else if (first.mt === 'half') {
          array[0] = array[0] / 2;
        } else if (first.mt === 'trans') {
          if (array[0] + array[1] >= 3) {
            array[0] = array[0] - (3 - array[1]);
            array[1] = 3;
          }
        } else if (first.mt === 'trans_all') {
          if (array[0] + array[1] <= 3) {
            array[0] = 0;
            array[1] = array[0] + array[1];
          }
        }

        if (typeof second.mt === 'number') {
          array[1] = second.mt;
        } else if (second.mt === 'half') {
          array[1] = array[1] / 2;
        } else if (second.mt === 'trans') {
          if (array[0] + array[1] >= 4) {
            array[0] = 4;
            array[1] = array[1] - (4 - array[0]);
          }
        } else if (second.mt === 'trans_all') {
          if (array[0] + array[1] <= 4) {
            array[0] = array[0] + array[1];
            array[1] = 0;
          }
        }

        if (!_this.isExist(array, arr_before)) {
          return new Node(array, arr_before);
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    }).filter(function (result) {
      return result !== undefined;
    });

    return arr_new;
  });

  _defineProperty(this, "isExist", function (arr, arr_before) {
    arr_before = arr_before.filter(function (arr_bf) {
      return arr_bf[0] === arr[0] && arr_bf[1] === arr[1];
    });

    if (arr_before.length > 0) {
      return true;
    } else {
      return false;
    }
  });

  this.first = _arr[0];
  this.second = _arr[1];
  this.nodes = [];
  this.nodes = this.getResult([this.first, this.second], _arr_before);

  _arr_before.pop();
};

var _default = Node;
exports.default = _default;