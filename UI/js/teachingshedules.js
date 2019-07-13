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
    window.location.href = '../../html/lecturer/dashboard.html';
});