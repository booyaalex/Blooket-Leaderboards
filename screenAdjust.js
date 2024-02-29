let width = screen.availWidth;
let screenMode = 0;
//0 Is Comp; 1 is Phone; 2 is Big Comp

if (width <= 644) {
  let screenMode = 1;
  document.getElementById("navBar").innerHTML = "<img src='https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552739317jfnbfzzmez.png' alt='Open Side Nav' width='25px' style='float: left; padding-left: 10px; padding-top: 10px;' onclick="openUp()">";
}
console.log(width);
console.log(screenMode);

//Side Navagation
function openUp() {
  document.getElementById("sidenav").style.width = "30%";
  document.body.style.backgroundColor = "rgb(9, 86, 92)";
  
  const link = document.querySelectorAll('.sideLink');
  link.forEach(sideLink => {
  sideLink.style.fontSize = '30px';
});
}

function closeUp() {
  document.getElementById("sidenav").style.width = "0%";
  document.body.style.backgroundColor = "rgb(11, 194, 207)";
  
  const link = document.querySelectorAll('.sideLink');
  link.forEach(sideLink => {
  sideLink.style.fontSize = '0px';
});
}