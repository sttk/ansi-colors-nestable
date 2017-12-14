'use strict';

var expect = require('chai').expect;
var ansiColors = require('ansi-colors');

var colors = require('..');

describe('ansi-colors-nestable', function() {

  describe('nestable colors', function() {

    it('Should color a text by color name', function() {
      Object.keys(ansiColors).forEach(function(name) {
        expect(colors(name)('abc')).to.equal(ansiColors[name]('abc'));
      });
    });

    it('Should color texts by color name', function() {
      Object.keys(ansiColors).forEach(function(name) {
        expect(colors(name)('abc ', 'def ', 'ghi')).to.equal(
          ansiColors[name]('abc ') +
          ansiColors[name]('def ') +
          ansiColors[name]('ghi'));
      });
    });

    it('Should color a text by color function', function() {
      Object.keys(ansiColors).forEach(function(name) {
        var colorFn = ansiColors[name];
        expect(colors(colorFn)('abc')).to.equal(ansiColors[name]('abc'));
      });
    });

    it('Should colors texts by color function', function() {
      Object.keys(ansiColors).forEach(function(name) {
        var colorFn = ansiColors[name];
        expect(colors(colorFn)('abc ', 'def ', 'ghi')).to.equal(
          ansiColors[name]('abc ') +
          ansiColors[name]('def ') +
          ansiColors[name]('ghi'));
      });
    });

    it('Should enable nest coloring', function() {
      var blue = colors('blue');
      var red = colors('red');
      expect(blue('aaa', red('bbb'), 'ccc')).to.equal(
        ansiColors.blue('aaa') +
        ansiColors.blue(ansiColors.red('bbb')) +
        ansiColors.blue('ccc'));
    });

  });

  describe('no color', function() {

    it('Should not color a text by color name', function() {
      Object.keys(ansiColors).forEach(function(name) {
        expect(colors.noColor('abc')).to.equal('abc');
      });
    });

    it('Should not color texts by color name', function() {
      Object.keys(ansiColors).forEach(function(name) {
        expect(colors.noColor('abc ', 'def ', 'ghi')).to.equal(
          'abc ' +
          'def ' +
          'ghi');
      });
    });

    it('Should not color a text by color function', function() {
      Object.keys(ansiColors).forEach(function(name) {
        var colorFn = ansiColors[name];
        expect(colors.noColor('abc')).to.equal('abc');
      });
    });

    it('Should colors texts by color function', function() {
      Object.keys(ansiColors).forEach(function(name) {
        var colorFn = ansiColors[name];
        expect(colors.noColor('abc ', 'def ', 'ghi')).to.equal(
          'abc ' +
          'def ' +
          'ghi');
      });
    });

  });

  describe('Illegal argument', function() {
    it('Should not color when arg type is neither a string nor a function',
    function() {
      expect(colors(undefined)('abc')).to.equal('abc');
      expect(colors(null)('abc')).to.equal('abc');
      expect(colors(true)('abc')).to.equal('abc');
      expect(colors(false)('abc')).to.equal('abc');
      expect(colors(0)('abc')).to.equal('abc');
      expect(colors(123)('abc')).to.equal('abc');
      expect(colors([])('abc')).to.equal('abc');
      expect(colors({})('abc')).to.equal('abc');
    });

    it('Should not color when arg type is neither a string nor a function',
    function() {
      expect(colors('')('abc')).to.equal('abc');
      expect(colors('RED')('abc')).to.equal('abc');
    });
  });
});
