'use strict';
var calculate_average = function(collection){
    var even = [];

    for (var i = 0; i < collection.length; i++) {
        if((i+1) % 2 == 0) {
            even[even.length] = collection[i];
        }
    }
    var sum = 0;

    for (var j = 0; j < even.length; j++) {
        sum += even[j];
    }
    return sum/even.length;
};
module.exports = calculate_average;
