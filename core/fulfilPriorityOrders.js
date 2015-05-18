'use strict';
var OrdersRepository = require('./ordersRepository');

module.exports = function() {
    var self = {};

    var dispatchOrder = function(order) {
        console.log(order);
    };

    self.execute = function(productName, callback) {
        var priorityOrders = new OrdersRepository().getHighestPriceUnfulfilledOrder(productName);

        if (priorityOrders.length === 0) {
            callback();
        } else if (priorityOrders.length === 1) {
            dispatchOrder(priorityOrders[1]);
        } else {
            callback(new Error('unexpected number of priority orders'));
        }
    };

    return self;
};
