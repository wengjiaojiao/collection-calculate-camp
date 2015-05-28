'use strict';
var rank_asc = function(collection){
    var number ;

    for (var i = 0; i < collection.length; i++) {
        for (var j = i + 1; j < collection.length; j++) {
            if(collection[i] < collection[j]) {
                number = collection[i];
                collection[i] = collection[j];
                collection[j] = number;
            }
        }
    }
    return collection;
};

module.exports = rank_asc;
