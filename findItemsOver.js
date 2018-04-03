function findItemsOver(list, threshold){
  var itemsOver20 = [];
  for (var i = 0; i < list.length; i++){
    var indexList = list[i];
	if (indexList.qty > threshold) {
  itemsOver20.push(indexList);
};
};
  console.log(itemsOver20);
  return itemsOver20;
};
