'use strict';

function choose_no_repeat_number(collection) {
    var no_repeat = [];

    for(var i = 0; i < collection.length; i++) {
        var exist = false;

        for(var j = 0; j < no_repeat.length; j++) {
            if(collection[i] === no_repeat[j]) {
                exist = true;
            }
        }
        if(!exist) {
        no_repeat.push(collection[i]);
        }
    }
    return no_repeat;
}

module.exports = choose_no_repeat_number;







//return _.uniq(collection,true);
