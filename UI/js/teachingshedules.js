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

function getAllShedules(){
  var table=document.getElementById("table_sched_data");
  var lectId=localStorage.getItem('h_lect_id');
  fetch('http://localhost:6070/allschedules')
    .then(responce => responce.json()).then(res => {
      //res.foreach()
        res.Schedules.forEach(function(schedule){
      
          var tr=document.createElement('tr');

          var td_1=document.createElement('td');
          var td_2=document.createElement('td');
          var td_3=document.createElement('td');
          var td_4=document.createElement('td');

          var div_1=document.createElement('div');
          var div_2=document.createElement('div');
          var div_3=document.createElement('div');
          var div_4=document.createElement('div');
       
          var p_1=document.createElement('p');
          var p_2=document.createElement('p');
          var p_3=document.createElement('p');
          
          //var button=document.createElement('input');



          var f = document.createElement("form");
          f.setAttribute('method',"post");
          f.setAttribute('action',"/apply");
          
          //create input element
          var i1 = document.createElement("input");
          i1.type = "text";
          i1.name='courseCode'
          i1.value=schedule.course_code;
          i1.style.display='none';
          
          var i2 = document.createElement("input");
          i2.type = "text";
          i2.value=lectId;
          i2.name='lectId'
          i2.style.display='none';

            var i3 = document.createElement("input");
            i3.type = "text";
            i3.name = "duration";
            i3.value=schedule.duration;
            i3.style.display='none';
          
          //create a button
          var button = document.createElement("input");
          button.type = "submit";
          button.value = "Apply for scedule";
          
          // add all elements to the form
          f.appendChild(i1);
          f.appendChild(i2);
          f.appendChild(i3);
          f.appendChild(button);
          button.classList.add('btn-more');
         
          // button.addEventListener('click',function(){
          //   var formData = new FormData();
          //   formData.append('courseCode', schedule.course_code);
          //   formData.append('lectId',lectId );
          //   formData.append('duration',schedule.duration);

          //   fetch('http://localhost:6070/apply',{
          //     method:'POST',
          //     headers:{
          //       'Accept':'application/json, text/plain, */*',
          //       'content-type':'application/json'
          //     },
          //     body:JSON.stringify(formData)
          //   }).then((res)=>res.json)
          //     .then((data)=>console.log(data));
          // },false);

          tr.classList.add('data-row');
      
           
          td_1.classList.add('data');
          td_2.classList.add('data');
          td_3.classList.add('data');
          td_4.classList.add('data');

          div_1.classList.add('univ-data');
          div_2.classList.add('univ-data');
          div_3.classList.add('univ-data');
          div_4.classList.add('add-fac');


          p_1.classList.add('p-nuniv-name');
          p_2.classList.add('p-nuniv-name');
          p_3.classList.add('p-nuniv-name');

         
          p_1.innerHTML=schedule.course_code;
          p_2.innerHTML=schedule.course_name;
          p_3.innerHTML=schedule.duration;
          

         div_1.appendChild(p_1);
         div_2.appendChild(p_2);
         div_3.appendChild(p_3);
         div_4.appendChild(f);

         td_1.appendChild(div_1);
         td_2.appendChild(div_2);
         td_3.appendChild(div_3);
         td_4.appendChild(div_4);


         tr.appendChild(td_1);
         tr.appendChild(td_2);
         tr.appendChild(td_3);
         tr.appendChild(td_4);

        table.appendChild(tr);
        });
        
          console.log(res.Lecturers);
      
    }).catch(error=>console.log(error));
}
function sendApplication(applicationData){
  fetch('http://localhost:6070/apply',{
    method:'POST',
    headers:{
      'Accept':'application/json, text/plain, */*',
      'content-type':'application/json'
    },
    body:JSON.stringify(applicationData)
  }).then((res)=>res.json)
    .then((data)=>console.log(data));
}