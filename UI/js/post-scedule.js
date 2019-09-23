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
        window.location.href = '../../html/login.html';
    });

    function getData(){
      var select =document.getElementById('cources');
      fetch('http://localhost:6070/allcources')
      .then(responce => responce.json()).then(res => {
        //res.foreach()
          res.Cources.forEach(function(courses){
            var opt=document.createElement('option');
            opt.value=courses.course_name;
            opt.innerHTML=courses.course_name;
            select.appendChild(opt)
          });
          
            console.log(res.Cources);
        
      }).catch(error=>console.log(error));
    }

    