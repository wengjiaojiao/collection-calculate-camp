'use strict';
var calculate_median = function(collection){
    var median;
    var num_array = [];

    for (var i = 0; i < collection.length; i++) {
        if(i % 2 == 0) {
            num_array[num_array.length] = collection[i];
        }
    }
    var middle = parseInt(num_array.length / 2);

    if(num_array.length % 2 ==0) {
        median = (num_array[middle] + num_array[middle - 1])/2;
    }else {
        median = num_array[middle];
    }
    return median;
};
module.exports = calculate_median;
