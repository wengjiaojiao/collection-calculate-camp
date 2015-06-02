'use strict';

function compute_average(collection) {
    var _ = require("../../mylodash.js");

    return _.reduce(collection,sum)/collection.length;
}
function sum(a,b) {
    return a + b;
}
module.exports = compute_average;
