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
    
document.getElementById("open-univ-panel").addEventListener("click", () => {
    document.getElementById("panel-all-activities").style.display="none";
    document.getElementById("panel-univ").style.display="block";
   });
   //From university panel
document.getElementById("bnt-back-home").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="block";
    document.getElementById("panel-univ").style.display="none";    
});
   //From faculty panel
   document.getElementById("bnt-back-home-1").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="block";
    document.getElementById("panel-fac").style.display="none";    
});
   //From department panel
   document.getElementById("bnt-back-home-2").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="block";
    document.getElementById("panel-dep").style.display="none";    
});
   //From level panel
   document.getElementById("bnt-back-home-3").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="block";
    document.getElementById("panel-lev").style.display="none";    
});
   //From course panel
   document.getElementById("bnt-back-home-4").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="block";
    document.getElementById("panel-cou").style.display="none";    
});

document.getElementById("open-fac-panel").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="none";
    document.getElementById("panel-fac").style.display="block";  
});
document.getElementById("open-fac-panel").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="none";
    document.getElementById("panel-fac").style.display="block";  
});
document.getElementById("open-dep-panel").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="none";
    document.getElementById("panel-dep").style.display="block";  
});
document.getElementById("open-lev-panel").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="none";
    document.getElementById("panel-lev").style.display="block";  
});
document.getElementById("open-course-panel").addEventListener("click",() => {
    document.getElementById("panel-all-activities").style.display="none";
    document.getElementById("panel-cou").style.display="block";  
});