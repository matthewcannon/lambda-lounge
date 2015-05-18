'use strict';
var mongo = require('./fakeMongo');

module.exports = function() {
    var self = {};

    self.getAll = function() {
        return mongo['orders'];
    };

    self.getHighestPriceUnfulfilledOrder = function( /*productName*/ ) {
        return self.getAll();
    };

    return self;
};
