//Determine password length with user prompt//

var passwordLength = prompt("Password Length (Must be between 8 and 128 characters)");

if (passwordLength <= 128 && passwordLength >= 8) {

}
else {
    alert("Make sure the input is between 8-128 characters long!");

}

//Variable confirm questions//

var specialChar = confirm("Use special characters?");
var nums = confirm("Use numbers?");
var upperCaseLetters = confirm("Use upppercase letters?");
var lowerCaseLetters = confirm("Use lowercase letters?");

//Random password generator function//

function generate() {

    var lengthSelect = passwordLength;

    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_";

    var password = "";

    for (var i = 1; i <= lengthSelect; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //Displays generated password in display box//
    document.getElementById("display").value = password;

}

//Function to copy clipboard//

function copyPassword() {
    document.getElementById("display").select();

    document.execCommand("copy");

    alert("Password copied to clipboard.");
}






