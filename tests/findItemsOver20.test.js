describe('Quantity over 20', function(){

    it('should return all items with a quantity greater than 20', function(){
        assert.deepEqual( findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]),
    [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
    });
    it('should return all items with a quantity greater than 20', function(){
        assert.deepEqual( findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 7},
    {name : 'bananas', qty : 3},
    {name : 'apples', qty : 13}]),
    []);
    });
    it('should return all items with a quantity greater than 20', function(){
        assert.deepEqual( findItemsOver20([]),[]);
    });
});
