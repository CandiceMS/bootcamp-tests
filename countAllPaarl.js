function countAllPaarl(regNumbers){
//  console.log(regMatch);
  var regSplit = regNumbers.split(", ");
 console.log(regSplit);
  var allPaarl = [];
for (var i = 0; i < regSplit.length; i++){
if (regSplit[i].startsWith("CJ")){
  allPaarl.push(regSplit[i]);
  console.log(allPaarl);
}
}
  return allPaarl.length;
}
