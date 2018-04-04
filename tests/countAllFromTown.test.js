describe('How many from a town', function(){

    it('should return a numerical value after counting how many registrations start with a CL location registration', function(){
        assert.equal(countAllFromTown('CL123,CL321,AB020'), 2);
    });
    it('should return a numerical value after counting how many registrations start with a CL location registration', function(){
        assert.equal(countAllFromTown('AP121,CL7531,AB12'), 1);
    });
});
