'use strict';
var even_group_calculate_average = function(collection){
    var even_array = [];

    for (var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 == 0) {
            even_array[even_array.length] = collection[i];
        }
    }
    var one = [],two = [],three = [];

    for (var j = 0; j < even_array.length; j++) {
        if(even_array[j] / 10 < 1) {
            one[one.length] = even_array[j];
        }else if(even_array[j] / 10 >= 1 && even_array[j] / 10 <10) {
            two[two.length] = even_array[j];
        }else {
            three[three.length] = even_array[j];
        }
    }
    
};
module.exports = even_group_calculate_average;
