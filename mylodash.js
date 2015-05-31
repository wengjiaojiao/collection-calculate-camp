
function _ () {

}
_.exist = function(collection,element) {
    for (var i = 0; i < collection.length; i++) {
        if(collection[i] === element) {
            return true;
        }
    }
    return false;
}


_.max = function(collection) {
    var max = 0;
    for(var i = 0; i < collection.length; i ++) {
	if(collection[max] < collection[i]) {
            max = i;
        }
    }
    return collection[max];
}

_.min = function(collection) {
    var min = 0 ;
    for (var i = 0; i < collection.length; i++) {
        if(collection[min] > collection[i]) {
            min = i;
        }
    }
    return collection[min];
}

_.sum = function(collection) {
    var sum = 0;
    for (var i = 0; i < collection.length; i++) {
        sum += collection[i];
    }
    return sum;
}

_.map = function(collection,fun) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        result[result.length] = fun(collection[i]);
    }
    return result;
}

_.first = function(collection,fun) {
    var number = 0;
    for (var i = 0; i < collection.length; i++) {
        if(fun(collection[i])) {
            number = collection[i];
            return number;
        }
    }
}

_.last = function(collection,fun) {
    var number = 0;
    for (var i = collection.length - 1; i >= 0; i--) {
        if(fun(collection[i])) {
            number = collection[i];
            return number;
        }
    }
}




module.exports = _;
