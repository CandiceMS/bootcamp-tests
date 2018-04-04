describe('Assigning location', function(){

    it('should match part of input to an assigned value and return the latter. Input and corresponding values are predefined', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should match part of input to an assigned value and return the latter. Input and corresponding values are predefined', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
});
