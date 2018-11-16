"use strict";

var _Tree = _interopRequireDefault(require("./Tree"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.listen('4000', function () {
  console.log('listening in port 4000');
});
app.get('/', function (req, res) {
  var tree = new _Tree.default();
  res.send(tree);
});