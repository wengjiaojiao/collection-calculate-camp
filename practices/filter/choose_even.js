'use strict';

function choose_even(collection) {
    var even = [];

    for(var i =0; i<collection.length; i++) {
        if(collection[i] % 2 == 0) {
            even.push(collection[i]);
        }
    }
    return even;
}

module.exports = choose_even;
















/*var evens = _.remove(collection, function(n) {
return n % 2 == 0;
});

return evens;
*/
