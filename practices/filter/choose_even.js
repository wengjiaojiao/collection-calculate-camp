'use strict';

function choose_even(collection) {
    var _ = require('../../mylodash.js');

    return _.filter(collection,evens);
}

function evens(n) {
    if(n % 2 == 0) {
        return true;
    }
}
module.exports = choose_even;
















/*var evens = _.remove(collection, function(n) {
return n % 2 == 0;
});

return evens;
*/
