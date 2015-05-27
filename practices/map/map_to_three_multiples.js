'use strict';
var map_to_three_multiples = function(collections){
    var map = [];
    for(var i = 0; i < collections.length; i++) {
        collections[i] = collections[i] * 3;
        map.push(collections[i]);
    }
    return map;
}
module.exports = map_to_three_multiples;
