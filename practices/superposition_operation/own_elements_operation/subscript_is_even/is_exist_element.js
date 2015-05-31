'use strict';
var is_exist_element = function(collection,element){
    var even_array = [];
    var _ = require('../../../../mylodash.js');

    for (var i = 0; i < collection.length; i++) {
        if(i % 2 == 0) {
            even_array[even_array.length] = collection[i];
        }
    }
    return _.exist(even_array,element);

}

module.exports = is_exist_element;
