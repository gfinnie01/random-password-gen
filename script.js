
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLKLMNOPQRSTUVWXYZ';
  var symbols = '@#$%^&*()_+-=,./<>?';
  var numbers = '1234567890';
  var password ='';
  var possible = '';

  var characters = 12;

  var hasLower = confirm('do you want lowercase letters?');

  if (hasLower) {
    possible += lower;
  }
  var hasUpper = confirm('do you want Uppercase letters?');

  if (hasUpper) {
    possible += upper;
  } 
  var hasSymbols = confirm('do you want symbols?');

  if (hasSymbols) {
    possible += symbols;
  }
  var hasNumbers = confirm('do you want Numbers?');

  if (hasNumbers) {
    possible += numbers;
  }

  for (var i = 0; i < characters; i++) {

    var random = Math.floor(Math.round() * possible.length);

    console.log(random);
    password =+ possible[random];
  }

  debugger;

  return '';
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



