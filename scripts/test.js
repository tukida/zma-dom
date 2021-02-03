const { getDocument } = require('ssr-window');
const { $, addClass, width } = require('../package/zma-dom.cjs');

const document = getDocument();

$.fn.addClass = addClass;
$.fn.width = width;

$(document.body).addClass('test');
