'use strict';
var is_exist_element = function(collection,element){
    var even_array = [];

    for (var i = 0; i < collection.length; i++) {
        if(i % 2 == 0) {
            even_array[even_array.length] = collection[i];
        }
    }
    for (var j = 0; j < even_array.length; j++) {
        if(even_array[j] == element) {
            return true;
        }
    }
    for (var j = 0; j < even_array.length; j++) {
        if(even_array[j] != element) {
            return false;
        }
    }
}
module.exports = is_exist_element;
