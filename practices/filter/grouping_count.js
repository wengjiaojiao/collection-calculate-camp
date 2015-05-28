'use strict';

function grouping_count(collection) {
    var number = {};

    for(var i = 0;i < collection.length;i++) {
         if(!! number[collection[i]]) {
             number[collection[i]] ++;
         }else {
             number[collection[i]] = 0;
             number[collection[i]] ++;
         }
     }
     return number;
 }

module.exports = grouping_count;





//   number[collection[i]]=number[collection[i]]||0;
//   number[collection[i]]++;


/*return _.countBy(collection,function(n) {
    return Math.floor(n);
});
*/
