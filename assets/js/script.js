// Assignment code here 
var getRandomSymbol = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var getRandomLower = "abcdefghijklmnopqrstuvwxyz"
var getRandomUpper = "ABCDEFGHIJOLMNOPQRSTUVWXYZ"
var getRandomNumber = "0123456789"
var collectCharacters = "";
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
    var confirmSymbol = confirm("Do you want Symbols?");
//console.log(confirmSymbol, confirmNumber, confirmUpper, confrimLower);
  
  if (confirmUpper === true) {
    collectCharacters = collectCharacters + getRandomUpper;
  }

  if (confrimLower === true) {
    collectCharacters = collectCharacters + getRandomLower;
  }

  if (confirmNumber === true) {
    collectCharacters = collectCharacters + getRandomNumber;
  }

  if (confirmSymbol === true) {
    collectCharacters = collectCharacters + getRandomSymbol;
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


//if check < 8
//if check > 129

// confirm true/false want nums?
// confirm true/false want lower?
// confirm true/false want upper?
// confirm true/false want special?