'use strict';

var number_map_to_word = function(collection){
    var map = [];

    for(var i = 0; i < collection.length; i++) {
        var letter = String.fromCharCode(collection[i]+96);
        map.push(letter);
    }
    return map;
}

module.exports = number_map_to_word;
