
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLKLMNOPQRSTUVWXYZ';
  var symbols = '!@#$%^&*()_+-=,./<>?';
  var numbers = '1234567890';
  var possible = '';


  var hasLower = confirm('has lowercase letter?');

  if (hasLower) {
    possible += lower;
  }
  var hasUpper = confirm('has Uppercase letter?');

  if (hasUpper) {
    possible += upper;
  } var hasSymbols = confirm('has symbols?');

  if (hasSymbols) {
    possible += symbols;
  }


  debugger;

  return '';
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword("#password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



