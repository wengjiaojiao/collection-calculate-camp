'use strict';

function choose_multiples_of_three(collection) {
    var _ = require('../../mylodash.js');

    return _.filter(collection, three);
}

function three(n){
    return n % 3 == 0;
}
module.exports = choose_multiples_of_three;









/*return _.remove(collection,function(n){
    return n % 3 == 0;
});
*/
