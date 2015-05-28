'use strict';

function compute_median(collection) {
    var number;

    for (var i = 0; i < collection.length; i++) {
        for (var j = i + 1; j < collection.length; j++) {
            if(collection[i] > collection[j]) {
                number = collection[i];
                collection[i] = collection[j];
                collection[j] = number;
            }
        }
    }

    var median;
    var middle = parseInt(collection.length / 2);
    
    if(collection.length % 2 == 0 ) {
        median = (collection[middle] + collection[middle-1]) / 2;
    }else {
        median = collection[middle];
    }

    return median;
}

module.exports = compute_median;
