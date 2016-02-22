/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*document.getElementById("opening-text").innerHTML = HtmlOpeningText;*/


var emailAddress = document.getElementById("txt-email");
var password = document.getElementById("txt-password");
var verifyPassword = document.getElementById("txt-verify-password");
var displayName = document.getElementById("txt-display-name");
var city = document.getElementById("txt-city");

emailAddress.addEventListener("focus",validateEmailAddress());
password.addEventListener("input",validatePassword);
verifyPassword.addEventListener("input",validateVerifyPassword);
displayName.addEventListener("focus",validateDisplayName());

var validationKey = ["emailAddress",
    "password",
    "verifyPassword",
    "displayName",
    "firstName",
    "lastName"
    ];

var validationArray = {
    "emailAddress":false,
    "password":false,
    "verifyPassword":false,
    "displayName":false,
    "firstName":false,
    "lastName":false
    };



function validatePassword()
{
    var errMessage = document.getElementById("err-password");
    var passwordInput = password.value.trim();
    
    if(passwordInput.length > 0 && passwordInput.length < 8){
        
        errMessage.innerHTML = ErrPasswordLength;
        errMessage.style.display = "inline";
    }
    
    if(passwordInput.length >= 8){
        errMessage.style.display = "none";
        validationArray["password"] = true;
        return true;
    }
    
    validationArray["password"] = false;
    console.log(validationArray["password"]);
    return false;
}

function validateVerifyPassword(){
    
    var errMessage = document.getElementById("err-verify-password");
    var passwordInput = verifyPassword.value.trim();
    
    if(passwordInput.length > 0 && passwordInput.length < 8){
        
        errMessage.innerHTML = ErrPasswordLength;
        errMessage.style.display = "inline";
    }
    
    if(passwordInput.length >= 8){
        if(validatePassword() && (password.value.trim() === passwordInput)){
            errMessage.style.display = "none";
            validationArray["verifyPassword"] = true;
            console.log("true");
            return true;
        }
        errMessage.innerHTML = ErrPasswordVerify;
        errMessage.style.display = "inline";
    }
    
    validationArray["verifyPassword"] = false;
    return false;
}

function validateFirstName(){
    
}

function validateLastName(){
    
}



