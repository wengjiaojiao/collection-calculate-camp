'use strict';

function collect_min_number(collection) {
    var min = 0;

    for (var i = 0; i < collection.length; i++) {
        if(collection[min] > collection[i]) {
            min = i;
        }
    }
    return collection[min];
}

module.exports = collect_min_number;
