'use strict';

function choose_multiples_of_three(collection) {
    var time = [];

    for(var i = 0; i < collection.length; i++) {
        if(collection[i] % 3 == 0) {
            time.push(collection[i]);
        }
    }
    return time;
}

module.exports = choose_multiples_of_three;









/*return _.remove(collection,function(n){
    return n % 3 == 0;
});
*/
