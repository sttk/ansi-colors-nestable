# [ansi-colors-nestable][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage Status][coverage-img]][coverage-url]


Enables nested coloring of texts using [ansi-colors](https://www.npmjs.com/package/ansi-colors).


## Install

```sh
$ npm install ansi-colors-nestable --save-dev
```


## Usage

```js
const nestableColors = require('ansi-colors-nestable');

const ansiColors = require('ansi-colors');

const blue = nestableColors('blue');
const red = nestableColors(ansi.red);

blue('This package ', red('nested'), ' coloring of texts');
```


## API

### <u>nestableColors(color) : function</u>

Returns a function which accepts multiple argument texts and colors each of them with *color*.
If an argument text is already colored, that color is given precedence.
As a result, this function make coloring nestable.

This function uses the package [ansi-colors][ansi-colors-url] inside for supporting Node.js >= v0.10.
So color names need to be supported by [ansi-colors][ansi-colors-url].


#### Parameters:

| Parameter | Type               | Description                     |
|:----------|:------------------:|:--------------------------------|
| *color*   | string or function | color name or coloring function |

#### Returns:

A coloring function which can colorize multiple argument texts.

**Type:** function

The API of this returned function is as follows:

* <u>***color*****(...texts): string**</u>

    **Parameters:**

    | Parameter | Type      | Description          |
    |:----------|:---------:|:---------------------|
    | *texts*   | string(s) | texts to be colored. |

    **Returned:**
    
    A colored and concatenated text
    
    **Type:** string
    


### <u>nestableColors.noColor(...texts) : string</u>

This function has the same API with a returned function from nestableColors and simply returned a concatenated text of argument strings without coloring.

#### Parameters:

| Parameter | Type      | Description          |
|:----------|:---------:|:---------------------|
| *texts*   | string(s) | texts to be colored. |

#### Returned:

A concatenated text without coloring.
    
**Type:** string

## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.


[repo-url]: https://github.com/sttk/ansi-colors-nested/
[npm-img]: https://img.shields.io/badge/npm-v0.1.1-blue.svg
[npm-url]: https://www.npmjs.org/package/ansi-colors-nested/
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses.MIT
[travis-img]: https://travis-ci.org/sttk/ansi-colors-nestable.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/ansi-colors-nestable
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/ansi-colors-nestable?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/ansi-colors-nestable
[coverage-img]: https://coveralls.io/repos/github/sttk/ansi-colors-nestable/badge.svg
[coverage-url]: https://coveralls.io/github/sttk/ansi-colors-nestable?branch=master
[ansi-colors-url]: https://www.npmjs.com/package/ansi-colors
