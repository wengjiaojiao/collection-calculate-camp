'use strict';

function calculate_elements_sum(collection) {
    var _ = require('../../mylodash.js');

    return _.reduce(collection,sum);
}

function sum (a,b) {
    return a+b;
}

module.exports = calculate_elements_sum;
