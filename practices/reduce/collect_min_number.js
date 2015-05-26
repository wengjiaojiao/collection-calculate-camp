'use strict';

function collect_min_number(collection) {
    var _ = require('../lodash/collection');

    return _.min(collection);
}

module.exports = collect_min_number;
