'use strict';

function hybrid_operation_to_uneven(collection) {
    // var temp = [];
    //
    // for (var i = 0; i < collection.length; i++) {
    //     if(collection[i] % 2 != 0) {
    //         temp[temp.length] = collection[i] * 3 + 2;
    //     }
    // }
    // return temp;

    var _ =require('../../../mylodash.js');

    var temp = _.filter(collection,function(n) {
        return n % 2 != 0;
    });
    return _.map(temp,function(n) {
        return n * 3 + 2;
    })
}

module.exports = hybrid_operation_to_uneven;
