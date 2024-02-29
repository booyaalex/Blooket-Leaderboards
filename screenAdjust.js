let width = screen.availWidth;
let screenMode = 0;
//0 Is Comp; 1 is Phone; 2 is Big Comp

if (width <= 644) {
  let screenMode = 1;
  document.getElementById("navBar").innerHTML = "<img src='https://lh3.googleusercontent.com/proxy/nuaDFn2Ojkdp06IyDsndr3sHAzouIin_G7JDnjpwyJ96pnGhS3v_uP-swmbhU4TNZC5pyGYWOrzOsxhVO2beaqPhfsRtPAsK9no' alt='Open Side Nav' width='25px' style='float: left; padding-left: 25px; padding-top: 20px;' onclick='openUp()'>";
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
