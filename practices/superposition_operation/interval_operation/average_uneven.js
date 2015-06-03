'use strict';

function average_uneven(collection) {
    // var sum = 0;
    // var count = 0;
    //
    // for (var i = 0; i < collection.length; i++) {
    //     if(collection[i] % 2 != 0) {
    //         sum += collection[i];
    //         count ++;
    //     }
    // }
    // var aver = sum / count;
    // return aver;
    var odd = filter(collection, function(n) {
        return n % 2 != 0;
    });

    var sum = reduce(odd, function(a, b) {
        return a + b;
    });
    return sum / odd.length;

}

function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}

function filter(collection, fun) {
    var result = [];
    each(collection, function(n) {
        if(fun(n)) {
            result.push(n);
        }
    });
    return result;
}

function reduce(collection, fun) {
    var result = [];

    each(collection, function(n, i) {
        if(i === 0) {
            result = collection[0];
        }else {
            result = fun(result, n);
        }
    });
    return result;
}








module.exports = average_uneven;
