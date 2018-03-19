describe('Shift/transport allowance', function(){

    it('should match input to an assigned value and return the latter', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should match input to an assigned value and return the latter', function(){
        assert.equal(transportFee('none'), 'free');
    });
});
