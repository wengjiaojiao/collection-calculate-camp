'use strict';

function compare_collections(collection_a, collection_b) {
    var _ = require('../lodash/lang');
    return _.isEqual(collection_a,collection_b);
}

module.exports = compare_collections;
