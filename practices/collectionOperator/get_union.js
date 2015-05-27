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

    return mix;
}

module.exports = get_union;




//return _.union(collection_a,collection_b);
