function search() {
    let searchTerm = document.getElementById("searchBar_Input_Bar").value;
    window.location.href = "#" + searchTerm;
    document.getElementById(searchTerm).style.backgroundColor = "#9a49aa";
}