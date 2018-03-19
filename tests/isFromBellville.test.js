describe('True if Bellville registration', function(){

    it('should return true if registration starts with CY', function(){
        assert.isTrue(isFromBellville('CY123000'), 'true');
    });
    it('should return false if registration does not start with CY', function(){
        assert.isFalse(isFromBellville('BY123000'), 'false');
    });
});
