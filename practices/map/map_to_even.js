'use strict';
function map_to_even(collection){
    var map = [];
    for(var i = 0; i < collection.length; i++) {
        collection[i] = collection[i] * 2;
        map.push(collection[i]);
    }
    return map;
}

module.exports = map_to_even;




/*return _.map(collection,twotimes);

function twotimes(n) {
return n * 2;
}
*/
