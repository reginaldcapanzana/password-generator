// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}`~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function checkValidInput(input){
    input = input.toUpperCase();
    var result = false;
    //Check if input is neither N or Y
    if(input == "N" || input == "Y"){
        result = true;
    }

    return result;
}

// Generate randomized password based on user input
// Returns: Generated password
// Criteria: lowercase, uppercase, numeric, special characters
// Prompts pop up on screen once user hits the generate button
// User chooses which options they want then hit submit
// Once submitted, #password element will be updated
function generatePassword(){
    var password = "";
    var lowercaseOption;
    var uppercaseOption;
    var numericOption;
    var specialCharOption;
    var passwordLength;
    var inputCheck;
    var characters = "";

    
    //Ask user for password criteria, checks if user clicks cancel after each prompt and if the input is invalid
    lowercaseOption = window.prompt("Did you want lowercase characters in your password? \nEnter Y or N:");
    //User clicks cancel 
    if(!lowercaseOption){
        return;
    }
    //Check if user input is valid
    inputCheck = checkValidInput(lowercaseOption);
    if(!inputCheck){
        window.alert("Invalid User Input!");
        return;
    }

    uppercaseOption = window.prompt("Did you want uppercase characters in your password? \nEnter Y or N:");
    if(!uppercaseOption){
        return;
    }
    inputCheck = checkValidInput(uppercaseOption);
    if(!inputCheck){
        window.alert("Invalid User Input!");
        return;
    }

    numericOption = window.prompt("Did you want numeric characters in your password? \nEnter Y or N:");
    if(!numericOption){
        return;
    }
    inputCheck = checkValidInput(numericOption);
    if(!inputCheck){
        window.alert("Invalid User Input!");
        return;
    }

    specialCharOption = window.prompt("Did you want special characters in your password? \nEnter Y or N:");
    if(!specialCharOption){
        return;
    }
    inputCheck = checkValidInput(specialCharOption);
    if(!inputCheck){
        window.alert("Invalid User Input!");
        return;
    }

    passwordLength = window.prompt("Enter password length \nMin: 8 characters \nMax:128 characters");
    if(!passwordLength){
        return
    }
    //Check if password length is between the range of 8 and 128
    //Convert to int for easier comparison
    passwordLength = parseInt(passwordLength);
    if(passwordLength < 8 || passwordLength > 128){
        window.alert("Invalid Password Length!");
        return;
    }

    //Checks if any criteria have been chosen
    lowercaseOption = lowercaseOption.toUpperCase();
    uppercaseOption = uppercaseOption.toUpperCase();
    numericOption = numericOption.toUpperCase();
    specialCharOption = specialCharOption.toUpperCase();

    if(lowercaseOption === "N" && uppercaseOption === "N" && numericOption === "N" && specialCharOption === "N"){
        window.alert("No criteria has been chosen. Please try again.");
        return;
    }

    //Create an array that contains the characters to use for the password
    if(lowercaseOption === "Y"){
        characters += lowercaseLetters;
    }

    if(uppercaseOption === "Y"){
        characters += uppercaseLetters;
    }

    if(numericOption === "Y"){
        characters += numbers;
    }

    if(specialCharOption === "Y"){
        characters += symbols;
    }

    //Generate password
    for (var i = 0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    };

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
