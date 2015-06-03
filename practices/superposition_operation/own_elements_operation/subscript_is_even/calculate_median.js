'use strict';
var calculate_median = function(collection){
    var median;
    var num_array = filter(collection, function(n, i) {
        return i % 2 === 0;
    });

    var middle = parseInt(num_array.length / 2);

    if(num_array.length % 2 ==0) {
        median = (num_array[middle] + num_array[middle - 1])/2;
    }else {
        median = num_array[middle];
    }
    return median;
};

function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

function filter(collection, fun) {
    var result = [];

    each(collection, function(n, i) {
        if(fun(n, i)) {
            result.push(n);
        }
    });
    return result;
}
module.exports = calculate_median;
