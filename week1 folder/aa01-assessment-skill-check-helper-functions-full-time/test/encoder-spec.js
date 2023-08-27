const assert = require('assert').strict;

const { wordEncoder, sentenceEncoder } = require('../problems/encoder.js');

describe('wordEncoder() return', function() {

    it("returns a string", function () {
        assert.strictEqual(typeof wordEncoder('a', 5), 'string');
    });
});

describe('wordEncoder() with 0 offset', function() {
    it("should return the string unchanged if a 0 offset is passed", function () {
        assert.strictEqual(wordEncoder("a", 0), "a");
        assert.strictEqual(wordEncoder("banana", 0), "banana");
    });
});

describe('wordEncoder() function basic', function() {

    it("can properly encode a single word with appropriate offsetIndex", function () {
        assert.strictEqual(wordEncoder("a", 1), "b");
        assert.strictEqual(wordEncoder("hi", 2), "jk");
    });

});

describe('wordEncoder() function advanced', function() {

    it("can properly encode a single word with appropriate offsetIndex", function () {
        assert.strictEqual(wordEncoder("a", 5), "f");
        assert.strictEqual(wordEncoder("word", 2), "yqtf");
    })

});

describe('sentenceEncoder() function', function() {

    it("can properly encode a sentence using helper function", function () {
        assert.strictEqual(sentenceEncoder("the input string"), "wkh nsuzy yzxotm");
        assert.strictEqual(sentenceEncoder("one more"), "rqh qsvi");
        assert.strictEqual(sentenceEncoder("how about a longer one"), "krz fgtzy b rutmkx rqh");
    })

});

describe('edge cases', function() {

    it("can address potential edge cases in inputs", function () {
        assert.strictEqual(sentenceEncoder("end of the alphabet"), "hqg qh wkh itxpijmb");
        assert.strictEqual(sentenceEncoder("CaSing IssUeS"), "IgYotm OyyAkY");
        assert.strictEqual(sentenceEncoder("WhatIfTheStringIsLongerThanTheAlphabet"),
        "ItmfUrFtqEfduzsUeXazsqdFtmzFtqMxbtmnqf");
    })

});
