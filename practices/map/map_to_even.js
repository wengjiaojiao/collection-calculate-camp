'use strict';
function map_to_even(collection){
    var _ = require('../../mylodash.js');

    return _.map(collection,twotimes);
}

function twotimes(n) {
    return n * 2 ;
}

module.exports = map_to_even;
