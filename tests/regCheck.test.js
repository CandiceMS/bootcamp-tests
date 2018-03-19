describe('True if registration contains "GP, L, EC or MP"', function(){

    it('should return true if registration contains the location registration', function(){
        assert.isTrue(regCheck('GP121', 'GP'), 'true');
    });
    it('should return false if registration does not contain the location registration', function(){
        assert.isFalse(regCheck('AP121', 'GP'), 'false');
    });
});
