'use strict';

function calculate_elements_sum(collection, element) {
    var _ = require("../../mylodash.js");
    var result = 0;
    var exist = true;
     _.foreach(collection,function(n,i){
        if(n === element && exist) {
            result = i;
            exist =false;
        }
    });
    return result;
}


module.exports = calculate_elements_sum;



//return _.indexOf(collection,element);
