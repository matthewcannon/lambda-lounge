'use strict';
var should = require('should');
var core = require('../core');

describe('fulfilling priority orders', function() {
    it('always', function(done) {
        new core.FulfilPriorityOrders().execute('Bicycle Helmet', function(error) {
            should(error).eql(undefined);
            done();
        });
    });
});
