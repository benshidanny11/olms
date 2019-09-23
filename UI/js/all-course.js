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
    window.location.href = '../../html/login.html';
});
document.body.onclick = function (ev) {
  if (ev.target.getAttribute("class") == "btn-more") {
    window.location.href = '../../html/hod/post-shcedule.html';
  }
  };

  function getCourceInfo(){
    var hodId=localStorage.getItem("hod_id");
    var table=document.getElementById("table_cource_data");
    fetch('http://localhost:6070/allcourcesforhod/'+hodId)
      .then(responce => responce.json()).then(res => {
        //res.foreach()
          res.Cources.forEach(function(cource){
            var tr=document.createElement('tr');
  
            var tdSchoolName=document.createElement('td');
            var tdDepname=document.createElement('td');
            var tdButtonHolder=document.createElement('td');
            var tdAddDepartment=document.createElement('td');
  
            var divSchoolName=document.createElement('div');
            var divUniversity=document.createElement('div');
            var divAddDep=document.createElement('div');
            var divBtnHoldder=document.createElement('div');
         
            var pFacName=document.createElement('p');
            var pDepName=document.createElement('p');
            var pCourceDepartment=document.createElement('p');

            var button=document.createElement('button');

            button.classList.add('btn-more')
            button.innerHTML='Add to schedule';

            tr.classList.add('data-row');
             
            tdDepname.classList.add('img-holder');
            tdSchoolName.classList.add('data');
            tdButtonHolder.classList.add('data');
            tdAddDepartment.classList.add('data');
            tdButtonHolder.classList.add('data')
  
            divSchoolName.classList.add('univ-data');
            divUniversity.classList.add('univ-data');
            divAddDep.classList.add('univ-data');
            divBtnHoldder.classList.add('add-fac');
  
  
            pFacName.classList.add('p-nuniv-name');
            pDepName.classList.add('p-nuniv-name');
            pCourceDepartment.classList.add('p-nuniv-name');
  
          
            
            pDepName.innerHTML=cource.course_code;
            pFacName.innerHTML=cource.course_name;
            pCourceDepartment.innerHTML=cource.dep_name;
            
  
           divSchoolName.appendChild(pFacName);
           divUniversity.appendChild(pDepName);
           divAddDep.appendChild(pCourceDepartment);
           divBtnHoldder.appendChild(button);
  
           tdSchoolName.appendChild(divSchoolName);
           tdDepname.appendChild(divUniversity);
           tdAddDepartment.appendChild(divAddDep);
           tdButtonHolder.appendChild(divBtnHoldder);
           tr.appendChild(tdDepname);
           tr.appendChild(tdSchoolName);
           tr.appendChild(tdAddDepartment);
           tr.appendChild(tdButtonHolder);
           table.appendChild(tr);
          });
          
            console.log(res.Cources);
        
      }).catch(error=>console.log(error));
  }
  
