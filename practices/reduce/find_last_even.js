'use strict';

function find_last_even(collection) {
    var _ = require("../lodash/collection");

    return _.findLast(collection,function(n) {
        return n % 2 ==0;
    })
}

module.exports = find_last_even;
