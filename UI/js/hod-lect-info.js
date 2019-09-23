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
document.getElementById("btn-back-home").addEventListener('click',() =>{
    window.location.href = '../../html/login.html';
  });

function setLectInfoToElements(){
  document.getElementById("h-lect-names").innerHTML=localStorage.getItem("lectnames");
  document.getElementById("p_lect_address").innerHTML=localStorage.getItem("lectaddress");
  document.getElementById("p_lect_national_id").innerHTML=localStorage.getItem("lectnationalid");
  document.getElementById("p_lect_email").innerHTML=localStorage.getItem("lectemail");
  document.getElementById("p_lect_phone_number").innerHTML=localStorage.getItem("lectphone");
  document.getElementById("p_lect_qualification").innerHTML=localStorage.getItem("lectqualification");
  document.getElementById("p_lect_category").innerHTML=localStorage.getItem("lectcategory");

  var pcvLink=document.getElementById("p_cv_link_holder");
  var pDegreeLink=document.getElementById("p_degree_link_holder")

  pcvLink.href=localStorage.getItem("lectcvpath");
  pcvLink.innerHTML="Open cv";

  pDegreeLink.href=localStorage.getItem("lectqualificationpath");
  pDegreeLink.innerHTML="Open degree";

}
