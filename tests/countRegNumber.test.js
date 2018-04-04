describe('How many registrations', function(){

    it('should return a number after counting the number of registrations in a string using a comma to split and identify each one', function(){
        assert.equal(countRegNumber('CY123000, CA0909, ND1234'), 3);
    });
    it('should return a number after counting the number of registrations in a string using a comma to split and identify each one', function(){
        assert.equal(countRegNumber('BY123000, GP3459'), 2);
    });
});
