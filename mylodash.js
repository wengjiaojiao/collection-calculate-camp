
function _ () {

}

_.foreach = function(collection,fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}


_.map = function(collection,fun) {
    var result = [];

    _.foreach(collection,function(n) {
        result.push(fun(n));
    });
    return result;
}


_.exist = function(collection,element) {
    var result = true;

    _.foreach(collection,function(n){
        if(n === element) {
            result = false;
        }
    });
    return result;
}


_.filter = function(collection,fun) {
    var result = [] ;

    _.foreach(collection,function(n) {
        if(fun(n)) {
            result.push(n);
        }
    });
    return result;
}


_.reduce = function(collection,fun) {
    var result = collection[0];

    _.foreach(collection,function(n,i) {
        if(i === 0) {
            result = collection[i];
        }else {
            result = fun(result,n);
        }
    });
    return result;
}

_.rank = function(collection, judge) {
    var number;

    for (var i = 0; i < collection.length; i++) {
        for (var j = i + 1; j < collection.length; j++) {
            if(judge ? collection[i] > collection[j] : collection[i] < collection[j]) {
                number = collection[i];
                collection[i] = collection[j];
                collection[j] = number;
            }
        }
    }
    return collection;
}
module.exports = _;
