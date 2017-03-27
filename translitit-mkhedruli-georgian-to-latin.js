(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
global.Translitit = require('./lib/translitit-mkhedruli-georgian-to-ipa');

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/translitit-mkhedruli-georgian-to-ipa":2}],2:[function(require,module,exports){
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

},{"translitit-engine":3}],3:[function(require,module,exports){
/* global module */
'use strict';

/**
 * Generate a transliteration function from a given transliteration
 * table object.
 *
 * @param [Object] table
 * @return [Function] function that transliterates its input
 */
module.exports = function (table) {
    var keys, specialCases, singleLetter,
        searchPattern, lookupTable,
        i = 0
    ;

    // If no transliteration table is given, return a function that will
    // return the input.
    if (! table) {
        return function (subject) {
            return subject;
        };
    }


    // Function used by the resulting replace function
    lookupTable = function (input) {
        return input in table ? table[input] : input;
    };


    // Fetch and sort the keys in the translitteration table object, to
    // ensure the longest keys in the table is first in the array. Then
    // it will find the position of the first one-letter index and split
    // the keys into single letter indexes and longer 'specialCases.'
    keys = Object.keys(table).sort(function (a,b) {
        return b.length - a.length;
    });

    for (; keys[i]; i += 1) {
        if (keys[i].length === 1) {
            break; // first one-letter index has been found, break out
        }
    }

    specialCases = keys.slice(0,i).join('|');
    singleLetter = keys.slice(i).join('');
    keys = undefined; // reset keys


    // Compile a regular expression using the keys found in the given
    // translitteration object.
    //
    // specialCases are joined together with a pipe; `|`
    // singleLetters joined together and wrapped in square brackets so
    // that the resulting regular expressing have the following format:
    //
    //     /aa|bb|cc|[abc]/g
    //
    // This should create a working regular expression that will look
    // for every key in the transliteration table.
    searchPattern = new RegExp([
        specialCases,
        singleLetter ? '[' + singleLetter + ']' : ''
    ].join(singleLetter && specialCases ? '|' : ''), 'g');


    /**
     * Search for occurrences of entries in the translitteration table
     * and replace these with their corresponding values.
     *
     * @param [String] subject to transliterate.
     * @return [String] transliterated string
     */
    return function (subject) {
        // input sanity check, we expect a string
        if (typeof subject !== 'string') {
            // Try to run toString, if it exist
            if (subject && typeof subject.toString === 'function') {
                subject = subject.toString();
            }
            // Return an empty string on empty and falsy input values
            else {
                return '';
            }
        }

        // Replace letters in the input using the lookup table and the
        // compiled search pattern.
        return subject.replace(searchPattern, lookupTable);
    };
};
},{}]},{},[1])