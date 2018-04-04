describe('Quantity over 20', function(){

    it('should return ONLY the items with a quantity greater than 20', function(){
        assert.deepEqual( findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]),
    [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
    });
    it('should return ALL items with a quantity greater than 20', function(){
        assert.deepEqual( findItemsOver20([
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 31}]),
    [{name : 'apples', qty : 40},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 31}]);
    });
    it('will return an empty list when no items have a quantity greater than 20', function(){
        assert.deepEqual( findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 7},
    {name : 'bananas', qty : 3},
    {name : 'apples', qty : 13}]),
    []);
    });
    it('will return an empty list if the sales data list is empty', function(){
        assert.deepEqual( findItemsOver20([]),[]);
    });
});
