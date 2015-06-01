'use strict';

function collect_min_number(collection) {
    var _ = require("../../mylodash.js");

    return _.reduce(collection,min);
}

function min(a,b) {
    return Math.min(a,b);
}
module.exports = collect_min_number;
