'use strict';

function compute_average(collection) {
    var _ = require("../lodash/math");
    var sum = _.sum(collection);
    return sum/collection.length; 
}

module.exports = compute_average;
