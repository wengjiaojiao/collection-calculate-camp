'use strict';
var rank_asc = function(collection){
    var _ = require("../lodash/collection");
    var result= _.sortBy(collection);
    
    return result.reverse();
};

module.exports = rank_asc;
