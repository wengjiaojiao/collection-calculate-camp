'use strict';
var _ = require('../../mylodash.js');

var rank_desc = function(collection){
    return _.rank(collection , true);
}


module.exports = rank_desc;
