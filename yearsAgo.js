function yearsAgo(yearInput){
  var year = new Date();
  var yearOnly = year.getFullYear();
  var yearsOutput = yearOnly-yearInput;
  console.log(yearsOutput);
  return yearsOutput;
};
