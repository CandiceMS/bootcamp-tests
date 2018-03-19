function isWeekday(inputDay){
  var notWeekend = !inputDay.startsWith("S");
  console.log(notWeekend);
  return notWeekend;
};
