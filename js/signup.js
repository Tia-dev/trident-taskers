

function addUser()
{
	
	var user_name =document.getElementById("username").value;
	var pass_word =document.getElementById("pwordre").value;
	
	
	
	//Write value to file
	localStorage.setItem("userre", username);
	localStorage.setItem("pword", pwordre);
	alert("Value Saved");
}


 function userCheck() 
 {
    for (i = 0; i < 1; i++) 
	{
		if(localStorage.getItem("pword") === pwordre) {
		alert("work");
		}
	

	}
 }