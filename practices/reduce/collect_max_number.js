'use strict';

function collect_max_number(collection) {
    var _ = require("../../mylodash.js");

    return _.max(collection);
}

module.exports = collect_max_number;
