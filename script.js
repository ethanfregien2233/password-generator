
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["%", "!", "&", ",","-", "*", "+",  ".", "<", "/", ">", "?","~"];

var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumber;
var confirmLength = "";

function generatePassword() {
  var confirmLength=(prompt("How many characters will your password contain? Please pick between 8 and 128 characters."));

  while(confirmLength >= 129 || confirmLength <=7) {
    alert("Password must be between 8-128 characters! Please try again.");
    var confirmLength=(prompt("How many characters will your password contain? Please pick between 8 and 128 characters."));
  }

  alert("Your password will have " + confirmLength + " characters!");

  var confirmUpper = confirm("Press OK if you would like to include uppercase letters");
  var confirmLower = confirm("Press OK if you would like to include lowercase letters");
  var confirmSpecial = confirm("Press OK if you would like to include special characters");
  var confirmNumber = confirm("Press OK if you would like to include numbers");

  while(confirmLower === false && confirmUpper === false && confirmSpecial === false && confirmNumber === false) {
    alert("You must choose to include at least one character choice!");
    var confirmUpper = confirm("Press OK if you would like to include uppercase letters");
    var confirmLower = confirm("Press OK if you would like to include lowercase letters");
    var confirmSpecial = confirm("Press OK if you would like to include special characters");
    var confirmNumber = confirm("Press OK if you would like to include numbers");
} 

    var passwordChar = []

    if (confirmUpper) {
      passwordChar = passwordChar.concat(letUpper)
    }  

    if (confirmLower) {
      passwordCharacters = passwordChar.concat(letLower)
    }

    if (confirmSpecial) {
      passwordChar = passwordChar.concat(specialChar)
    }

    if (confirmNumber) {
      passwordChar = passwordChar.concat(number)
    }
    
    var password = ""
      
      for (var i = 0; i < confirmLength; i++) {
        password = password + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        console.log(password)
      }
      return password;
}
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
