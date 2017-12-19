var siteurl = "http://vantageprojects.biz/hospital_management/index.php?route=";
function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }
  
  function gup(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for(i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}