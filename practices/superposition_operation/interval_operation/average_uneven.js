'use strict';

function average_uneven(collection) {
    var sum = 0;
    var count = 0;

    for (var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 != 0) {
            sum += collection[i];
            count ++;
        }
    }
    var aver = sum / count;
    return aver;
}

module.exports = average_uneven;
