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
if (ev.target.getAttribute("class") == "btn-add-level") {
  window.location.href = '../../html/admin/add-course.html';
}
};

function getCourceInfo(){
  var table=document.getElementById("table_cource_data");
  fetch('http://localhost:6070/allcources')
    .then(responce => responce.json()).then(res => {
      //res.foreach()
        res.Cources.forEach(function(cource){
          var tr=document.createElement('tr');

          var tdSchoolName=document.createElement('td');
          var tdDepname=document.createElement('td');
          var tdEmpty=document.createElement('td');
          var tdAddDepartment=document.createElement('td');

          var divSchoolName=document.createElement('div');
          var divUniversity=document.createElement('div');
          var divAddDep=document.createElement('div');

          var pFacName=document.createElement('p');
          var pDepName=document.createElement('p');
          var pCourceDepartment=document.createElement('p');

          tr.classList.add('data-row');

          tdDepname.classList.add('img-holder');
          tdSchoolName.classList.add('data');
          tdEmpty.classList.add('data');
          tdAddDepartment.classList.add('data');

          divSchoolName.classList.add('univ-data');
          divUniversity.classList.add('univ-data');
          divAddDep.classList.add('add-fac');
          


          pFacName.classList.add('p-nuniv-name');
          pDepName.classList.add('p-nuniv-name');
          pCourceDepartment.classList.add('p-nuniv-name');

        
          
          pDepName.innerHTML=cource.course_code;
          pFacName.innerHTML=cource.course_name;
          pCourceDepartment.innerHTML=cource.dep_name;
          

         divSchoolName.appendChild(pFacName);
         divUniversity.appendChild(pDepName);
         divAddDep.appendChild(pCourceDepartment)

         tdSchoolName.appendChild(divSchoolName);
         tdDepname.appendChild(divUniversity);
         tdAddDepartment.appendChild(divAddDep);

         tr.appendChild(tdDepname);
         tr.appendChild(tdSchoolName);
         tr.appendChild(tdEmpty);
         tr.appendChild(tdAddDepartment);
         table.appendChild(tr);
        });
        
          console.log(res.Cources);
      
    }).catch(error=>console.log(error));
}