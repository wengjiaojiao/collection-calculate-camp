'use strict';
function find_first_even(collection) {
    var _  =require('../../mylodash.js');

    return _.first(collection,find);
}

function find(n){
    if( n % 2 == 0 ) {
        return true ;
    }
}
module.exports = find_first_even;
