// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ['`', "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", '<', '>', '?', "+", "-", ',', "=", ":", '/', '.', "[", "]", "|", "{", "}"];
var chosenArrays = [];
var password = "";
var userLengthChoice =  window.prompt("How many characters do you want in your password?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // declare generatepassword function
  function generatePassword() {
    // make a window prompt ath asked for the length of password and variable that storeses the answer
    var userLengthChoice =  window.prompt("How many characters long do you want your password?");
    // if statment that either takes the number they choose,  or denies if <8 or >128
    if ( userLengthChoice >= 8 && userLengthChoice <= 128) {
      userLengthChoice = userLengthChoice
       // if statment for if user presses cancel it ends the function
      } else if (!userLengthChoice) {
        return;
      } else if (isNaN(userLengthChoice)) { 
        window.alert("Your password length must be a number.");
        generatePassword();
      } else {
        window.alert("Your password length must be at least 8 characters and at most 128 characters.");
        generatePassword();
    }
    
    console.log (userLengthChoice);
   
    // make a confirm prompt for whether or not to include uppercase and variable that stores the answer      use if statements to store the values

    var userUppercaseChoice =  window.confirm("Would you like to include uppercase letters?");

    if (userUppercaseChoice) {
      userUppercaseChoice = userUppercaseChoice;
    } else {
      userUppercaseChoice = userUppercaseChoice;
    }

    console.log (userUppercaseChoice);

    // // make a confirm prompt for whether or not to include lowercase and variable that stores the answer      use if statements to store the values

    var userLowercaseChoice =  window.confirm("Would you like to include lowercase letters?");

    if (userLowercaseChoice) {
      userLowercaseChoice = userLowercaseChoice;
    } else {
      userLowercaseChoice = userLowercaseChoice;
    }

    console.log (userLowercaseChoice);

    // // make a confirm prompt for whether or not to include numbers and variable that stores the answer      use if statements to store the values

    var userNumbersChoice =  window.confirm("Would you like to include numbers?");

    if (userNumbersChoice) {
      userNumbersChoice = userNumbersChoice;
    } else {
      userNumbersChoice = userNumbersChoice;
    }

    console.log (userNumbersChoice);

    // // make a confirm prompt for whether or not to include spcial characters and variable that stores the answer   use if statements to store the values

    var userSpecialChoice =  window.confirm("Would you like to include special characters?");

    if (userSpecialChoice) {
      userSpecialChoice = userSpecialChoice;
    } else {
      userSpecialChoice = userSpecialChoice;
    }

    console.log (userSpecialChoice);

    // // make an alert that tells you to need to pick at least one of the arrays and them returns the the beggining of prompts
    
    if (!userUppercaseChoice && !userLowercaseChoice && !userNumbersChoice && !userSpecialChoice) {
      window.alert("You much confirm at least one of the criteria previously listed.");
      generatePassword();
    }
  

    // if statement to pull the correct combop of array info into chosenArrays array
    // uppper, lower, num, spec  CHECKJ
    if (userUppercaseChoice === true && userLowercaseChoice === true && userNumbersChoice === true && userSpecialChoice === true) {
      var chosenArrays = uppercaseCharacters.concat(lowercaseCharacters, numericCharacters, specialCharacters);
      console.log(chosenArrays);
    }
    // upper, lower, num    CHECK
      else if (userUppercaseChoice === true && userLowercaseChoice === true && userNumbersChoice === true && userSpecialChoice === false){
      var chosenArrays = uppercaseCharacters.concat(lowercaseCharacters, numericCharacters);
      console.log(chosenArrays);    
      }
    // upper, lower   CHECK
      else if (userUppercaseChoice === true && userLowercaseChoice === true && userNumbersChoice === false && userSpecialChoice === false){
      var chosenArrays = uppercaseCharacters.concat(lowercaseCharacters);
      console.log(chosenArrays);    
      }
    // upper, num   CHECK
      else if (userUppercaseChoice === true && userLowercaseChoice === false && userNumbersChoice === true && userSpecialChoice === false){
      var chosenArrays = uppercaseCharacters.concat(numericCharacters);
      console.log(chosenArrays);    
      } 
    // upper, spec    CHECK
      else if (userUppercaseChoice === true && userLowercaseChoice === false && userNumbersChoice === false && userSpecialChoice === true){
      var chosenArrays = uppercaseCharacters.concat(specialCharacters);
      console.log(chosenArrays);    
      } 
    // upper    CHECK
      else if (userUppercaseChoice === true && userLowercaseChoice === false && userNumbersChoice === false && userSpecialChoice === false){
      var chosenArrays = uppercaseCharacters;
      console.log(chosenArrays);    
      }
    // lower, num, spec   CHECK
      else if (userUppercaseChoice === false && userLowercaseChoice === true && userNumbersChoice === true && userSpecialChoice === true){
      var chosenArrays = lowercaseCharacters.concat(numericCharacters, specialCharacters);
      console.log(chosenArrays);    
      }
    // lower, num   CHECK
      else if (userUppercaseChoice === false && userLowercaseChoice === true && userNumbersChoice === true && userSpecialChoice === false){
      var chosenArrays = lowercaseCharacters.concat(numericCharacters);
      console.log(chosenArrays);    
      }
    // lower, spec    CHECK
      else if (userUppercaseChoice === false && userLowercaseChoice === true && userNumbersChoice === false && userSpecialChoice === true){
      var chosenArrays = lowercaseCharacters.concat(specialCharacters);
      console.log(chosenArrays);    
      }
    // lower    CHECK
      else if (userUppercaseChoice === false && userLowercaseChoice === true && userNumbersChoice === false && userSpecialChoice === false){
      var chosenArrays = lowercaseCharacters;
      console.log(chosenArrays);    
      }
    // num, spec    CHECK
      else if (userUppercaseChoice === false && userLowercaseChoice === false && userNumbersChoice === true && userSpecialChoice === true){
      var chosenArrays = numericCharacters.concat(specialCharacters);
      console.log(chosenArrays);    
      }
    // num    CHECK
      else if (userUppercaseChoice === false && userLowercaseChoice === false && userNumbersChoice === true && userSpecialChoice === false){
      var chosenArrays = numericCharacters;
      console.log(chosenArrays); 
      }
    // spec   CHECK
      else {
      var chosenArrays = specialCharacters;
      console.log(chosenArrays) ;
    }
  
// generate password that uses random characters from selected criteria
//  use for loop to randomly choose index in chosenArray and store character in a new variable. loop until  is designated length. each character will be concatinated with the previous one to lengthen the password
// take chosenArrays and randomly select an index, store in variable, concat the next chosen index tot he previouse opn and sotre the new value
for (var i = 0; i < userLengthChoice.length; i++) {
  var index = Math.floor(Math.random() * chosenArrays.length);
  var chosenIndex = chosenArrays[index];
  var password = password.concat(chosenIndex);
}

console.log(password)

  passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// to do

// define characters that will be used in the form of arrays and store values as variabes
  // 5 arrays: uppercase, lowercase, numbers, spcial characters, empty array to hold chosen arrays           CHECK
  // variables for answers to prompts/confirms

// set up prompts, comfirms, alerts and store values
  // prompt that pops up after you click generate passowor button that asked for the length of password
    // store the length chosen by user as a variable
  // confirm for whether or not to include uppercase
    // store answer in variable
  // confirm for whether or not to include lowercase
    // store answer in variable
  // confirm for whether or not to include numbers
    // store answer in variable
  // confirm for whether or not to include spcial characters
    // store answer in variable
  // alert for when yuo do not confirm any of the previous criteria (no uppercase, lowercase, numbers, special characters, or input a password length that is <8  or >128 characters)
  // OPTIONAL alert for the generated password after criteria is set

// generate password that uses random characters from selected criteria
  // Use answers stored previously to create if statment. So that based on the criteria selected by the user, the data from those arrays will be pulled and put into an empty array that will be randomly chosen from
  // need to build password 
      // need to use Math.floor(Math.random() * array.length); to choose a criteria array (does this mean I will have to amke an array of the 4 criteria arrays??)        BAD
        // when a character is picked it needs to be stored in a variable (or maybe object)
      // use for loop in order to execute code until password is built to the length that the user asks

// display generated password
  // display generated password as either an alert or in textbox with the text "generated password"

