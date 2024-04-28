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
  document.getElementById("sidenav").style.width = "40%";
  
  const link = document.querySelectorAll('.sideLink');
  link.forEach(sideLink => {
    sideLink.style.fontSize = '60px';
    sideLink.style.visibility = 'visible';
  });
}

function closeUp() {
  document.getElementById("sidenav").style.width = "0%";
  
  const link = document.querySelectorAll('.sideLink');
  link.forEach(sideLink => {
  sideLink.style.fontSize = '0px';
  sideLink.style.visibility = 'hidden';
});
}


//blooket.games/stats

if(URL == "/stats") {
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

//blooket.games/index

if (width <= 644) {
  if(URL == "/index" || URL == "/") {
    //Right Side
    const Right = document.querySelectorAll('.right');
    let i = 0;
    console.log(Right);
    Right.forEach(right => {
      Right[i].style.marginRight = "auto";
      Right[i].style.marginLeft = "auto";
      Right[i].style.float = "none";
      i++;
    });

    //Left Side
    const Left = document.querySelectorAll('.left');
    i = 0;
    console.log(Left);
    Left.forEach(left => {
      Left[i].style.marginRight = "auto";
      Left[i].style.marginLeft = "auto";
      Left[i].style.float = "none";
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
    const Center = document.querySelectorAll(".center");
    i = 0;
    console.log(Center);
    Left.forEach(left => {
      Left[i].style.width = "80%";
      i++;
    });
    i = 0;
    Right.forEach(right => {
      Right[i].style.width = document.querySelector('table').offsetWidth;
      i++;
    });
    i = 0;
    Center.forEach(center => {
      Center[i].style.width = "80%";
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