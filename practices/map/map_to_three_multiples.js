'use strict';
var map_to_three_multiples = function(collections){
    var _ = require("../../mylodash.js");

    return _.map(collections,three);
}

function three(n) {
    return n * 3;
}
module.exports = map_to_three_multiples;
