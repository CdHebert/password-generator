// Assignment code here 
var symbols = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var collectCharacters = "";
var passwordCollect = "";
// charcode link - http://www.net-comber.com/charset.html
var getRandomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var getRandomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var getRandomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
var getRandomSymbols = symbols[Math.floor(Math.random() * symbols.length)];


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
    collectCharacters = collectCharacters + getRandomSymbols;
  }
  
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

