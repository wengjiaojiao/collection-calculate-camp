function collect_same_elements(collection_a, collection_b) {
    var _ = require("../../lodash");

    collection_b = _.flatten(collection_b);
    return _.intersection(collection_a,collection_b);
}

module.exports = collect_same_elements;
