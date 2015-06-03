
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
    _.foreach(collection,function(n){
        if(n === element) {
            return true;
        }
    });
    return false;
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

module.exports = _;
