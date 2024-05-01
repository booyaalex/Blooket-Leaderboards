/*
function search() {
    const tr = document.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        tr[i].style.backgroundColor = "#40115f";
    }
    let searchTerm = document.getElementById("searchBar_Input_Bar").value;
    window.location.href = "#" + searchTerm;
    document.getElementById(searchTerm).style.backgroundColor = "#9a49aa";
}
*/
function search() {
    const tr = document.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        tr[i].style.backgroundColor = "#40115f";
    }
    
    let temp = document.getElementById("searchBar_Input_Bar").value
    let searchTerm = temp.replace(/\s/g, '');
    const search = document.getElementById(searchTerm);
    const navBar = document.getElementById("navBar");

    let yBlockOffset = $("#" + searchTerm).offset().top;
    let headerHeight = $("#navBar").height();
    let margins = parseInt($("#" + searchTerm).css('margin-top'));
    const screenHeight = screen.height / 2;
    let totalScroll = (yBlockOffset - headerHeight - margins) + screenHeight;

    document.getElementById(searchTerm).style.backgroundColor = "#9a49aa";

    $('html, body').animate({
        scrollTop: totalScroll
    }, 1000);

    e.preventDefault();
}

function test() {
    $(".statTitleLB").hide();
}
