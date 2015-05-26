'use strict';

function calculate_elements_sum(collection) {
    var _ = require('../lodash/math');
    return _.sum(collection);
}

module.exports = calculate_elements_sum;
