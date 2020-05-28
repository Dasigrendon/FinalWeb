"use strict";

function showPass() {

    var chk = document.getElementById("pass");

    if (chk.type === "password") {
      chk.type = "text";
    } 
    else {
      chk.type = "password";
    }
}

function notice() {

    var user= document.getElementById("user");
    var pass= document.getElementById("pass");

    if((user.value.length==0||pass.value.length==0)||user.value.length==0||pass.value.length==0){
        alert("Please fill in required fields")
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';
        
    }
    else if(user.value=="user" && pass.value=="user"){
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = 'It works!';
        document.getElementById("user").value='';
        document.getElementById("pass").value='';
        setTimeout(myFunction, 3000);
        function myFunction(){
            document.getElementById('display2').innerHTML = '';
        }
        
        
    }     
    else if(user.value=="admin" && pass.value=="admin"){
        document.getElementById('display1').innerHTML = 'It works!';
        document.getElementById('display2').innerHTML = '';
        document.getElementById("user").value='';
        document.getElementById("pass").value='';
        setTimeout(myFunction, 3000);
        function myFunction(){
            document.getElementById('display1').innerHTML = '';
        }      
    }
    else if(user.value=="user" && pass.value=="admin"||user.value=="admin" && pass.value=="user"){
        alert("Username and password do not match.")
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';
    }
    else if(user.value=="user" && pass.value!="user"){
        alert("Incorrect password.")
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = ''; 
    }
    else if(user.value!="user" && pass.value=="user"){
        alert("Incorrect username.")
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';  
    }
    else if(user.value=="admin" && pass.value!="admin"){
        alert("Incorrect password.")
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';  
    }
    else if(user.value!="admin" && pass.value=="admin"){
        alert("Incorrect username.")
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';
    }
    else{
        alert("Incorrect username and password.")
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';
    }      
}