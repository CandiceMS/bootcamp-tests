function countAllFromTown(regNumbers){
//  console.log(regNumbers);
//  console.log(regMatch);
  var regSplit = regNumbers.split(",");
  var allFromTown = [];
for (var i = 0; i < regSplit.length; i++){
if (regSplit[i].startsWith("CL")) {
  allFromTown.push(regSplit[i]);
}
}
//   console.log(allFromTown);
  console.log(allFromTown.length);
 return allFromTown.length;
}
