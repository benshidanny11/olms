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

document.getElementById("btn-send-schedule").addEventListener('click',() =>{
  window.location.href = '../../html/hod/send-spec-schedule.html';
});
document.getElementById("btn-back-home").addEventListener('click',() =>{
    window.location.href = '../../html/login.html';
  });

