'use strict';
var _ =require("../../mylodash.js");

function choose_common_elements(collection_a, collection_b) {
    var result = [];

     _.filter(collection_a,function(n) {
        _.foreach(collection_b,function(m) {
            if(n === m) {
                result.push(n);
            }
        })
    })
    return result;
}

module.exports = choose_common_elements;





//return _.intersection(collection_a,collection_b);
