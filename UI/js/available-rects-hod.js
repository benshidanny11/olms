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
  window.location.href = '../../html/hod/aboutverifiedlects.html';
}
};

function getAvailableLecturers(){
  var hodId=localStorage.getItem("hod_id");
  var table=document.getElementById("table_lect_data");
  fetch('http://localhost:6070/verifiedlecturers/'+hodId)
    .then(responce => responce.json()).then(res => {
      //res.foreach()
        res.Lecturers.forEach(function(lecturer){
          var tr=document.createElement('tr');

          var td_1=document.createElement('td');
          var td_2=document.createElement('td');
          var td_3=document.createElement('td');
          var td_4=document.createElement('td');
          var td_5=document.createElement('td');

          var div_1=document.createElement('div');
          var div_2=document.createElement('div');
          var div_3=document.createElement('div');
          var div_4=document.createElement('div');
          var div_5=document.createElement('div');
       
          var p_1=document.createElement('p');
          var p_2=document.createElement('p');
          var p_3=document.createElement('p');
          var p_4=document.createElement('p');

          var button=document.createElement('button');

          button.classList.add('btn-more')
          button.innerHTML='View more';

          tr.classList.add('data-row');
           
          td_1.classList.add('data');
          td_2.classList.add('data');
          td_3.classList.add('data');
          td_4.classList.add('data');
          td_5.classList.add('data')

          div_1.classList.add('univ-data');
          div_2.classList.add('univ-data');
          div_3.classList.add('univ-data');
          div_4.classList.add('univ-data');
          div_5.classList.add('add-fac');


          p_1.classList.add('p-nuniv-name');
          p_2.classList.add('p-nuniv-name');
          p_3.classList.add('p-nuniv-name');
          p_4.classList.add('p-nuniv-name');

         
          p_1.innerHTML=`${lecturer.fname} ${lecturer.lname}`;
          p_2.innerHTML=lecturer.email;
          p_3.innerHTML=lecturer.address;
          p_4.innerHTML=lecturer.status;
          

         div_1.appendChild(p_1);
         div_2.appendChild(p_2);
         div_3.appendChild(p_3);
         div_4.appendChild(p_4);
         div_5.appendChild(button);

         td_1.appendChild(div_1);
         td_2.appendChild(div_2);
         td_3.appendChild(div_3);
         td_4.appendChild(div_4);
         td_5.appendChild(div_5);


         tr.appendChild(td_1);
         tr.appendChild(td_2);
         tr.appendChild(td_3);
         tr.appendChild(td_4);
         tr.appendChild(td_5);

        table.appendChild(tr);
        });
        
          console.log(res.Lecturers);
      
    }).catch(error=>console.log(error));
}