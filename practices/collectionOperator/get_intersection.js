'use strict';

function get_intersection(collection_a, collection_b) {
    var _ = require('../lodash/array');
    var same = _.intersection(collection_a,collection_b);
    var last = same.pop();

    same.unshift(last);
    return same;
}

module.exports = get_intersection;
