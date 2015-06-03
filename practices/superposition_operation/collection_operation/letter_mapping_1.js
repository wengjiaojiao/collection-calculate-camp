'use strict';

function even_to_letter(collection) {
    var _ = require('../../../mylodash.js');
    var temp = [];

    temp = _.filter(collection,function(n){
        return n % 2 === 0;
    });

    return _.map(temp,function(n){
        return String.fromCharCode(n+96);

    });
}

module.exports = even_to_letter;
