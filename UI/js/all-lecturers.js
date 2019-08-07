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
if (ev.target.getAttribute("class") == "btn-more") {
  window.location.href = '../../html/admin/aboutlecturers.html';
}
};

function getLecturerData(){
  var table =document.getElementById('table_lect_data');
      fetch('http://localhost:6070/alllecturers')
      .then(responce => responce.json()).then(res => {
        //res.foreach()
          res.Lecturers.forEach(function(lecture){
            var tr=document.createElement('tr');

            var tdNames=document.createElement('td');
            var tdEmail=document.createElement('td');
            var tdAddress=document.createElement('td');
            var tdStatus=document.createElement('td');
            var tdMore=document.createElement('td');

            var divName=document.createElement('div');
            var divEmail=document.createElement('div');
            var divAdrress=document.createElement('div');
            var divStatus=document.createElement('div');
            var divViewMore=document.createElement('div');

            var pNames=document.createElement('p');
            var pEmail=document.createElement('p');
            var pAddress=document.createElement('p');
            var pStatus=document.createElement('p');

            var buttonViewMore=document.createElement('button');

            tr.classList.add('data-row');

            tdNames.classList.add('data');
            tdEmail.classList.add('data');
            tdAddress.classList.add('data');
            tdStatus.classList.add('data');
            tdMore.classList.add('data');

            divName.classList.add('univ-data');
            divAdrress.classList.add('univ-data');
            divStatus.classList.add('univ-data');
            divEmail.classList.add('univ-data');
            divViewMore.classList.add('add-fac');


            pNames.classList.add('p-nuniv-name');
            pEmail.classList.add('p-nuniv-name');
            pAddress.classList.add('p-nuniv-name');
            pStatus.classList.add('p-nuniv-name');

            buttonViewMore.classList.add('btn-more');
            buttonViewMore.innerHTML='View more';
            
            pNames.innerHTML=lecture.fname+' '+lecture.lname;
            pEmail.innerHTML=lecture.email;
            pAddress.innerHTML=lecture.address;
            pStatus.innerHTML=lecture.status
           
           divName.appendChild(pNames);
           divEmail.appendChild(pEmail);
           divAdrress.appendChild(pAddress)
           divStatus.appendChild(pStatus);
           divViewMore.appendChild(buttonViewMore);

           tdNames.appendChild(divName);
           tdEmail.appendChild(divEmail);
           tdAddress.appendChild(divAdrress);
           tdStatus.appendChild(divStatus);
           tdMore.appendChild(divViewMore);

           tr.appendChild(tdNames);
           tr.appendChild(tdEmail);
           tr.appendChild(tdAddress);
           tr.appendChild(tdStatus);
           tr.appendChild(tdMore);
           table.appendChild(tr);
          });
          
            console.log(res.Lecturers);
        
      }).catch(error=>console.log(error));
}

