'use strict';

function hybrid_operation_to_uneven(collection) {
    var temp = [];

    for (var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 != 0) {
            temp[temp.length] = collection[i] * 3 + 5;
        }
    }
    var sum = 0;

    for (var j = 0; j < temp.length; j++) {
        sum += temp[j];
    }
    return sum;
}

module.exports = hybrid_operation_to_uneven;
