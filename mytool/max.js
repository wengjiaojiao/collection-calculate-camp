
function _ () {

}

_.max = function(collection) {
    var max = 0;
    for(var i = 0; i < collection.length; i ++) {
	if(collection[max] < colleciton[i]) {
            max = i;
        }
    }
    return collection[max];
}

module.exports = _;
