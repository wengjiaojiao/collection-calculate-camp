'use strict';
var number_map_to_word = function(collection){
    var _ = require("../lodash/collection");

    return _.map(collection,transform);
};
function transform(n) {
    return String.fromCharCode(n+96);
}
module.exports = number_map_to_word;
