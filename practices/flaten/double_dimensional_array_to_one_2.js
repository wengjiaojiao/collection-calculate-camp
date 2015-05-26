'use strict';

function double_to_one(collection) {

    var _ = require("../lodash/array");
    var expand = _.flatten(collection);
    
    return _.uniq(expand);
}

module.exports = double_to_one;
