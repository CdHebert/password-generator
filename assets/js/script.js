// Assignment code here 
var getSymbol = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var getower = "abcdefghijklmnopqrstuvwxyz"
var getUpper = "ABCDEFGHIJOLMNOPQRSTUVWXYZ"
var getNumber = "0123456789"
var collect = "";
var passwordCollect = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passwordLength = parseInt(
  window.prompt("Pick a number between 8 and 129 to get your password length.")
  );
  if (passwordLength >= 8 && passwordLength <= 129) {
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confrimLower = confirm("Do you want Lowercase letters?");
    var confirmNumber = confirm("Do you want Numbers?");
    var confirmSymbol = confirm("Do you want Special Characters?");
//console.log(confirmSymbol, confirmNumber, confirmUpper, confrimLower);
  
  if (confirmUpper === true) {
    collectCharacters = collect + getUpper;
  }

  if (confrimLower === true) {
    collectCharacters = collect + getLower;
  }

  if (confirmNumber === true) {
    collectCharacters = collect + getNumber;
  }

  if (confirmSymbol === true) {
    collectCharacters = collect + getSymbol;
  }
  console.log(collectCharacters, passwordCollect);
  
  for (var i = 0; i < passwordLength; i++) {
    var value = Math.floor(Math.random() * collectCharacters.length);
    passwordCollect = passwordCollect + collectCharacters[value];
  }
  return passwordCollect;
  
} 
  else {
    alert("Enter a length between 8 and 129");
    writePassword();
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


