'use strict';

function get_union(collection_a, collection_b) {
    for(var i = 0; i < collection_a.length; i++) {
        for(var j = 0; j < collection_b.length; j++) {
            if(collection_a[i] === collection_b[j]) {
                collection_b.splice(j,1);
            }
        }
    }
    var mix = collection_a.concat(collection_b);
    
    for (var a = 0; a < collection_b.length; a++) {
        collection_a[collection_a.length] = collection_b[a];
    }
    return mix;
}

module.exports = get_union;




//return _.union(collection_a,collection_b);
