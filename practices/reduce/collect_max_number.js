'use strict';

function collect_max_number(collection) {
    var _ = require("../../mytool/max.js");

    return _.max(collection);
}

module.exports = collect_max_number;
