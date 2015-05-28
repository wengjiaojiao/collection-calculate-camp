'use strict';

function even_to_letter(collection) {
    var temp = [];

    for (var i = 0; i < collection.length; i++) {
        if( collection[i] % 2 ===0) {
            temp[temp.length] = collection[i];
        }
    }
    var map = [];

    for(var i = 0; i < temp.length; i++) {
        var letter = String.fromCharCode(temp[i]+96);
        map[map.length] = letter;
    }
    return map;
}

module.exports = even_to_letter;
