'use strict';

var number_map_to_word = function(collection){
    var _ = require('../../mylodash.js');
    return _.map(collection,map_word);
}

function map_word(n) {
    return String.fromCharCode(n+96);
}
module.exports = number_map_to_word;
