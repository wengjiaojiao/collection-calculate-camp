'use strict';
var even_asc_odd_desc = function(collection){
    var odd = [],even = [];

    for (var i = 0; i < collection.length; i++) {
        if( collection[i] % 2 === 0 ) {
            even[even.length] = collection[i];
        }else {
            odd[odd.length] = collection[i];
        }
    }
    var number;

    for (var a = 0; a < collection.length; a++) {
        for (var b = a + 1; b < collection.length; b++) {
            if(odd[a] < odd[b]) {
                number = odd[a];
                odd[a] = odd[b];
                odd[b] = number;
            }
            if(even[a] > even[b]) {
                number = even[a];
                even[a] = even[b];
                even[b] = number;
            }
        }
    }
    for (var x = 0; x < odd.length; x++) {
        even[even.length] = odd[x];
    }
    return even;
};
module.exports = even_asc_odd_desc;
