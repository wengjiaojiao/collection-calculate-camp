'use strict';

function hybrid_operation(collection) {
    var _ = require("../../../mylodash.js");
    var temp = _.map(collection,function(n) {
        return n * 3 + 2 ;
    });

    return _.reduce(temp,function(a,b) {
        return a + b ;
    });
}

module.exports = hybrid_operation;
