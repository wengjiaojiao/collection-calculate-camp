'use strict';

function grouping_count(collection) {
    var number = {};
    var _ = require("../../mylodash.js");

    _.foreach(collection,function(n){
        if(!! number[n]) {
            number[n] ++;
        }else {
            number[n] = 0;
            number[n] ++;
        }
    })
     return number;
 }

module.exports = grouping_count;





//   number[collection[i]]=number[collection[i]]||0;
//   number[collection[i]]++;


/*return _.countBy(collection,function(n) {
    return Math.floor(n);
});
*/
