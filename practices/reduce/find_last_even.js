'use strict';

function find_last_even(collection) {
    var _  =require('../../mylodash.js');

    return _.last(collection,find);
}

function find(n){
    if( n % 2 == 0 ) {
        return true ;
    }
}

module.exports = find_last_even;
