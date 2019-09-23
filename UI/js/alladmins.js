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
   
   function getAllAdmins(){
    var table=document.getElementById('table_admin_info');
    fetch('http://localhost:6070/alladmins')
    .then(responce => responce.json()).then(res => {
      //res.foreach()
        res.Users.forEach(function(admin){
          var tr=document.createElement('tr');
          
          var td_1=document.createElement('td');
          var td_2=document.createElement('td');
          var td_3=document.createElement('td');

          var div_1=document.createElement('div');
          var div_2=document.createElement('div');
          var div_3=document.createElement('div');

          var p_1=document.createElement('p');
          var p_2=document.createElement('p');

          var btnRemoveAdmin=document.createElement('button');
          btnRemoveAdmin.classList.add('btn-remove-univ');
          btnRemoveAdmin.innerHTML='-Remove admin'
          p_1.classList.add('p-univ');
          p_2.classList.add('p-univ');

          div_1.classList.add('univ-data');
          div_2.classList.add('univ-data');
          div_3.classList.add('univ-data');

          td_1.classList.add('img-holder');
          td_2.classList.add('data');
          td_3.classList.add('data');
          
          tr.classList.add('data-row');
          tr.id='tr_data_row';
          
          p_1.innerHTML=admin.firstname+' '+admin.lastname;
          p_2.innerHTML=admin.admintype;
          
          div_1.appendChild(p_1);
          div_2.appendChild(p_2);
          div_3.appendChild(btnRemoveAdmin);

          td_1.appendChild(div_1);
          td_2.appendChild(div_2);
          td_3.appendChild(div_3);


          tr.appendChild(td_1);
          tr.appendChild(td_2);
          tr.appendChild(td_3);

          table.appendChild(tr);
        });
        
          console.log(res.Users);
      
    }).catch(error=>console.log(error));

   }