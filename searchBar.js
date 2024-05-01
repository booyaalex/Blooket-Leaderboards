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
    let searchTerm = document.getElementById("searchBar_Input_Bar").value;
    const search = document.getElementById(searchTerm);
    const navBar = document.getElementById("navBar");

    let yBlockOffset = search.offset().top;
    let headerHeight = navBar.height();
    let margins = parseInt(search.css('margin-top'));
    let totalScroll = yBlockOffset - headerHeight - margins;

    body.animate({
        scrollTop: totalScroll
    }, 1000);

    e.preventDefault();
}