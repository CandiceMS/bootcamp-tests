function findItemsOver(list, threshold){
  console.log(threshold);
  var itemsOverThreshold = [];
  for (var i = 0; i < list.length; i++){
    var indexList = list[i];
	if (indexList.qty > threshold) {
  itemsOverThreshold.push(indexList);
};
};
  console.log(itemsOverThreshold);
  return itemsOverThreshold;
};
