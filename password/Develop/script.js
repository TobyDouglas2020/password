// Assignment code here
var u = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var l = ["abcdefghijklmnopqrstuvwxyz"]
var n = ["0123456789"]
var s = ["!@#$%^&*()-=_+[]{};:'"]



var u = false;
var l = false;
var n = false;
var s = false;




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {

console.log("passwordLength");
  // Ask for pw length
var pLength = window.prompt("how long would you like to make your password between 8 and 128 characters?", "8");
 
// Checking for length if true proceide if true ask for 
if(length >= 8 && length < 129 );

// Ask if UPPERCASE is needed
 var u = window.confirm("Do you want UPPERCASE letters in your password?");

// Ask id lowercase is needed
 var l = window.confirm("Do you want lowercase letters in your password?");

// Ask if numbers are needed
 var n = window.confirm("Do you want numbers in your password?");

// Ask if special characters are needed
 var s = window.confirm("Do you want special characters (!@#$%^&*()-=_+[]{};:') in your password?");





  
 //  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
