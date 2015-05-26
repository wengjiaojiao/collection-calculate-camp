function collect_same_elements(collection_a, object_b) {
    var _ = require("../../lodash");
    for(var i=0; i<collection_a.length; i++) {
        collection_a[i] = collection_a[i].key;
    }
    return _.intersection(collection_a,object_b.value);
}

module.exports = collect_same_elements;
