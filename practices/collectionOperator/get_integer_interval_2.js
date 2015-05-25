'use strict';

function get_integer_interval_2(number_a, number_b) {
    var _ = require('../lodash/array');
    var collection = [];

    if(number_a <= number_b) {
        for(var i=number_a; i<=number_b; i++) {
            collection.push(i);
        }
    }else {
        for(var j=number_a; j>=number_b; j--) {
            collection.push(j);
        }
    }
    var result = _.remove(collection,function(n){
        return n % 2 == 0;
        }
    )
    return result;
}

module.exports = get_integer_interval_2;
