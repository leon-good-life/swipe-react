'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SwipeReact = {};

SwipeReact.xDown = null;
SwipeReact.yDown = null;

SwipeReact.configuration = {};

SwipeReact.config = function (config) {
  var options = ['right', 'left', 'up', 'down'];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var option = _step.value;

      if (config.hasOwnProperty(option)) {
        SwipeReact.configuration[option] = config[option];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

SwipeReact.events = {
  onTouchStart: function onTouchStart(e) {
    SwipeReact.xDown = e.touches[0].clientX;
    SwipeReact.yDown = e.touches[0].clientY;
  },
  onTouchMove: function onTouchMove(e) {

    if (SwipeReact.xDown === null || SwipeReact.yDown === null) {
      return;
    }

    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;

    var xDiff = SwipeReact.xDown - xUp;
    var yDiff = SwipeReact.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (SwipeReact.configuration.hasOwnProperty('left')) {
          SwipeReact.configuration.left();
        }
      } else {
        if (SwipeReact.configuration.hasOwnProperty('right')) {
          SwipeReact.configuration.right();
        }
      }
    } else {
      if (yDiff > 0) {
        if (SwipeReact.configuration.hasOwnProperty('up')) {
          SwipeReact.configuration.up();
        }
      } else {
        if (SwipeReact.configuration.hasOwnProperty('down')) {
          SwipeReact.configuration.down();
        }
      }
    }
    SwipeReact.xDown = null;
    SwipeReact.yDown = null;
  }
};

exports.default = SwipeReact;