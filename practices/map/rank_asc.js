'use strict';
var _ = require('../../mylodash.js');

var rank_asc = function(collection){
    return _.rank(collection, function(a, b){
        return a < b ;
    });
};

module.exports = rank_asc;
