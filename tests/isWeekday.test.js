describe('True if input is a weekday', function(){

    it('should return true if the day does not start with an S', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return false if the day starts with an S', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});
