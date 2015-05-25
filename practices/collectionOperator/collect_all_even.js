'use strict';

function collect_all_even(collection) {
    var _ = require('../lodash/array');
    var evens = _.remove(collection, function(n) {
    return n % 2 == 0;
  });

    return evens;
}

module.exports = collect_all_even;
