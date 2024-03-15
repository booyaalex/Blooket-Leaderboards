let width = screen.availWidth;
let screenMode = 0;
let bgHeight = screen.availHeight + 400;
var URL = "window.location.href";
//0 Is Comp; 1 is Phone; 2 is Big Comp


//Side Nav Toggle
if (width <= 644) {
  let screenMode = 1;
  document.getElementById("navBar").innerHTML = "<i class='fa-solid fa-bars' style='float: left; font-size: 35px; color: white; padding-left: 25px; padding-top: 20px;' onclick='openUp()'></i>";
  document.getElementById("bg").style.maxHeight = bgHeight + "%";
}
console.log(width);
console.log(screenMode);

//Side Navagation
function openUp() {
  document.getElementById("sidenav").style.width = "30%";
  document.getElementById('bgContain').style.backgroundColor = "rgb(9, 86, 92)";
  
  const link = document.querySelectorAll('.sideLink');
  link.forEach(sideLink => {
  sideLink.style.fontSize = '45px';
});
}

function closeUp() {
  document.getElementById("sidenav").style.width = "0%";
  document.getElementById('bgContain').style.backgroundColor = "rgb(11, 194, 207)";
  
  const link = document.querySelectorAll('.sideLink');
  link.forEach(sideLink => {
  sideLink.style.fontSize = '0px';
});
}


//blooket.games/gamemodes

if(URL = "https://blooket.games/gamemode.html") {
  document.getElementById('popBoards').style.width = document.querySelector('table').offsetWidth;
} else if(URL = "https://blooket.games/index.html") {
  document.getElementById('popBoards').style.width = "45%";
}