'use strict';
function map_to_even(collection){
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        result.push(map(collection[i]));
    }
    return result;
}

function map(i) {
    return i * 2 ;
}




module.exports = map_to_even;
