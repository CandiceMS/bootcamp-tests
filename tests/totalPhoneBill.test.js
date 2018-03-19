describe('Total cost', function(){

    it('should return a numerical value of total cost of sms and calls, after identifying each and assignment of a numerical value to each', function(){
        assert.equal(totalPhoneBill('call, call, call'), 'R8.25');
    });
    it('should return a numerical value of total cost of sms and calls, after identifying each and assignment of a numerical value to each', function(){
        assert.equal(totalPhoneBill('sms, call, sms'), 'R4.05');
    });
});
