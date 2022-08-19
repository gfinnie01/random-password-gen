
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLKLMNOPQRSTUVWXYZ';
  var symbols = '!@#$%^&*()_+-=,./<>?';
  var numbers = '1234567890';
  var possible = '20';

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
    possible += Numbers;
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



