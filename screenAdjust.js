let width = screen.availWidth;
let screenMode = 0;
//0 Is Comp; 1 is Phone; 2 is Big Comp

if (width <= 644) {
  let screenMode = 1;
  document.getElementById("navBar").innerHTML = "";
}
console.log(width);
console.log(screenMode);

//Side Navagation
function openUp() {
  document.getElementById("sidenav").style.width = "30%";
  document.getElementById("sidenav").style.border = "solid 10px";
}
