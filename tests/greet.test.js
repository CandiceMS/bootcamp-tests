describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal( greet('Andrew'), 'Hello, Andrew');
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal(greet('Karen'), 'Hello, Karen');
    });
});
