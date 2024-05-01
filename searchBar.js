function search() {
    const tr = document.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        tr[i].backgroundColor = "#40115f";
    }
    let searchTerm = document.getElementById("searchBar_Input_Bar").value;
        window.location.href = "#" + searchTerm;
        document.getElementById(searchTerm).style.backgroundColor = "#9a49aa";
}