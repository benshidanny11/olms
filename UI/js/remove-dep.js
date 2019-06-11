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
    document.getElementById("bnt-back-home-n").addEventListener('click',() =>{
        window.location.href = '../../html/admin/dashboard.html';
    });

    document.body.onclick = function (ev) {
      if (ev.target.getAttribute("class") == "btn-remove-univ") {
        document.getElementById("alert-mother").style.display="flex";
      }
    };
    function noRemove(){
      document.getElementById("alert-mother").style.display="none";
    }
   function remove(){
    document.getElementById("alert-mother").style.display="none";
   }
