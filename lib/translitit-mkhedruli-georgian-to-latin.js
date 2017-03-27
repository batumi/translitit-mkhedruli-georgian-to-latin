/* global require module */
'use strict';

(function(exports) {

  module.exports = require('translitit-engine')({
    'ი': 'i',
    'ე': 'e',
    'ა': 'a',
    'ო': 'o',
    'უ': 'u',

    'პ': 'p',
    'ფ': 'p’',
    'ბ': 'b',
    'ვ': 'v',
    'მ': 'm',

    'ტ': 't',
    'თ': 't’',
    'დ': 'd',
    'ნ': 'n',
    'ს': 's',
    'ზ': 'z',
    'წ': 'ts',
    'ც': 'ts’',
    'ძ': 'dz',
    'ჯ': 'dz',
    'ჩ': 'ch’',
    'ჭ': 'ch',
    'შ': 'sh',
    'ჟ': 'zh',
    'რ': 'r',
    'ლ': 'l',

    'კ': 'k',
    'ქ': 'k’',
    'გ': 'g',
    'ღ': 'gh',
    'ხ': 'x',

    'ყ': 'q’',
    'ჰ': 'h'
  });
})(typeof exports === 'undefined' ? this.Translitit = {} : exports);
