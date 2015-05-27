'use strict';

function collect_max_number(collection) {
    var max = 0;

    for (var i = 0; i < collection.length; i++) {
        if(collection[max] < collection[i]) {
            max = i;
        }
    }
    return collection[max];
}

module.exports = collect_max_number;
