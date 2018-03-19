describe('Registration count', function(){

    it('should return a numerical value of how many registrations are from a specific location', function(){
        assert.equal(countAllPaarl('CJ123000, CJ6059'), 2);
    });
    it('should return a numerical value of how many registrations are from a specific location', function(){
        assert.equal(countAllPaarl('BY123000, CJ 453'), 1);
    });
});
