

function countPasswordFields()
{
	
	
	var inputLength = document.getElementsByTagName('input').length;
	var input= document.getElementsByTagName('input');
	
	var counts = 0;
	for (var i=0, length1 = input.length; i<length1; i++) 
	{
		if (input[i].type == 'password') 
		{
			counts++;
		}
	}
	
	alert("Password form fields: "+ counts +'/'+ inputLength );
}




function emailcheck()
{

	var string1=document.getElementById('txt-email').value;
   
    if (string1.indexOf("@") == (-1) )
	{
		document.getElementById('email error').innerHTML="*Email is invalid!*";
        //alert("Please input a valid email address!");
		document.getElementById('txt-email').focus();
        
    }
}



function validatePassword()
{
    var string1=document.getElementById('txt-password').value;
   
    if (string1.length <8 )
	{
		document.getElementById('password error').innerHTML="*Password is invalid!*";
        //alert("Must be at least 8 characters!");
		document.getElementById('txt-password').focus();
        
    }
}

function validateVerifyPassword()
{
    var string1=document.getElementById('txt-verify-password').value;
    var string2=document.getElementById('txt-password').value;
	
    if (string1 != string2 )
	{
		document.getElementById('passwordVerify error').innerHTML="*Password is not matched!*";
        //alert("Password is not matched! ");
		//document.getElementById('txt-verify-password').focus();
        
    }
    
}

function validateFirstName()
{
    var string1=document.getElementById('txt-firstname').value;
    
    if (string1.length == 0)
	{
		document.getElementById('firstName error').innerHTML="*First name can't be empty!*";
        //alert("First name can't be empty!");
		//document.example.email.focus()
		document.getElementById('txt-firstname').focus();
    }
}

function validateLastName()
{
    var string1=document.getElementById('txt-lastname').value;
   
    if (string1.length == 0)
	{
		document.getElementById('lastName error').innerHTML="*Last name can't be empty!*";
        //alert("Last name can't be empty!");
		document.getElementById('txt-lastname').focus();
    }
}



function validateDisplayName()
{
	var string1=document.getElementById('txt-display-name').value;
   
    if (string1.length < 3 || string1.length > 31)
	{
		document.getElementById('displayName error').innerHTML="*Must be between 3 - 31 characters!*";
        //alert("Must be between 3 - 31 characters!");
		document.getElementById('txt-display-name').focus();
    }
}



function validateCountry()
{
	var string1=document.getElementById('select-country').value;
   
    if (string1 == '')
	{
		document.getElementById('country error').innerHTML="*Please select a country!*";
        //alert("Please select a country!");
		document.getElementById('select-country').focus();
    }
}




function validateLanguage()
{
	var string1=document.getElementById('select-language').value;
   
    if (string1 == '')
	{
		document.getElementById('language error').innerHTML="*Please select a language!*";
        //alert("Please select a language!");
		document.getElementById('select-language').focus();
    }
}



function validateSecurityQuestion()
{
	var string1=document.getElementById('select-security-question').value;
   
    if (string1 == '')
	{
		document.getElementById('securityQuestion error').innerHTML="*Please select a security question!*";
        //alert("Please select a security question!");
		document.getElementById('select-security-question').focus();
    }
}




function validateSecurityAnswer()
{
    var string1=document.getElementById('txt-security-answer').value;
   
    if (string1.length == 0)
	{
		document.getElementById('answerSecurityQuestion error').innerHTML="*Security answer can't be empty!*";
        //alert("Security answer can't be empty!");
		document.getElementById('txt-security-answer').focus();
    }
}