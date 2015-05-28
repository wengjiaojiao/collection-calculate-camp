'use strict';

function get_intersection(collection_a, collection_b) {
    var collection = [];
    
    for(var i=0; i<collection_a.length; i++) {
        for(var j=0; j< collection_b.length; j++) {
            if(collection_a[i] === collection_b[j]) {
                collection.push(collection_a[i]);
            }
        }
    }
    var last = collection.pop();
    collection.unshift(last);
    return collection;
}

module.exports = get_intersection;











//var _ = require('../lodash/array');
//return  _.intersection(collection_b,collection_a);
