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
  

document.getElementById("teaching-schedule").addEventListener("click",()=>{
  var id=document.getElementById("h_lect_id").innerHTML;
  localStorage.setItem("h_lect_id",id);
    window.location.href = '../../html/lecturer/teachingschedules.html';
})
document.getElementById("view-university").addEventListener("click",()=>{
  window.location.href = '../../html/lecturer/universities.html';
})







