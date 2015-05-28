'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    for(var i = 0; i < collection_a.length; i++) {
        for(var j = 0; j < collection_b.length; j++) {
            if(collection_a[i] === collection_b[j]) {
                collection_a.splice(i,1);
                collection_b.splice(j,1);
            }
        }
    }
    for (var a = 0; a < collection_b.length; a++) {
        collection_a[collection_a.length] = collection_b[a];
    }
    return collection_a;
}

module.exports = choose_no_common_elements;


//return _.difference(collection_a,collection_b);
