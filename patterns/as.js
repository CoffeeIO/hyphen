// Hyphenation patterns Assamese
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-as.tex
// Source www.ctan.org

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
    root.hyphenationPatternsAs = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
% GENERAL RULE
% Do not break either side of ZERO-WIDTH JOINER  (U+200D)
2‍2
% Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
1‌1
% Break before or after any independent vowel.
অ1
আ1
ই1
ঈ1
উ1
ঊ1
ঋ1
ৠ1
ঌ1
ৡ1
এ1
ঐ1
ও1
ঔ1
% Break after any dependent vowel, but not before.
া1
ি1
ী1
ু1
ূ1
ৃ1
ৄ1
ৢ1
ৣ1
ে1
ৈ1
ো1
ৌ1
2়2
ৗ1
% Break before or after any consonant.
1ক
1খ
1গ
1ঘ
1ঙ
1চ
1ছ
1জ
1ঝ
1ঞ
1ট
1ঠ
1ড
1ড়
1ঢ
1ঢ়
1ণ
1ত
1থ
1দ
1ধ
1ন
1প
1ফ
1ব
1ভ
1ম
1য
1য়
1র
1ল
1শ
1ষ
1স
1হ
% Do not break after khanda ta.
ৎ1
% Do not break before chandrabindu, anusvara, visarga, avagraha,
% nukta and au length mark.
2ঃ1
2ং1
2ঁ1
2ঽ1
% Do not break either side of virama (may be within conjunct).
2্2
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
