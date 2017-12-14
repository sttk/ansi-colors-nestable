'use strict';

var ansiColors = require('ansi-colors');

function nestableColors(color) {
  if (typeof color === 'string') {
    color = ansiColors[color];
  }

  if (typeof color !== 'function') {
    return noColor;
  }

  return function(/* ...texts */) {
    var str = '';
    for (var i = 0, n = arguments.length; i < n; i++) {
      str += color(arguments[i]);
    }
    return str;
  }
}

function noColor(/* ...texts */) {
  var str = '';
  for (var i = 0, n = arguments.length; i < n; i++) {
    str += arguments[i];
  }
  return str;
}

nestableColors.noColor = noColor;

module.exports = nestableColors;
