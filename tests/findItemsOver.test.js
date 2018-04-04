describe('Quantity greater than the threshold', function(){

    it('should return ONLY items with a quantity greater than the threshold', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}], 20),
    [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
    });
    it('should return all items with a quantity greater than the new LOWER threshold', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 27},
    {name : 'bananas', qty : 37},
    {name : 'apples', qty : 3}], 9),
    [{name : 'apples', qty : 10},
    {name : 'pears', qty : 27},
    {name : 'bananas', qty : 37}]);
    });
    it('will return an empty list when no items have a quantity greater than the threshold', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 7},
    {name : 'bananas', qty : 3},
    {name : 'apples', qty : 13}], 20),
    []);
    });
    it('will return an empty list if the sales data list is empty', function(){
        assert.deepEqual( findItemsOver([], 5),[]);
    });
});
