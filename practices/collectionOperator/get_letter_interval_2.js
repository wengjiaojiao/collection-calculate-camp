'use strict';

function get_letter_interval_2(number_a, number_b) {
    var result = [];
    var judge = false;
    var SINGLE = 26;
    var COUPLE = 52;

    if(number_a > number_b) {
        var c = number_b;
        number_b = number_a;
        number_a = c;
        judge = true;
    }
    for(var i=number_a;i<=number_b;i++) {
        var x = i,addition;

        x=parseInt(x/SINGLE);
        x = i/SINGLE === 2 ? 1:x;
        addition = String.fromCharCode(x+96);

        if(i<=SINGLE) {
            result.push(String.fromCharCode(i+96));
        }else if(SINGLE<i && i<=COUPLE) {
            var j = i - SINGLE;
            result.push(addition+String.fromCharCode(j+96));
        }else {
            var k = i -COUPLE;
            result.push(addition+String.fromCharCode(k+96));
        }
    }
    if(judge) {
        result.reverse();
    }
    return result;
}

module.exports = get_letter_interval_2;
