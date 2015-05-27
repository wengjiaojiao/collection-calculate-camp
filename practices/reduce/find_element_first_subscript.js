'use strict';

function calculate_elements_sum(collection, element) {
    for (var i = 0; i < collection.length; i++) {
        if(collection[i] === element) {
            return i;
            break;
        }
    }
}

module.exports = calculate_elements_sum;



//return _.indexOf(collection,element);
