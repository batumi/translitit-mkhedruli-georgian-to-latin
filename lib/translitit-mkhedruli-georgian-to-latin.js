/* global require module */
'use strict';

(function(exports) {

  module.exports = require('translitit-engine')({
    'ი': 'i',
    'ე': 'e',
    'ა': 'a',
    'ო': 'o',
    'უ': 'u',

    'პ': 'pʼ',
    'ფ': 'pʰ',
    'ბ': 'b',
    'ვ': 'v',
    'მ': 'm',

    'ტ': 'tʼ',
    'თ': 'tʰ',
    'დ': 'd',
    'ნ': 'n',
    'ს': 's',
    'ზ': 'z',
    'წ': 'tsʼ',
    'ც': 'tsʰ',
    'ძ': 'dz',
    'ჯ': 'dʒ',
    'ჩ': 'tʃʰ',
    'ჭ': 'tʃʼ',
    'შ': 'ʃ',
    'ჟ': 'ʒ',
    'რ': 'r',
    'ლ': 'l',

    'კ': 'kʼ',
    'ქ': 'kʰ',
    'გ': 'g',
    'ღ': 'ɣ',
    'ხ': 'x',

    'ყ': 'q’',
    'ჰ': 'h',

    'chemi': 'ჩემი'
  });
})(typeof exports === 'undefined' ? this.Translitit = {} : exports);
