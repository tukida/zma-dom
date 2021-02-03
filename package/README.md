# ZMA-DOM

### Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API

ZMA-DOM - is the default DOM manipulation library built-in [ZMA](https://h5.zalo.me/zma/). It utilizes most edge and high-performance methods for DOM manipulation. You don’t need to learn something new, its usage is very simple because it has the same syntax as well known jQuery library with support of the most popular and widely used methods and jQuery-like chaining.

See [ZMA Dom](https://h5.zalo.me/zma/docs/zma-dom.html) documentation for usage examples and available methods.

## Installation

ZMA-DOM can be installed with NPM:

```
npm install zma-dom --save
```

## Usage

```js
// import Dom7 and methods you need
import { $, addClass, removeClass, toggleClass, on } from 'zma-dom';

// install methods
$.fn.addClass = addClass;
$.fn.removeClass = removeClass;
$.fn.toggleClass = toggleClass;
$.fn.on = on;

// use
$('p').addClass('custom-paragraph');

$('p').on('click', function() {
  $(this).toggleClass('custom-paragraph');
});
```

## Documentation

See [full documenation here](https://h5.zalo.me/zma/docs/zma-dom.html)
