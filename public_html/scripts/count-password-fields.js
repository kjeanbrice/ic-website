/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function countPasswordFields(){

    var inputLength = document.getElementById('ibm-pcon').getElementsByTagName('input').length;
	var inputNum= document.getElementById('ibm-pcon').getElementsByTagName('input');
	var counts = 0;
    
	for (var i=0, length = inputNum.length; i<length; i++) 
	{
		if (inputNum[i].type == 'password') 
		{
			counts++;
		}
	}
	
	alert("Password form fields: "+ counts +'/'+ inputLength );
        
    
}

