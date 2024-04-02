let width = screen.availWidth;
let bgHeight = screen.availHeight + 400;
const URL = window.location.pathname;



//Side Nav Toggle
if (width <= 644) {
  document.getElementById("navBar").innerHTML = "<i class='fa-solid fa-bars' style='float: left; font-size: 45px; color: white; padding-left: 25px; padding-top: 20px;' onclick='openUp()'></i>";
  document.getElementById("navBar").style.height = "80px";
  document.getElementById("bg").style.maxHeight = bgHeight + "%";
}
console.log(width);

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


//blooket.games/stats.html

if(URL == "/stats.html") {
  if (width <= 644) {
    //Header Font Size
    document.getElementById("mainHeader").style.fontSize = "70px";
    //Stat Boxes Size
    const statBox = document.querySelectorAll(".statTitle");
    i = 0;
    console.log(statBox);
    statBox.forEach(statTitle => {
      statBox[i].style.fontSize = "40px";
      i++
    });

    document.getElementById('statsBoards').style.width = document.querySelector('table').offsetWidth;
  }
}

//blooket.games/index.html

if (width <= 644) {
  if(URL == "/index.html" || URL == "/") {
    //Right Side
    const right = document.querySelectorAll('.rightBoards');
    let i = 0;
    console.log(right);
    right.forEach(rightBoards => {
      right[i].style.marginRight = "auto";
      right[i].style.marginLeft = "auto";
      right[i].style.float = "none";
      i++;
    });

    //Left Side
    const left = document.querySelectorAll('.leftBoards');
    i = 0;
    console.log(left);
    left.forEach(leftBoards => {
      left[i].style.marginRight = "auto";
      left[i].style.marginLeft = "auto";
      left[i].style.float = "none";
      i++;
    });

    
    //Header Font Size
    document.getElementById("mainHeader").style.fontSize = "70px";
    //Stat Boxes Size
    const statBox = document.querySelectorAll(".statTitle");
    i = 0;
    console.log(statBox);
    statBox.forEach(statTitle => {
      statBox[i].style.fontSize = "40px";
      i++
    });


    //Pop Links Size
    const popLink = document.querySelectorAll(".popLinks");
    i = 0;
    console.log(popLink);
    popLink.forEach(popLinks => {
      popLink[i].style.fontSize = "40px";
      i++
    });


    //Info Text Size
    const H3 = document.querySelector("h3");
    console.log(H3);
    H3.style.fontSize = "30px";
    

    //Scale
    const center = document.querySelectorAll(".centerBoards");
    i = 0;
    console.log(center);
    left.forEach(leftBoards => {
      left[i].style.width = "80%";
      i++;
    });
    i = 0;
    right.forEach(rightBoards => {
      right[i].style.width = document.querySelector('table').offsetWidth;
      i++;
    });
    i = 0;
    center.forEach(centerBoards => {
      center[i].style.width = "80%";
      i++;
    });

    //YO Size 
    const YO = document.querySelectorAll('.YO_Text');
    i = 0;
    YO.forEach(YO_Text => {
      YO[i].style.fontSize = "35px";
      i++;
    });
  }
}