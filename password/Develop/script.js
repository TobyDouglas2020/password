// Assignment code here
var u = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var l = ["abcdefghijklmnopqrstuvwxyz"]
var n = ["0123456789"]
var s = ["!@#$%^&*"]



var u = false;
var l = false;
var n = false;
var s = false;




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

console.log("passwordLength");
  // ask for pw length
var passwordLength = window.prompt("how long would you like to make your password between 8 and 128 characters?", "8");
 
// checking for length if true proceide if true ask for 
if(length >= 8 && length < 129 );
 var n = window.confirm("Do you want numbers in your password?");
 // if false, request
}


  //
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
