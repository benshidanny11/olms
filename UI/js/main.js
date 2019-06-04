function start(){
    window.location.href = './html/login.html';
}

document.getElementById("login").addEventListener("click",function(){

const email=document.getElementById("user_email").value;
const password=document.getElementById("user_password").value;
if(email === "" || password === ""){
  document.getElementById("incorrect").innerHTML="Fill all fields!"
  document.getElementById("incorrect-data").style.display="flex";   
}
else if(email !== "" || password !== ""){
if(email === "benshidanny11@gmail.com" && password === "Danny123" ){
    window.location.href = '../html/user/admin/dashboard.html';
    }
    else if(email ==="emmylavie3@gmail.com" && password === "dukuze"){
    window.location.href = '../html/user/hod/dashboard.html'; 
    }
    else if(email ==="gprestein@gmail.com" && password === "eric123"){
    window.location.href = '../html/user/lectuler/dashboard.html'; 
    }
    else{
    document.getElementById("incorrect").innerHTML="Inorrect email or password!"
    document.getElementById("incorrect-data").style.display="flex";  
    }   
}
});
document.getElementById("reset").addEventListener("click", function(){
 document.getElementsByClassName("txts")[0].value="";
 document.getElementsByClassName("txts")[1].value="";
 window.location.href = '../html/login.html';
});
document.getElementById("lbl-reg").addEventListener("click", function(){
    window.location.href = 'register.html'; 
});
document.getElementById("lbl-forgot").addEventListener("click", function(){
    window.location.href = 'forgotpassword.html'; 
});
function loginFromReg(){
    window.location.href = 'login.html';  
}
function registerFromHeader(){
    window.location.href = 'register.html'; 
}