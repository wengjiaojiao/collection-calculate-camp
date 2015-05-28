'use strict';

function get_intersection(collection_a, collection_b) {
    var collection = [];

    for(var i=0; i<collection_b.length; i++) {
        for(var j=0; j< collection_a.length; j++) {
            if(collection_b[i] === collection_a[j]) {
                collection.push(collection_b[i]);
            }
        }
    }

    return collection;
}

module.exports = get_intersection;











//var _ = require('../lodash/array');
//return  _.intersection(collection_b,collection_a);
