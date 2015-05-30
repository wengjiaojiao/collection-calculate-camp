
function _ () {

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
module.exports = _;
