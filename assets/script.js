// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// to do

// define characters that will be used in the form of arrays and store values as variabes
  // 4 arrays: uppercase, lowercase, numbers, spcial characters
  // array that holds all of these arrays??
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
  // Use answers stored previously to create if statment. So that based on the criteria selected by the user, only those arrays will be pulled from when password is generated
  // need to build password one character at a time
      // need to randomly choos what criteria array a character will be chosen for each character
        // need to use Math.floor(Math.random() * array.length); to choose a criteria array (does this mean I will have to amke an array of the 4 criteria arrays??)
          // when a character is picked it needs to be stored in a variable (or maybe object)
      // use for loop in order to execute code until password is built to the length that the user asks

// display generated password
  // display generated password as either an alert or in textbox with the text "generated password"

// styling
  // need to style font-family:TBD, size:TBD for the titles and div with class = card-header
  // need to style border for the div with class = card-body to be dashed,
  // need to style button element with class = btn  to have a border-radius: TBD, background-color: red, font: TBD, color: white