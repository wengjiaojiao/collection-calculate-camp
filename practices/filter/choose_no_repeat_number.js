'use strict';

function choose_no_repeat_number(collection) {
    var _ = require('../lodash/array');

    return _.uniq(collection,true);
}

module.exports = choose_no_repeat_number;
