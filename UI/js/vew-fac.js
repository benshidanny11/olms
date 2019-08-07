function dropdown(){
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
    if (ev.target.getAttribute("class") == "btn-add-fac") {
      window.location.href = '../../html/admin/add-dep.html';
    }
  };

  function getFacultyDta(){
    var table=document.getElementById("table_fac_data");
    fetch('http://localhost:6070/allschools')
      .then(responce => responce.json()).then(res => {
        //res.foreach()
          res.Schools.forEach(function(schol){
            var tr=document.createElement('tr');

            var tdSchoolName=document.createElement('td');
            var tdUniversity=document.createElement('td');
            var tdEmpty=document.createElement('td');
            var tdAddDepartment=document.createElement('td');

            var divSchoolName=document.createElement('div');
            var divUniversity=document.createElement('div');
            var divAddDep=document.createElement('div');

            var pFacName=document.createElement('p');
            var pUniversity=document.createElement('p');

            var buttonAddDep=document.createElement('button');

            tr.classList.add('data-row');

            tdSchoolName.classList.add('img-holder');
            tdUniversity.classList.add('data');
            tdEmpty.classList.add('data');
            tdAddDepartment.classList.add('data');

            divSchoolName.classList.add('univ-data');
            divUniversity.classList.add('univ-data');
            divAddDep.classList.add('add-fac');
            


            pFacName.classList.add('p-nuniv-name');
            pUniversity.classList.add('p-nuniv-name');

            buttonAddDep.classList.add('btn-add-fac');
            buttonAddDep.innerHTML='+Add school';
            
            pFacName.innerHTML=schol.shc_name;
            pUniversity.innerHTML='Kigali Independent university';

           divSchoolName.appendChild(pFacName);
           divUniversity.appendChild(pUniversity);
           divAddDep.appendChild(buttonAddDep)

           tdSchoolName.appendChild(divSchoolName);
           tdUniversity.appendChild(divUniversity);
           tdAddDepartment.appendChild(divAddDep);

           tr.appendChild(tdSchoolName);
           tr.appendChild(tdUniversity);
           tr.appendChild(tdEmpty);
           tr.appendChild(tdAddDepartment);
           table.appendChild(tr);
          });
          
            console.log(res.Schools);
        
      }).catch(error=>console.log(error));
  }