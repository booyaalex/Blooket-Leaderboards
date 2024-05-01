function search() {
    const tr = document.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        tr[i].style.backgroundColor = "#40115f";
    }
    let searchTerm = document.getElementById("searchBar_Input_Bar").value;
    window.location.href = "#" + searchTerm;
    document.getElementById(searchTerm).style.backgroundColor = "#9a49aa";
}

$(function() {
    let searchTerm = document.getElementById("searchBar_Input_Bar").value;
    $("#searchBar_Button").on("click", (e) => {
      let yBlockOffset = $("#" + searchTerm).offset().top;
      let headerHeight = $("#navBar").height();
      let margins = parseInt($("#" + searchTerm).css('margin-top'));
      let totalScroll = yBlockOffset - headerHeight - margins;
  
      $('html, body').animate({
          scrollTop: totalScroll
      }, 1000);
  
      e.preventDefault();
    });
   });