(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsKn = factory();
  }
}(this, function () {
  var patterns = [], hyphenation = [];
// title: Hyphenation patterns for Kannada
// copyright: Copyright (C) 2016 Santhosh Thottingal
// notice: This file is part of the hyph-utf8 package.
//     See http://www.hyphenation.org/tex for more information.
// source: https://github.com/santhoshtr/hyphenation/
// language:
//     name: Kannada
//     tag: kn
// authors:
//   -
//     name: Santhosh Thottingal
//     contact: santhosh.thottingal (at) gmail.com
// licence:
//     - This file is available under any of the following licences:
//     -
//         name: MIT
//         url: https://opensource.org/licenses/MIT
//         text: >
//             Permission is hereby granted, free of charge, to any person
//             obtaining a copy of this software and associated documentation
//             files (the "Software"), to deal in the Software without
//             restriction, including without limitation the rights to use,
//             copy, modify, merge, publish, distribute, sublicense, and/or sell
//             copies of the Software, and to permit persons to whom the
//             Software is furnished to do so, subject to the following
//             conditions:
//
//             The above copyright notice and this permission notice shall be
//             included in all copies or substantial portions of the Software.
//
//             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//             EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//             OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//             NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//             HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//             WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//             FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//             OTHER DEALINGS IN THE SOFTWARE.
//     -
//         name: LGPL
//         version: 3
//         or_later: true
//         url: http://www.gnu.org/licenses/lgpl.html
//     -
//         name: GPL
//         version: 3
//         or_later: true
//         url: http://www.gnu.org/licenses/gpl.html
//
var patterns = [
// GENERAL RULE
// Do not break either side of ZERO-WIDTH JOINER  (U+200D)
"2‍2",
// Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
"1‌1",
// Break before or after any independent vowel.
"ಅ1",
"ಆ1",
"ಇ1",
"ಈ1",
"ಉ1",
"ಊ1",
"ಋ1",
"ೠ1",
"ಌ1",
"ೡ1",
"ಎ1",
"ಏ1",
"ಐ1",
"ಒ1",
"ಓ1",
"ಔ1",
// Break after any dependent vowel, but not before.
"ಾ1",
"ಿ1",
"ೀ1",
"ು1",
"ೂ1",
"ೃ1",
"ೄ1",
"ೆ1",
"ೇ1",
"ೈ1",
"ೊ1",
"ೋ1",
"ೌ1",
// Break before or after any consonant.
"1ಕ",
"1ಖ",
"1ಗ",
"1ಘ",
"1ಙ",
"1ಚ",
"1ಛ",
"1ಜ",
"1ಝ",
"1ಞ",
"1ಟ",
"1ಠ",
"1ಡ",
"1ಢ",
"1ಣ",
"1ತ",
"1ಥ",
"1ದ",
"1ಧ",
"1ನ",
"1ಪ",
"1ಫ",
"1ಬ",
"1ಭ",
"1ಮ",
"1ಯ",
"1ರ",
"1ಱ",
"1ಲ",
"1ಳ",
"1ೞ",
"1ವ",
"1ಶ",
"1ಷ",
"1ಸ",
"1ಹ",
// Do not break before anusvara, visarga, avagraha,
// length mark and ai length mark.
"2ಂ1",
"2ಃ1",
"2ಽ1",
"2ೕ1",
"2ೖ1",
// Do not break either side of virama (may be within conjunct).
"2್2",
""];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
}));
