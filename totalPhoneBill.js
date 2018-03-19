function totalPhoneBill(usage){
var usageSplit = usage.split(", ");
  var totalBill = 0;
  for (var i = 0; i < usageSplit.length; i++){
  if (usageSplit[i] == "call"){
  totalBill += 2.75;
  }
    else if (usageSplit[i] == "sms"){
    totalBill += 0.65;
    }
 console.log(totalBill);
  }
  return "R"+totalBill.toFixed(2);
}
