
function _ () {

}

_.foreach = function(collection,fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i]);
    }
}

_.map = function(collection,fun) {
    var result = [];
    _.foreach(collection,function(n) {
        result[result.length] = fun(n);
    })
    return result;
}

_.exist = function(collection,element) {
    _.foreach(collection,function(n){
        if(n === element) {
            return true;
        }
    })
    return false;
}

_.max = function(collection) {
    var max = 0;
    _.foreach(collection,function(n){
        if(collection[max] < n) {
            collection[max] = n;
            }
    })
    return collection[max];
}

_.min = function(collection) {
    var min = 0 ;
    _.foreach(collection,function(n){
        if(collection[min] > n) {
            collection[min] = n;
        }
    })
    return collection[min];
}

_.sum = function(collection) {
    var sum = 0;

    _.foreach(collection,function(n){
        sum += n;
    })
    return sum;
}


_.first = function(collection,fun) {
    var number = 0;
    _.foreach(collection,function(n){
        if(fun(n)) {
            number = n;
            return number;
        }
    })
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

_.filter = function(collection,fun) {
    var result = [] ;
    _.foreach(collection,function(n) {
        if(fun(n)) {
            result[result.length] = n;
        }
    })
    return result;
}


module.exports = _;
