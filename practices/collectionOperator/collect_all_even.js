'use strict';

function collect_all_even(collection) {
    var _ = require('../../mylodash.js');

    return _.filter(collection,even);
}

function even(n) {
    if (n % 2 ==0) {
        return n;
    }
}
module.exports = collect_all_even;
