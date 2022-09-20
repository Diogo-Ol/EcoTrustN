function openTabsConteudoFuncionalidades2(event, nomeTab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent__conteudo2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks__conteudo__funcionalidades2");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active__conteudo__funcionalidades", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nomeTab).style.display = "flex";
    event.currentTarget.className += " active__conteudo__funcionalidades";


}
document.getElementById("defaultOpenConteudo2").click()