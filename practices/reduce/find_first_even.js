'use strict';

function find_first_even(collection) {
    var _ =require("../lodash/collection");

    return _.find(collection,function(n) {
        return n % 2 ==0;
    })
}

module.exports = find_first_even;
