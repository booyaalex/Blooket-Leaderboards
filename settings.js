//Set Theme
function blooket() {
    localStorage.setItem("Theme", "Blooket");
    changeTheme();
}
function blacket() {
    localStorage.setItem("Theme", "Blacket");
    changeTheme();
}
function triangulet() {
    localStorage.setItem("Theme", "Triangulet");
    changeTheme();
}
function catchet() {
    localStorage.setItem("Theme", "Catchet");
    changeTheme();
}

changeTheme();

//Change Theme
function changeTheme() {
    let theme = localStorage.getItem("Theme");

    //Set Colors
    let navBarBG;
    let navShadow;

    let bgImage;
    let bgColor;

    let yoBorder;
    let yoColor1;
    let yoColor2;

    let boardColor;

    let statBoxColor;
    let statBoxHover;

    let sideNavBG;


    if(theme == "Blooket") {
        navBarBG = "#9a49aa";
        navShadow = "rgba(128, 60, 140, 1)";
        bgImage = "https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png";
        bgColor = "#0bc2cf";
        yoBorder = "#ef7426";
        yoColor1 = "#fcd843";
        yoColor2 = "#feb31a";
        boardColor = "#40115f";
        statBoxColor = "#9a49aa";
        statBoxHover = "rgba(128, 60, 140, 1)";
        sideNavBG = "#80049c";
    }
    if(theme == "Blacket") {
        navBarBG = "#2f2f2f";
        navShadow = "#3f3f3f";
        bgImage = "https://blacket.org/content/background.png";
        bgColor = "#4f4f4f";
        yoBorder = "";
        yoColor1 = "#2f2f2f";
        yoColor2 = "#2f2f2f";
        boardColor = "#2f2f2f";
        statBoxColor = "#4f4f4f";
        statBoxHover = "rgba(60, 60, 60, 1)";
        sideNavBG = "#3f3f3f";
    }
    if(theme == "Triangulet") {
        navBarBG = "#9a49aa";
        navShadow = "rgba(128, 60, 140, 1)";
        bgImage = "https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png";
        bgColor = "#37a83f"; //Done
        yoBorder = "#ef7426";
        yoColor1 = "#fcd843";
        yoColor2 = "#feb31a";
        boardColor = "#40115f";
        statBoxColor = "#9a49aa";
        statBoxHover = "rgba(128, 60, 140, 1)";
        sideNavBG = "#80049c";
    }
    if(theme == "Catchet") {
        navBarBG = "#1f0d5c"; //Done
        navShadow = "#0e0244";
        bgImage = "https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png";
        bgColor = "#2e1386"; //Done
        yoBorder = "#0e0244"; //Done
        yoColor1 = "#3e28a2"; //Done
        yoColor2 = "#17308d"; //Done
        boardColor = "#1f0d5c"; //Done
        statBoxColor = "#9a49aa"; //Done
        statBoxHover = "rgba(128, 60, 140, 1)"; //Done
        sideNavBG = "#0e0244"; //Done
    }
    
    //Change NavBar
    document.getElementById("navBar").style.backgroundColor = navBarBG;
    document.getElementById("navBar").style.boxShadow = "0px 0px 0px 10px " + navShadow;

    //Change BG
    document.getElementById("bg").style.backgroundImage = "url('" + bgImage + "')";
    document.getElementById("bgContain").style.backgroundColor = bgColor;

    //Change YO_Container
    


const forLoop1 = document.getElementsByClassName("YO_Text");

    for(let i = 0; i < forLoop1.length; i++) {
        if(theme == "Blacket") {
            forLoop1[i].style.borderColor = "transparent";
        } else {
            forLoop1[i].style.borderColor = yoBorder;
        }
        
        forLoop1[i].style.background = "linear-gradient(" + yoColor1 + ", " + yoColor1 + " 50%, " + yoColor2 + " 50.01%, " + yoColor2 + ")";
    }

    //Change Boards
    const forLoop2 = document.getElementsByClassName("centerBoards");
    const forLoop3 = document.getElementsByClassName("leftBoards");
    const forLoop4 = document.getElementsByClassName("rightBoards");
    const forLoop5 = document.getElementsByClassName("tinyLeftBoards");
    const forLoop6 = document.getElementsByClassName("tinyRightBoards");

    for(let i = 0; i < forLoop2.length; i++) {
        forLoop2[i].style.backgroundColor = boardColor;
    }
    for(let i = 0; i < forLoop3.length; i++) {
        forLoop3[i].style.backgroundColor = boardColor;
    }
    for(let i = 0; i < forLoop4.length; i++) {
        forLoop4[i].style.backgroundColor = boardColor;
    }
    for(let i = 0; i < forLoop5.length; i++) {
        forLoop5[i].style.backgroundColor = boardColor;
    }
    for(let i = 0; i < forLoop6.length; i++) {
        forLoop6[i].style.backgroundColor = boardColor;
    }

    const forLoop9 = document.getElementsByName("div");
    for(let i = 0; i < forLoop9.length; i++){
        if(forLoop9[i].id == "mainBoard") {
            forLoop[i].style.backgroundColor = boardColor;
        }
        if(forLoop9[i].id == "infoBoard") {
            forLoop[i].style.backgroundColor = boardColor;
        }
        if(forLoop9[i].id == "submissionBoard") {
            forLoop[i].style.backgroundColor = boardColor;
        }
    }

    //Change Stat Boxes
    const forLoop7 = document.getElementsByClassName("statsBox");
    const forLoop8 = document.getElementsByClassName("statsBoxLB");

    for(let i = 0; i < forLoop7.length; i++) {
        if(theme == "Catchet") {
            forLoop7[i].style.background = "linear-gradient(145deg, #783bf2, #4505b3)";
        } else {
            forLoop7[i].style.backgroundColor = statBoxColor;
        }
        
    }
    for(let i = 0; i < forLoop8.length; i++) {
        if(theme == "Catchet") {
            forLoop8[i].style.background = "linear-gradient(145deg, #783bf2, #4505b3)";
        } else {
            forLoop8[i].style.backgroundColor = statBoxColor;
        }
    }

    //Change Side Nav
    document.getElementById("sideNav").style.backgroundColor = sideNavBG;
}