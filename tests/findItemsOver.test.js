describe('Quantity greater than the threshold', function(){

    it('should return all items with a quantity greater than the threshold', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}], 20),
    [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
    });
    it('should return all items with a quantity greater than the threshold', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 27},
    {name : 'bananas', qty : 37},
    {name : 'apples', qty : 3}], 25),
    [{name : 'pears', qty : 27},
    {name : 'bananas', qty : 37}]);
    });
});
