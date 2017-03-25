'use strict';

var expect = require('chai').expect;
require('..');

describe('Utilities', function(){

    it('Loads included utils', function(done){
        expect(log).to.be.ok;
        expect(Interface).to.be.ok;

        done();
    });

});
