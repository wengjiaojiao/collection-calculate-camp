'use strict';

function collect_max_number(collection) {
    var _ = require('../lodash/collection')
    return _.max(collection);
}

module.exports = collect_max_number;
