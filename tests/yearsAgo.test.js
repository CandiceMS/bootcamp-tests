describe('How many years ago', function(){

    it('should return a numerical value after calculating difference between input and current year', function(){
        assert.equal(yearsAgo(1928), 90);
    });
    it('should return a numerical value after calculating difference between input and current year', function(){
        assert.equal(yearsAgo(2016), 2);
    });
});
