'use strict';

function collect_max_number(collection) {
    var _ = require("../../mylodash.js");

    return _.reduce(collection,max);
}

function max(a,b) {
    return Math.max(a,b);
}
module.exports = collect_max_number;
