'use strict';
var map_to_four_multiples_add_one = function(collection){
    var _ = require("../../mylodash.js");

    return _.map(collection,four);
}

function four(n) {
    return n * 4 + 1;
 }
module.exports = map_to_four_multiples_add_one;
