'use strict';
var rank_desc = function(collection){
    var _ = require("../lodash/collection");

    return _.sortBy(collection);
  };

module.exports = rank_desc;
