'use strict';

function get_letter_interval_2(number_a, number_b) {
    var result = [];
    var judge = false;
    if(number_a > number_b) {
        var c = number_b;
        number_b = number_a;
        number_a = c;
        judge = true;
    }
    for(var i=number_a;i<=number_b;i++) {
        if(i<=26) {
            result.push(String.fromCharCode(i+96));
        }else if(26<i && i<53) {
            var j = i - 26;
            result.push("a"+String.fromCharCode(j+96));
        }else {
            var k = i -52;
            result.push("b"+String.fromCharCode(k+96));
        }
    }
    if(judge) {
        result.reverse();
    }
    return result;
}

module.exports = get_letter_interval_2;
