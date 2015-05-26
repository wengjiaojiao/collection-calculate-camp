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
    var even = [];
    
    for(var k=0; k<collection.length; k++) {
        if(collection[k] % 2 == 0) {
            even.push(collection[k]);
        }
    }

    return even;
}

module.exports = get_integer_interval_2;





//var result = _.remove(collection,function(n){
//    return n % 2 == 0;
//    }
//)
