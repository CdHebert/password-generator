// Assignment code here
    var getRandomLower = function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    var getRandomUpper = function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    var getRandomNumber = function() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    var getRandomSymbols = function() {
      var symbols = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
    console.log(getRandomSymbols());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


