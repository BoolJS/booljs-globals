'use strict';

var expect = require('expect.js');
require('..');

define('Utilities', function(){

    it('Loads included utils', function(done){
        expect(log).to.be.ok();
        expect(Interface).to.be.ok();

        done();
    });

});
