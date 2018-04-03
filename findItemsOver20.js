function findItemsOver20(list){
  console.log(list);
  var itemsOver20 = [];
  for (var i = 0; i < list.length; i++){
    var indexList = list[i];
	if (indexList.qty > 20) {
  itemsOver20.push(indexList);
};
};
  console.log(itemsOver20);
  return itemsOver20;
};
