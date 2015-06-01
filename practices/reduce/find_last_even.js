'use strict';

function find_last_even(collection) {
    var _  =require('../../mylodash.js');

    var last = _.filter(collection,function(n){
        if(n % 2 == 0) {
            return n;
        }
    })

    return _.reduce(last,function(a,b){
        return b;
    })
}
module.exports = find_last_even;
