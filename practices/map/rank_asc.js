'use strict';
var _ = require('../../mylodash.js');

var rank_asc = function(collection){
    return _.rank(collection, false);
};

module.exports = rank_asc;
