function dropdown(){
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
        document.getElementById("myDropdown").classList.toggle("show");
    
    }
    function hideDropdown(){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
document.getElementById("bnt-back-home-n").addEventListener("click",()=>{
    window.location.href = '../../html/admin/dashboard.html';
});

function addAdmin(){
  fetch('http://localhost:6070/api/addadmin', {  
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify(
        { 
         firstname: document.getElementById("fname").value,
         lastname: document.getElementById("lname").value,
         email: document.getElementById("email").value,
         phone: document.getElementById("phone").value,
         admintype: document.getElementById("admintype").value,
         username: document.getElementById("username").value,
         password: document.getElementById("password").value 
        }),
  }).then(responce => responce.json()).then(res => {
    console.log(res);
    if(res.status === 201){
      window.location.href='/html/successfully.html'
    } else {
      
    }
  }).catch(error=>console.log(error));
}
  