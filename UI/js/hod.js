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
  
  var id=document.getElementById("h_hod_id").innerHTML;
  localStorage.setItem("hod_id",id);
document.getElementById("id-available-rects").addEventListener("click",()=>{
    window.location.href = '../../html/hod/available-lecturers.html?id='+id;
    
})
document.getElementById("id-all-applications").addEventListener("click",()=>{
  window.location.href = '../../html/hod/allapplications.html'; 
})
document.getElementById("id-all-courses").addEventListener("click",()=>{
  window.location.href = '../../html/hod/all-courses.html'; 
})

document.getElementById("post-schedule").addEventListener("click",()=>{
  window.location.href = '../../html/hod/post-shcedule.html'; 
})

document.getElementById("existing-schedule").addEventListener("click",()=>{
  window.location.href = '../../html/hod/existing-schedules.html'; 
})

document.getElementById("approved-application").addEventListener("click",()=>{
  window.location.href = '../../html/hod/approvedapplications.html'; 
});






