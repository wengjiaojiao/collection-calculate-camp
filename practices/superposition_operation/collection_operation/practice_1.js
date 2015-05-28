'use strict';

function hybrid_operation(collection) {
    var temp = [];

    for (var i = 0; i < collection.length; i++) {
            temp.push(collection[i] * 3 + 2);
    }
    var sum = 0;

    for (var j = 0; j < temp.length; j++) {
        sum += temp[j];
    }
    return sum;
}

module.exports = hybrid_operation;
