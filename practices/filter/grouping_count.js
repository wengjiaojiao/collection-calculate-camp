'use strict';

function grouping_count(collection) {

    var _ = require("../lodash/collection");

    return _.countBy(collection,function(n) {
        return Math.floor(n);
    })
}

module.exports = grouping_count;
