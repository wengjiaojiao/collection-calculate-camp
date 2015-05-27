'use strict';

function compute_average(collection) {
    var sum = 0,aver;

    for (var i = 0; i < collection.length; i++) {
        sum += collection[i];
    }
    return aver = sum / collection.length;
}

module.exports = compute_average;
