var Firstname = document.getElementById('Firstname');
var Lastname=document.getElementById("Lastname");
var Age=document.getElementById("Age");
var username=document.getElementById("username");
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('Firstname', Firstname.value);
	localStorage.setItem('lastname',Lastname.value);
	localStorage.setItem('username',Username.value);
	localStorage.setItem('Age',Age.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedFirstName = localStorage.getItem('Firstname');
	var storedLastname=localStorage.getItem('Lastname');
	var storedusername=localStorage.getItem('username');
	var storeAge=localStorage.getItem('Age');
	var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('username');
    var userPw = document.getElementById('userPw');


var userName = document.getElementById('username');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    
	if(Username.value == storedusername && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}