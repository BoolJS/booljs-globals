'use strict';

var expect = require('chai').expect;
require('..');

describe('Modules', function(){

    it('Loads included modules', function(done){
        expect(_).to.be.ok;
        expect(q).to.be.ok;
        expect(util).to.be.ok;
        expect(injector).to.be.ok;

        done();
    });

});
