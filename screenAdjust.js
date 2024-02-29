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
  document.body.style.backgroundColor = "rgb(9, 86, 92)";
  
  const link = document.querySelectorAll('.sideLink');
  link.forEach(sideLink => {
  sideLink.style.fontSize = '30px';
});
}
