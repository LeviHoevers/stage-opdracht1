var numberInput = document.getElementById("numberInput");
var select = document.getElementById("select");
var submit = document.getElementById("submit");
var result = document.getElementById("result");
var error = document.getElementById("error");

submit.onclick = function(){
  var newNumber = 0;
  var userNumber = [];
  var selectedNumber;
  var weight = 1;

  userNumber = numberInput.value;
  selectedNumber = select.value;

  userNumber = userNumber.split("");
  number1 = userNumber.length;

  if(userNumber.length >= 6){
    error.innerText = "";
    for(i = userNumber.length-1; i >= 0; i--){
      if(isNaN(userNumber[i])){
        userNumber.splice(i, 1);
      }
      else{
        newNumber = newNumber + (userNumber[i] * weight);
        weight++
      }
    }
    if(validateNumber(newNumber, selectedNumber)){
      result.innerText = "valid";
    }
    else{
      result.innerText = "not valid";
    }
  }
  else if(userNumber.length < 6){
    error.innerText = "Minimaal 6 cijfers invoeren.";
  }
  else if(userNumber.length > 14){
    error.innerText = "Maximaal 14 cijfers invoeren.";
  }


  console.log(userNumber);
}

function validateNumber(number, modulo){
    number = number % modulo;
    if(number == 0){
      return true
    }
    else{
      return false
    }
}

var validNumberExamples = [
  {number: "193769136", modulo: 9 },
  {number: "84076131", modulo: 7 },
  {number: "104814246", modulo: 7 },
  {number: "34828296597", modulo: 13 },
  {number: "06415932536", modulo: 9 },
  {number: "70241349997", modulo: 13 },
  {number: "553192630", modulo: 9 },
  {number: "7673642361", modulo: 7 },
  {number: "7553332", modulo: 7 },
  {number: "411612", modulo: 11 }
];

var invalidNumberExamples = [
  {number: "3371490", modulo: 11 },
  {number: "61095500901", modulo: 13 },
  {number: "23056724", modulo: 13 },
  {number: "93575855736", modulo: 13 },
  {number: "153689", modulo: 9 },
  {number: "32116529907", modulo: 13 },
  {number: "869131155", modulo: 9 },
  {number: "509652549", modulo: 7 },
  {number: "57074965", modulo: 9 },
  {number: "356024421", modulo: 7 }
];


