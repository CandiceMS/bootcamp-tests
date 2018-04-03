describe('True if registration contains "GP, L, EC or MP"', function(){

    it('should return true if registration ends with the location registration', function(){
        assert.equal(regCheck('121GP', 'GP'), true);
    });
    it('should return false if registration does not end with the location registration', function(){
        assert.equal(regCheck('AP121', 'GP'), false);
    });
});
